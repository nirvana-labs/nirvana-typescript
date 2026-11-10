// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as OperationsAPI from '../../operations/operations';
import * as AvailabilityAPI from './availability';
import { Availability, AvailabilityCreateParams } from './availability';
import * as CostAPI from './cost';
import { Cost, CostCreateParams } from './cost';
import { APIPromise } from '../../../core/api-promise';
import { Cursor, type CursorParams, PagePromise } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Buckets extends APIResource {
  availability: AvailabilityAPI.Availability = new AvailabilityAPI.Availability(this._client);
  cost: CostAPI.Cost = new CostAPI.Cost(this._client);

  /**
   * Create a Bucket. The Bucket is created asynchronously: follow the returned
   * operation until it is done.
   *
   * @example
   * ```ts
   * const operation = await client.storage.buckets.create({
   *   name: 'my-bucket',
   *   project_id: '123e4567-e89b-12d3-a456-426614174000',
   *   region: 'us-sva-2',
   * });
   * ```
   */
  create(body: BucketCreateParams, options?: RequestOptions): APIPromise<OperationsAPI.Operation> {
    return this._client.post('/v1/storage/buckets', { body, ...options });
  }

  /**
   * Get details about a Bucket
   *
   * @example
   * ```ts
   * const bucket = await client.storage.buckets.get(
   *   'bucket_id',
   * );
   * ```
   */
  get(bucketID: string, options?: RequestOptions): APIPromise<Bucket> {
    return this._client.get(path`/v1/storage/buckets/${bucketID}`, options);
  }

  /**
   * Update a Bucket's tags. A Bucket's name is its S3 name and cannot be changed.
   *
   * @example
   * ```ts
   * const bucket = await client.storage.buckets.update(
   *   'bucket_id',
   * );
   * ```
   */
  update(bucketID: string, body: BucketUpdateParams, options?: RequestOptions): APIPromise<Bucket> {
    return this._client.patch(path`/v1/storage/buckets/${bucketID}`, { body, ...options });
  }

  /**
   * Delete a Bucket. The Bucket is deleted asynchronously: follow the returned
   * operation until it is done. A Bucket that still holds objects is only deleted
   * with force.
   *
   * @example
   * ```ts
   * const operation = await client.storage.buckets.delete(
   *   'bucket_id',
   * );
   * ```
   */
  delete(
    bucketID: string,
    params: BucketDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OperationsAPI.Operation> {
    const { force } = params ?? {};
    return this._client.delete(path`/v1/storage/buckets/${bucketID}`, { query: { force }, ...options });
  }

  /**
   * List all Buckets
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const bucket of client.storage.buckets.list({
   *   project_id: 'project_id',
   * })) {
   *   // ...
   * }
   * ```
   */
  list(query: BucketListParams, options?: RequestOptions): PagePromise<BucketsCursor, Bucket> {
    return this._client.getAPIList('/v1/storage/buckets', Cursor<Bucket>, { query, ...options });
  }
}

export type BucketsCursor = Cursor<Bucket>;

/**
 * Bucket details.
 */
export interface Bucket {
  /**
   * Unique identifier for the Bucket.
   */
  id: string;

  /**
   * When the Bucket was created.
   */
  created_at: string;

  /**
   * S3 endpoint of the Bucket's region. Point S3 clients at it, with an Object
   * Storage Key of the same project and region.
   */
  endpoint: string;

  /**
   * Name of the Bucket, used to address it over S3.
   */
  name: string;

  /**
   * Number of objects in the Bucket. Updated periodically, so it can lag behind
   * recent writes.
   */
  object_count: number;

  /**
   * Project ID the Bucket belongs to.
   */
  project_id: string;

  /**
   * Region the resource is in.
   */
  region: Shared.RegionName;

  /**
   * Region S3 clients must sign their requests for (the SigV4 region). Configure it
   * as the region of any S3 client or SDK used with the Bucket.
   */
  signing_region: string;

  /**
   * Total size of the objects in the Bucket, in bytes. Updated periodically, so it
   * can lag behind recent writes.
   */
  size_bytes: number;

  /**
   * Status of the resource.
   */
  status: Shared.ResourceStatus;

  /**
   * Tags attached to the Bucket.
   */
  tags: Array<string>;

  /**
   * When the Bucket was updated.
   */
  updated_at: string;

  /**
   * Path-style URL of the Bucket.
   */
  url: string;
}

export interface BucketList {
  items: Array<Bucket>;

  /**
   * Pagination response details.
   */
  pagination: Shared.Pagination;
}

export interface BucketCreateParams {
  /**
   * Name of the Bucket, used to address it over S3. It must be 3 to 63 characters of
   * lowercase letters, digits, dots and hyphens, start and end with a letter or
   * digit, not contain two adjacent dots and not be formatted as an IP address.
   * "admin" and "ops-api" are reserved. The name cannot be changed once the Bucket
   * is created.
   */
  name: string;

  /**
   * Project ID the Bucket belongs to.
   */
  project_id: string;

  /**
   * Region the resource is in.
   */
  region: Shared.RegionName;

  /**
   * Tags to attach to the Bucket.
   */
  tags?: Array<string>;
}

export interface BucketUpdateParams {
  /**
   * Tags to attach to the Bucket.
   */
  tags?: Array<string>;
}

export interface BucketDeleteParams {
  /**
   * Permanently delete every object in the Bucket, including all versions, before
   * deleting it. Without it, deleting a Bucket that holds objects fails.
   */
  force?: boolean;
}

export interface BucketListParams extends CursorParams {
  /**
   * Project ID of resources to request
   */
  project_id: string;

  /**
   * Filter by a case-insensitive substring of the Bucket name
   */
  name?: string;

  /**
   * Filter by region
   */
  region?: string;

  /**
   * Comma-separated sort terms in precedence order, each field:asc or field:desc.
   * Fields: created_at, updated_at, name, status, size_bytes, object_count
   */
  sort?: string;

  /**
   * Filter by Bucket status
   */
  status?: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'error';

  /**
   * Filter by tags. Repeat the parameter to require several tags; a Bucket must
   * carry all of them.
   */
  tags?: Array<string>;
}

Buckets.Availability = Availability;
Buckets.Cost = Cost;

export declare namespace Buckets {
  export {
    type Bucket as Bucket,
    type BucketList as BucketList,
    type BucketsCursor as BucketsCursor,
    type BucketCreateParams as BucketCreateParams,
    type BucketUpdateParams as BucketUpdateParams,
    type BucketDeleteParams as BucketDeleteParams,
    type BucketListParams as BucketListParams,
  };

  export { Availability as Availability, type AvailabilityCreateParams as AvailabilityCreateParams };

  export { Cost as Cost, type CostCreateParams as CostCreateParams };
}
