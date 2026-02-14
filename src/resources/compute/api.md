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
