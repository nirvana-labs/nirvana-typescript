// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { Cursor, type CursorParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Projects extends APIResource {
  /**
   * Create a new project
   *
   * @example
   * ```ts
   * const project = await client.projects.create({
   *   name: 'My Project',
   * });
   * ```
   */
  create(body: ProjectCreateParams, options?: RequestOptions): APIPromise<Project> {
    return this._client.post('/v1/projects', { body, ...options });
  }

  /**
   * Update an existing project
   *
   * @example
   * ```ts
   * const project = await client.projects.update('project_id');
   * ```
   */
  update(projectID: string, body: ProjectUpdateParams, options?: RequestOptions): APIPromise<Project> {
    return this._client.patch(path`/v1/projects/${projectID}`, { body, ...options });
  }

  /**
   * List all projects
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const project of client.projects.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: ProjectListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ProjectsCursor, Project> {
    return this._client.getAPIList('/v1/projects', Cursor<Project>, { query, ...options });
  }

  /**
   * Delete a project
   *
   * @example
   * ```ts
   * await client.projects.delete('project_id');
   * ```
   */
  delete(projectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/projects/${projectID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get details about a project
   *
   * @example
   * ```ts
   * const project = await client.projects.get('project_id');
   * ```
   */
  get(projectID: string, options?: RequestOptions): APIPromise<Project> {
    return this._client.get(path`/v1/projects/${projectID}`, options);
  }
}

export type ProjectsCursor = Cursor<Project>;

/**
 * Project response.
 */
export interface Project {
  /**
   * Project ID.
   */
  id: string;

  /**
   * When the Project was created.
   */
  created_at: string;

  /**
   * Project name.
   */
  name: string;

  /**
   * Resource counts for the project.
   */
  resources: ProjectResources;

  /**
   * Tags attached to the Project.
   */
  tags: Array<string>;

  /**
   * When the Project was updated.
   */
  updated_at: string;
}

/**
 * Blockchain resources.
 */
export interface ProjectBlockchainResources {
  /**
   * Number of dedicated RPC nodes in the project.
   */
  rpc_nodes_dedicated: number;

  /**
   * Number of flex RPC nodes in the project.
   */
  rpc_nodes_flex: number;
}

/**
 * Cloud infrastructure resources.
 */
export interface ProjectCloudResources {
  /**
   * Number of Connect connections in the project.
   */
  connect_connections: number;

  /**
   * Number of VMs in the project.
   */
  vms: number;

  /**
   * Number of volumes in the project.
   */
  volumes: number;

  /**
   * Number of VPCs in the project.
   */
  vpcs: number;
}

export interface ProjectList {
  items: Array<Project>;

  /**
   * Pagination response details.
   */
  pagination: Shared.Pagination;
}

/**
 * Resource counts for the project.
 */
export interface ProjectResources {
  /**
   * Blockchain resources.
   */
  blockchain: ProjectBlockchainResources;

  /**
   * Cloud infrastructure resources.
   */
  cloud: ProjectCloudResources;

  /**
   * NKS resources.
   */
  nks: ProjectResources.NKS;
}

export namespace ProjectResources {
  /**
   * NKS resources.
   */
  export interface NKS {
    /**
     * Number of NKS clusters in the project.
     */
    clusters: number;
  }
}

export interface ProjectCreateParams {
  /**
   * Project name.
   */
  name: string;

  /**
   * Tags to attach to the Project.
   */
  tags?: Array<string>;
}

export interface ProjectUpdateParams {
  /**
   * Project name.
   */
  name?: string;

  /**
   * Tags to attach to the Project.
   */
  tags?: Array<string>;
}

export interface ProjectListParams extends CursorParams {}

export declare namespace Projects {
  export {
    type Project as Project,
    type ProjectBlockchainResources as ProjectBlockchainResources,
    type ProjectCloudResources as ProjectCloudResources,
    type ProjectList as ProjectList,
    type ProjectResources as ProjectResources,
    type ProjectsCursor as ProjectsCursor,
    type ProjectCreateParams as ProjectCreateParams,
    type ProjectUpdateParams as ProjectUpdateParams,
    type ProjectListParams as ProjectListParams,
  };
}
