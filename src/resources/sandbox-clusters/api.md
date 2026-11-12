# SandboxClusters

Types:

- <code><a href="./src/resources/sandbox-clusters/sandbox-clusters.ts">SandboxCluster</a></code>
- <code><a href="./src/resources/sandbox-clusters/sandbox-clusters.ts">SandboxClusterList</a></code>

Methods:

- <code title="post /v1/sandbox_clusters">client.sandboxClusters.<a href="./src/resources/sandbox-clusters/sandbox-clusters.ts">create</a>({ ...params }) -> Operation</code>
- <code title="get /v1/sandbox_clusters/{sandbox_cluster_id}">client.sandboxClusters.<a href="./src/resources/sandbox-clusters/sandbox-clusters.ts">get</a>(sandboxClusterID) -> SandboxCluster</code>
- <code title="patch /v1/sandbox_clusters/{sandbox_cluster_id}">client.sandboxClusters.<a href="./src/resources/sandbox-clusters/sandbox-clusters.ts">update</a>(sandboxClusterID, { ...params }) -> SandboxCluster</code>
- <code title="delete /v1/sandbox_clusters/{sandbox_cluster_id}">client.sandboxClusters.<a href="./src/resources/sandbox-clusters/sandbox-clusters.ts">delete</a>(sandboxClusterID) -> Operation</code>
- <code title="get /v1/sandbox_clusters">client.sandboxClusters.<a href="./src/resources/sandbox-clusters/sandbox-clusters.ts">list</a>({ ...params }) -> SandboxClustersCursor</code>

## Cost

Methods:

- <code title="post /v1/sandbox_clusters/cost">client.sandboxClusters.cost.<a href="./src/resources/sandbox-clusters/cost.ts">create</a>({ ...params }) -> CostQuote</code>
