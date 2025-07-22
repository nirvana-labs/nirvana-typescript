// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as VektorAPI from '../vektor';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Positions extends APIResource {
  /**
   * Get info on borrowed positions
   *
   * @example
   * ```ts
   * const positions = await client.vektor.borrow.positions.list(
   *   {
   *     accounts: [
   *       '0x6b175474e89094c44da98b954eedeac495271d0f',
   *     ],
   *     assets: ['asset_01jbz9qc00f8wr64hfe459gb7y'],
   *     blockchain: 'blockchain_01jbz9nsy8egar70jg79dkwmaf',
   *     venues: ['venue_01jbz9qc18evw86sg8m0sj9jg5'],
   *   },
   * );
   * ```
   */
  list(body: PositionListParams, options?: RequestOptions): APIPromise<PositionListResponse> {
    return this._client.post('/v1/vektor/borrow/positions', { body, ...options });
  }

  /**
   * Get info on borrowed positions
   *
   * @example
   * ```ts
   * const response =
   *   await client.vektor.borrow.positions.listHistorical({
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
    return this._client.post('/v1/vektor/borrow/positions/historical', { body, ...options });
  }
}

export interface PositionListResponse {
  /**
   * A list of borrow positions
   */
  items: Array<VektorAPI.BorrowPosition>;
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
     * A list of borrow positions
     */
    items: Array<VektorAPI.BorrowPosition>;
  }
}

export type PositionListParams =
  | PositionListParams.BorrowPositionsByVenuesAssetsRequestInput
  | PositionListParams.BorrowPositionsByIDsRequestInput;

export declare namespace PositionListParams {
  export interface BorrowPositionsByVenuesAssetsRequestInput {
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
     * An asset symbol
     */
    quote_asset_symbol?: string | null;
  }

  export interface BorrowPositionsByIDsRequestInput {
    /**
     * A blockchain ID, represented as a TypeID with `blockchain` prefix
     */
    blockchain: VektorAPI.BlockchainIDOrBlockchainSymbol;

    /**
     * A list of lend/borrow market IDs
     */
    market_ids: Array<VektorAPI.LendBorrowMarketID>;

    /**
     * A list of accounts. Currently only EVM addresses are supported.
     */
    accounts?: Array<VektorAPI.Account>;

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

export type PositionListHistoricalParams =
  | PositionListHistoricalParams.HistoricalBorrowPositionsByVenuesAssetsRequest
  | PositionListHistoricalParams.HistoricalBorrowPositionsByIDsRequest;

export declare namespace PositionListHistoricalParams {
  export interface HistoricalBorrowPositionsByVenuesAssetsRequest {
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
     * An asset symbol
     */
    quote_asset_symbol?: string | null;
  }

  export interface HistoricalBorrowPositionsByIDsRequest {
    /**
     * A blockchain ID, represented as a TypeID with `blockchain` prefix
     */
    blockchain: VektorAPI.BlockchainIDOrBlockchainSymbol;

    /**
     * Either a ISO8601 timestamp or a block number
     */
    from: VektorAPI.TimestampOrBlockNumber;

    /**
     * A list of lend/borrow market IDs
     */
    market_ids: Array<VektorAPI.LendBorrowMarketID>;

    /**
     * Either a ISO8601 timestamp or a block number
     */
    to: VektorAPI.TimestampOrBlockNumber;

    /**
     * A list of accounts. Currently only EVM addresses are supported.
     */
    accounts?: Array<VektorAPI.Account>;

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
