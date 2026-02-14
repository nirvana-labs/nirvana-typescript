# Networking

## VPCs

Types:

- <code><a href="./src/resources/networking/vpcs/vpcs.ts">Subnet</a></code>
- <code><a href="./src/resources/networking/vpcs/vpcs.ts">VPC</a></code>
- <code><a href="./src/resources/networking/vpcs/vpcs.ts">VPCList</a></code>

Methods:

- <code title="post /v1/networking/vpcs">client.networking.vpcs.<a href="./src/resources/networking/vpcs/vpcs.ts">create</a>({ ...params }) -> Operation</code>
- <code title="patch /v1/networking/vpcs/{vpc_id}">client.networking.vpcs.<a href="./src/resources/networking/vpcs/vpcs.ts">update</a>(vpcID, { ...params }) -> Operation</code>
- <code title="get /v1/networking/vpcs">client.networking.vpcs.<a href="./src/resources/networking/vpcs/vpcs.ts">list</a>({ ...params }) -> VPCsCursor</code>
- <code title="delete /v1/networking/vpcs/{vpc_id}">client.networking.vpcs.<a href="./src/resources/networking/vpcs/vpcs.ts">delete</a>(vpcID) -> Operation</code>
- <code title="get /v1/networking/vpcs/{vpc_id}">client.networking.vpcs.<a href="./src/resources/networking/vpcs/vpcs.ts">get</a>(vpcID) -> VPC</code>

### Availability

Methods:

- <code title="post /v1/networking/vpcs/availability">client.networking.vpcs.availability.<a href="./src/resources/networking/vpcs/availability.ts">create</a>({ ...params }) -> void</code>
- <code title="patch /v1/networking/vpcs/{vpc_id}/availability">client.networking.vpcs.availability.<a href="./src/resources/networking/vpcs/availability.ts">update</a>(vpcID, { ...params }) -> void</code>

## FirewallRules

Types:

- <code><a href="./src/resources/networking/firewall-rules.ts">FirewallRule</a></code>
- <code><a href="./src/resources/networking/firewall-rules.ts">FirewallRuleList</a></code>

Methods:

- <code title="post /v1/networking/vpcs/{vpc_id}/firewall_rules">client.networking.firewallRules.<a href="./src/resources/networking/firewall-rules.ts">create</a>(vpcID, { ...params }) -> Operation</code>
- <code title="patch /v1/networking/vpcs/{vpc_id}/firewall_rules/{firewall_rule_id}">client.networking.firewallRules.<a href="./src/resources/networking/firewall-rules.ts">update</a>(firewallRuleID, { ...params }) -> Operation</code>
- <code title="get /v1/networking/vpcs/{vpc_id}/firewall_rules">client.networking.firewallRules.<a href="./src/resources/networking/firewall-rules.ts">list</a>(vpcID, { ...params }) -> FirewallRulesCursor</code>
- <code title="delete /v1/networking/vpcs/{vpc_id}/firewall_rules/{firewall_rule_id}">client.networking.firewallRules.<a href="./src/resources/networking/firewall-rules.ts">delete</a>(firewallRuleID, { ...params }) -> Operation</code>
- <code title="get /v1/networking/vpcs/{vpc_id}/firewall_rules/{firewall_rule_id}">client.networking.firewallRules.<a href="./src/resources/networking/firewall-rules.ts">get</a>(firewallRuleID, { ...params }) -> FirewallRule</code>

## Connect

Types:

- <code><a href="./src/resources/networking/connect/connect.ts">ConnectBandwidthMbps</a></code>
- <code><a href="./src/resources/networking/connect/connect.ts">ConnectConnection</a></code>
- <code><a href="./src/resources/networking/connect/connect.ts">ConnectConnectionAWSConfig</a></code>
- <code><a href="./src/resources/networking/connect/connect.ts">ConnectConnectionAWSConfigRequest</a></code>
- <code><a href="./src/resources/networking/connect/connect.ts">ConnectConnectionList</a></code>
- <code><a href="./src/resources/networking/connect/connect.ts">ConnectRoute</a></code>
- <code><a href="./src/resources/networking/connect/connect.ts">ConnectRouteList</a></code>

### Connections

Methods:

- <code title="post /v1/networking/connect/connections">client.networking.connect.connections.<a href="./src/resources/networking/connect/connections.ts">create</a>({ ...params }) -> Operation</code>
- <code title="patch /v1/networking/connect/connections/{connection_id}">client.networking.connect.connections.<a href="./src/resources/networking/connect/connections.ts">update</a>(connectionID, { ...params }) -> Operation</code>
- <code title="get /v1/networking/connect/connections">client.networking.connect.connections.<a href="./src/resources/networking/connect/connections.ts">list</a>({ ...params }) -> ConnectConnectionsCursor</code>
- <code title="delete /v1/networking/connect/connections/{connection_id}">client.networking.connect.connections.<a href="./src/resources/networking/connect/connections.ts">delete</a>(connectionID) -> Operation</code>
- <code title="get /v1/networking/connect/connections/{connection_id}">client.networking.connect.connections.<a href="./src/resources/networking/connect/connections.ts">get</a>(connectionID) -> ConnectConnection</code>

### Routes

Methods:

- <code title="get /v1/networking/connect/routes">client.networking.connect.routes.<a href="./src/resources/networking/connect/routes.ts">list</a>({ ...params }) -> ConnectRoutesCursor</code>
