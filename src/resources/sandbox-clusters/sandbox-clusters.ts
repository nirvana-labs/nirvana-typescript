// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as OperationsAPI from '../operations/operations';
import * as CostAPI from './cost';
import { Cost, CostCreateParams } from './cost';
import { APIPromise } from '../../core/api-promise';
import { Cursor, type CursorParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class SandboxClusters extends APIResource {
  cost: CostAPI.Cost = new CostAPI.Cost(this._client);

  /**
   * Create a Sandbox Cluster to run sandboxes on. The infrastructure it runs on is
   * provisioned in a project the platform manages.
   *
   * @example
   * ```ts
   * const operation = await client.sandboxClusters.create({
   *   instance_type: 'n1-standard-8',
   *   name: 'my-sandboxes',
   *   node_count: 3,
   *   project_id: '123e4567-e89b-12d3-a456-426614174000',
   *   region: 'us-sva-2',
   * });
   * ```
   */
  create(body: SandboxClusterCreateParams, options?: RequestOptions): APIPromise<OperationsAPI.Operation> {
    return this._client.post('/v1/sandbox_clusters', { body, ...options });
  }

  /**
   * Get a Sandbox Cluster
   *
   * @example
   * ```ts
   * const sandboxCluster = await client.sandboxClusters.get(
   *   'sandbox_cluster_id',
   * );
   * ```
   */
  get(sandboxClusterID: string, options?: RequestOptions): APIPromise<SandboxCluster> {
    return this._client.get(path`/v1/sandbox_clusters/${sandboxClusterID}`, options);
  }

  /**
   * Update a Sandbox Cluster's name and tags
   *
   * @example
   * ```ts
   * const sandboxCluster = await client.sandboxClusters.update(
   *   'sandbox_cluster_id',
   * );
   * ```
   */
  update(
    sandboxClusterID: string,
    body: SandboxClusterUpdateParams,
    options?: RequestOptions,
  ): APIPromise<SandboxCluster> {
    return this._client.patch(path`/v1/sandbox_clusters/${sandboxClusterID}`, { body, ...options });
  }

  /**
   * Delete a Sandbox Cluster, with its sandboxes and the infrastructure they run on.
   *
   * @example
   * ```ts
   * const operation = await client.sandboxClusters.delete(
   *   'sandbox_cluster_id',
   * );
   * ```
   */
  delete(sandboxClusterID: string, options?: RequestOptions): APIPromise<OperationsAPI.Operation> {
    return this._client.delete(path`/v1/sandbox_clusters/${sandboxClusterID}`, options);
  }

  /**
   * List the Sandbox Clusters in a project
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const sandboxCluster of client.sandboxClusters.list(
   *   { project_id: 'project_id' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    query: SandboxClusterListParams,
    options?: RequestOptions,
  ): PagePromise<SandboxClustersCursor, SandboxCluster> {
    return this._client.getAPIList('/v1/sandbox_clusters', Cursor<SandboxCluster>, { query, ...options });
  }
}

export type SandboxClustersCursor = Cursor<SandboxCluster>;

/**
 * A cluster sandboxes run on, in one region.
 */
export interface SandboxCluster {
  /**
   * Unique identifier for the Sandbox Cluster.
   */
  id: string;

  /**
   * When the Sandbox Cluster was created.
   */
  created_at: string;

  /**
   * Hostname sandboxes' endpoints are served on over HTTPS, to allow in outbound
   * firewalls. Null until assigned; a recreated Sandbox Cluster gets a new one.
   */
  gateway_hostname: string | null;

  /**
   * Instance type of the nodes the sandboxes run on.
   */
  instance_type: string;

  /**
   * Name of the Sandbox Cluster.
   */
  name: string;

  /**
   * Number of nodes the sandboxes run on.
   */
  node_count: number;

  /**
   * ID of the project the Sandbox Cluster is in.
   */
  project_id: string;

  /**
   * Region the resource is in.
   */
  region: Shared.RegionName;

  /**
   * Status of the resource.
   */
  status: Shared.ResourceStatus;

  /**
   * Tags attached to the Sandbox Cluster.
   */
  tags: Array<string>;

  /**
   * When the Sandbox Cluster was last updated.
   */
  updated_at: string;
}

export interface SandboxClusterList {
  items: Array<SandboxCluster>;

  /**
   * Pagination response details.
   */
  pagination: Shared.Pagination;
}

export interface SandboxClusterCreateParams {
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

export interface SandboxClusterUpdateParams {
  /**
   * Name of the Sandbox Cluster. Unique within its project.
   */
  name?: string;

  /**
   * Tags to attach to the Sandbox Cluster.
   */
  tags?: Array<string>;
}

export interface SandboxClusterListParams extends CursorParams {
  /**
   * Project ID of resources to request
   */
  project_id: string;

  /**
   * Filter by a case-insensitive substring of the Sandbox Cluster name
   */
  name?: string;

  /**
   * Filter by region
   */
  region?: string;

  /**
   * Comma-separated sort terms in precedence order, each field:asc or field:desc.
   * Fields: created_at, updated_at
   */
  sort?: string;

  /**
   * Filter by tags. Repeat the parameter to require several tags; a Sandbox Cluster
   * must carry all of them.
   */
  tags?: Array<string>;
}

SandboxClusters.Cost = Cost;

export declare namespace SandboxClusters {
  export {
    type SandboxCluster as SandboxCluster,
    type SandboxClusterList as SandboxClusterList,
    type SandboxClustersCursor as SandboxClustersCursor,
    type SandboxClusterCreateParams as SandboxClusterCreateParams,
    type SandboxClusterUpdateParams as SandboxClusterUpdateParams,
    type SandboxClusterListParams as SandboxClusterListParams,
  };

  export { Cost as Cost, type CostCreateParams as CostCreateParams };
}
