// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as VektorAPI from '../vektor';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Quotes extends APIResource {
  /**
   * Get quotes for buying an exact amount of an asset at current market rate
   *
   * @example
   * ```ts
   * const quotes = await client.vektor.buy.quotes.list({
   *   blockchain: 'blockchain_01jbz9nsy8egar70jg79dkwmaf',
   *   receive_amount: '10.0000000000000024',
   *   receive_asset: 'asset_01jbz9qc00f8wr64hfe459gb7y',
   *   spend_asset: 'asset_01jbz9qc00f8wr64hfe459gb7y',
   *   venues: ['venue_01jbz9qc18evw86sg8m0sj9jg5'],
   * });
   * ```
   */
  list(body: QuoteListParams, options?: RequestOptions): APIPromise<QuoteListResponse> {
    return this._client.post('/v1/vektor/buy/quotes', { body, ...options });
  }
}

export interface QuoteListResponse {
  /**
   * A list of buy quotes
   */
  items: Array<VektorAPI.BuyQuote>;
}

export interface QuoteListParams {
  /**
   * A blockchain ID, represented as a TypeID with `blockchain` prefix
   */
  blockchain: VektorAPI.BlockchainIDOrBlockchainSymbol;

  /**
   * An arbitrary precision decimal represented as a string
   */
  receive_amount: VektorAPI.Decimal;

  /**
   * An asset ID, represented as a TypeID with `asset` prefix
   */
  receive_asset: VektorAPI.AssetIDOrAddressEVMOrAssetSymbol;

  /**
   * An asset ID, represented as a TypeID with `asset` prefix
   */
  spend_asset: VektorAPI.AssetIDOrAddressEVMOrAssetSymbol;

  /**
   * A list of venue IDs or venue symbols
   */
  venues: Array<VektorAPI.VenueIDOrVenueSymbol>;

  /**
   * An asset symbol
   */
  quote_asset_symbol?: string | null;
}

export declare namespace Quotes {
  export { type QuoteListResponse as QuoteListResponse, type QuoteListParams as QuoteListParams };
}
