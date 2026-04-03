// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { Cursor, type CursorParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class InstanceTypes extends APIResource {
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

  memory_gi: number;

  name: string;

  /**
   * Region the resource is in.
   */
  region: Shared.RegionName;

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

export interface InstanceTypeListParams extends CursorParams {}

export interface InstanceTypeGetParams {
  /**
   * Region name
   */
  region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1' | 'us-wdc-1';
}

export declare namespace InstanceTypes {
  export {
    type InstanceType as InstanceType,
    type InstanceTypeList as InstanceTypeList,
    type InstanceTypesCursor as InstanceTypesCursor,
    type InstanceTypeListParams as InstanceTypeListParams,
    type InstanceTypeGetParams as InstanceTypeGetParams,
  };
}
