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
