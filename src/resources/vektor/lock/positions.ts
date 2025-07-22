// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as VektorAPI from '../vektor';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Positions extends APIResource {
  /**
   * Get info on locked positions
   *
   * @example
   * ```ts
   * const positions = await client.vektor.lock.positions.list({
   *   accounts: ['0x6b175474e89094c44da98b954eedeac495271d0f'],
   *   assets: ['asset_01jbz9qc00f8wr64hfe459gb7y'],
   *   blockchain: 'blockchain_01jbz9nsy8egar70jg79dkwmaf',
   *   venues: ['venue_01jbz9qc18evw86sg8m0sj9jg5'],
   * });
   * ```
   */
  list(body: PositionListParams, options?: RequestOptions): APIPromise<PositionListResponse> {
    return this._client.post('/v1/vektor/lock/positions', { body, ...options });
  }
}

export interface PositionListResponse {
  /**
   * A list of lock positions
   */
  items: Array<VektorAPI.LockPosition>;
}

export interface PositionListParams {
  /**
   * A list of accounts. Currently only EVM addresses are supported.
   */
  accounts: Array<VektorAPI.Account>;

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

export declare namespace Positions {
  export { type PositionListResponse as PositionListResponse, type PositionListParams as PositionListParams };
}
