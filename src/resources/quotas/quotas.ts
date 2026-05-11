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
   * const quota = await client.quotas.get('us-sva-2');
   * ```
   */
  get(region: 'us-sva-2', options?: RequestOptions): APIPromise<Quota> {
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

export declare namespace Quotas {
  export {
    type Quota as Quota,
    type QuotaCompute as QuotaCompute,
    type QuotaDimensionDetail as QuotaDimensionDetail,
    type QuotaList as QuotaList,
    type QuotaNetworking as QuotaNetworking,
    type QuotaNKS as QuotaNKS,
    type QuotaStorage as QuotaStorage,
  };
}
