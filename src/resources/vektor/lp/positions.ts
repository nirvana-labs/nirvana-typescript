// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as VektorAPI from '../vektor';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Positions extends APIResource {
  /**
   * Get info on LP positions
   *
   * @example
   * ```ts
   * const positions = await client.vektor.lp.positions.list({
   *   accounts: ['0x6b175474e89094c44da98b954eedeac495271d0f'],
   *   assets: ['asset_01jbz9qc00f8wr64hfe459gb7y'],
   *   blockchain: 'blockchain_01jbz9nsy8egar70jg79dkwmaf',
   *   venues: ['venue_01jbz9qc18evw86sg8m0sj9jg5'],
   * });
   * ```
   */
  list(body: PositionListParams, options?: RequestOptions): APIPromise<PositionListResponse> {
    return this._client.post('/v1/vektor/lp/positions', { body, ...options });
  }

  /**
   * Get info on LP positions
   *
   * @example
   * ```ts
   * const response =
   *   await client.vektor.lp.positions.listHistorical({
   *     accounts: [
   *       '0x6b175474e89094c44da98b954eedeac495271d0f',
   *     ],
   *     assets: ['asset_01jbz9qc00f8wr64hfe459gb7y'],
   *     blockchain: 'blockchain_01jbz9nsy8egar70jg79dkwmaf',
   *     from: '2021-01-01T12:00:00Z',
   *     to: '2021-01-01T12:00:00Z',
   *     venues: ['venue_01jbz9qc18evw86sg8m0sj9jg5'],
   *   });
   * ```
   */
  listHistorical(
    body: PositionListHistoricalParams,
    options?: RequestOptions,
  ): APIPromise<PositionListHistoricalResponse> {
    return this._client.post('/v1/vektor/lp/positions/historical', { body, ...options });
  }
}

export interface PositionListResponse {
  /**
   * A list of liquidity pool positions
   */
  items: Array<VektorAPI.LPPosition>;
}

export interface PositionListHistoricalResponse {
  /**
   * A range of blockstamps
   */
  historical: VektorAPI.OnChainHistoricalRange;

  items: Array<PositionListHistoricalResponse.Item>;
}

export namespace PositionListHistoricalResponse {
  export interface Item {
    /**
     * Information about a specific block number and its timestamp
     */
    blockstamp: VektorAPI.Blockstamp;

    /**
     * A list of liquidity pool positions
     */
    items: Array<VektorAPI.LPPosition>;
  }
}

export type PositionListParams =
  | PositionListParams.LPPositionsByVenueAssetRequestInput
  | PositionListParams.LPPositionsByPoolIDsRequestInput;

export declare namespace PositionListParams {
  export interface LPPositionsByVenueAssetRequestInput {
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
     * Either a ISO8601 timestamp or a block number
     */
    at?: VektorAPI.Timestamp | VektorAPI.BlockNumber;

    /**
     * Whether to exclude empty positions
     */
    exclude_zeros?: boolean;

    /**
     * An asset symbol
     */
    quote_asset_symbol?: string | null;
  }

  export interface LPPositionsByPoolIDsRequestInput {
    /**
     * A list of accounts. Currently only EVM addresses are supported.
     */
    accounts: Array<VektorAPI.Account>;

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
     * Whether to exclude empty positions
     */
    exclude_zeros?: boolean;

    /**
     * An asset symbol
     */
    quote_asset_symbol?: string | null;
  }
}

export type PositionListHistoricalParams =
  | PositionListHistoricalParams.HistoricalLPPositionsByVenueAssetRequest
  | PositionListHistoricalParams.HistoricalLPPositionsByPoolIDsRequest;

export declare namespace PositionListHistoricalParams {
  export interface HistoricalLPPositionsByVenueAssetRequest {
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
     * Whether to exclude empty positions
     */
    exclude_zeros?: boolean;

    /**
     * An asset symbol
     */
    quote_asset_symbol?: string | null;
  }

  export interface HistoricalLPPositionsByPoolIDsRequest {
    /**
     * A list of accounts. Currently only EVM addresses are supported.
     */
    accounts: Array<VektorAPI.Account>;

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
     * Whether to exclude empty positions
     */
    exclude_zeros?: boolean;

    /**
     * An asset symbol
     */
    quote_asset_symbol?: string | null;
  }
}

export declare namespace Positions {
  export {
    type PositionListResponse as PositionListResponse,
    type PositionListHistoricalResponse as PositionListHistoricalResponse,
    type PositionListParams as PositionListParams,
    type PositionListHistoricalParams as PositionListHistoricalParams,
  };
}
