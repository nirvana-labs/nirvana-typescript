// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Cost extends APIResource {
  /**
   * Return a priced cost quote for the proposed Sandbox VM while it runs. A paused
   * or powered-off Sandbox VM is billed for its disk only.
   *
   * @example
   * ```ts
   * const costQuote = await client.sandboxVMs.cost.create({
   *   name: 'my-sandboxes',
   *   project_id: '123e4567-e89b-12d3-a456-426614174000',
   *   region: 'us-sva-2',
   * });
   * ```
   */
  create(body: CostCreateParams, options?: RequestOptions): APIPromise<Shared.CostQuote> {
    return this._client.post('/v1/sandbox_vms/cost', { body, ...options });
  }
}

export interface CostCreateParams {
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

export declare namespace Cost {
  export { type CostCreateParams as CostCreateParams };
}
