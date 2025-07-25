// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AccountsAPI from './accounts';
import {
  AccountListHistoricalParams,
  AccountListHistoricalResponse,
  AccountListParams,
  AccountListResponse,
  Accounts,
} from './accounts';
import * as BorrowAPI from './borrow_';
import { Borrow as BorrowAPIBorrow, BorrowCreateParams } from './borrow_';
import * as MarketsAPI from './markets';
import {
  MarketListHistoricalParams,
  MarketListHistoricalResponse,
  MarketListParams,
  MarketListResponse,
  Markets,
} from './markets';
import * as PositionsAPI from './positions';
import {
  PositionListHistoricalParams,
  PositionListHistoricalResponse,
  PositionListParams,
  PositionListResponse,
  Positions,
} from './positions';

export class Borrow extends APIResource {
  markets: MarketsAPI.Markets = new MarketsAPI.Markets(this._client);
  positions: PositionsAPI.Positions = new PositionsAPI.Positions(this._client);
  accounts: AccountsAPI.Accounts = new AccountsAPI.Accounts(this._client);
  borrow: BorrowAPI.Borrow = new BorrowAPI.Borrow(this._client);
}

Borrow.Markets = Markets;
Borrow.Positions = Positions;
Borrow.Accounts = Accounts;
Borrow.Borrow = BorrowAPIBorrow;

export declare namespace Borrow {
  export {
    Markets as Markets,
    type MarketListResponse as MarketListResponse,
    type MarketListHistoricalResponse as MarketListHistoricalResponse,
    type MarketListParams as MarketListParams,
    type MarketListHistoricalParams as MarketListHistoricalParams,
  };

  export {
    Positions as Positions,
    type PositionListResponse as PositionListResponse,
    type PositionListHistoricalResponse as PositionListHistoricalResponse,
    type PositionListParams as PositionListParams,
    type PositionListHistoricalParams as PositionListHistoricalParams,
  };

  export {
    Accounts as Accounts,
    type AccountListResponse as AccountListResponse,
    type AccountListHistoricalResponse as AccountListHistoricalResponse,
    type AccountListParams as AccountListParams,
    type AccountListHistoricalParams as AccountListHistoricalParams,
  };

  export { BorrowAPIBorrow as Borrow, type BorrowCreateParams as BorrowCreateParams };
}
