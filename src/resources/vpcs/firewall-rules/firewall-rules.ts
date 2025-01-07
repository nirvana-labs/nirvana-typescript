// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as OperationsAPI from './operations';
import { OperationRetrieveResponse, Operations } from './operations';

export class FirewallRules extends APIResource {
  operations: OperationsAPI.Operations = new OperationsAPI.Operations(this._client);

  /**
   * Create a firewall rule
   */
  create(
    vpcId: string,
    body: FirewallRuleCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FirewallRuleCreateResponse> {
    return this._client.post(`/vpcs/${vpcId}/firewall_rules`, { body, ...options });
  }

  /**
   * Get details about a firewall rule
   */
  retrieve(
    vpcId: string,
    firewallRuleId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Firewallrule> {
    return this._client.get(`/vpcs/${vpcId}/firewall_rules/${firewallRuleId}`, options);
  }

  /**
   * Update a firewall rule
   */
  update(
    vpcId: string,
    firewallRuleId: string,
    body: FirewallRuleUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FirewallRuleUpdateResponse> {
    return this._client.patch(`/vpcs/${vpcId}/firewall_rules/${firewallRuleId}`, { body, ...options });
  }

  /**
   * List all firewall rules
   */
  list(vpcId: string, options?: Core.RequestOptions): Core.APIPromise<FirewallRuleListResponse> {
    return this._client.get(`/vpcs/${vpcId}/firewall_rules`, options);
  }

  /**
   * Delete a firewall rule
   */
  delete(
    vpcId: string,
    firewallRuleId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FirewallRuleDeleteResponse> {
    return this._client.delete(`/vpcs/${vpcId}/firewall_rules/${firewallRuleId}`, options);
  }
}

/**
 * Firewall rule details.
 */
export interface Firewallrule {
  id: string;

  created_at: string;

  /**
   * Firewall rule endpoint.
   */
  dest: Firewallrule.Dest;

  name: string;

  protocol: string;

  /**
   * Firewall rule endpoint.
   */
  source: Firewallrule.Source;

  status: 'PENDING' | 'CREATING' | 'UPDATING' | 'READY' | 'DELETING' | 'DELETED' | 'FAILED';

  updated_at: string;

  vpc_id: string;
}

export namespace Firewallrule {
  /**
   * Firewall rule endpoint.
   */
  export interface Dest {
    address: string;

    ports: Array<string>;
  }

  /**
   * Firewall rule endpoint.
   */
  export interface Source {
    address: string;

    ports: Array<string>;
  }
}

/**
 * Operation details.
 */
export interface FirewallRuleCreateResponse {
  id: string;

  kind: 'VM' | 'VPC' | 'FIREWALL_RULE';

  resource_id: string;

  status: 'PENDING' | 'RUNNING' | 'DONE' | 'FAILED';

  type: 'CREATE' | 'UPDATE' | 'DELETE';
}

/**
 * Operation details.
 */
export interface FirewallRuleUpdateResponse {
  id: string;

  kind: 'VM' | 'VPC' | 'FIREWALL_RULE';

  resource_id: string;

  status: 'PENDING' | 'RUNNING' | 'DONE' | 'FAILED';

  type: 'CREATE' | 'UPDATE' | 'DELETE';
}

export interface FirewallRuleListResponse {
  items: Array<Firewallrule>;
}

/**
 * Operation details.
 */
export interface FirewallRuleDeleteResponse {
  id: string;

  kind: 'VM' | 'VPC' | 'FIREWALL_RULE';

  resource_id: string;

  status: 'PENDING' | 'RUNNING' | 'DONE' | 'FAILED';

  type: 'CREATE' | 'UPDATE' | 'DELETE';
}

export interface FirewallRuleCreateParams {
  /**
   * Firewall rule endpoint.
   */
  destination: FirewallRuleCreateParams.Destination;

  name: string;

  /**
   * Supported protocols.
   */
  protocol: string;

  /**
   * Firewall rule endpoint.
   */
  source: FirewallRuleCreateParams.Source;
}

export namespace FirewallRuleCreateParams {
  /**
   * Firewall rule endpoint.
   */
  export interface Destination {
    address: string;

    ports: Array<string>;
  }

  /**
   * Firewall rule endpoint.
   */
  export interface Source {
    address: string;

    ports: Array<string>;
  }
}

export interface FirewallRuleUpdateParams {
  /**
   * Firewall rule endpoint.
   */
  destination: FirewallRuleUpdateParams.Destination;

  name: string;

  /**
   * Supported protocols.
   */
  protocol: 'tcp' | 'udp';

  /**
   * Firewall rule endpoint.
   */
  source: FirewallRuleUpdateParams.Source;
}

export namespace FirewallRuleUpdateParams {
  /**
   * Firewall rule endpoint.
   */
  export interface Destination {
    address: string;

    ports: Array<string>;
  }

  /**
   * Firewall rule endpoint.
   */
  export interface Source {
    address: string;

    ports: Array<string>;
  }
}

FirewallRules.Operations = Operations;

export declare namespace FirewallRules {
  export {
    type Firewallrule as Firewallrule,
    type FirewallRuleCreateResponse as FirewallRuleCreateResponse,
    type FirewallRuleUpdateResponse as FirewallRuleUpdateResponse,
    type FirewallRuleListResponse as FirewallRuleListResponse,
    type FirewallRuleDeleteResponse as FirewallRuleDeleteResponse,
    type FirewallRuleCreateParams as FirewallRuleCreateParams,
    type FirewallRuleUpdateParams as FirewallRuleUpdateParams,
  };

  export { Operations as Operations, type OperationRetrieveResponse as OperationRetrieveResponse };
}
