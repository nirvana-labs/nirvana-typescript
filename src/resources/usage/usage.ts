// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { Cursor, type CursorParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class UsageResource extends APIResource {
  /**
   * List per-resource usage records for the current organization. Each item is one
   * resource with its nested dimension history (active and closed segments).
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const usage of client.usage.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: UsageListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<UsagesCursor, Usage> {
    return this._client.getAPIList('/v1/usage', Cursor<Usage>, { query, ...options });
  }

  /**
   * Get the usage record for a single resource (metadata plus dimension history) for
   * the current organization.
   *
   * @example
   * ```ts
   * const usage = await client.usage.get(
   *   '123e4567-e89b-12d3-a456-426614174000',
   * );
   * ```
   */
  get(resourceID: string, options?: RequestOptions): APIPromise<Usage> {
    return this._client.get(path`/v1/usage/${resourceID}`, options);
  }
}

export type UsagesCursor = Cursor<Usage>;

/**
 * Usage record for a single metered resource.
 */
export interface Usage {
  dimensions: Array<UsageDimension>;

  ended_at: string | null;

  project_id: string;

  /**
   * Region the resource is in.
   */
  region: Shared.RegionName;

  resource_id: string;

  /**
   * Kind of metered resource a ledger row belongs to.
   */
  resource_type: UsageResourceType;

  started_at: string;
}

/**
 * Top-level dimension entry; bundle heads expand via children.
 */
export interface UsageDimension {
  id: string;

  dimension: string;

  ended_at: string | null;

  quantity: number;

  started_at: string;

  children?: Array<UsageDimensionLeaf>;
}

/**
 * One ledger segment for a (resource, dimension) pair.
 */
export interface UsageDimensionLeaf {
  id: string;

  dimension: string;

  ended_at: string | null;

  quantity: number;

  started_at: string;
}

export interface UsageList {
  items: Array<Usage>;

  /**
   * Pagination response details.
   */
  pagination: Shared.Pagination;
}

/**
 * Kind of metered resource a ledger row belongs to.
 */
export type UsageResourceType =
  | 'vm'
  | 'volume'
  | 'vpc'
  | 'connect_connection'
  | 'nks_cluster'
  | 'nks_node_pool'
  | 'nks_load_balancer';

export interface UsageListParams extends CursorParams {}

export declare namespace UsageResource {
  export {
    type Usage as Usage,
    type UsageDimension as UsageDimension,
    type UsageDimensionLeaf as UsageDimensionLeaf,
    type UsageList as UsageList,
    type UsageResourceType as UsageResourceType,
    type UsagesCursor as UsagesCursor,
    type UsageListParams as UsageListParams,
  };
}
