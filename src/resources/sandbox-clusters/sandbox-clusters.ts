// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as OperationsAPI from '../operations/operations';
import { APIPromise } from '../../core/api-promise';
import { Cursor, type CursorParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class SandboxClusters extends APIResource {
  /**
   * List the organization's sandbox clusters, one per region where sandboxes are
   * enabled
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const sandboxCluster of client.sandboxClusters.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: SandboxClusterListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<SandboxClustersCursor, SandboxCluster> {
    return this._client.getAPIList('/v1/sandbox_clusters', Cursor<SandboxCluster>, { query, ...options });
  }

  /**
   * Get the sandbox cluster in a region
   *
   * @example
   * ```ts
   * const sandboxCluster = await client.sandboxClusters.get(
   *   'us-sva-2',
   * );
   * ```
   */
  get(region: 'us-sva-2' | 'us-wdc-1', options?: RequestOptions): APIPromise<SandboxCluster> {
    return this._client.get(path`/v1/sandbox_clusters/${region}`, options);
  }

  /**
   * Enable sandboxes in a region. This provisions the sandbox cluster they run on,
   * in a project the platform manages.
   *
   * @example
   * ```ts
   * const operation = await client.sandboxClusters.enable(
   *   'us-sva-2',
   *   { instance_type: 'n1-standard-8', node_count: 3 },
   * );
   * ```
   */
  enable(
    region: 'us-sva-2' | 'us-wdc-1',
    body: SandboxClusterEnableParams,
    options?: RequestOptions,
  ): APIPromise<OperationsAPI.Operation> {
    return this._client.put(path`/v1/sandbox_clusters/${region}`, { body, ...options });
  }

  /**
   * Disable sandboxes in a region. This deletes the sandboxes and the infrastructure
   * they run on.
   *
   * @example
   * ```ts
   * const operation = await client.sandboxClusters.disable(
   *   'us-sva-2',
   * );
   * ```
   */
  disable(region: 'us-sva-2' | 'us-wdc-1', options?: RequestOptions): APIPromise<OperationsAPI.Operation> {
    return this._client.delete(path`/v1/sandbox_clusters/${region}`, options);
  }
}

export type SandboxClustersCursor = Cursor<SandboxCluster>;

/**
 * An organization's sandboxes in one region, and the infrastructure they run on.
 */
export interface SandboxCluster {
  /**
   * Unique identifier for the Sandbox Cluster.
   */
  id: string;

  /**
   * Hostname the Sandbox Cluster's sandbox API is served on, over HTTPS. Null until
   * it is assigned.
   */
  api_hostname: string | null;

  /**
   * When the Sandbox Cluster was created.
   */
  created_at: string;

  /**
   * Hostname sandboxes' endpoints are served on, over HTTPS. Null until it is
   * assigned.
   */
  gateway_hostname: string | null;

  /**
   * Instance type of the nodes the sandboxes run on.
   */
  instance_type: string;

  /**
   * Number of nodes the sandboxes run on.
   */
  node_count: number;

  /**
   * ID of the project that holds the Sandbox Cluster's infrastructure.
   */
  project_id: string;

  /**
   * Public IP address sandbox traffic reaches the Sandbox Cluster on. Null until it
   * is assigned.
   */
  public_ip: string | null;

  /**
   * Region the resource is in.
   */
  region: Shared.RegionName;

  /**
   * Status of the resource.
   */
  status: Shared.ResourceStatus;

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

export interface SandboxClusterListParams extends CursorParams {
  /**
   * Comma-separated sort terms in precedence order, each field:asc or field:desc.
   * Fields: created_at, updated_at
   */
  sort?: string;
}

export interface SandboxClusterEnableParams {
  /**
   * Instance type of the nodes the sandboxes run on.
   */
  instance_type: string;

  /**
   * Number of nodes the sandboxes run on.
   */
  node_count: number;
}

export declare namespace SandboxClusters {
  export {
    type SandboxCluster as SandboxCluster,
    type SandboxClusterList as SandboxClusterList,
    type SandboxClustersCursor as SandboxClustersCursor,
    type SandboxClusterListParams as SandboxClusterListParams,
    type SandboxClusterEnableParams as SandboxClusterEnableParams,
  };
}
