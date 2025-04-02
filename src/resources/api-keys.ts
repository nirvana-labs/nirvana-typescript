// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class APIKeys extends APIResource {
  /**
   * Create a new API key
   */
  create(options?: Core.RequestOptions): Core.APIPromise<APIKey> {
    return this._client.post('/api_keys', options);
  }

  /**
   * List all API keys you created
   */
  list(options?: Core.RequestOptions): Core.APIPromise<APIKeyList> {
    return this._client.get('/api_keys', options);
  }

  /**
   * Delete an API key
   */
  delete(apiKeyId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/api_keys/${apiKeyId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Get details about an API key
   */
  get(apiKeyId: string, options?: Core.RequestOptions): Core.APIPromise<APIKey> {
    return this._client.get(`/api_keys/${apiKeyId}`, options);
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
   * Time on which the API key was created.
   */
  created_at: string;

  /**
   * Time after which the API key is not valid.
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
   * User ID that owns the API key.
   */
  user_id: string;

  /**
   * API key.
   */
  key?: string;

  /**
   * Time before which the API key is not valid.
   */
  not_before?: string;
}

export interface APIKeyList {
  items: Array<APIKey>;
}

export declare namespace APIKeys {
  export { type APIKey as APIKey, type APIKeyList as APIKeyList };
}
