// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as DepositQuoteAPI from './deposit-quote';
import { DepositQuote, DepositQuoteCreateParams, DepositQuoteCreateResponse } from './deposit-quote';
import * as PoolsAPI from './pools';
import {
  PoolListHistoricalParams,
  PoolListHistoricalResponse,
  PoolListParams,
  PoolListResponse,
  Pools,
} from './pools';
import * as PositionsAPI from './positions';
import {
  PositionListHistoricalParams,
  PositionListHistoricalResponse,
  PositionListParams,
  PositionListResponse,
  Positions,
} from './positions';
import * as WithdrawQuoteAPI from './withdraw-quote';
import { WithdrawQuote, WithdrawQuoteCreateParams, WithdrawQuoteCreateResponse } from './withdraw-quote';

export class LP extends APIResource {
  pools: PoolsAPI.Pools = new PoolsAPI.Pools(this._client);
  positions: PositionsAPI.Positions = new PositionsAPI.Positions(this._client);
  depositQuote: DepositQuoteAPI.DepositQuote = new DepositQuoteAPI.DepositQuote(this._client);
  withdrawQuote: WithdrawQuoteAPI.WithdrawQuote = new WithdrawQuoteAPI.WithdrawQuote(this._client);
}

LP.Pools = Pools;
LP.Positions = Positions;
LP.DepositQuote = DepositQuote;
LP.WithdrawQuote = WithdrawQuote;

export declare namespace LP {
  export {
    Pools as Pools,
    type PoolListResponse as PoolListResponse,
    type PoolListHistoricalResponse as PoolListHistoricalResponse,
    type PoolListParams as PoolListParams,
    type PoolListHistoricalParams as PoolListHistoricalParams,
  };

  export {
    Positions as Positions,
    type PositionListResponse as PositionListResponse,
    type PositionListHistoricalResponse as PositionListHistoricalResponse,
    type PositionListParams as PositionListParams,
    type PositionListHistoricalParams as PositionListHistoricalParams,
  };

  export {
    DepositQuote as DepositQuote,
    type DepositQuoteCreateResponse as DepositQuoteCreateResponse,
    type DepositQuoteCreateParams as DepositQuoteCreateParams,
  };

  export {
    WithdrawQuote as WithdrawQuote,
    type WithdrawQuoteCreateResponse as WithdrawQuoteCreateResponse,
    type WithdrawQuoteCreateParams as WithdrawQuoteCreateParams,
  };
}
