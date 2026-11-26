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

export class SandboxVMs extends APIResource {
  cost: CostAPI.Cost = new CostAPI.Cost(this._client);

  /**
   * Create a Sandbox VM to run sandboxes on. A Sandbox VM can be paused and resumed,
   * and is billed for compute only while it is running.
   *
   * @example
   * ```ts
   * const operation = await client.sandboxVMs.create({
   *   name: 'my-sandboxes',
   *   project_id: '123e4567-e89b-12d3-a456-426614174000',
   *   region: 'us-sva-2',
   * });
   * ```
   */
  create(body: SandboxVMCreateParams, options?: RequestOptions): APIPromise<OperationsAPI.Operation> {
    return this._client.post('/v1/sandbox_vms', { body, ...options });
  }

  /**
   * Get a Sandbox VM
   *
   * @example
   * ```ts
   * const sandboxVM = await client.sandboxVMs.get(
   *   'sandbox_vm_id',
   * );
   * ```
   */
  get(sandboxVMID: string, options?: RequestOptions): APIPromise<SandboxVM> {
    return this._client.get(path`/v1/sandbox_vms/${sandboxVMID}`, options);
  }

  /**
   * Update a Sandbox VM's name and tags
   *
   * @example
   * ```ts
   * const sandboxVM = await client.sandboxVMs.update(
   *   'sandbox_vm_id',
   * );
   * ```
   */
  update(sandboxVMID: string, body: SandboxVMUpdateParams, options?: RequestOptions): APIPromise<SandboxVM> {
    return this._client.patch(path`/v1/sandbox_vms/${sandboxVMID}`, { body, ...options });
  }

  /**
   * Delete a Sandbox VM, with its sandboxes and its disk. A Sandbox VM can be
   * deleted when it is ready or failed, whether it is running, paused or powered
   * off.
   *
   * @example
   * ```ts
   * const operation = await client.sandboxVMs.delete(
   *   'sandbox_vm_id',
   * );
   * ```
   */
  delete(sandboxVMID: string, options?: RequestOptions): APIPromise<OperationsAPI.Operation> {
    return this._client.delete(path`/v1/sandbox_vms/${sandboxVMID}`, options);
  }

  /**
   * List the Sandbox VMs in a project
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const sandboxVM of client.sandboxVMs.list({
   *   project_id: 'project_id',
   * })) {
   *   // ...
   * }
   * ```
   */
  list(query: SandboxVMListParams, options?: RequestOptions): PagePromise<SandboxVMsCursor, SandboxVM> {
    return this._client.getAPIList('/v1/sandbox_vms', Cursor<SandboxVM>, { query, ...options });
  }

  /**
   * Pause a Sandbox VM. Its sandboxes stop, keeping their files and installed
   * packages but not their running processes or memory, and compute billing stops.
   * After an hour paused the Sandbox VM is powered off. A pause sent while another
   * change runs waits for it, and pausing a paused Sandbox VM changes nothing.
   *
   * @example
   * ```ts
   * const operation = await client.sandboxVMs.pause(
   *   'sandbox_vm_id',
   * );
   * ```
   */
  pause(sandboxVMID: string, options?: RequestOptions): APIPromise<OperationsAPI.Operation> {
    return this._client.post(path`/v1/sandbox_vms/${sandboxVMID}/pause`, options);
  }

  /**
   * Resume a paused or powered-off Sandbox VM, restarting its sandboxes. A resume
   * sent while another change runs waits for it, and resuming a running Sandbox VM
   * changes nothing. Resuming can fail if the organization's sandbox quota was used
   * up while the Sandbox VM was paused. A billing block returns 402.
   *
   * @example
   * ```ts
   * const operation = await client.sandboxVMs.resume(
   *   'sandbox_vm_id',
   * );
   * ```
   */
  resume(sandboxVMID: string, options?: RequestOptions): APIPromise<OperationsAPI.Operation> {
    return this._client.post(path`/v1/sandbox_vms/${sandboxVMID}/resume`, options);
  }

  /**
   * Restart a Sandbox VM's VM. Its sandboxes keep their files and installed packages
   * but not their running processes or memory. A restart sent while another change
   * runs waits for it. A billing block returns 402.
   *
   * @example
   * ```ts
   * const operation = await client.sandboxVMs.restart(
   *   'sandbox_vm_id',
   * );
   * ```
   */
  restart(sandboxVMID: string, options?: RequestOptions): APIPromise<OperationsAPI.Operation> {
    return this._client.post(path`/v1/sandbox_vms/${sandboxVMID}/restart`, options);
  }
}

export type SandboxVMsCursor = Cursor<SandboxVM>;

/**
 * A VM sandboxes run on, in one region. It can be paused and resumed.
 */
export interface SandboxVM {
  /**
   * Unique identifier for the Sandbox VM.
   */
  id: string;

  /**
   * When the Sandbox VM was created.
   */
  created_at: string;

  /**
   * Hostname the Sandbox VM's sandbox API is served on over HTTPS. It stays the same
   * for the life of the Sandbox VM. Null until assigned.
   */
  endpoint_hostname: string | null;

  /**
   * Version of the image the Sandbox VM runs. Null until it is running.
   */
  image_version: string | null;

  /**
   * Instance type of the Sandbox VM.
   */
  instance_type: string;

  /**
   * Name of the Sandbox VM.
   */
  name: string;

  /**
   * Version of OpenSandbox the Sandbox VM runs. Null until it is running.
   */
  opensandbox_version: string | null;

  /**
   * When the Sandbox VM was paused. Null while it is running.
   */
  paused_at: string | null;

  /**
   * Whether the Sandbox VM's sandboxes can run.
   */
  power_state: 'running' | 'paused' | 'powered_off';

  /**
   * When the paused Sandbox VM is, or was, powered off. Null while it is running.
   */
  powers_off_at: string | null;

  /**
   * ID of the project the Sandbox VM is in.
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
   * Tags attached to the Sandbox VM.
   */
  tags: Array<string>;

  /**
   * When the Sandbox VM was last updated.
   */
  updated_at: string;

  /**
   * ID of the VPC the Sandbox VM is in. Null until it is placed in one.
   */
  vpc_id: string | null;
}

export interface SandboxVMList {
  items: Array<SandboxVM>;

  /**
   * Pagination response details.
   */
  pagination: Shared.Pagination;
}

export interface SandboxVMCreateParams {
  /**
   * Name of the Sandbox VM. Unique within its project.
   */
  name: string;

  /**
   * ID of the project to create the Sandbox VM in.
   */
  project_id: string;

  /**
   * Region the resource is in.
   */
  region: Shared.RegionName;

  /**
   * Instance type of the Sandbox VM. Defaults to n1-highcpu-2 (2 vCPU, 4 GiB), the
   * only size available.
   */
  instance_type?: string;

  /**
   * Tags to attach to the Sandbox VM.
   */
  tags?: Array<string>;

  /**
   * ID of the VPC to place the Sandbox VM in. It must be a ready VPC in the Sandbox
   * VM's project and region. Omit it to use the project's oldest ready VPC in the
   * region, or a new VPC when there is none.
   */
  vpc_id?: string;
}

export interface SandboxVMUpdateParams {
  /**
   * Name of the Sandbox VM. Unique within its project.
   */
  name?: string;

  /**
   * Tags to attach to the Sandbox VM.
   */
  tags?: Array<string>;
}

export interface SandboxVMListParams extends CursorParams {
  /**
   * Project ID of resources to request
   */
  project_id: string;

  /**
   * Filter by a case-insensitive substring of the Sandbox VM name
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
   * Filter by tags. Repeat the parameter to require several tags; a Sandbox VM must
   * carry all of them.
   */
  tags?: Array<string>;
}

SandboxVMs.Cost = Cost;

export declare namespace SandboxVMs {
  export {
    type SandboxVM as SandboxVM,
    type SandboxVMList as SandboxVMList,
    type SandboxVMsCursor as SandboxVMsCursor,
    type SandboxVMCreateParams as SandboxVMCreateParams,
    type SandboxVMUpdateParams as SandboxVMUpdateParams,
    type SandboxVMListParams as SandboxVMListParams,
  };

  export { Cost as Cost, type CostCreateParams as CostCreateParams };
}
