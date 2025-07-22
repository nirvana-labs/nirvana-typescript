// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as VektorAPI from '../vektor';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class BorrowMarkets extends APIResource {
  /**
   * List borrow markets in the registry, optionally filtered by blockchain, assets
   * or venues
   *
   * @example
   * ```ts
   * const borrowMarkets =
   *   await client.vektor.registry.borrowMarkets.list();
   * ```
   */
  list(
    body: BorrowMarketListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BorrowMarketListResponse> {
    return this._client.post('/v1/vektor/registry/borrow/markets', { body, ...options });
  }
}

export interface BorrowMarketListResponse {
  /**
   * A list of registry data for lend borrow markets
   */
  items: Array<VektorAPI.RegistryLendBorrowMarket>;
}

export interface BorrowMarketListParams {
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

export declare namespace BorrowMarkets {
  export {
    type BorrowMarketListResponse as BorrowMarketListResponse,
    type BorrowMarketListParams as BorrowMarketListParams,
  };
}
