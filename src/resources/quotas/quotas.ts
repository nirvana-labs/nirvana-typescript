// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { Cursor, type CursorParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Quotas extends APIResource {
  /**
   * Get quota usage and limits for the current organization in a single region
   *
   * @example
   * ```ts
   * const quota = await client.quotas.get('us-sva-2');
   * ```
   */
  get(region: 'us-sva-2', options?: RequestOptions): APIPromise<Quota> {
    return this._client.get(path`/v1/quotas/${region}`, options);
  }

  /**
   * List quota usage and limits for the current organization across all regions
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const quota of client.quotas.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: QuotaListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<QuotasCursor, Quota> {
    return this._client.getAPIList('/v1/quotas', Cursor<Quota>, { query, ...options });
  }
}

export type QuotasCursor = Cursor<Quota>;

/**
 * Quota response.
 */
export interface Quota {
  /**
   * Compute quota.
   */
  compute: QuotaCompute;

  /**
   * Networking quota.
   */
  networking: QuotaNetworking;

  /**
   * NKS quota.
   */
  nks: QuotaNKS;

  /**
   * Region the resource is in.
   */
  region: Shared.RegionName;

  /**
   * Storage quota.
   */
  storage: QuotaStorage;
}

/**
 * Compute quota.
 */
export interface QuotaCompute {
  /**
   * Quota dimension detail.
   */
  memory_gb: QuotaDimensionDetail;

  /**
   * Quota dimension detail.
   */
  vcpu: QuotaDimensionDetail;
}

/**
 * Quota dimension detail.
 */
export interface QuotaDimensionDetail {
  limit: number;

  remaining: number;

  used: number;
}

export interface QuotaList {
  items: Array<Quota>;

  /**
   * Pagination response details.
   */
  pagination: Shared.Pagination;
}

/**
 * Networking quota.
 */
export interface QuotaNetworking {
  /**
   * Quota dimension detail.
   */
  connect_connections: QuotaDimensionDetail;

  /**
   * Quota dimension detail.
   */
  public_ips: QuotaDimensionDetail;

  /**
   * Quota dimension detail.
   */
  vpcs: QuotaDimensionDetail;
}

/**
 * NKS quota.
 */
export interface QuotaNKS {
  /**
   * Quota dimension detail.
   */
  clusters: QuotaDimensionDetail;

  /**
   * Quota dimension detail.
   */
  node_pool_memory_gb: QuotaDimensionDetail;

  /**
   * Quota dimension detail.
   */
  node_pool_vcpu: QuotaDimensionDetail;

  /**
   * Quota dimension detail.
   */
  public_ips: QuotaDimensionDetail;
}

/**
 * Storage quota.
 */
export interface QuotaStorage {
  /**
   * Quota dimension detail.
   */
  abs: QuotaDimensionDetail;

  /**
   * Quota dimension detail.
   */
  local_nvme: QuotaDimensionDetail;
}

export interface QuotaListParams extends CursorParams {
  /**
   * Filter by region
   */
  region?: string;

  /**
   * Comma-separated sort terms in precedence order, each field:asc or field:desc.
   * Fields: region
   */
  sort?: string;
}

export declare namespace Quotas {
  export {
    type Quota as Quota,
    type QuotaCompute as QuotaCompute,
    type QuotaDimensionDetail as QuotaDimensionDetail,
    type QuotaList as QuotaList,
    type QuotaNetworking as QuotaNetworking,
    type QuotaNKS as QuotaNKS,
    type QuotaStorage as QuotaStorage,
    type QuotasCursor as QuotasCursor,
    type QuotaListParams as QuotaListParams,
  };
}
