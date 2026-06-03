// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as VolumesAPI from '../../compute/volumes/volumes';
import { APIPromise } from '../../../core/api-promise';
import { Cursor, type CursorParams, PagePromise } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class PersistentVolumeClaims extends APIResource {
  /**
   * Get details about an NKS persistent volume claim
   *
   * @example
   * ```ts
   * const persistentVolumeClaim =
   *   await client.nks.clusters.persistentVolumeClaims.get(
   *     'persistent_volume_claim_id',
   *     { cluster_id: 'cluster_id' },
   *   );
   * ```
   */
  get(
    persistentVolumeClaimID: string,
    params: PersistentVolumeClaimGetParams,
    options?: RequestOptions,
  ): APIPromise<PersistentVolumeClaim> {
    const { cluster_id } = params;
    return this._client.get(
      path`/v1/nks/clusters/${cluster_id}/persistent_volume_claims/${persistentVolumeClaimID}`,
      options,
    );
  }

  /**
   * List all persistent volume claims in an NKS cluster
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const persistentVolumeClaim of client.nks.clusters.persistentVolumeClaims.list(
   *   'cluster_id',
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    clusterID: string,
    query: PersistentVolumeClaimListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<PersistentVolumeClaimsCursor, PersistentVolumeClaim> {
    return this._client.getAPIList(
      path`/v1/nks/clusters/${clusterID}/persistent_volume_claims`,
      Cursor<PersistentVolumeClaim>,
      { query, ...options },
    );
  }
}

export type PersistentVolumeClaimsCursor = Cursor<PersistentVolumeClaim>;

/**
 * NKS persistent volume claim details.
 */
export interface PersistentVolumeClaim {
  /**
   * Unique identifier for the persistent volume claim.
   */
  id: string;

  /**
   * Cluster this persistent volume claim belongs to.
   */
  cluster_id: string;

  /**
   * When the persistent volume claim was first discovered.
   */
  created_at: string;

  /**
   * Name of the persistent volume claim.
   */
  name: string;

  /**
   * Size of the persistent volume claim in GB.
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
   * When the persistent volume claim was last updated.
   */
  updated_at: string;
}

export interface PersistentVolumeClaimList {
  items: Array<PersistentVolumeClaim>;

  /**
   * Pagination response details.
   */
  pagination: Shared.Pagination;
}

export interface PersistentVolumeClaimGetParams {
  /**
   * Cluster ID
   */
  cluster_id: string;
}

export interface PersistentVolumeClaimListParams extends CursorParams {}

export declare namespace PersistentVolumeClaims {
  export {
    type PersistentVolumeClaim as PersistentVolumeClaim,
    type PersistentVolumeClaimList as PersistentVolumeClaimList,
    type PersistentVolumeClaimsCursor as PersistentVolumeClaimsCursor,
    type PersistentVolumeClaimGetParams as PersistentVolumeClaimGetParams,
    type PersistentVolumeClaimListParams as PersistentVolumeClaimListParams,
  };
}
