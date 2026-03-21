# NKS

## Clusters

Types:

- <code><a href="./src/resources/nks/clusters/clusters.ts">Kubeconfig</a></code>
- <code><a href="./src/resources/nks/clusters/clusters.ts">NKSCluster</a></code>
- <code><a href="./src/resources/nks/clusters/clusters.ts">NKSClusterList</a></code>

Methods:

- <code title="post /v1/nks/clusters">client.nks.clusters.<a href="./src/resources/nks/clusters/clusters.ts">create</a>({ ...params }) -> Operation</code>
- <code title="patch /v1/nks/clusters/{cluster_id}">client.nks.clusters.<a href="./src/resources/nks/clusters/clusters.ts">update</a>(clusterID, { ...params }) -> NKSCluster</code>
- <code title="get /v1/nks/clusters">client.nks.clusters.<a href="./src/resources/nks/clusters/clusters.ts">list</a>({ ...params }) -> NKSClustersCursor</code>
- <code title="delete /v1/nks/clusters/{cluster_id}">client.nks.clusters.<a href="./src/resources/nks/clusters/clusters.ts">delete</a>(clusterID) -> Operation</code>
- <code title="get /v1/nks/clusters/{cluster_id}">client.nks.clusters.<a href="./src/resources/nks/clusters/clusters.ts">get</a>(clusterID) -> NKSCluster</code>

### Availability

Methods:

- <code title="post /v1/nks/clusters/availability">client.nks.clusters.availability.<a href="./src/resources/nks/clusters/availability.ts">create</a>({ ...params }) -> void</code>
- <code title="patch /v1/nks/clusters/{cluster_id}/availability">client.nks.clusters.availability.<a href="./src/resources/nks/clusters/availability.ts">update</a>(clusterID, { ...params }) -> void</code>

### Kubeconfig

Methods:

- <code title="get /v1/nks/clusters/{cluster_id}/kubeconfig">client.nks.clusters.kubeconfig.<a href="./src/resources/nks/clusters/kubeconfig.ts">get</a>(clusterID) -> Kubeconfig</code>

### Pools

Types:

- <code><a href="./src/resources/nks/clusters/pools/pools.ts">NKSNodePool</a></code>
- <code><a href="./src/resources/nks/clusters/pools/pools.ts">NKSNodePoolList</a></code>

Methods:

- <code title="post /v1/nks/clusters/{cluster_id}/pools">client.nks.clusters.pools.<a href="./src/resources/nks/clusters/pools/pools.ts">create</a>(clusterID, { ...params }) -> Operation</code>
- <code title="patch /v1/nks/clusters/{cluster_id}/pools/{pool_id}">client.nks.clusters.pools.<a href="./src/resources/nks/clusters/pools/pools.ts">update</a>(poolID, { ...params }) -> NKSNodePool</code>
- <code title="get /v1/nks/clusters/{cluster_id}/pools">client.nks.clusters.pools.<a href="./src/resources/nks/clusters/pools/pools.ts">list</a>(clusterID, { ...params }) -> NKSNodePoolsCursor</code>
- <code title="delete /v1/nks/clusters/{cluster_id}/pools/{pool_id}">client.nks.clusters.pools.<a href="./src/resources/nks/clusters/pools/pools.ts">delete</a>(poolID, { ...params }) -> Operation</code>
- <code title="get /v1/nks/clusters/{cluster_id}/pools/{pool_id}">client.nks.clusters.pools.<a href="./src/resources/nks/clusters/pools/pools.ts">get</a>(poolID, { ...params }) -> NKSNodePool</code>

#### Availability

Methods:

- <code title="post /v1/nks/clusters/{cluster_id}/pools/availability">client.nks.clusters.pools.availability.<a href="./src/resources/nks/clusters/pools/availability.ts">create</a>(clusterID, { ...params }) -> void</code>
- <code title="patch /v1/nks/clusters/{cluster_id}/pools/{pool_id}/availability">client.nks.clusters.pools.availability.<a href="./src/resources/nks/clusters/pools/availability.ts">update</a>(poolID, { ...params }) -> void</code>

#### Nodes

Types:

- <code><a href="./src/resources/nks/clusters/pools/nodes/nodes.ts">NKSNode</a></code>
- <code><a href="./src/resources/nks/clusters/pools/nodes/nodes.ts">NKSNodeList</a></code>

Methods:

- <code title="get /v1/nks/clusters/{cluster_id}/pools/{pool_id}/nodes">client.nks.clusters.pools.nodes.<a href="./src/resources/nks/clusters/pools/nodes/nodes.ts">list</a>(poolID, { ...params }) -> NKSNodesCursor</code>
- <code title="get /v1/nks/clusters/{cluster_id}/pools/{pool_id}/nodes/{node_id}">client.nks.clusters.pools.nodes.<a href="./src/resources/nks/clusters/pools/nodes/nodes.ts">get</a>(nodeID, { ...params }) -> NKSNode</code>

##### Volumes

Types:

- <code><a href="./src/resources/nks/clusters/pools/nodes/volumes.ts">NKSNodeVolume</a></code>
- <code><a href="./src/resources/nks/clusters/pools/nodes/volumes.ts">NKSNodeVolumeList</a></code>

Methods:

- <code title="get /v1/nks/clusters/{cluster_id}/pools/{pool_id}/nodes/{node_id}/volumes">client.nks.clusters.pools.nodes.volumes.<a href="./src/resources/nks/clusters/pools/nodes/volumes.ts">list</a>(nodeID, { ...params }) -> NKSNodeVolumesCursor</code>
- <code title="get /v1/nks/clusters/{cluster_id}/pools/{pool_id}/nodes/{node_id}/volumes/{volume_id}">client.nks.clusters.pools.nodes.volumes.<a href="./src/resources/nks/clusters/pools/nodes/volumes.ts">get</a>(volumeID, { ...params }) -> NKSNodeVolume</code>
