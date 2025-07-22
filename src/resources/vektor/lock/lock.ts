// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as MarketsAPI from './markets';
import { MarketListParams, MarketListResponse, Markets } from './markets';
import * as PositionsAPI from './positions';
import { PositionListParams, PositionListResponse, Positions } from './positions';

export class Lock extends APIResource {
  markets: MarketsAPI.Markets = new MarketsAPI.Markets(this._client);
  positions: PositionsAPI.Positions = new PositionsAPI.Positions(this._client);
}

Lock.Markets = Markets;
Lock.Positions = Positions;

export declare namespace Lock {
  export {
    Markets as Markets,
    type MarketListResponse as MarketListResponse,
    type MarketListParams as MarketListParams,
  };

  export {
    Positions as Positions,
    type PositionListResponse as PositionListResponse,
    type PositionListParams as PositionListParams,
  };
}
