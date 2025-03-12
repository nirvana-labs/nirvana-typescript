// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as OperationsAPI from '../operations';
import * as Shared from '../shared';

export class VPCs extends APIResource {
  /**
   * Create a VPC
   */
  create(body: VPCCreateParams, options?: Core.RequestOptions): Core.APIPromise<OperationsAPI.Operation> {
    return this._client.post('/networking/vpcs', { body, ...options });
  }

  /**
   * Update a VPC
   */
  update(vpcId: string, body: VPCUpdateParams, options?: Core.RequestOptions): Core.APIPromise<VPC> {
    return this._client.patch(`/networking/vpcs/${vpcId}`, { body, ...options });
  }

  /**
   * List all VPCs
   */
  list(options?: Core.RequestOptions): Core.APIPromise<VPCList> {
    return this._client.get('/networking/vpcs', options);
  }

  /**
   * Delete a VPC
   */
  delete(vpcId: string, options?: Core.RequestOptions): Core.APIPromise<OperationsAPI.Operation> {
    return this._client.delete(`/networking/vpcs/${vpcId}`, options);
  }

  /**
   * Get details about a VPC
   */
  get(vpcId: string, options?: Core.RequestOptions): Core.APIPromise<VPC> {
    return this._client.get(`/networking/vpcs/${vpcId}`, options);
  }
}

/**
 * Subnet details.
 */
export interface Subnet {
  id: string;

  cidr: string;

  created_at: string;

  name: string;

  updated_at: string;
}

/**
 * VPC details.
 */
export interface VPC {
  id: string;

  created_at: string;

  firewall_rule_ids: Array<string>;

  name: string;

  region: Shared.RegionName;

  status: Shared.ResourceStatus;

  /**
   * Subnet details.
   */
  subnet: Subnet;

  updated_at: string;
}

export interface VPCList {
  items: Array<VPC>;
}

export interface VPCCreateParams {
  name: string;

  region: Shared.RegionName;

  subnet_name: string;
}

export interface VPCUpdateParams {
  name?: string;

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
