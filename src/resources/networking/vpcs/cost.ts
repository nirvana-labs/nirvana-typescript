// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Cost extends APIResource {
  /**
   * Return a priced cost quote for the proposed VPC.
   *
   * @example
   * ```ts
   * const costQuote = await client.networking.vpcs.cost.create({
   *   name: 'my-vpc',
   *   project_id: '123e4567-e89b-12d3-a456-426614174000',
   *   region: 'us-sva-2',
   *   subnet_name: 'my-subnet',
   * });
   * ```
   */
  create(body: CostCreateParams, options?: RequestOptions): APIPromise<Shared.CostQuote> {
    return this._client.post('/v1/networking/vpcs/cost', { body, ...options });
  }

  /**
   * Return a priced cost quote for the proposed VPC update plus a diff against the
   * current state.
   *
   * @example
   * ```ts
   * const costQuoteUpdate =
   *   await client.networking.vpcs.cost.update('vpc_id');
   * ```
   */
  update(
    vpcID: string,
    body: CostUpdateParams,
    options?: RequestOptions,
  ): APIPromise<Shared.CostQuoteUpdate> {
    return this._client.patch(path`/v1/networking/vpcs/${vpcID}/cost`, { body, ...options });
  }
}

export interface CostCreateParams {
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

export interface CostUpdateParams {
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

export declare namespace Cost {
  export { type CostCreateParams as CostCreateParams, type CostUpdateParams as CostUpdateParams };
}
