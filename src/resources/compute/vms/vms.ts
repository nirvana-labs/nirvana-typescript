// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as OperationsAPI from '../../operations';
import * as Shared from '../../shared';
import * as VolumesAPI from '../volumes';
import * as OSImagesAPI from './os-images';
import { OSImageListResponse, OSImages } from './os-images';

export class VMs extends APIResource {
  osImages: OSImagesAPI.OSImages = new OSImagesAPI.OSImages(this._client);

  /**
   * Create a VM
   */
  create(body: VMCreateParams, options?: Core.RequestOptions): Core.APIPromise<OperationsAPI.Operation> {
    return this._client.post('/compute/vms', { body, ...options });
  }

  /**
   * Update a VM
   */
  update(
    vmId: string,
    body: VMUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OperationsAPI.Operation> {
    return this._client.patch(`/compute/vms/${vmId}`, { body, ...options });
  }

  /**
   * List all VMs
   */
  list(options?: Core.RequestOptions): Core.APIPromise<VMList> {
    return this._client.get('/compute/vms', options);
  }

  /**
   * Delete a VM
   */
  delete(vmId: string, options?: Core.RequestOptions): Core.APIPromise<OperationsAPI.Operation> {
    return this._client.delete(`/compute/vms/${vmId}`, options);
  }

  /**
   * Get details about a VM
   */
  get(vmId: string, options?: Core.RequestOptions): Core.APIPromise<VM> {
    return this._client.get(`/compute/vms/${vmId}`, options);
  }
}

/**
 * CPU details.
 */
export interface CPU {
  cores: number;
}

export interface OSImage {
  created_at: string;

  display_name: string;

  name: string;
}

/**
 * RAM details.
 */
export interface Ram {
  /**
   * RAM size
   */
  size: number;
}

/**
 * SSH key details.
 */
export interface SSHKey {
  public_key: string;
}

/**
 * VM details.
 */
export interface VM {
  id: string;

  boot_volume_id: string;

  /**
   * CPU details.
   */
  cpu_config: CPU;

  created_at: string;

  data_volume_ids: Array<string>;

  /**
   * RAM details.
   */
  mem_config: Ram;

  name: string;

  public_ip: string;

  region: Shared.RegionName;

  status: Shared.ResourceStatus;

  updated_at: string;

  vpc_id: string;
}

export interface VMList {
  items: Array<VM>;
}

export interface VMCreateParams {
  /**
   * Boot volume create request.
   */
  boot_volume: VMCreateParams.BootVolume;

  /**
   * CPU details.
   */
  cpu: CPU;

  name: string;

  os_image_name: string;

  public_ip_enabled: boolean;

  /**
   * RAM details.
   */
  ram: Ram;

  region: Shared.RegionName;

  /**
   * SSH key details.
   */
  ssh_key: SSHKey;

  data_volumes?: Array<VMCreateParams.DataVolume>;

  ports?: Array<string>;

  source_address?: string;

  subnet_id?: string;
}

export namespace VMCreateParams {
  /**
   * Boot volume create request.
   */
  export interface BootVolume {
    size: number;
  }

  /**
   * VM data volume create request.
   */
  export interface DataVolume {
    size: number;

    /**
     * Storage type.
     */
    type?: VolumesAPI.StorageType;
  }
}

export interface VMUpdateParams {
  /**
   * Boot volume create request.
   */
  boot_volume?: VMUpdateParams.BootVolume;

  /**
   * CPU details.
   */
  cpu?: CPU;

  data_volumes?: Array<VMUpdateParams.DataVolume>;

  /**
   * RAM details.
   */
  ram?: Ram;
}

export namespace VMUpdateParams {
  /**
   * Boot volume create request.
   */
  export interface BootVolume {
    size: number;
  }

  /**
   * VM data volume create request.
   */
  export interface DataVolume {
    size: number;

    /**
     * Storage type.
     */
    type?: VolumesAPI.StorageType;
  }
}

VMs.OSImages = OSImages;

export declare namespace VMs {
  export {
    type CPU as CPU,
    type OSImage as OSImage,
    type Ram as Ram,
    type SSHKey as SSHKey,
    type VM as VM,
    type VMList as VMList,
    type VMCreateParams as VMCreateParams,
    type VMUpdateParams as VMUpdateParams,
  };

  export { OSImages as OSImages, type OSImageListResponse as OSImageListResponse };
}
