// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as FirewallRulesAPI from './firewall-rules';
import * as OperationsAPI from './operations';
import * as Shared from './shared';

export class VPCs extends APIResource {
  /**
   * Create a VPC
   */
  create(body: VPCCreateParams, options?: Core.RequestOptions): Core.APIPromise<OperationsAPI.Operation> {
    return this._client.post('/vpcs', { body, ...options });
  }

  /**
   * List all VPCs
   */
  list(options?: Core.RequestOptions): Core.APIPromise<VPCList> {
    return this._client.get('/vpcs', options);
  }

  /**
   * Delete a VPC
   */
  delete(vpcId: string, options?: Core.RequestOptions): Core.APIPromise<OperationsAPI.Operation> {
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

export interface VPCList {
  items: Array<VPC>;
}

export interface VPCCreateParams {
  name: string;

  region: Shared.RegionName;

  subnet_name: string;
}
