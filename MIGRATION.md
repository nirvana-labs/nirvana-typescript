# Migration guide

This guide outlines the changes and steps needed to migrate your codebase to the latest version of the Nirvana Labs TypeScript SDK.

The main changes are that the SDK now relies on the [builtin Web fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) instead of `node-fetch` and has zero dependencies.

## Migration CLI

Most programs will only need minimal changes, but to assist there is a migration tool that will automatically update your code for the new version.
To use it, upgrade the `@nirvana-labs/nirvana` package, then run `./node_modules/.bin/nirvana-labs-nirvana migrate ./your/src/folders` to update your code.
To preview the changes without writing them to disk, run the tool with `--dry`.

## Environment requirements

The minimum supported runtime and tooling versions are now:

- Node.js 20 LTS (Most recent non-EOL Node version)
- TypeScript 4.9
- Jest 28

## Breaking changes

### Web types for `withResponse`, `asResponse`, and `APIError.headers`

Because we now use the builtin Web fetch API on all platforms, if you wrote code that used `withResponse` or `asResponse` and then accessed `node-fetch`-specific properties on the result, you will need to switch to standardized alternatives.
For example, `body` is now a [Web `ReadableStream`](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream) rather than a [node `Readable`](https://nodejs.org/api/stream.html#readable-streams).

```ts
// Before:
const res = await client.example.retrieve('string/with/slash').asResponse();
res.body.pipe(process.stdout);

// After:
import { Readable } from 'node:stream';
const res = await client.example.retrieve('string/with/slash').asResponse();
Readable.fromWeb(res.body).pipe(process.stdout);
```

Additionally, the `headers` property on `APIError` objects is now an instance of the Web [Headers](https://developer.mozilla.org/en-US/docs/Web/API/Headers) class. It was previously defined as `Record<string, string | null | undefined>`.

### Named path parameters

Methods that take multiple path parameters typically now use named instead of positional arguments for better clarity and to prevent a footgun where it was easy to accidentally pass arguments in the incorrect order.

For example, for a method that would call an endpoint at `/v1/parents/{parent_id}/children/{child_id}`, only the _last_ path parameter is positional and the rest must be passed as named arguments.

```ts
// Before
client.parents.children.retrieve('p_123', 'c_456');

// After
client.parents.children.retrieve('c_456', { parent_id: 'p_123' });
```

This affects the following methods:

- `client.networking.firewallRules.update()`
- `client.networking.firewallRules.delete()`
- `client.networking.firewallRules.get()`
- `client.vektor.executions.steps.get()`
- `client.vektor.executions.steps.sign()`

### URI encoded path parameters

Path params are now properly encoded by default. If you were manually encoding path parameters before giving them to the SDK, you must now stop doing that and pass the
param without any encoding applied.

For example:

```diff
- client.example.retrieve(encodeURIComponent('string/with/slash'))
+ client.example.retrieve('string/with/slash') // retrieves /example/string%2Fwith%2Fslash
```

Previously without the `encodeURIComponent()` call we would have used the path `/example/string/with/slash`; now we'll use `/example/string%2Fwith%2Fslash`.

### Removed request options overloads

When making requests with no required body, query or header parameters, you must now explicitly pass `null`, `undefined` or an empty object `{}` to the params argument in order to customise request options.

```diff
client.example.list();
client.example.list({}, { headers: { ... } });
client.example.list(null, { headers: { ... } });
client.example.list(undefined, { headers: { ... } });
- client.example.list({ headers: { ... } });
+ client.example.list({}, { headers: { ... } });
```

This affects the following methods:

- `client.apiKeys.list()`
- `client.operations.list()`
- `client.vektor.registry.assets.list()`
- `client.vektor.registry.blockchains.list()`
- `client.vektor.registry.venues.list()`
- `client.vektor.registry.errors.list()`
- `client.vektor.registry.lendMarkets.list()`
- `client.vektor.registry.borrowMarkets.list()`
- `client.vektor.registry.lpPools.list()`

### Removed `httpAgent` in favor of `fetchOptions`

The `httpAgent` client option has been removed in favor of a [platform-specific `fetchOptions` property](https://github.com/nirvana-labs/nirvana-typescript#fetch-options).
This change was made as `httpAgent` relied on `node:http` agents which are not supported by any runtime's builtin fetch implementation.

If you were using `httpAgent` for proxy support, check out the [new proxy documentation](https://github.com/nirvana-labs/nirvana-typescript#configuring-proxies).

Before:

```ts
import NirvanaLabs from '@nirvana-labs/nirvana';
import http from 'http';
import { HttpsProxyAgent } from 'https-proxy-agent';

// Configure the default for all requests:
const client = new NirvanaLabs({
  httpAgent: new HttpsProxyAgent(process.env.PROXY_URL),
});
```

After:

```ts
import NirvanaLabs from '@nirvana-labs/nirvana';
import * as undici from 'undici';

const proxyAgent = new undici.ProxyAgent(process.env.PROXY_URL);
const client = new NirvanaLabs({
  fetchOptions: {
    dispatcher: proxyAgent,
  },
});
```

### Changed exports

#### Refactor of `@nirvana-labs/nirvana/core`, `error`, `pagination`, `resource` and `uploads`

Much of the `@nirvana-labs/nirvana/core` file was intended to be internal-only but it was publicly accessible, as such it has been refactored and split up into internal and public files, with public-facing code moved to a new `core` folder and internal code moving to the private `internal` folder.

At the same time, we moved some public-facing files which were previously at the top level into `core` to make the file structure cleaner and more clear:

```typescript
// Before
import '@nirvana-labs/nirvana/error';
import '@nirvana-labs/nirvana/pagination';
import '@nirvana-labs/nirvana/resource';
import '@nirvana-labs/nirvana/uploads';

// After
import '@nirvana-labs/nirvana/core/error';
import '@nirvana-labs/nirvana/core/pagination';
import '@nirvana-labs/nirvana/core/resource';
import '@nirvana-labs/nirvana/core/uploads';
```

If you were relying on anything that was only exported from `@nirvana-labs/nirvana/core` and is also not accessible anywhere else, please open an issue and we'll consider adding it to the public API.

#### Resource classes

Previously under certain circumstances it was possible to import resource classes like `UserResource` directly from the root of the package. This was never valid at the type level and only worked in CommonJS files.
Now you must always either reference them as static class properties or import them directly from the files in which they are defined.

```typescript
// Before
const { UserResource } = require('@nirvana-labs/nirvana');

// After
const { NirvanaLabs } = require('@nirvana-labs/nirvana');
NirvanaLabs.UserResource; // or import directly from @nirvana-labs/nirvana/resources/user
```

#### Cleaned up `uploads` exports

As part of the `core` refactor, `@nirvana-labs/nirvana/uploads` was moved to `@nirvana-labs/nirvana/core/uploads`
and the following exports were removed, as they were not intended to be a part of the public API:

- `fileFromPath`
- `BlobPart`
- `BlobLike`
- `FileLike`
- `ResponseLike`
- `isResponseLike`
- `isBlobLike`
- `isFileLike`
- `isUploadable`
- `isMultipartBody`
- `maybeMultipartFormRequestOptions`
- `multipartFormRequestOptions`
- `createForm`

Note that `Uploadable` & `toFile` **are** still exported:

```typescript
import { type Uploadable, toFile } from '@nirvana-labs/nirvana/core/uploads';
```

#### `APIClient`

The `APIClient` base client class has been removed as it is no longer needed. If you were importing this class then you must now import the main client class:

```typescript
// Before
import { APIClient } from '@nirvana-labs/nirvana/core';

// After
import { NirvanaLabs } from '@nirvana-labs/nirvana';
```

### File handling

The deprecated `fileFromPath` helper has been removed in favor of native Node.js streams:

```ts
// Before
NirvanaLabs.fileFromPath('path/to/file');

// After
import fs from 'fs';
fs.createReadStream('path/to/file');
```

Note that this function previously only worked on Node.js. If you're using Bun, you can use [`Bun.file`](https://bun.sh/docs/api/file-io) instead.

### Shims removal

Previously you could configure the types that the SDK used like this:

```ts
// Tell TypeScript and the package to use the global Web fetch instead of node-fetch.
import '@nirvana-labs/nirvana/shims/web';
import NirvanaLabs from '@nirvana-labs/nirvana';
```

The `@nirvana-labs/nirvana/shims` imports have been removed. Your global types must now be [correctly configured](#minimum-types-requirements).

### Pagination changes

The `for await` syntax **is not affected**. This still works as-is:

```ts
// Automatically fetches more pages as needed.
for await (const apiKey of client.apiKeys.list()) {
  console.log(apiKey);
}
```

The interface for manually paginating through list results has been simplified:

```ts
// Before
page.nextPageParams();
page.nextPageInfo();
// Required manually handling { url } | { params } type

// After
page.nextPageRequestOptions();
```

#### Removed unnecessary classes

Page classes for individual methods are now type aliases:

```ts
// Before
export class APIKeysCursor extends Cursor<APIKey> {}

// After
export type APIKeysCursor = Cursor<APIKey>;
```

If you were importing these classes at runtime, you'll need to switch to importing the base class or only import them at the type-level.

### `@nirvana-labs/nirvana/src` directory removed

Previously IDEs may have auto-completed imports from the `@nirvana-labs/nirvana/src` directory, however this
directory was only included for an improved go-to-definition experience and should not have been used at runtime.

If you have any `@nirvana-labs/nirvana/src/*` imports, you will need to replace them with `@nirvana-labs/nirvana/*`.

```ts
// Before
import NirvanaLabs from '@nirvana-labs/nirvana/src';

// After
import NirvanaLabs from '@nirvana-labs/nirvana';
```

## TypeScript troubleshooting

When referencing the library after updating, you may encounter new type errors related to JS features like private properties or fetch classes like Request, Response, and Headers.
To resolve these issues, configure your tsconfig.json and install the appropriate `@types` packages for your runtime environment using the guidelines below:

### Browsers

`tsconfig.json`

```jsonc
{
  "target": "ES2018", // note: we recommend ES2020 or higher
  "lib": ["DOM", "DOM.Iterable", "ES2018"]
}
```

### Node.js

`tsconfig.json`

```jsonc
{
  "target": "ES2018" // note: we recommend ES2020 or higher
}
```

`package.json`

```json
{
  "devDependencies": {
    "@types/node": ">= 20"
  }
}
```

### Cloudflare Workers

`tsconfig.json`

```jsonc
{
  "target": "ES2018", // note: we recommend ES2020 or higher
  "lib": ["ES2020"], // <- needed by @cloudflare/workers-types
  "types": ["@cloudflare/workers-types"]
}
```

`package.json`

```json
{
  "devDependencies": {
    "@cloudflare/workers-types": ">= 0.20221111.0"
  }
}
```

### Bun

`tsconfig.json`

```jsonc
{
  "target": "ES2018" // note: we recommend ES2020 or higher
}
```

`package.json`

```json
{
  "devDependencies": {
    "@types/bun": ">= 1.2.0"
  }
}
```
