// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as VektorAPI from '../vektor';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Quotes extends APIResource {
  /**
   * Get quotes for bridging an exact amount of an asset to another blockchain
   *
   * @example
   * ```ts
   * const quotes = await client.vektor.bridge.quotes.list({
   *   amount: '10.0000000000000024',
   *   asset: 'eth',
   *   from_blockchain: 'blockchain_01jbz9nsy8egar70jg79dkwmaf',
   *   to_blockchain: 'blockchain_01jbz9nsy8egar70jg79dkwmaf',
   *   venues: ['venue_01jbz9qc18evw86sg8m0sj9jg5'],
   * });
   * ```
   */
  list(body: QuoteListParams, options?: RequestOptions): APIPromise<QuoteListResponse> {
    return this._client.post('/v1/vektor/bridge/quotes', { body, ...options });
  }
}

export interface QuoteListResponse {
  /**
   * A list of bridge quotes
   */
  items: Array<VektorAPI.BridgeQuote>;
}

export interface QuoteListParams {
  /**
   * An arbitrary precision decimal represented as a string
   */
  amount: VektorAPI.Decimal;

  /**
   * An asset symbol
   */
  asset: VektorAPI.AssetSymbol;

  /**
   * A blockchain ID, represented as a TypeID with `blockchain` prefix
   */
  from_blockchain: VektorAPI.BlockchainIDOrBlockchainSymbol;

  /**
   * A blockchain ID, represented as a TypeID with `blockchain` prefix
   */
  to_blockchain: VektorAPI.BlockchainIDOrBlockchainSymbol;

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
