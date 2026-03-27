// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as OperationsAPI from '../../operations/operations';
import * as AvailabilityAPI from './availability';
import { Availability, AvailabilityCreateParams, AvailabilityUpdateParams } from './availability';
import * as KubeconfigAPI from './kubeconfig';
import * as LoadBalancersAPI from './load-balancers';
import {
  LoadBalancerGetParams,
  LoadBalancerListParams,
  LoadBalancers,
  NKSLoadBalancer,
  NKSLoadBalancerList,
  NKSLoadBalancersCursor,
} from './load-balancers';
import * as ControllersAPI from './controllers/controllers';
import {
  ControllerGetParams,
  ControllerListParams,
  Controllers,
  NKSController,
  NKSControllerCPUConfigResponse,
  NKSControllerList,
  NKSControllerMemoryConfigResponse,
  NKSControllersCursor,
} from './controllers/controllers';
import * as PoolsAPI from './pools/pools';
import {
  NKSNodePool,
  NKSNodePoolBootVolume,
  NKSNodePoolBootVolumeResponse,
  NKSNodePoolCPUConfig,
  NKSNodePoolCPUConfigResponse,
  NKSNodePoolList,
  NKSNodePoolMemoryConfig,
  NKSNodePoolMemoryConfigResponse,
  NKSNodePoolNodeConfig,
  NKSNodePoolNodeConfigResponse,
  NKSNodePoolsCursor,
  PoolCreateParams,
  PoolDeleteParams,
  PoolGetParams,
  PoolListParams,
  PoolUpdateParams,
  Pools,
} from './pools/pools';
import { APIPromise } from '../../../core/api-promise';
import { Cursor, type CursorParams, PagePromise } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Clusters extends APIResource {
  availability: AvailabilityAPI.Availability = new AvailabilityAPI.Availability(this._client);
  kubeconfig: KubeconfigAPI.Kubeconfig = new KubeconfigAPI.Kubeconfig(this._client);
  controllers: ControllersAPI.Controllers = new ControllersAPI.Controllers(this._client);
  loadBalancers: LoadBalancersAPI.LoadBalancers = new LoadBalancersAPI.LoadBalancers(this._client);
  pools: PoolsAPI.Pools = new PoolsAPI.Pools(this._client);

  /**
   * Create an NKS Cluster
   *
   * @example
   * ```ts
   * const operation = await client.nks.clusters.create({
   *   name: 'my-cluster',
   *   project_id: '123e4567-e89b-12d3-a456-426614174000',
   *   region: 'us-wdc-1',
   *   vpc_id: '123e4567-e89b-12d3-a456-426614174000',
   * });
   * ```
   */
  create(body: ClusterCreateParams, options?: RequestOptions): APIPromise<OperationsAPI.Operation> {
    return this._client.post('/v1/nks/clusters', { body, ...options });
  }

  /**
   * Update an NKS cluster
   *
   * @example
   * ```ts
   * const nksCluster = await client.nks.clusters.update(
   *   'cluster_id',
   * );
   * ```
   */
  update(clusterID: string, body: ClusterUpdateParams, options?: RequestOptions): APIPromise<NKSCluster> {
    return this._client.patch(path`/v1/nks/clusters/${clusterID}`, { body, ...options });
  }

  /**
   * List all NKS clusters
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const nksCluster of client.nks.clusters.list({
   *   project_id: 'project_id',
   * })) {
   *   // ...
   * }
   * ```
   */
  list(query: ClusterListParams, options?: RequestOptions): PagePromise<NKSClustersCursor, NKSCluster> {
    return this._client.getAPIList('/v1/nks/clusters', Cursor<NKSCluster>, { query, ...options });
  }

  /**
   * Delete an NKS cluster
   *
   * @example
   * ```ts
   * const operation = await client.nks.clusters.delete(
   *   'cluster_id',
   * );
   * ```
   */
  delete(clusterID: string, options?: RequestOptions): APIPromise<OperationsAPI.Operation> {
    return this._client.delete(path`/v1/nks/clusters/${clusterID}`, options);
  }

  /**
   * Get details about an NKS cluster
   *
   * @example
   * ```ts
   * const nksCluster = await client.nks.clusters.get(
   *   'cluster_id',
   * );
   * ```
   */
  get(clusterID: string, options?: RequestOptions): APIPromise<NKSCluster> {
    return this._client.get(path`/v1/nks/clusters/${clusterID}`, options);
  }
}

export type NKSClustersCursor = Cursor<NKSCluster>;

/**
 * Kubeconfig for an NKS Cluster.
 */
export interface Kubeconfig {
  /**
   * Kubeconfig content for the Cluster.
   */
  kubeconfig: string;
}

/**
 * NKS Cluster details.
 */
export interface NKSCluster {
  /**
   * Unique identifier for the Cluster.
   */
  id: string;

  /**
   * When the Cluster was created.
   */
  created_at: string;

  /**
   * Name of the Cluster.
   */
  name: string;

  /**
   * IDs of pools belonging to this Cluster.
   */
  pool_ids: Array<string>;

  /**
   * Private IP (VIP) of the Cluster.
   */
  private_ip: string;

  /**
   * Project ID the Cluster belongs to.
   */
  project_id: string;

  /**
   * Public IP of the Cluster.
   */
  public_ip: string;

  /**
   * Region the resource is in.
   */
  region: Shared.RegionName;

  /**
   * Status of the resource.
   */
  status: Shared.ResourceStatus;

  /**
   * Tags attached to the Cluster.
   */
  tags: Array<string>;

  /**
   * When the Cluster was last updated.
   */
  updated_at: string;

  /**
   * ID of the VPC the Cluster is in.
   */
  vpc_id: string;
}

export interface NKSClusterList {
  items: Array<NKSCluster>;

  /**
   * Pagination response details.
   */
  pagination: Shared.Pagination;
}

export interface ClusterCreateParams {
  /**
   * Name of the Cluster.
   */
  name: string;

  /**
   * Project ID to create the Cluster in.
   */
  project_id: string;

  /**
   * Region the resource is in.
   */
  region: Shared.RegionName;

  /**
   * ID of the VPC to use for the Cluster.
   */
  vpc_id: string;

  /**
   * Tags to attach to the Cluster.
   */
  tags?: Array<string>;
}

export interface ClusterUpdateParams {
  /**
   * Name of the Cluster.
   */
  name?: string;

  /**
   * Tags to attach to the Cluster.
   */
  tags?: Array<string>;
}

export interface ClusterListParams extends CursorParams {
  /**
   * Project ID of resources to request
   */
  project_id: string;
}

Clusters.Availability = Availability;
Clusters.Controllers = Controllers;
Clusters.LoadBalancers = LoadBalancers;
Clusters.Pools = Pools;

export declare namespace Clusters {
  export {
    type Kubeconfig as Kubeconfig,
    type NKSCluster as NKSCluster,
    type NKSClusterList as NKSClusterList,
    type NKSClustersCursor as NKSClustersCursor,
    type ClusterCreateParams as ClusterCreateParams,
    type ClusterUpdateParams as ClusterUpdateParams,
    type ClusterListParams as ClusterListParams,
  };

  export {
    Availability as Availability,
    type AvailabilityCreateParams as AvailabilityCreateParams,
    type AvailabilityUpdateParams as AvailabilityUpdateParams,
  };

  export {
    Controllers as Controllers,
    type NKSController as NKSController,
    type NKSControllerCPUConfigResponse as NKSControllerCPUConfigResponse,
    type NKSControllerList as NKSControllerList,
    type NKSControllerMemoryConfigResponse as NKSControllerMemoryConfigResponse,
    type NKSControllersCursor as NKSControllersCursor,
    type ControllerListParams as ControllerListParams,
    type ControllerGetParams as ControllerGetParams,
  };

  export {
    LoadBalancers as LoadBalancers,
    type NKSLoadBalancer as NKSLoadBalancer,
    type NKSLoadBalancerList as NKSLoadBalancerList,
    type NKSLoadBalancersCursor as NKSLoadBalancersCursor,
    type LoadBalancerListParams as LoadBalancerListParams,
    type LoadBalancerGetParams as LoadBalancerGetParams,
  };

  export {
    Pools as Pools,
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
}
