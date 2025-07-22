// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as VektorAPI from '../vektor';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Assets extends APIResource {
  /**
   * List supported assets, optionally filtered by blockchain
   *
   * @example
   * ```ts
   * const assets = await client.vektor.registry.assets.list();
   * ```
   */
  list(
    body: AssetListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AssetListResponse> {
    return this._client.post('/v1/vektor/registry/assets', { body, ...options });
  }
}

export interface AssetListResponse {
  /**
   * Response for multiple assets
   */
  items: Array<VektorAPI.Asset>;
}

export interface AssetListParams {
  /**
   * An asset ID, represented as a TypeID with `asset` prefix
   */
  id?: string | null;

  /**
   * A blockchain ID, represented as a TypeID with `blockchain` prefix
   */
  blockchain?: VektorAPI.BlockchainID;

  /**
   * An asset symbol
   */
  symbol?: string | null;
}

export declare namespace Assets {
  export { type AssetListResponse as AssetListResponse, type AssetListParams as AssetListParams };
}
