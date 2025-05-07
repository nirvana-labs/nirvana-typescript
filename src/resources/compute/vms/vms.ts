// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as OperationsAPI from '../../operations';
import * as Shared from '../../shared';
import * as OSImagesAPI from './os-images';
import { OSImageListResponse, OSImages } from './os-images';
import * as VolumesAPI from './volumes';
import { Volumes } from './volumes';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class VMs extends APIResource {
  volumes: VolumesAPI.Volumes = new VolumesAPI.Volumes(this._client);
  osImages: OSImagesAPI.OSImages = new OSImagesAPI.OSImages(this._client);

  /**
   * Create a VM
   *
   * @example
   * ```ts
   * const operation = await client.compute.vms.create({
   *   boot_volume: { size: 100 },
   *   cpu_config: { vcpu: 2 },
   *   memory_config: { size: 2 },
   *   name: 'my-vm',
   *   os_image_name: 'ubuntu-noble-2025-04-03',
   *   public_ip_enabled: true,
   *   region: 'us-wdc-1',
   *   ssh_key: {
   *     public_key:
   *       'ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAAAgQDJiJabIUkXw7VrQG+yBohvhEsyoKEYvejZc4RFzV5maybqQei1punVsoe4r6gJttMM1Gr3cNr3OfepikCQAhAchw5ww94ZWqDsDYIqMrlDFbqhGTXDNzFAjeVIKptCOlz9k+7aM69YtLXJ6gFUCq1fbK9PjY+AK28UpMfKYUcyHQ== noname',
   *   },
   *   subnet_id: '123e4567-e89b-12d3-a456-426614174000',
   * });
   * ```
   */
  create(body: VMCreateParams, options?: RequestOptions): APIPromise<OperationsAPI.Operation> {
    return this._client.post('/v1/compute/vms', { body, ...options });
  }

  /**
   * Update a VM
   *
   * @example
   * ```ts
   * const operation = await client.compute.vms.update('vm_id');
   * ```
   */
  update(vmID: string, body: VMUpdateParams, options?: RequestOptions): APIPromise<OperationsAPI.Operation> {
    return this._client.patch(path`/v1/compute/vms/${vmID}`, { body, ...options });
  }

  /**
   * List all VMs
   *
   * @example
   * ```ts
   * const vmList = await client.compute.vms.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<VMList> {
    return this._client.get('/v1/compute/vms', options);
  }

  /**
   * Delete a VM
   *
   * @example
   * ```ts
   * const operation = await client.compute.vms.delete('vm_id');
   * ```
   */
  delete(vmID: string, options?: RequestOptions): APIPromise<OperationsAPI.Operation> {
    return this._client.delete(path`/v1/compute/vms/${vmID}`, options);
  }

  /**
   * Get details about a VM
   *
   * @example
   * ```ts
   * const vm = await client.compute.vms.get('vm_id');
   * ```
   */
  get(vmID: string, options?: RequestOptions): APIPromise<VM> {
    return this._client.get(path`/v1/compute/vms/${vmID}`, options);
  }
}

/**
 * CPU configuration for the VM.
 */
export interface CPUConfig {
  /**
   * Number of virtual CPUs.
   */
  vcpu: number;
}

/**
 * Memory configuration for the VM.
 */
export interface MemoryConfig {
  /**
   * Size of the memory in GB.
   */
  size: number;
}

/**
 * OS Image details.
 */
export interface OSImage {
  /**
   * When the OS Image was created.
   */
  created_at: string;

  /**
   * Display name of the OS Image.
   */
  display_name: string;

  /**
   * Name of the OS Image.
   */
  name: string;
}

/**
 * Public SSH key configuration for the VM.
 */
export interface SSHKey {
  /**
   * Public key to and and use to access the VM.
   */
  public_key: string;
}

/**
 * VM details.
 */
export interface VM {
  /**
   * Unique identifier for the VM.
   */
  id: string;

  /**
   * ID of the boot volume attached to the VM.
   */
  boot_volume_id: string;

  /**
   * CPU configuration for the VM.
   */
  cpu_config: CPUConfig;

  /**
   * When the VM was created.
   */
  created_at: string;

  /**
   * IDs of the data volumes attached to the VM.
   */
  data_volume_ids: Array<string>;

  /**
   * Memory configuration for the VM.
   */
  memory_config: MemoryConfig;

  /**
   * Name of the VM.
   */
  name: string;

  /**
   * Private IP of the VM.
   */
  private_ip: string | null;

  /**
   * Public IP of the VM.
   */
  public_ip: string | null;

  /**
   * Region the resource is in.
   */
  region: Shared.RegionName;

  /**
   * Status of the resource.
   */
  status: Shared.ResourceStatus;

  /**
   * ID of the subnet the VM is in.
   */
  subnet_id: string;

  /**
   * When the VM was updated.
   */
  updated_at: string;

  /**
   * ID of the VPC the VM is in.
   */
  vpc_id: string;

  /**
   * Name of the VPC the VM is in.
   */
  vpc_name: string;
}

export interface VMList {
  items: Array<VM>;
}

export interface VMCreateParams {
  /**
   * Boot volume for the VM.
   */
  boot_volume: VMCreateParams.BootVolume;

  /**
   * CPU configuration for the VM.
   */
  cpu_config: CPUConfig;

  /**
   * Memory configuration for the VM.
   */
  memory_config: MemoryConfig;

  /**
   * Name of the VM.
   */
  name: string;

  /**
   * Name of the OS Image to use for the VM.
   */
  os_image_name: string;

  /**
   * Whether to enable public IP for the VM.
   */
  public_ip_enabled: boolean;

  /**
   * Region the resource is in.
   */
  region: Shared.RegionName;

  /**
   * Public SSH key configuration for the VM.
   */
  ssh_key: SSHKey;

  /**
   * ID of the subnet to use for the VM.
   */
  subnet_id: string;

  /**
   * Data volumes for the VM.
   */
  data_volumes?: Array<VMCreateParams.DataVolume>;
}

export namespace VMCreateParams {
  /**
   * Boot volume for the VM.
   */
  export interface BootVolume {
    /**
     * Size of the volume in GB.
     */
    size: number;
  }

  /**
   * VM data volume create request.
   */
  export interface DataVolume {
    /**
     * Name of the volume.
     */
    name: string;

    /**
     * Size of the volume in GB.
     */
    size: number;
  }
}

export interface VMUpdateParams {
  /**
   * CPU configuration for the VM.
   */
  cpu_config?: CPUConfig;

  /**
   * Memory configuration for the VM.
   */
  memory_config?: MemoryConfig;

  /**
   * Name of the VM.
   */
  name?: string;

  /**
   * Whether to enable public IP for the VM.
   */
  public_ip_enabled?: boolean;
}

VMs.Volumes = Volumes;
VMs.OSImages = OSImages;

export declare namespace VMs {
  export {
    type CPUConfig as CPUConfig,
    type MemoryConfig as MemoryConfig,
    type OSImage as OSImage,
    type SSHKey as SSHKey,
    type VM as VM,
    type VMList as VMList,
    type VMCreateParams as VMCreateParams,
    type VMUpdateParams as VMUpdateParams,
  };

  export { Volumes as Volumes };

  export { OSImages as OSImages, type OSImageListResponse as OSImageListResponse };
}
