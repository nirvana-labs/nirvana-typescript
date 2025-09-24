// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as FluxAPI from './flux';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Providers extends APIResource {
  /**
   * List all supported providers with regions for Connect Flux.
   *
   * @example
   * ```ts
   * const connectFluxProviderList =
   *   await client.connect.flux.providers.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<FluxAPI.ConnectFluxProviderList> {
    return this._client.get('/v1/connect/flux/providers', options);
  }
}
