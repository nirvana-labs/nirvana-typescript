// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
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
   *   name: 'my-api-key',
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
   * const apiKeyList = await client.apiKeys.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<APIKeyList> {
    return this._client.get('/v1/api_keys', options);
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

/**
 * API key response.
 */
export interface APIKey {
  /**
   * API key ID.
   */
  id: string;

  /**
   * When the API key was created.
   */
  created_at: string;

  /**
   * When the API key expires and is no longer valid.
   */
  expires_at: string;

  /**
   * API key name.
   */
  name: string;

  /**
   * Status of the API key.
   */
  status: 'active' | 'inactive' | 'expired';

  /**
   * When the API key was updated.
   */
  updated_at: string;

  /**
   * User ID that owns the API key.
   */
  user_id: string;

  /**
   * API key. Only returned on creation.
   */
  key?: string;

  /**
   * When the API key starts to be valid.
   */
  starts_at?: string;
}

export interface APIKeyList {
  items: Array<APIKey>;
}

export interface APIKeyCreateParams {
  /**
   * When the API key expires and is no longer valid.
   */
  expires_at: string;

  /**
   * API key name.
   */
  name: string;

  /**
   * When the API key starts to be valid.
   */
  starts_at?: string;
}

export interface APIKeyUpdateParams {
  /**
   * API key name.
   */
  name?: string;
}

export declare namespace APIKeys {
  export {
    type APIKey as APIKey,
    type APIKeyList as APIKeyList,
    type APIKeyCreateParams as APIKeyCreateParams,
    type APIKeyUpdateParams as APIKeyUpdateParams,
  };
}
