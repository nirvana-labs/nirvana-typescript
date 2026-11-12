// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Cost extends APIResource {
  /**
   * Return a priced cost quote for the proposed Sandbox Cluster.
   *
   * @example
   * ```ts
   * const costQuote = await client.sandboxClusters.cost.create({
   *   instance_type: 'n1-standard-8',
   *   name: 'my-sandboxes',
   *   node_count: 3,
   *   project_id: '123e4567-e89b-12d3-a456-426614174000',
   *   region: 'us-sva-2',
   * });
   * ```
   */
  create(body: CostCreateParams, options?: RequestOptions): APIPromise<Shared.CostQuote> {
    return this._client.post('/v1/sandbox_clusters/cost', { body, ...options });
  }
}

export interface CostCreateParams {
  /**
   * Instance type of the nodes the sandboxes run on.
   */
  instance_type: string;

  /**
   * Name of the Sandbox Cluster. Unique within its project.
   */
  name: string;

  /**
   * Number of nodes the sandboxes run on.
   */
  node_count: number;

  /**
   * ID of the project to create the Sandbox Cluster in.
   */
  project_id: string;

  /**
   * Region the resource is in.
   */
  region: Shared.RegionName;

  /**
   * Tags to attach to the Sandbox Cluster.
   */
  tags?: Array<string>;
}

export declare namespace Cost {
  export { type CostCreateParams as CostCreateParams };
}
