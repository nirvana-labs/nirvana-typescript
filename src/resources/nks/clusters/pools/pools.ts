// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as Shared from '../../../shared';
import * as OperationsAPI from '../../../operations/operations';
import * as VolumesAPI from '../../../compute/volumes/volumes';
import * as AvailabilityAPI from './availability';
import { Availability, AvailabilityCreateParams, AvailabilityUpdateParams } from './availability';
import * as NodesAPI from './nodes/nodes';
import { NKSNode, NKSNodeList, NKSNodesCursor, NodeGetParams, NodeListParams, Nodes } from './nodes/nodes';
import { APIPromise } from '../../../../core/api-promise';
import { Cursor, type CursorParams, PagePromise } from '../../../../core/pagination';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Pools extends APIResource {
  availability: AvailabilityAPI.Availability = new AvailabilityAPI.Availability(this._client);
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
   *       cpu_config: { vcpu: 4 },
   *       memory_config: { size: 8 },
   *     },
   *     node_count: 3,
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
   * Update an NKS node pool
   *
   * @example
   * ```ts
   * const nksNodePool = await client.nks.clusters.pools.update(
   *   'pool_id',
   *   { cluster_id: 'cluster_id' },
   * );
   * ```
   */
  update(poolID: string, params: PoolUpdateParams, options?: RequestOptions): APIPromise<NKSNodePool> {
    const { cluster_id, ...body } = params;
    return this._client.patch(path`/v1/nks/clusters/${cluster_id}/pools/${poolID}`, { body, ...options });
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

/**
 * CPU configuration.
 */
export interface NKSNodePoolCPUConfig {
  /**
   * Number of virtual CPUs.
   */
  vcpu: number;
}

/**
 * CPU configuration.
 */
export interface NKSNodePoolCPUConfigResponse {
  /**
   * Number of virtual CPUs.
   */
  vcpu: number;
}

export interface NKSNodePoolList {
  items: Array<NKSNodePool>;

  /**
   * Pagination response details.
   */
  pagination: Shared.Pagination;
}

/**
 * Memory configuration.
 */
export interface NKSNodePoolMemoryConfig {
  /**
   * Size of the memory in GB.
   */
  size: number;
}

/**
 * Memory configuration.
 */
export interface NKSNodePoolMemoryConfigResponse {
  /**
   * Size of the memory in GB.
   */
  size: number;
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
   * CPU configuration.
   */
  cpu_config: NKSNodePoolCPUConfig;

  /**
   * Memory configuration.
   */
  memory_config: NKSNodePoolMemoryConfig;
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
   * CPU configuration.
   */
  cpu_config: NKSNodePoolCPUConfigResponse;

  /**
   * Memory configuration.
   */
  memory_config: NKSNodePoolMemoryConfigResponse;
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
   * Number of nodes. Must be between 1 and 100.
   */
  node_count: number;

  /**
   * Tags to attach to the node pool.
   */
  tags?: Array<string>;
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
   * Body param: Tags to attach to the node pool.
   */
  tags?: Array<string>;
}

export interface PoolListParams extends CursorParams {}

export interface PoolDeleteParams {
  /**
   * Cluster ID
   */
  cluster_id: string;
}

export interface PoolGetParams {
  /**
   * Cluster ID
   */
  cluster_id: string;
}

Pools.Availability = Availability;
Pools.Nodes = Nodes;

export declare namespace Pools {
  export {
    type NKSNodePool as NKSNodePool,
    type NKSNodePoolBootVolume as NKSNodePoolBootVolume,
    type NKSNodePoolBootVolumeResponse as NKSNodePoolBootVolumeResponse,
    type NKSNodePoolCPUConfig as NKSNodePoolCPUConfig,
    type NKSNodePoolCPUConfigResponse as NKSNodePoolCPUConfigResponse,
    type NKSNodePoolList as NKSNodePoolList,
    type NKSNodePoolMemoryConfig as NKSNodePoolMemoryConfig,
    type NKSNodePoolMemoryConfigResponse as NKSNodePoolMemoryConfigResponse,
    type NKSNodePoolNodeConfig as NKSNodePoolNodeConfig,
    type NKSNodePoolNodeConfigResponse as NKSNodePoolNodeConfigResponse,
    type NKSNodePoolsCursor as NKSNodePoolsCursor,
    type PoolCreateParams as PoolCreateParams,
    type PoolUpdateParams as PoolUpdateParams,
    type PoolListParams as PoolListParams,
    type PoolDeleteParams as PoolDeleteParams,
    type PoolGetParams as PoolGetParams,
  };

  export {
    Availability as Availability,
    type AvailabilityCreateParams as AvailabilityCreateParams,
    type AvailabilityUpdateParams as AvailabilityUpdateParams,
  };

  export {
    Nodes as Nodes,
    type NKSNode as NKSNode,
    type NKSNodeList as NKSNodeList,
    type NKSNodesCursor as NKSNodesCursor,
    type NodeListParams as NodeListParams,
    type NodeGetParams as NodeGetParams,
  };
}
