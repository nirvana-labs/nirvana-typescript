# Shared

Types:

- <code><a href="./src/resources/shared.ts">RegionName</a></code>
- <code><a href="./src/resources/shared.ts">ResourceStatus</a></code>

# User

Types:

- <code><a href="./src/resources/user.ts">User</a></code>

Methods:

- <code title="get /v1/user">client.user.<a href="./src/resources/user.ts">get</a>() -> User</code>

# APIKeys

Types:

- <code><a href="./src/resources/api-keys.ts">APIKey</a></code>
- <code><a href="./src/resources/api-keys.ts">APIKeyList</a></code>

Methods:

- <code title="post /v1/api_keys">client.apiKeys.<a href="./src/resources/api-keys.ts">create</a>({ ...params }) -> APIKey</code>
- <code title="patch /v1/api_keys/{api_key_id}">client.apiKeys.<a href="./src/resources/api-keys.ts">update</a>(apiKeyID, { ...params }) -> APIKey</code>
- <code title="get /v1/api_keys">client.apiKeys.<a href="./src/resources/api-keys.ts">list</a>() -> APIKeyList</code>
- <code title="delete /v1/api_keys/{api_key_id}">client.apiKeys.<a href="./src/resources/api-keys.ts">delete</a>(apiKeyID) -> void</code>
- <code title="get /v1/api_keys/{api_key_id}">client.apiKeys.<a href="./src/resources/api-keys.ts">get</a>(apiKeyID) -> APIKey</code>

# Operations

Types:

- <code><a href="./src/resources/operations.ts">Operation</a></code>
- <code><a href="./src/resources/operations.ts">OperationKind</a></code>
- <code><a href="./src/resources/operations.ts">OperationList</a></code>
- <code><a href="./src/resources/operations.ts">OperationStatus</a></code>
- <code><a href="./src/resources/operations.ts">OperationType</a></code>

Methods:

- <code title="get /v1/operations">client.operations.<a href="./src/resources/operations.ts">list</a>() -> OperationList</code>
- <code title="get /v1/operations/{operation_id}">client.operations.<a href="./src/resources/operations.ts">get</a>(operationID) -> Operation</code>

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

- <code title="post /v1/compute/vms">client.compute.vms.<a href="./src/resources/compute/vms/vms.ts">create</a>({ ...params }) -> Operation</code>
- <code title="patch /v1/compute/vms/{vm_id}">client.compute.vms.<a href="./src/resources/compute/vms/vms.ts">update</a>(vmID, { ...params }) -> Operation</code>
- <code title="get /v1/compute/vms">client.compute.vms.<a href="./src/resources/compute/vms/vms.ts">list</a>() -> VMList</code>
- <code title="delete /v1/compute/vms/{vm_id}">client.compute.vms.<a href="./src/resources/compute/vms/vms.ts">delete</a>(vmID) -> Operation</code>
- <code title="get /v1/compute/vms/{vm_id}">client.compute.vms.<a href="./src/resources/compute/vms/vms.ts">get</a>(vmID) -> VM</code>

### Availability

Types:

- <code><a href="./src/resources/compute/vms/availability.ts">AvailabilityCreateResponse</a></code>
- <code><a href="./src/resources/compute/vms/availability.ts">AvailabilityUpdateResponse</a></code>

Methods:

- <code title="post /v1/compute/vms/availability">client.compute.vms.availability.<a href="./src/resources/compute/vms/availability.ts">create</a>({ ...params }) -> string</code>
- <code title="patch /v1/compute/vms/{vm_id}/availability">client.compute.vms.availability.<a href="./src/resources/compute/vms/availability.ts">update</a>(vmID, { ...params }) -> string</code>

### Volumes

Methods:

- <code title="get /v1/compute/vms/{vm_id}/volumes">client.compute.vms.volumes.<a href="./src/resources/compute/vms/volumes.ts">list</a>(vmID) -> VolumeList</code>

### OSImages

Types:

- <code><a href="./src/resources/compute/vms/os-images.ts">OSImageListResponse</a></code>

Methods:

- <code title="get /v1/compute/vms/os_images">client.compute.vms.osImages.<a href="./src/resources/compute/vms/os-images.ts">list</a>() -> OSImageListResponse</code>

## Volumes

Types:

- <code><a href="./src/resources/compute/volumes/volumes.ts">StorageType</a></code>
- <code><a href="./src/resources/compute/volumes/volumes.ts">Volume</a></code>
- <code><a href="./src/resources/compute/volumes/volumes.ts">VolumeKind</a></code>
- <code><a href="./src/resources/compute/volumes/volumes.ts">VolumeList</a></code>

Methods:

- <code title="post /v1/compute/volumes">client.compute.volumes.<a href="./src/resources/compute/volumes/volumes.ts">create</a>({ ...params }) -> Operation</code>
- <code title="patch /v1/compute/volumes/{volume_id}">client.compute.volumes.<a href="./src/resources/compute/volumes/volumes.ts">update</a>(volumeID, { ...params }) -> Operation</code>
- <code title="get /v1/compute/volumes">client.compute.volumes.<a href="./src/resources/compute/volumes/volumes.ts">list</a>() -> VolumeList</code>
- <code title="delete /v1/compute/volumes/{volume_id}">client.compute.volumes.<a href="./src/resources/compute/volumes/volumes.ts">delete</a>(volumeID) -> Operation</code>
- <code title="get /v1/compute/volumes/{volume_id}">client.compute.volumes.<a href="./src/resources/compute/volumes/volumes.ts">get</a>(volumeID) -> Volume</code>

### Availability

Types:

- <code><a href="./src/resources/compute/volumes/availability.ts">AvailabilityCreateResponse</a></code>
- <code><a href="./src/resources/compute/volumes/availability.ts">AvailabilityUpdateResponse</a></code>

Methods:

- <code title="post /v1/compute/volumes/availability">client.compute.volumes.availability.<a href="./src/resources/compute/volumes/availability.ts">create</a>({ ...params }) -> string</code>
- <code title="patch /v1/compute/volumes/{volume_id}/availability">client.compute.volumes.availability.<a href="./src/resources/compute/volumes/availability.ts">update</a>(volumeID, { ...params }) -> string</code>

# Networking

## VPCs

Types:

- <code><a href="./src/resources/networking/vpcs/vpcs.ts">Subnet</a></code>
- <code><a href="./src/resources/networking/vpcs/vpcs.ts">VPC</a></code>
- <code><a href="./src/resources/networking/vpcs/vpcs.ts">VPCList</a></code>

Methods:

- <code title="post /v1/networking/vpcs">client.networking.vpcs.<a href="./src/resources/networking/vpcs/vpcs.ts">create</a>({ ...params }) -> Operation</code>
- <code title="patch /v1/networking/vpcs/{vpc_id}">client.networking.vpcs.<a href="./src/resources/networking/vpcs/vpcs.ts">update</a>(vpcID, { ...params }) -> Operation</code>
- <code title="get /v1/networking/vpcs">client.networking.vpcs.<a href="./src/resources/networking/vpcs/vpcs.ts">list</a>() -> VPCList</code>
- <code title="delete /v1/networking/vpcs/{vpc_id}">client.networking.vpcs.<a href="./src/resources/networking/vpcs/vpcs.ts">delete</a>(vpcID) -> Operation</code>
- <code title="get /v1/networking/vpcs/{vpc_id}">client.networking.vpcs.<a href="./src/resources/networking/vpcs/vpcs.ts">get</a>(vpcID) -> VPC</code>

### Availability

Types:

- <code><a href="./src/resources/networking/vpcs/availability.ts">AvailabilityCreateResponse</a></code>
- <code><a href="./src/resources/networking/vpcs/availability.ts">AvailabilityUpdateResponse</a></code>

Methods:

- <code title="post /v1/networking/vpcs/availability">client.networking.vpcs.availability.<a href="./src/resources/networking/vpcs/availability.ts">create</a>({ ...params }) -> string</code>
- <code title="patch /v1/networking/vpcs/{vpc_id}/availability">client.networking.vpcs.availability.<a href="./src/resources/networking/vpcs/availability.ts">update</a>(vpcID, { ...params }) -> string</code>

## FirewallRules

Types:

- <code><a href="./src/resources/networking/firewall-rules.ts">FirewallRule</a></code>
- <code><a href="./src/resources/networking/firewall-rules.ts">FirewallRuleList</a></code>

Methods:

- <code title="post /v1/networking/vpcs/{vpc_id}/firewall_rules">client.networking.firewallRules.<a href="./src/resources/networking/firewall-rules.ts">create</a>(vpcID, { ...params }) -> Operation</code>
- <code title="patch /v1/networking/vpcs/{vpc_id}/firewall_rules/{firewall_rule_id}">client.networking.firewallRules.<a href="./src/resources/networking/firewall-rules.ts">update</a>(firewallRuleID, { ...params }) -> Operation</code>
- <code title="get /v1/networking/vpcs/{vpc_id}/firewall_rules">client.networking.firewallRules.<a href="./src/resources/networking/firewall-rules.ts">list</a>(vpcID) -> FirewallRuleList</code>
- <code title="delete /v1/networking/vpcs/{vpc_id}/firewall_rules/{firewall_rule_id}">client.networking.firewallRules.<a href="./src/resources/networking/firewall-rules.ts">delete</a>(firewallRuleID, { ...params }) -> Operation</code>
- <code title="get /v1/networking/vpcs/{vpc_id}/firewall_rules/{firewall_rule_id}">client.networking.firewallRules.<a href="./src/resources/networking/firewall-rules.ts">get</a>(firewallRuleID, { ...params }) -> FirewallRule</code>

# RPCNodes

## Flex

Types:

- <code><a href="./src/resources/rpc-nodes/flex/flex.ts">RPCNodesFlex</a></code>
- <code><a href="./src/resources/rpc-nodes/flex/flex.ts">RPCNodesFlexBlockchain</a></code>
- <code><a href="./src/resources/rpc-nodes/flex/flex.ts">RPCNodesFlexBlockchainList</a></code>
- <code><a href="./src/resources/rpc-nodes/flex/flex.ts">RPCNodesFlexList</a></code>

Methods:

- <code title="get /v1/rpc_nodes/flex">client.rpcNodes.flex.<a href="./src/resources/rpc-nodes/flex/flex.ts">list</a>() -> RPCNodesFlexList</code>
- <code title="get /v1/rpc_nodes/flex/{node_id}">client.rpcNodes.flex.<a href="./src/resources/rpc-nodes/flex/flex.ts">get</a>(nodeID) -> RPCNodesFlex</code>

### Blockchains

Methods:

- <code title="get /v1/rpc_nodes/flex/blockchains">client.rpcNodes.flex.blockchains.<a href="./src/resources/rpc-nodes/flex/blockchains.ts">list</a>() -> RPCNodesFlexBlockchainList</code>

## Dedicated

Types:

- <code><a href="./src/resources/rpc-nodes/dedicated/dedicated.ts">RPCNodesDedicated</a></code>
- <code><a href="./src/resources/rpc-nodes/dedicated/dedicated.ts">RPCNodesDedicatedBlockchain</a></code>
- <code><a href="./src/resources/rpc-nodes/dedicated/dedicated.ts">RPCNodesDedicatedBlockchainList</a></code>
- <code><a href="./src/resources/rpc-nodes/dedicated/dedicated.ts">RPCNodesDedicatedList</a></code>

Methods:

- <code title="get /v1/rpc_nodes/dedicated">client.rpcNodes.dedicated.<a href="./src/resources/rpc-nodes/dedicated/dedicated.ts">list</a>() -> RPCNodesDedicatedList</code>
- <code title="get /v1/rpc_nodes/dedicated/{node_id}">client.rpcNodes.dedicated.<a href="./src/resources/rpc-nodes/dedicated/dedicated.ts">get</a>(nodeID) -> RPCNodesDedicated</code>

### Blockchains

Methods:

- <code title="get /v1/rpc_nodes/dedicated/blockchains">client.rpcNodes.dedicated.blockchains.<a href="./src/resources/rpc-nodes/dedicated/blockchains.ts">list</a>() -> RPCNodesDedicatedBlockchainList</code>
