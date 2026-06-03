// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as OperationsAPI from '../../operations/operations';
import { APIPromise } from '../../../core/api-promise';
import { Cursor, type CursorParams, PagePromise } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class LoadBalancers extends APIResource {
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

  /**
   * Update an NKS load balancer
   *
   * @example
   * ```ts
   * const operation =
   *   await client.nks.clusters.loadBalancers.update(
   *     'load_balancer_id',
   *     { cluster_id: 'cluster_id', public_ip_enabled: true },
   *   );
   * ```
   */
  update(
    loadBalancerID: string,
    params: LoadBalancerUpdateParams,
    options?: RequestOptions,
  ): APIPromise<OperationsAPI.Operation> {
    const { cluster_id, ...body } = params;
    return this._client.patch(path`/v1/nks/clusters/${cluster_id}/load_balancers/${loadBalancerID}`, {
      body,
      ...options,
    });
  }

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
   * Public IP address assigned to this load balancer.
   */
  public_ip: string | null;

  /**
   * Whether a public IP is enabled for this load balancer.
   */
  public_ip_enabled: boolean;

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

export interface LoadBalancerGetParams {
  /**
   * Cluster ID
   */
  cluster_id: string;
}

export interface LoadBalancerUpdateParams {
  /**
   * Path param: Cluster ID
   */
  cluster_id: string;

  /**
   * Body param: Whether to enable a public IP for this load balancer.
   */
  public_ip_enabled: boolean;
}

export interface LoadBalancerListParams extends CursorParams {}

export declare namespace LoadBalancers {
  export {
    type NKSLoadBalancer as NKSLoadBalancer,
    type NKSLoadBalancerList as NKSLoadBalancerList,
    type NKSLoadBalancersCursor as NKSLoadBalancersCursor,
    type LoadBalancerGetParams as LoadBalancerGetParams,
    type LoadBalancerUpdateParams as LoadBalancerUpdateParams,
    type LoadBalancerListParams as LoadBalancerListParams,
  };
}
