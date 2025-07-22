// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as VektorAPI from '../vektor';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Rewards extends APIResource {
  /**
   * Get the unclaimed rewards from LP voting markets
   *
   * @example
   * ```ts
   * const rewards = await client.vektor.vote.rewards.list({
   *   accounts: ['0x6b175474e89094c44da98b954eedeac495271d0f'],
   *   assets: ['asset_01jbz9qc00f8wr64hfe459gb7y'],
   *   blockchain: 'blockchain_01jbz9nsy8egar70jg79dkwmaf',
   *   venues: ['venue_01jbz9qc18evw86sg8m0sj9jg5'],
   * });
   * ```
   */
  list(body: RewardListParams, options?: RequestOptions): APIPromise<RewardListResponse> {
    return this._client.post('/v1/vektor/vote/rewards', { body, ...options });
  }
}

export interface RewardListResponse {
  /**
   * A list of LP vote rewards
   */
  items: Array<VektorAPI.VoteReward>;
}

export interface RewardListParams {
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

  /**
   * An asset symbol
   */
  quote_asset_symbol?: string | null;
}

export declare namespace Rewards {
  export { type RewardListResponse as RewardListResponse, type RewardListParams as RewardListParams };
}
