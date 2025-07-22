// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as VektorAPI from '../vektor';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Pools extends APIResource {
  /**
   * Get a list of LP pools
   *
   * @example
   * ```ts
   * const pools = await client.vektor.lp.pools.list({
   *   assets: ['asset_01jbz9qc00f8wr64hfe459gb7y'],
   *   blockchain: 'blockchain_01jbz9nsy8egar70jg79dkwmaf',
   *   venues: ['venue_01jbz9qc18evw86sg8m0sj9jg5'],
   * });
   * ```
   */
  list(body: PoolListParams, options?: RequestOptions): APIPromise<PoolListResponse> {
    return this._client.post('/v1/vektor/lp/pools', { body, ...options });
  }

  /**
   * Get a list of LP pools
   *
   * @example
   * ```ts
   * const response =
   *   await client.vektor.lp.pools.listHistorical({
   *     assets: ['asset_01jbz9qc00f8wr64hfe459gb7y'],
   *     blockchain: 'blockchain_01jbz9nsy8egar70jg79dkwmaf',
   *     from: '2021-01-01T12:00:00Z',
   *     to: '2021-01-01T12:00:00Z',
   *     venues: ['venue_01jbz9qc18evw86sg8m0sj9jg5'],
   *   });
   * ```
   */
  listHistorical(
    body: PoolListHistoricalParams,
    options?: RequestOptions,
  ): APIPromise<PoolListHistoricalResponse> {
    return this._client.post('/v1/vektor/lp/pools/historical', { body, ...options });
  }
}

export interface PoolListResponse {
  /**
   * A list of liquidity pools
   */
  items: Array<VektorAPI.LPPool>;
}

export interface PoolListHistoricalResponse {
  /**
   * A range of blockstamps
   */
  historical: VektorAPI.OnChainHistoricalRange;

  items: Array<PoolListHistoricalResponse.Item>;
}

export namespace PoolListHistoricalResponse {
  export interface Item {
    /**
     * Information about a specific block number and its timestamp
     */
    blockstamp: VektorAPI.Blockstamp;

    /**
     * A list of liquidity pools
     */
    items: Array<VektorAPI.LPPool>;
  }
}

export type PoolListParams =
  | PoolListParams.LPPoolsByVenueAssetRequestInput
  | PoolListParams.LPPoolsByIDsRequestInput;

export declare namespace PoolListParams {
  export interface LPPoolsByVenueAssetRequestInput {
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
     * Either a ISO8601 timestamp or a block number
     */
    at?: VektorAPI.Timestamp | VektorAPI.BlockNumber;

    /**
     * An asset symbol
     */
    quote_asset_symbol?: string | null;
  }

  export interface LPPoolsByIDsRequestInput {
    /**
     * A blockchain ID, represented as a TypeID with `blockchain` prefix
     */
    blockchain: VektorAPI.BlockchainIDOrBlockchainSymbol;

    /**
     * A list of LP pool IDs
     */
    lp_pool_ids: Array<string>;

    /**
     * Either a ISO8601 timestamp or a block number
     */
    at?: VektorAPI.Timestamp | VektorAPI.BlockNumber;

    /**
     * An asset symbol
     */
    quote_asset_symbol?: string | null;
  }
}

export type PoolListHistoricalParams =
  | PoolListHistoricalParams.HistoricalLPPoolsByVenueAssetRequest
  | PoolListHistoricalParams.HistoricalLPPoolsByIDsRequest;

export declare namespace PoolListHistoricalParams {
  export interface HistoricalLPPoolsByVenueAssetRequest {
    /**
     * A list of asset IDs, EVM addresses or asset symbols
     */
    assets: Array<VektorAPI.AssetIDOrAddressEVMOrAssetSymbol>;

    /**
     * A blockchain ID, represented as a TypeID with `blockchain` prefix
     */
    blockchain: VektorAPI.BlockchainIDOrBlockchainSymbol;

    /**
     * Either a ISO8601 timestamp or a block number
     */
    from: VektorAPI.TimestampOrBlockNumber;

    /**
     * Either a ISO8601 timestamp or a block number
     */
    to: VektorAPI.TimestampOrBlockNumber;

    /**
     * A list of venue IDs or venue symbols
     */
    venues: Array<VektorAPI.VenueIDOrVenueSymbol>;

    /**
     * An asset symbol
     */
    quote_asset_symbol?: string | null;
  }

  export interface HistoricalLPPoolsByIDsRequest {
    /**
     * A blockchain ID, represented as a TypeID with `blockchain` prefix
     */
    blockchain: VektorAPI.BlockchainIDOrBlockchainSymbol;

    /**
     * Either a ISO8601 timestamp or a block number
     */
    from: VektorAPI.TimestampOrBlockNumber;

    /**
     * A list of LP pool IDs
     */
    lp_pool_ids: Array<string>;

    /**
     * Either a ISO8601 timestamp or a block number
     */
    to: VektorAPI.TimestampOrBlockNumber;

    /**
     * An asset symbol
     */
    quote_asset_symbol?: string | null;
  }
}

export declare namespace Pools {
  export {
    type PoolListResponse as PoolListResponse,
    type PoolListHistoricalResponse as PoolListHistoricalResponse,
    type PoolListParams as PoolListParams,
    type PoolListHistoricalParams as PoolListHistoricalParams,
  };
}
