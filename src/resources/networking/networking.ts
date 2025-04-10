// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as FirewallRulesAPI from './firewall-rules';
import {
  FirewallRule,
  FirewallRuleCreateParams,
  FirewallRuleDeleteParams,
  FirewallRuleGetParams,
  FirewallRuleList,
  FirewallRuleUpdateParams,
  FirewallRules,
} from './firewall-rules';
import * as VPCsAPI from './vpcs';
import { Subnet, VPC, VPCCreateParams, VPCList, VPCUpdateParams, VPCs } from './vpcs';

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
    type VPCCreateParams as VPCCreateParams,
    type VPCUpdateParams as VPCUpdateParams,
  };

  export {
    FirewallRules as FirewallRules,
    type FirewallRule as FirewallRule,
    type FirewallRuleList as FirewallRuleList,
    type FirewallRuleCreateParams as FirewallRuleCreateParams,
    type FirewallRuleUpdateParams as FirewallRuleUpdateParams,
    type FirewallRuleDeleteParams as FirewallRuleDeleteParams,
    type FirewallRuleGetParams as FirewallRuleGetParams,
  };
}
