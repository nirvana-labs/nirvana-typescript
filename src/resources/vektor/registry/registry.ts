// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AssetsAPI from './assets';
import { AssetListParams, AssetListResponse, Assets } from './assets';
import * as BlockchainsAPI from './blockchains';
import { BlockchainListParams, BlockchainListResponse, Blockchains } from './blockchains';
import * as BorrowMarketsAPI from './borrow-markets';
import { BorrowMarketListParams, BorrowMarketListResponse, BorrowMarkets } from './borrow-markets';
import * as ErrorsAPI from './errors';
import { ErrorListParams, ErrorListResponse, Errors } from './errors';
import * as LendMarketsAPI from './lend-markets';
import { LendMarketListParams, LendMarketListResponse, LendMarkets } from './lend-markets';
import * as LPPoolsAPI from './lp-pools';
import { LPPoolListParams, LPPoolListResponse, LPPools } from './lp-pools';
import * as VenuesAPI from './venues';
import { VenueListParams, VenueListResponse, Venues } from './venues';

export class Registry extends APIResource {
  assets: AssetsAPI.Assets = new AssetsAPI.Assets(this._client);
  blockchains: BlockchainsAPI.Blockchains = new BlockchainsAPI.Blockchains(this._client);
  venues: VenuesAPI.Venues = new VenuesAPI.Venues(this._client);
  errors: ErrorsAPI.Errors = new ErrorsAPI.Errors(this._client);
  lendMarkets: LendMarketsAPI.LendMarkets = new LendMarketsAPI.LendMarkets(this._client);
  borrowMarkets: BorrowMarketsAPI.BorrowMarkets = new BorrowMarketsAPI.BorrowMarkets(this._client);
  lpPools: LPPoolsAPI.LPPools = new LPPoolsAPI.LPPools(this._client);
}

Registry.Assets = Assets;
Registry.Blockchains = Blockchains;
Registry.Venues = Venues;
Registry.Errors = Errors;
Registry.LendMarkets = LendMarkets;
Registry.BorrowMarkets = BorrowMarkets;
Registry.LPPools = LPPools;

export declare namespace Registry {
  export {
    Assets as Assets,
    type AssetListResponse as AssetListResponse,
    type AssetListParams as AssetListParams,
  };

  export {
    Blockchains as Blockchains,
    type BlockchainListResponse as BlockchainListResponse,
    type BlockchainListParams as BlockchainListParams,
  };

  export {
    Venues as Venues,
    type VenueListResponse as VenueListResponse,
    type VenueListParams as VenueListParams,
  };

  export {
    Errors as Errors,
    type ErrorListResponse as ErrorListResponse,
    type ErrorListParams as ErrorListParams,
  };

  export {
    LendMarkets as LendMarkets,
    type LendMarketListResponse as LendMarketListResponse,
    type LendMarketListParams as LendMarketListParams,
  };

  export {
    BorrowMarkets as BorrowMarkets,
    type BorrowMarketListResponse as BorrowMarketListResponse,
    type BorrowMarketListParams as BorrowMarketListParams,
  };

  export {
    LPPools as LPPools,
    type LPPoolListResponse as LPPoolListResponse,
    type LPPoolListParams as LPPoolListParams,
  };
}
