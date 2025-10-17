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
- <code title="get /v1/compute/vms">client.compute.vms.<a href="./src/resources/compute/vms/vms.ts">list</a>() -> VMList</code>
- <code title="delete /v1/compute/vms/{vm_id}">client.compute.vms.<a href="./src/resources/compute/vms/vms.ts">delete</a>(vmID) -> Operation</code>
- <code title="get /v1/compute/vms/{vm_id}">client.compute.vms.<a href="./src/resources/compute/vms/vms.ts">get</a>(vmID) -> VM</code>
- <code title="post /v1/compute/vms/{vm_id}/restart">client.compute.vms.<a href="./src/resources/compute/vms/vms.ts">restart</a>(vmID) -> Operation</code>

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
- <code title="get /v1/networking/connect/connections">client.networking.connect.connections.<a href="./src/resources/networking/connect/connections.ts">list</a>() -> ConnectConnectionList</code>
- <code title="delete /v1/networking/connect/connections/{connection_id}">client.networking.connect.connections.<a href="./src/resources/networking/connect/connections.ts">delete</a>(connectionID) -> Operation</code>
- <code title="get /v1/networking/connect/connections/{connection_id}">client.networking.connect.connections.<a href="./src/resources/networking/connect/connections.ts">get</a>(connectionID) -> ConnectConnection</code>

### Routes

Methods:

- <code title="get /v1/networking/connect/routes">client.networking.connect.routes.<a href="./src/resources/networking/connect/routes.ts">list</a>() -> ConnectRouteList</code>

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
- <code title="get /v1/rpc_nodes/flex">client.rpcNodes.flex.<a href="./src/resources/rpc-nodes/flex/flex.ts">list</a>() -> FlexList</code>
- <code title="get /v1/rpc_nodes/flex/{node_id}">client.rpcNodes.flex.<a href="./src/resources/rpc-nodes/flex/flex.ts">get</a>(nodeID) -> Flex</code>

### Blockchains

Methods:

- <code title="get /v1/rpc_nodes/flex/blockchains">client.rpcNodes.flex.blockchains.<a href="./src/resources/rpc-nodes/flex/blockchains.ts">list</a>() -> FlexBlockchainList</code>

## Dedicated

Types:

- <code><a href="./src/resources/rpc-nodes/dedicated/dedicated.ts">Dedicated</a></code>
- <code><a href="./src/resources/rpc-nodes/dedicated/dedicated.ts">DedicatedBlockchain</a></code>
- <code><a href="./src/resources/rpc-nodes/dedicated/dedicated.ts">DedicatedBlockchainList</a></code>
- <code><a href="./src/resources/rpc-nodes/dedicated/dedicated.ts">DedicatedList</a></code>

Methods:

- <code title="get /v1/rpc_nodes/dedicated">client.rpcNodes.dedicated.<a href="./src/resources/rpc-nodes/dedicated/dedicated.ts">list</a>() -> DedicatedList</code>
- <code title="get /v1/rpc_nodes/dedicated/{node_id}">client.rpcNodes.dedicated.<a href="./src/resources/rpc-nodes/dedicated/dedicated.ts">get</a>(nodeID) -> Dedicated</code>

### Blockchains

Methods:

- <code title="get /v1/rpc_nodes/dedicated/blockchains">client.rpcNodes.dedicated.blockchains.<a href="./src/resources/rpc-nodes/dedicated/blockchains.ts">list</a>() -> DedicatedBlockchainList</code>

# Connect

## Flux

### Routes

# Vektor

Types:

- <code><a href="./src/resources/vektor/vektor.ts">Account</a></code>
- <code><a href="./src/resources/vektor/vektor.ts">AddressEVM</a></code>
- <code><a href="./src/resources/vektor/vektor.ts">APY</a></code>
- <code><a href="./src/resources/vektor/vektor.ts">Asset</a></code>
- <code><a href="./src/resources/vektor/vektor.ts">AssetID</a></code>
- <code><a href="./src/resources/vektor/vektor.ts">AssetIDOrAddressEVMOrAssetSymbol</a></code>
- <code><a href="./src/resources/vektor/vektor.ts">AssetSymbol</a></code>
- <code><a href="./src/resources/vektor/vektor.ts">Balance</a></code>
- <code><a href="./src/resources/vektor/vektor.ts">BlockNumber</a></code>
- <code><a href="./src/resources/vektor/vektor.ts">Blockchain</a></code>
- <code><a href="./src/resources/vektor/vektor.ts">BlockchainID</a></code>
- <code><a href="./src/resources/vektor/vektor.ts">BlockchainIDOrBlockchainSymbol</a></code>
- <code><a href="./src/resources/vektor/vektor.ts">BlockchainName</a></code>
- <code><a href="./src/resources/vektor/vektor.ts">BlockchainSymbol</a></code>
- <code><a href="./src/resources/vektor/vektor.ts">Blockstamp</a></code>
- <code><a href="./src/resources/vektor/vektor.ts">BorrowAccount</a></code>
- <code><a href="./src/resources/vektor/vektor.ts">BorrowMarket</a></code>
- <code><a href="./src/resources/vektor/vektor.ts">BorrowPosition</a></code>
- <code><a href="./src/resources/vektor/vektor.ts">BridgeQuote</a></code>
- <code><a href="./src/resources/vektor/vektor.ts">BuyQuote</a></code>
- <code><a href="./src/resources/vektor/vektor.ts">ChainType</a></code>
- <code><a href="./src/resources/vektor/vektor.ts">Decimal</a></code>
- <code><a href="./src/resources/vektor/vektor.ts">ErrorListOutput</a></code>
- <code><a href="./src/resources/vektor/vektor.ts">EVMChainData</a></code>
- <code><a href="./src/resources/vektor/vektor.ts">Execution</a></code>
- <code><a href="./src/resources/vektor/vektor.ts">ExecutionError</a></code>
- <code><a href="./src/resources/vektor/vektor.ts">ExecutionEVMTransactionEIP1559Payload</a></code>
- <code><a href="./src/resources/vektor/vektor.ts">ExecutionEVMTransactionPayload</a></code>
- <code><a href="./src/resources/vektor/vektor.ts">ExecutionEVMTransactionState</a></code>
- <code><a href="./src/resources/vektor/vektor.ts">ExecutionID</a></code>
- <code><a href="./src/resources/vektor/vektor.ts">ExecutionState</a></code>
- <code><a href="./src/resources/vektor/vektor.ts">ExecutionStepID</a></code>
- <code><a href="./src/resources/vektor/vektor.ts">HexString</a></code>
- <code><a href="./src/resources/vektor/vektor.ts">IncentivizeMarket</a></code>
- <code><a href="./src/resources/vektor/vektor.ts">LendBorrowAPYs</a></code>
- <code><a href="./src/resources/vektor/vektor.ts">LendBorrowMarketID</a></code>
- <code><a href="./src/resources/vektor/vektor.ts">LendMarket</a></code>
- <code><a href="./src/resources/vektor/vektor.ts">LendPosition</a></code>
- <code><a href="./src/resources/vektor/vektor.ts">LockMarket</a></code>
- <code><a href="./src/resources/vektor/vektor.ts">LockPosition</a></code>
- <code><a href="./src/resources/vektor/vektor.ts">LPPool</a></code>
- <code><a href="./src/resources/vektor/vektor.ts">LPPoolSolidlyAttributes</a></code>
- <code><a href="./src/resources/vektor/vektor.ts">LPPoolUniswapV3Attributes</a></code>
- <code><a href="./src/resources/vektor/vektor.ts">LPPosition</a></code>
- <code><a href="./src/resources/vektor/vektor.ts">LPPositionAttributes</a></code>
- <code><a href="./src/resources/vektor/vektor.ts">LPPositionUniswapV3Attributes</a></code>
- <code><a href="./src/resources/vektor/vektor.ts">LPQuote</a></code>
- <code><a href="./src/resources/vektor/vektor.ts">LPUniswapV3PositionSpecifier</a></code>
- <code><a href="./src/resources/vektor/vektor.ts">LPUniswapV3Range</a></code>
- <code><a href="./src/resources/vektor/vektor.ts">NetworkFeeEstimate</a></code>
- <code><a href="./src/resources/vektor/vektor.ts">NetworkName</a></code>
- <code><a href="./src/resources/vektor/vektor.ts">NFT</a></code>
- <code><a href="./src/resources/vektor/vektor.ts">NFTCollection</a></code>
- <code><a href="./src/resources/vektor/vektor.ts">OffChainHistoricalRange</a></code>
- <code><a href="./src/resources/vektor/vektor.ts">OnChainHistoricalRange</a></code>
- <code><a href="./src/resources/vektor/vektor.ts">Price</a></code>
- <code><a href="./src/resources/vektor/vektor.ts">QuoteInfo0x</a></code>
- <code><a href="./src/resources/vektor/vektor.ts">QuoteInfo0xFill</a></code>
- <code><a href="./src/resources/vektor/vektor.ts">QuoteInfo0xRoute</a></code>
- <code><a href="./src/resources/vektor/vektor.ts">QuoteInfo0xToken</a></code>
- <code><a href="./src/resources/vektor/vektor.ts">QuoteInfoCurve</a></code>
- <code><a href="./src/resources/vektor/vektor.ts">QuoteInfoUniswapV2</a></code>
- <code><a href="./src/resources/vektor/vektor.ts">QuoteInfoUniswapV3</a></code>
- <code><a href="./src/resources/vektor/vektor.ts">RegistryLendBorrowMarket</a></code>
- <code><a href="./src/resources/vektor/vektor.ts">RegistryLPPool</a></code>
- <code><a href="./src/resources/vektor/vektor.ts">SellQuote</a></code>
- <code><a href="./src/resources/vektor/vektor.ts">Timestamp</a></code>
- <code><a href="./src/resources/vektor/vektor.ts">TimestampOrBlockNumber</a></code>
- <code><a href="./src/resources/vektor/vektor.ts">TransactionHash</a></code>
- <code><a href="./src/resources/vektor/vektor.ts">VektorError</a></code>
- <code><a href="./src/resources/vektor/vektor.ts">VektorErrorList</a></code>
- <code><a href="./src/resources/vektor/vektor.ts">VektorErrorWrapper</a></code>
- <code><a href="./src/resources/vektor/vektor.ts">Venue</a></code>
- <code><a href="./src/resources/vektor/vektor.ts">VenueID</a></code>
- <code><a href="./src/resources/vektor/vektor.ts">VenueIDOrVenueSymbol</a></code>
- <code><a href="./src/resources/vektor/vektor.ts">VenueSymbol</a></code>
- <code><a href="./src/resources/vektor/vektor.ts">VoteMarket</a></code>
- <code><a href="./src/resources/vektor/vektor.ts">VoteReward</a></code>

## Registry

### Assets

Types:

- <code><a href="./src/resources/vektor/registry/assets.ts">AssetListResponse</a></code>

Methods:

- <code title="post /v1/vektor/registry/assets">client.vektor.registry.assets.<a href="./src/resources/vektor/registry/assets.ts">list</a>({ ...params }) -> AssetListResponse</code>

### Blockchains

Types:

- <code><a href="./src/resources/vektor/registry/blockchains.ts">BlockchainListResponse</a></code>

Methods:

- <code title="post /v1/vektor/registry/blockchains">client.vektor.registry.blockchains.<a href="./src/resources/vektor/registry/blockchains.ts">list</a>({ ...params }) -> BlockchainListResponse</code>

### Venues

Types:

- <code><a href="./src/resources/vektor/registry/venues.ts">VenueListResponse</a></code>

Methods:

- <code title="post /v1/vektor/registry/venues">client.vektor.registry.venues.<a href="./src/resources/vektor/registry/venues.ts">list</a>({ ...params }) -> VenueListResponse</code>

### Errors

Methods:

- <code title="post /v1/vektor/registry/errors">client.vektor.registry.errors.<a href="./src/resources/vektor/registry/errors.ts">list</a>({ ...params }) -> ErrorListOutput</code>

### LendMarkets

Types:

- <code><a href="./src/resources/vektor/registry/lend-markets.ts">LendMarketListResponse</a></code>

Methods:

- <code title="post /v1/vektor/registry/lend/markets">client.vektor.registry.lendMarkets.<a href="./src/resources/vektor/registry/lend-markets.ts">list</a>({ ...params }) -> LendMarketListResponse</code>

### BorrowMarkets

Types:

- <code><a href="./src/resources/vektor/registry/borrow-markets.ts">BorrowMarketListResponse</a></code>

Methods:

- <code title="post /v1/vektor/registry/borrow/markets">client.vektor.registry.borrowMarkets.<a href="./src/resources/vektor/registry/borrow-markets.ts">list</a>({ ...params }) -> BorrowMarketListResponse</code>

### LPPools

Types:

- <code><a href="./src/resources/vektor/registry/lp-pools.ts">LPPoolListResponse</a></code>

Methods:

- <code title="post /v1/vektor/registry/lp/pools">client.vektor.registry.lpPools.<a href="./src/resources/vektor/registry/lp-pools.ts">list</a>({ ...params }) -> LPPoolListResponse</code>

## Balances

Types:

- <code><a href="./src/resources/vektor/balances.ts">BalanceListResponse</a></code>
- <code><a href="./src/resources/vektor/balances.ts">BalanceListHistoricalResponse</a></code>

Methods:

- <code title="post /v1/vektor/balances">client.vektor.balances.<a href="./src/resources/vektor/balances.ts">list</a>({ ...params }) -> BalanceListResponse</code>
- <code title="post /v1/vektor/balances/historical">client.vektor.balances.<a href="./src/resources/vektor/balances.ts">listHistorical</a>({ ...params }) -> BalanceListHistoricalResponse</code>

## Prices

Types:

- <code><a href="./src/resources/vektor/prices.ts">PriceListResponse</a></code>
- <code><a href="./src/resources/vektor/prices.ts">PriceListHistoricalResponse</a></code>

Methods:

- <code title="post /v1/vektor/prices">client.vektor.prices.<a href="./src/resources/vektor/prices.ts">list</a>({ ...params }) -> PriceListResponse</code>
- <code title="post /v1/vektor/prices/historical">client.vektor.prices.<a href="./src/resources/vektor/prices.ts">listHistorical</a>({ ...params }) -> PriceListHistoricalResponse</code>

## Lend

### Markets

Types:

- <code><a href="./src/resources/vektor/lend/markets.ts">MarketListResponse</a></code>
- <code><a href="./src/resources/vektor/lend/markets.ts">MarketListHistoricalResponse</a></code>

Methods:

- <code title="post /v1/vektor/lend/markets">client.vektor.lend.markets.<a href="./src/resources/vektor/lend/markets.ts">list</a>({ ...params }) -> MarketListResponse</code>
- <code title="post /v1/vektor/lend/markets/historical">client.vektor.lend.markets.<a href="./src/resources/vektor/lend/markets.ts">listHistorical</a>({ ...params }) -> MarketListHistoricalResponse</code>

### Positions

Types:

- <code><a href="./src/resources/vektor/lend/positions.ts">PositionListResponse</a></code>
- <code><a href="./src/resources/vektor/lend/positions.ts">PositionListHistoricalResponse</a></code>

Methods:

- <code title="post /v1/vektor/lend/positions">client.vektor.lend.positions.<a href="./src/resources/vektor/lend/positions.ts">list</a>({ ...params }) -> PositionListResponse</code>
- <code title="post /v1/vektor/lend/positions/historical">client.vektor.lend.positions.<a href="./src/resources/vektor/lend/positions.ts">listHistorical</a>({ ...params }) -> PositionListHistoricalResponse</code>

### Lend

Methods:

- <code title="post /v1/vektor/lend/lend">client.vektor.lend.lend.<a href="./src/resources/vektor/lend/lend_.ts">create</a>({ ...params }) -> Execution</code>

### Withdraw

Methods:

- <code title="post /v1/vektor/lend/withdraw">client.vektor.lend.withdraw.<a href="./src/resources/vektor/lend/withdraw.ts">create</a>({ ...params }) -> Execution</code>

### SetCollateral

Methods:

- <code title="post /v1/vektor/lend/set_collateral">client.vektor.lend.setCollateral.<a href="./src/resources/vektor/lend/set-collateral.ts">create</a>({ ...params }) -> Execution</code>

## Borrow

### Markets

Types:

- <code><a href="./src/resources/vektor/borrow/markets.ts">MarketListResponse</a></code>
- <code><a href="./src/resources/vektor/borrow/markets.ts">MarketListHistoricalResponse</a></code>

Methods:

- <code title="post /v1/vektor/borrow/markets">client.vektor.borrow.markets.<a href="./src/resources/vektor/borrow/markets.ts">list</a>({ ...params }) -> MarketListResponse</code>
- <code title="post /v1/vektor/borrow/markets/historical">client.vektor.borrow.markets.<a href="./src/resources/vektor/borrow/markets.ts">listHistorical</a>({ ...params }) -> MarketListHistoricalResponse</code>

### Positions

Types:

- <code><a href="./src/resources/vektor/borrow/positions.ts">PositionListResponse</a></code>
- <code><a href="./src/resources/vektor/borrow/positions.ts">PositionListHistoricalResponse</a></code>

Methods:

- <code title="post /v1/vektor/borrow/positions">client.vektor.borrow.positions.<a href="./src/resources/vektor/borrow/positions.ts">list</a>({ ...params }) -> PositionListResponse</code>
- <code title="post /v1/vektor/borrow/positions/historical">client.vektor.borrow.positions.<a href="./src/resources/vektor/borrow/positions.ts">listHistorical</a>({ ...params }) -> PositionListHistoricalResponse</code>

### Accounts

Types:

- <code><a href="./src/resources/vektor/borrow/accounts.ts">AccountListResponse</a></code>
- <code><a href="./src/resources/vektor/borrow/accounts.ts">AccountListHistoricalResponse</a></code>

Methods:

- <code title="post /v1/vektor/borrow/accounts">client.vektor.borrow.accounts.<a href="./src/resources/vektor/borrow/accounts.ts">list</a>({ ...params }) -> AccountListResponse</code>
- <code title="post /v1/vektor/borrow/accounts/historical">client.vektor.borrow.accounts.<a href="./src/resources/vektor/borrow/accounts.ts">listHistorical</a>({ ...params }) -> AccountListHistoricalResponse</code>

### Borrow

Methods:

- <code title="post /v1/vektor/borrow/borrow">client.vektor.borrow.borrow.<a href="./src/resources/vektor/borrow/borrow_.ts">create</a>({ ...params }) -> Execution</code>

### Repay

Methods:

- <code title="post /v1/vektor/borrow/repay">client.vektor.borrow.repay.<a href="./src/resources/vektor/borrow/repay.ts">create</a>({ ...params }) -> Execution</code>

## LP

### Pools

Types:

- <code><a href="./src/resources/vektor/lp/pools.ts">PoolListResponse</a></code>
- <code><a href="./src/resources/vektor/lp/pools.ts">PoolListHistoricalResponse</a></code>

Methods:

- <code title="post /v1/vektor/lp/pools">client.vektor.lp.pools.<a href="./src/resources/vektor/lp/pools.ts">list</a>({ ...params }) -> PoolListResponse</code>
- <code title="post /v1/vektor/lp/pools/historical">client.vektor.lp.pools.<a href="./src/resources/vektor/lp/pools.ts">listHistorical</a>({ ...params }) -> PoolListHistoricalResponse</code>

### Positions

Types:

- <code><a href="./src/resources/vektor/lp/positions.ts">PositionListResponse</a></code>
- <code><a href="./src/resources/vektor/lp/positions.ts">PositionListHistoricalResponse</a></code>

Methods:

- <code title="post /v1/vektor/lp/positions">client.vektor.lp.positions.<a href="./src/resources/vektor/lp/positions.ts">list</a>({ ...params }) -> PositionListResponse</code>
- <code title="post /v1/vektor/lp/positions/historical">client.vektor.lp.positions.<a href="./src/resources/vektor/lp/positions.ts">listHistorical</a>({ ...params }) -> PositionListHistoricalResponse</code>

### DepositQuote

Types:

- <code><a href="./src/resources/vektor/lp/deposit-quote.ts">DepositQuoteCreateResponse</a></code>

Methods:

- <code title="post /v1/vektor/lp/deposit_quote">client.vektor.lp.depositQuote.<a href="./src/resources/vektor/lp/deposit-quote.ts">create</a>({ ...params }) -> DepositQuoteCreateResponse</code>

### WithdrawQuote

Types:

- <code><a href="./src/resources/vektor/lp/withdraw-quote.ts">WithdrawQuoteCreateResponse</a></code>

Methods:

- <code title="post /v1/vektor/lp/withdraw_quote">client.vektor.lp.withdrawQuote.<a href="./src/resources/vektor/lp/withdraw-quote.ts">create</a>({ ...params }) -> WithdrawQuoteCreateResponse</code>

## Buy

### Quotes

Types:

- <code><a href="./src/resources/vektor/buy/quotes.ts">QuoteListResponse</a></code>

Methods:

- <code title="post /v1/vektor/buy/quotes">client.vektor.buy.quotes.<a href="./src/resources/vektor/buy/quotes.ts">list</a>({ ...params }) -> QuoteListResponse</code>

### Buy

Methods:

- <code title="post /v1/vektor/buy/buy">client.vektor.buy.buy.<a href="./src/resources/vektor/buy/buy_.ts">create</a>({ ...params }) -> Execution</code>

## Sell

### Quotes

Types:

- <code><a href="./src/resources/vektor/sell/quotes.ts">QuoteListResponse</a></code>

Methods:

- <code title="post /v1/vektor/sell/quotes">client.vektor.sell.quotes.<a href="./src/resources/vektor/sell/quotes.ts">list</a>({ ...params }) -> QuoteListResponse</code>

### Sell

Methods:

- <code title="post /v1/vektor/sell/sell">client.vektor.sell.sell.<a href="./src/resources/vektor/sell/sell_.ts">create</a>({ ...params }) -> Execution</code>

## Move

Methods:

- <code title="post /v1/vektor/move/move">client.vektor.move.<a href="./src/resources/vektor/move.ts">create</a>({ ...params }) -> Execution</code>

## Wrap

### Wrap

Methods:

- <code title="post /v1/vektor/wrap/wrap">client.vektor.wrap.wrap.<a href="./src/resources/vektor/wrap/wrap_.ts">create</a>({ ...params }) -> Execution</code>

### Unwrap

Methods:

- <code title="post /v1/vektor/wrap/unwrap">client.vektor.wrap.unwrap.<a href="./src/resources/vektor/wrap/unwrap.ts">create</a>({ ...params }) -> Execution</code>

## Bridge

### Quotes

Types:

- <code><a href="./src/resources/vektor/bridge/quotes.ts">QuoteListResponse</a></code>

Methods:

- <code title="post /v1/vektor/bridge/quotes">client.vektor.bridge.quotes.<a href="./src/resources/vektor/bridge/quotes.ts">list</a>({ ...params }) -> QuoteListResponse</code>

## Lock

### Markets

Types:

- <code><a href="./src/resources/vektor/lock/markets.ts">MarketListResponse</a></code>

Methods:

- <code title="post /v1/vektor/lock/markets">client.vektor.lock.markets.<a href="./src/resources/vektor/lock/markets.ts">list</a>({ ...params }) -> MarketListResponse</code>

### Positions

Types:

- <code><a href="./src/resources/vektor/lock/positions.ts">PositionListResponse</a></code>

Methods:

- <code title="post /v1/vektor/lock/positions">client.vektor.lock.positions.<a href="./src/resources/vektor/lock/positions.ts">list</a>({ ...params }) -> PositionListResponse</code>

## Vote

### Markets

Types:

- <code><a href="./src/resources/vektor/vote/markets.ts">MarketListResponse</a></code>

Methods:

- <code title="post /v1/vektor/vote/markets">client.vektor.vote.markets.<a href="./src/resources/vektor/vote/markets.ts">list</a>({ ...params }) -> MarketListResponse</code>

### Rewards

Types:

- <code><a href="./src/resources/vektor/vote/rewards.ts">RewardListResponse</a></code>

Methods:

- <code title="post /v1/vektor/vote/rewards">client.vektor.vote.rewards.<a href="./src/resources/vektor/vote/rewards.ts">list</a>({ ...params }) -> RewardListResponse</code>

## Incentivize

Types:

- <code><a href="./src/resources/vektor/incentivize.ts">IncentivizeListResponse</a></code>

Methods:

- <code title="post /v1/vektor/incentivize/markets">client.vektor.incentivize.<a href="./src/resources/vektor/incentivize.ts">list</a>({ ...params }) -> IncentivizeListResponse</code>

## Executions

Types:

- <code><a href="./src/resources/vektor/executions/executions.ts">ExecutionListResponse</a></code>

Methods:

- <code title="get /v1/vektor/executions">client.vektor.executions.<a href="./src/resources/vektor/executions/executions.ts">list</a>() -> ExecutionListResponse</code>
- <code title="get /v1/vektor/executions/{execution_id}">client.vektor.executions.<a href="./src/resources/vektor/executions/executions.ts">get</a>(executionID) -> Execution</code>

### Steps

Types:

- <code><a href="./src/resources/vektor/executions/steps.ts">StepGetResponse</a></code>

Methods:

- <code title="get /v1/vektor/executions/{execution_id}/steps/{step_id}">client.vektor.executions.steps.<a href="./src/resources/vektor/executions/steps.ts">get</a>(stepID, { ...params }) -> StepGetResponse</code>
- <code title="post /v1/vektor/executions/{execution_id}/steps/{step_id}/sign">client.vektor.executions.steps.<a href="./src/resources/vektor/executions/steps.ts">sign</a>(stepID, { ...params }) -> void</code>
