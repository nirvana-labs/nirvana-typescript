// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as VektorAPI from '../vektor';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Errors extends APIResource {
  /**
   * A list with one example of each error type
   *
   * @example
   * ```ts
   * const vektorErrorListOutput =
   *   await client.vektor.registry.errors.list();
   * ```
   */
  list(
    body: ErrorListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<VektorAPI.VektorErrorListOutput> {
    return this._client.post('/v1/vektor/registry/errors', { body, ...options });
  }
}

export interface ErrorListParams {
  errors?: Array<string> | null;
}

export declare namespace Errors {
  export { type ErrorListParams as ErrorListParams };
}
