// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as Shared from '../../../shared';
import * as VolumesAPI from './volumes';
import {
  NKSControllerVolume,
  NKSControllerVolumeList,
  NKSControllerVolumesCursor,
  VolumeGetParams,
  VolumeListParams,
  Volumes,
} from './volumes';
import { APIPromise } from '../../../../core/api-promise';
import { Cursor, type CursorParams, PagePromise } from '../../../../core/pagination';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Controllers extends APIResource {
  volumes: VolumesAPI.Volumes = new VolumesAPI.Volumes(this._client);

  /**
   * Get details about an NKS controller
   *
   * @example
   * ```ts
   * const nksController =
   *   await client.nks.clusters.controllers.get(
   *     'controller_id',
   *     { cluster_id: 'cluster_id' },
   *   );
   * ```
   */
  get(
    controllerID: string,
    params: ControllerGetParams,
    options?: RequestOptions,
  ): APIPromise<NKSController> {
    const { cluster_id } = params;
    return this._client.get(path`/v1/nks/clusters/${cluster_id}/controllers/${controllerID}`, options);
  }

  /**
   * List all controllers in an NKS cluster
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const nksController of client.nks.clusters.controllers.list(
   *   'cluster_id',
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    clusterID: string,
    query: ControllerListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<NKSControllersCursor, NKSController> {
    return this._client.getAPIList(path`/v1/nks/clusters/${clusterID}/controllers`, Cursor<NKSController>, {
      query,
      ...options,
    });
  }
}

export type NKSControllersCursor = Cursor<NKSController>;

/**
 * NKS controller details.
 */
export interface NKSController {
  /**
   * Unique identifier for the controller.
   */
  id: string;

  /**
   * When the controller was created.
   */
  created_at: string;

  /**
   * Instance type name.
   */
  instance_type: string;

  /**
   * Name of the controller.
   */
  name: string;

  /**
   * Private IP address of the controller.
   */
  private_ip: string | null;

  /**
   * Status of the resource.
   */
  status: Shared.ResourceStatus;

  /**
   * When the controller was last updated.
   */
  updated_at: string;
}

export interface NKSControllerList {
  items: Array<NKSController>;

  /**
   * Pagination response details.
   */
  pagination: Shared.Pagination;
}

export interface ControllerGetParams {
  /**
   * Cluster ID
   */
  cluster_id: string;
}

export interface ControllerListParams extends CursorParams {
  /**
   * Filter by whether a private address has been assigned yet
   */
  has_private_ip?: boolean;

  /**
   * Filter by the controller's instance type
   */
  instance_type?: string;

  /**
   * Filter by a case-insensitive substring of the controller name
   */
  name?: string;

  /**
   * Filter by the controller's private address
   */
  private_ip?: string;

  /**
   * Comma-separated sort terms in precedence order, each field:asc or field:desc.
   * Fields: created_at, updated_at, name, status
   */
  sort?: string;

  /**
   * Filter by controller status
   */
  status?: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'error';
}

Controllers.Volumes = Volumes;

export declare namespace Controllers {
  export {
    type NKSController as NKSController,
    type NKSControllerList as NKSControllerList,
    type NKSControllersCursor as NKSControllersCursor,
    type ControllerGetParams as ControllerGetParams,
    type ControllerListParams as ControllerListParams,
  };

  export {
    Volumes as Volumes,
    type NKSControllerVolume as NKSControllerVolume,
    type NKSControllerVolumeList as NKSControllerVolumeList,
    type NKSControllerVolumesCursor as NKSControllerVolumesCursor,
    type VolumeGetParams as VolumeGetParams,
    type VolumeListParams as VolumeListParams,
  };
}
