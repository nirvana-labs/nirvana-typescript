// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as OperationsAPI from '../../operations/operations';
import * as AvailabilityAPI from './availability';
import { Availability, AvailabilityCreateParams, AvailabilityUpdateParams } from './availability';
import * as OSImagesAPI from './os-images';
import { OSImageListParams, OSImages } from './os-images';
import * as VolumesAPI from './volumes';
import { VolumeListParams, Volumes } from './volumes';
import * as VolumesVolumesAPI from '../volumes/volumes';
import { APIPromise } from '../../../core/api-promise';
import { Cursor, type CursorParams, PagePromise } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class VMs extends APIResource {
  availability: AvailabilityAPI.Availability = new AvailabilityAPI.Availability(this._client);
  volumes: VolumesAPI.Volumes = new VolumesAPI.Volumes(this._client);
  osImages: OSImagesAPI.OSImages = new OSImagesAPI.OSImages(this._client);

  /**
   * Create a VM
   *
   * @example
   * ```ts
   * const operation = await client.compute.vms.create({
   *   boot_volume: { size: 100, type: 'nvme' },
   *   cpu_config: { vcpu: 2 },
   *   memory_config: { size: 2 },
   *   name: 'my-vm',
   *   os_image_name: 'ubuntu-noble-2025-10-01',
   *   project_id: '123e4567-e89b-12d3-a456-426614174000',
   *   public_ip_enabled: true,
   *   region: 'us-wdc-1',
   *   ssh_key: {
   *     public_key:
   *       'ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIDBIASkmwNiLcdlW6927Zjt1Hf7Kw/PpEZ4Zm+wU9wn2',
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
   * // Automatically fetches more pages as needed.
   * for await (const vm of client.compute.vms.list({
   *   project_id: 'project_id',
   * })) {
   *   // ...
   * }
   * ```
   */
  list(query: VMListParams, options?: RequestOptions): PagePromise<VMsCursor, VM> {
    return this._client.getAPIList('/v1/compute/vms', Cursor<VM>, { query, ...options });
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

  /**
   * Restart a VM
   *
   * @example
   * ```ts
   * const operation = await client.compute.vms.restart('vm_id');
   * ```
   */
  restart(vmID: string, options?: RequestOptions): APIPromise<OperationsAPI.Operation> {
    return this._client.post(path`/v1/compute/vms/${vmID}/restart`, options);
  }
}

export type VMsCursor = Cursor<VM>;

export type OSImagesCursor = Cursor<OSImage>;

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
 * CPU configuration for the VM.
 */
export interface CPUConfigRequest {
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
 * Memory configuration for the VM.
 */
export interface MemoryConfigRequest {
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
export interface SSHKeyRequest {
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
   * Project ID the VM belongs to.
   */
  project_id: string;

  /**
   * Public IP of the VM.
   */
  public_ip: string | null;

  /**
   * Whether the public IP is enabled for the VM.
   */
  public_ip_enabled: boolean;

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
   * Tags to attach to the VM.
   */
  tags: Array<string>;

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

  /**
   * Pagination response details.
   */
  pagination: Shared.Pagination;
}

export interface VMCreateParams {
  /**
   * Boot volume for the VM.
   */
  boot_volume: VMCreateParams.BootVolume;

  /**
   * CPU configuration for the VM.
   */
  cpu_config: CPUConfigRequest;

  /**
   * Memory configuration for the VM.
   */
  memory_config: MemoryConfigRequest;

  /**
   * Name of the VM.
   */
  name: string;

  /**
   * Name of the OS Image to use for the VM.
   */
  os_image_name: string;

  /**
   * Project ID to create the VM in.
   */
  project_id: string;

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
  ssh_key: SSHKeyRequest;

  /**
   * ID of the subnet to use for the VM.
   */
  subnet_id: string;

  /**
   * Data volumes for the VM.
   */
  data_volumes?: Array<VMCreateParams.DataVolume>;

  /**
   * Tags to attach to the VM.
   */
  tags?: Array<string>;
}

export namespace VMCreateParams {
  /**
   * Boot volume for the VM.
   */
  export interface BootVolume {
    /**
     * Size of the Volume in GB.
     */
    size: number;

    /**
     * Type of the Volume.
     */
    type: VolumesVolumesAPI.VolumeType;

    /**
     * Tags to attach to the Volume.
     */
    tags?: Array<string>;
  }

  /**
   * VM data volume create request.
   */
  export interface DataVolume {
    /**
     * Name of the Volume.
     */
    name: string;

    /**
     * Size of the Volume in GB.
     */
    size: number;

    /**
     * Type of the Volume.
     */
    type: VolumesVolumesAPI.VolumeType;

    /**
     * Tags to attach to the Volume.
     */
    tags?: Array<string>;
  }
}

export interface VMUpdateParams {
  /**
   * CPU configuration for the VM.
   */
  cpu_config?: CPUConfigRequest;

  /**
   * Memory configuration for the VM.
   */
  memory_config?: MemoryConfigRequest;

  /**
   * Name of the VM.
   */
  name?: string;

  /**
   * Whether to enable public IP for the VM.
   */
  public_ip_enabled?: boolean;

  /**
   * Tags to attach to the VM.
   */
  tags?: Array<string>;
}

export interface VMListParams extends CursorParams {
  /**
   * Project ID of resources to request
   */
  project_id: string;
}

VMs.Availability = Availability;
VMs.Volumes = Volumes;
VMs.OSImages = OSImages;

export declare namespace VMs {
  export {
    type CPUConfig as CPUConfig,
    type CPUConfigRequest as CPUConfigRequest,
    type MemoryConfig as MemoryConfig,
    type MemoryConfigRequest as MemoryConfigRequest,
    type OSImage as OSImage,
    type SSHKeyRequest as SSHKeyRequest,
    type VM as VM,
    type VMList as VMList,
    type VMsCursor as VMsCursor,
    type VMCreateParams as VMCreateParams,
    type VMUpdateParams as VMUpdateParams,
    type VMListParams as VMListParams,
  };

  export {
    Availability as Availability,
    type AvailabilityCreateParams as AvailabilityCreateParams,
    type AvailabilityUpdateParams as AvailabilityUpdateParams,
  };

  export { Volumes as Volumes, type VolumeListParams as VolumeListParams };

  export { OSImages as OSImages, type OSImageListParams as OSImageListParams };
}
