# SandboxClusters

Types:

- <code><a href="./src/resources/sandbox-clusters.ts">SandboxCluster</a></code>
- <code><a href="./src/resources/sandbox-clusters.ts">SandboxClusterList</a></code>

Methods:

- <code title="get /v1/sandbox_clusters">client.sandboxClusters.<a href="./src/resources/sandbox-clusters.ts">list</a>({ ...params }) -> SandboxClustersCursor</code>
- <code title="get /v1/sandbox_clusters/{region}">client.sandboxClusters.<a href="./src/resources/sandbox-clusters.ts">get</a>(region) -> SandboxCluster</code>
- <code title="put /v1/sandbox_clusters/{region}">client.sandboxClusters.<a href="./src/resources/sandbox-clusters.ts">enable</a>(region, { ...params }) -> Operation</code>
- <code title="delete /v1/sandbox_clusters/{region}">client.sandboxClusters.<a href="./src/resources/sandbox-clusters.ts">disable</a>(region) -> Operation</code>
