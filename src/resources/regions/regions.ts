// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { Cursor, type CursorParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Regions extends APIResource {
  /**
   * Get a region by name
   *
   * @example
   * ```ts
   * const region = await client.regions.get('us-sva-2');
   * ```
   */
  get(name: string, options?: RequestOptions): APIPromise<Region> {
    return this._client.get(path`/v1/regions/${name}`, options);
  }

  /**
   * List all regions
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const region of client.regions.list()) {
   *   // ...
   * }
   * ```
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
   * NKS products available in this region.
   */
  nks: Region.NKS;

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
   * NKS products available in this region.
   */
  export interface NKS {
    /**
     * Autoscaling indicates if NKS node pool autoscaling is available.
     */
    autoscaling: boolean;

    /**
     * Clusters indicates if NKS managed Kubernetes clusters are available.
     */
    clusters: boolean;
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

export interface RegionListParams extends CursorParams {
  /**
   * Filter by region availability
   */
  availability?: 'live' | 'preview' | 'maintenance' | 'sunset';

  /**
   * Only regions where Virtual Machines are available
   */
  compute_vms?: boolean;

  /**
   * Only regions where Nirvana Connect is available
   */
  networking_connect?: boolean;

  /**
   * Only regions where VPCs are available
   */
  networking_vpcs?: boolean;

  /**
   * Only regions where NKS node pool autoscaling is available
   */
  nks_autoscaling?: boolean;

  /**
   * Only regions where NKS clusters are available
   */
  nks_clusters?: boolean;

  /**
   * Comma-separated sort terms in precedence order, each field:asc or field:desc.
   * Fields: longitude, name, availability
   */
  sort?: string;

  /**
   * Only regions where Accelerated Block Storage is available
   */
  storage_abs?: boolean;

  /**
   * Only regions where locally-attached NVMe storage is available
   */
  storage_local_nvme?: boolean;
}

export declare namespace Regions {
  export {
    type Region as Region,
    type RegionAvailability as RegionAvailability,
    type RegionList as RegionList,
    type RegionsCursor as RegionsCursor,
    type RegionListParams as RegionListParams,
  };
}
