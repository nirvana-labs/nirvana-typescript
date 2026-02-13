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
