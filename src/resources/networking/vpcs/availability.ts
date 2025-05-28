// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import { APIPromise } from '../../../core/api-promise';
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
   *     region: 'us-wdc-1',
   *     subnet_name: 'my-subnet',
   *   });
   * ```
   */
  create(body: AvailabilityCreateParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/v1/networking/vpcs/availability', { body, ...options });
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
  update(vpcID: string, body: AvailabilityUpdateParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.patch(path`/v1/networking/vpcs/${vpcID}/availability`, { body, ...options });
  }
}

export type AvailabilityCreateResponse = unknown;

export type AvailabilityUpdateResponse = unknown;

export interface AvailabilityCreateParams {
  /**
   * Name of the VPC.
   */
  name: string;

  /**
   * Region the resource is in.
   */
  region: Shared.RegionName;

  /**
   * Name of the subnet to create.
   */
  subnet_name: string;
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
}

export declare namespace Availability {
  export {
    type AvailabilityCreateResponse as AvailabilityCreateResponse,
    type AvailabilityUpdateResponse as AvailabilityUpdateResponse,
    type AvailabilityCreateParams as AvailabilityCreateParams,
    type AvailabilityUpdateParams as AvailabilityUpdateParams,
  };
}
