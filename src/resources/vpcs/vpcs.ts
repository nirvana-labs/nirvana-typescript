// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as Shared from '../shared';
import * as FirewallRulesAPI from '../firewall-rules/firewall-rules';
import * as OperationsAPI from './operations';
import { Operations } from './operations';

export class VPCs extends APIResource {
  operations: OperationsAPI.Operations = new OperationsAPI.Operations(this._client);

  /**
   * Create a VPC
   */
  create(body: VPCCreateParams, options?: Core.RequestOptions): Core.APIPromise<Shared.Operation> {
    return this._client.post('/vpcs', { body, ...options });
  }

  /**
   * List all VPCs
   */
  list(query: VPCListParams, options?: Core.RequestOptions): Core.APIPromise<VPCListResponse> {
    return this._client.get('/vpcs', { query, ...options });
  }

  /**
   * Delete a VPC
   */
  delete(vpcId: string, options?: Core.RequestOptions): Core.APIPromise<Shared.Operation> {
    return this._client.delete(`/vpcs/${vpcId}`, options);
  }

  /**
   * Get details about a VPC
   */
  get(vpcId: string, options?: Core.RequestOptions): Core.APIPromise<VPC> {
    return this._client.get(`/vpcs/${vpcId}`, options);
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

  firewall_rules: Array<FirewallRulesAPI.FirewallRule>;

  name: string;

  region: Shared.RegionName;

  status: Shared.ResourceStatus;

  /**
   * Subnet details.
   */
  subnet: Subnet;

  updated_at: string;
}

export interface VPCListResponse {
  items: Array<VPC>;
}

export interface VPCCreateParams {
  name: string;

  region: Shared.RegionName;

  subnet_name: string;
}

export interface VPCListParams {
  /**
   * Region
   */
  region: string;
}

VPCs.Operations = Operations;

export declare namespace VPCs {
  export { Operations as Operations };
}
