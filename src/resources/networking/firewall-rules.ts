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
   *
   * @example
   * ```ts
   * const operation =
   *   await client.networking.firewallRules.create('vpc_id', {
   *     destination_address: '10.0.0.0/25',
   *     destination_ports: ['22', '80', '443'],
   *     name: 'my-firewall-rule',
   *     protocol: 'tcp',
   *     source_address: '0.0.0.0/0',
   *   });
   * ```
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
   *
   * @example
   * ```ts
   * const operation =
   *   await client.networking.firewallRules.update(
   *     'firewall_rule_id',
   *     { vpc_id: 'vpc_id' },
   *   );
   * ```
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
   *
   * @example
   * ```ts
   * const firewallRuleList =
   *   await client.networking.firewallRules.list('vpc_id');
   * ```
   */
  list(vpcID: string, options?: RequestOptions): APIPromise<FirewallRuleList> {
    return this._client.get(path`/v1/networking/vpcs/${vpcID}/firewall_rules`, options);
  }

  /**
   * Delete a firewall rule
   *
   * @example
   * ```ts
   * const operation =
   *   await client.networking.firewallRules.delete(
   *     'firewall_rule_id',
   *     { vpc_id: 'vpc_id' },
   *   );
   * ```
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
   *
   * @example
   * ```ts
   * const firewallRule =
   *   await client.networking.firewallRules.get(
   *     'firewall_rule_id',
   *     { vpc_id: 'vpc_id' },
   *   );
   * ```
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
   * Unique identifier for the Firewall Rule.
   */
  id: string;

  /**
   * When the Firewall Rule was created.
   */
  created_at: string;

  /**
   * Destination address of the Firewall Rule. Either VPC CIDR or VM in VPC.
   */
  destination_address: string;

  /**
   * Destination ports of the Firewall Rule.
   */
  destination_ports: Array<string>;

  /**
   * Name of the Firewall Rule.
   */
  name: string;

  /**
   * Protocol of the Firewall Rule.
   */
  protocol: 'tcp' | 'udp';

  /**
   * Source address of the Firewall Rule. Address of 0.0.0.0 requires a CIDR mask
   * of 0.
   */
  source_address: string;

  /**
   * Status of the resource.
   */
  status: Shared.ResourceStatus;

  /**
   * Tags to attach to the Firewall Rule.
   */
  tags: Array<string>;

  /**
   * When the Firewall Rule was updated.
   */
  updated_at: string;

  /**
   * ID of the VPC the Firewall Rule belongs to.
   */
  vpc_id: string;
}

export interface FirewallRuleList {
  items: Array<FirewallRule>;

  /**
   * Pagination response details.
   */
  pagination?: Shared.Pagination;
}

export interface FirewallRuleCreateParams {
  /**
   * Destination address of the Firewall Rule. Either VPC CIDR or VM in VPC.
   */
  destination_address: string;

  /**
   * Destination ports of the Firewall Rule.
   */
  destination_ports: Array<string>;

  /**
   * Name of the Firewall Rule.
   */
  name: string;

  /**
   * Protocol of the Firewall Rule.
   */
  protocol: 'tcp' | 'udp';

  /**
   * Source address of the Firewall Rule. Address of 0.0.0.0 requires a CIDR mask
   * of 0.
   */
  source_address: string;

  /**
   * Tags to attach to the Firewall Rule.
   */
  tags?: Array<string>;
}

export interface FirewallRuleUpdateParams {
  /**
   * Path param: VPC ID
   */
  vpc_id: string;

  /**
   * Body param: Destination address of the Firewall Rule. Either VPC CIDR or VM in
   * VPC.
   */
  destination_address?: string;

  /**
   * Body param: Destination ports of the Firewall Rule.
   */
  destination_ports?: Array<string>;

  /**
   * Body param: Name of the Firewall Rule.
   */
  name?: string;

  /**
   * Body param: Protocol of the Firewall Rule.
   */
  protocol?: 'tcp' | 'udp';

  /**
   * Body param: Source address of the Firewall Rule. Address of 0.0.0.0 requires a
   * CIDR mask of 0.
   */
  source_address?: string;

  /**
   * Body param: Tags to attach to the Firewall Rule.
   */
  tags?: Array<string>;
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
