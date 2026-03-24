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
   * CPU configuration.
   */
  cpu_config: NKSControllerCPUConfigResponse;

  /**
   * When the controller was created.
   */
  created_at: string;

  /**
   * Memory configuration.
   */
  memory_config: NKSControllerMemoryConfigResponse;

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

/**
 * CPU configuration.
 */
export interface NKSControllerCPUConfigResponse {
  /**
   * Number of virtual CPUs.
   */
  vcpu: number;
}

export interface NKSControllerList {
  items: Array<NKSController>;

  /**
   * Pagination response details.
   */
  pagination: Shared.Pagination;
}

/**
 * Memory configuration.
 */
export interface NKSControllerMemoryConfigResponse {
  /**
   * Size of the memory in GB.
   */
  size: number;
}

export interface ControllerListParams extends CursorParams {}

export interface ControllerGetParams {
  /**
   * Cluster ID
   */
  cluster_id: string;
}

Controllers.Volumes = Volumes;

export declare namespace Controllers {
  export {
    type NKSController as NKSController,
    type NKSControllerCPUConfigResponse as NKSControllerCPUConfigResponse,
    type NKSControllerList as NKSControllerList,
    type NKSControllerMemoryConfigResponse as NKSControllerMemoryConfigResponse,
    type NKSControllersCursor as NKSControllersCursor,
    type ControllerListParams as ControllerListParams,
    type ControllerGetParams as ControllerGetParams,
  };

  export {
    Volumes as Volumes,
    type NKSControllerVolume as NKSControllerVolume,
    type NKSControllerVolumeList as NKSControllerVolumeList,
    type NKSControllerVolumesCursor as NKSControllerVolumesCursor,
    type VolumeListParams as VolumeListParams,
    type VolumeGetParams as VolumeGetParams,
  };
}
