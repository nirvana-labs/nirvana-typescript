// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ConnectAPI from './connect';
import { ConnectRoutesCursor } from './connect';
import { Cursor, type CursorParams, PagePromise } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';

export class Routes extends APIResource {
  /**
   * List all supported routes with regions for Connect.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const connectRoute of client.networking.connect.routes.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: RouteListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ConnectRoutesCursor, ConnectAPI.ConnectRoute> {
    return this._client.getAPIList('/v1/networking/connect/routes', Cursor<ConnectAPI.ConnectRoute>, {
      query,
      ...options,
    });
  }
}

export interface RouteListParams extends CursorParams {
  /**
   * Filter by provider
   */
  provider?: string;

  /**
   * Filter by the provider's own region
   */
  provider_region?: string;

  /**
   * Filter by the Nirvana region the route reaches
   */
  region?: string;

  /**
   * Comma-separated sort terms in precedence order, each field:asc or field:desc.
   * Fields: created_at, provider_region, region
   */
  sort?: string;
}

export declare namespace Routes {
  export { type RouteListParams as RouteListParams };
}

export { type ConnectRoutesCursor };
