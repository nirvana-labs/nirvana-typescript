// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as OperationsAPI from './operations';
import { OperationRetrieveResponse, Operations } from './operations';
import * as FirewallRulesAPI from './firewall-rules/firewall-rules';
import {
  FirewallRuleCreateParams,
  FirewallRuleCreateResponse,
  FirewallRuleDeleteResponse,
  FirewallRuleListResponse,
  FirewallRuleUpdateParams,
  FirewallRuleUpdateResponse,
  FirewallRules,
  Firewallrule,
} from './firewall-rules/firewall-rules';

export class Vpcs extends APIResource {
  operations: OperationsAPI.Operations = new OperationsAPI.Operations(this._client);
  firewallRules: FirewallRulesAPI.FirewallRules = new FirewallRulesAPI.FirewallRules(this._client);

  /**
   * Create a VPC
   */
  create(body: VpcCreateParams, options?: Core.RequestOptions): Core.APIPromise<VpcCreateResponse> {
    return this._client.post('/vpcs', { body, ...options });
  }

  /**
   * Get details about a VPC
   */
  retrieve(vpcId: string, options?: Core.RequestOptions): Core.APIPromise<Vpc> {
    return this._client.get(`/vpcs/${vpcId}`, options);
  }

  /**
   * List all VPCs
   */
  list(query: VpcListParams, options?: Core.RequestOptions): Core.APIPromise<VpcListResponse> {
    return this._client.get('/vpcs', { query, ...options });
  }

  /**
   * Delete a VPC
   */
  delete(vpcId: string, options?: Core.RequestOptions): Core.APIPromise<VpcDeleteResponse> {
    return this._client.delete(`/vpcs/${vpcId}`, options);
  }
}

/**
 * VPC details.
 */
export interface Vpc {
  id: string;

  created_at: string;

  firewall_rules: Array<FirewallRulesAPI.Firewallrule>;

  name: string;

  region:
    | 'amsterdam'
    | 'chicago'
    | 'frankfurt'
    | 'hongkong'
    | 'london'
    | 'mumbai'
    | 'saopaulo'
    | 'seattle'
    | 'siliconvalley'
    | 'singapore'
    | 'stockholm'
    | 'sydney'
    | 'tokyo'
    | 'washingtondc'
    | 'staging';

  status: 'PENDING' | 'CREATING' | 'UPDATING' | 'READY' | 'DELETING' | 'DELETED' | 'FAILED';

  /**
   * Subnet details.
   */
  subnet: Vpc.Subnet;

  updated_at: string;
}

export namespace Vpc {
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
}

/**
 * Operation details.
 */
export interface VpcCreateResponse {
  id: string;

  kind: 'VM' | 'VPC' | 'FIREWALL_RULE';

  resource_id: string;

  status: 'PENDING' | 'RUNNING' | 'DONE' | 'FAILED';

  type: 'CREATE' | 'UPDATE' | 'DELETE';
}

export interface VpcListResponse {
  items: Array<Vpc>;
}

/**
 * Operation details.
 */
export interface VpcDeleteResponse {
  id: string;

  kind: 'VM' | 'VPC' | 'FIREWALL_RULE';

  resource_id: string;

  status: 'PENDING' | 'RUNNING' | 'DONE' | 'FAILED';

  type: 'CREATE' | 'UPDATE' | 'DELETE';
}

export interface VpcCreateParams {
  name: string;

  region:
    | 'amsterdam'
    | 'chicago'
    | 'frankfurt'
    | 'hongkong'
    | 'london'
    | 'mumbai'
    | 'saopaulo'
    | 'seattle'
    | 'siliconvalley'
    | 'singapore'
    | 'stockholm'
    | 'sydney'
    | 'tokyo'
    | 'washingtondc'
    | 'staging';

  subnet_name: string;
}

export interface VpcListParams {
  /**
   * Region
   */
  region: string;
}

Vpcs.Operations = Operations;
Vpcs.FirewallRules = FirewallRules;

export declare namespace Vpcs {
  export {
    type Vpc as Vpc,
    type VpcCreateResponse as VpcCreateResponse,
    type VpcListResponse as VpcListResponse,
    type VpcDeleteResponse as VpcDeleteResponse,
    type VpcCreateParams as VpcCreateParams,
    type VpcListParams as VpcListParams,
  };

  export { Operations as Operations, type OperationRetrieveResponse as OperationRetrieveResponse };

  export {
    FirewallRules as FirewallRules,
    type Firewallrule as Firewallrule,
    type FirewallRuleCreateResponse as FirewallRuleCreateResponse,
    type FirewallRuleUpdateResponse as FirewallRuleUpdateResponse,
    type FirewallRuleListResponse as FirewallRuleListResponse,
    type FirewallRuleDeleteResponse as FirewallRuleDeleteResponse,
    type FirewallRuleCreateParams as FirewallRuleCreateParams,
    type FirewallRuleUpdateParams as FirewallRuleUpdateParams,
  };
}
