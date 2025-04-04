# Shared

Types:

- <code><a href="./src/resources/shared.ts">RegionName</a></code>
- <code><a href="./src/resources/shared.ts">ResourceStatus</a></code>

# User

Types:

- <code><a href="./src/resources/user.ts">User</a></code>

Methods:

- <code title="get /user">client.user.<a href="./src/resources/user.ts">get</a>() -> User</code>

# APIKeys

Types:

- <code><a href="./src/resources/api-keys.ts">APIKey</a></code>
- <code><a href="./src/resources/api-keys.ts">APIKeyList</a></code>

Methods:

- <code title="post /api_keys">client.apiKeys.<a href="./src/resources/api-keys.ts">create</a>({ ...params }) -> APIKey</code>
- <code title="patch /api_keys/{api_key_id}">client.apiKeys.<a href="./src/resources/api-keys.ts">update</a>(apiKeyId, { ...params }) -> APIKey</code>
- <code title="get /api_keys">client.apiKeys.<a href="./src/resources/api-keys.ts">list</a>() -> APIKeyList</code>
- <code title="delete /api_keys/{api_key_id}">client.apiKeys.<a href="./src/resources/api-keys.ts">delete</a>(apiKeyId) -> void</code>
- <code title="get /api_keys/{api_key_id}">client.apiKeys.<a href="./src/resources/api-keys.ts">get</a>(apiKeyId) -> APIKey</code>

# Operations

Types:

- <code><a href="./src/resources/operations.ts">Operation</a></code>
- <code><a href="./src/resources/operations.ts">OperationKind</a></code>
- <code><a href="./src/resources/operations.ts">OperationList</a></code>
- <code><a href="./src/resources/operations.ts">OperationStatus</a></code>
- <code><a href="./src/resources/operations.ts">OperationType</a></code>

Methods:

- <code title="get /operations">client.operations.<a href="./src/resources/operations.ts">list</a>() -> OperationList</code>
- <code title="get /operations/{operation_id}">client.operations.<a href="./src/resources/operations.ts">get</a>(operationId) -> Operation</code>

# Compute

## VMs

Types:

- <code><a href="./src/resources/compute/vms/vms.ts">CPUConfig</a></code>
- <code><a href="./src/resources/compute/vms/vms.ts">MemoryConfig</a></code>
- <code><a href="./src/resources/compute/vms/vms.ts">OSImage</a></code>
- <code><a href="./src/resources/compute/vms/vms.ts">SSHKey</a></code>
- <code><a href="./src/resources/compute/vms/vms.ts">VM</a></code>
- <code><a href="./src/resources/compute/vms/vms.ts">VMList</a></code>

Methods:

- <code title="post /compute/vms">client.compute.vms.<a href="./src/resources/compute/vms/vms.ts">create</a>({ ...params }) -> Operation</code>
- <code title="patch /compute/vms/{vm_id}">client.compute.vms.<a href="./src/resources/compute/vms/vms.ts">update</a>(vmId, { ...params }) -> Operation</code>
- <code title="get /compute/vms">client.compute.vms.<a href="./src/resources/compute/vms/vms.ts">list</a>() -> VMList</code>
- <code title="delete /compute/vms/{vm_id}">client.compute.vms.<a href="./src/resources/compute/vms/vms.ts">delete</a>(vmId) -> Operation</code>
- <code title="get /compute/vms/{vm_id}">client.compute.vms.<a href="./src/resources/compute/vms/vms.ts">get</a>(vmId) -> VM</code>

### Volumes

Methods:

- <code title="get /compute/vms/{vm_id}/volumes">client.compute.vms.volumes.<a href="./src/resources/compute/vms/volumes.ts">list</a>(vmId) -> VolumeList</code>

### OSImages

Types:

- <code><a href="./src/resources/compute/vms/os-images.ts">OSImageListResponse</a></code>

Methods:

- <code title="get /compute/vms/os_images">client.compute.vms.osImages.<a href="./src/resources/compute/vms/os-images.ts">list</a>() -> OSImageListResponse</code>

## Volumes

Types:

- <code><a href="./src/resources/compute/volumes.ts">StorageType</a></code>
- <code><a href="./src/resources/compute/volumes.ts">Volume</a></code>
- <code><a href="./src/resources/compute/volumes.ts">VolumeKind</a></code>
- <code><a href="./src/resources/compute/volumes.ts">VolumeList</a></code>

Methods:

- <code title="post /compute/volumes">client.compute.volumes.<a href="./src/resources/compute/volumes.ts">create</a>({ ...params }) -> Operation</code>
- <code title="patch /compute/volumes/{volume_id}">client.compute.volumes.<a href="./src/resources/compute/volumes.ts">update</a>(volumeId, { ...params }) -> Operation</code>
- <code title="get /compute/volumes">client.compute.volumes.<a href="./src/resources/compute/volumes.ts">list</a>() -> VolumeList</code>
- <code title="delete /compute/volumes/{volume_id}">client.compute.volumes.<a href="./src/resources/compute/volumes.ts">delete</a>(volumeId) -> Operation</code>
- <code title="get /compute/volumes/{volume_id}">client.compute.volumes.<a href="./src/resources/compute/volumes.ts">get</a>(volumeId) -> Volume</code>

# Networking

## VPCs

Types:

- <code><a href="./src/resources/networking/vpcs.ts">Subnet</a></code>
- <code><a href="./src/resources/networking/vpcs.ts">VPC</a></code>
- <code><a href="./src/resources/networking/vpcs.ts">VPCList</a></code>

Methods:

- <code title="post /networking/vpcs">client.networking.vpcs.<a href="./src/resources/networking/vpcs.ts">create</a>({ ...params }) -> Operation</code>
- <code title="patch /networking/vpcs/{vpc_id}">client.networking.vpcs.<a href="./src/resources/networking/vpcs.ts">update</a>(vpcId, { ...params }) -> Operation</code>
- <code title="get /networking/vpcs">client.networking.vpcs.<a href="./src/resources/networking/vpcs.ts">list</a>() -> VPCList</code>
- <code title="delete /networking/vpcs/{vpc_id}">client.networking.vpcs.<a href="./src/resources/networking/vpcs.ts">delete</a>(vpcId) -> Operation</code>
- <code title="get /networking/vpcs/{vpc_id}">client.networking.vpcs.<a href="./src/resources/networking/vpcs.ts">get</a>(vpcId) -> VPC</code>

## FirewallRules

Types:

- <code><a href="./src/resources/networking/firewall-rules.ts">FirewallRule</a></code>
- <code><a href="./src/resources/networking/firewall-rules.ts">FirewallRuleList</a></code>

Methods:

- <code title="post /networking/vpcs/{vpc_id}/firewall_rules">client.networking.firewallRules.<a href="./src/resources/networking/firewall-rules.ts">create</a>(vpcId, { ...params }) -> Operation</code>
- <code title="patch /networking/vpcs/{vpc_id}/firewall_rules/{firewall_rule_id}">client.networking.firewallRules.<a href="./src/resources/networking/firewall-rules.ts">update</a>(vpcId, firewallRuleId, { ...params }) -> Operation</code>
- <code title="get /networking/vpcs/{vpc_id}/firewall_rules">client.networking.firewallRules.<a href="./src/resources/networking/firewall-rules.ts">list</a>(vpcId) -> FirewallRuleList</code>
- <code title="delete /networking/vpcs/{vpc_id}/firewall_rules/{firewall_rule_id}">client.networking.firewallRules.<a href="./src/resources/networking/firewall-rules.ts">delete</a>(vpcId, firewallRuleId) -> Operation</code>
- <code title="get /networking/vpcs/{vpc_id}/firewall_rules/{firewall_rule_id}">client.networking.firewallRules.<a href="./src/resources/networking/firewall-rules.ts">get</a>(vpcId, firewallRuleId) -> FirewallRule</code>
