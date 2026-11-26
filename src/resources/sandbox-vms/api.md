# SandboxVMs

Types:

- <code><a href="./src/resources/sandbox-vms/sandbox-vms.ts">SandboxVM</a></code>
- <code><a href="./src/resources/sandbox-vms/sandbox-vms.ts">SandboxVMList</a></code>

Methods:

- <code title="post /v1/sandbox_vms">client.sandboxVMs.<a href="./src/resources/sandbox-vms/sandbox-vms.ts">create</a>({ ...params }) -> Operation</code>
- <code title="get /v1/sandbox_vms/{sandbox_vm_id}">client.sandboxVMs.<a href="./src/resources/sandbox-vms/sandbox-vms.ts">get</a>(sandboxVMID) -> SandboxVM</code>
- <code title="patch /v1/sandbox_vms/{sandbox_vm_id}">client.sandboxVMs.<a href="./src/resources/sandbox-vms/sandbox-vms.ts">update</a>(sandboxVMID, { ...params }) -> SandboxVM</code>
- <code title="delete /v1/sandbox_vms/{sandbox_vm_id}">client.sandboxVMs.<a href="./src/resources/sandbox-vms/sandbox-vms.ts">delete</a>(sandboxVMID) -> Operation</code>
- <code title="get /v1/sandbox_vms">client.sandboxVMs.<a href="./src/resources/sandbox-vms/sandbox-vms.ts">list</a>({ ...params }) -> SandboxVMsCursor</code>
- <code title="post /v1/sandbox_vms/{sandbox_vm_id}/pause">client.sandboxVMs.<a href="./src/resources/sandbox-vms/sandbox-vms.ts">pause</a>(sandboxVMID) -> Operation</code>
- <code title="post /v1/sandbox_vms/{sandbox_vm_id}/resume">client.sandboxVMs.<a href="./src/resources/sandbox-vms/sandbox-vms.ts">resume</a>(sandboxVMID) -> Operation</code>
- <code title="post /v1/sandbox_vms/{sandbox_vm_id}/restart">client.sandboxVMs.<a href="./src/resources/sandbox-vms/sandbox-vms.ts">restart</a>(sandboxVMID) -> Operation</code>

## Cost

Methods:

- <code title="post /v1/sandbox_vms/cost">client.sandboxVMs.cost.<a href="./src/resources/sandbox-vms/cost.ts">create</a>({ ...params }) -> CostQuote</code>
