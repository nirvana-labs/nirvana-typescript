// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as Shared from '../../../shared';
import * as PoolsAPI from './pools';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Cost extends APIResource {
  /**
   * Return a priced cost quote for the proposed NKS node pool.
   *
   * @example
   * ```ts
   * const costQuote =
   *   await client.nks.clusters.pools.cost.create(
   *     'cluster_id',
   *     {
   *       name: 'my-node-pool',
   *       node_config: {
   *         boot_volume: { size: 100, type: 'abs' },
   *         instance_type: 'n1-standard-8',
   *       },
   *       node_count: 3,
   *     },
   *   );
   * ```
   */
  create(clusterID: string, body: CostCreateParams, options?: RequestOptions): APIPromise<Shared.CostQuote> {
    return this._client.post(path`/v1/nks/clusters/${clusterID}/pools/cost`, { body, ...options });
  }

  /**
   * Return a priced cost quote for the proposed NKS node pool update plus a diff
   * against the current state.
   *
   * @example
   * ```ts
   * const costQuoteUpdate =
   *   await client.nks.clusters.pools.cost.update('pool_id', {
   *     cluster_id: 'cluster_id',
   *   });
   * ```
   */
  update(
    poolID: string,
    params: CostUpdateParams,
    options?: RequestOptions,
  ): APIPromise<Shared.CostQuoteUpdate> {
    const { cluster_id, ...body } = params;
    return this._client.patch(path`/v1/nks/clusters/${cluster_id}/pools/${poolID}/cost`, {
      body,
      ...options,
    });
  }
}

export interface CostCreateParams {
  /**
   * Name of the node pool.
   */
  name: string;

  /**
   * Node configuration.
   */
  node_config: PoolsAPI.NKSNodePoolNodeConfig;

  /**
   * Number of nodes. Must be between 1 and 100.
   */
  node_count: number;

  /**
   * Tags to attach to the node pool.
   */
  tags?: Array<string>;
}

export interface CostUpdateParams {
  /**
   * Path param: Cluster ID
   */
  cluster_id: string;

  /**
   * Body param: Name of the node pool.
   */
  name?: string;

  /**
   * Body param: Partial node configuration update.
   */
  node_config?: CostUpdateParams.NodeConfig;

  /**
   * Body param: Number of nodes.
   */
  node_count?: number;

  /**
   * Body param: Tags to attach to the node pool.
   */
  tags?: Array<string>;
}

export namespace CostUpdateParams {
  /**
   * Partial node configuration update.
   */
  export interface NodeConfig {
    /**
     * Kubernetes labels to apply to each node in the pool. Each entry is "key=value".
     * When provided, the list fully replaces the current labels on the pool and on
     * live nodes.
     */
    labels?: Array<string>;
  }
}

export declare namespace Cost {
  export { type CostCreateParams as CostCreateParams, type CostUpdateParams as CostUpdateParams };
}
