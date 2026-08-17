// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { Cursor, type CursorParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class InstanceTypes extends APIResource {
  /**
   * Get an instance type by region and name
   *
   * @example
   * ```ts
   * const instanceType = await client.instanceTypes.get(
   *   'n1-standard-8',
   *   { region: 'us-sva-2' },
   * );
   * ```
   */
  get(name: string, params: InstanceTypeGetParams, options?: RequestOptions): APIPromise<InstanceType> {
    const { region } = params;
    return this._client.get(path`/v1/instance_types/${region}/${name}`, options);
  }

  /**
   * List instance types
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const instanceType of client.instanceTypes.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: InstanceTypeListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<InstanceTypesCursor, InstanceType> {
    return this._client.getAPIList('/v1/instance_types', Cursor<InstanceType>, { query, ...options });
  }
}

export type InstanceTypesCursor = Cursor<InstanceType>;

/**
 * Instance type.
 */
export interface InstanceType {
  chipset: string;

  /**
   * When the Instance Type was created.
   */
  created_at: string;

  family: string;

  memory_gb: number;

  name: string;

  /**
   * Network bandwidth in Gbps.
   */
  network_bandwidth_gbps: number;

  /**
   * Region the resource is in.
   */
  region: Shared.RegionName;

  series: string;

  /**
   * When the Instance Type was updated.
   */
  updated_at: string;

  vcpu: number;
}

export interface InstanceTypeList {
  items: Array<InstanceType>;

  /**
   * Pagination response details.
   */
  pagination: Shared.Pagination;
}

export interface InstanceTypeGetParams {
  /**
   * Region name
   */
  region: 'us-sva-2';
}

export interface InstanceTypeListParams extends CursorParams {
  /**
   * Filter by chipset
   */
  chipset?: string;

  /**
   * Filter by family
   */
  family?: string;

  /**
   * Only Instance Types with at most this much memory, in GB
   */
  memory_gb_max?: number;

  /**
   * Only Instance Types with at least this much memory, in GB
   */
  memory_gb_min?: number;

  /**
   * Filter by a case-insensitive substring of the Instance Type name
   */
  name?: string;

  /**
   * Only Instance Types with at most this much network bandwidth, in Gbps
   */
  network_bandwidth_gbps_max?: number;

  /**
   * Only Instance Types with at least this much network bandwidth, in Gbps
   */
  network_bandwidth_gbps_min?: number;

  /**
   * Filter by region
   */
  region?: string;

  /**
   * Filter by series
   */
  series?: string;

  /**
   * Comma-separated sort terms in precedence order, each field:asc or field:desc.
   * Fields: series, family, name, vcpu, memory_gb, network_bandwidth_gbps
   */
  sort?: string;

  /**
   * Only Instance Types with at most this many vCPUs
   */
  vcpu_max?: number;

  /**
   * Only Instance Types with at least this many vCPUs
   */
  vcpu_min?: number;
}

export declare namespace InstanceTypes {
  export {
    type InstanceType as InstanceType,
    type InstanceTypeList as InstanceTypeList,
    type InstanceTypesCursor as InstanceTypesCursor,
    type InstanceTypeGetParams as InstanceTypeGetParams,
    type InstanceTypeListParams as InstanceTypeListParams,
  };
}
