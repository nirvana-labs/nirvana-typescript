// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as VektorAPI from '../vektor';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class LPPools extends APIResource {
  /**
   * List LP pools in the registry, optionally filtered by blockchain, assets or
   * venues
   *
   * @example
   * ```ts
   * const lpPools = await client.vektor.registry.lpPools.list();
   * ```
   */
  list(
    body: LPPoolListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<LPPoolListResponse> {
    return this._client.post('/v1/vektor/registry/lp/pools', { body, ...options });
  }
}

export interface LPPoolListResponse {
  /**
   * A list of registry data for LP pools
   */
  items: Array<VektorAPI.RegistryLPPool>;
}

export interface LPPoolListParams {
  /**
   * A LP pool ID, represented as a TypeID with `lp_pool` prefix
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

export declare namespace LPPools {
  export { type LPPoolListResponse as LPPoolListResponse, type LPPoolListParams as LPPoolListParams };
}
