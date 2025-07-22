// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as VektorAPI from './vektor';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Prices extends APIResource {
  /**
   * Get a list of asset prices
   *
   * @example
   * ```ts
   * const prices = await client.vektor.prices.list({
   *   asset_symbols: ['eth'],
   * });
   * ```
   */
  list(body: PriceListParams, options?: RequestOptions): APIPromise<PriceListResponse> {
    return this._client.post('/v1/vektor/prices', { body, ...options });
  }

  /**
   * Get a list of asset prices
   *
   * @example
   * ```ts
   * const response = await client.vektor.prices.listHistorical({
   *   asset_symbols: ['eth'],
   * });
   * ```
   */
  listHistorical(
    body: PriceListHistoricalParams,
    options?: RequestOptions,
  ): APIPromise<PriceListHistoricalResponse> {
    return this._client.post('/v1/vektor/prices/historical', { body, ...options });
  }
}

export interface PriceListResponse {
  /**
   * Array of price
   */
  items: Array<VektorAPI.Price>;
}

export interface PriceListHistoricalResponse {
  /**
   * A range of timestamps
   */
  historical: VektorAPI.OffChainHistoricalRange;

  items: Array<PriceListHistoricalResponse.Item>;
}

export namespace PriceListHistoricalResponse {
  export interface Item {
    /**
     * Array of price
     */
    items: Array<VektorAPI.Price>;

    /**
     * ISO8601 Timestamp
     */
    timestamp: VektorAPI.Timestamp;
  }
}

export interface PriceListParams {
  /**
   * A list of asset symbols
   */
  asset_symbols: Array<VektorAPI.AssetSymbol>;

  /**
   * An asset symbol
   */
  quote_asset_symbol?: VektorAPI.AssetSymbol;
}

export interface PriceListHistoricalParams {
  /**
   * A list of asset symbols
   */
  asset_symbols: Array<VektorAPI.AssetSymbol>;

  /**
   * An asset symbol
   */
  quote_asset_symbol?: VektorAPI.AssetSymbol;
}

export declare namespace Prices {
  export {
    type PriceListResponse as PriceListResponse,
    type PriceListHistoricalResponse as PriceListHistoricalResponse,
    type PriceListParams as PriceListParams,
    type PriceListHistoricalParams as PriceListHistoricalParams,
  };
}
