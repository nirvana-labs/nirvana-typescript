# Shared

Types:

- <code><a href="./src/resources/shared.ts">Operation</a></code>
- <code><a href="./src/resources/shared.ts">OperationKind</a></code>
- <code><a href="./src/resources/shared.ts">OperationStatus</a></code>
- <code><a href="./src/resources/shared.ts">OperationType</a></code>
- <code><a href="./src/resources/shared.ts">RegionName</a></code>
- <code><a href="./src/resources/shared.ts">ResourceStatus</a></code>

# VMs

Types:

- <code><a href="./src/resources/vms/vms.ts">CPU</a></code>
- <code><a href="./src/resources/vms/vms.ts">Ram</a></code>
- <code><a href="./src/resources/vms/vms.ts">RamUnit</a></code>
- <code><a href="./src/resources/vms/vms.ts">SSHKey</a></code>
- <code><a href="./src/resources/vms/vms.ts">Storage</a></code>
- <code><a href="./src/resources/vms/vms.ts">StorageType</a></code>
- <code><a href="./src/resources/vms/vms.ts">StorageUnit</a></code>
- <code><a href="./src/resources/vms/vms.ts">VM</a></code>
- <code><a href="./src/resources/vms/vms.ts">VMListResponse</a></code>

Methods:

- <code title="post /vms">client.vms.<a href="./src/resources/vms/vms.ts">create</a>({ ...params }) -> Operation</code>
- <code title="patch /vms/{vm_id}">client.vms.<a href="./src/resources/vms/vms.ts">update</a>(vmId, { ...params }) -> Operation</code>
- <code title="get /vms">client.vms.<a href="./src/resources/vms/vms.ts">list</a>({ ...params }) -> VMListResponse</code>
- <code title="delete /vms/{vm_id}">client.vms.<a href="./src/resources/vms/vms.ts">delete</a>(vmId) -> Operation</code>
- <code title="get /vms/{vm_id}">client.vms.<a href="./src/resources/vms/vms.ts">get</a>(vmId) -> VM</code>

## Operations

Methods:

- <code title="get /vms/operations/{operation_id}">client.vms.operations.<a href="./src/resources/vms/operations.ts">get</a>(operationId) -> Operation</code>

# VPCs

Types:

- <code><a href="./src/resources/vpcs/vpcs.ts">Subnet</a></code>
- <code><a href="./src/resources/vpcs/vpcs.ts">VPC</a></code>
- <code><a href="./src/resources/vpcs/vpcs.ts">VPCListResponse</a></code>

Methods:

- <code title="post /vpcs">client.vpcs.<a href="./src/resources/vpcs/vpcs.ts">create</a>({ ...params }) -> Operation</code>
- <code title="get /vpcs">client.vpcs.<a href="./src/resources/vpcs/vpcs.ts">list</a>({ ...params }) -> VPCListResponse</code>
- <code title="delete /vpcs/{vpc_id}">client.vpcs.<a href="./src/resources/vpcs/vpcs.ts">delete</a>(vpcId) -> Operation</code>
- <code title="get /vpcs/{vpc_id}">client.vpcs.<a href="./src/resources/vpcs/vpcs.ts">get</a>(vpcId) -> VPC</code>

## Operations

Methods:

- <code title="get /vpcs/operations/{operation_id}">client.vpcs.operations.<a href="./src/resources/vpcs/operations.ts">get</a>(operationId) -> Operation</code>

# FirewallRules

Types:

- <code><a href="./src/resources/firewall-rules/firewall-rules.ts">FirewallRule</a></code>
- <code><a href="./src/resources/firewall-rules/firewall-rules.ts">FirewallRuleEndpoint</a></code>
- <code><a href="./src/resources/firewall-rules/firewall-rules.ts">FirewallRuleListResponse</a></code>

Methods:

- <code title="post /vpcs/{vpc_id}/firewall_rules">client.firewallRules.<a href="./src/resources/firewall-rules/firewall-rules.ts">create</a>(vpcId, { ...params }) -> Operation</code>
- <code title="patch /vpcs/{vpc_id}/firewall_rules/{firewall_rule_id}">client.firewallRules.<a href="./src/resources/firewall-rules/firewall-rules.ts">update</a>(vpcId, firewallRuleId, { ...params }) -> Operation</code>
- <code title="get /vpcs/{vpc_id}/firewall_rules">client.firewallRules.<a href="./src/resources/firewall-rules/firewall-rules.ts">list</a>(vpcId) -> FirewallRuleListResponse</code>
- <code title="delete /vpcs/{vpc_id}/firewall_rules/{firewall_rule_id}">client.firewallRules.<a href="./src/resources/firewall-rules/firewall-rules.ts">delete</a>(vpcId, firewallRuleId) -> Operation</code>
- <code title="get /vpcs/{vpc_id}/firewall_rules/{firewall_rule_id}">client.firewallRules.<a href="./src/resources/firewall-rules/firewall-rules.ts">get</a>(vpcId, firewallRuleId) -> FirewallRule</code>

## Operations

Methods:

- <code title="get /vpcs/{vpc_id}/firewall_rules/operations/{operation_id}">client.firewallRules.operations.<a href="./src/resources/firewall-rules/operations.ts">operations</a>(vpcId, operationId) -> Operation</code>

# Volumes

Methods:

- <code title="post /vms/{vm_id}/volumes">client.volumes.<a href="./src/resources/volumes.ts">create</a>(vmId, { ...params }) -> Operation</code>
- <code title="delete /vms/{vm_id}/volumes/{volume_id}">client.volumes.<a href="./src/resources/volumes.ts">delete</a>(vmId, volumeId) -> Operation</code>
