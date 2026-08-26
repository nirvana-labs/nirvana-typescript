// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as NodesVolumesAPI from './nodes/volumes';
import { NKSNodeVolumesCursor } from './nodes/volumes';
import { Cursor, type CursorParams, PagePromise } from '../../../../core/pagination';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Volumes extends APIResource {
  /**
   * List all volumes attached to the nodes of an NKS node pool
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const nksNodeVolume of client.nks.clusters.pools.volumes.list(
   *   'pool_id',
   *   { cluster_id: 'cluster_id' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    poolID: string,
    params: VolumeListParams,
    options?: RequestOptions,
  ): PagePromise<NKSNodeVolumesCursor, NodesVolumesAPI.NKSNodeVolume> {
    const { cluster_id, ...query } = params;
    return this._client.getAPIList(
      path`/v1/nks/clusters/${cluster_id}/pools/${poolID}/volumes`,
      Cursor<NodesVolumesAPI.NKSNodeVolume>,
      { query, ...options },
    );
  }
}

export interface VolumeListParams extends CursorParams {
  /**
   * Path param: Cluster ID
   */
  cluster_id: string;

  /**
   * Query param: Filter by volume kind
   */
  kind?: 'boot' | 'data';

  /**
   * Query param: Filter by a case-insensitive substring of the volume name
   */
  name?: string;

  /**
   * Query param: Only volumes of at most this size
   */
  size_gb_max?: number;

  /**
   * Query param: Only volumes of at least this size
   */
  size_gb_min?: number;

  /**
   * Query param: Comma-separated sort terms in precedence order, each field:asc or
   * field:desc. Fields: created_at, updated_at, name, status, size_gb
   */
  sort?: string;

  /**
   * Query param: Filter by volume status
   */
  status?: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'error';

  /**
   * Query param: Filter by storage type
   */
  type?: 'abs';
}

export declare namespace Volumes {
  export { type VolumeListParams as VolumeListParams };
}

export { type NKSNodeVolumesCursor };
