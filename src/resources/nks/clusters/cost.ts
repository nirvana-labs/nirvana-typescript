// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Cost extends APIResource {
  /**
   * Return a priced cost quote for the proposed NKS cluster.
   *
   * @example
   * ```ts
   * const costQuote = await client.nks.clusters.cost.create({
   *   autoscaling: true,
   *   kubernetes_version: 'v1.34.4',
   *   name: 'my-cluster',
   *   project_id: '123e4567-e89b-12d3-a456-426614174000',
   *   region: 'us-sva-2',
   *   vpc_id: '123e4567-e89b-12d3-a456-426614174000',
   * });
   * ```
   */
  create(body: CostCreateParams, options?: RequestOptions): APIPromise<Shared.CostQuote> {
    return this._client.post('/v1/nks/clusters/cost', { body, ...options });
  }

  /**
   * Return a priced cost quote for the proposed NKS cluster update plus a diff
   * against the current state.
   *
   * @example
   * ```ts
   * const costQuoteUpdate =
   *   await client.nks.clusters.cost.update('cluster_id');
   * ```
   */
  update(
    clusterID: string,
    body: CostUpdateParams,
    options?: RequestOptions,
  ): APIPromise<Shared.CostQuoteUpdate> {
    return this._client.patch(path`/v1/nks/clusters/${clusterID}/cost`, { body, ...options });
  }
}

export interface CostCreateParams {
  /**
   * Whether to enable autoscaling for the Cluster.
   */
  autoscaling: boolean;

  /**
   * Kubernetes version for the Cluster.
   */
  kubernetes_version: string;

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

export interface CostUpdateParams {
  /**
   * Whether to enable autoscaling for the Cluster.
   */
  autoscaling?: boolean;

  /**
   * Name of the Cluster.
   */
  name?: string;

  /**
   * Tags to attach to the Cluster.
   */
  tags?: Array<string>;
}

export declare namespace Cost {
  export { type CostCreateParams as CostCreateParams, type CostUpdateParams as CostUpdateParams };
}
