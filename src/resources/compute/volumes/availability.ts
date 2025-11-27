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
   * const availability =
   *   await client.compute.volumes.availability.create({
   *     name: 'my-data-volume',
   *     size: 100,
   *     vm_id: 'vm_id',
   *   });
   * ```
   */
  create(body: AvailabilityCreateParams, options?: RequestOptions): APIPromise<string> {
    return this._client.post('/v1/compute/volumes/availability', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Check Volume Update Availability
   *
   * @example
   * ```ts
   * const availability =
   *   await client.compute.volumes.availability.update(
   *     'volume_id',
   *   );
   * ```
   */
  update(volumeID: string, body: AvailabilityUpdateParams, options?: RequestOptions): APIPromise<string> {
    return this._client.patch(path`/v1/compute/volumes/${volumeID}/availability`, {
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
   * Name of the Volume.
   */
  name: string;

  /**
   * Size of the Volume in GB.
   */
  size: number;

  /**
   * ID of the VM the Volume is attached to.
   */
  vm_id: string;

  /**
   * Tags to attach to the Volume.
   */
  tags?: Array<string>;

  /**
   * Type of the Volume.
   */
  type?: 'nvme' | 'abs';
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
    type AvailabilityCreateResponse as AvailabilityCreateResponse,
    type AvailabilityUpdateResponse as AvailabilityUpdateResponse,
    type AvailabilityCreateParams as AvailabilityCreateParams,
    type AvailabilityUpdateParams as AvailabilityUpdateParams,
  };
}
