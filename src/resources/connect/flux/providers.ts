// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Providers extends APIResource {
  /**
   * List all supported providers with regions for Connect Flux.
   *
   * @example
   * ```ts
   * const providers =
   *   await client.connect.flux.providers.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<ProviderListResponse> {
    return this._client.get('/v1/connect/flux/providers', options);
  }
}

export interface ProviderListResponse {
  items: Array<ProviderListResponse.Item>;
}

export namespace ProviderListResponse {
  /**
   * Provider supported for Connect Flux.
   */
  export interface Item {
    /**
     * Provider name.
     */
    name: string;

    /**
     * Provider region name.
     */
    region: string;
  }
}

export declare namespace Providers {
  export { type ProviderListResponse as ProviderListResponse };
}
