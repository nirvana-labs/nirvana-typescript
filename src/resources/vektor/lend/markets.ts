// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as VektorAPI from '../vektor';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Markets extends APIResource {
  /**
   * Get the current market rates for lending an asset
   *
   * @example
   * ```ts
   * const markets = await client.vektor.lend.markets.list({
   *   assets: ['asset_01jbz9qc00f8wr64hfe459gb7y'],
   *   blockchain: 'blockchain_01jbz9nsy8egar70jg79dkwmaf',
   *   venues: ['venue_01jbz9qc18evw86sg8m0sj9jg5'],
   * });
   * ```
   */
  list(body: MarketListParams, options?: RequestOptions): APIPromise<MarketListResponse> {
    return this._client.post('/v1/vektor/lend/markets', { body, ...options });
  }

  /**
   * Get the current market rates for lending an asset
   *
   * @example
   * ```ts
   * const response =
   *   await client.vektor.lend.markets.listHistorical({
   *     assets: ['asset_01jbz9qc00f8wr64hfe459gb7y'],
   *     blockchain: 'blockchain_01jbz9nsy8egar70jg79dkwmaf',
   *     from: '2021-01-01T12:00:00Z',
   *     to: '2021-01-01T12:00:00Z',
   *     venues: ['venue_01jbz9qc18evw86sg8m0sj9jg5'],
   *   });
   * ```
   */
  listHistorical(
    body: MarketListHistoricalParams,
    options?: RequestOptions,
  ): APIPromise<MarketListHistoricalResponse> {
    return this._client.post('/v1/vektor/lend/markets/historical', { body, ...options });
  }
}

export interface MarketListResponse {
  /**
   * A list of lend markets
   */
  items: Array<VektorAPI.LendMarket>;
}

export interface MarketListHistoricalResponse {
  /**
   * A range of blockstamps
   */
  historical: VektorAPI.OnChainHistoricalRange;

  items: Array<MarketListHistoricalResponse.Item>;
}

export namespace MarketListHistoricalResponse {
  export interface Item {
    /**
     * Information about a specific block number and its timestamp
     */
    blockstamp: VektorAPI.Blockstamp;

    /**
     * A list of lend markets
     */
    items: Array<VektorAPI.LendMarket>;
  }
}

export type MarketListParams =
  | MarketListParams.LendMarketsByVenuesAssetsRequestInput
  | MarketListParams.LendMarketsByIDsRequestInput;

export declare namespace MarketListParams {
  export interface LendMarketsByVenuesAssetsRequestInput {
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

  export interface LendMarketsByIDsRequestInput {
    /**
     * A blockchain ID, represented as a TypeID with `blockchain` prefix
     */
    blockchain: VektorAPI.BlockchainIDOrBlockchainSymbol;

    /**
     * A list of lend/borrow market IDs
     */
    market_ids: Array<VektorAPI.LendBorrowMarketID>;

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

export type MarketListHistoricalParams =
  | MarketListHistoricalParams.HistoricalLendMarketsByVenuesAssetsRequest
  | MarketListHistoricalParams.HistoricalLendMarketsByIDsRequest;

export declare namespace MarketListHistoricalParams {
  export interface HistoricalLendMarketsByVenuesAssetsRequest {
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

  export interface HistoricalLendMarketsByIDsRequest {
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
     * An asset symbol
     */
    quote_asset_symbol?: string | null;
  }
}

export declare namespace Markets {
  export {
    type MarketListResponse as MarketListResponse,
    type MarketListHistoricalResponse as MarketListHistoricalResponse,
    type MarketListParams as MarketListParams,
    type MarketListHistoricalParams as MarketListHistoricalParams,
  };
}
