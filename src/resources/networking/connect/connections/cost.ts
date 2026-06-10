// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as Shared from '../../../shared';
import * as ConnectAPI from '../connect';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Cost extends APIResource {
  /**
   * Return a priced cost quote for the proposed Connect Connection.
   *
   * @example
   * ```ts
   * const costQuote =
   *   await client.networking.connect.connections.cost.create({
   *     bandwidth_mbps: 50,
   *     cidrs: ['10.0.0.0/16'],
   *     name: 'my-connect-connection',
   *     project_id: '123e4567-e89b-12d3-a456-426614174000',
   *     provider_cidrs: ['172.16.0.0/16'],
   *     region: 'us-sva-2',
   *   });
   * ```
   */
  create(body: CostCreateParams, options?: RequestOptions): APIPromise<Shared.CostQuote> {
    return this._client.post('/v1/networking/connect/connections/cost', { body, ...options });
  }

  /**
   * Return a priced cost quote for the proposed Connect Connection update plus a
   * diff against the current state.
   *
   * @example
   * ```ts
   * const costQuoteUpdate =
   *   await client.networking.connect.connections.cost.update(
   *     'connection_id',
   *   );
   * ```
   */
  update(
    connectionID: string,
    body: CostUpdateParams,
    options?: RequestOptions,
  ): APIPromise<Shared.CostQuoteUpdate> {
    return this._client.patch(path`/v1/networking/connect/connections/${connectionID}/cost`, {
      body,
      ...options,
    });
  }
}

export interface CostCreateParams {
  /**
   * Connect Connection speed in Mbps
   */
  bandwidth_mbps: ConnectAPI.ConnectBandwidthMbps;

  /**
   * CIDRs for the Connect Connection. Must be in network-aligned/canonical form.
   */
  cidrs: Array<string>;

  /**
   * Name of the Connect Connection
   */
  name: string;

  /**
   * Project ID the Connect Connection belongs to
   */
  project_id: string;

  /**
   * Provider CIDRs. Must be in network-aligned/canonical form.
   */
  provider_cidrs: Array<string>;

  /**
   * Region the resource is in.
   */
  region: Shared.RegionName;

  /**
   * AWS provider configuration
   */
  aws?: ConnectAPI.ConnectConnectionAWSConfigRequest;

  /**
   * Tags to attach to the Connect Connection
   */
  tags?: Array<string>;
}

export interface CostUpdateParams {
  /**
   * Name of the Connect Connection.
   */
  name?: string;

  /**
   * Tags to attach to the Connect Connection
   */
  tags?: Array<string>;
}

export declare namespace Cost {
  export { type CostCreateParams as CostCreateParams, type CostUpdateParams as CostUpdateParams };
}
