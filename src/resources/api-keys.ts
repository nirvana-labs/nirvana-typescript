// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { Cursor, type CursorParams, PagePromise } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class APIKeys extends APIResource {
  /**
   * Create a new API key
   *
   * @example
   * ```ts
   * const apiKey = await client.apiKeys.create({
   *   expires_at: '2025-12-31T23:59:59Z',
   *   name: 'My API Key',
   * });
   * ```
   */
  create(body: APIKeyCreateParams, options?: RequestOptions): APIPromise<APIKey> {
    return this._client.post('/v1/api_keys', { body, ...options });
  }

  /**
   * Update an existing API key
   *
   * @example
   * ```ts
   * const apiKey = await client.apiKeys.update('api_key_id');
   * ```
   */
  update(apiKeyID: string, body: APIKeyUpdateParams, options?: RequestOptions): APIPromise<APIKey> {
    return this._client.patch(path`/v1/api_keys/${apiKeyID}`, { body, ...options });
  }

  /**
   * List all API keys for the authenticated user
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const apiKey of client.apiKeys.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: APIKeyListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<APIKeysCursor, APIKey> {
    return this._client.getAPIList('/v1/api_keys', Cursor<APIKey>, { query, ...options });
  }

  /**
   * Delete an API key
   *
   * @example
   * ```ts
   * await client.apiKeys.delete('api_key_id');
   * ```
   */
  delete(apiKeyID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/api_keys/${apiKeyID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get details about an API key
   *
   * @example
   * ```ts
   * const apiKey = await client.apiKeys.get('api_key_id');
   * ```
   */
  get(apiKeyID: string, options?: RequestOptions): APIPromise<APIKey> {
    return this._client.get(path`/v1/api_keys/${apiKeyID}`, options);
  }
}

export type APIKeysCursor = Cursor<APIKey>;

/**
 * API Key response.
 */
export interface APIKey {
  /**
   * API Key ID.
   */
  id: string;

  /**
   * When the API Key was created.
   */
  created_at: string;

  /**
   * When the API Key expires and is no longer valid.
   */
  expires_at: string;

  /**
   * API Key name.
   */
  name: string;

  /**
   * IP filter rules.
   */
  source_ip_rule: APIKey.SourceIPRule;

  /**
   * Status of the API Key.
   */
  status: 'active' | 'inactive' | 'expired';

  /**
   * Tags to attach to the API Key.
   */
  tags: Array<string>;

  /**
   * When the API Key was updated.
   */
  updated_at: string;

  /**
   * API Key. Only returned on creation.
   */
  key?: string;

  /**
   * When the API Key starts to be valid.
   */
  starts_at?: string;
}

export namespace APIKey {
  /**
   * IP filter rules.
   */
  export interface SourceIPRule {
    /**
     * List of IPv4 CIDR addresses to allow.
     */
    allowed: Array<string>;

    /**
     * List of IPv4 CIDR addresses to deny.
     */
    blocked: Array<string>;
  }
}

export interface APIKeyList {
  items: Array<APIKey>;

  /**
   * Pagination response details.
   */
  pagination: Shared.Pagination;
}

export interface APIKeyCreateParams {
  /**
   * When the API Key expires and is no longer valid.
   */
  expires_at: string;

  /**
   * API Key name.
   */
  name: string;

  /**
   * IP filter rules.
   */
  source_ip_rule?: APIKeyCreateParams.SourceIPRule;

  /**
   * When the API Key starts to be valid.
   */
  starts_at?: string;

  /**
   * Tags to attach to the API Key.
   */
  tags?: Array<string>;
}

export namespace APIKeyCreateParams {
  /**
   * IP filter rules.
   */
  export interface SourceIPRule {
    /**
     * List of IPv4 CIDR addresses to allow.
     */
    allowed?: Array<string>;

    /**
     * List of IPv4 CIDR addresses to deny.
     */
    blocked?: Array<string>;
  }
}

export interface APIKeyUpdateParams {
  /**
   * API Key name.
   */
  name?: string;

  /**
   * IP filter rules.
   */
  source_ip_rule?: APIKeyUpdateParams.SourceIPRule;

  /**
   * Tags to attach to the API Key.
   */
  tags?: Array<string>;
}

export namespace APIKeyUpdateParams {
  /**
   * IP filter rules.
   */
  export interface SourceIPRule {
    /**
     * List of IPv4 CIDR addresses to allow.
     */
    allowed?: Array<string>;

    /**
     * List of IPv4 CIDR addresses to deny.
     */
    blocked?: Array<string>;
  }
}

export interface APIKeyListParams extends CursorParams {}

export declare namespace APIKeys {
  export {
    type APIKey as APIKey,
    type APIKeyList as APIKeyList,
    type APIKeysCursor as APIKeysCursor,
    type APIKeyCreateParams as APIKeyCreateParams,
    type APIKeyUpdateParams as APIKeyUpdateParams,
    type APIKeyListParams as APIKeyListParams,
  };
}
