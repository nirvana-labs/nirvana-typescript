# Shared

Types:

- <code><a href="./src/resources/shared.ts">RegionName</a></code>
- <code><a href="./src/resources/shared.ts">ResourceStatus</a></code>

# VMs

Types:

- <code><a href="./src/resources/vms/vms.ts">CPU</a></code>
- <code><a href="./src/resources/vms/vms.ts">OSImage</a></code>
- <code><a href="./src/resources/vms/vms.ts">Ram</a></code>
- <code><a href="./src/resources/vms/vms.ts">SSHKey</a></code>
- <code><a href="./src/resources/vms/vms.ts">VM</a></code>
- <code><a href="./src/resources/vms/vms.ts">VMList</a></code>

Methods:

- <code title="post /vms">client.vms.<a href="./src/resources/vms/vms.ts">create</a>({ ...params }) -> Operation</code>
- <code title="patch /vms/{vm_id}">client.vms.<a href="./src/resources/vms/vms.ts">update</a>(vmId, { ...params }) -> Operation</code>
- <code title="get /vms">client.vms.<a href="./src/resources/vms/vms.ts">list</a>() -> VMList</code>
- <code title="delete /vms/{vm_id}">client.vms.<a href="./src/resources/vms/vms.ts">delete</a>(vmId) -> Operation</code>
- <code title="get /vms/{vm_id}">client.vms.<a href="./src/resources/vms/vms.ts">get</a>(vmId) -> VM</code>

## OSImages

Types:

- <code><a href="./src/resources/vms/os-images.ts">OSImageListResponse</a></code>

Methods:

- <code title="get /vms/os_images">client.vms.osImages.<a href="./src/resources/vms/os-images.ts">list</a>() -> OSImageListResponse</code>

# VPCs

Types:

- <code><a href="./src/resources/vpcs.ts">Subnet</a></code>
- <code><a href="./src/resources/vpcs.ts">VPC</a></code>
- <code><a href="./src/resources/vpcs.ts">VPCList</a></code>

Methods:

- <code title="post /vpcs">client.vpcs.<a href="./src/resources/vpcs.ts">create</a>({ ...params }) -> Operation</code>
- <code title="get /vpcs">client.vpcs.<a href="./src/resources/vpcs.ts">list</a>() -> VPCList</code>
- <code title="delete /vpcs/{vpc_id}">client.vpcs.<a href="./src/resources/vpcs.ts">delete</a>(vpcId) -> Operation</code>
- <code title="get /vpcs/{vpc_id}">client.vpcs.<a href="./src/resources/vpcs.ts">get</a>(vpcId) -> VPC</code>

# FirewallRules

Types:

- <code><a href="./src/resources/firewall-rules.ts">FirewallRule</a></code>
- <code><a href="./src/resources/firewall-rules.ts">FirewallRuleEndpoint</a></code>
- <code><a href="./src/resources/firewall-rules.ts">FirewallRuleList</a></code>

Methods:

- <code title="post /vpcs/{vpc_id}/firewall_rules">client.firewallRules.<a href="./src/resources/firewall-rules.ts">create</a>(vpcId, { ...params }) -> Operation</code>
- <code title="patch /vpcs/{vpc_id}/firewall_rules/{firewall_rule_id}">client.firewallRules.<a href="./src/resources/firewall-rules.ts">update</a>(vpcId, firewallRuleId, { ...params }) -> Operation</code>
- <code title="get /vpcs/{vpc_id}/firewall_rules">client.firewallRules.<a href="./src/resources/firewall-rules.ts">list</a>(vpcId) -> FirewallRuleList</code>
- <code title="delete /vpcs/{vpc_id}/firewall_rules/{firewall_rule_id}">client.firewallRules.<a href="./src/resources/firewall-rules.ts">delete</a>(vpcId, firewallRuleId) -> Operation</code>
- <code title="get /vpcs/{vpc_id}/firewall_rules/{firewall_rule_id}">client.firewallRules.<a href="./src/resources/firewall-rules.ts">get</a>(vpcId, firewallRuleId) -> FirewallRule</code>

# Volumes

Types:

- <code><a href="./src/resources/volumes.ts">StorageType</a></code>
- <code><a href="./src/resources/volumes.ts">Volume</a></code>

Methods:

- <code title="post /volumes">client.volumes.<a href="./src/resources/volumes.ts">create</a>({ ...params }) -> Operation</code>
- <code title="patch /volumes/{volume_id}">client.volumes.<a href="./src/resources/volumes.ts">update</a>(volumeId, { ...params }) -> Operation</code>
- <code title="delete /volumes/{volume_id}">client.volumes.<a href="./src/resources/volumes.ts">delete</a>(volumeId, { ...params }) -> Operation</code>

# Operations

Types:

- <code><a href="./src/resources/operations.ts">Operation</a></code>
- <code><a href="./src/resources/operations.ts">OperationListResponse</a></code>

Methods:

- <code title="get /operations">client.operations.<a href="./src/resources/operations.ts">list</a>() -> OperationListResponse</code>
- <code title="get /operations/{operation_id}">client.operations.<a href="./src/resources/operations.ts">get</a>(operationId) -> Operation</code>
