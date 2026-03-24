// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as Shared from '../../../shared';
import * as VolumesAPI from '../../../compute/volumes/volumes';
import { APIPromise } from '../../../../core/api-promise';
import { Cursor, type CursorParams, PagePromise } from '../../../../core/pagination';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Volumes extends APIResource {
  /**
   * List all volumes attached to an NKS controller
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const nksControllerVolume of client.nks.clusters.controllers.volumes.list(
   *   'controller_id',
   *   { cluster_id: 'cluster_id' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    controllerID: string,
    params: VolumeListParams,
    options?: RequestOptions,
  ): PagePromise<NKSControllerVolumesCursor, NKSControllerVolume> {
    const { cluster_id, ...query } = params;
    return this._client.getAPIList(
      path`/v1/nks/clusters/${cluster_id}/controllers/${controllerID}/volumes`,
      Cursor<NKSControllerVolume>,
      { query, ...options },
    );
  }

  /**
   * Get details about a volume attached to an NKS controller
   *
   * @example
   * ```ts
   * const nksControllerVolume =
   *   await client.nks.clusters.controllers.volumes.get(
   *     'volume_id',
   *     {
   *       cluster_id: 'cluster_id',
   *       controller_id: 'controller_id',
   *     },
   *   );
   * ```
   */
  get(volumeID: string, params: VolumeGetParams, options?: RequestOptions): APIPromise<NKSControllerVolume> {
    const { cluster_id, controller_id } = params;
    return this._client.get(
      path`/v1/nks/clusters/${cluster_id}/controllers/${controller_id}/volumes/${volumeID}`,
      options,
    );
  }
}

export type NKSControllerVolumesCursor = Cursor<NKSControllerVolume>;

/**
 * NKS controller volume details.
 */
export interface NKSControllerVolume {
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

export interface NKSControllerVolumeList {
  items: Array<NKSControllerVolume>;

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
}

export interface VolumeGetParams {
  /**
   * Cluster ID
   */
  cluster_id: string;

  /**
   * Controller ID
   */
  controller_id: string;
}

export declare namespace Volumes {
  export {
    type NKSControllerVolume as NKSControllerVolume,
    type NKSControllerVolumeList as NKSControllerVolumeList,
    type NKSControllerVolumesCursor as NKSControllerVolumesCursor,
    type VolumeListParams as VolumeListParams,
    type VolumeGetParams as VolumeGetParams,
  };
}
