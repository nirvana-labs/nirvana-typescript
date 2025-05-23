// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as VMsAPI from './vms';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Availability extends APIResource {
  /**
   * Check VM Create Availability
   *
   * @example
   * ```ts
   * const availability =
   *   await client.compute.vms.availability.create({
   *     boot_volume: { size: 100 },
   *     cpu_config: { vcpu: 2 },
   *     memory_config: { size: 2 },
   *     name: 'my-vm',
   *     os_image_name: 'ubuntu-noble-2025-04-03',
   *     public_ip_enabled: true,
   *     region: 'us-wdc-1',
   *     ssh_key: {
   *       public_key:
   *         'ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIDBIASkmwNiLcdlW6927Zjt1Hf7Kw/PpEZ4Zm+wU9wn2',
   *     },
   *     subnet_id: '123e4567-e89b-12d3-a456-426614174000',
   *   });
   * ```
   */
  create(body: AvailabilityCreateParams, options?: RequestOptions): APIPromise<string> {
    return this._client.post('/v1/compute/vms/availability', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Check VM Update Availability
   *
   * @example
   * ```ts
   * const availability =
   *   await client.compute.vms.availability.update('vm_id');
   * ```
   */
  update(vmID: string, body: AvailabilityUpdateParams, options?: RequestOptions): APIPromise<string> {
    return this._client.patch(path`/v1/compute/vms/${vmID}/availability`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }
}

export type AvailabilityCreateResponse = string;

export type AvailabilityUpdateResponse = string;

export interface AvailabilityCreateParams {
  /**
   * Boot volume for the VM.
   */
  boot_volume: AvailabilityCreateParams.BootVolume;

  /**
   * CPU configuration for the VM.
   */
  cpu_config: VMsAPI.CPUConfig;

  /**
   * Memory configuration for the VM.
   */
  memory_config: VMsAPI.MemoryConfig;

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
  ssh_key: VMsAPI.SSHKey;

  /**
   * ID of the subnet to use for the VM.
   */
  subnet_id: string;

  /**
   * Data volumes for the VM.
   */
  data_volumes?: Array<AvailabilityCreateParams.DataVolume>;
}

export namespace AvailabilityCreateParams {
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

export interface AvailabilityUpdateParams {
  /**
   * CPU configuration for the VM.
   */
  cpu_config?: VMsAPI.CPUConfig;

  /**
   * Memory configuration for the VM.
   */
  memory_config?: VMsAPI.MemoryConfig;

  /**
   * Name of the VM.
   */
  name?: string;

  /**
   * Whether to enable public IP for the VM.
   */
  public_ip_enabled?: boolean;
}

export declare namespace Availability {
  export {
    type AvailabilityCreateResponse as AvailabilityCreateResponse,
    type AvailabilityUpdateResponse as AvailabilityUpdateResponse,
    type AvailabilityCreateParams as AvailabilityCreateParams,
    type AvailabilityUpdateParams as AvailabilityUpdateParams,
  };
}
