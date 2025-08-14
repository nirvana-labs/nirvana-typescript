// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Errors extends APIResource {
  /**
   * A list with one example of each error type
   *
   * @example
   * ```ts
   * const errors = await client.vektor.registry.errors.list();
   * ```
   */
  list(
    body: ErrorListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ErrorListResponse> {
    return this._client.post('/v1/vektor/registry/errors', { body, ...options });
  }
}

export interface ErrorListResponse {
  /**
   * A list of errors
   */
  items: Array<ErrorListResponse.Item>;
}

export namespace ErrorListResponse {
  /**
   * An error
   */
  export interface Item {
    /**
     * Error message
     */
    message: string;

    /**
     * Error parameters
     */
    params: { [key: string]: unknown };

    /**
     * Error type
     */
    type: string;
  }
}

export interface ErrorListParams {
  errors?: Array<string> | null;
}

export declare namespace Errors {
  export { type ErrorListResponse as ErrorListResponse, type ErrorListParams as ErrorListParams };
}
