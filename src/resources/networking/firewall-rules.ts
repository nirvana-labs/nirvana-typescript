// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as OperationsAPI from '../operations';
import * as Shared from '../shared';

export class FirewallRules extends APIResource {
  /**
   * Create a firewall rule
   */
  create(
    vpcId: string,
    body: FirewallRuleCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OperationsAPI.Operation> {
    return this._client.post(`/networking/vpcs/${vpcId}/firewall_rules`, { body, ...options });
  }

  /**
   * Update a firewall rule
   */
  update(
    vpcId: string,
    firewallRuleId: string,
    body: FirewallRuleUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OperationsAPI.Operation> {
    return this._client.patch(`/networking/vpcs/${vpcId}/firewall_rules/${firewallRuleId}`, {
      body,
      ...options,
    });
  }

  /**
   * List all firewall rules
   */
  list(vpcId: string, options?: Core.RequestOptions): Core.APIPromise<FirewallRuleList> {
    return this._client.get(`/networking/vpcs/${vpcId}/firewall_rules`, options);
  }

  /**
   * Delete a firewall rule
   */
  delete(
    vpcId: string,
    firewallRuleId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OperationsAPI.Operation> {
    return this._client.delete(`/networking/vpcs/${vpcId}/firewall_rules/${firewallRuleId}`, options);
  }

  /**
   * Get details about a firewall rule
   */
  get(vpcId: string, firewallRuleId: string, options?: Core.RequestOptions): Core.APIPromise<FirewallRule> {
    return this._client.get(`/networking/vpcs/${vpcId}/firewall_rules/${firewallRuleId}`, options);
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
  destination: FirewallRuleEndpoint;

  name: string;

  /**
   * Supported Firewall Rule protocols.
   */
  protocol: 'tcp' | 'udp';

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
  address?: string;

  ports?: Array<string>;
}

export interface FirewallRuleList {
  items: Array<FirewallRule>;
}

export interface FirewallRuleCreateParams {
  /**
   * Firewall rule endpoint.
   */
  destination: FirewallRuleEndpoint;

  name: string;

  /**
   * Supported Firewall Rule protocols.
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
   * Supported Firewall Rule protocols.
   */
  protocol: 'tcp' | 'udp';

  /**
   * Firewall rule endpoint.
   */
  source: FirewallRuleEndpoint;
}

export declare namespace FirewallRules {
  export {
    type FirewallRule as FirewallRule,
    type FirewallRuleEndpoint as FirewallRuleEndpoint,
    type FirewallRuleList as FirewallRuleList,
    type FirewallRuleCreateParams as FirewallRuleCreateParams,
    type FirewallRuleUpdateParams as FirewallRuleUpdateParams,
  };
}
