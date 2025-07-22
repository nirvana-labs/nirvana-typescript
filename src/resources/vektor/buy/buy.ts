// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as BuyAPI from './buy_';
import { Buy as BuyAPIBuy, BuyCreateParams } from './buy_';
import * as QuotesAPI from './quotes';
import { QuoteListParams, QuoteListResponse, Quotes } from './quotes';

export class Buy extends APIResource {
  quotes: QuotesAPI.Quotes = new QuotesAPI.Quotes(this._client);
  buy: BuyAPI.Buy = new BuyAPI.Buy(this._client);
}

Buy.Quotes = Quotes;
Buy.Buy = BuyAPIBuy;

export declare namespace Buy {
  export {
    Quotes as Quotes,
    type QuoteListResponse as QuoteListResponse,
    type QuoteListParams as QuoteListParams,
  };

  export { BuyAPIBuy as Buy, type BuyCreateParams as BuyCreateParams };
}
