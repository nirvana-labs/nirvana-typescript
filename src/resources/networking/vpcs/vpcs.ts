// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as OperationsAPI from '../../operations';
import * as Shared from '../../shared';
import * as AvailabilityAPI from './availability';
import {
  Availability,
  AvailabilityCreateParams,
  AvailabilityCreateResponse,
  AvailabilityUpdateParams,
  AvailabilityUpdateResponse,
} from './availability';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class VPCs extends APIResource {
  availability: AvailabilityAPI.Availability = new AvailabilityAPI.Availability(this._client);

  /**
   * Create a VPC
   *
   * @example
   * ```ts
   * const operation = await client.networking.vpcs.create({
   *   name: 'my-vpc',
   *   region: 'us-wdc-1',
   *   subnet_name: 'my-subnet',
   * });
   * ```
   */
  create(body: VPCCreateParams, options?: RequestOptions): APIPromise<OperationsAPI.Operation> {
    return this._client.post('/v1/networking/vpcs', { body, ...options });
  }

  /**
   * Update a VPC
   *
   * @example
   * ```ts
   * const operation = await client.networking.vpcs.update(
   *   'vpc_id',
   * );
   * ```
   */
  update(
    vpcID: string,
    body: VPCUpdateParams,
    options?: RequestOptions,
  ): APIPromise<OperationsAPI.Operation> {
    return this._client.patch(path`/v1/networking/vpcs/${vpcID}`, { body, ...options });
  }

  /**
   * List all VPCs
   *
   * @example
   * ```ts
   * const vpcList = await client.networking.vpcs.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<VPCList> {
    return this._client.get('/v1/networking/vpcs', options);
  }

  /**
   * Delete a VPC
   *
   * @example
   * ```ts
   * const operation = await client.networking.vpcs.delete(
   *   'vpc_id',
   * );
   * ```
   */
  delete(vpcID: string, options?: RequestOptions): APIPromise<OperationsAPI.Operation> {
    return this._client.delete(path`/v1/networking/vpcs/${vpcID}`, options);
  }

  /**
   * Get details about a VPC
   *
   * @example
   * ```ts
   * const vpc = await client.networking.vpcs.get('vpc_id');
   * ```
   */
  get(vpcID: string, options?: RequestOptions): APIPromise<VPC> {
    return this._client.get(path`/v1/networking/vpcs/${vpcID}`, options);
  }
}

/**
 * Subnet of the VPC.
 */
export interface Subnet {
  /**
   * Unique identifier for the Subnet.
   */
  id: string;

  /**
   * CIDR block for the Subnet.
   */
  cidr: string;

  /**
   * When the Subnet was created.
   */
  created_at: string;

  /**
   * Name of the Subnet.
   */
  name: string;

  /**
   * When the Subnet was updated.
   */
  updated_at: string;
}

/**
 * VPC details.
 */
export interface VPC {
  /**
   * Unique identifier for the VPC.
   */
  id: string;

  /**
   * When the VPC was created.
   */
  created_at: string;

  /**
   * IDs of the Firewall Rules associated with the VPC.
   */
  firewall_rule_ids: Array<string>;

  /**
   * Name of the VPC.
   */
  name: string;

  /**
   * Region the resource is in.
   */
  region: Shared.RegionName;

  /**
   * Status of the resource.
   */
  status: Shared.ResourceStatus;

  /**
   * Subnet of the VPC.
   */
  subnet: Subnet;

  /**
   * Tags to attach to the VPC.
   */
  tags: Array<string>;

  /**
   * When the VPC was updated.
   */
  updated_at: string;
}

export interface VPCList {
  items: Array<VPC>;

  /**
   * Pagination response details.
   */
  pagination?: Shared.Pagination;
}

export interface VPCCreateParams {
  /**
   * Name of the VPC.
   */
  name: string;

  /**
   * Region the resource is in.
   */
  region: Shared.RegionName;

  /**
   * Name of the subnet to create.
   */
  subnet_name: string;

  /**
   * Tags to attach to the VPC.
   */
  tags?: Array<string>;
}

export interface VPCUpdateParams {
  /**
   * Name of the VPC.
   */
  name?: string;

  /**
   * Name of the subnet to create.
   */
  subnet_name?: string;

  /**
   * Tags to attach to the VPC.
   */
  tags?: Array<string>;
}

VPCs.Availability = Availability;

export declare namespace VPCs {
  export {
    type Subnet as Subnet,
    type VPC as VPC,
    type VPCList as VPCList,
    type VPCCreateParams as VPCCreateParams,
    type VPCUpdateParams as VPCUpdateParams,
  };

  export {
    Availability as Availability,
    type AvailabilityCreateResponse as AvailabilityCreateResponse,
    type AvailabilityUpdateResponse as AvailabilityUpdateResponse,
    type AvailabilityCreateParams as AvailabilityCreateParams,
    type AvailabilityUpdateParams as AvailabilityUpdateParams,
  };
}
