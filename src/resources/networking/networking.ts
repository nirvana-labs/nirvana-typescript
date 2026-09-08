// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as FirewallRulesAPI from './firewall-rules';
import {
  FirewallRule,
  FirewallRuleCreateParams,
  FirewallRuleDeleteParams,
  FirewallRuleGetParams,
  FirewallRuleList,
  FirewallRuleListParams,
  FirewallRuleUpdateParams,
  FirewallRules,
  FirewallRulesCursor,
} from './firewall-rules';
import * as VPCsAPI from './vpcs/vpcs';
import {
  Subnet,
  VPC,
  VPCCreateParams,
  VPCList,
  VPCListParams,
  VPCUpdateParams,
  VPCs,
  VPCsCursor,
} from './vpcs/vpcs';

export class Networking extends APIResource {
  vpcs: VPCsAPI.VPCs = new VPCsAPI.VPCs(this._client);
  firewallRules: FirewallRulesAPI.FirewallRules = new FirewallRulesAPI.FirewallRules(this._client);
}

Networking.VPCs = VPCs;
Networking.FirewallRules = FirewallRules;

export declare namespace Networking {
  export {
    VPCs as VPCs,
    type Subnet as Subnet,
    type VPC as VPC,
    type VPCList as VPCList,
    type VPCsCursor as VPCsCursor,
    type VPCCreateParams as VPCCreateParams,
    type VPCUpdateParams as VPCUpdateParams,
    type VPCListParams as VPCListParams,
  };

  export {
    FirewallRules as FirewallRules,
    type FirewallRule as FirewallRule,
    type FirewallRuleList as FirewallRuleList,
    type FirewallRulesCursor as FirewallRulesCursor,
    type FirewallRuleCreateParams as FirewallRuleCreateParams,
    type FirewallRuleGetParams as FirewallRuleGetParams,
    type FirewallRuleUpdateParams as FirewallRuleUpdateParams,
    type FirewallRuleDeleteParams as FirewallRuleDeleteParams,
    type FirewallRuleListParams as FirewallRuleListParams,
  };
}
