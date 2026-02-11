// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as VolumesAPI from './volumes';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Availability extends APIResource {
  /**
   * Check Volume Create Availability
   *
   * @example
   * ```ts
   * await client.compute.volumes.availability.create({
   *   name: 'my-data-volume',
   *   project_id: '123e4567-e89b-12d3-a456-426614174000',
   *   region: 'us-wdc-1',
   *   size: 100,
   *   type: 'nvme',
   * });
   * ```
   */
  create(body: AvailabilityCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/v1/compute/volumes/availability', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Check Volume Update Availability
   *
   * @example
   * ```ts
   * await client.compute.volumes.availability.update(
   *   'volume_id',
   * );
   * ```
   */
  update(volumeID: string, body: AvailabilityUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.patch(path`/v1/compute/volumes/${volumeID}/availability`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface AvailabilityCreateParams {
  /**
   * Name of the Volume.
   */
  name: string;

  /**
   * Project ID the Volume belongs to.
   */
  project_id: string;

  /**
   * Region the resource is in.
   */
  region: Shared.RegionName;

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

  /**
   * ID of the VM the Volume is attached to.
   */
  vm_id?: string;
}

export interface AvailabilityUpdateParams {
  /**
   * Name of the Volume.
   */
  name?: string;

  /**
   * Size of the Volume in GB.
   */
  size?: number;

  /**
   * Tags to attach to the Volume.
   */
  tags?: Array<string>;
}

export declare namespace Availability {
  export {
    type AvailabilityCreateParams as AvailabilityCreateParams,
    type AvailabilityUpdateParams as AvailabilityUpdateParams,
  };
}
