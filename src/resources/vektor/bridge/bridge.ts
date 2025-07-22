// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as QuotesAPI from './quotes';
import { QuoteListParams, QuoteListResponse, Quotes } from './quotes';

export class Bridge extends APIResource {
  quotes: QuotesAPI.Quotes = new QuotesAPI.Quotes(this._client);
}

Bridge.Quotes = Quotes;

export declare namespace Bridge {
  export {
    Quotes as Quotes,
    type QuoteListResponse as QuoteListResponse,
    type QuoteListParams as QuoteListParams,
  };
}
