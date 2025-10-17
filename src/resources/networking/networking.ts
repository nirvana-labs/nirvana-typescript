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
import * as ConnectAPI from './connect/connect';
import {
  Connect,
  ConnectBandwidthMbps,
  ConnectConnection,
  ConnectConnectionAWSConfig,
  ConnectConnectionAWSConfigRequest,
  ConnectConnectionList,
  ConnectRoute,
  ConnectRouteList,
} from './connect/connect';
import * as VPCsAPI from './vpcs/vpcs';
import { Subnet, VPC, VPCCreateParams, VPCList, VPCUpdateParams, VPCs } from './vpcs/vpcs';

export class Networking extends APIResource {
  vpcs: VPCsAPI.VPCs = new VPCsAPI.VPCs(this._client);
  firewallRules: FirewallRulesAPI.FirewallRules = new FirewallRulesAPI.FirewallRules(this._client);
  connect: ConnectAPI.Connect = new ConnectAPI.Connect(this._client);
}

Networking.VPCs = VPCs;
Networking.FirewallRules = FirewallRules;
Networking.Connect = Connect;

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

  export {
    Connect as Connect,
    type ConnectBandwidthMbps as ConnectBandwidthMbps,
    type ConnectConnection as ConnectConnection,
    type ConnectConnectionAWSConfig as ConnectConnectionAWSConfig,
    type ConnectConnectionAWSConfigRequest as ConnectConnectionAWSConfigRequest,
    type ConnectConnectionList as ConnectConnectionList,
    type ConnectRoute as ConnectRoute,
    type ConnectRouteList as ConnectRouteList,
  };
}
