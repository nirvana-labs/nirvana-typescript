// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ConnectAPI from './connect';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Routes extends APIResource {
  /**
   * List all supported routes with regions for Connect.
   *
   * @example
   * ```ts
   * const connectRouteList =
   *   await client.networking.connect.routes.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<ConnectAPI.ConnectRouteList> {
    return this._client.get('/v1/networking/connect/routes', options);
  }
}
