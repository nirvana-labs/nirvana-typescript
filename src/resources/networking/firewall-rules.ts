// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as OperationsAPI from '../operations';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class FirewallRules extends APIResource {
  /**
   * Create a firewall rule
   */
  create(
    vpcID: string,
    body: FirewallRuleCreateParams,
    options?: RequestOptions,
  ): APIPromise<OperationsAPI.Operation> {
    return this._client.post(path`/v1/networking/vpcs/${vpcID}/firewall_rules`, { body, ...options });
  }

  /**
   * Update a firewall rule
   */
  update(
    firewallRuleID: string,
    params: FirewallRuleUpdateParams,
    options?: RequestOptions,
  ): APIPromise<OperationsAPI.Operation> {
    const { vpc_id, ...body } = params;
    return this._client.patch(path`/v1/networking/vpcs/${vpc_id}/firewall_rules/${firewallRuleID}`, {
      body,
      ...options,
    });
  }

  /**
   * List all firewall rules
   */
  list(vpcID: string, options?: RequestOptions): APIPromise<FirewallRuleList> {
    return this._client.get(path`/v1/networking/vpcs/${vpcID}/firewall_rules`, options);
  }

  /**
   * Delete a firewall rule
   */
  delete(
    firewallRuleID: string,
    params: FirewallRuleDeleteParams,
    options?: RequestOptions,
  ): APIPromise<OperationsAPI.Operation> {
    const { vpc_id } = params;
    return this._client.delete(path`/v1/networking/vpcs/${vpc_id}/firewall_rules/${firewallRuleID}`, options);
  }

  /**
   * Get details about a firewall rule
   */
  get(
    firewallRuleID: string,
    params: FirewallRuleGetParams,
    options?: RequestOptions,
  ): APIPromise<FirewallRule> {
    const { vpc_id } = params;
    return this._client.get(path`/v1/networking/vpcs/${vpc_id}/firewall_rules/${firewallRuleID}`, options);
  }
}

/**
 * Firewall rule details.
 */
export interface FirewallRule {
  id: string;

  created_at: string;

  destination_address: string;

  destination_ports: Array<string>;

  name: string;

  /**
   * Supported Firewall Rule protocols.
   */
  protocol: 'tcp' | 'udp';

  source_address: string;

  status: Shared.ResourceStatus;

  updated_at: string;

  vpc_id: string;
}

export interface FirewallRuleList {
  items: Array<FirewallRule>;
}

export interface FirewallRuleCreateParams {
  destination_address: string;

  destination_ports: Array<string>;

  name: string;

  /**
   * Supported Firewall Rule protocols.
   */
  protocol: string;

  source_address: string;
}

export interface FirewallRuleUpdateParams {
  /**
   * Path param: VPC ID
   */
  vpc_id: string;

  /**
   * Body param:
   */
  destination_address?: string;

  /**
   * Body param:
   */
  destination_ports?: Array<string>;

  /**
   * Body param:
   */
  name?: string;

  /**
   * Body param: Supported Firewall Rule protocols.
   */
  protocol?: 'tcp' | 'udp';

  /**
   * Body param:
   */
  source_address?: string;
}

export interface FirewallRuleDeleteParams {
  /**
   * VPC ID
   */
  vpc_id: string;
}

export interface FirewallRuleGetParams {
  /**
   * VPC ID
   */
  vpc_id: string;
}

export declare namespace FirewallRules {
  export {
    type FirewallRule as FirewallRule,
    type FirewallRuleList as FirewallRuleList,
    type FirewallRuleCreateParams as FirewallRuleCreateParams,
    type FirewallRuleUpdateParams as FirewallRuleUpdateParams,
    type FirewallRuleDeleteParams as FirewallRuleDeleteParams,
    type FirewallRuleGetParams as FirewallRuleGetParams,
  };
}
