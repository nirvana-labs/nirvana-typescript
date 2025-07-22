// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as VektorAPI from '../vektor';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Venues extends APIResource {
  /**
   * List supported venues
   *
   * @example
   * ```ts
   * const venues = await client.vektor.registry.venues.list();
   * ```
   */
  list(
    body: VenueListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<VenueListResponse> {
    return this._client.post('/v1/vektor/registry/venues', { body, ...options });
  }
}

export interface VenueListResponse {
  /**
   * A list of venues
   */
  items: Array<VektorAPI.Venue>;
}

export interface VenueListParams {
  /**
   * A venue ID, represented as a TypeID with `venue` prefix
   */
  id?: string | null;

  /**
   * A venue symbol
   */
  symbol?: string | null;
}

export declare namespace Venues {
  export { type VenueListResponse as VenueListResponse, type VenueListParams as VenueListParams };
}
