// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as VolumesAPI from './volumes';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Cost extends APIResource {
  /**
   * Return a priced cost quote for the proposed Volume.
   *
   * @example
   * ```ts
   * const costQuote = await client.compute.volumes.cost.create({
   *   name: 'my-data-volume',
   *   project_id: '123e4567-e89b-12d3-a456-426614174000',
   *   region: 'us-sva-2',
   *   size: 100,
   *   type: 'abs',
   * });
   * ```
   */
  create(body: CostCreateParams, options?: RequestOptions): APIPromise<Shared.CostQuote> {
    return this._client.post('/v1/compute/volumes/cost', { body, ...options });
  }

  /**
   * Return a priced cost quote for the proposed Volume update plus a diff against
   * the current state.
   *
   * @example
   * ```ts
   * const costQuoteUpdate =
   *   await client.compute.volumes.cost.update('volume_id');
   * ```
   */
  update(
    volumeID: string,
    body: CostUpdateParams,
    options?: RequestOptions,
  ): APIPromise<Shared.CostQuoteUpdate> {
    return this._client.patch(path`/v1/compute/volumes/${volumeID}/cost`, { body, ...options });
  }
}

export interface CostCreateParams {
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

export interface CostUpdateParams {
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

export declare namespace Cost {
  export { type CostCreateParams as CostCreateParams, type CostUpdateParams as CostUpdateParams };
}
