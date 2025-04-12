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
  /**
   * Unique identifier for the firewall rule.
   */
  id: string;

  /**
   * Time the firewall rule was created.
   */
  created_at: string;

  /**
   * Destination address of the firewall rule.
   */
  destination_address: string;

  /**
   * Destination ports of the firewall rule.
   */
  destination_ports: Array<string>;

  /**
   * Name of the firewall rule.
   */
  name: string;

  /**
   * Protocol of the firewall rule.
   */
  protocol: 'tcp' | 'udp';

  /**
   * Source address of the firewall rule.
   */
  source_address: string;

  /**
   * Status of the VPC.
   */
  status: Shared.ResourceStatus;

  /**
   * Time the firewall rule was updated.
   */
  updated_at: string;

  /**
   * ID of the VPC the firewall rule belongs to.
   */
  vpc_id: string;
}

export interface FirewallRuleList {
  items: Array<FirewallRule>;
}

export interface FirewallRuleCreateParams {
  /**
   * Destination address of the firewall rule.
   */
  destination_address: string;

  /**
   * Destination ports of the firewall rule.
   */
  destination_ports: Array<string>;

  /**
   * Name of the firewall rule.
   */
  name: string;

  /**
   * Protocol of the firewall rule.
   */
  protocol: string;

  /**
   * Source address of the firewall rule.
   */
  source_address: string;
}

export interface FirewallRuleUpdateParams {
  /**
   * Path param: VPC ID
   */
  vpc_id: string;

  /**
   * Body param: Destination address of the firewall rule.
   */
  destination_address?: string;

  /**
   * Body param: Destination ports of the firewall rule.
   */
  destination_ports?: Array<string>;

  /**
   * Body param: Name of the firewall rule.
   */
  name?: string;

  /**
   * Body param: Protocol of the firewall rule.
   */
  protocol?: 'tcp' | 'udp';

  /**
   * Body param: Source address of the firewall rule.
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
