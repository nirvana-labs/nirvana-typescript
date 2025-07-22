// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as LendAPI from './lend_';
import { Lend as LendAPILend, LendCreateParams } from './lend_';
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
import * as SetCollateralAPI from './set-collateral';
import { SetCollateral, SetCollateralCreateParams } from './set-collateral';
import * as WithdrawAPI from './withdraw';
import { Withdraw, WithdrawCreateParams } from './withdraw';

export class Lend extends APIResource {
  markets: MarketsAPI.Markets = new MarketsAPI.Markets(this._client);
  positions: PositionsAPI.Positions = new PositionsAPI.Positions(this._client);
  lend: LendAPI.Lend = new LendAPI.Lend(this._client);
  withdraw: WithdrawAPI.Withdraw = new WithdrawAPI.Withdraw(this._client);
  setCollateral: SetCollateralAPI.SetCollateral = new SetCollateralAPI.SetCollateral(this._client);
}

Lend.Markets = Markets;
Lend.Positions = Positions;
Lend.Lend = LendAPILend;
Lend.Withdraw = Withdraw;
Lend.SetCollateral = SetCollateral;

export declare namespace Lend {
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

  export { LendAPILend as Lend, type LendCreateParams as LendCreateParams };

  export { Withdraw as Withdraw, type WithdrawCreateParams as WithdrawCreateParams };

  export { SetCollateral as SetCollateral, type SetCollateralCreateParams as SetCollateralCreateParams };
}
