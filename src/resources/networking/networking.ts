// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as FirewallRulesAPI from './firewall-rules';
import { FirewallRules } from './firewall-rules';
import * as VPCsAPI from './vpcs';
import { VPCs } from './vpcs';

export class Networking extends APIResource {
  vpcs: VPCsAPI.VPCs = new VPCsAPI.VPCs(this._client);
  firewallRules: FirewallRulesAPI.FirewallRules = new FirewallRulesAPI.FirewallRules(this._client);
}

Networking.VPCs = VPCs;
Networking.FirewallRules = FirewallRules;

export declare namespace Networking {
  export { VPCs as VPCs };

  export { FirewallRules as FirewallRules };
}
