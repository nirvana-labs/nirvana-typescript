// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as Shared from '../../../shared';
import * as OperationsAPI from '../../../operations/operations';
import * as VolumesAPI from '../../../compute/volumes/volumes';
import * as AvailabilityAPI from './availability';
import { Availability, AvailabilityCreateParams, AvailabilityUpdateParams } from './availability';
import * as CostAPI from './cost';
import { Cost, CostCreateParams, CostUpdateParams } from './cost';
import * as NodesAPI from './nodes/nodes';
import {
  NKSNode,
  NKSNodeList,
  NKSNodesCursor,
  NodeDeleteParams,
  NodeGetParams,
  NodeListParams,
  Nodes,
} from './nodes/nodes';
import { APIPromise } from '../../../../core/api-promise';
import { Cursor, type CursorParams, PagePromise } from '../../../../core/pagination';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Pools extends APIResource {
  availability: AvailabilityAPI.Availability = new AvailabilityAPI.Availability(this._client);
  cost: CostAPI.Cost = new CostAPI.Cost(this._client);
  nodes: NodesAPI.Nodes = new NodesAPI.Nodes(this._client);

  /**
   * Create a node pool in an NKS cluster
   *
   * @example
   * ```ts
   * const operation = await client.nks.clusters.pools.create(
   *   'cluster_id',
   *   {
   *     name: 'my-node-pool',
   *     node_config: {
   *       boot_volume: { size: 100, type: 'abs' },
   *       instance_type: 'n1-standard-8',
   *     },
   *   },
   * );
   * ```
   */
  create(
    clusterID: string,
    body: PoolCreateParams,
    options?: RequestOptions,
  ): APIPromise<OperationsAPI.Operation> {
    return this._client.post(path`/v1/nks/clusters/${clusterID}/pools`, { body, ...options });
  }

  /**
   * Get details about an NKS node pool
   *
   * @example
   * ```ts
   * const nksNodePool = await client.nks.clusters.pools.get(
   *   'pool_id',
   *   { cluster_id: 'cluster_id' },
   * );
   * ```
   */
  get(poolID: string, params: PoolGetParams, options?: RequestOptions): APIPromise<NKSNodePool> {
    const { cluster_id } = params;
    return this._client.get(path`/v1/nks/clusters/${cluster_id}/pools/${poolID}`, options);
  }

  /**
   * Update an NKS node pool
   *
   * @example
   * ```ts
   * const operation = await client.nks.clusters.pools.update(
   *   'pool_id',
   *   { cluster_id: 'cluster_id' },
   * );
   * ```
   */
  update(
    poolID: string,
    params: PoolUpdateParams,
    options?: RequestOptions,
  ): APIPromise<OperationsAPI.Operation> {
    const { cluster_id, ...body } = params;
    return this._client.patch(path`/v1/nks/clusters/${cluster_id}/pools/${poolID}`, { body, ...options });
  }

  /**
   * Delete an NKS node pool
   *
   * @example
   * ```ts
   * const operation = await client.nks.clusters.pools.delete(
   *   'pool_id',
   *   { cluster_id: 'cluster_id' },
   * );
   * ```
   */
  delete(
    poolID: string,
    params: PoolDeleteParams,
    options?: RequestOptions,
  ): APIPromise<OperationsAPI.Operation> {
    const { cluster_id } = params;
    return this._client.delete(path`/v1/nks/clusters/${cluster_id}/pools/${poolID}`, options);
  }

  /**
   * List all node pools in an NKS cluster
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const nksNodePool of client.nks.clusters.pools.list(
   *   'cluster_id',
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    clusterID: string,
    query: PoolListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<NKSNodePoolsCursor, NKSNodePool> {
    return this._client.getAPIList(path`/v1/nks/clusters/${clusterID}/pools`, Cursor<NKSNodePool>, {
      query,
      ...options,
    });
  }
}

export type NKSNodePoolsCursor = Cursor<NKSNodePool>;

/**
 * NKS node pool details.
 */
export interface NKSNodePool {
  /**
   * Unique identifier for the node pool.
   */
  id: string;

  /**
   * ID of the Cluster this node pool belongs to.
   */
  cluster_id: string;

  /**
   * When the node pool was created.
   */
  created_at: string;

  /**
   * Name of the node pool.
   */
  name: string;

  /**
   * Node configuration.
   */
  node_config: NKSNodePoolNodeConfigResponse;

  /**
   * Number of nodes.
   */
  node_count: number;

  /**
   * Status of the resource.
   */
  status: Shared.ResourceStatus;

  /**
   * Tags attached to the node pool.
   */
  tags: Array<string>;

  /**
   * When the node pool was last updated.
   */
  updated_at: string;
}

/**
 * Boot volume configuration.
 */
export interface NKSNodePoolBootVolume {
  /**
   * Size of the boot volume in GB.
   */
  size: number;

  /**
   * Type of the Volume.
   */
  type: VolumesAPI.VolumeType;
}

/**
 * Boot volume configuration.
 */
export interface NKSNodePoolBootVolumeResponse {
  /**
   * Size of the boot volume in GB.
   */
  size: number;

  /**
   * Type of the Volume.
   */
  type: VolumesAPI.VolumeType;
}

export interface NKSNodePoolList {
  items: Array<NKSNodePool>;

  /**
   * Pagination response details.
   */
  pagination: Shared.Pagination;
}

/**
 * Node configuration.
 */
export interface NKSNodePoolNodeConfig {
  /**
   * Boot volume configuration.
   */
  boot_volume: NKSNodePoolBootVolume;

  /**
   * Instance type name used for worker nodes. Immutable after pool creation.
   */
  instance_type: string;

  /**
   * Kubernetes labels to apply to each node in the pool. Each entry is "key=value".
   * Keys under kubernetes.io, k8s.io, and nirvanalabs.io prefixes are reserved.
   * Immutable after pool creation.
   */
  labels?: Array<string>;

  /**
   * Kubernetes taints to apply to each node in the pool at creation time. Each entry
   * is "key=value:Effect" where Effect is NoSchedule, PreferNoSchedule, or
   * NoExecute. Immutable after pool creation.
   */
  taints?: Array<string>;
}

/**
 * Node configuration.
 */
export interface NKSNodePoolNodeConfigResponse {
  /**
   * Boot volume configuration.
   */
  boot_volume: NKSNodePoolBootVolumeResponse;

  /**
   * Instance type name.
   */
  instance_type: string;

  /**
   * Kubernetes labels applied to each node in the pool. Each entry is "key=value".
   */
  labels: Array<string>;

  /**
   * Kubernetes taints applied to each node in the pool. Each entry is
   * "key=value:Effect".
   */
  taints: Array<string>;
}

export interface PoolCreateParams {
  /**
   * Name of the node pool.
   */
  name: string;

  /**
   * Node configuration.
   */
  node_config: NKSNodePoolNodeConfig;

  /**
   * Number of nodes. Must be between 0 and 100.
   */
  node_count?: number;

  /**
   * Tags to attach to the node pool.
   */
  tags?: Array<string>;
}

export interface PoolGetParams {
  /**
   * Cluster ID
   */
  cluster_id: string;
}

export interface PoolUpdateParams {
  /**
   * Path param: Cluster ID
   */
  cluster_id: string;

  /**
   * Body param: Name of the node pool.
   */
  name?: string;

  /**
   * Body param: Number of nodes.
   */
  node_count?: number;

  /**
   * Body param: Tags to attach to the node pool.
   */
  tags?: Array<string>;
}

export interface PoolDeleteParams {
  /**
   * Cluster ID
   */
  cluster_id: string;
}

export interface PoolListParams extends CursorParams {}

Pools.Availability = Availability;
Pools.Cost = Cost;
Pools.Nodes = Nodes;

export declare namespace Pools {
  export {
    type NKSNodePool as NKSNodePool,
    type NKSNodePoolBootVolume as NKSNodePoolBootVolume,
    type NKSNodePoolBootVolumeResponse as NKSNodePoolBootVolumeResponse,
    type NKSNodePoolList as NKSNodePoolList,
    type NKSNodePoolNodeConfig as NKSNodePoolNodeConfig,
    type NKSNodePoolNodeConfigResponse as NKSNodePoolNodeConfigResponse,
    type NKSNodePoolsCursor as NKSNodePoolsCursor,
    type PoolCreateParams as PoolCreateParams,
    type PoolGetParams as PoolGetParams,
    type PoolUpdateParams as PoolUpdateParams,
    type PoolDeleteParams as PoolDeleteParams,
    type PoolListParams as PoolListParams,
  };

  export {
    Availability as Availability,
    type AvailabilityCreateParams as AvailabilityCreateParams,
    type AvailabilityUpdateParams as AvailabilityUpdateParams,
  };

  export {
    Cost as Cost,
    type CostCreateParams as CostCreateParams,
    type CostUpdateParams as CostUpdateParams,
  };

  export {
    Nodes as Nodes,
    type NKSNode as NKSNode,
    type NKSNodeList as NKSNodeList,
    type NKSNodesCursor as NKSNodesCursor,
    type NodeGetParams as NodeGetParams,
    type NodeDeleteParams as NodeDeleteParams,
    type NodeListParams as NodeListParams,
  };
}
