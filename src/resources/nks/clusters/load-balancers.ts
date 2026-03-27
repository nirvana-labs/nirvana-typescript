// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import { APIPromise } from '../../../core/api-promise';
import { Cursor, type CursorParams, PagePromise } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class LoadBalancers extends APIResource {
  /**
   * List all load balancers in an NKS cluster
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const nksLoadBalancer of client.nks.clusters.loadBalancers.list(
   *   'cluster_id',
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    clusterID: string,
    query: LoadBalancerListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<NKSLoadBalancersCursor, NKSLoadBalancer> {
    return this._client.getAPIList(
      path`/v1/nks/clusters/${clusterID}/load_balancers`,
      Cursor<NKSLoadBalancer>,
      { query, ...options },
    );
  }

  /**
   * Get details about an NKS load balancer
   *
   * @example
   * ```ts
   * const nksLoadBalancer =
   *   await client.nks.clusters.loadBalancers.get(
   *     'load_balancer_id',
   *     { cluster_id: 'cluster_id' },
   *   );
   * ```
   */
  get(
    loadBalancerID: string,
    params: LoadBalancerGetParams,
    options?: RequestOptions,
  ): APIPromise<NKSLoadBalancer> {
    const { cluster_id } = params;
    return this._client.get(path`/v1/nks/clusters/${cluster_id}/load_balancers/${loadBalancerID}`, options);
  }
}

export type NKSLoadBalancersCursor = Cursor<NKSLoadBalancer>;

/**
 * NKS load balancer details.
 */
export interface NKSLoadBalancer {
  /**
   * Unique identifier for the load balancer.
   */
  id: string;

  /**
   * Cluster this load balancer belongs to.
   */
  cluster_id: string;

  /**
   * When the load balancer was first discovered.
   */
  created_at: string;

  /**
   * Kubernetes namespace of the load balancer.
   */
  namespace: string;

  /**
   * Private IP address of the load balancer.
   */
  private_ip: string | null;

  /**
   * Kubernetes service name of the load balancer.
   */
  service_name: string;

  /**
   * Status of the resource.
   */
  status: Shared.ResourceStatus;

  /**
   * When the load balancer was last updated.
   */
  updated_at: string;
}

export interface NKSLoadBalancerList {
  items: Array<NKSLoadBalancer>;

  /**
   * Pagination response details.
   */
  pagination: Shared.Pagination;
}

export interface LoadBalancerListParams extends CursorParams {}

export interface LoadBalancerGetParams {
  /**
   * Cluster ID
   */
  cluster_id: string;
}

export declare namespace LoadBalancers {
  export {
    type NKSLoadBalancer as NKSLoadBalancer,
    type NKSLoadBalancerList as NKSLoadBalancerList,
    type NKSLoadBalancersCursor as NKSLoadBalancersCursor,
    type LoadBalancerListParams as LoadBalancerListParams,
    type LoadBalancerGetParams as LoadBalancerGetParams,
  };
}
