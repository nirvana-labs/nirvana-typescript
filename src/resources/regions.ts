// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { Cursor, type CursorParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';

export class Regions extends APIResource {
  /**
   * List all regions
   */
  list(
    query: RegionListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<RegionsCursor, Region> {
    return this._client.getAPIList('/v1/regions', Cursor<Region>, { query, ...options });
  }
}

export type RegionsCursor = Cursor<Region>;

/**
 * Region response with product availability.
 */
export interface Region {
  /**
   * Availability status of the region.
   */
  availability: RegionAvailability;

  /**
   * Compute products available in this region.
   */
  compute: Region.Compute;

  /**
   * Name of the region.
   */
  name: string;

  /**
   * Networking products available in this region.
   */
  networking: Region.Networking;

  /**
   * Storage products available in this region.
   */
  storage: Region.Storage;
}

export namespace Region {
  /**
   * Compute products available in this region.
   */
  export interface Compute {
    /**
     * VMs indicates if Virtual Machines are available.
     */
    vms: boolean;
  }

  /**
   * Networking products available in this region.
   */
  export interface Networking {
    /**
     * Connect indicates if Nirvana Connect is available.
     */
    connect: boolean;

    /**
     * VPCs indicates if Virtual Private Clouds are available.
     */
    vpcs: boolean;
  }

  /**
   * Storage products available in this region.
   */
  export interface Storage {
    /**
     * ABS indicates if Accelerated Block Storage is available.
     */
    abs: boolean;

    /**
     * LocalNVMe indicates if locally-attached NVMe storage is available.
     */
    local_nvme: boolean;
  }
}

/**
 * Availability status of the region.
 */
export type RegionAvailability = 'live' | 'preview' | 'maintenance' | 'sunset';

export interface RegionList {
  items: Array<Region>;

  /**
   * Pagination response details.
   */
  pagination: Shared.Pagination;
}

export interface RegionListParams extends CursorParams {}

export declare namespace Regions {
  export {
    type Region as Region,
    type RegionAvailability as RegionAvailability,
    type RegionList as RegionList,
    type RegionsCursor as RegionsCursor,
    type RegionListParams as RegionListParams,
  };
}
