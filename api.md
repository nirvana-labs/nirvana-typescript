# Shared

Types:

- <code><a href="./src/resources/shared.ts">Pagination</a></code>
- <code><a href="./src/resources/shared.ts">RegionName</a></code>
- <code><a href="./src/resources/shared.ts">ResourceStatus</a></code>
- <code><a href="./src/resources/shared.ts">SourceIPRule</a></code>

# User

Types:

- <code><a href="./src/resources/user/user.ts">User</a></code>

Methods:

- <code title="get /v1/user">client.user.<a href="./src/resources/user/user.ts">get</a>() -> User</code>

## Security

Types:

- <code><a href="./src/resources/user/security.ts">UserSecurity</a></code>

Methods:

- <code title="patch /v1/user/security">client.user.security.<a href="./src/resources/user/security.ts">update</a>({ ...params }) -> UserSecurity</code>
- <code title="get /v1/user/security">client.user.security.<a href="./src/resources/user/security.ts">get</a>() -> UserSecurity</code>

# APIKeys

Types:

- <code><a href="./src/resources/api-keys.ts">APIKey</a></code>
- <code><a href="./src/resources/api-keys.ts">APIKeyList</a></code>

Methods:

- <code title="post /v1/api_keys">client.apiKeys.<a href="./src/resources/api-keys.ts">create</a>({ ...params }) -> APIKey</code>
- <code title="patch /v1/api_keys/{api_key_id}">client.apiKeys.<a href="./src/resources/api-keys.ts">update</a>(apiKeyID, { ...params }) -> APIKey</code>
- <code title="get /v1/api_keys">client.apiKeys.<a href="./src/resources/api-keys.ts">list</a>({ ...params }) -> APIKeysCursor</code>
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

- <code title="get /v1/operations">client.operations.<a href="./src/resources/operations.ts">list</a>({ ...params }) -> OperationsCursor</code>
- <code title="get /v1/operations/{operation_id}">client.operations.<a href="./src/resources/operations.ts">get</a>(operationID) -> Operation</code>

# Organizations

Types:

- <code><a href="./src/resources/organizations.ts">Organization</a></code>
- <code><a href="./src/resources/organizations.ts">OrganizationList</a></code>

Methods:

- <code title="post /v1/organizations">client.organizations.<a href="./src/resources/organizations.ts">create</a>({ ...params }) -> Organization</code>
- <code title="patch /v1/organizations/{organization_id}">client.organizations.<a href="./src/resources/organizations.ts">update</a>(organizationID, { ...params }) -> Organization</code>
- <code title="get /v1/organizations">client.organizations.<a href="./src/resources/organizations.ts">list</a>({ ...params }) -> OrganizationsCursor</code>
- <code title="get /v1/organizations/{organization_id}">client.organizations.<a href="./src/resources/organizations.ts">get</a>(organizationID) -> Organization</code>

# Projects

Types:

- <code><a href="./src/resources/projects.ts">Project</a></code>
- <code><a href="./src/resources/projects.ts">ProjectList</a></code>

Methods:

- <code title="post /v1/projects">client.projects.<a href="./src/resources/projects.ts">create</a>({ ...params }) -> Project</code>
- <code title="patch /v1/projects/{project_id}">client.projects.<a href="./src/resources/projects.ts">update</a>(projectID, { ...params }) -> Project</code>
- <code title="get /v1/projects">client.projects.<a href="./src/resources/projects.ts">list</a>({ ...params }) -> ProjectsCursor</code>
- <code title="delete /v1/projects/{project_id}">client.projects.<a href="./src/resources/projects.ts">delete</a>(projectID) -> void</code>
- <code title="get /v1/projects/{project_id}">client.projects.<a href="./src/resources/projects.ts">get</a>(projectID) -> Project</code>

# Regions

Types:

- <code><a href="./src/resources/regions.ts">Region</a></code>
- <code><a href="./src/resources/regions.ts">RegionAvailability</a></code>
- <code><a href="./src/resources/regions.ts">RegionList</a></code>

Methods:

- <code title="get /v1/regions">client.regions.<a href="./src/resources/regions.ts">list</a>({ ...params }) -> RegionsCursor</code>
- <code title="get /v1/regions/{name}">client.regions.<a href="./src/resources/regions.ts">get</a>(name) -> Region</code>

# Compute

## VMs

Types:

- <code><a href="./src/resources/compute/vms/vms.ts">CPUConfig</a></code>
- <code><a href="./src/resources/compute/vms/vms.ts">CPUConfigRequest</a></code>
- <code><a href="./src/resources/compute/vms/vms.ts">MemoryConfig</a></code>
- <code><a href="./src/resources/compute/vms/vms.ts">MemoryConfigRequest</a></code>
- <code><a href="./src/resources/compute/vms/vms.ts">OSImage</a></code>
- <code><a href="./src/resources/compute/vms/vms.ts">SSHKeyRequest</a></code>
- <code><a href="./src/resources/compute/vms/vms.ts">VM</a></code>
- <code><a href="./src/resources/compute/vms/vms.ts">VMList</a></code>

Methods:

- <code title="post /v1/compute/vms">client.compute.vms.<a href="./src/resources/compute/vms/vms.ts">create</a>({ ...params }) -> Operation</code>
- <code title="patch /v1/compute/vms/{vm_id}">client.compute.vms.<a href="./src/resources/compute/vms/vms.ts">update</a>(vmID, { ...params }) -> Operation</code>
- <code title="get /v1/compute/vms">client.compute.vms.<a href="./src/resources/compute/vms/vms.ts">list</a>({ ...params }) -> VMsCursor</code>
- <code title="delete /v1/compute/vms/{vm_id}">client.compute.vms.<a href="./src/resources/compute/vms/vms.ts">delete</a>(vmID) -> Operation</code>
- <code title="get /v1/compute/vms/{vm_id}">client.compute.vms.<a href="./src/resources/compute/vms/vms.ts">get</a>(vmID) -> VM</code>
- <code title="post /v1/compute/vms/{vm_id}/restart">client.compute.vms.<a href="./src/resources/compute/vms/vms.ts">restart</a>(vmID) -> Operation</code>

### Availability

Methods:

- <code title="post /v1/compute/vms/availability">client.compute.vms.availability.<a href="./src/resources/compute/vms/availability.ts">create</a>({ ...params }) -> void</code>
- <code title="patch /v1/compute/vms/{vm_id}/availability">client.compute.vms.availability.<a href="./src/resources/compute/vms/availability.ts">update</a>(vmID, { ...params }) -> void</code>

### Volumes

Methods:

- <code title="get /v1/compute/vms/{vm_id}/volumes">client.compute.vms.volumes.<a href="./src/resources/compute/vms/volumes.ts">list</a>(vmID, { ...params }) -> VolumesCursor</code>

### OSImages

Methods:

- <code title="get /v1/compute/vms/os_images">client.compute.vms.osImages.<a href="./src/resources/compute/vms/os-images.ts">list</a>({ ...params }) -> OSImagesCursor</code>

## Volumes

Types:

- <code><a href="./src/resources/compute/volumes/volumes.ts">Volume</a></code>
- <code><a href="./src/resources/compute/volumes/volumes.ts">VolumeKind</a></code>
- <code><a href="./src/resources/compute/volumes/volumes.ts">VolumeList</a></code>
- <code><a href="./src/resources/compute/volumes/volumes.ts">VolumeType</a></code>

Methods:

- <code title="post /v1/compute/volumes">client.compute.volumes.<a href="./src/resources/compute/volumes/volumes.ts">create</a>({ ...params }) -> Operation</code>
- <code title="patch /v1/compute/volumes/{volume_id}">client.compute.volumes.<a href="./src/resources/compute/volumes/volumes.ts">update</a>(volumeID, { ...params }) -> Operation</code>
- <code title="get /v1/compute/volumes">client.compute.volumes.<a href="./src/resources/compute/volumes/volumes.ts">list</a>({ ...params }) -> VolumesCursor</code>
- <code title="delete /v1/compute/volumes/{volume_id}">client.compute.volumes.<a href="./src/resources/compute/volumes/volumes.ts">delete</a>(volumeID) -> Operation</code>
- <code title="post /v1/compute/volumes/{volume_id}/attach">client.compute.volumes.<a href="./src/resources/compute/volumes/volumes.ts">attach</a>(volumeID, { ...params }) -> Operation</code>
- <code title="post /v1/compute/volumes/{volume_id}/detach">client.compute.volumes.<a href="./src/resources/compute/volumes/volumes.ts">detach</a>(volumeID) -> Operation</code>
- <code title="get /v1/compute/volumes/{volume_id}">client.compute.volumes.<a href="./src/resources/compute/volumes/volumes.ts">get</a>(volumeID) -> Volume</code>

### Availability

Methods:

- <code title="post /v1/compute/volumes/availability">client.compute.volumes.availability.<a href="./src/resources/compute/volumes/availability.ts">create</a>({ ...params }) -> void</code>
- <code title="patch /v1/compute/volumes/{volume_id}/availability">client.compute.volumes.availability.<a href="./src/resources/compute/volumes/availability.ts">update</a>(volumeID, { ...params }) -> void</code>

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

# RPCNodes

## Flex

Types:

- <code><a href="./src/resources/rpc-nodes/flex/flex.ts">Flex</a></code>
- <code><a href="./src/resources/rpc-nodes/flex/flex.ts">FlexBlockchain</a></code>
- <code><a href="./src/resources/rpc-nodes/flex/flex.ts">FlexBlockchainList</a></code>
- <code><a href="./src/resources/rpc-nodes/flex/flex.ts">FlexList</a></code>

Methods:

- <code title="post /v1/rpc_nodes/flex">client.rpcNodes.flex.<a href="./src/resources/rpc-nodes/flex/flex.ts">create</a>({ ...params }) -> Flex</code>
- <code title="patch /v1/rpc_nodes/flex/{node_id}">client.rpcNodes.flex.<a href="./src/resources/rpc-nodes/flex/flex.ts">update</a>(nodeID, { ...params }) -> Flex</code>
- <code title="get /v1/rpc_nodes/flex">client.rpcNodes.flex.<a href="./src/resources/rpc-nodes/flex/flex.ts">list</a>({ ...params }) -> FlexesCursor</code>
- <code title="delete /v1/rpc_nodes/flex/{node_id}">client.rpcNodes.flex.<a href="./src/resources/rpc-nodes/flex/flex.ts">delete</a>(nodeID) -> void</code>
- <code title="get /v1/rpc_nodes/flex/{node_id}">client.rpcNodes.flex.<a href="./src/resources/rpc-nodes/flex/flex.ts">get</a>(nodeID) -> Flex</code>

### Blockchains

Methods:

- <code title="get /v1/rpc_nodes/flex/blockchains">client.rpcNodes.flex.blockchains.<a href="./src/resources/rpc-nodes/flex/blockchains.ts">list</a>({ ...params }) -> FlexBlockchainsCursor</code>

## Dedicated

Types:

- <code><a href="./src/resources/rpc-nodes/dedicated/dedicated.ts">Dedicated</a></code>
- <code><a href="./src/resources/rpc-nodes/dedicated/dedicated.ts">DedicatedBlockchain</a></code>
- <code><a href="./src/resources/rpc-nodes/dedicated/dedicated.ts">DedicatedBlockchainList</a></code>
- <code><a href="./src/resources/rpc-nodes/dedicated/dedicated.ts">DedicatedList</a></code>

Methods:

- <code title="get /v1/rpc_nodes/dedicated">client.rpcNodes.dedicated.<a href="./src/resources/rpc-nodes/dedicated/dedicated.ts">list</a>({ ...params }) -> DedicatedsCursor</code>
- <code title="get /v1/rpc_nodes/dedicated/{node_id}">client.rpcNodes.dedicated.<a href="./src/resources/rpc-nodes/dedicated/dedicated.ts">get</a>(nodeID) -> Dedicated</code>

### Blockchains

Methods:

- <code title="get /v1/rpc_nodes/dedicated/blockchains">client.rpcNodes.dedicated.blockchains.<a href="./src/resources/rpc-nodes/dedicated/blockchains.ts">list</a>({ ...params }) -> DedicatedBlockchainsCursor</code>
