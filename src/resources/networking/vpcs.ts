// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as OperationsAPI from '../operations';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class VPCs extends APIResource {
  /**
   * Create a VPC
   */
  create(body: VPCCreateParams, options?: RequestOptions): APIPromise<OperationsAPI.Operation> {
    return this._client.post('/v1/networking/vpcs', { body, ...options });
  }

  /**
   * Update a VPC
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
   */
  list(options?: RequestOptions): APIPromise<VPCList> {
    return this._client.get('/v1/networking/vpcs', options);
  }

  /**
   * Delete a VPC
   */
  delete(vpcID: string, options?: RequestOptions): APIPromise<OperationsAPI.Operation> {
    return this._client.delete(path`/v1/networking/vpcs/${vpcID}`, options);
  }

  /**
   * Get details about a VPC
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
   * Unique identifier for the subnet.
   */
  id: string;

  /**
   * CIDR block for the subnet.
   */
  cidr: string;

  /**
   * Time the subnet was created.
   */
  created_at: string;

  /**
   * Name of the subnet.
   */
  name: string;

  /**
   * Time the subnet was updated.
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
   * Time the VPC was created.
   */
  created_at: string;

  /**
   * IDs of the firewall rules associated with the VPC.
   */
  firewall_rule_ids: Array<string>;

  /**
   * Name of the VPC.
   */
  name: string;

  /**
   * Region of the VPC.
   */
  region: Shared.RegionName;

  /**
   * Status of the VPC.
   */
  status: Shared.ResourceStatus;

  /**
   * Subnet of the VPC.
   */
  subnet: Subnet;

  /**
   * Time the VPC was updated.
   */
  updated_at: string;
}

export interface VPCList {
  items: Array<VPC>;
}

export interface VPCCreateParams {
  /**
   * Name of the VPC.
   */
  name: string;

  /**
   * Region of the VPC.
   */
  region: Shared.RegionName;

  /**
   * Name of the subnet to create.
   */
  subnet_name: string;
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
}

export declare namespace VPCs {
  export {
    type Subnet as Subnet,
    type VPC as VPC,
    type VPCList as VPCList,
    type VPCCreateParams as VPCCreateParams,
    type VPCUpdateParams as VPCUpdateParams,
  };
}
