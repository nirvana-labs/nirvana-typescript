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

export interface VolumeListParams extends CursorParams {
  /**
   * Path param: Cluster ID
   */
  cluster_id: string;

  /**
   * Path param: Node Pool ID
   */
  pool_id: string;
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

export declare namespace Volumes {
  export {
    type NKSNodeVolume as NKSNodeVolume,
    type NKSNodeVolumeList as NKSNodeVolumeList,
    type NKSNodeVolumesCursor as NKSNodeVolumesCursor,
    type VolumeListParams as VolumeListParams,
    type VolumeGetParams as VolumeGetParams,
  };
}
