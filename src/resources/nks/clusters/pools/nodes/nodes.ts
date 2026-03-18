// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as Shared from '../../../../shared';
import * as VolumesAPI from './volumes';
import {
  NKSNodeVolume,
  NKSNodeVolumeList,
  NKSNodeVolumesCursor,
  VolumeGetParams,
  VolumeListParams,
  Volumes,
} from './volumes';
import { APIPromise } from '../../../../../core/api-promise';
import { Cursor, type CursorParams, PagePromise } from '../../../../../core/pagination';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class Nodes extends APIResource {
  volumes: VolumesAPI.Volumes = new VolumesAPI.Volumes(this._client);

  /**
   * List all nodes in an NKS node pool
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const nksNode of client.nks.clusters.pools.nodes.list(
   *   'pool_id',
   *   { cluster_id: 'cluster_id' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    poolID: string,
    params: NodeListParams,
    options?: RequestOptions,
  ): PagePromise<NKSNodesCursor, NKSNode> {
    const { cluster_id, ...query } = params;
    return this._client.getAPIList(
      path`/v1/nks/clusters/${cluster_id}/pools/${poolID}/nodes`,
      Cursor<NKSNode>,
      { query, ...options },
    );
  }

  /**
   * Get details about an NKS node
   *
   * @example
   * ```ts
   * const nksNode = await client.nks.clusters.pools.nodes.get(
   *   'node_id',
   *   { cluster_id: 'cluster_id', pool_id: 'pool_id' },
   * );
   * ```
   */
  get(nodeID: string, params: NodeGetParams, options?: RequestOptions): APIPromise<NKSNode> {
    const { cluster_id, pool_id } = params;
    return this._client.get(path`/v1/nks/clusters/${cluster_id}/pools/${pool_id}/nodes/${nodeID}`, options);
  }
}

export type NKSNodesCursor = Cursor<NKSNode>;

/**
 * NKS node details.
 */
export interface NKSNode {
  /**
   * Unique identifier for the node.
   */
  id: string;

  /**
   * When the node was created.
   */
  created_at: string;

  /**
   * Name of the node.
   */
  name: string;

  /**
   * Private IP address of the node.
   */
  private_ip: string | null;

  /**
   * Status of the resource.
   */
  status: Shared.ResourceStatus;

  /**
   * When the node was last updated.
   */
  updated_at: string;
}

export interface NKSNodeList {
  items: Array<NKSNode>;

  /**
   * Pagination response details.
   */
  pagination: Shared.Pagination;
}

export interface NodeListParams extends CursorParams {
  /**
   * Path param: Cluster ID
   */
  cluster_id: string;
}

export interface NodeGetParams {
  /**
   * Cluster ID
   */
  cluster_id: string;

  /**
   * Node Pool ID
   */
  pool_id: string;
}

Nodes.Volumes = Volumes;

export declare namespace Nodes {
  export {
    type NKSNode as NKSNode,
    type NKSNodeList as NKSNodeList,
    type NKSNodesCursor as NKSNodesCursor,
    type NodeListParams as NodeListParams,
    type NodeGetParams as NodeGetParams,
  };

  export {
    Volumes as Volumes,
    type NKSNodeVolume as NKSNodeVolume,
    type NKSNodeVolumeList as NKSNodeVolumeList,
    type NKSNodeVolumesCursor as NKSNodeVolumesCursor,
    type VolumeListParams as VolumeListParams,
    type VolumeGetParams as VolumeGetParams,
  };
}
