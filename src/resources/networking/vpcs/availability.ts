// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Availability extends APIResource {
  /**
   * Check if a VPC can be created
   *
   * @example
   * ```ts
   * const availability =
   *   await client.networking.vpcs.availability.create({
   *     name: 'my-vpc',
   *     project_id: '123e4567-e89b-12d3-a456-426614174000',
   *     region: 'us-wdc-1',
   *     subnet_name: 'my-subnet',
   *   });
   * ```
   */
  create(body: AvailabilityCreateParams, options?: RequestOptions): APIPromise<string> {
    return this._client.post('/v1/networking/vpcs/availability', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Check if a VPC can be updated
   *
   * @example
   * ```ts
   * const availability =
   *   await client.networking.vpcs.availability.update(
   *     'vpc_id',
   *   );
   * ```
   */
  update(vpcID: string, body: AvailabilityUpdateParams, options?: RequestOptions): APIPromise<string> {
    return this._client.patch(path`/v1/networking/vpcs/${vpcID}/availability`, {
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
   * Name of the VPC.
   */
  name: string;

  /**
   * Project ID the VPC belongs to.
   */
  project_id: string;

  /**
   * Region the resource is in.
   */
  region: Shared.RegionName;

  /**
   * Name of the subnet to create.
   */
  subnet_name: string;

  /**
   * Tags to attach to the VPC.
   */
  tags?: Array<string>;
}

export interface AvailabilityUpdateParams {
  /**
   * Name of the VPC.
   */
  name?: string;

  /**
   * Name of the subnet to create.
   */
  subnet_name?: string;

  /**
   * Tags to attach to the VPC.
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
