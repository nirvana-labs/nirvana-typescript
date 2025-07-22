// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as VektorAPI from '../vektor';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Markets extends APIResource {
  /**
   * Get a list of markets where assets can be locked
   *
   * @example
   * ```ts
   * const markets = await client.vektor.lock.markets.list({
   *   assets: ['asset_01jbz9qc00f8wr64hfe459gb7y'],
   *   blockchain: 'blockchain_01jbz9nsy8egar70jg79dkwmaf',
   *   venues: ['venue_01jbz9qc18evw86sg8m0sj9jg5'],
   * });
   * ```
   */
  list(body: MarketListParams, options?: RequestOptions): APIPromise<MarketListResponse> {
    return this._client.post('/v1/vektor/lock/markets', { body, ...options });
  }
}

export interface MarketListResponse {
  /**
   * A list of lock markets
   */
  items: Array<VektorAPI.LockMarket>;
}

export interface MarketListParams {
  /**
   * A list of asset IDs, EVM addresses or asset symbols
   */
  assets: Array<VektorAPI.AssetIDOrAddressEVMOrAssetSymbol>;

  /**
   * A blockchain ID, represented as a TypeID with `blockchain` prefix
   */
  blockchain: VektorAPI.BlockchainIDOrBlockchainSymbol;

  /**
   * A list of venue IDs or venue symbols
   */
  venues: Array<VektorAPI.VenueIDOrVenueSymbol>;
}

export declare namespace Markets {
  export { type MarketListResponse as MarketListResponse, type MarketListParams as MarketListParams };
}
