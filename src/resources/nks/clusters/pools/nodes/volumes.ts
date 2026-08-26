// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as Shared from '../../../../shared';
import * as VolumesAPI from '../../../../compute/volumes/volumes';
import { APIPromise } from '../../../../../core/api-promise';
import { Cursor, type CursorParams, PagePromise } from '../../../../../core/pagination';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class Volumes extends APIResource {
  /**
   * Get details about a volume attached to an NKS node
   *
   * @example
   * ```ts
   * const nksNodeVolume =
   *   await client.nks.clusters.pools.nodes.volumes.get(
   *     'volume_id',
   *     {
   *       cluster_id: 'cluster_id',
   *       pool_id: 'pool_id',
   *       node_id: 'node_id',
   *     },
   *   );
   * ```
   */
  get(volumeID: string, params: VolumeGetParams, options?: RequestOptions): APIPromise<NKSNodeVolume> {
    const { cluster_id, pool_id, node_id } = params;
    return this._client.get(
      path`/v1/nks/clusters/${cluster_id}/pools/${pool_id}/nodes/${node_id}/volumes/${volumeID}`,
      options,
    );
  }

  /**
   * List all volumes attached to an NKS node
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const nksNodeVolume of client.nks.clusters.pools.nodes.volumes.list(
   *   'node_id',
   *   { cluster_id: 'cluster_id', pool_id: 'pool_id' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    nodeID: string,
    params: VolumeListParams,
    options?: RequestOptions,
  ): PagePromise<NKSNodeVolumesCursor, NKSNodeVolume> {
    const { cluster_id, pool_id, ...query } = params;
    return this._client.getAPIList(
      path`/v1/nks/clusters/${cluster_id}/pools/${pool_id}/nodes/${nodeID}/volumes`,
      Cursor<NKSNodeVolume>,
      { query, ...options },
    );
  }
}

export type NKSNodeVolumesCursor = Cursor<NKSNodeVolume>;

/**
 * NKS node volume details.
 */
export interface NKSNodeVolume {
  /**
   * Unique identifier for the volume.
   */
  id: string;

  /**
   * When the volume was created.
   */
  created_at: string;

  /**
   * Volume kind.
   */
  kind: VolumesAPI.VolumeKind;

  /**
   * Name of the volume.
   */
  name: string;

  /**
   * Unique identifier of the node the volume is attached to.
   */
  node_id: string;

  /**
   * Size of the volume in GB.
   */
  size: number;

  /**
   * Status of the resource.
   */
  status: Shared.ResourceStatus;

  /**
   * Type of the Volume.
   */
  type: VolumesAPI.VolumeType;

  /**
   * When the volume was last updated.
   */
  updated_at: string;
}

export interface NKSNodeVolumeList {
  items: Array<NKSNodeVolume>;

  /**
   * Pagination response details.
   */
  pagination: Shared.Pagination;
}

export interface VolumeGetParams {
  /**
   * Cluster ID
   */
  cluster_id: string;

  /**
   * Node Pool ID
   */
  pool_id: string;

  /**
   * Node ID
   */
  node_id: string;
}

export interface VolumeListParams extends CursorParams {
  /**
   * Path param: Cluster ID
   */
  cluster_id: string;

  /**
   * Path param: Node Pool ID
   */
  pool_id: string;

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
  export {
    type NKSNodeVolume as NKSNodeVolume,
    type NKSNodeVolumeList as NKSNodeVolumeList,
    type NKSNodeVolumesCursor as NKSNodeVolumesCursor,
    type VolumeGetParams as VolumeGetParams,
    type VolumeListParams as VolumeListParams,
  };
}
