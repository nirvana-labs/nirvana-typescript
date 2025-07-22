// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as QuotesAPI from './quotes';
import { QuoteListParams, QuoteListResponse, Quotes } from './quotes';
import * as SellAPI from './sell_';
import { Sell as SellAPISell, SellCreateParams } from './sell_';

export class Sell extends APIResource {
  quotes: QuotesAPI.Quotes = new QuotesAPI.Quotes(this._client);
  sell: SellAPI.Sell = new SellAPI.Sell(this._client);
}

Sell.Quotes = Quotes;
Sell.Sell = SellAPISell;

export declare namespace Sell {
  export {
    Quotes as Quotes,
    type QuoteListResponse as QuoteListResponse,
    type QuoteListParams as QuoteListParams,
  };

  export { SellAPISell as Sell, type SellCreateParams as SellCreateParams };
}
