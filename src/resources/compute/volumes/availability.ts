// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
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
   *   size: 100,
   *   vm_id: 'vm_id',
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
   * Name of the volume.
   */
  name: string;

  /**
   * Size of the volume in GB.
   */
  size: number;

  /**
   * ID of the VM the volume is attached to.
   */
  vm_id: string;
}

export interface AvailabilityUpdateParams {
  /**
   * Name of the volume.
   */
  name?: string;

  /**
   * Size of the volume in GB.
   */
  size?: number;
}

export declare namespace Availability {
  export {
    type AvailabilityCreateParams as AvailabilityCreateParams,
    type AvailabilityUpdateParams as AvailabilityUpdateParams,
  };
}
