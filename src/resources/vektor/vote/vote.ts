// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as MarketsAPI from './markets';
import { MarketListParams, MarketListResponse, Markets } from './markets';
import * as RewardsAPI from './rewards';
import { RewardListParams, RewardListResponse, Rewards } from './rewards';

export class Vote extends APIResource {
  markets: MarketsAPI.Markets = new MarketsAPI.Markets(this._client);
  rewards: RewardsAPI.Rewards = new RewardsAPI.Rewards(this._client);
}

Vote.Markets = Markets;
Vote.Rewards = Rewards;

export declare namespace Vote {
  export {
    Markets as Markets,
    type MarketListResponse as MarketListResponse,
    type MarketListParams as MarketListParams,
  };

  export {
    Rewards as Rewards,
    type RewardListResponse as RewardListResponse,
    type RewardListParams as RewardListParams,
  };
}
