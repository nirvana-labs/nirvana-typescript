# Storage

## Buckets

Types:

- <code><a href="./src/resources/storage/buckets/buckets.ts">Bucket</a></code>
- <code><a href="./src/resources/storage/buckets/buckets.ts">BucketList</a></code>

Methods:

- <code title="post /v1/storage/buckets">client.storage.buckets.<a href="./src/resources/storage/buckets/buckets.ts">create</a>({ ...params }) -> Operation</code>
- <code title="get /v1/storage/buckets/{bucket_id}">client.storage.buckets.<a href="./src/resources/storage/buckets/buckets.ts">get</a>(bucketID) -> Bucket</code>
- <code title="patch /v1/storage/buckets/{bucket_id}">client.storage.buckets.<a href="./src/resources/storage/buckets/buckets.ts">update</a>(bucketID, { ...params }) -> Bucket</code>
- <code title="delete /v1/storage/buckets/{bucket_id}">client.storage.buckets.<a href="./src/resources/storage/buckets/buckets.ts">delete</a>(bucketID, { ...params }) -> Operation</code>
- <code title="get /v1/storage/buckets">client.storage.buckets.<a href="./src/resources/storage/buckets/buckets.ts">list</a>({ ...params }) -> BucketsCursor</code>

### Availability

Methods:

- <code title="post /v1/storage/buckets/availability">client.storage.buckets.availability.<a href="./src/resources/storage/buckets/availability.ts">create</a>({ ...params }) -> void</code>

### Cost

Methods:

- <code title="post /v1/storage/buckets/cost">client.storage.buckets.cost.<a href="./src/resources/storage/buckets/cost.ts">create</a>({ ...params }) -> CostQuote</code>

## Keys

Types:

- <code><a href="./src/resources/storage/keys.ts">ObjectStorageKey</a></code>
- <code><a href="./src/resources/storage/keys.ts">ObjectStorageKeyList</a></code>
- <code><a href="./src/resources/storage/keys.ts">ObjectStorageKeyWithSecret</a></code>

Methods:

- <code title="post /v1/storage/keys">client.storage.keys.<a href="./src/resources/storage/keys.ts">create</a>({ ...params }) -> ObjectStorageKeyWithSecret</code>
- <code title="get /v1/storage/keys/{key_id}">client.storage.keys.<a href="./src/resources/storage/keys.ts">get</a>(keyID) -> ObjectStorageKey</code>
- <code title="patch /v1/storage/keys/{key_id}">client.storage.keys.<a href="./src/resources/storage/keys.ts">update</a>(keyID, { ...params }) -> ObjectStorageKey</code>
- <code title="delete /v1/storage/keys/{key_id}">client.storage.keys.<a href="./src/resources/storage/keys.ts">delete</a>(keyID) -> void</code>
- <code title="get /v1/storage/keys">client.storage.keys.<a href="./src/resources/storage/keys.ts">list</a>({ ...params }) -> ObjectStorageKeysCursor</code>
