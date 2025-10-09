// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as FluxAPI from './flux';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Routes extends APIResource {
  /**
   * List all supported routes with regions for Connect Flux.
   *
   * @example
   * ```ts
   * const fluxRouteList =
   *   await client.connect.flux.routes.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<FluxAPI.FluxRouteList> {
    return this._client.get('/v1/connect/flux/routes', options);
  }
}
