// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { Cursor, type CursorParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Keys extends APIResource {
  /**
   * Create an S3 access key for a project's Buckets in a region. The response is the
   * only one that includes the secret access key.
   *
   * @example
   * ```ts
   * const objectStorageKeyWithSecret =
   *   await client.storage.keys.create({
   *     name: 'ci-uploads',
   *     project_id: '123e4567-e89b-12d3-a456-426614174000',
   *     region: 'us-sva-2',
   *   });
   * ```
   */
  create(body: KeyCreateParams, options?: RequestOptions): APIPromise<ObjectStorageKeyWithSecret> {
    return this._client.post('/v1/storage/keys', { body, ...options });
  }

  /**
   * Get details about an Object Storage Key. The secret access key is not included.
   *
   * @example
   * ```ts
   * const objectStorageKey = await client.storage.keys.get(
   *   'key_id',
   * );
   * ```
   */
  get(keyID: string, options?: RequestOptions): APIPromise<ObjectStorageKey> {
    return this._client.get(path`/v1/storage/keys/${keyID}`, options);
  }

  /**
   * Rename an Object Storage Key. Its access key and secret do not change.
   *
   * @example
   * ```ts
   * const objectStorageKey = await client.storage.keys.update(
   *   'key_id',
   * );
   * ```
   */
  update(keyID: string, body: KeyUpdateParams, options?: RequestOptions): APIPromise<ObjectStorageKey> {
    return this._client.patch(path`/v1/storage/keys/${keyID}`, { body, ...options });
  }

  /**
   * Delete an Object Storage Key. It stops working immediately.
   *
   * @example
   * ```ts
   * await client.storage.keys.delete('key_id');
   * ```
   */
  delete(keyID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/storage/keys/${keyID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * List all Object Storage Keys. Secret access keys are not included.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const objectStorageKey of client.storage.keys.list(
   *   { project_id: 'project_id' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    query: KeyListParams,
    options?: RequestOptions,
  ): PagePromise<ObjectStorageKeysCursor, ObjectStorageKey> {
    return this._client.getAPIList('/v1/storage/keys', Cursor<ObjectStorageKey>, { query, ...options });
  }
}

export type ObjectStorageKeysCursor = Cursor<ObjectStorageKey>;

/**
 * Object Storage Key details. The secret access key is only returned when the key
 * is created.
 */
export interface ObjectStorageKey {
  /**
   * Unique identifier for the Object Storage Key.
   */
  id: string;

  /**
   * S3 access key ID.
   */
  access_key: string;

  /**
   * When the Object Storage Key was created.
   */
  created_at: string;

  /**
   * Name of the Object Storage Key.
   */
  name: string;

  /**
   * Project ID the Object Storage Key belongs to.
   */
  project_id: string;

  /**
   * Region the resource is in.
   */
  region: Shared.RegionName;

  /**
   * When the Object Storage Key was updated.
   */
  updated_at: string;
}

export interface ObjectStorageKeyList {
  items: Array<ObjectStorageKey>;

  /**
   * Pagination response details.
   */
  pagination: Shared.Pagination;
}

/**
 * Object Storage Key details, including the secret access key. Returned only when
 * the key is created.
 */
export interface ObjectStorageKeyWithSecret {
  /**
   * Unique identifier for the Object Storage Key.
   */
  id: string;

  /**
   * S3 access key ID.
   */
  access_key: string;

  /**
   * When the Object Storage Key was created.
   */
  created_at: string;

  /**
   * Name of the Object Storage Key.
   */
  name: string;

  /**
   * Project ID the Object Storage Key belongs to.
   */
  project_id: string;

  /**
   * Region the resource is in.
   */
  region: Shared.RegionName;

  /**
   * S3 secret access key. It is only returned here and cannot be retrieved again:
   * store it securely, or delete the key and create a new one if it is lost.
   */
  secret: string;

  /**
   * When the Object Storage Key was updated.
   */
  updated_at: string;
}

export interface KeyCreateParams {
  /**
   * Name of the Object Storage Key.
   */
  name: string;

  /**
   * Project ID the Object Storage Key belongs to. The key can access the project's
   * Buckets in its region.
   */
  project_id: string;

  /**
   * Region the resource is in.
   */
  region: Shared.RegionName;
}

export interface KeyUpdateParams {
  /**
   * Name of the Object Storage Key.
   */
  name?: string;
}

export interface KeyListParams extends CursorParams {
  /**
   * Project ID of resources to request
   */
  project_id: string;

  /**
   * Filter by a case-insensitive substring of the Object Storage Key name
   */
  name?: string;

  /**
   * Filter by region
   */
  region?: string;

  /**
   * Comma-separated sort terms in precedence order, each field:asc or field:desc.
   * Fields: created_at, updated_at, name
   */
  sort?: string;
}

export declare namespace Keys {
  export {
    type ObjectStorageKey as ObjectStorageKey,
    type ObjectStorageKeyList as ObjectStorageKeyList,
    type ObjectStorageKeyWithSecret as ObjectStorageKeyWithSecret,
    type ObjectStorageKeysCursor as ObjectStorageKeysCursor,
    type KeyCreateParams as KeyCreateParams,
    type KeyUpdateParams as KeyUpdateParams,
    type KeyListParams as KeyListParams,
  };
}
