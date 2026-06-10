// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as VMsAPI from './vms';
import * as VolumesAPI from '../volumes/volumes';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Cost extends APIResource {
  /**
   * Return a priced cost quote for the proposed VM.
   *
   * @example
   * ```ts
   * const costQuote = await client.compute.vms.cost.create({
   *   boot_volume: { size: 100, type: 'abs' },
   *   instance_type: 'n1-standard-8',
   *   name: 'my-vm',
   *   os_image_name: 'ubuntu-noble-2026-05-18',
   *   project_id: '123e4567-e89b-12d3-a456-426614174000',
   *   public_ip_enabled: true,
   *   region: 'us-sva-2',
   *   ssh_key: {
   *     public_key:
   *       'ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIDBIASkmwNiLcdlW6927Zjt1Hf7Kw/PpEZ4Zm+wU9wn2',
   *   },
   *   subnet_id: '123e4567-e89b-12d3-a456-426614174000',
   * });
   * ```
   */
  create(body: CostCreateParams, options?: RequestOptions): APIPromise<Shared.CostQuote> {
    return this._client.post('/v1/compute/vms/cost', { body, ...options });
  }

  /**
   * Return a priced cost quote for the proposed VM update plus a diff against the
   * current state.
   *
   * @example
   * ```ts
   * const costQuoteUpdate =
   *   await client.compute.vms.cost.update('vm_id');
   * ```
   */
  update(vmID: string, body: CostUpdateParams, options?: RequestOptions): APIPromise<Shared.CostQuoteUpdate> {
    return this._client.patch(path`/v1/compute/vms/${vmID}/cost`, { body, ...options });
  }
}

export interface CostCreateParams {
  /**
   * Boot volume for the VM.
   */
  boot_volume: CostCreateParams.BootVolume;

  /**
   * Instance type name.
   */
  instance_type: string;

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
  ssh_key: VMsAPI.SSHKeyRequest;

  /**
   * ID of the subnet to use for the VM.
   */
  subnet_id: string;

  /**
   * Data volumes for the VM.
   */
  data_volumes?: Array<CostCreateParams.DataVolume>;

  /**
   * Tags to attach to the VM.
   */
  tags?: Array<string>;
}

export namespace CostCreateParams {
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
    type: VolumesAPI.VolumeType;

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
    type: VolumesAPI.VolumeType;

    /**
     * Tags to attach to the Volume.
     */
    tags?: Array<string>;
  }
}

export interface CostUpdateParams {
  /**
   * Instance type name.
   */
  instance_type?: string;

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

export declare namespace Cost {
  export { type CostCreateParams as CostCreateParams, type CostUpdateParams as CostUpdateParams };
}
