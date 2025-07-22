// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as VektorAPI from '../vektor';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class LendMarkets extends APIResource {
  /**
   * List lend markets in the registry, optionally filtered by blockchain, assets or
   * venues
   *
   * @example
   * ```ts
   * const lendMarkets =
   *   await client.vektor.registry.lendMarkets.list();
   * ```
   */
  list(
    body: LendMarketListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<LendMarketListResponse> {
    return this._client.post('/v1/vektor/registry/lend/markets', { body, ...options });
  }
}

export interface LendMarketListResponse {
  /**
   * A list of registry data for lend borrow markets
   */
  items: Array<VektorAPI.RegistryLendBorrowMarket>;
}

export interface LendMarketListParams {
  /**
   * A lend/borrow market ID, represented as a TypeID with `lend_borrow_market`
   * prefix
   */
  id?: string | null;

  /**
   * A list of asset IDs, EVM addresses or asset symbols
   */
  assets?: Array<VektorAPI.AssetIDOrAddressEVMOrAssetSymbol> | null;

  /**
   * A blockchain ID, represented as a TypeID with `blockchain` prefix
   */
  blockchain?: VektorAPI.BlockchainID;

  /**
   * A list of venue IDs or venue symbols
   */
  venues?: Array<VektorAPI.VenueIDOrVenueSymbol> | null;
}

export declare namespace LendMarkets {
  export {
    type LendMarketListResponse as LendMarketListResponse,
    type LendMarketListParams as LendMarketListParams,
  };
}
