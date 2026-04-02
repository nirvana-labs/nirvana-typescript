// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { Cursor, type CursorParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';

export class InstanceTypes extends APIResource {
  /**
   * List instance types
   */
  list(
    query: InstanceTypeListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<InstanceTypeListItemsCursor, InstanceTypeList.Item> {
    return this._client.getAPIList('/v1/instance_types', Cursor<InstanceTypeList.Item>, {
      query,
      ...options,
    });
  }
}

export type InstanceTypeListItemsCursor = Cursor<InstanceTypeList.Item>;

export interface InstanceTypeList {
  items: Array<InstanceTypeList.Item>;

  /**
   * Pagination response details.
   */
  pagination: Shared.Pagination;
}

export namespace InstanceTypeList {
  /**
   * Instance type.
   */
  export interface Item {
    chipset: string;

    /**
     * When the Instance Type was created.
     */
    created_at: string;

    memory_gi: number;

    name: string;

    region: string;

    /**
     * When the Instance Type was updated.
     */
    updated_at: string;

    vcpu: number;
  }
}

export interface InstanceTypeListParams extends CursorParams {}

export declare namespace InstanceTypes {
  export {
    type InstanceTypeList as InstanceTypeList,
    type InstanceTypeListItemsCursor as InstanceTypeListItemsCursor,
    type InstanceTypeListParams as InstanceTypeListParams,
  };
}
