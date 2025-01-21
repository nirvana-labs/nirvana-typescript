// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as Shared from '../shared';
import * as OperationsAPI from './operations';
import { Operations } from './operations';

export class FirewallRules extends APIResource {
  operations: OperationsAPI.Operations = new OperationsAPI.Operations(this._client);

  /**
   * Create a firewall rule
   */
  create(
    vpcId: string,
    body: FirewallRuleCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Operation> {
    return this._client.post(`/vpcs/${vpcId}/firewall_rules`, { body, ...options });
  }

  /**
   * Update a firewall rule
   */
  update(
    vpcId: string,
    firewallRuleId: string,
    body: FirewallRuleUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Operation> {
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
  ): Core.APIPromise<Shared.Operation> {
    return this._client.delete(`/vpcs/${vpcId}/firewall_rules/${firewallRuleId}`, options);
  }

  /**
   * Get details about a firewall rule
   */
  get(vpcId: string, firewallRuleId: string, options?: Core.RequestOptions): Core.APIPromise<FirewallRule> {
    return this._client.get(`/vpcs/${vpcId}/firewall_rules/${firewallRuleId}`, options);
  }
}

/**
 * Firewall rule details.
 */
export interface FirewallRule {
  id: string;

  created_at: string;

  /**
   * Firewall rule endpoint.
   */
  dest: FirewallRuleEndpoint;

  name: string;

  protocol: string;

  /**
   * Firewall rule endpoint.
   */
  source: FirewallRuleEndpoint;

  status: Shared.ResourceStatus;

  updated_at: string;

  vpc_id: string;
}

/**
 * Firewall rule endpoint.
 */
export interface FirewallRuleEndpoint {
  address: string;

  ports: Array<string>;
}

export interface FirewallRuleListResponse {
  items: Array<FirewallRule>;
}

export interface FirewallRuleCreateParams {
  /**
   * Firewall rule endpoint.
   */
  destination: FirewallRuleEndpoint;

  name: string;

  /**
   * Supported protocols.
   */
  protocol: string;

  /**
   * Firewall rule endpoint.
   */
  source: FirewallRuleEndpoint;
}

export interface FirewallRuleUpdateParams {
  /**
   * Firewall rule endpoint.
   */
  destination: FirewallRuleEndpoint;

  name: string;

  /**
   * Supported protocols.
   */
  protocol: 'tcp' | 'udp';

  /**
   * Firewall rule endpoint.
   */
  source: FirewallRuleEndpoint;
}

FirewallRules.Operations = Operations;

export declare namespace FirewallRules {
  export { Operations as Operations };
}
