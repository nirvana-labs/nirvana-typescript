// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Quotas extends APIResource {
  /**
   * List quota usage and limits for the current organization across all regions
   *
   * @example
   * ```ts
   * const quotaList = await client.quotas.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<QuotaList> {
    return this._client.get('/v1/quotas', options);
  }

  /**
   * Get quota usage and limits for the current organization in a single region
   *
   * @example
   * ```ts
   * const quota = await client.quotas.get('us-sva-1');
   * ```
   */
  get(region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1', options?: RequestOptions): APIPromise<Quota> {
    return this._client.get(path`/v1/quotas/${region}`, options);
  }
}

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
   * Quota resource detail.
   */
  memory_gb: QuotaResourceDetail;

  /**
   * Quota resource detail.
   */
  vcpu: QuotaResourceDetail;
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
   * Quota resource detail.
   */
  connect_connections: QuotaResourceDetail;

  /**
   * Quota resource detail.
   */
  public_ips: QuotaResourceDetail;

  /**
   * Quota resource detail.
   */
  vpcs: QuotaResourceDetail;
}

/**
 * NKS quota.
 */
export interface QuotaNKS {
  /**
   * Quota resource detail.
   */
  clusters: QuotaResourceDetail;

  /**
   * Quota resource detail.
   */
  node_pool_memory_gb: QuotaResourceDetail;

  /**
   * Quota resource detail.
   */
  node_pool_vcpu: QuotaResourceDetail;

  /**
   * Quota resource detail.
   */
  public_ips: QuotaResourceDetail;
}

/**
 * Quota resource detail.
 */
export interface QuotaResourceDetail {
  limit: number;

  remaining: number;

  used: number;
}

/**
 * Storage quota.
 */
export interface QuotaStorage {
  /**
   * Quota resource detail.
   */
  abs: QuotaResourceDetail;

  /**
   * Quota resource detail.
   */
  local_nvme: QuotaResourceDetail;
}

export declare namespace Quotas {
  export {
    type Quota as Quota,
    type QuotaCompute as QuotaCompute,
    type QuotaList as QuotaList,
    type QuotaNetworking as QuotaNetworking,
    type QuotaNKS as QuotaNKS,
    type QuotaResourceDetail as QuotaResourceDetail,
    type QuotaStorage as QuotaStorage
  };
}
