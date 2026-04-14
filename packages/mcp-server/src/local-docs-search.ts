// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MiniSearch from 'minisearch';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { getLogger } from './logger';

type PerLanguageData = {
  method?: string;
  example?: string;
};

type MethodEntry = {
  name: string;
  endpoint: string;
  httpMethod: string;
  summary: string;
  description: string;
  stainlessPath: string;
  qualified: string;
  params?: string[];
  response?: string;
  markdown?: string;
  perLanguage?: Record<string, PerLanguageData>;
};

type ProseChunk = {
  content: string;
  tag: string;
  sectionContext?: string;
  source?: string;
};

type MiniSearchDocument = {
  id: string;
  kind: 'http_method' | 'prose';
  name?: string;
  endpoint?: string;
  summary?: string;
  description?: string;
  qualified?: string;
  stainlessPath?: string;
  content?: string;
  sectionContext?: string;
  _original: Record<string, unknown>;
};

type SearchResult = {
  results: (string | Record<string, unknown>)[];
};

const EMBEDDED_METHODS: MethodEntry[] = [
  {
    name: 'get',
    endpoint: '/v1/user',
    httpMethod: 'get',
    summary: 'Get User Details',
    description: 'Get details about an authenticated user',
    stainlessPath: '(resource) user > (method) get',
    qualified: 'client.user.get',
    response: '{ id: string; email: string; first_name: string; last_name: string; }',
    markdown:
      "## get\n\n`client.user.get(): { id: string; email: string; first_name: string; last_name: string; }`\n\n**get** `/v1/user`\n\nGet details about an authenticated user\n\n### Returns\n\n- `{ id: string; email: string; first_name: string; last_name: string; }`\n  User details.\n\n  - `id: string`\n  - `email: string`\n  - `first_name: string`\n  - `last_name: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\nconst user = await client.user.get();\n\nconsole.log(user);\n```",
    perLanguage: {
      cli: {
        method: 'user get',
        example: "nirvana user get \\\n  --api-key 'My API Key'",
      },
      go: {
        method: 'client.User.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/nirvana-labs/nirvana-go"\n\t"github.com/nirvana-labs/nirvana-go/option"\n)\n\nfunc main() {\n\tclient := nirvana.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tuser, err := client.User.Get(context.TODO())\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", user.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.nirvanalabs.io/v1/user \\\n    -H "Authorization: Bearer $NIRVANA_LABS_API_KEY"',
      },
      typescript: {
        method: 'client.user.get',
        example:
          "import NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs({\n  apiKey: process.env['NIRVANA_LABS_API_KEY'], // This is the default and can be omitted\n});\n\nconst user = await client.user.get();\n\nconsole.log(user.id);",
      },
    },
  },
  {
    name: 'get',
    endpoint: '/v1/user/security',
    httpMethod: 'get',
    summary: 'Get User Security Settings',
    description: "Get the current user's security settings",
    stainlessPath: '(resource) user.security > (method) get',
    qualified: 'client.user.security.get',
    response:
      '{ source_ip_rule: { allowed: string[]; blocked: string[]; }; created_at?: string; updated_at?: string; }',
    markdown:
      "## get\n\n`client.user.security.get(): { source_ip_rule: source_ip_rule_response; created_at?: string; updated_at?: string; }`\n\n**get** `/v1/user/security`\n\nGet the current user's security settings\n\n### Returns\n\n- `{ source_ip_rule: { allowed: string[]; blocked: string[]; }; created_at?: string; updated_at?: string; }`\n  User security settings response.\n\n  - `source_ip_rule: { allowed: string[]; blocked: string[]; }`\n  - `created_at?: string`\n  - `updated_at?: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\nconst userSecurity = await client.user.security.get();\n\nconsole.log(userSecurity);\n```",
    perLanguage: {
      cli: {
        method: 'security get',
        example: "nirvana user:security get \\\n  --api-key 'My API Key'",
      },
      go: {
        method: 'client.User.Security.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/nirvana-labs/nirvana-go"\n\t"github.com/nirvana-labs/nirvana-go/option"\n)\n\nfunc main() {\n\tclient := nirvana.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tuserSecurity, err := client.User.Security.Get(context.TODO())\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", userSecurity.SourceIPRule)\n}\n',
      },
      http: {
        example:
          'curl https://api.nirvanalabs.io/v1/user/security \\\n    -H "Authorization: Bearer $NIRVANA_LABS_API_KEY"',
      },
      typescript: {
        method: 'client.user.security.get',
        example:
          "import NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs({\n  apiKey: process.env['NIRVANA_LABS_API_KEY'], // This is the default and can be omitted\n});\n\nconst userSecurity = await client.user.security.get();\n\nconsole.log(userSecurity.source_ip_rule);",
      },
    },
  },
  {
    name: 'update',
    endpoint: '/v1/user/security',
    httpMethod: 'patch',
    summary: 'Update User Security Settings',
    description: "Update the current user's security settings",
    stainlessPath: '(resource) user.security > (method) update',
    qualified: 'client.user.security.update',
    params: ['source_ip_rule?: { allowed?: string[]; blocked?: string[]; };'],
    response:
      '{ source_ip_rule: { allowed: string[]; blocked: string[]; }; created_at?: string; updated_at?: string; }',
    markdown:
      "## update\n\n`client.user.security.update(source_ip_rule?: { allowed?: string[]; blocked?: string[]; }): { source_ip_rule: source_ip_rule_response; created_at?: string; updated_at?: string; }`\n\n**patch** `/v1/user/security`\n\nUpdate the current user's security settings\n\n### Parameters\n\n- `source_ip_rule?: { allowed?: string[]; blocked?: string[]; }`\n  IP filter rules.\n  - `allowed?: string[]`\n    List of IPv4 CIDR addresses to allow.\n  - `blocked?: string[]`\n    List of IPv4 CIDR addresses to deny.\n\n### Returns\n\n- `{ source_ip_rule: { allowed: string[]; blocked: string[]; }; created_at?: string; updated_at?: string; }`\n  User security settings response.\n\n  - `source_ip_rule: { allowed: string[]; blocked: string[]; }`\n  - `created_at?: string`\n  - `updated_at?: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\nconst userSecurity = await client.user.security.update();\n\nconsole.log(userSecurity);\n```",
    perLanguage: {
      cli: {
        method: 'security update',
        example: "nirvana user:security update \\\n  --api-key 'My API Key'",
      },
      go: {
        method: 'client.User.Security.Update',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/nirvana-labs/nirvana-go"\n\t"github.com/nirvana-labs/nirvana-go/option"\n\t"github.com/nirvana-labs/nirvana-go/user"\n)\n\nfunc main() {\n\tclient := nirvana.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tuserSecurity, err := client.User.Security.Update(context.TODO(), user.SecurityUpdateParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", userSecurity.SourceIPRule)\n}\n',
      },
      http: {
        example:
          "curl https://api.nirvanalabs.io/v1/user/security \\\n    -X PATCH \\\n    -H 'Content-Type: application/json' \\\n    -H \"Authorization: Bearer $NIRVANA_LABS_API_KEY\" \\\n    -d '{}'",
      },
      typescript: {
        method: 'client.user.security.update',
        example:
          "import NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs({\n  apiKey: process.env['NIRVANA_LABS_API_KEY'], // This is the default and can be omitted\n});\n\nconst userSecurity = await client.user.security.update();\n\nconsole.log(userSecurity.source_ip_rule);",
      },
    },
  },
  {
    name: 'create',
    endpoint: '/v1/api_keys',
    httpMethod: 'post',
    summary: 'Create API Key',
    description: 'Create a new API key',
    stainlessPath: '(resource) api_keys > (method) create',
    qualified: 'client.apiKeys.create',
    params: [
      'expires_at: string;',
      'name: string;',
      "permissions: { permission: 'read' | 'edit'; resource_type: string; }[];",
      'project_ids: string[];',
      'source_ip_rule?: { allowed?: string[]; blocked?: string[]; };',
      'starts_at?: string;',
      'tags?: string[];',
    ],
    response:
      "{ id: string; created_at: string; expires_at: string; name: string; permissions: { permission: api_permission_level; resource_type: api_permission_resource_type; }[]; project_ids: string[]; source_ip_rule: { allowed: string[]; blocked: string[]; }; status: 'active' | 'inactive' | 'expired'; tags: string[]; updated_at: string; key?: string; starts_at?: string; }",
    markdown:
      "## create\n\n`client.apiKeys.create(expires_at: string, name: string, permissions: { permission: 'read' | 'edit'; resource_type: string; }[], project_ids: string[], source_ip_rule?: { allowed?: string[]; blocked?: string[]; }, starts_at?: string, tags?: string[]): { id: string; created_at: string; expires_at: string; name: string; permissions: api_key_permission[]; project_ids: string[]; source_ip_rule: source_ip_rule_response; status: 'active' | 'inactive' | 'expired'; tags: string[]; updated_at: string; key?: string; starts_at?: string; }`\n\n**post** `/v1/api_keys`\n\nCreate a new API key\n\n### Parameters\n\n- `expires_at: string`\n  When the API Key expires and is no longer valid.\n\n- `name: string`\n  API Key name.\n\n- `permissions: { permission: 'read' | 'edit'; resource_type: string; }[]`\n  Scoped permissions for this API key. At least one is required.\n\n- `project_ids: string[]`\n  Project IDs this API key is scoped to. At least one is required.\n\n- `source_ip_rule?: { allowed?: string[]; blocked?: string[]; }`\n  IP filter rules.\n  - `allowed?: string[]`\n    List of IPv4 CIDR addresses to allow.\n  - `blocked?: string[]`\n    List of IPv4 CIDR addresses to deny.\n\n- `starts_at?: string`\n  When the API Key starts to be valid.\n\n- `tags?: string[]`\n  Tags to attach to the API Key.\n\n### Returns\n\n- `{ id: string; created_at: string; expires_at: string; name: string; permissions: { permission: api_permission_level; resource_type: api_permission_resource_type; }[]; project_ids: string[]; source_ip_rule: { allowed: string[]; blocked: string[]; }; status: 'active' | 'inactive' | 'expired'; tags: string[]; updated_at: string; key?: string; starts_at?: string; }`\n  API Key response.\n\n  - `id: string`\n  - `created_at: string`\n  - `expires_at: string`\n  - `name: string`\n  - `permissions: { permission: 'read' | 'edit'; resource_type: string; }[]`\n  - `project_ids: string[]`\n  - `source_ip_rule: { allowed: string[]; blocked: string[]; }`\n  - `status: 'active' | 'inactive' | 'expired'`\n  - `tags: string[]`\n  - `updated_at: string`\n  - `key?: string`\n  - `starts_at?: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\nconst apiKey = await client.apiKeys.create({\n  expires_at: '2025-12-31T23:59:59Z',\n  name: 'My API Key',\n  permissions: [{ permission: 'edit', resource_type: 'vm' }],\n  project_ids: ['123e4567-e89b-12d3-a456-426614174000', '123e4567-e89b-12d3-a456-426614174001'],\n});\n\nconsole.log(apiKey);\n```",
    perLanguage: {
      cli: {
        method: 'api_keys create',
        example:
          "nirvana api-keys create \\\n  --api-key 'My API Key' \\\n  --expires-at \"'2025-12-31T23:59:59Z'\" \\\n  --name 'My API Key' \\\n  --permission '{permission: edit, resource_type: vm}' \\\n  --project-id 123e4567-e89b-12d3-a456-426614174000 \\\n  --project-id 123e4567-e89b-12d3-a456-426614174001",
      },
      go: {
        method: 'client.APIKeys.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\t"time"\n\n\t"github.com/nirvana-labs/nirvana-go"\n\t"github.com/nirvana-labs/nirvana-go/api_keys"\n\t"github.com/nirvana-labs/nirvana-go/option"\n)\n\nfunc main() {\n\tclient := nirvana.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tapiKey, err := client.APIKeys.New(context.TODO(), api_keys.APIKeyNewParams{\n\t\tExpiresAt: time.Now(),\n\t\tName:      "My API Key",\n\t\tPermissions: []api_keys.APIKeyNewParamsPermission{{\n\t\t\tPermission:   api_keys.APIPermissionLevelEdit,\n\t\t\tResourceType: api_keys.APIPermissionResourceTypeVM,\n\t\t}},\n\t\tProjectIDs: []string{"123e4567-e89b-12d3-a456-426614174000", "123e4567-e89b-12d3-a456-426614174001"},\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", apiKey.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.nirvanalabs.io/v1/api_keys \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $NIRVANA_LABS_API_KEY" \\\n    -d \'{\n          "expires_at": "2025-12-31T23:59:59Z",\n          "name": "My API Key",\n          "permissions": [\n            {\n              "permission": "edit",\n              "resource_type": "vm"\n            }\n          ],\n          "project_ids": [\n            "123e4567-e89b-12d3-a456-426614174000",\n            "123e4567-e89b-12d3-a456-426614174001"\n          ],\n          "starts_at": "2025-01-01T00:00:00Z",\n          "tags": [\n            "production",\n            "ethereum"\n          ]\n        }\'',
      },
      typescript: {
        method: 'client.apiKeys.create',
        example:
          "import NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs({\n  apiKey: process.env['NIRVANA_LABS_API_KEY'], // This is the default and can be omitted\n});\n\nconst apiKey = await client.apiKeys.create({\n  expires_at: '2025-12-31T23:59:59Z',\n  name: 'My API Key',\n  permissions: [{ permission: 'edit', resource_type: 'vm' }],\n  project_ids: ['123e4567-e89b-12d3-a456-426614174000', '123e4567-e89b-12d3-a456-426614174001'],\n});\n\nconsole.log(apiKey.id);",
      },
    },
  },
  {
    name: 'get',
    endpoint: '/v1/api_keys/{api_key_id}',
    httpMethod: 'get',
    summary: 'Get API Key Details',
    description: 'Get details about an API key',
    stainlessPath: '(resource) api_keys > (method) get',
    qualified: 'client.apiKeys.get',
    params: ['api_key_id: string;'],
    response:
      "{ id: string; created_at: string; expires_at: string; name: string; permissions: { permission: api_permission_level; resource_type: api_permission_resource_type; }[]; project_ids: string[]; source_ip_rule: { allowed: string[]; blocked: string[]; }; status: 'active' | 'inactive' | 'expired'; tags: string[]; updated_at: string; key?: string; starts_at?: string; }",
    markdown:
      "## get\n\n`client.apiKeys.get(api_key_id: string): { id: string; created_at: string; expires_at: string; name: string; permissions: api_key_permission[]; project_ids: string[]; source_ip_rule: source_ip_rule_response; status: 'active' | 'inactive' | 'expired'; tags: string[]; updated_at: string; key?: string; starts_at?: string; }`\n\n**get** `/v1/api_keys/{api_key_id}`\n\nGet details about an API key\n\n### Parameters\n\n- `api_key_id: string`\n\n### Returns\n\n- `{ id: string; created_at: string; expires_at: string; name: string; permissions: { permission: api_permission_level; resource_type: api_permission_resource_type; }[]; project_ids: string[]; source_ip_rule: { allowed: string[]; blocked: string[]; }; status: 'active' | 'inactive' | 'expired'; tags: string[]; updated_at: string; key?: string; starts_at?: string; }`\n  API Key response.\n\n  - `id: string`\n  - `created_at: string`\n  - `expires_at: string`\n  - `name: string`\n  - `permissions: { permission: 'read' | 'edit'; resource_type: string; }[]`\n  - `project_ids: string[]`\n  - `source_ip_rule: { allowed: string[]; blocked: string[]; }`\n  - `status: 'active' | 'inactive' | 'expired'`\n  - `tags: string[]`\n  - `updated_at: string`\n  - `key?: string`\n  - `starts_at?: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\nconst apiKey = await client.apiKeys.get('api_key_id');\n\nconsole.log(apiKey);\n```",
    perLanguage: {
      cli: {
        method: 'api_keys get',
        example: "nirvana api-keys get \\\n  --api-key 'My API Key' \\\n  --api-key-id api_key_id",
      },
      go: {
        method: 'client.APIKeys.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/nirvana-labs/nirvana-go"\n\t"github.com/nirvana-labs/nirvana-go/option"\n)\n\nfunc main() {\n\tclient := nirvana.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tapiKey, err := client.APIKeys.Get(context.TODO(), "api_key_id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", apiKey.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.nirvanalabs.io/v1/api_keys/$API_KEY_ID \\\n    -H "Authorization: Bearer $NIRVANA_LABS_API_KEY"',
      },
      typescript: {
        method: 'client.apiKeys.get',
        example:
          "import NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs({\n  apiKey: process.env['NIRVANA_LABS_API_KEY'], // This is the default and can be omitted\n});\n\nconst apiKey = await client.apiKeys.get('api_key_id');\n\nconsole.log(apiKey.id);",
      },
    },
  },
  {
    name: 'update',
    endpoint: '/v1/api_keys/{api_key_id}',
    httpMethod: 'patch',
    summary: 'Update API Key',
    description: 'Update an existing API key',
    stainlessPath: '(resource) api_keys > (method) update',
    qualified: 'client.apiKeys.update',
    params: [
      'api_key_id: string;',
      'name?: string;',
      "permissions?: { permission: 'read' | 'edit'; resource_type: string; }[];",
      'project_ids?: string[];',
      'source_ip_rule?: { allowed?: string[]; blocked?: string[]; };',
      'tags?: string[];',
    ],
    response:
      "{ id: string; created_at: string; expires_at: string; name: string; permissions: { permission: api_permission_level; resource_type: api_permission_resource_type; }[]; project_ids: string[]; source_ip_rule: { allowed: string[]; blocked: string[]; }; status: 'active' | 'inactive' | 'expired'; tags: string[]; updated_at: string; key?: string; starts_at?: string; }",
    markdown:
      "## update\n\n`client.apiKeys.update(api_key_id: string, name?: string, permissions?: { permission: 'read' | 'edit'; resource_type: string; }[], project_ids?: string[], source_ip_rule?: { allowed?: string[]; blocked?: string[]; }, tags?: string[]): { id: string; created_at: string; expires_at: string; name: string; permissions: api_key_permission[]; project_ids: string[]; source_ip_rule: source_ip_rule_response; status: 'active' | 'inactive' | 'expired'; tags: string[]; updated_at: string; key?: string; starts_at?: string; }`\n\n**patch** `/v1/api_keys/{api_key_id}`\n\nUpdate an existing API key\n\n### Parameters\n\n- `api_key_id: string`\n\n- `name?: string`\n  API Key name.\n\n- `permissions?: { permission: 'read' | 'edit'; resource_type: string; }[]`\n  Scoped permissions for this API key. When provided, replaces the entire set. At least one is required.\n\n- `project_ids?: string[]`\n  Project IDs this API key is scoped to. When provided, replaces the entire set. At least one is required.\n\n- `source_ip_rule?: { allowed?: string[]; blocked?: string[]; }`\n  IP filter rules.\n  - `allowed?: string[]`\n    List of IPv4 CIDR addresses to allow.\n  - `blocked?: string[]`\n    List of IPv4 CIDR addresses to deny.\n\n- `tags?: string[]`\n  Tags to attach to the API Key.\n\n### Returns\n\n- `{ id: string; created_at: string; expires_at: string; name: string; permissions: { permission: api_permission_level; resource_type: api_permission_resource_type; }[]; project_ids: string[]; source_ip_rule: { allowed: string[]; blocked: string[]; }; status: 'active' | 'inactive' | 'expired'; tags: string[]; updated_at: string; key?: string; starts_at?: string; }`\n  API Key response.\n\n  - `id: string`\n  - `created_at: string`\n  - `expires_at: string`\n  - `name: string`\n  - `permissions: { permission: 'read' | 'edit'; resource_type: string; }[]`\n  - `project_ids: string[]`\n  - `source_ip_rule: { allowed: string[]; blocked: string[]; }`\n  - `status: 'active' | 'inactive' | 'expired'`\n  - `tags: string[]`\n  - `updated_at: string`\n  - `key?: string`\n  - `starts_at?: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\nconst apiKey = await client.apiKeys.update('api_key_id');\n\nconsole.log(apiKey);\n```",
    perLanguage: {
      cli: {
        method: 'api_keys update',
        example: "nirvana api-keys update \\\n  --api-key 'My API Key' \\\n  --api-key-id api_key_id",
      },
      go: {
        method: 'client.APIKeys.Update',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/nirvana-labs/nirvana-go"\n\t"github.com/nirvana-labs/nirvana-go/api_keys"\n\t"github.com/nirvana-labs/nirvana-go/option"\n)\n\nfunc main() {\n\tclient := nirvana.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tapiKey, err := client.APIKeys.Update(\n\t\tcontext.TODO(),\n\t\t"api_key_id",\n\t\tapi_keys.APIKeyUpdateParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", apiKey.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.nirvanalabs.io/v1/api_keys/$API_KEY_ID \\\n    -X PATCH \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $NIRVANA_LABS_API_KEY" \\\n    -d \'{\n          "name": "My Updated API Key",\n          "tags": [\n            "production",\n            "ethereum"\n          ]\n        }\'',
      },
      typescript: {
        method: 'client.apiKeys.update',
        example:
          "import NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs({\n  apiKey: process.env['NIRVANA_LABS_API_KEY'], // This is the default and can be omitted\n});\n\nconst apiKey = await client.apiKeys.update('api_key_id');\n\nconsole.log(apiKey.id);",
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/v1/api_keys/{api_key_id}',
    httpMethod: 'delete',
    summary: 'Delete API Key',
    description: 'Delete an API key',
    stainlessPath: '(resource) api_keys > (method) delete',
    qualified: 'client.apiKeys.delete',
    params: ['api_key_id: string;'],
    markdown:
      "## delete\n\n`client.apiKeys.delete(api_key_id: string): void`\n\n**delete** `/v1/api_keys/{api_key_id}`\n\nDelete an API key\n\n### Parameters\n\n- `api_key_id: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\nawait client.apiKeys.delete('api_key_id')\n```",
    perLanguage: {
      cli: {
        method: 'api_keys delete',
        example: "nirvana api-keys delete \\\n  --api-key 'My API Key' \\\n  --api-key-id api_key_id",
      },
      go: {
        method: 'client.APIKeys.Delete',
        example:
          'package main\n\nimport (\n\t"context"\n\n\t"github.com/nirvana-labs/nirvana-go"\n\t"github.com/nirvana-labs/nirvana-go/option"\n)\n\nfunc main() {\n\tclient := nirvana.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\terr := client.APIKeys.Delete(context.TODO(), "api_key_id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n}\n',
      },
      http: {
        example:
          'curl https://api.nirvanalabs.io/v1/api_keys/$API_KEY_ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $NIRVANA_LABS_API_KEY"',
      },
      typescript: {
        method: 'client.apiKeys.delete',
        example:
          "import NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs({\n  apiKey: process.env['NIRVANA_LABS_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.apiKeys.delete('api_key_id');",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/v1/api_keys',
    httpMethod: 'get',
    summary: 'List API Keys',
    description: 'List all API keys',
    stainlessPath: '(resource) api_keys > (method) list',
    qualified: 'client.apiKeys.list',
    params: ['cursor?: string;', 'limit?: number;'],
    response:
      "{ id: string; created_at: string; expires_at: string; name: string; permissions: { permission: api_permission_level; resource_type: api_permission_resource_type; }[]; project_ids: string[]; source_ip_rule: { allowed: string[]; blocked: string[]; }; status: 'active' | 'inactive' | 'expired'; tags: string[]; updated_at: string; key?: string; starts_at?: string; }",
    markdown:
      "## list\n\n`client.apiKeys.list(cursor?: string, limit?: number): { id: string; created_at: string; expires_at: string; name: string; permissions: api_key_permission[]; project_ids: string[]; source_ip_rule: source_ip_rule_response; status: 'active' | 'inactive' | 'expired'; tags: string[]; updated_at: string; key?: string; starts_at?: string; }`\n\n**get** `/v1/api_keys`\n\nList all API keys\n\n### Parameters\n\n- `cursor?: string`\n  Pagination cursor returned by a previous request\n\n- `limit?: number`\n  Maximum number of items to return\n\n### Returns\n\n- `{ id: string; created_at: string; expires_at: string; name: string; permissions: { permission: api_permission_level; resource_type: api_permission_resource_type; }[]; project_ids: string[]; source_ip_rule: { allowed: string[]; blocked: string[]; }; status: 'active' | 'inactive' | 'expired'; tags: string[]; updated_at: string; key?: string; starts_at?: string; }`\n  API Key response.\n\n  - `id: string`\n  - `created_at: string`\n  - `expires_at: string`\n  - `name: string`\n  - `permissions: { permission: 'read' | 'edit'; resource_type: string; }[]`\n  - `project_ids: string[]`\n  - `source_ip_rule: { allowed: string[]; blocked: string[]; }`\n  - `status: 'active' | 'inactive' | 'expired'`\n  - `tags: string[]`\n  - `updated_at: string`\n  - `key?: string`\n  - `starts_at?: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\n// Automatically fetches more pages as needed.\nfor await (const apiKey of client.apiKeys.list()) {\n  console.log(apiKey);\n}\n```",
    perLanguage: {
      cli: {
        method: 'api_keys list',
        example: "nirvana api-keys list \\\n  --api-key 'My API Key'",
      },
      go: {
        method: 'client.APIKeys.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/nirvana-labs/nirvana-go"\n\t"github.com/nirvana-labs/nirvana-go/api_keys"\n\t"github.com/nirvana-labs/nirvana-go/option"\n)\n\nfunc main() {\n\tclient := nirvana.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpage, err := client.APIKeys.List(context.TODO(), api_keys.APIKeyListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", page)\n}\n',
      },
      http: {
        example:
          'curl https://api.nirvanalabs.io/v1/api_keys \\\n    -H "Authorization: Bearer $NIRVANA_LABS_API_KEY"',
      },
      typescript: {
        method: 'client.apiKeys.list',
        example:
          "import NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs({\n  apiKey: process.env['NIRVANA_LABS_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const apiKey of client.apiKeys.list()) {\n  console.log(apiKey.id);\n}",
      },
    },
  },
  {
    name: 'get',
    endpoint: '/v1/operations/{operation_id}',
    httpMethod: 'get',
    summary: 'Get Operation Details',
    description: 'Get details about a specific operation',
    stainlessPath: '(resource) operations > (method) get',
    qualified: 'client.operations.get',
    params: ['operation_id: string;'],
    response:
      "{ id: string; created_at: string; kind: 'vm' | 'volume' | 'vpc' | 'firewall_rule' | 'nks_cluster' | 'nks_node_pool'; project_id: string; resource_id: string; status: 'pending' | 'running' | 'done' | 'failed' | 'unknown'; type: 'create' | 'update' | 'delete' | 'restart'; updated_at: string; }",
    markdown:
      "## get\n\n`client.operations.get(operation_id: string): { id: string; created_at: string; kind: operation_kind; project_id: string; resource_id: string; status: operation_status; type: operation_type; updated_at: string; }`\n\n**get** `/v1/operations/{operation_id}`\n\nGet details about a specific operation\n\n### Parameters\n\n- `operation_id: string`\n\n### Returns\n\n- `{ id: string; created_at: string; kind: 'vm' | 'volume' | 'vpc' | 'firewall_rule' | 'nks_cluster' | 'nks_node_pool'; project_id: string; resource_id: string; status: 'pending' | 'running' | 'done' | 'failed' | 'unknown'; type: 'create' | 'update' | 'delete' | 'restart'; updated_at: string; }`\n  Operation details.\n\n  - `id: string`\n  - `created_at: string`\n  - `kind: 'vm' | 'volume' | 'vpc' | 'firewall_rule' | 'nks_cluster' | 'nks_node_pool'`\n  - `project_id: string`\n  - `resource_id: string`\n  - `status: 'pending' | 'running' | 'done' | 'failed' | 'unknown'`\n  - `type: 'create' | 'update' | 'delete' | 'restart'`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\nconst operation = await client.operations.get('operation_id');\n\nconsole.log(operation);\n```",
    perLanguage: {
      cli: {
        method: 'operations get',
        example: "nirvana operations get \\\n  --api-key 'My API Key' \\\n  --operation-id operation_id",
      },
      go: {
        method: 'client.Operations.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/nirvana-labs/nirvana-go"\n\t"github.com/nirvana-labs/nirvana-go/option"\n)\n\nfunc main() {\n\tclient := nirvana.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\toperation, err := client.Operations.Get(context.TODO(), "operation_id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", operation.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.nirvanalabs.io/v1/operations/$OPERATION_ID \\\n    -H "Authorization: Bearer $NIRVANA_LABS_API_KEY"',
      },
      typescript: {
        method: 'client.operations.get',
        example:
          "import NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs({\n  apiKey: process.env['NIRVANA_LABS_API_KEY'], // This is the default and can be omitted\n});\n\nconst operation = await client.operations.get('operation_id');\n\nconsole.log(operation.id);",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/v1/operations',
    httpMethod: 'get',
    summary: 'List Operations',
    description: 'List all operations',
    stainlessPath: '(resource) operations > (method) list',
    qualified: 'client.operations.list',
    params: ['project_id: string;', 'cursor?: string;', 'limit?: number;'],
    response:
      "{ id: string; created_at: string; kind: 'vm' | 'volume' | 'vpc' | 'firewall_rule' | 'nks_cluster' | 'nks_node_pool'; project_id: string; resource_id: string; status: 'pending' | 'running' | 'done' | 'failed' | 'unknown'; type: 'create' | 'update' | 'delete' | 'restart'; updated_at: string; }",
    markdown:
      "## list\n\n`client.operations.list(project_id: string, cursor?: string, limit?: number): { id: string; created_at: string; kind: operation_kind; project_id: string; resource_id: string; status: operation_status; type: operation_type; updated_at: string; }`\n\n**get** `/v1/operations`\n\nList all operations\n\n### Parameters\n\n- `project_id: string`\n  Project ID of resources to request\n\n- `cursor?: string`\n  Pagination cursor returned by a previous request\n\n- `limit?: number`\n  Maximum number of items to return\n\n### Returns\n\n- `{ id: string; created_at: string; kind: 'vm' | 'volume' | 'vpc' | 'firewall_rule' | 'nks_cluster' | 'nks_node_pool'; project_id: string; resource_id: string; status: 'pending' | 'running' | 'done' | 'failed' | 'unknown'; type: 'create' | 'update' | 'delete' | 'restart'; updated_at: string; }`\n  Operation details.\n\n  - `id: string`\n  - `created_at: string`\n  - `kind: 'vm' | 'volume' | 'vpc' | 'firewall_rule' | 'nks_cluster' | 'nks_node_pool'`\n  - `project_id: string`\n  - `resource_id: string`\n  - `status: 'pending' | 'running' | 'done' | 'failed' | 'unknown'`\n  - `type: 'create' | 'update' | 'delete' | 'restart'`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\n// Automatically fetches more pages as needed.\nfor await (const operation of client.operations.list({ project_id: 'project_id' })) {\n  console.log(operation);\n}\n```",
    perLanguage: {
      cli: {
        method: 'operations list',
        example: "nirvana operations list \\\n  --api-key 'My API Key' \\\n  --project-id project_id",
      },
      go: {
        method: 'client.Operations.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/nirvana-labs/nirvana-go"\n\t"github.com/nirvana-labs/nirvana-go/operations"\n\t"github.com/nirvana-labs/nirvana-go/option"\n)\n\nfunc main() {\n\tclient := nirvana.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpage, err := client.Operations.List(context.TODO(), operations.OperationListParams{\n\t\tProjectID: "project_id",\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", page)\n}\n',
      },
      http: {
        example:
          'curl https://api.nirvanalabs.io/v1/operations \\\n    -H "Authorization: Bearer $NIRVANA_LABS_API_KEY"',
      },
      typescript: {
        method: 'client.operations.list',
        example:
          "import NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs({\n  apiKey: process.env['NIRVANA_LABS_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const operation of client.operations.list({ project_id: 'project_id' })) {\n  console.log(operation.id);\n}",
      },
    },
  },
  {
    name: 'create',
    endpoint: '/v1/organizations',
    httpMethod: 'post',
    summary: 'Create Organization',
    description: 'Create a new organization',
    stainlessPath: '(resource) organizations > (method) create',
    qualified: 'client.organizations.create',
    params: ['name: string;'],
    response:
      '{ id: string; created_at: string; domains: { id: string; domain: string; verified: boolean; }[]; name: string; personal: boolean; services: { cloud: boolean; jit_provisioning: boolean; scim: boolean; siem: boolean; sso: boolean; }; updated_at: string; auth_id?: string; }',
    markdown:
      "## create\n\n`client.organizations.create(name: string): { id: string; created_at: string; domains: organization_domain[]; name: string; personal: boolean; services: organization_services; updated_at: string; auth_id?: string; }`\n\n**post** `/v1/organizations`\n\nCreate a new organization\n\n### Parameters\n\n- `name: string`\n  Organization name.\n\n### Returns\n\n- `{ id: string; created_at: string; domains: { id: string; domain: string; verified: boolean; }[]; name: string; personal: boolean; services: { cloud: boolean; jit_provisioning: boolean; scim: boolean; siem: boolean; sso: boolean; }; updated_at: string; auth_id?: string; }`\n  Organization response.\n\n  - `id: string`\n  - `created_at: string`\n  - `domains: { id: string; domain: string; verified: boolean; }[]`\n  - `name: string`\n  - `personal: boolean`\n  - `services: { cloud: boolean; jit_provisioning: boolean; scim: boolean; siem: boolean; sso: boolean; }`\n  - `updated_at: string`\n  - `auth_id?: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\nconst organization = await client.organizations.create({ name: 'My Organization' });\n\nconsole.log(organization);\n```",
    perLanguage: {
      cli: {
        method: 'organizations create',
        example: "nirvana organizations create \\\n  --api-key 'My API Key' \\\n  --name 'My Organization'",
      },
      go: {
        method: 'client.Organizations.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/nirvana-labs/nirvana-go"\n\t"github.com/nirvana-labs/nirvana-go/option"\n\t"github.com/nirvana-labs/nirvana-go/organizations"\n)\n\nfunc main() {\n\tclient := nirvana.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\torganization, err := client.Organizations.New(context.TODO(), organizations.OrganizationNewParams{\n\t\tName: "My Organization",\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", organization.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.nirvanalabs.io/v1/organizations \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $NIRVANA_LABS_API_KEY" \\\n    -d \'{\n          "name": "My Organization"\n        }\'',
      },
      typescript: {
        method: 'client.organizations.create',
        example:
          "import NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs({\n  apiKey: process.env['NIRVANA_LABS_API_KEY'], // This is the default and can be omitted\n});\n\nconst organization = await client.organizations.create({ name: 'My Organization' });\n\nconsole.log(organization.id);",
      },
    },
  },
  {
    name: 'get',
    endpoint: '/v1/organizations/{organization_id}',
    httpMethod: 'get',
    summary: 'Get Organization Details',
    description: 'Get details about an Organization',
    stainlessPath: '(resource) organizations > (method) get',
    qualified: 'client.organizations.get',
    params: ['organization_id: string;'],
    response:
      '{ id: string; created_at: string; domains: { id: string; domain: string; verified: boolean; }[]; name: string; personal: boolean; services: { cloud: boolean; jit_provisioning: boolean; scim: boolean; siem: boolean; sso: boolean; }; updated_at: string; auth_id?: string; }',
    markdown:
      "## get\n\n`client.organizations.get(organization_id: string): { id: string; created_at: string; domains: organization_domain[]; name: string; personal: boolean; services: organization_services; updated_at: string; auth_id?: string; }`\n\n**get** `/v1/organizations/{organization_id}`\n\nGet details about an Organization\n\n### Parameters\n\n- `organization_id: string`\n\n### Returns\n\n- `{ id: string; created_at: string; domains: { id: string; domain: string; verified: boolean; }[]; name: string; personal: boolean; services: { cloud: boolean; jit_provisioning: boolean; scim: boolean; siem: boolean; sso: boolean; }; updated_at: string; auth_id?: string; }`\n  Organization response.\n\n  - `id: string`\n  - `created_at: string`\n  - `domains: { id: string; domain: string; verified: boolean; }[]`\n  - `name: string`\n  - `personal: boolean`\n  - `services: { cloud: boolean; jit_provisioning: boolean; scim: boolean; siem: boolean; sso: boolean; }`\n  - `updated_at: string`\n  - `auth_id?: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\nconst organization = await client.organizations.get('organization_id');\n\nconsole.log(organization);\n```",
    perLanguage: {
      cli: {
        method: 'organizations get',
        example:
          "nirvana organizations get \\\n  --api-key 'My API Key' \\\n  --organization-id organization_id",
      },
      go: {
        method: 'client.Organizations.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/nirvana-labs/nirvana-go"\n\t"github.com/nirvana-labs/nirvana-go/option"\n)\n\nfunc main() {\n\tclient := nirvana.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\torganization, err := client.Organizations.Get(context.TODO(), "organization_id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", organization.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.nirvanalabs.io/v1/organizations/$ORGANIZATION_ID \\\n    -H "Authorization: Bearer $NIRVANA_LABS_API_KEY"',
      },
      typescript: {
        method: 'client.organizations.get',
        example:
          "import NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs({\n  apiKey: process.env['NIRVANA_LABS_API_KEY'], // This is the default and can be omitted\n});\n\nconst organization = await client.organizations.get('organization_id');\n\nconsole.log(organization.id);",
      },
    },
  },
  {
    name: 'update',
    endpoint: '/v1/organizations/{organization_id}',
    httpMethod: 'patch',
    summary: 'Update Organization',
    description: 'Update an existing organization',
    stainlessPath: '(resource) organizations > (method) update',
    qualified: 'client.organizations.update',
    params: ['organization_id: string;', 'name?: string;'],
    response:
      '{ id: string; created_at: string; domains: { id: string; domain: string; verified: boolean; }[]; name: string; personal: boolean; services: { cloud: boolean; jit_provisioning: boolean; scim: boolean; siem: boolean; sso: boolean; }; updated_at: string; auth_id?: string; }',
    markdown:
      "## update\n\n`client.organizations.update(organization_id: string, name?: string): { id: string; created_at: string; domains: organization_domain[]; name: string; personal: boolean; services: organization_services; updated_at: string; auth_id?: string; }`\n\n**patch** `/v1/organizations/{organization_id}`\n\nUpdate an existing organization\n\n### Parameters\n\n- `organization_id: string`\n\n- `name?: string`\n  Organization name.\n\n### Returns\n\n- `{ id: string; created_at: string; domains: { id: string; domain: string; verified: boolean; }[]; name: string; personal: boolean; services: { cloud: boolean; jit_provisioning: boolean; scim: boolean; siem: boolean; sso: boolean; }; updated_at: string; auth_id?: string; }`\n  Organization response.\n\n  - `id: string`\n  - `created_at: string`\n  - `domains: { id: string; domain: string; verified: boolean; }[]`\n  - `name: string`\n  - `personal: boolean`\n  - `services: { cloud: boolean; jit_provisioning: boolean; scim: boolean; siem: boolean; sso: boolean; }`\n  - `updated_at: string`\n  - `auth_id?: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\nconst organization = await client.organizations.update('organization_id');\n\nconsole.log(organization);\n```",
    perLanguage: {
      cli: {
        method: 'organizations update',
        example:
          "nirvana organizations update \\\n  --api-key 'My API Key' \\\n  --organization-id organization_id",
      },
      go: {
        method: 'client.Organizations.Update',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/nirvana-labs/nirvana-go"\n\t"github.com/nirvana-labs/nirvana-go/option"\n\t"github.com/nirvana-labs/nirvana-go/organizations"\n)\n\nfunc main() {\n\tclient := nirvana.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\torganization, err := client.Organizations.Update(\n\t\tcontext.TODO(),\n\t\t"organization_id",\n\t\torganizations.OrganizationUpdateParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", organization.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.nirvanalabs.io/v1/organizations/$ORGANIZATION_ID \\\n    -X PATCH \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $NIRVANA_LABS_API_KEY" \\\n    -d \'{\n          "name": "My Updated Organization"\n        }\'',
      },
      typescript: {
        method: 'client.organizations.update',
        example:
          "import NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs({\n  apiKey: process.env['NIRVANA_LABS_API_KEY'], // This is the default and can be omitted\n});\n\nconst organization = await client.organizations.update('organization_id');\n\nconsole.log(organization.id);",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/v1/organizations',
    httpMethod: 'get',
    summary: 'List Organizations',
    description: 'List organizations',
    stainlessPath: '(resource) organizations > (method) list',
    qualified: 'client.organizations.list',
    params: ['cursor?: string;', 'limit?: number;'],
    response:
      '{ id: string; created_at: string; domains: { id: string; domain: string; verified: boolean; }[]; name: string; personal: boolean; services: { cloud: boolean; jit_provisioning: boolean; scim: boolean; siem: boolean; sso: boolean; }; updated_at: string; auth_id?: string; }',
    markdown:
      "## list\n\n`client.organizations.list(cursor?: string, limit?: number): { id: string; created_at: string; domains: organization_domain[]; name: string; personal: boolean; services: organization_services; updated_at: string; auth_id?: string; }`\n\n**get** `/v1/organizations`\n\nList organizations\n\n### Parameters\n\n- `cursor?: string`\n  Pagination cursor returned by a previous request\n\n- `limit?: number`\n  Maximum number of items to return\n\n### Returns\n\n- `{ id: string; created_at: string; domains: { id: string; domain: string; verified: boolean; }[]; name: string; personal: boolean; services: { cloud: boolean; jit_provisioning: boolean; scim: boolean; siem: boolean; sso: boolean; }; updated_at: string; auth_id?: string; }`\n  Organization response.\n\n  - `id: string`\n  - `created_at: string`\n  - `domains: { id: string; domain: string; verified: boolean; }[]`\n  - `name: string`\n  - `personal: boolean`\n  - `services: { cloud: boolean; jit_provisioning: boolean; scim: boolean; siem: boolean; sso: boolean; }`\n  - `updated_at: string`\n  - `auth_id?: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\n// Automatically fetches more pages as needed.\nfor await (const organization of client.organizations.list()) {\n  console.log(organization);\n}\n```",
    perLanguage: {
      cli: {
        method: 'organizations list',
        example: "nirvana organizations list \\\n  --api-key 'My API Key'",
      },
      go: {
        method: 'client.Organizations.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/nirvana-labs/nirvana-go"\n\t"github.com/nirvana-labs/nirvana-go/option"\n\t"github.com/nirvana-labs/nirvana-go/organizations"\n)\n\nfunc main() {\n\tclient := nirvana.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpage, err := client.Organizations.List(context.TODO(), organizations.OrganizationListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", page)\n}\n',
      },
      http: {
        example:
          'curl https://api.nirvanalabs.io/v1/organizations \\\n    -H "Authorization: Bearer $NIRVANA_LABS_API_KEY"',
      },
      typescript: {
        method: 'client.organizations.list',
        example:
          "import NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs({\n  apiKey: process.env['NIRVANA_LABS_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const organization of client.organizations.list()) {\n  console.log(organization.id);\n}",
      },
    },
  },
  {
    name: 'leave',
    endpoint: '/v1/organizations/{organization_id}/leave',
    httpMethod: 'post',
    summary: 'Leave Organization',
    description: 'Leave an Organization',
    stainlessPath: '(resource) organizations > (method) leave',
    qualified: 'client.organizations.leave',
    params: ['organization_id: string;'],
    markdown:
      "## leave\n\n`client.organizations.leave(organization_id: string): void`\n\n**post** `/v1/organizations/{organization_id}/leave`\n\nLeave an Organization\n\n### Parameters\n\n- `organization_id: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\nawait client.organizations.leave('organization_id')\n```",
    perLanguage: {
      cli: {
        method: 'organizations leave',
        example:
          "nirvana organizations leave \\\n  --api-key 'My API Key' \\\n  --organization-id organization_id",
      },
      go: {
        method: 'client.Organizations.Leave',
        example:
          'package main\n\nimport (\n\t"context"\n\n\t"github.com/nirvana-labs/nirvana-go"\n\t"github.com/nirvana-labs/nirvana-go/option"\n)\n\nfunc main() {\n\tclient := nirvana.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\terr := client.Organizations.Leave(context.TODO(), "organization_id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n}\n',
      },
      http: {
        example:
          'curl https://api.nirvanalabs.io/v1/organizations/$ORGANIZATION_ID/leave \\\n    -X POST \\\n    -H "Authorization: Bearer $NIRVANA_LABS_API_KEY"',
      },
      typescript: {
        method: 'client.organizations.leave',
        example:
          "import NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs({\n  apiKey: process.env['NIRVANA_LABS_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.organizations.leave('organization_id');",
      },
    },
  },
  {
    name: 'get',
    endpoint: '/v1/organizations/{organization_id}/memberships/{membership_id}',
    httpMethod: 'get',
    summary: 'Get Organization Membership',
    description: 'Get details about an organization membership',
    stainlessPath: '(resource) organizations.memberships > (method) get',
    qualified: 'client.organizations.memberships.get',
    params: ['organization_id: string;', 'membership_id: string;'],
    response:
      "{ id: string; created_at: string; organization_id: string; role: 'owner' | 'member'; updated_at: string; user_id: string; }",
    markdown:
      "## get\n\n`client.organizations.memberships.get(organization_id: string, membership_id: string): { id: string; created_at: string; organization_id: string; role: 'owner' | 'member'; updated_at: string; user_id: string; }`\n\n**get** `/v1/organizations/{organization_id}/memberships/{membership_id}`\n\nGet details about an organization membership\n\n### Parameters\n\n- `organization_id: string`\n\n- `membership_id: string`\n\n### Returns\n\n- `{ id: string; created_at: string; organization_id: string; role: 'owner' | 'member'; updated_at: string; user_id: string; }`\n  Organization membership details.\n\n  - `id: string`\n  - `created_at: string`\n  - `organization_id: string`\n  - `role: 'owner' | 'member'`\n  - `updated_at: string`\n  - `user_id: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\nconst organizationMembership = await client.organizations.memberships.get('membership_id', { organization_id: 'organization_id' });\n\nconsole.log(organizationMembership);\n```",
    perLanguage: {
      cli: {
        method: 'memberships get',
        example:
          "nirvana organizations:memberships get \\\n  --api-key 'My API Key' \\\n  --organization-id organization_id \\\n  --membership-id membership_id",
      },
      go: {
        method: 'client.Organizations.Memberships.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/nirvana-labs/nirvana-go"\n\t"github.com/nirvana-labs/nirvana-go/option"\n)\n\nfunc main() {\n\tclient := nirvana.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\torganizationMembership, err := client.Organizations.Memberships.Get(\n\t\tcontext.TODO(),\n\t\t"organization_id",\n\t\t"membership_id",\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", organizationMembership.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.nirvanalabs.io/v1/organizations/$ORGANIZATION_ID/memberships/$MEMBERSHIP_ID \\\n    -H "Authorization: Bearer $NIRVANA_LABS_API_KEY"',
      },
      typescript: {
        method: 'client.organizations.memberships.get',
        example:
          "import NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs({\n  apiKey: process.env['NIRVANA_LABS_API_KEY'], // This is the default and can be omitted\n});\n\nconst organizationMembership = await client.organizations.memberships.get('membership_id', {\n  organization_id: 'organization_id',\n});\n\nconsole.log(organizationMembership.id);",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/v1/organizations/{organization_id}/memberships',
    httpMethod: 'get',
    summary: 'List Organization Memberships',
    description: 'List all memberships for an organization',
    stainlessPath: '(resource) organizations.memberships > (method) list',
    qualified: 'client.organizations.memberships.list',
    params: ['organization_id: string;', 'cursor?: string;', 'limit?: number;'],
    response:
      "{ id: string; created_at: string; organization_id: string; role: 'owner' | 'member'; updated_at: string; user_id: string; }",
    markdown:
      "## list\n\n`client.organizations.memberships.list(organization_id: string, cursor?: string, limit?: number): { id: string; created_at: string; organization_id: string; role: 'owner' | 'member'; updated_at: string; user_id: string; }`\n\n**get** `/v1/organizations/{organization_id}/memberships`\n\nList all memberships for an organization\n\n### Parameters\n\n- `organization_id: string`\n\n- `cursor?: string`\n  Pagination cursor returned by a previous request\n\n- `limit?: number`\n  Maximum number of items to return\n\n### Returns\n\n- `{ id: string; created_at: string; organization_id: string; role: 'owner' | 'member'; updated_at: string; user_id: string; }`\n  Organization membership details.\n\n  - `id: string`\n  - `created_at: string`\n  - `organization_id: string`\n  - `role: 'owner' | 'member'`\n  - `updated_at: string`\n  - `user_id: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\n// Automatically fetches more pages as needed.\nfor await (const organizationMembership of client.organizations.memberships.list('organization_id')) {\n  console.log(organizationMembership);\n}\n```",
    perLanguage: {
      cli: {
        method: 'memberships list',
        example:
          "nirvana organizations:memberships list \\\n  --api-key 'My API Key' \\\n  --organization-id organization_id",
      },
      go: {
        method: 'client.Organizations.Memberships.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/nirvana-labs/nirvana-go"\n\t"github.com/nirvana-labs/nirvana-go/option"\n\t"github.com/nirvana-labs/nirvana-go/organizations"\n)\n\nfunc main() {\n\tclient := nirvana.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpage, err := client.Organizations.Memberships.List(\n\t\tcontext.TODO(),\n\t\t"organization_id",\n\t\torganizations.MembershipListParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", page)\n}\n',
      },
      http: {
        example:
          'curl https://api.nirvanalabs.io/v1/organizations/$ORGANIZATION_ID/memberships \\\n    -H "Authorization: Bearer $NIRVANA_LABS_API_KEY"',
      },
      typescript: {
        method: 'client.organizations.memberships.list',
        example:
          "import NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs({\n  apiKey: process.env['NIRVANA_LABS_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const organizationMembership of client.organizations.memberships.list(\n  'organization_id',\n)) {\n  console.log(organizationMembership.id);\n}",
      },
    },
  },
  {
    name: 'get',
    endpoint: '/v1/audit_logs/{audit_log_id}',
    httpMethod: 'get',
    summary: 'Get Audit Log',
    description: 'Get an Audit Log entry',
    stainlessPath: '(resource) audit_logs > (method) get',
    qualified: 'client.auditLogs.get',
    params: ['audit_log_id: string;'],
    response:
      '{ id: string; action: string; actor: { id: string; name: string; type: audit_log_type; }; client_ip: string; created_at: string; method: string; path: string; status_code: number; user_agent: string; target?: { id: string; type: string; }; }',
    markdown:
      "## get\n\n`client.auditLogs.get(audit_log_id: string): { id: string; action: string; actor: audit_log_actor; client_ip: string; created_at: string; method: string; path: string; status_code: number; user_agent: string; target?: object; }`\n\n**get** `/v1/audit_logs/{audit_log_id}`\n\nGet an Audit Log entry\n\n### Parameters\n\n- `audit_log_id: string`\n\n### Returns\n\n- `{ id: string; action: string; actor: { id: string; name: string; type: audit_log_type; }; client_ip: string; created_at: string; method: string; path: string; status_code: number; user_agent: string; target?: { id: string; type: string; }; }`\n  Audit log entry.\n\n  - `id: string`\n  - `action: string`\n  - `actor: { id: string; name: string; type: 'user' | 'api_key'; }`\n  - `client_ip: string`\n  - `created_at: string`\n  - `method: string`\n  - `path: string`\n  - `status_code: number`\n  - `user_agent: string`\n  - `target?: { id: string; type: string; }`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\nconst auditLog = await client.auditLogs.get('audit_log_id');\n\nconsole.log(auditLog);\n```",
    perLanguage: {
      cli: {
        method: 'audit_logs get',
        example: "nirvana audit-logs get \\\n  --api-key 'My API Key' \\\n  --audit-log-id audit_log_id",
      },
      go: {
        method: 'client.AuditLogs.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/nirvana-labs/nirvana-go"\n\t"github.com/nirvana-labs/nirvana-go/option"\n)\n\nfunc main() {\n\tclient := nirvana.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tauditLog, err := client.AuditLogs.Get(context.TODO(), "audit_log_id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", auditLog.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.nirvanalabs.io/v1/audit_logs/$AUDIT_LOG_ID \\\n    -H "Authorization: Bearer $NIRVANA_LABS_API_KEY"',
      },
      typescript: {
        method: 'client.auditLogs.get',
        example:
          "import NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs({\n  apiKey: process.env['NIRVANA_LABS_API_KEY'], // This is the default and can be omitted\n});\n\nconst auditLog = await client.auditLogs.get('audit_log_id');\n\nconsole.log(auditLog.id);",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/v1/audit_logs',
    httpMethod: 'get',
    summary: 'List Audit Logs',
    description: 'List Audit Log entries for an organization',
    stainlessPath: '(resource) audit_logs > (method) list',
    qualified: 'client.auditLogs.list',
    params: ['cursor?: string;', 'limit?: number;'],
    response:
      '{ id: string; action: string; actor: { id: string; name: string; type: audit_log_type; }; client_ip: string; created_at: string; method: string; path: string; status_code: number; user_agent: string; target?: { id: string; type: string; }; }',
    markdown:
      "## list\n\n`client.auditLogs.list(cursor?: string, limit?: number): { id: string; action: string; actor: audit_log_actor; client_ip: string; created_at: string; method: string; path: string; status_code: number; user_agent: string; target?: object; }`\n\n**get** `/v1/audit_logs`\n\nList Audit Log entries for an organization\n\n### Parameters\n\n- `cursor?: string`\n  Pagination cursor returned by a previous request\n\n- `limit?: number`\n  Maximum number of items to return\n\n### Returns\n\n- `{ id: string; action: string; actor: { id: string; name: string; type: audit_log_type; }; client_ip: string; created_at: string; method: string; path: string; status_code: number; user_agent: string; target?: { id: string; type: string; }; }`\n  Audit log entry.\n\n  - `id: string`\n  - `action: string`\n  - `actor: { id: string; name: string; type: 'user' | 'api_key'; }`\n  - `client_ip: string`\n  - `created_at: string`\n  - `method: string`\n  - `path: string`\n  - `status_code: number`\n  - `user_agent: string`\n  - `target?: { id: string; type: string; }`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\n// Automatically fetches more pages as needed.\nfor await (const auditLog of client.auditLogs.list()) {\n  console.log(auditLog);\n}\n```",
    perLanguage: {
      cli: {
        method: 'audit_logs list',
        example: "nirvana audit-logs list \\\n  --api-key 'My API Key'",
      },
      go: {
        method: 'client.AuditLogs.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/nirvana-labs/nirvana-go"\n\t"github.com/nirvana-labs/nirvana-go/audit_logs"\n\t"github.com/nirvana-labs/nirvana-go/option"\n)\n\nfunc main() {\n\tclient := nirvana.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpage, err := client.AuditLogs.List(context.TODO(), audit_logs.AuditLogListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", page)\n}\n',
      },
      http: {
        example:
          'curl https://api.nirvanalabs.io/v1/audit_logs \\\n    -H "Authorization: Bearer $NIRVANA_LABS_API_KEY"',
      },
      typescript: {
        method: 'client.auditLogs.list',
        example:
          "import NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs({\n  apiKey: process.env['NIRVANA_LABS_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const auditLog of client.auditLogs.list()) {\n  console.log(auditLog.id);\n}",
      },
    },
  },
  {
    name: 'create',
    endpoint: '/v1/projects',
    httpMethod: 'post',
    summary: 'Create Project',
    description: 'Create a new project',
    stainlessPath: '(resource) projects > (method) create',
    qualified: 'client.projects.create',
    params: ['name: string;', 'tags?: string[];'],
    response:
      '{ id: string; created_at: string; name: string; resources: { blockchain: project_blockchain_resources; cloud: project_cloud_resources; }; tags: string[]; updated_at: string; }',
    markdown:
      "## create\n\n`client.projects.create(name: string, tags?: string[]): { id: string; created_at: string; name: string; resources: project_resources; tags: string[]; updated_at: string; }`\n\n**post** `/v1/projects`\n\nCreate a new project\n\n### Parameters\n\n- `name: string`\n  Project name.\n\n- `tags?: string[]`\n  Tags to attach to the Project.\n\n### Returns\n\n- `{ id: string; created_at: string; name: string; resources: { blockchain: project_blockchain_resources; cloud: project_cloud_resources; }; tags: string[]; updated_at: string; }`\n  Project response.\n\n  - `id: string`\n  - `created_at: string`\n  - `name: string`\n  - `resources: { blockchain: { rpc_nodes_dedicated: number; rpc_nodes_flex: number; }; cloud: { connect_connections: number; nks_clusters: number; nks_node_pools: number; vms: number; volumes: number; vpcs: number; }; }`\n  - `tags: string[]`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\nconst project = await client.projects.create({ name: 'My Project' });\n\nconsole.log(project);\n```",
    perLanguage: {
      cli: {
        method: 'projects create',
        example: "nirvana projects create \\\n  --api-key 'My API Key' \\\n  --name 'My Project'",
      },
      go: {
        method: 'client.Projects.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/nirvana-labs/nirvana-go"\n\t"github.com/nirvana-labs/nirvana-go/option"\n\t"github.com/nirvana-labs/nirvana-go/projects"\n)\n\nfunc main() {\n\tclient := nirvana.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tproject, err := client.Projects.New(context.TODO(), projects.ProjectNewParams{\n\t\tName: "My Project",\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", project.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.nirvanalabs.io/v1/projects \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $NIRVANA_LABS_API_KEY" \\\n    -d \'{\n          "name": "My Project",\n          "tags": [\n            "production",\n            "ethereum"\n          ]\n        }\'',
      },
      typescript: {
        method: 'client.projects.create',
        example:
          "import NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs({\n  apiKey: process.env['NIRVANA_LABS_API_KEY'], // This is the default and can be omitted\n});\n\nconst project = await client.projects.create({ name: 'My Project' });\n\nconsole.log(project.id);",
      },
    },
  },
  {
    name: 'get',
    endpoint: '/v1/projects/{project_id}',
    httpMethod: 'get',
    summary: 'Get Project Details',
    description: 'Get details about a project',
    stainlessPath: '(resource) projects > (method) get',
    qualified: 'client.projects.get',
    params: ['project_id: string;'],
    response:
      '{ id: string; created_at: string; name: string; resources: { blockchain: project_blockchain_resources; cloud: project_cloud_resources; }; tags: string[]; updated_at: string; }',
    markdown:
      "## get\n\n`client.projects.get(project_id: string): { id: string; created_at: string; name: string; resources: project_resources; tags: string[]; updated_at: string; }`\n\n**get** `/v1/projects/{project_id}`\n\nGet details about a project\n\n### Parameters\n\n- `project_id: string`\n\n### Returns\n\n- `{ id: string; created_at: string; name: string; resources: { blockchain: project_blockchain_resources; cloud: project_cloud_resources; }; tags: string[]; updated_at: string; }`\n  Project response.\n\n  - `id: string`\n  - `created_at: string`\n  - `name: string`\n  - `resources: { blockchain: { rpc_nodes_dedicated: number; rpc_nodes_flex: number; }; cloud: { connect_connections: number; nks_clusters: number; nks_node_pools: number; vms: number; volumes: number; vpcs: number; }; }`\n  - `tags: string[]`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\nconst project = await client.projects.get('project_id');\n\nconsole.log(project);\n```",
    perLanguage: {
      cli: {
        method: 'projects get',
        example: "nirvana projects get \\\n  --api-key 'My API Key' \\\n  --project-id project_id",
      },
      go: {
        method: 'client.Projects.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/nirvana-labs/nirvana-go"\n\t"github.com/nirvana-labs/nirvana-go/option"\n)\n\nfunc main() {\n\tclient := nirvana.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tproject, err := client.Projects.Get(context.TODO(), "project_id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", project.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.nirvanalabs.io/v1/projects/$PROJECT_ID \\\n    -H "Authorization: Bearer $NIRVANA_LABS_API_KEY"',
      },
      typescript: {
        method: 'client.projects.get',
        example:
          "import NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs({\n  apiKey: process.env['NIRVANA_LABS_API_KEY'], // This is the default and can be omitted\n});\n\nconst project = await client.projects.get('project_id');\n\nconsole.log(project.id);",
      },
    },
  },
  {
    name: 'update',
    endpoint: '/v1/projects/{project_id}',
    httpMethod: 'patch',
    summary: 'Update Project',
    description: 'Update an existing project',
    stainlessPath: '(resource) projects > (method) update',
    qualified: 'client.projects.update',
    params: ['project_id: string;', 'name?: string;', 'tags?: string[];'],
    response:
      '{ id: string; created_at: string; name: string; resources: { blockchain: project_blockchain_resources; cloud: project_cloud_resources; }; tags: string[]; updated_at: string; }',
    markdown:
      "## update\n\n`client.projects.update(project_id: string, name?: string, tags?: string[]): { id: string; created_at: string; name: string; resources: project_resources; tags: string[]; updated_at: string; }`\n\n**patch** `/v1/projects/{project_id}`\n\nUpdate an existing project\n\n### Parameters\n\n- `project_id: string`\n\n- `name?: string`\n  Project name.\n\n- `tags?: string[]`\n  Tags to attach to the Project.\n\n### Returns\n\n- `{ id: string; created_at: string; name: string; resources: { blockchain: project_blockchain_resources; cloud: project_cloud_resources; }; tags: string[]; updated_at: string; }`\n  Project response.\n\n  - `id: string`\n  - `created_at: string`\n  - `name: string`\n  - `resources: { blockchain: { rpc_nodes_dedicated: number; rpc_nodes_flex: number; }; cloud: { connect_connections: number; nks_clusters: number; nks_node_pools: number; vms: number; volumes: number; vpcs: number; }; }`\n  - `tags: string[]`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\nconst project = await client.projects.update('project_id');\n\nconsole.log(project);\n```",
    perLanguage: {
      cli: {
        method: 'projects update',
        example: "nirvana projects update \\\n  --api-key 'My API Key' \\\n  --project-id project_id",
      },
      go: {
        method: 'client.Projects.Update',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/nirvana-labs/nirvana-go"\n\t"github.com/nirvana-labs/nirvana-go/option"\n\t"github.com/nirvana-labs/nirvana-go/projects"\n)\n\nfunc main() {\n\tclient := nirvana.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tproject, err := client.Projects.Update(\n\t\tcontext.TODO(),\n\t\t"project_id",\n\t\tprojects.ProjectUpdateParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", project.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.nirvanalabs.io/v1/projects/$PROJECT_ID \\\n    -X PATCH \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $NIRVANA_LABS_API_KEY" \\\n    -d \'{\n          "name": "My Updated Project",\n          "tags": [\n            "production",\n            "ethereum"\n          ]\n        }\'',
      },
      typescript: {
        method: 'client.projects.update',
        example:
          "import NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs({\n  apiKey: process.env['NIRVANA_LABS_API_KEY'], // This is the default and can be omitted\n});\n\nconst project = await client.projects.update('project_id');\n\nconsole.log(project.id);",
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/v1/projects/{project_id}',
    httpMethod: 'delete',
    summary: 'Delete Project',
    description: 'Delete a project',
    stainlessPath: '(resource) projects > (method) delete',
    qualified: 'client.projects.delete',
    params: ['project_id: string;'],
    markdown:
      "## delete\n\n`client.projects.delete(project_id: string): void`\n\n**delete** `/v1/projects/{project_id}`\n\nDelete a project\n\n### Parameters\n\n- `project_id: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\nawait client.projects.delete('project_id')\n```",
    perLanguage: {
      cli: {
        method: 'projects delete',
        example: "nirvana projects delete \\\n  --api-key 'My API Key' \\\n  --project-id project_id",
      },
      go: {
        method: 'client.Projects.Delete',
        example:
          'package main\n\nimport (\n\t"context"\n\n\t"github.com/nirvana-labs/nirvana-go"\n\t"github.com/nirvana-labs/nirvana-go/option"\n)\n\nfunc main() {\n\tclient := nirvana.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\terr := client.Projects.Delete(context.TODO(), "project_id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n}\n',
      },
      http: {
        example:
          'curl https://api.nirvanalabs.io/v1/projects/$PROJECT_ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $NIRVANA_LABS_API_KEY"',
      },
      typescript: {
        method: 'client.projects.delete',
        example:
          "import NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs({\n  apiKey: process.env['NIRVANA_LABS_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.projects.delete('project_id');",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/v1/projects',
    httpMethod: 'get',
    summary: 'List Projects',
    description: 'List all projects',
    stainlessPath: '(resource) projects > (method) list',
    qualified: 'client.projects.list',
    params: ['cursor?: string;', 'limit?: number;'],
    response:
      '{ id: string; created_at: string; name: string; resources: { blockchain: project_blockchain_resources; cloud: project_cloud_resources; }; tags: string[]; updated_at: string; }',
    markdown:
      "## list\n\n`client.projects.list(cursor?: string, limit?: number): { id: string; created_at: string; name: string; resources: project_resources; tags: string[]; updated_at: string; }`\n\n**get** `/v1/projects`\n\nList all projects\n\n### Parameters\n\n- `cursor?: string`\n  Pagination cursor returned by a previous request\n\n- `limit?: number`\n  Maximum number of items to return\n\n### Returns\n\n- `{ id: string; created_at: string; name: string; resources: { blockchain: project_blockchain_resources; cloud: project_cloud_resources; }; tags: string[]; updated_at: string; }`\n  Project response.\n\n  - `id: string`\n  - `created_at: string`\n  - `name: string`\n  - `resources: { blockchain: { rpc_nodes_dedicated: number; rpc_nodes_flex: number; }; cloud: { connect_connections: number; nks_clusters: number; nks_node_pools: number; vms: number; volumes: number; vpcs: number; }; }`\n  - `tags: string[]`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\n// Automatically fetches more pages as needed.\nfor await (const project of client.projects.list()) {\n  console.log(project);\n}\n```",
    perLanguage: {
      cli: {
        method: 'projects list',
        example: "nirvana projects list \\\n  --api-key 'My API Key'",
      },
      go: {
        method: 'client.Projects.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/nirvana-labs/nirvana-go"\n\t"github.com/nirvana-labs/nirvana-go/option"\n\t"github.com/nirvana-labs/nirvana-go/projects"\n)\n\nfunc main() {\n\tclient := nirvana.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpage, err := client.Projects.List(context.TODO(), projects.ProjectListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", page)\n}\n',
      },
      http: {
        example:
          'curl https://api.nirvanalabs.io/v1/projects \\\n    -H "Authorization: Bearer $NIRVANA_LABS_API_KEY"',
      },
      typescript: {
        method: 'client.projects.list',
        example:
          "import NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs({\n  apiKey: process.env['NIRVANA_LABS_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const project of client.projects.list()) {\n  console.log(project.id);\n}",
      },
    },
  },
  {
    name: 'get',
    endpoint: '/v1/regions/{name}',
    httpMethod: 'get',
    summary: 'Get Region',
    description: 'Get a region by name',
    stainlessPath: '(resource) regions > (method) get',
    qualified: 'client.regions.get',
    params: ['name: string;'],
    response:
      "{ availability: 'live' | 'preview' | 'maintenance' | 'sunset'; compute: { vms: boolean; }; name: string; networking: { connect: boolean; vpcs: boolean; }; nks: { clusters: boolean; }; storage: { abs: boolean; local_nvme: boolean; }; }",
    markdown:
      "## get\n\n`client.regions.get(name: string): { availability: region_availability; compute: object; name: string; networking: object; nks: object; storage: object; }`\n\n**get** `/v1/regions/{name}`\n\nGet a region by name\n\n### Parameters\n\n- `name: string`\n\n### Returns\n\n- `{ availability: 'live' | 'preview' | 'maintenance' | 'sunset'; compute: { vms: boolean; }; name: string; networking: { connect: boolean; vpcs: boolean; }; nks: { clusters: boolean; }; storage: { abs: boolean; local_nvme: boolean; }; }`\n  Region response with product availability.\n\n  - `availability: 'live' | 'preview' | 'maintenance' | 'sunset'`\n  - `compute: { vms: boolean; }`\n  - `name: string`\n  - `networking: { connect: boolean; vpcs: boolean; }`\n  - `nks: { clusters: boolean; }`\n  - `storage: { abs: boolean; local_nvme: boolean; }`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\nconst region = await client.regions.get('us-sva-2');\n\nconsole.log(region);\n```",
    perLanguage: {
      cli: {
        method: 'regions get',
        example: "nirvana regions get \\\n  --api-key 'My API Key' \\\n  --name us-sva-2",
      },
      go: {
        method: 'client.Regions.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/nirvana-labs/nirvana-go"\n\t"github.com/nirvana-labs/nirvana-go/option"\n)\n\nfunc main() {\n\tclient := nirvana.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tregion, err := client.Regions.Get(context.TODO(), "us-sva-2")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", region.Availability)\n}\n',
      },
      http: {
        example:
          'curl https://api.nirvanalabs.io/v1/regions/$NAME \\\n    -H "Authorization: Bearer $NIRVANA_LABS_API_KEY"',
      },
      typescript: {
        method: 'client.regions.get',
        example:
          "import NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs({\n  apiKey: process.env['NIRVANA_LABS_API_KEY'], // This is the default and can be omitted\n});\n\nconst region = await client.regions.get('us-sva-2');\n\nconsole.log(region.availability);",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/v1/regions',
    httpMethod: 'get',
    summary: 'List Regions',
    description: 'List all regions',
    stainlessPath: '(resource) regions > (method) list',
    qualified: 'client.regions.list',
    params: ['cursor?: string;', 'limit?: number;'],
    response:
      "{ availability: 'live' | 'preview' | 'maintenance' | 'sunset'; compute: { vms: boolean; }; name: string; networking: { connect: boolean; vpcs: boolean; }; nks: { clusters: boolean; }; storage: { abs: boolean; local_nvme: boolean; }; }",
    markdown:
      "## list\n\n`client.regions.list(cursor?: string, limit?: number): { availability: region_availability; compute: object; name: string; networking: object; nks: object; storage: object; }`\n\n**get** `/v1/regions`\n\nList all regions\n\n### Parameters\n\n- `cursor?: string`\n  Pagination cursor returned by a previous request\n\n- `limit?: number`\n  Maximum number of items to return\n\n### Returns\n\n- `{ availability: 'live' | 'preview' | 'maintenance' | 'sunset'; compute: { vms: boolean; }; name: string; networking: { connect: boolean; vpcs: boolean; }; nks: { clusters: boolean; }; storage: { abs: boolean; local_nvme: boolean; }; }`\n  Region response with product availability.\n\n  - `availability: 'live' | 'preview' | 'maintenance' | 'sunset'`\n  - `compute: { vms: boolean; }`\n  - `name: string`\n  - `networking: { connect: boolean; vpcs: boolean; }`\n  - `nks: { clusters: boolean; }`\n  - `storage: { abs: boolean; local_nvme: boolean; }`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\n// Automatically fetches more pages as needed.\nfor await (const region of client.regions.list()) {\n  console.log(region);\n}\n```",
    perLanguage: {
      cli: {
        method: 'regions list',
        example: "nirvana regions list \\\n  --api-key 'My API Key'",
      },
      go: {
        method: 'client.Regions.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/nirvana-labs/nirvana-go"\n\t"github.com/nirvana-labs/nirvana-go/option"\n\t"github.com/nirvana-labs/nirvana-go/regions"\n)\n\nfunc main() {\n\tclient := nirvana.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpage, err := client.Regions.List(context.TODO(), regions.RegionListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", page)\n}\n',
      },
      http: {
        example:
          'curl https://api.nirvanalabs.io/v1/regions \\\n    -H "Authorization: Bearer $NIRVANA_LABS_API_KEY"',
      },
      typescript: {
        method: 'client.regions.list',
        example:
          "import NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs({\n  apiKey: process.env['NIRVANA_LABS_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const region of client.regions.list()) {\n  console.log(region.availability);\n}",
      },
    },
  },
  {
    name: 'get',
    endpoint: '/v1/instance_types/{region}/{name}',
    httpMethod: 'get',
    summary: 'Get Instance Type',
    description: 'Get an instance type by region and name',
    stainlessPath: '(resource) instance_types > (method) get',
    qualified: 'client.instanceTypes.get',
    params: ["region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1';", 'name: string;'],
    response:
      "{ chipset: string; created_at: string; family: string; memory_gb: number; name: string; region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1'; series: string; updated_at: string; vcpu: number; }",
    markdown:
      "## get\n\n`client.instanceTypes.get(region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1', name: string): { chipset: string; created_at: string; family: string; memory_gb: number; name: string; region: region_name; series: string; updated_at: string; vcpu: number; }`\n\n**get** `/v1/instance_types/{region}/{name}`\n\nGet an instance type by region and name\n\n### Parameters\n\n- `region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1'`\n\n- `name: string`\n\n### Returns\n\n- `{ chipset: string; created_at: string; family: string; memory_gb: number; name: string; region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1'; series: string; updated_at: string; vcpu: number; }`\n  Instance type.\n\n  - `chipset: string`\n  - `created_at: string`\n  - `family: string`\n  - `memory_gb: number`\n  - `name: string`\n  - `region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1'`\n  - `series: string`\n  - `updated_at: string`\n  - `vcpu: number`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\nconst instanceType = await client.instanceTypes.get('n1-standard-8', { region: 'us-sva-2' });\n\nconsole.log(instanceType);\n```",
    perLanguage: {
      cli: {
        method: 'instance_types get',
        example:
          "nirvana instance-types get \\\n  --api-key 'My API Key' \\\n  --region us-sva-2 \\\n  --name n1-standard-8",
      },
      go: {
        method: 'client.InstanceTypes.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/nirvana-labs/nirvana-go"\n\t"github.com/nirvana-labs/nirvana-go/instance_types"\n\t"github.com/nirvana-labs/nirvana-go/option"\n)\n\nfunc main() {\n\tclient := nirvana.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tinstanceType, err := client.InstanceTypes.Get(\n\t\tcontext.TODO(),\n\t\tinstance_types.InstanceTypeGetParamsRegionUsSva2,\n\t\t"n1-standard-8",\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", instanceType.Chipset)\n}\n',
      },
      http: {
        example:
          'curl https://api.nirvanalabs.io/v1/instance_types/$REGION/$NAME \\\n    -H "Authorization: Bearer $NIRVANA_LABS_API_KEY"',
      },
      typescript: {
        method: 'client.instanceTypes.get',
        example:
          "import NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs({\n  apiKey: process.env['NIRVANA_LABS_API_KEY'], // This is the default and can be omitted\n});\n\nconst instanceType = await client.instanceTypes.get('n1-standard-8', { region: 'us-sva-2' });\n\nconsole.log(instanceType.chipset);",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/v1/instance_types',
    httpMethod: 'get',
    summary: 'List Instance Types',
    description: 'List instance types',
    stainlessPath: '(resource) instance_types > (method) list',
    qualified: 'client.instanceTypes.list',
    params: ['cursor?: string;', 'limit?: number;'],
    response:
      "{ chipset: string; created_at: string; family: string; memory_gb: number; name: string; region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1'; series: string; updated_at: string; vcpu: number; }",
    markdown:
      "## list\n\n`client.instanceTypes.list(cursor?: string, limit?: number): { chipset: string; created_at: string; family: string; memory_gb: number; name: string; region: region_name; series: string; updated_at: string; vcpu: number; }`\n\n**get** `/v1/instance_types`\n\nList instance types\n\n### Parameters\n\n- `cursor?: string`\n  Pagination cursor returned by a previous request\n\n- `limit?: number`\n  Maximum number of items to return\n\n### Returns\n\n- `{ chipset: string; created_at: string; family: string; memory_gb: number; name: string; region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1'; series: string; updated_at: string; vcpu: number; }`\n  Instance type.\n\n  - `chipset: string`\n  - `created_at: string`\n  - `family: string`\n  - `memory_gb: number`\n  - `name: string`\n  - `region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1'`\n  - `series: string`\n  - `updated_at: string`\n  - `vcpu: number`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\n// Automatically fetches more pages as needed.\nfor await (const instanceType of client.instanceTypes.list()) {\n  console.log(instanceType);\n}\n```",
    perLanguage: {
      cli: {
        method: 'instance_types list',
        example: "nirvana instance-types list \\\n  --api-key 'My API Key'",
      },
      go: {
        method: 'client.InstanceTypes.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/nirvana-labs/nirvana-go"\n\t"github.com/nirvana-labs/nirvana-go/instance_types"\n\t"github.com/nirvana-labs/nirvana-go/option"\n)\n\nfunc main() {\n\tclient := nirvana.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpage, err := client.InstanceTypes.List(context.TODO(), instance_types.InstanceTypeListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", page)\n}\n',
      },
      http: {
        example:
          'curl https://api.nirvanalabs.io/v1/instance_types \\\n    -H "Authorization: Bearer $NIRVANA_LABS_API_KEY"',
      },
      typescript: {
        method: 'client.instanceTypes.list',
        example:
          "import NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs({\n  apiKey: process.env['NIRVANA_LABS_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const instanceType of client.instanceTypes.list()) {\n  console.log(instanceType.chipset);\n}",
      },
    },
  },
  {
    name: 'create',
    endpoint: '/v1/compute/vms',
    httpMethod: 'post',
    summary: 'Create VM',
    description: 'Create a VM',
    stainlessPath: '(resource) compute.vms > (method) create',
    qualified: 'client.compute.vms.create',
    params: [
      "boot_volume: { size: number; type: 'nvme' | 'abs'; tags?: string[]; };",
      'cpu_config: { vcpu: number; };',
      'memory_config: { size: number; };',
      'name: string;',
      'os_image_name: string;',
      'project_id: string;',
      'public_ip_enabled: boolean;',
      "region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1';",
      'ssh_key: { public_key: string; };',
      'subnet_id: string;',
      "data_volumes?: { name: string; size: number; type: 'nvme' | 'abs'; tags?: string[]; }[];",
      'tags?: string[];',
    ],
    response:
      "{ id: string; created_at: string; kind: 'vm' | 'volume' | 'vpc' | 'firewall_rule' | 'nks_cluster' | 'nks_node_pool'; project_id: string; resource_id: string; status: 'pending' | 'running' | 'done' | 'failed' | 'unknown'; type: 'create' | 'update' | 'delete' | 'restart'; updated_at: string; }",
    markdown:
      "## create\n\n`client.compute.vms.create(boot_volume: { size: number; type: 'nvme' | 'abs'; tags?: string[]; }, cpu_config: { vcpu: number; }, memory_config: { size: number; }, name: string, os_image_name: string, project_id: string, public_ip_enabled: boolean, region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1', ssh_key: { public_key: string; }, subnet_id: string, data_volumes?: { name: string; size: number; type: 'nvme' | 'abs'; tags?: string[]; }[], tags?: string[]): { id: string; created_at: string; kind: operation_kind; project_id: string; resource_id: string; status: operation_status; type: operation_type; updated_at: string; }`\n\n**post** `/v1/compute/vms`\n\nCreate a VM\n\n### Parameters\n\n- `boot_volume: { size: number; type: 'nvme' | 'abs'; tags?: string[]; }`\n  Boot volume for the VM.\n  - `size: number`\n    Size of the Volume in GB.\n  - `type: 'nvme' | 'abs'`\n    Type of the Volume.\n  - `tags?: string[]`\n    Tags to attach to the Volume.\n\n- `cpu_config: { vcpu: number; }`\n  CPU configuration for the VM.\n  - `vcpu: number`\n    Number of virtual CPUs.\n\n- `memory_config: { size: number; }`\n  Memory configuration for the VM.\n  - `size: number`\n    Size of the memory in GB.\n\n- `name: string`\n  Name of the VM.\n\n- `os_image_name: string`\n  Name of the OS Image to use for the VM.\n\n- `project_id: string`\n  Project ID to create the VM in.\n\n- `public_ip_enabled: boolean`\n  Whether to enable public IP for the VM.\n\n- `region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1'`\n  Region the resource is in.\n\n- `ssh_key: { public_key: string; }`\n  Public SSH key configuration for the VM.\n  - `public_key: string`\n    Public key to and and use to access the VM.\n\n- `subnet_id: string`\n  ID of the subnet to use for the VM.\n\n- `data_volumes?: { name: string; size: number; type: 'nvme' | 'abs'; tags?: string[]; }[]`\n  Data volumes for the VM.\n\n- `tags?: string[]`\n  Tags to attach to the VM.\n\n### Returns\n\n- `{ id: string; created_at: string; kind: 'vm' | 'volume' | 'vpc' | 'firewall_rule' | 'nks_cluster' | 'nks_node_pool'; project_id: string; resource_id: string; status: 'pending' | 'running' | 'done' | 'failed' | 'unknown'; type: 'create' | 'update' | 'delete' | 'restart'; updated_at: string; }`\n  Operation details.\n\n  - `id: string`\n  - `created_at: string`\n  - `kind: 'vm' | 'volume' | 'vpc' | 'firewall_rule' | 'nks_cluster' | 'nks_node_pool'`\n  - `project_id: string`\n  - `resource_id: string`\n  - `status: 'pending' | 'running' | 'done' | 'failed' | 'unknown'`\n  - `type: 'create' | 'update' | 'delete' | 'restart'`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\nconst operation = await client.compute.vms.create({\n  boot_volume: { size: 100, type: 'abs' },\n  cpu_config: { vcpu: 2 },\n  memory_config: { size: 2 },\n  name: 'my-vm',\n  os_image_name: 'ubuntu-noble-2025-10-01',\n  project_id: '123e4567-e89b-12d3-a456-426614174000',\n  public_ip_enabled: true,\n  region: 'us-sva-2',\n  ssh_key: { public_key: 'ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIDBIASkmwNiLcdlW6927Zjt1Hf7Kw/PpEZ4Zm+wU9wn2' },\n  subnet_id: '123e4567-e89b-12d3-a456-426614174000',\n});\n\nconsole.log(operation);\n```",
    perLanguage: {
      cli: {
        method: 'vms create',
        example:
          "nirvana compute:vms create \\\n  --api-key 'My API Key' \\\n  --boot-volume '{size: 100, type: abs}' \\\n  --cpu-config '{vcpu: 2}' \\\n  --memory-config '{size: 2}' \\\n  --name my-vm \\\n  --os-image-name ubuntu-noble-2025-10-01 \\\n  --project-id 123e4567-e89b-12d3-a456-426614174000 \\\n  --public-ip-enabled \\\n  --region us-sva-2 \\\n  --ssh-key '{public_key: ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIDBIASkmwNiLcdlW6927Zjt1Hf7Kw/PpEZ4Zm+wU9wn2}' \\\n  --subnet-id 123e4567-e89b-12d3-a456-426614174000",
      },
      go: {
        method: 'client.Compute.VMs.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/nirvana-labs/nirvana-go"\n\t"github.com/nirvana-labs/nirvana-go/compute"\n\t"github.com/nirvana-labs/nirvana-go/option"\n\t"github.com/nirvana-labs/nirvana-go/shared"\n)\n\nfunc main() {\n\tclient := nirvana.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\toperation, err := client.Compute.VMs.New(context.TODO(), compute.VMNewParams{\n\t\tBootVolume: compute.VMNewParamsBootVolume{\n\t\t\tSize: 100,\n\t\t\tType: compute.VolumeTypeABS,\n\t\t},\n\t\tCPUConfig: compute.CPUConfigRequestParam{\n\t\t\tVcpu: 2,\n\t\t},\n\t\tMemoryConfig: compute.MemoryConfigRequestParam{\n\t\t\tSize: 2,\n\t\t},\n\t\tName:            "my-vm",\n\t\tOSImageName:     "ubuntu-noble-2025-10-01",\n\t\tProjectID:       "123e4567-e89b-12d3-a456-426614174000",\n\t\tPublicIPEnabled: true,\n\t\tRegion:          shared.RegionNameUsSva2,\n\t\tSSHKey: compute.SSHKeyRequestParam{\n\t\t\tPublicKey: "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIDBIASkmwNiLcdlW6927Zjt1Hf7Kw/PpEZ4Zm+wU9wn2",\n\t\t},\n\t\tSubnetID: "123e4567-e89b-12d3-a456-426614174000",\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", operation.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.nirvanalabs.io/v1/compute/vms \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $NIRVANA_LABS_API_KEY" \\\n    -d \'{\n          "boot_volume": {\n            "size": 100,\n            "type": "abs"\n          },\n          "cpu_config": {\n            "vcpu": 2\n          },\n          "memory_config": {\n            "size": 2\n          },\n          "name": "my-vm",\n          "os_image_name": "ubuntu-noble-2025-10-01",\n          "project_id": "123e4567-e89b-12d3-a456-426614174000",\n          "public_ip_enabled": true,\n          "region": "us-sva-2",\n          "ssh_key": {\n            "public_key": "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIDBIASkmwNiLcdlW6927Zjt1Hf7Kw/PpEZ4Zm+wU9wn2"\n          },\n          "subnet_id": "123e4567-e89b-12d3-a456-426614174000",\n          "tags": [\n            "production",\n            "ethereum"\n          ]\n        }\'',
      },
      typescript: {
        method: 'client.compute.vms.create',
        example:
          "import NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs({\n  apiKey: process.env['NIRVANA_LABS_API_KEY'], // This is the default and can be omitted\n});\n\nconst operation = await client.compute.vms.create({\n  boot_volume: { size: 100, type: 'abs' },\n  cpu_config: { vcpu: 2 },\n  memory_config: { size: 2 },\n  name: 'my-vm',\n  os_image_name: 'ubuntu-noble-2025-10-01',\n  project_id: '123e4567-e89b-12d3-a456-426614174000',\n  public_ip_enabled: true,\n  region: 'us-sva-2',\n  ssh_key: {\n    public_key: 'ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIDBIASkmwNiLcdlW6927Zjt1Hf7Kw/PpEZ4Zm+wU9wn2',\n  },\n  subnet_id: '123e4567-e89b-12d3-a456-426614174000',\n});\n\nconsole.log(operation.id);",
      },
    },
  },
  {
    name: 'get',
    endpoint: '/v1/compute/vms/{vm_id}',
    httpMethod: 'get',
    summary: 'Get VM Details',
    description: 'Get details about a VM',
    stainlessPath: '(resource) compute.vms > (method) get',
    qualified: 'client.compute.vms.get',
    params: ['vm_id: string;'],
    response:
      "{ id: string; boot_volume_id: string; cpu_config: { vcpu: number; }; created_at: string; data_volume_ids: string[]; memory_config: { size: number; }; name: string; private_ip: string; project_id: string; public_ip: string; public_ip_enabled: boolean; region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1'; status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'; subnet_id: string; tags: string[]; updated_at: string; vpc_id: string; vpc_name: string; }",
    markdown:
      "## get\n\n`client.compute.vms.get(vm_id: string): { id: string; boot_volume_id: string; cpu_config: cpu_config; created_at: string; data_volume_ids: string[]; memory_config: memory_config; name: string; private_ip: string; project_id: string; public_ip: string; public_ip_enabled: boolean; region: region_name; status: resource_status; subnet_id: string; tags: string[]; updated_at: string; vpc_id: string; vpc_name: string; }`\n\n**get** `/v1/compute/vms/{vm_id}`\n\nGet details about a VM\n\n### Parameters\n\n- `vm_id: string`\n\n### Returns\n\n- `{ id: string; boot_volume_id: string; cpu_config: { vcpu: number; }; created_at: string; data_volume_ids: string[]; memory_config: { size: number; }; name: string; private_ip: string; project_id: string; public_ip: string; public_ip_enabled: boolean; region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1'; status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'; subnet_id: string; tags: string[]; updated_at: string; vpc_id: string; vpc_name: string; }`\n  VM details.\n\n  - `id: string`\n  - `boot_volume_id: string`\n  - `cpu_config: { vcpu: number; }`\n  - `created_at: string`\n  - `data_volume_ids: string[]`\n  - `memory_config: { size: number; }`\n  - `name: string`\n  - `private_ip: string`\n  - `project_id: string`\n  - `public_ip: string`\n  - `public_ip_enabled: boolean`\n  - `region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1'`\n  - `status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'`\n  - `subnet_id: string`\n  - `tags: string[]`\n  - `updated_at: string`\n  - `vpc_id: string`\n  - `vpc_name: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\nconst vm = await client.compute.vms.get('vm_id');\n\nconsole.log(vm);\n```",
    perLanguage: {
      cli: {
        method: 'vms get',
        example: "nirvana compute:vms get \\\n  --api-key 'My API Key' \\\n  --vm-id vm_id",
      },
      go: {
        method: 'client.Compute.VMs.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/nirvana-labs/nirvana-go"\n\t"github.com/nirvana-labs/nirvana-go/option"\n)\n\nfunc main() {\n\tclient := nirvana.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tvm, err := client.Compute.VMs.Get(context.TODO(), "vm_id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", vm.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.nirvanalabs.io/v1/compute/vms/$VM_ID \\\n    -H "Authorization: Bearer $NIRVANA_LABS_API_KEY"',
      },
      typescript: {
        method: 'client.compute.vms.get',
        example:
          "import NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs({\n  apiKey: process.env['NIRVANA_LABS_API_KEY'], // This is the default and can be omitted\n});\n\nconst vm = await client.compute.vms.get('vm_id');\n\nconsole.log(vm.id);",
      },
    },
  },
  {
    name: 'update',
    endpoint: '/v1/compute/vms/{vm_id}',
    httpMethod: 'patch',
    summary: 'Update VM',
    description: 'Update a VM',
    stainlessPath: '(resource) compute.vms > (method) update',
    qualified: 'client.compute.vms.update',
    params: [
      'vm_id: string;',
      'cpu_config?: { vcpu: number; };',
      'memory_config?: { size: number; };',
      'name?: string;',
      'public_ip_enabled?: boolean;',
      'tags?: string[];',
    ],
    response:
      "{ id: string; created_at: string; kind: 'vm' | 'volume' | 'vpc' | 'firewall_rule' | 'nks_cluster' | 'nks_node_pool'; project_id: string; resource_id: string; status: 'pending' | 'running' | 'done' | 'failed' | 'unknown'; type: 'create' | 'update' | 'delete' | 'restart'; updated_at: string; }",
    markdown:
      "## update\n\n`client.compute.vms.update(vm_id: string, cpu_config?: { vcpu: number; }, memory_config?: { size: number; }, name?: string, public_ip_enabled?: boolean, tags?: string[]): { id: string; created_at: string; kind: operation_kind; project_id: string; resource_id: string; status: operation_status; type: operation_type; updated_at: string; }`\n\n**patch** `/v1/compute/vms/{vm_id}`\n\nUpdate a VM\n\n### Parameters\n\n- `vm_id: string`\n\n- `cpu_config?: { vcpu: number; }`\n  CPU configuration for the VM.\n  - `vcpu: number`\n    Number of virtual CPUs.\n\n- `memory_config?: { size: number; }`\n  Memory configuration for the VM.\n  - `size: number`\n    Size of the memory in GB.\n\n- `name?: string`\n  Name of the VM.\n\n- `public_ip_enabled?: boolean`\n  Whether to enable public IP for the VM.\n\n- `tags?: string[]`\n  Tags to attach to the VM.\n\n### Returns\n\n- `{ id: string; created_at: string; kind: 'vm' | 'volume' | 'vpc' | 'firewall_rule' | 'nks_cluster' | 'nks_node_pool'; project_id: string; resource_id: string; status: 'pending' | 'running' | 'done' | 'failed' | 'unknown'; type: 'create' | 'update' | 'delete' | 'restart'; updated_at: string; }`\n  Operation details.\n\n  - `id: string`\n  - `created_at: string`\n  - `kind: 'vm' | 'volume' | 'vpc' | 'firewall_rule' | 'nks_cluster' | 'nks_node_pool'`\n  - `project_id: string`\n  - `resource_id: string`\n  - `status: 'pending' | 'running' | 'done' | 'failed' | 'unknown'`\n  - `type: 'create' | 'update' | 'delete' | 'restart'`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\nconst operation = await client.compute.vms.update('vm_id');\n\nconsole.log(operation);\n```",
    perLanguage: {
      cli: {
        method: 'vms update',
        example: "nirvana compute:vms update \\\n  --api-key 'My API Key' \\\n  --vm-id vm_id",
      },
      go: {
        method: 'client.Compute.VMs.Update',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/nirvana-labs/nirvana-go"\n\t"github.com/nirvana-labs/nirvana-go/compute"\n\t"github.com/nirvana-labs/nirvana-go/option"\n)\n\nfunc main() {\n\tclient := nirvana.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\toperation, err := client.Compute.VMs.Update(\n\t\tcontext.TODO(),\n\t\t"vm_id",\n\t\tcompute.VMUpdateParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", operation.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.nirvanalabs.io/v1/compute/vms/$VM_ID \\\n    -X PATCH \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $NIRVANA_LABS_API_KEY" \\\n    -d \'{\n          "name": "my-vm",\n          "public_ip_enabled": true,\n          "tags": [\n            "production",\n            "ethereum"\n          ]\n        }\'',
      },
      typescript: {
        method: 'client.compute.vms.update',
        example:
          "import NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs({\n  apiKey: process.env['NIRVANA_LABS_API_KEY'], // This is the default and can be omitted\n});\n\nconst operation = await client.compute.vms.update('vm_id');\n\nconsole.log(operation.id);",
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/v1/compute/vms/{vm_id}',
    httpMethod: 'delete',
    summary: 'Delete VM',
    description: 'Delete a VM',
    stainlessPath: '(resource) compute.vms > (method) delete',
    qualified: 'client.compute.vms.delete',
    params: ['vm_id: string;'],
    response:
      "{ id: string; created_at: string; kind: 'vm' | 'volume' | 'vpc' | 'firewall_rule' | 'nks_cluster' | 'nks_node_pool'; project_id: string; resource_id: string; status: 'pending' | 'running' | 'done' | 'failed' | 'unknown'; type: 'create' | 'update' | 'delete' | 'restart'; updated_at: string; }",
    markdown:
      "## delete\n\n`client.compute.vms.delete(vm_id: string): { id: string; created_at: string; kind: operation_kind; project_id: string; resource_id: string; status: operation_status; type: operation_type; updated_at: string; }`\n\n**delete** `/v1/compute/vms/{vm_id}`\n\nDelete a VM\n\n### Parameters\n\n- `vm_id: string`\n\n### Returns\n\n- `{ id: string; created_at: string; kind: 'vm' | 'volume' | 'vpc' | 'firewall_rule' | 'nks_cluster' | 'nks_node_pool'; project_id: string; resource_id: string; status: 'pending' | 'running' | 'done' | 'failed' | 'unknown'; type: 'create' | 'update' | 'delete' | 'restart'; updated_at: string; }`\n  Operation details.\n\n  - `id: string`\n  - `created_at: string`\n  - `kind: 'vm' | 'volume' | 'vpc' | 'firewall_rule' | 'nks_cluster' | 'nks_node_pool'`\n  - `project_id: string`\n  - `resource_id: string`\n  - `status: 'pending' | 'running' | 'done' | 'failed' | 'unknown'`\n  - `type: 'create' | 'update' | 'delete' | 'restart'`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\nconst operation = await client.compute.vms.delete('vm_id');\n\nconsole.log(operation);\n```",
    perLanguage: {
      cli: {
        method: 'vms delete',
        example: "nirvana compute:vms delete \\\n  --api-key 'My API Key' \\\n  --vm-id vm_id",
      },
      go: {
        method: 'client.Compute.VMs.Delete',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/nirvana-labs/nirvana-go"\n\t"github.com/nirvana-labs/nirvana-go/option"\n)\n\nfunc main() {\n\tclient := nirvana.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\toperation, err := client.Compute.VMs.Delete(context.TODO(), "vm_id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", operation.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.nirvanalabs.io/v1/compute/vms/$VM_ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $NIRVANA_LABS_API_KEY"',
      },
      typescript: {
        method: 'client.compute.vms.delete',
        example:
          "import NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs({\n  apiKey: process.env['NIRVANA_LABS_API_KEY'], // This is the default and can be omitted\n});\n\nconst operation = await client.compute.vms.delete('vm_id');\n\nconsole.log(operation.id);",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/v1/compute/vms',
    httpMethod: 'get',
    summary: 'List VMs',
    description: 'List all VMs',
    stainlessPath: '(resource) compute.vms > (method) list',
    qualified: 'client.compute.vms.list',
    params: ['project_id: string;', 'cursor?: string;', 'limit?: number;'],
    response:
      "{ id: string; boot_volume_id: string; cpu_config: { vcpu: number; }; created_at: string; data_volume_ids: string[]; memory_config: { size: number; }; name: string; private_ip: string; project_id: string; public_ip: string; public_ip_enabled: boolean; region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1'; status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'; subnet_id: string; tags: string[]; updated_at: string; vpc_id: string; vpc_name: string; }",
    markdown:
      "## list\n\n`client.compute.vms.list(project_id: string, cursor?: string, limit?: number): { id: string; boot_volume_id: string; cpu_config: cpu_config; created_at: string; data_volume_ids: string[]; memory_config: memory_config; name: string; private_ip: string; project_id: string; public_ip: string; public_ip_enabled: boolean; region: region_name; status: resource_status; subnet_id: string; tags: string[]; updated_at: string; vpc_id: string; vpc_name: string; }`\n\n**get** `/v1/compute/vms`\n\nList all VMs\n\n### Parameters\n\n- `project_id: string`\n  Project ID of resources to request\n\n- `cursor?: string`\n  Pagination cursor returned by a previous request\n\n- `limit?: number`\n  Maximum number of items to return\n\n### Returns\n\n- `{ id: string; boot_volume_id: string; cpu_config: { vcpu: number; }; created_at: string; data_volume_ids: string[]; memory_config: { size: number; }; name: string; private_ip: string; project_id: string; public_ip: string; public_ip_enabled: boolean; region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1'; status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'; subnet_id: string; tags: string[]; updated_at: string; vpc_id: string; vpc_name: string; }`\n  VM details.\n\n  - `id: string`\n  - `boot_volume_id: string`\n  - `cpu_config: { vcpu: number; }`\n  - `created_at: string`\n  - `data_volume_ids: string[]`\n  - `memory_config: { size: number; }`\n  - `name: string`\n  - `private_ip: string`\n  - `project_id: string`\n  - `public_ip: string`\n  - `public_ip_enabled: boolean`\n  - `region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1'`\n  - `status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'`\n  - `subnet_id: string`\n  - `tags: string[]`\n  - `updated_at: string`\n  - `vpc_id: string`\n  - `vpc_name: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\n// Automatically fetches more pages as needed.\nfor await (const vm of client.compute.vms.list({ project_id: 'project_id' })) {\n  console.log(vm);\n}\n```",
    perLanguage: {
      cli: {
        method: 'vms list',
        example: "nirvana compute:vms list \\\n  --api-key 'My API Key' \\\n  --project-id project_id",
      },
      go: {
        method: 'client.Compute.VMs.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/nirvana-labs/nirvana-go"\n\t"github.com/nirvana-labs/nirvana-go/compute"\n\t"github.com/nirvana-labs/nirvana-go/option"\n)\n\nfunc main() {\n\tclient := nirvana.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpage, err := client.Compute.VMs.List(context.TODO(), compute.VMListParams{\n\t\tProjectID: "project_id",\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", page)\n}\n',
      },
      http: {
        example:
          'curl https://api.nirvanalabs.io/v1/compute/vms \\\n    -H "Authorization: Bearer $NIRVANA_LABS_API_KEY"',
      },
      typescript: {
        method: 'client.compute.vms.list',
        example:
          "import NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs({\n  apiKey: process.env['NIRVANA_LABS_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const vm of client.compute.vms.list({ project_id: 'project_id' })) {\n  console.log(vm.id);\n}",
      },
    },
  },
  {
    name: 'restart',
    endpoint: '/v1/compute/vms/{vm_id}/restart',
    httpMethod: 'post',
    summary: 'Restart VM',
    description: 'Restart a VM',
    stainlessPath: '(resource) compute.vms > (method) restart',
    qualified: 'client.compute.vms.restart',
    params: ['vm_id: string;'],
    response:
      "{ id: string; created_at: string; kind: 'vm' | 'volume' | 'vpc' | 'firewall_rule' | 'nks_cluster' | 'nks_node_pool'; project_id: string; resource_id: string; status: 'pending' | 'running' | 'done' | 'failed' | 'unknown'; type: 'create' | 'update' | 'delete' | 'restart'; updated_at: string; }",
    markdown:
      "## restart\n\n`client.compute.vms.restart(vm_id: string): { id: string; created_at: string; kind: operation_kind; project_id: string; resource_id: string; status: operation_status; type: operation_type; updated_at: string; }`\n\n**post** `/v1/compute/vms/{vm_id}/restart`\n\nRestart a VM\n\n### Parameters\n\n- `vm_id: string`\n\n### Returns\n\n- `{ id: string; created_at: string; kind: 'vm' | 'volume' | 'vpc' | 'firewall_rule' | 'nks_cluster' | 'nks_node_pool'; project_id: string; resource_id: string; status: 'pending' | 'running' | 'done' | 'failed' | 'unknown'; type: 'create' | 'update' | 'delete' | 'restart'; updated_at: string; }`\n  Operation details.\n\n  - `id: string`\n  - `created_at: string`\n  - `kind: 'vm' | 'volume' | 'vpc' | 'firewall_rule' | 'nks_cluster' | 'nks_node_pool'`\n  - `project_id: string`\n  - `resource_id: string`\n  - `status: 'pending' | 'running' | 'done' | 'failed' | 'unknown'`\n  - `type: 'create' | 'update' | 'delete' | 'restart'`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\nconst operation = await client.compute.vms.restart('vm_id');\n\nconsole.log(operation);\n```",
    perLanguage: {
      cli: {
        method: 'vms restart',
        example: "nirvana compute:vms restart \\\n  --api-key 'My API Key' \\\n  --vm-id vm_id",
      },
      go: {
        method: 'client.Compute.VMs.Restart',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/nirvana-labs/nirvana-go"\n\t"github.com/nirvana-labs/nirvana-go/option"\n)\n\nfunc main() {\n\tclient := nirvana.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\toperation, err := client.Compute.VMs.Restart(context.TODO(), "vm_id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", operation.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.nirvanalabs.io/v1/compute/vms/$VM_ID/restart \\\n    -X POST \\\n    -H "Authorization: Bearer $NIRVANA_LABS_API_KEY"',
      },
      typescript: {
        method: 'client.compute.vms.restart',
        example:
          "import NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs({\n  apiKey: process.env['NIRVANA_LABS_API_KEY'], // This is the default and can be omitted\n});\n\nconst operation = await client.compute.vms.restart('vm_id');\n\nconsole.log(operation.id);",
      },
    },
  },
  {
    name: 'create',
    endpoint: '/v1/compute/vms/availability',
    httpMethod: 'post',
    summary: 'Check VM Create Availability',
    description: 'Check VM Create Availability',
    stainlessPath: '(resource) compute.vms.availability > (method) create',
    qualified: 'client.compute.vms.availability.create',
    params: [
      "boot_volume: { size: number; type: 'nvme' | 'abs'; tags?: string[]; };",
      'cpu_config: { vcpu: number; };',
      'memory_config: { size: number; };',
      'name: string;',
      'os_image_name: string;',
      'project_id: string;',
      'public_ip_enabled: boolean;',
      "region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1';",
      'ssh_key: { public_key: string; };',
      'subnet_id: string;',
      "data_volumes?: { name: string; size: number; type: 'nvme' | 'abs'; tags?: string[]; }[];",
      'tags?: string[];',
    ],
    markdown:
      "## create\n\n`client.compute.vms.availability.create(boot_volume: { size: number; type: 'nvme' | 'abs'; tags?: string[]; }, cpu_config: { vcpu: number; }, memory_config: { size: number; }, name: string, os_image_name: string, project_id: string, public_ip_enabled: boolean, region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1', ssh_key: { public_key: string; }, subnet_id: string, data_volumes?: { name: string; size: number; type: 'nvme' | 'abs'; tags?: string[]; }[], tags?: string[]): void`\n\n**post** `/v1/compute/vms/availability`\n\nCheck VM Create Availability\n\n### Parameters\n\n- `boot_volume: { size: number; type: 'nvme' | 'abs'; tags?: string[]; }`\n  Boot volume for the VM.\n  - `size: number`\n    Size of the Volume in GB.\n  - `type: 'nvme' | 'abs'`\n    Type of the Volume.\n  - `tags?: string[]`\n    Tags to attach to the Volume.\n\n- `cpu_config: { vcpu: number; }`\n  CPU configuration for the VM.\n  - `vcpu: number`\n    Number of virtual CPUs.\n\n- `memory_config: { size: number; }`\n  Memory configuration for the VM.\n  - `size: number`\n    Size of the memory in GB.\n\n- `name: string`\n  Name of the VM.\n\n- `os_image_name: string`\n  Name of the OS Image to use for the VM.\n\n- `project_id: string`\n  Project ID to create the VM in.\n\n- `public_ip_enabled: boolean`\n  Whether to enable public IP for the VM.\n\n- `region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1'`\n  Region the resource is in.\n\n- `ssh_key: { public_key: string; }`\n  Public SSH key configuration for the VM.\n  - `public_key: string`\n    Public key to and and use to access the VM.\n\n- `subnet_id: string`\n  ID of the subnet to use for the VM.\n\n- `data_volumes?: { name: string; size: number; type: 'nvme' | 'abs'; tags?: string[]; }[]`\n  Data volumes for the VM.\n\n- `tags?: string[]`\n  Tags to attach to the VM.\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\nawait client.compute.vms.availability.create({\n  boot_volume: { size: 100, type: 'abs' },\n  cpu_config: { vcpu: 2 },\n  memory_config: { size: 2 },\n  name: 'my-vm',\n  os_image_name: 'ubuntu-noble-2025-10-01',\n  project_id: '123e4567-e89b-12d3-a456-426614174000',\n  public_ip_enabled: true,\n  region: 'us-sva-2',\n  ssh_key: { public_key: 'ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIDBIASkmwNiLcdlW6927Zjt1Hf7Kw/PpEZ4Zm+wU9wn2' },\n  subnet_id: '123e4567-e89b-12d3-a456-426614174000',\n})\n```",
    perLanguage: {
      cli: {
        method: 'availability create',
        example:
          "nirvana compute:vms:availability create \\\n  --api-key 'My API Key' \\\n  --boot-volume '{size: 100, type: abs}' \\\n  --cpu-config '{vcpu: 2}' \\\n  --memory-config '{size: 2}' \\\n  --name my-vm \\\n  --os-image-name ubuntu-noble-2025-10-01 \\\n  --project-id 123e4567-e89b-12d3-a456-426614174000 \\\n  --public-ip-enabled \\\n  --region us-sva-2 \\\n  --ssh-key '{public_key: ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIDBIASkmwNiLcdlW6927Zjt1Hf7Kw/PpEZ4Zm+wU9wn2}' \\\n  --subnet-id 123e4567-e89b-12d3-a456-426614174000",
      },
      go: {
        method: 'client.Compute.VMs.Availability.New',
        example:
          'package main\n\nimport (\n\t"context"\n\n\t"github.com/nirvana-labs/nirvana-go"\n\t"github.com/nirvana-labs/nirvana-go/compute"\n\t"github.com/nirvana-labs/nirvana-go/option"\n\t"github.com/nirvana-labs/nirvana-go/shared"\n)\n\nfunc main() {\n\tclient := nirvana.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\terr := client.Compute.VMs.Availability.New(context.TODO(), compute.VMAvailabilityNewParams{\n\t\tBootVolume: compute.VMAvailabilityNewParamsBootVolume{\n\t\t\tSize: 100,\n\t\t\tType: compute.VolumeTypeABS,\n\t\t},\n\t\tCPUConfig: compute.CPUConfigRequestParam{\n\t\t\tVcpu: 2,\n\t\t},\n\t\tMemoryConfig: compute.MemoryConfigRequestParam{\n\t\t\tSize: 2,\n\t\t},\n\t\tName:            "my-vm",\n\t\tOSImageName:     "ubuntu-noble-2025-10-01",\n\t\tProjectID:       "123e4567-e89b-12d3-a456-426614174000",\n\t\tPublicIPEnabled: true,\n\t\tRegion:          shared.RegionNameUsSva2,\n\t\tSSHKey: compute.SSHKeyRequestParam{\n\t\t\tPublicKey: "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIDBIASkmwNiLcdlW6927Zjt1Hf7Kw/PpEZ4Zm+wU9wn2",\n\t\t},\n\t\tSubnetID: "123e4567-e89b-12d3-a456-426614174000",\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n}\n',
      },
      http: {
        example:
          'curl https://api.nirvanalabs.io/v1/compute/vms/availability \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $NIRVANA_LABS_API_KEY" \\\n    -d \'{\n          "boot_volume": {\n            "size": 100,\n            "type": "abs"\n          },\n          "cpu_config": {\n            "vcpu": 2\n          },\n          "memory_config": {\n            "size": 2\n          },\n          "name": "my-vm",\n          "os_image_name": "ubuntu-noble-2025-10-01",\n          "project_id": "123e4567-e89b-12d3-a456-426614174000",\n          "public_ip_enabled": true,\n          "region": "us-sva-2",\n          "ssh_key": {\n            "public_key": "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIDBIASkmwNiLcdlW6927Zjt1Hf7Kw/PpEZ4Zm+wU9wn2"\n          },\n          "subnet_id": "123e4567-e89b-12d3-a456-426614174000",\n          "tags": [\n            "production",\n            "ethereum"\n          ]\n        }\'',
      },
      typescript: {
        method: 'client.compute.vms.availability.create',
        example:
          "import NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs({\n  apiKey: process.env['NIRVANA_LABS_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.compute.vms.availability.create({\n  boot_volume: { size: 100, type: 'abs' },\n  cpu_config: { vcpu: 2 },\n  memory_config: { size: 2 },\n  name: 'my-vm',\n  os_image_name: 'ubuntu-noble-2025-10-01',\n  project_id: '123e4567-e89b-12d3-a456-426614174000',\n  public_ip_enabled: true,\n  region: 'us-sva-2',\n  ssh_key: {\n    public_key: 'ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIDBIASkmwNiLcdlW6927Zjt1Hf7Kw/PpEZ4Zm+wU9wn2',\n  },\n  subnet_id: '123e4567-e89b-12d3-a456-426614174000',\n});",
      },
    },
  },
  {
    name: 'update',
    endpoint: '/v1/compute/vms/{vm_id}/availability',
    httpMethod: 'patch',
    summary: 'Check VM Update Availability',
    description: 'Check VM Update Availability',
    stainlessPath: '(resource) compute.vms.availability > (method) update',
    qualified: 'client.compute.vms.availability.update',
    params: [
      'vm_id: string;',
      'cpu_config?: { vcpu: number; };',
      'memory_config?: { size: number; };',
      'name?: string;',
      'public_ip_enabled?: boolean;',
      'tags?: string[];',
    ],
    markdown:
      "## update\n\n`client.compute.vms.availability.update(vm_id: string, cpu_config?: { vcpu: number; }, memory_config?: { size: number; }, name?: string, public_ip_enabled?: boolean, tags?: string[]): void`\n\n**patch** `/v1/compute/vms/{vm_id}/availability`\n\nCheck VM Update Availability\n\n### Parameters\n\n- `vm_id: string`\n\n- `cpu_config?: { vcpu: number; }`\n  CPU configuration for the VM.\n  - `vcpu: number`\n    Number of virtual CPUs.\n\n- `memory_config?: { size: number; }`\n  Memory configuration for the VM.\n  - `size: number`\n    Size of the memory in GB.\n\n- `name?: string`\n  Name of the VM.\n\n- `public_ip_enabled?: boolean`\n  Whether to enable public IP for the VM.\n\n- `tags?: string[]`\n  Tags to attach to the VM.\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\nawait client.compute.vms.availability.update('vm_id')\n```",
    perLanguage: {
      cli: {
        method: 'availability update',
        example: "nirvana compute:vms:availability update \\\n  --api-key 'My API Key' \\\n  --vm-id vm_id",
      },
      go: {
        method: 'client.Compute.VMs.Availability.Update',
        example:
          'package main\n\nimport (\n\t"context"\n\n\t"github.com/nirvana-labs/nirvana-go"\n\t"github.com/nirvana-labs/nirvana-go/compute"\n\t"github.com/nirvana-labs/nirvana-go/option"\n)\n\nfunc main() {\n\tclient := nirvana.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\terr := client.Compute.VMs.Availability.Update(\n\t\tcontext.TODO(),\n\t\t"vm_id",\n\t\tcompute.VMAvailabilityUpdateParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n}\n',
      },
      http: {
        example:
          'curl https://api.nirvanalabs.io/v1/compute/vms/$VM_ID/availability \\\n    -X PATCH \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $NIRVANA_LABS_API_KEY" \\\n    -d \'{\n          "name": "my-vm",\n          "public_ip_enabled": true,\n          "tags": [\n            "production",\n            "ethereum"\n          ]\n        }\'',
      },
      typescript: {
        method: 'client.compute.vms.availability.update',
        example:
          "import NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs({\n  apiKey: process.env['NIRVANA_LABS_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.compute.vms.availability.update('vm_id');",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/v1/compute/vms/{vm_id}/volumes',
    httpMethod: 'get',
    summary: "List VM's Volumes",
    description: "List VM's Volumes",
    stainlessPath: '(resource) compute.vms.volumes > (method) list',
    qualified: 'client.compute.vms.volumes.list',
    params: ['vm_id: string;', 'cursor?: string;', 'limit?: number;'],
    response:
      "{ id: string; created_at: string; kind: 'boot' | 'data'; name: string; project_id: string; region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1'; size: number; status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'; tags: string[]; type: 'nvme' | 'abs'; updated_at: string; vm_id: string; vm_name: string; }",
    markdown:
      "## list\n\n`client.compute.vms.volumes.list(vm_id: string, cursor?: string, limit?: number): { id: string; created_at: string; kind: volume_kind; name: string; project_id: string; region: region_name; size: number; status: resource_status; tags: string[]; type: volume_type; updated_at: string; vm_id: string; vm_name: string; }`\n\n**get** `/v1/compute/vms/{vm_id}/volumes`\n\nList VM's Volumes\n\n### Parameters\n\n- `vm_id: string`\n\n- `cursor?: string`\n  Pagination cursor returned by a previous request\n\n- `limit?: number`\n  Maximum number of items to return\n\n### Returns\n\n- `{ id: string; created_at: string; kind: 'boot' | 'data'; name: string; project_id: string; region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1'; size: number; status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'; tags: string[]; type: 'nvme' | 'abs'; updated_at: string; vm_id: string; vm_name: string; }`\n  Volume details.\n\n  - `id: string`\n  - `created_at: string`\n  - `kind: 'boot' | 'data'`\n  - `name: string`\n  - `project_id: string`\n  - `region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1'`\n  - `size: number`\n  - `status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'`\n  - `tags: string[]`\n  - `type: 'nvme' | 'abs'`\n  - `updated_at: string`\n  - `vm_id: string`\n  - `vm_name: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\n// Automatically fetches more pages as needed.\nfor await (const volume of client.compute.vms.volumes.list('vm_id')) {\n  console.log(volume);\n}\n```",
    perLanguage: {
      cli: {
        method: 'volumes list',
        example: "nirvana compute:vms:volumes list \\\n  --api-key 'My API Key' \\\n  --vm-id vm_id",
      },
      go: {
        method: 'client.Compute.VMs.Volumes.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/nirvana-labs/nirvana-go"\n\t"github.com/nirvana-labs/nirvana-go/compute"\n\t"github.com/nirvana-labs/nirvana-go/option"\n)\n\nfunc main() {\n\tclient := nirvana.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpage, err := client.Compute.VMs.Volumes.List(\n\t\tcontext.TODO(),\n\t\t"vm_id",\n\t\tcompute.VMVolumeListParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", page)\n}\n',
      },
      http: {
        example:
          'curl https://api.nirvanalabs.io/v1/compute/vms/$VM_ID/volumes \\\n    -H "Authorization: Bearer $NIRVANA_LABS_API_KEY"',
      },
      typescript: {
        method: 'client.compute.vms.volumes.list',
        example:
          "import NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs({\n  apiKey: process.env['NIRVANA_LABS_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const volume of client.compute.vms.volumes.list('vm_id')) {\n  console.log(volume.id);\n}",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/v1/compute/vms/os_images',
    httpMethod: 'get',
    summary: 'List OS Images',
    description: 'List all OS Images',
    stainlessPath: '(resource) compute.vms.os_images > (method) list',
    qualified: 'client.compute.vms.osImages.list',
    params: ['cursor?: string;', 'limit?: number;'],
    response: '{ created_at: string; display_name: string; name: string; }',
    markdown:
      "## list\n\n`client.compute.vms.osImages.list(cursor?: string, limit?: number): { created_at: string; display_name: string; name: string; }`\n\n**get** `/v1/compute/vms/os_images`\n\nList all OS Images\n\n### Parameters\n\n- `cursor?: string`\n  Pagination cursor returned by a previous request\n\n- `limit?: number`\n  Maximum number of items to return\n\n### Returns\n\n- `{ created_at: string; display_name: string; name: string; }`\n  OS Image details.\n\n  - `created_at: string`\n  - `display_name: string`\n  - `name: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\n// Automatically fetches more pages as needed.\nfor await (const osImage of client.compute.vms.osImages.list()) {\n  console.log(osImage);\n}\n```",
    perLanguage: {
      cli: {
        method: 'os_images list',
        example: "nirvana compute:vms:os-images list \\\n  --api-key 'My API Key'",
      },
      go: {
        method: 'client.Compute.VMs.OSImages.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/nirvana-labs/nirvana-go"\n\t"github.com/nirvana-labs/nirvana-go/compute"\n\t"github.com/nirvana-labs/nirvana-go/option"\n)\n\nfunc main() {\n\tclient := nirvana.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpage, err := client.Compute.VMs.OSImages.List(context.TODO(), compute.VMOSImageListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", page)\n}\n',
      },
      http: {
        example:
          'curl https://api.nirvanalabs.io/v1/compute/vms/os_images \\\n    -H "Authorization: Bearer $NIRVANA_LABS_API_KEY"',
      },
      typescript: {
        method: 'client.compute.vms.osImages.list',
        example:
          "import NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs({\n  apiKey: process.env['NIRVANA_LABS_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const osImage of client.compute.vms.osImages.list()) {\n  console.log(osImage.created_at);\n}",
      },
    },
  },
  {
    name: 'create',
    endpoint: '/v1/compute/volumes',
    httpMethod: 'post',
    summary: 'Create Volume',
    description: 'Create a Volume. Only data volumes can be created.',
    stainlessPath: '(resource) compute.volumes > (method) create',
    qualified: 'client.compute.volumes.create',
    params: [
      'name: string;',
      'project_id: string;',
      "region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1';",
      'size: number;',
      "type: 'nvme' | 'abs';",
      'tags?: string[];',
      'vm_id?: string;',
    ],
    response:
      "{ id: string; created_at: string; kind: 'vm' | 'volume' | 'vpc' | 'firewall_rule' | 'nks_cluster' | 'nks_node_pool'; project_id: string; resource_id: string; status: 'pending' | 'running' | 'done' | 'failed' | 'unknown'; type: 'create' | 'update' | 'delete' | 'restart'; updated_at: string; }",
    markdown:
      "## create\n\n`client.compute.volumes.create(name: string, project_id: string, region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1', size: number, type: 'nvme' | 'abs', tags?: string[], vm_id?: string): { id: string; created_at: string; kind: operation_kind; project_id: string; resource_id: string; status: operation_status; type: operation_type; updated_at: string; }`\n\n**post** `/v1/compute/volumes`\n\nCreate a Volume. Only data volumes can be created.\n\n### Parameters\n\n- `name: string`\n  Name of the Volume.\n\n- `project_id: string`\n  Project ID the Volume belongs to.\n\n- `region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1'`\n  Region the resource is in.\n\n- `size: number`\n  Size of the Volume in GB.\n\n- `type: 'nvme' | 'abs'`\n  Type of the Volume.\n\n- `tags?: string[]`\n  Tags to attach to the Volume.\n\n- `vm_id?: string`\n  ID of the VM the Volume is attached to.\n\n### Returns\n\n- `{ id: string; created_at: string; kind: 'vm' | 'volume' | 'vpc' | 'firewall_rule' | 'nks_cluster' | 'nks_node_pool'; project_id: string; resource_id: string; status: 'pending' | 'running' | 'done' | 'failed' | 'unknown'; type: 'create' | 'update' | 'delete' | 'restart'; updated_at: string; }`\n  Operation details.\n\n  - `id: string`\n  - `created_at: string`\n  - `kind: 'vm' | 'volume' | 'vpc' | 'firewall_rule' | 'nks_cluster' | 'nks_node_pool'`\n  - `project_id: string`\n  - `resource_id: string`\n  - `status: 'pending' | 'running' | 'done' | 'failed' | 'unknown'`\n  - `type: 'create' | 'update' | 'delete' | 'restart'`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\nconst operation = await client.compute.volumes.create({\n  name: 'my-data-volume',\n  project_id: '123e4567-e89b-12d3-a456-426614174000',\n  region: 'us-sva-2',\n  size: 100,\n  type: 'abs',\n});\n\nconsole.log(operation);\n```",
    perLanguage: {
      cli: {
        method: 'volumes create',
        example:
          "nirvana compute:volumes create \\\n  --api-key 'My API Key' \\\n  --name my-data-volume \\\n  --project-id 123e4567-e89b-12d3-a456-426614174000 \\\n  --region us-sva-2 \\\n  --size 100 \\\n  --type abs",
      },
      go: {
        method: 'client.Compute.Volumes.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/nirvana-labs/nirvana-go"\n\t"github.com/nirvana-labs/nirvana-go/compute"\n\t"github.com/nirvana-labs/nirvana-go/option"\n\t"github.com/nirvana-labs/nirvana-go/shared"\n)\n\nfunc main() {\n\tclient := nirvana.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\toperation, err := client.Compute.Volumes.New(context.TODO(), compute.VolumeNewParams{\n\t\tName:      "my-data-volume",\n\t\tProjectID: "123e4567-e89b-12d3-a456-426614174000",\n\t\tRegion:    shared.RegionNameUsSva2,\n\t\tSize:      100,\n\t\tType:      compute.VolumeTypeABS,\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", operation.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.nirvanalabs.io/v1/compute/volumes \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $NIRVANA_LABS_API_KEY" \\\n    -d \'{\n          "name": "my-data-volume",\n          "project_id": "123e4567-e89b-12d3-a456-426614174000",\n          "region": "us-sva-2",\n          "size": 100,\n          "type": "abs",\n          "tags": [\n            "production",\n            "ethereum"\n          ],\n          "vm_id": "123e4567-e89b-12d3-a456-426614174000"\n        }\'',
      },
      typescript: {
        method: 'client.compute.volumes.create',
        example:
          "import NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs({\n  apiKey: process.env['NIRVANA_LABS_API_KEY'], // This is the default and can be omitted\n});\n\nconst operation = await client.compute.volumes.create({\n  name: 'my-data-volume',\n  project_id: '123e4567-e89b-12d3-a456-426614174000',\n  region: 'us-sva-2',\n  size: 100,\n  type: 'abs',\n});\n\nconsole.log(operation.id);",
      },
    },
  },
  {
    name: 'get',
    endpoint: '/v1/compute/volumes/{volume_id}',
    httpMethod: 'get',
    summary: 'Get Volume',
    description: 'Get a Volume.',
    stainlessPath: '(resource) compute.volumes > (method) get',
    qualified: 'client.compute.volumes.get',
    params: ['volume_id: string;'],
    response:
      "{ id: string; created_at: string; kind: 'boot' | 'data'; name: string; project_id: string; region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1'; size: number; status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'; tags: string[]; type: 'nvme' | 'abs'; updated_at: string; vm_id: string; vm_name: string; }",
    markdown:
      "## get\n\n`client.compute.volumes.get(volume_id: string): { id: string; created_at: string; kind: volume_kind; name: string; project_id: string; region: region_name; size: number; status: resource_status; tags: string[]; type: volume_type; updated_at: string; vm_id: string; vm_name: string; }`\n\n**get** `/v1/compute/volumes/{volume_id}`\n\nGet a Volume.\n\n### Parameters\n\n- `volume_id: string`\n\n### Returns\n\n- `{ id: string; created_at: string; kind: 'boot' | 'data'; name: string; project_id: string; region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1'; size: number; status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'; tags: string[]; type: 'nvme' | 'abs'; updated_at: string; vm_id: string; vm_name: string; }`\n  Volume details.\n\n  - `id: string`\n  - `created_at: string`\n  - `kind: 'boot' | 'data'`\n  - `name: string`\n  - `project_id: string`\n  - `region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1'`\n  - `size: number`\n  - `status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'`\n  - `tags: string[]`\n  - `type: 'nvme' | 'abs'`\n  - `updated_at: string`\n  - `vm_id: string`\n  - `vm_name: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\nconst volume = await client.compute.volumes.get('volume_id');\n\nconsole.log(volume);\n```",
    perLanguage: {
      cli: {
        method: 'volumes get',
        example: "nirvana compute:volumes get \\\n  --api-key 'My API Key' \\\n  --volume-id volume_id",
      },
      go: {
        method: 'client.Compute.Volumes.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/nirvana-labs/nirvana-go"\n\t"github.com/nirvana-labs/nirvana-go/option"\n)\n\nfunc main() {\n\tclient := nirvana.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tvolume, err := client.Compute.Volumes.Get(context.TODO(), "volume_id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", volume.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.nirvanalabs.io/v1/compute/volumes/$VOLUME_ID \\\n    -H "Authorization: Bearer $NIRVANA_LABS_API_KEY"',
      },
      typescript: {
        method: 'client.compute.volumes.get',
        example:
          "import NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs({\n  apiKey: process.env['NIRVANA_LABS_API_KEY'], // This is the default and can be omitted\n});\n\nconst volume = await client.compute.volumes.get('volume_id');\n\nconsole.log(volume.id);",
      },
    },
  },
  {
    name: 'update',
    endpoint: '/v1/compute/volumes/{volume_id}',
    httpMethod: 'patch',
    summary: 'Update Volume',
    description: 'Update a Volume. Boot or data volumes can be updated.',
    stainlessPath: '(resource) compute.volumes > (method) update',
    qualified: 'client.compute.volumes.update',
    params: ['volume_id: string;', 'name?: string;', 'size?: number;', 'tags?: string[];'],
    response:
      "{ id: string; created_at: string; kind: 'vm' | 'volume' | 'vpc' | 'firewall_rule' | 'nks_cluster' | 'nks_node_pool'; project_id: string; resource_id: string; status: 'pending' | 'running' | 'done' | 'failed' | 'unknown'; type: 'create' | 'update' | 'delete' | 'restart'; updated_at: string; }",
    markdown:
      "## update\n\n`client.compute.volumes.update(volume_id: string, name?: string, size?: number, tags?: string[]): { id: string; created_at: string; kind: operation_kind; project_id: string; resource_id: string; status: operation_status; type: operation_type; updated_at: string; }`\n\n**patch** `/v1/compute/volumes/{volume_id}`\n\nUpdate a Volume. Boot or data volumes can be updated.\n\n### Parameters\n\n- `volume_id: string`\n\n- `name?: string`\n  Name of the Volume.\n\n- `size?: number`\n  Size of the Volume in GB.\n\n- `tags?: string[]`\n  Tags to attach to the Volume.\n\n### Returns\n\n- `{ id: string; created_at: string; kind: 'vm' | 'volume' | 'vpc' | 'firewall_rule' | 'nks_cluster' | 'nks_node_pool'; project_id: string; resource_id: string; status: 'pending' | 'running' | 'done' | 'failed' | 'unknown'; type: 'create' | 'update' | 'delete' | 'restart'; updated_at: string; }`\n  Operation details.\n\n  - `id: string`\n  - `created_at: string`\n  - `kind: 'vm' | 'volume' | 'vpc' | 'firewall_rule' | 'nks_cluster' | 'nks_node_pool'`\n  - `project_id: string`\n  - `resource_id: string`\n  - `status: 'pending' | 'running' | 'done' | 'failed' | 'unknown'`\n  - `type: 'create' | 'update' | 'delete' | 'restart'`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\nconst operation = await client.compute.volumes.update('volume_id');\n\nconsole.log(operation);\n```",
    perLanguage: {
      cli: {
        method: 'volumes update',
        example: "nirvana compute:volumes update \\\n  --api-key 'My API Key' \\\n  --volume-id volume_id",
      },
      go: {
        method: 'client.Compute.Volumes.Update',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/nirvana-labs/nirvana-go"\n\t"github.com/nirvana-labs/nirvana-go/compute"\n\t"github.com/nirvana-labs/nirvana-go/option"\n)\n\nfunc main() {\n\tclient := nirvana.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\toperation, err := client.Compute.Volumes.Update(\n\t\tcontext.TODO(),\n\t\t"volume_id",\n\t\tcompute.VolumeUpdateParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", operation.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.nirvanalabs.io/v1/compute/volumes/$VOLUME_ID \\\n    -X PATCH \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $NIRVANA_LABS_API_KEY" \\\n    -d \'{\n          "name": "my-data-volume",\n          "size": 100,\n          "tags": [\n            "production",\n            "ethereum"\n          ]\n        }\'',
      },
      typescript: {
        method: 'client.compute.volumes.update',
        example:
          "import NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs({\n  apiKey: process.env['NIRVANA_LABS_API_KEY'], // This is the default and can be omitted\n});\n\nconst operation = await client.compute.volumes.update('volume_id');\n\nconsole.log(operation.id);",
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/v1/compute/volumes/{volume_id}',
    httpMethod: 'delete',
    summary: 'Delete Volume',
    description: 'Delete a Volume. Boot or data volumes can be deleted.',
    stainlessPath: '(resource) compute.volumes > (method) delete',
    qualified: 'client.compute.volumes.delete',
    params: ['volume_id: string;'],
    response:
      "{ id: string; created_at: string; kind: 'vm' | 'volume' | 'vpc' | 'firewall_rule' | 'nks_cluster' | 'nks_node_pool'; project_id: string; resource_id: string; status: 'pending' | 'running' | 'done' | 'failed' | 'unknown'; type: 'create' | 'update' | 'delete' | 'restart'; updated_at: string; }",
    markdown:
      "## delete\n\n`client.compute.volumes.delete(volume_id: string): { id: string; created_at: string; kind: operation_kind; project_id: string; resource_id: string; status: operation_status; type: operation_type; updated_at: string; }`\n\n**delete** `/v1/compute/volumes/{volume_id}`\n\nDelete a Volume. Boot or data volumes can be deleted.\n\n### Parameters\n\n- `volume_id: string`\n\n### Returns\n\n- `{ id: string; created_at: string; kind: 'vm' | 'volume' | 'vpc' | 'firewall_rule' | 'nks_cluster' | 'nks_node_pool'; project_id: string; resource_id: string; status: 'pending' | 'running' | 'done' | 'failed' | 'unknown'; type: 'create' | 'update' | 'delete' | 'restart'; updated_at: string; }`\n  Operation details.\n\n  - `id: string`\n  - `created_at: string`\n  - `kind: 'vm' | 'volume' | 'vpc' | 'firewall_rule' | 'nks_cluster' | 'nks_node_pool'`\n  - `project_id: string`\n  - `resource_id: string`\n  - `status: 'pending' | 'running' | 'done' | 'failed' | 'unknown'`\n  - `type: 'create' | 'update' | 'delete' | 'restart'`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\nconst operation = await client.compute.volumes.delete('volume_id');\n\nconsole.log(operation);\n```",
    perLanguage: {
      cli: {
        method: 'volumes delete',
        example: "nirvana compute:volumes delete \\\n  --api-key 'My API Key' \\\n  --volume-id volume_id",
      },
      go: {
        method: 'client.Compute.Volumes.Delete',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/nirvana-labs/nirvana-go"\n\t"github.com/nirvana-labs/nirvana-go/option"\n)\n\nfunc main() {\n\tclient := nirvana.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\toperation, err := client.Compute.Volumes.Delete(context.TODO(), "volume_id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", operation.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.nirvanalabs.io/v1/compute/volumes/$VOLUME_ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $NIRVANA_LABS_API_KEY"',
      },
      typescript: {
        method: 'client.compute.volumes.delete',
        example:
          "import NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs({\n  apiKey: process.env['NIRVANA_LABS_API_KEY'], // This is the default and can be omitted\n});\n\nconst operation = await client.compute.volumes.delete('volume_id');\n\nconsole.log(operation.id);",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/v1/compute/volumes',
    httpMethod: 'get',
    summary: 'List Volumes',
    description: 'List all volumes',
    stainlessPath: '(resource) compute.volumes > (method) list',
    qualified: 'client.compute.volumes.list',
    params: ['project_id: string;', 'cursor?: string;', 'limit?: number;'],
    response:
      "{ id: string; created_at: string; kind: 'boot' | 'data'; name: string; project_id: string; region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1'; size: number; status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'; tags: string[]; type: 'nvme' | 'abs'; updated_at: string; vm_id: string; vm_name: string; }",
    markdown:
      "## list\n\n`client.compute.volumes.list(project_id: string, cursor?: string, limit?: number): { id: string; created_at: string; kind: volume_kind; name: string; project_id: string; region: region_name; size: number; status: resource_status; tags: string[]; type: volume_type; updated_at: string; vm_id: string; vm_name: string; }`\n\n**get** `/v1/compute/volumes`\n\nList all volumes\n\n### Parameters\n\n- `project_id: string`\n  Project ID of resources to request\n\n- `cursor?: string`\n  Pagination cursor returned by a previous request\n\n- `limit?: number`\n  Maximum number of items to return\n\n### Returns\n\n- `{ id: string; created_at: string; kind: 'boot' | 'data'; name: string; project_id: string; region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1'; size: number; status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'; tags: string[]; type: 'nvme' | 'abs'; updated_at: string; vm_id: string; vm_name: string; }`\n  Volume details.\n\n  - `id: string`\n  - `created_at: string`\n  - `kind: 'boot' | 'data'`\n  - `name: string`\n  - `project_id: string`\n  - `region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1'`\n  - `size: number`\n  - `status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'`\n  - `tags: string[]`\n  - `type: 'nvme' | 'abs'`\n  - `updated_at: string`\n  - `vm_id: string`\n  - `vm_name: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\n// Automatically fetches more pages as needed.\nfor await (const volume of client.compute.volumes.list({ project_id: 'project_id' })) {\n  console.log(volume);\n}\n```",
    perLanguage: {
      cli: {
        method: 'volumes list',
        example: "nirvana compute:volumes list \\\n  --api-key 'My API Key' \\\n  --project-id project_id",
      },
      go: {
        method: 'client.Compute.Volumes.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/nirvana-labs/nirvana-go"\n\t"github.com/nirvana-labs/nirvana-go/compute"\n\t"github.com/nirvana-labs/nirvana-go/option"\n)\n\nfunc main() {\n\tclient := nirvana.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpage, err := client.Compute.Volumes.List(context.TODO(), compute.VolumeListParams{\n\t\tProjectID: "project_id",\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", page)\n}\n',
      },
      http: {
        example:
          'curl https://api.nirvanalabs.io/v1/compute/volumes \\\n    -H "Authorization: Bearer $NIRVANA_LABS_API_KEY"',
      },
      typescript: {
        method: 'client.compute.volumes.list',
        example:
          "import NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs({\n  apiKey: process.env['NIRVANA_LABS_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const volume of client.compute.volumes.list({ project_id: 'project_id' })) {\n  console.log(volume.id);\n}",
      },
    },
  },
  {
    name: 'attach',
    endpoint: '/v1/compute/volumes/{volume_id}/attach',
    httpMethod: 'post',
    summary: 'Attach Volume',
    description: 'Attach a volume to a VM',
    stainlessPath: '(resource) compute.volumes > (method) attach',
    qualified: 'client.compute.volumes.attach',
    params: ['volume_id: string;', 'vm_id: string;'],
    response:
      "{ id: string; created_at: string; kind: 'vm' | 'volume' | 'vpc' | 'firewall_rule' | 'nks_cluster' | 'nks_node_pool'; project_id: string; resource_id: string; status: 'pending' | 'running' | 'done' | 'failed' | 'unknown'; type: 'create' | 'update' | 'delete' | 'restart'; updated_at: string; }",
    markdown:
      "## attach\n\n`client.compute.volumes.attach(volume_id: string, vm_id: string): { id: string; created_at: string; kind: operation_kind; project_id: string; resource_id: string; status: operation_status; type: operation_type; updated_at: string; }`\n\n**post** `/v1/compute/volumes/{volume_id}/attach`\n\nAttach a volume to a VM\n\n### Parameters\n\n- `volume_id: string`\n\n- `vm_id: string`\n  ID of the VM to attach the Volume to.\n\n### Returns\n\n- `{ id: string; created_at: string; kind: 'vm' | 'volume' | 'vpc' | 'firewall_rule' | 'nks_cluster' | 'nks_node_pool'; project_id: string; resource_id: string; status: 'pending' | 'running' | 'done' | 'failed' | 'unknown'; type: 'create' | 'update' | 'delete' | 'restart'; updated_at: string; }`\n  Operation details.\n\n  - `id: string`\n  - `created_at: string`\n  - `kind: 'vm' | 'volume' | 'vpc' | 'firewall_rule' | 'nks_cluster' | 'nks_node_pool'`\n  - `project_id: string`\n  - `resource_id: string`\n  - `status: 'pending' | 'running' | 'done' | 'failed' | 'unknown'`\n  - `type: 'create' | 'update' | 'delete' | 'restart'`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\nconst operation = await client.compute.volumes.attach('volume_id', { vm_id: '123e4567-e89b-12d3-a456-426614174000' });\n\nconsole.log(operation);\n```",
    perLanguage: {
      cli: {
        method: 'volumes attach',
        example:
          "nirvana compute:volumes attach \\\n  --api-key 'My API Key' \\\n  --volume-id volume_id \\\n  --vm-id 123e4567-e89b-12d3-a456-426614174000",
      },
      go: {
        method: 'client.Compute.Volumes.Attach',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/nirvana-labs/nirvana-go"\n\t"github.com/nirvana-labs/nirvana-go/compute"\n\t"github.com/nirvana-labs/nirvana-go/option"\n)\n\nfunc main() {\n\tclient := nirvana.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\toperation, err := client.Compute.Volumes.Attach(\n\t\tcontext.TODO(),\n\t\t"volume_id",\n\t\tcompute.VolumeAttachParams{\n\t\t\tVMID: "123e4567-e89b-12d3-a456-426614174000",\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", operation.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.nirvanalabs.io/v1/compute/volumes/$VOLUME_ID/attach \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $NIRVANA_LABS_API_KEY" \\\n    -d \'{\n          "vm_id": "123e4567-e89b-12d3-a456-426614174000"\n        }\'',
      },
      typescript: {
        method: 'client.compute.volumes.attach',
        example:
          "import NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs({\n  apiKey: process.env['NIRVANA_LABS_API_KEY'], // This is the default and can be omitted\n});\n\nconst operation = await client.compute.volumes.attach('volume_id', {\n  vm_id: '123e4567-e89b-12d3-a456-426614174000',\n});\n\nconsole.log(operation.id);",
      },
    },
  },
  {
    name: 'detach',
    endpoint: '/v1/compute/volumes/{volume_id}/detach',
    httpMethod: 'post',
    summary: 'Detach Volume',
    description: 'Detach a volume from a VM',
    stainlessPath: '(resource) compute.volumes > (method) detach',
    qualified: 'client.compute.volumes.detach',
    params: ['volume_id: string;'],
    response:
      "{ id: string; created_at: string; kind: 'vm' | 'volume' | 'vpc' | 'firewall_rule' | 'nks_cluster' | 'nks_node_pool'; project_id: string; resource_id: string; status: 'pending' | 'running' | 'done' | 'failed' | 'unknown'; type: 'create' | 'update' | 'delete' | 'restart'; updated_at: string; }",
    markdown:
      "## detach\n\n`client.compute.volumes.detach(volume_id: string): { id: string; created_at: string; kind: operation_kind; project_id: string; resource_id: string; status: operation_status; type: operation_type; updated_at: string; }`\n\n**post** `/v1/compute/volumes/{volume_id}/detach`\n\nDetach a volume from a VM\n\n### Parameters\n\n- `volume_id: string`\n\n### Returns\n\n- `{ id: string; created_at: string; kind: 'vm' | 'volume' | 'vpc' | 'firewall_rule' | 'nks_cluster' | 'nks_node_pool'; project_id: string; resource_id: string; status: 'pending' | 'running' | 'done' | 'failed' | 'unknown'; type: 'create' | 'update' | 'delete' | 'restart'; updated_at: string; }`\n  Operation details.\n\n  - `id: string`\n  - `created_at: string`\n  - `kind: 'vm' | 'volume' | 'vpc' | 'firewall_rule' | 'nks_cluster' | 'nks_node_pool'`\n  - `project_id: string`\n  - `resource_id: string`\n  - `status: 'pending' | 'running' | 'done' | 'failed' | 'unknown'`\n  - `type: 'create' | 'update' | 'delete' | 'restart'`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\nconst operation = await client.compute.volumes.detach('volume_id');\n\nconsole.log(operation);\n```",
    perLanguage: {
      cli: {
        method: 'volumes detach',
        example: "nirvana compute:volumes detach \\\n  --api-key 'My API Key' \\\n  --volume-id volume_id",
      },
      go: {
        method: 'client.Compute.Volumes.Detach',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/nirvana-labs/nirvana-go"\n\t"github.com/nirvana-labs/nirvana-go/option"\n)\n\nfunc main() {\n\tclient := nirvana.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\toperation, err := client.Compute.Volumes.Detach(context.TODO(), "volume_id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", operation.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.nirvanalabs.io/v1/compute/volumes/$VOLUME_ID/detach \\\n    -X POST \\\n    -H "Authorization: Bearer $NIRVANA_LABS_API_KEY"',
      },
      typescript: {
        method: 'client.compute.volumes.detach',
        example:
          "import NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs({\n  apiKey: process.env['NIRVANA_LABS_API_KEY'], // This is the default and can be omitted\n});\n\nconst operation = await client.compute.volumes.detach('volume_id');\n\nconsole.log(operation.id);",
      },
    },
  },
  {
    name: 'create',
    endpoint: '/v1/compute/volumes/availability',
    httpMethod: 'post',
    summary: 'Check Volume Create Availability',
    description: 'Check Volume Create Availability',
    stainlessPath: '(resource) compute.volumes.availability > (method) create',
    qualified: 'client.compute.volumes.availability.create',
    params: [
      'name: string;',
      'project_id: string;',
      "region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1';",
      'size: number;',
      "type: 'nvme' | 'abs';",
      'tags?: string[];',
      'vm_id?: string;',
    ],
    markdown:
      "## create\n\n`client.compute.volumes.availability.create(name: string, project_id: string, region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1', size: number, type: 'nvme' | 'abs', tags?: string[], vm_id?: string): void`\n\n**post** `/v1/compute/volumes/availability`\n\nCheck Volume Create Availability\n\n### Parameters\n\n- `name: string`\n  Name of the Volume.\n\n- `project_id: string`\n  Project ID the Volume belongs to.\n\n- `region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1'`\n  Region the resource is in.\n\n- `size: number`\n  Size of the Volume in GB.\n\n- `type: 'nvme' | 'abs'`\n  Type of the Volume.\n\n- `tags?: string[]`\n  Tags to attach to the Volume.\n\n- `vm_id?: string`\n  ID of the VM the Volume is attached to.\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\nawait client.compute.volumes.availability.create({\n  name: 'my-data-volume',\n  project_id: '123e4567-e89b-12d3-a456-426614174000',\n  region: 'us-sva-2',\n  size: 100,\n  type: 'abs',\n})\n```",
    perLanguage: {
      cli: {
        method: 'availability create',
        example:
          "nirvana compute:volumes:availability create \\\n  --api-key 'My API Key' \\\n  --name my-data-volume \\\n  --project-id 123e4567-e89b-12d3-a456-426614174000 \\\n  --region us-sva-2 \\\n  --size 100 \\\n  --type abs",
      },
      go: {
        method: 'client.Compute.Volumes.Availability.New',
        example:
          'package main\n\nimport (\n\t"context"\n\n\t"github.com/nirvana-labs/nirvana-go"\n\t"github.com/nirvana-labs/nirvana-go/compute"\n\t"github.com/nirvana-labs/nirvana-go/option"\n\t"github.com/nirvana-labs/nirvana-go/shared"\n)\n\nfunc main() {\n\tclient := nirvana.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\terr := client.Compute.Volumes.Availability.New(context.TODO(), compute.VolumeAvailabilityNewParams{\n\t\tName:      "my-data-volume",\n\t\tProjectID: "123e4567-e89b-12d3-a456-426614174000",\n\t\tRegion:    shared.RegionNameUsSva2,\n\t\tSize:      100,\n\t\tType:      compute.VolumeTypeABS,\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n}\n',
      },
      http: {
        example:
          'curl https://api.nirvanalabs.io/v1/compute/volumes/availability \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $NIRVANA_LABS_API_KEY" \\\n    -d \'{\n          "name": "my-data-volume",\n          "project_id": "123e4567-e89b-12d3-a456-426614174000",\n          "region": "us-sva-2",\n          "size": 100,\n          "type": "abs",\n          "tags": [\n            "production",\n            "ethereum"\n          ],\n          "vm_id": "123e4567-e89b-12d3-a456-426614174000"\n        }\'',
      },
      typescript: {
        method: 'client.compute.volumes.availability.create',
        example:
          "import NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs({\n  apiKey: process.env['NIRVANA_LABS_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.compute.volumes.availability.create({\n  name: 'my-data-volume',\n  project_id: '123e4567-e89b-12d3-a456-426614174000',\n  region: 'us-sva-2',\n  size: 100,\n  type: 'abs',\n});",
      },
    },
  },
  {
    name: 'update',
    endpoint: '/v1/compute/volumes/{volume_id}/availability',
    httpMethod: 'patch',
    summary: 'Check Volume Update Availability',
    description: 'Check Volume Update Availability',
    stainlessPath: '(resource) compute.volumes.availability > (method) update',
    qualified: 'client.compute.volumes.availability.update',
    params: ['volume_id: string;', 'name?: string;', 'size?: number;', 'tags?: string[];'],
    markdown:
      "## update\n\n`client.compute.volumes.availability.update(volume_id: string, name?: string, size?: number, tags?: string[]): void`\n\n**patch** `/v1/compute/volumes/{volume_id}/availability`\n\nCheck Volume Update Availability\n\n### Parameters\n\n- `volume_id: string`\n\n- `name?: string`\n  Name of the Volume.\n\n- `size?: number`\n  Size of the Volume in GB.\n\n- `tags?: string[]`\n  Tags to attach to the Volume.\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\nawait client.compute.volumes.availability.update('volume_id')\n```",
    perLanguage: {
      cli: {
        method: 'availability update',
        example:
          "nirvana compute:volumes:availability update \\\n  --api-key 'My API Key' \\\n  --volume-id volume_id",
      },
      go: {
        method: 'client.Compute.Volumes.Availability.Update',
        example:
          'package main\n\nimport (\n\t"context"\n\n\t"github.com/nirvana-labs/nirvana-go"\n\t"github.com/nirvana-labs/nirvana-go/compute"\n\t"github.com/nirvana-labs/nirvana-go/option"\n)\n\nfunc main() {\n\tclient := nirvana.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\terr := client.Compute.Volumes.Availability.Update(\n\t\tcontext.TODO(),\n\t\t"volume_id",\n\t\tcompute.VolumeAvailabilityUpdateParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n}\n',
      },
      http: {
        example:
          'curl https://api.nirvanalabs.io/v1/compute/volumes/$VOLUME_ID/availability \\\n    -X PATCH \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $NIRVANA_LABS_API_KEY" \\\n    -d \'{\n          "name": "my-data-volume",\n          "size": 100,\n          "tags": [\n            "production",\n            "ethereum"\n          ]\n        }\'',
      },
      typescript: {
        method: 'client.compute.volumes.availability.update',
        example:
          "import NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs({\n  apiKey: process.env['NIRVANA_LABS_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.compute.volumes.availability.update('volume_id');",
      },
    },
  },
  {
    name: 'create',
    endpoint: '/v1/networking/vpcs',
    httpMethod: 'post',
    summary: 'Create VPC',
    description: 'Create a VPC',
    stainlessPath: '(resource) networking.vpcs > (method) create',
    qualified: 'client.networking.vpcs.create',
    params: [
      'name: string;',
      'project_id: string;',
      "region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1';",
      'subnet_name: string;',
      'tags?: string[];',
    ],
    response:
      "{ id: string; created_at: string; kind: 'vm' | 'volume' | 'vpc' | 'firewall_rule' | 'nks_cluster' | 'nks_node_pool'; project_id: string; resource_id: string; status: 'pending' | 'running' | 'done' | 'failed' | 'unknown'; type: 'create' | 'update' | 'delete' | 'restart'; updated_at: string; }",
    markdown:
      "## create\n\n`client.networking.vpcs.create(name: string, project_id: string, region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1', subnet_name: string, tags?: string[]): { id: string; created_at: string; kind: operation_kind; project_id: string; resource_id: string; status: operation_status; type: operation_type; updated_at: string; }`\n\n**post** `/v1/networking/vpcs`\n\nCreate a VPC\n\n### Parameters\n\n- `name: string`\n  Name of the VPC.\n\n- `project_id: string`\n  Project ID the VPC belongs to.\n\n- `region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1'`\n  Region the resource is in.\n\n- `subnet_name: string`\n  Name of the subnet to create.\n\n- `tags?: string[]`\n  Tags to attach to the VPC.\n\n### Returns\n\n- `{ id: string; created_at: string; kind: 'vm' | 'volume' | 'vpc' | 'firewall_rule' | 'nks_cluster' | 'nks_node_pool'; project_id: string; resource_id: string; status: 'pending' | 'running' | 'done' | 'failed' | 'unknown'; type: 'create' | 'update' | 'delete' | 'restart'; updated_at: string; }`\n  Operation details.\n\n  - `id: string`\n  - `created_at: string`\n  - `kind: 'vm' | 'volume' | 'vpc' | 'firewall_rule' | 'nks_cluster' | 'nks_node_pool'`\n  - `project_id: string`\n  - `resource_id: string`\n  - `status: 'pending' | 'running' | 'done' | 'failed' | 'unknown'`\n  - `type: 'create' | 'update' | 'delete' | 'restart'`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\nconst operation = await client.networking.vpcs.create({\n  name: 'my-vpc',\n  project_id: '123e4567-e89b-12d3-a456-426614174000',\n  region: 'us-sva-2',\n  subnet_name: 'my-subnet',\n});\n\nconsole.log(operation);\n```",
    perLanguage: {
      cli: {
        method: 'vpcs create',
        example:
          "nirvana networking:vpcs create \\\n  --api-key 'My API Key' \\\n  --name my-vpc \\\n  --project-id 123e4567-e89b-12d3-a456-426614174000 \\\n  --region us-sva-2 \\\n  --subnet-name my-subnet",
      },
      go: {
        method: 'client.Networking.VPCs.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/nirvana-labs/nirvana-go"\n\t"github.com/nirvana-labs/nirvana-go/networking"\n\t"github.com/nirvana-labs/nirvana-go/option"\n\t"github.com/nirvana-labs/nirvana-go/shared"\n)\n\nfunc main() {\n\tclient := nirvana.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\toperation, err := client.Networking.VPCs.New(context.TODO(), networking.VPCNewParams{\n\t\tName:       "my-vpc",\n\t\tProjectID:  "123e4567-e89b-12d3-a456-426614174000",\n\t\tRegion:     shared.RegionNameUsSva2,\n\t\tSubnetName: "my-subnet",\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", operation.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.nirvanalabs.io/v1/networking/vpcs \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $NIRVANA_LABS_API_KEY" \\\n    -d \'{\n          "name": "my-vpc",\n          "project_id": "123e4567-e89b-12d3-a456-426614174000",\n          "region": "us-sva-2",\n          "subnet_name": "my-subnet",\n          "tags": [\n            "production",\n            "ethereum"\n          ]\n        }\'',
      },
      typescript: {
        method: 'client.networking.vpcs.create',
        example:
          "import NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs({\n  apiKey: process.env['NIRVANA_LABS_API_KEY'], // This is the default and can be omitted\n});\n\nconst operation = await client.networking.vpcs.create({\n  name: 'my-vpc',\n  project_id: '123e4567-e89b-12d3-a456-426614174000',\n  region: 'us-sva-2',\n  subnet_name: 'my-subnet',\n});\n\nconsole.log(operation.id);",
      },
    },
  },
  {
    name: 'get',
    endpoint: '/v1/networking/vpcs/{vpc_id}',
    httpMethod: 'get',
    summary: 'Get VPC Details',
    description: 'Get details about a VPC',
    stainlessPath: '(resource) networking.vpcs > (method) get',
    qualified: 'client.networking.vpcs.get',
    params: ['vpc_id: string;'],
    response:
      "{ id: string; created_at: string; firewall_rule_ids: string[]; name: string; project_id: string; region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1'; status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'; subnet: { id: string; cidr: string; created_at: string; name: string; updated_at: string; }; tags: string[]; updated_at: string; }",
    markdown:
      "## get\n\n`client.networking.vpcs.get(vpc_id: string): { id: string; created_at: string; firewall_rule_ids: string[]; name: string; project_id: string; region: region_name; status: resource_status; subnet: subnet; tags: string[]; updated_at: string; }`\n\n**get** `/v1/networking/vpcs/{vpc_id}`\n\nGet details about a VPC\n\n### Parameters\n\n- `vpc_id: string`\n\n### Returns\n\n- `{ id: string; created_at: string; firewall_rule_ids: string[]; name: string; project_id: string; region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1'; status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'; subnet: { id: string; cidr: string; created_at: string; name: string; updated_at: string; }; tags: string[]; updated_at: string; }`\n  VPC details.\n\n  - `id: string`\n  - `created_at: string`\n  - `firewall_rule_ids: string[]`\n  - `name: string`\n  - `project_id: string`\n  - `region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1'`\n  - `status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'`\n  - `subnet: { id: string; cidr: string; created_at: string; name: string; updated_at: string; }`\n  - `tags: string[]`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\nconst vpc = await client.networking.vpcs.get('vpc_id');\n\nconsole.log(vpc);\n```",
    perLanguage: {
      cli: {
        method: 'vpcs get',
        example: "nirvana networking:vpcs get \\\n  --api-key 'My API Key' \\\n  --vpc-id vpc_id",
      },
      go: {
        method: 'client.Networking.VPCs.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/nirvana-labs/nirvana-go"\n\t"github.com/nirvana-labs/nirvana-go/option"\n)\n\nfunc main() {\n\tclient := nirvana.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tvpc, err := client.Networking.VPCs.Get(context.TODO(), "vpc_id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", vpc.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.nirvanalabs.io/v1/networking/vpcs/$VPC_ID \\\n    -H "Authorization: Bearer $NIRVANA_LABS_API_KEY"',
      },
      typescript: {
        method: 'client.networking.vpcs.get',
        example:
          "import NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs({\n  apiKey: process.env['NIRVANA_LABS_API_KEY'], // This is the default and can be omitted\n});\n\nconst vpc = await client.networking.vpcs.get('vpc_id');\n\nconsole.log(vpc.id);",
      },
    },
  },
  {
    name: 'update',
    endpoint: '/v1/networking/vpcs/{vpc_id}',
    httpMethod: 'patch',
    summary: 'Update VPC',
    description: 'Update a VPC',
    stainlessPath: '(resource) networking.vpcs > (method) update',
    qualified: 'client.networking.vpcs.update',
    params: ['vpc_id: string;', 'name?: string;', 'subnet_name?: string;', 'tags?: string[];'],
    response:
      "{ id: string; created_at: string; kind: 'vm' | 'volume' | 'vpc' | 'firewall_rule' | 'nks_cluster' | 'nks_node_pool'; project_id: string; resource_id: string; status: 'pending' | 'running' | 'done' | 'failed' | 'unknown'; type: 'create' | 'update' | 'delete' | 'restart'; updated_at: string; }",
    markdown:
      "## update\n\n`client.networking.vpcs.update(vpc_id: string, name?: string, subnet_name?: string, tags?: string[]): { id: string; created_at: string; kind: operation_kind; project_id: string; resource_id: string; status: operation_status; type: operation_type; updated_at: string; }`\n\n**patch** `/v1/networking/vpcs/{vpc_id}`\n\nUpdate a VPC\n\n### Parameters\n\n- `vpc_id: string`\n\n- `name?: string`\n  Name of the VPC.\n\n- `subnet_name?: string`\n  Name of the subnet to create.\n\n- `tags?: string[]`\n  Tags to attach to the VPC.\n\n### Returns\n\n- `{ id: string; created_at: string; kind: 'vm' | 'volume' | 'vpc' | 'firewall_rule' | 'nks_cluster' | 'nks_node_pool'; project_id: string; resource_id: string; status: 'pending' | 'running' | 'done' | 'failed' | 'unknown'; type: 'create' | 'update' | 'delete' | 'restart'; updated_at: string; }`\n  Operation details.\n\n  - `id: string`\n  - `created_at: string`\n  - `kind: 'vm' | 'volume' | 'vpc' | 'firewall_rule' | 'nks_cluster' | 'nks_node_pool'`\n  - `project_id: string`\n  - `resource_id: string`\n  - `status: 'pending' | 'running' | 'done' | 'failed' | 'unknown'`\n  - `type: 'create' | 'update' | 'delete' | 'restart'`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\nconst operation = await client.networking.vpcs.update('vpc_id');\n\nconsole.log(operation);\n```",
    perLanguage: {
      cli: {
        method: 'vpcs update',
        example: "nirvana networking:vpcs update \\\n  --api-key 'My API Key' \\\n  --vpc-id vpc_id",
      },
      go: {
        method: 'client.Networking.VPCs.Update',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/nirvana-labs/nirvana-go"\n\t"github.com/nirvana-labs/nirvana-go/networking"\n\t"github.com/nirvana-labs/nirvana-go/option"\n)\n\nfunc main() {\n\tclient := nirvana.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\toperation, err := client.Networking.VPCs.Update(\n\t\tcontext.TODO(),\n\t\t"vpc_id",\n\t\tnetworking.VPCUpdateParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", operation.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.nirvanalabs.io/v1/networking/vpcs/$VPC_ID \\\n    -X PATCH \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $NIRVANA_LABS_API_KEY" \\\n    -d \'{\n          "name": "my-vpc",\n          "subnet_name": "my-subnet",\n          "tags": [\n            "production",\n            "ethereum"\n          ]\n        }\'',
      },
      typescript: {
        method: 'client.networking.vpcs.update',
        example:
          "import NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs({\n  apiKey: process.env['NIRVANA_LABS_API_KEY'], // This is the default and can be omitted\n});\n\nconst operation = await client.networking.vpcs.update('vpc_id');\n\nconsole.log(operation.id);",
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/v1/networking/vpcs/{vpc_id}',
    httpMethod: 'delete',
    summary: 'Delete VPC',
    description: 'Delete a VPC',
    stainlessPath: '(resource) networking.vpcs > (method) delete',
    qualified: 'client.networking.vpcs.delete',
    params: ['vpc_id: string;'],
    response:
      "{ id: string; created_at: string; kind: 'vm' | 'volume' | 'vpc' | 'firewall_rule' | 'nks_cluster' | 'nks_node_pool'; project_id: string; resource_id: string; status: 'pending' | 'running' | 'done' | 'failed' | 'unknown'; type: 'create' | 'update' | 'delete' | 'restart'; updated_at: string; }",
    markdown:
      "## delete\n\n`client.networking.vpcs.delete(vpc_id: string): { id: string; created_at: string; kind: operation_kind; project_id: string; resource_id: string; status: operation_status; type: operation_type; updated_at: string; }`\n\n**delete** `/v1/networking/vpcs/{vpc_id}`\n\nDelete a VPC\n\n### Parameters\n\n- `vpc_id: string`\n\n### Returns\n\n- `{ id: string; created_at: string; kind: 'vm' | 'volume' | 'vpc' | 'firewall_rule' | 'nks_cluster' | 'nks_node_pool'; project_id: string; resource_id: string; status: 'pending' | 'running' | 'done' | 'failed' | 'unknown'; type: 'create' | 'update' | 'delete' | 'restart'; updated_at: string; }`\n  Operation details.\n\n  - `id: string`\n  - `created_at: string`\n  - `kind: 'vm' | 'volume' | 'vpc' | 'firewall_rule' | 'nks_cluster' | 'nks_node_pool'`\n  - `project_id: string`\n  - `resource_id: string`\n  - `status: 'pending' | 'running' | 'done' | 'failed' | 'unknown'`\n  - `type: 'create' | 'update' | 'delete' | 'restart'`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\nconst operation = await client.networking.vpcs.delete('vpc_id');\n\nconsole.log(operation);\n```",
    perLanguage: {
      cli: {
        method: 'vpcs delete',
        example: "nirvana networking:vpcs delete \\\n  --api-key 'My API Key' \\\n  --vpc-id vpc_id",
      },
      go: {
        method: 'client.Networking.VPCs.Delete',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/nirvana-labs/nirvana-go"\n\t"github.com/nirvana-labs/nirvana-go/option"\n)\n\nfunc main() {\n\tclient := nirvana.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\toperation, err := client.Networking.VPCs.Delete(context.TODO(), "vpc_id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", operation.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.nirvanalabs.io/v1/networking/vpcs/$VPC_ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $NIRVANA_LABS_API_KEY"',
      },
      typescript: {
        method: 'client.networking.vpcs.delete',
        example:
          "import NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs({\n  apiKey: process.env['NIRVANA_LABS_API_KEY'], // This is the default and can be omitted\n});\n\nconst operation = await client.networking.vpcs.delete('vpc_id');\n\nconsole.log(operation.id);",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/v1/networking/vpcs',
    httpMethod: 'get',
    summary: 'List VPCs',
    description: 'List all VPCs',
    stainlessPath: '(resource) networking.vpcs > (method) list',
    qualified: 'client.networking.vpcs.list',
    params: ['project_id: string;', 'cursor?: string;', 'limit?: number;'],
    response:
      "{ id: string; created_at: string; firewall_rule_ids: string[]; name: string; project_id: string; region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1'; status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'; subnet: { id: string; cidr: string; created_at: string; name: string; updated_at: string; }; tags: string[]; updated_at: string; }",
    markdown:
      "## list\n\n`client.networking.vpcs.list(project_id: string, cursor?: string, limit?: number): { id: string; created_at: string; firewall_rule_ids: string[]; name: string; project_id: string; region: region_name; status: resource_status; subnet: subnet; tags: string[]; updated_at: string; }`\n\n**get** `/v1/networking/vpcs`\n\nList all VPCs\n\n### Parameters\n\n- `project_id: string`\n  Project ID of resources to request\n\n- `cursor?: string`\n  Pagination cursor returned by a previous request\n\n- `limit?: number`\n  Maximum number of items to return\n\n### Returns\n\n- `{ id: string; created_at: string; firewall_rule_ids: string[]; name: string; project_id: string; region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1'; status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'; subnet: { id: string; cidr: string; created_at: string; name: string; updated_at: string; }; tags: string[]; updated_at: string; }`\n  VPC details.\n\n  - `id: string`\n  - `created_at: string`\n  - `firewall_rule_ids: string[]`\n  - `name: string`\n  - `project_id: string`\n  - `region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1'`\n  - `status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'`\n  - `subnet: { id: string; cidr: string; created_at: string; name: string; updated_at: string; }`\n  - `tags: string[]`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\n// Automatically fetches more pages as needed.\nfor await (const vpc of client.networking.vpcs.list({ project_id: 'project_id' })) {\n  console.log(vpc);\n}\n```",
    perLanguage: {
      cli: {
        method: 'vpcs list',
        example: "nirvana networking:vpcs list \\\n  --api-key 'My API Key' \\\n  --project-id project_id",
      },
      go: {
        method: 'client.Networking.VPCs.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/nirvana-labs/nirvana-go"\n\t"github.com/nirvana-labs/nirvana-go/networking"\n\t"github.com/nirvana-labs/nirvana-go/option"\n)\n\nfunc main() {\n\tclient := nirvana.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpage, err := client.Networking.VPCs.List(context.TODO(), networking.VPCListParams{\n\t\tProjectID: "project_id",\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", page)\n}\n',
      },
      http: {
        example:
          'curl https://api.nirvanalabs.io/v1/networking/vpcs \\\n    -H "Authorization: Bearer $NIRVANA_LABS_API_KEY"',
      },
      typescript: {
        method: 'client.networking.vpcs.list',
        example:
          "import NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs({\n  apiKey: process.env['NIRVANA_LABS_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const vpc of client.networking.vpcs.list({ project_id: 'project_id' })) {\n  console.log(vpc.id);\n}",
      },
    },
  },
  {
    name: 'create',
    endpoint: '/v1/networking/vpcs/availability',
    httpMethod: 'post',
    summary: 'Check Create VPC Availability',
    description: 'Check if a VPC can be created',
    stainlessPath: '(resource) networking.vpcs.availability > (method) create',
    qualified: 'client.networking.vpcs.availability.create',
    params: [
      'name: string;',
      'project_id: string;',
      "region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1';",
      'subnet_name: string;',
      'tags?: string[];',
    ],
    markdown:
      "## create\n\n`client.networking.vpcs.availability.create(name: string, project_id: string, region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1', subnet_name: string, tags?: string[]): void`\n\n**post** `/v1/networking/vpcs/availability`\n\nCheck if a VPC can be created\n\n### Parameters\n\n- `name: string`\n  Name of the VPC.\n\n- `project_id: string`\n  Project ID the VPC belongs to.\n\n- `region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1'`\n  Region the resource is in.\n\n- `subnet_name: string`\n  Name of the subnet to create.\n\n- `tags?: string[]`\n  Tags to attach to the VPC.\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\nawait client.networking.vpcs.availability.create({\n  name: 'my-vpc',\n  project_id: '123e4567-e89b-12d3-a456-426614174000',\n  region: 'us-sva-2',\n  subnet_name: 'my-subnet',\n})\n```",
    perLanguage: {
      cli: {
        method: 'availability create',
        example:
          "nirvana networking:vpcs:availability create \\\n  --api-key 'My API Key' \\\n  --name my-vpc \\\n  --project-id 123e4567-e89b-12d3-a456-426614174000 \\\n  --region us-sva-2 \\\n  --subnet-name my-subnet",
      },
      go: {
        method: 'client.Networking.VPCs.Availability.New',
        example:
          'package main\n\nimport (\n\t"context"\n\n\t"github.com/nirvana-labs/nirvana-go"\n\t"github.com/nirvana-labs/nirvana-go/networking"\n\t"github.com/nirvana-labs/nirvana-go/option"\n\t"github.com/nirvana-labs/nirvana-go/shared"\n)\n\nfunc main() {\n\tclient := nirvana.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\terr := client.Networking.VPCs.Availability.New(context.TODO(), networking.VPCAvailabilityNewParams{\n\t\tName:       "my-vpc",\n\t\tProjectID:  "123e4567-e89b-12d3-a456-426614174000",\n\t\tRegion:     shared.RegionNameUsSva2,\n\t\tSubnetName: "my-subnet",\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n}\n',
      },
      http: {
        example:
          'curl https://api.nirvanalabs.io/v1/networking/vpcs/availability \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $NIRVANA_LABS_API_KEY" \\\n    -d \'{\n          "name": "my-vpc",\n          "project_id": "123e4567-e89b-12d3-a456-426614174000",\n          "region": "us-sva-2",\n          "subnet_name": "my-subnet",\n          "tags": [\n            "production",\n            "ethereum"\n          ]\n        }\'',
      },
      typescript: {
        method: 'client.networking.vpcs.availability.create',
        example:
          "import NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs({\n  apiKey: process.env['NIRVANA_LABS_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.networking.vpcs.availability.create({\n  name: 'my-vpc',\n  project_id: '123e4567-e89b-12d3-a456-426614174000',\n  region: 'us-sva-2',\n  subnet_name: 'my-subnet',\n});",
      },
    },
  },
  {
    name: 'update',
    endpoint: '/v1/networking/vpcs/{vpc_id}/availability',
    httpMethod: 'patch',
    summary: 'Check Update VPC Availability',
    description: 'Check if a VPC can be updated',
    stainlessPath: '(resource) networking.vpcs.availability > (method) update',
    qualified: 'client.networking.vpcs.availability.update',
    params: ['vpc_id: string;', 'name?: string;', 'subnet_name?: string;', 'tags?: string[];'],
    markdown:
      "## update\n\n`client.networking.vpcs.availability.update(vpc_id: string, name?: string, subnet_name?: string, tags?: string[]): void`\n\n**patch** `/v1/networking/vpcs/{vpc_id}/availability`\n\nCheck if a VPC can be updated\n\n### Parameters\n\n- `vpc_id: string`\n\n- `name?: string`\n  Name of the VPC.\n\n- `subnet_name?: string`\n  Name of the subnet to create.\n\n- `tags?: string[]`\n  Tags to attach to the VPC.\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\nawait client.networking.vpcs.availability.update('vpc_id')\n```",
    perLanguage: {
      cli: {
        method: 'availability update',
        example:
          "nirvana networking:vpcs:availability update \\\n  --api-key 'My API Key' \\\n  --vpc-id vpc_id",
      },
      go: {
        method: 'client.Networking.VPCs.Availability.Update',
        example:
          'package main\n\nimport (\n\t"context"\n\n\t"github.com/nirvana-labs/nirvana-go"\n\t"github.com/nirvana-labs/nirvana-go/networking"\n\t"github.com/nirvana-labs/nirvana-go/option"\n)\n\nfunc main() {\n\tclient := nirvana.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\terr := client.Networking.VPCs.Availability.Update(\n\t\tcontext.TODO(),\n\t\t"vpc_id",\n\t\tnetworking.VPCAvailabilityUpdateParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n}\n',
      },
      http: {
        example:
          'curl https://api.nirvanalabs.io/v1/networking/vpcs/$VPC_ID/availability \\\n    -X PATCH \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $NIRVANA_LABS_API_KEY" \\\n    -d \'{\n          "name": "my-vpc",\n          "subnet_name": "my-subnet",\n          "tags": [\n            "production",\n            "ethereum"\n          ]\n        }\'',
      },
      typescript: {
        method: 'client.networking.vpcs.availability.update',
        example:
          "import NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs({\n  apiKey: process.env['NIRVANA_LABS_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.networking.vpcs.availability.update('vpc_id');",
      },
    },
  },
  {
    name: 'create',
    endpoint: '/v1/networking/vpcs/{vpc_id}/firewall_rules',
    httpMethod: 'post',
    summary: 'Create Firewall Rule',
    description: 'Create a firewall rule',
    stainlessPath: '(resource) networking.firewall_rules > (method) create',
    qualified: 'client.networking.firewallRules.create',
    params: [
      'vpc_id: string;',
      'destination_address: string;',
      'destination_ports: string[];',
      'name: string;',
      "protocol: 'tcp' | 'udp';",
      'source_address: string;',
      'tags?: string[];',
    ],
    response:
      "{ id: string; created_at: string; kind: 'vm' | 'volume' | 'vpc' | 'firewall_rule' | 'nks_cluster' | 'nks_node_pool'; project_id: string; resource_id: string; status: 'pending' | 'running' | 'done' | 'failed' | 'unknown'; type: 'create' | 'update' | 'delete' | 'restart'; updated_at: string; }",
    markdown:
      "## create\n\n`client.networking.firewallRules.create(vpc_id: string, destination_address: string, destination_ports: string[], name: string, protocol: 'tcp' | 'udp', source_address: string, tags?: string[]): { id: string; created_at: string; kind: operation_kind; project_id: string; resource_id: string; status: operation_status; type: operation_type; updated_at: string; }`\n\n**post** `/v1/networking/vpcs/{vpc_id}/firewall_rules`\n\nCreate a firewall rule\n\n### Parameters\n\n- `vpc_id: string`\n\n- `destination_address: string`\n  Destination address of the Firewall Rule. Either VPC CIDR or VM in VPC. Must be in network-aligned/canonical form.\n\n- `destination_ports: string[]`\n  Destination ports of the Firewall Rule.\n\n- `name: string`\n  Name of the Firewall Rule.\n\n- `protocol: 'tcp' | 'udp'`\n  Protocol of the Firewall Rule.\n\n- `source_address: string`\n  Source address of the Firewall Rule. Address of 0.0.0.0 requires a CIDR mask of 0. Must be in network-aligned/canonical form.\n\n- `tags?: string[]`\n  Tags to attach to the Firewall Rule.\n\n### Returns\n\n- `{ id: string; created_at: string; kind: 'vm' | 'volume' | 'vpc' | 'firewall_rule' | 'nks_cluster' | 'nks_node_pool'; project_id: string; resource_id: string; status: 'pending' | 'running' | 'done' | 'failed' | 'unknown'; type: 'create' | 'update' | 'delete' | 'restart'; updated_at: string; }`\n  Operation details.\n\n  - `id: string`\n  - `created_at: string`\n  - `kind: 'vm' | 'volume' | 'vpc' | 'firewall_rule' | 'nks_cluster' | 'nks_node_pool'`\n  - `project_id: string`\n  - `resource_id: string`\n  - `status: 'pending' | 'running' | 'done' | 'failed' | 'unknown'`\n  - `type: 'create' | 'update' | 'delete' | 'restart'`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\nconst operation = await client.networking.firewallRules.create('vpc_id', {\n  destination_address: '10.0.0.0/25',\n  destination_ports: ['22', '80', '443'],\n  name: 'my-firewall-rule',\n  protocol: 'tcp',\n  source_address: '0.0.0.0/0',\n});\n\nconsole.log(operation);\n```",
    perLanguage: {
      cli: {
        method: 'firewall_rules create',
        example:
          "nirvana networking:firewall-rules create \\\n  --api-key 'My API Key' \\\n  --vpc-id vpc_id \\\n  --destination-address 10.0.0.0/25 \\\n  --destination-port \"'22'\" \\\n  --destination-port \"'80'\" \\\n  --destination-port \"'443'\" \\\n  --name my-firewall-rule \\\n  --protocol tcp \\\n  --source-address 0.0.0.0/0",
      },
      go: {
        method: 'client.Networking.FirewallRules.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/nirvana-labs/nirvana-go"\n\t"github.com/nirvana-labs/nirvana-go/networking"\n\t"github.com/nirvana-labs/nirvana-go/option"\n)\n\nfunc main() {\n\tclient := nirvana.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\toperation, err := client.Networking.FirewallRules.New(\n\t\tcontext.TODO(),\n\t\t"vpc_id",\n\t\tnetworking.FirewallRuleNewParams{\n\t\t\tDestinationAddress: "10.0.0.0/25",\n\t\t\tDestinationPorts:   []string{"22", "80", "443"},\n\t\t\tName:               "my-firewall-rule",\n\t\t\tProtocol:           networking.FirewallRuleNewParamsProtocolTcp,\n\t\t\tSourceAddress:      "0.0.0.0/0",\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", operation.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.nirvanalabs.io/v1/networking/vpcs/$VPC_ID/firewall_rules \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $NIRVANA_LABS_API_KEY" \\\n    -d \'{\n          "destination_address": "10.0.0.0/25",\n          "destination_ports": [\n            "22",\n            "80",\n            "443"\n          ],\n          "name": "my-firewall-rule",\n          "protocol": "tcp",\n          "source_address": "0.0.0.0/0",\n          "tags": [\n            "production",\n            "ethereum"\n          ]\n        }\'',
      },
      typescript: {
        method: 'client.networking.firewallRules.create',
        example:
          "import NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs({\n  apiKey: process.env['NIRVANA_LABS_API_KEY'], // This is the default and can be omitted\n});\n\nconst operation = await client.networking.firewallRules.create('vpc_id', {\n  destination_address: '10.0.0.0/25',\n  destination_ports: ['22', '80', '443'],\n  name: 'my-firewall-rule',\n  protocol: 'tcp',\n  source_address: '0.0.0.0/0',\n});\n\nconsole.log(operation.id);",
      },
    },
  },
  {
    name: 'get',
    endpoint: '/v1/networking/vpcs/{vpc_id}/firewall_rules/{firewall_rule_id}',
    httpMethod: 'get',
    summary: 'Firewall Rule Details',
    description: 'Get details about a firewall rule',
    stainlessPath: '(resource) networking.firewall_rules > (method) get',
    qualified: 'client.networking.firewallRules.get',
    params: ['vpc_id: string;', 'firewall_rule_id: string;'],
    response:
      "{ id: string; created_at: string; destination_address: string; destination_ports: string[]; name: string; protocol: 'tcp' | 'udp'; source_address: string; status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'; tags: string[]; updated_at: string; vpc_id: string; }",
    markdown:
      "## get\n\n`client.networking.firewallRules.get(vpc_id: string, firewall_rule_id: string): { id: string; created_at: string; destination_address: string; destination_ports: string[]; name: string; protocol: 'tcp' | 'udp'; source_address: string; status: resource_status; tags: string[]; updated_at: string; vpc_id: string; }`\n\n**get** `/v1/networking/vpcs/{vpc_id}/firewall_rules/{firewall_rule_id}`\n\nGet details about a firewall rule\n\n### Parameters\n\n- `vpc_id: string`\n\n- `firewall_rule_id: string`\n\n### Returns\n\n- `{ id: string; created_at: string; destination_address: string; destination_ports: string[]; name: string; protocol: 'tcp' | 'udp'; source_address: string; status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'; tags: string[]; updated_at: string; vpc_id: string; }`\n  Firewall rule details.\n\n  - `id: string`\n  - `created_at: string`\n  - `destination_address: string`\n  - `destination_ports: string[]`\n  - `name: string`\n  - `protocol: 'tcp' | 'udp'`\n  - `source_address: string`\n  - `status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'`\n  - `tags: string[]`\n  - `updated_at: string`\n  - `vpc_id: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\nconst firewallRule = await client.networking.firewallRules.get('firewall_rule_id', { vpc_id: 'vpc_id' });\n\nconsole.log(firewallRule);\n```",
    perLanguage: {
      cli: {
        method: 'firewall_rules get',
        example:
          "nirvana networking:firewall-rules get \\\n  --api-key 'My API Key' \\\n  --vpc-id vpc_id \\\n  --firewall-rule-id firewall_rule_id",
      },
      go: {
        method: 'client.Networking.FirewallRules.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/nirvana-labs/nirvana-go"\n\t"github.com/nirvana-labs/nirvana-go/option"\n)\n\nfunc main() {\n\tclient := nirvana.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tfirewallRule, err := client.Networking.FirewallRules.Get(\n\t\tcontext.TODO(),\n\t\t"vpc_id",\n\t\t"firewall_rule_id",\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", firewallRule.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.nirvanalabs.io/v1/networking/vpcs/$VPC_ID/firewall_rules/$FIREWALL_RULE_ID \\\n    -H "Authorization: Bearer $NIRVANA_LABS_API_KEY"',
      },
      typescript: {
        method: 'client.networking.firewallRules.get',
        example:
          "import NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs({\n  apiKey: process.env['NIRVANA_LABS_API_KEY'], // This is the default and can be omitted\n});\n\nconst firewallRule = await client.networking.firewallRules.get('firewall_rule_id', {\n  vpc_id: 'vpc_id',\n});\n\nconsole.log(firewallRule.id);",
      },
    },
  },
  {
    name: 'update',
    endpoint: '/v1/networking/vpcs/{vpc_id}/firewall_rules/{firewall_rule_id}',
    httpMethod: 'patch',
    summary: 'Update Firewall Rule',
    description: 'Update a firewall rule',
    stainlessPath: '(resource) networking.firewall_rules > (method) update',
    qualified: 'client.networking.firewallRules.update',
    params: [
      'vpc_id: string;',
      'firewall_rule_id: string;',
      'destination_address?: string;',
      'destination_ports?: string[];',
      'name?: string;',
      "protocol?: 'tcp' | 'udp';",
      'source_address?: string;',
      'tags?: string[];',
    ],
    response:
      "{ id: string; created_at: string; kind: 'vm' | 'volume' | 'vpc' | 'firewall_rule' | 'nks_cluster' | 'nks_node_pool'; project_id: string; resource_id: string; status: 'pending' | 'running' | 'done' | 'failed' | 'unknown'; type: 'create' | 'update' | 'delete' | 'restart'; updated_at: string; }",
    markdown:
      "## update\n\n`client.networking.firewallRules.update(vpc_id: string, firewall_rule_id: string, destination_address?: string, destination_ports?: string[], name?: string, protocol?: 'tcp' | 'udp', source_address?: string, tags?: string[]): { id: string; created_at: string; kind: operation_kind; project_id: string; resource_id: string; status: operation_status; type: operation_type; updated_at: string; }`\n\n**patch** `/v1/networking/vpcs/{vpc_id}/firewall_rules/{firewall_rule_id}`\n\nUpdate a firewall rule\n\n### Parameters\n\n- `vpc_id: string`\n\n- `firewall_rule_id: string`\n\n- `destination_address?: string`\n  Destination address of the Firewall Rule. Either VPC CIDR or VM in VPC. Must be in network-aligned/canonical form.\n\n- `destination_ports?: string[]`\n  Destination ports of the Firewall Rule.\n\n- `name?: string`\n  Name of the Firewall Rule.\n\n- `protocol?: 'tcp' | 'udp'`\n  Protocol of the Firewall Rule.\n\n- `source_address?: string`\n  Source address of the Firewall Rule. Address of 0.0.0.0 requires a CIDR mask of 0. Must be in network-aligned/canonical form.\n\n- `tags?: string[]`\n  Tags to attach to the Firewall Rule.\n\n### Returns\n\n- `{ id: string; created_at: string; kind: 'vm' | 'volume' | 'vpc' | 'firewall_rule' | 'nks_cluster' | 'nks_node_pool'; project_id: string; resource_id: string; status: 'pending' | 'running' | 'done' | 'failed' | 'unknown'; type: 'create' | 'update' | 'delete' | 'restart'; updated_at: string; }`\n  Operation details.\n\n  - `id: string`\n  - `created_at: string`\n  - `kind: 'vm' | 'volume' | 'vpc' | 'firewall_rule' | 'nks_cluster' | 'nks_node_pool'`\n  - `project_id: string`\n  - `resource_id: string`\n  - `status: 'pending' | 'running' | 'done' | 'failed' | 'unknown'`\n  - `type: 'create' | 'update' | 'delete' | 'restart'`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\nconst operation = await client.networking.firewallRules.update('firewall_rule_id', { vpc_id: 'vpc_id' });\n\nconsole.log(operation);\n```",
    perLanguage: {
      cli: {
        method: 'firewall_rules update',
        example:
          "nirvana networking:firewall-rules update \\\n  --api-key 'My API Key' \\\n  --vpc-id vpc_id \\\n  --firewall-rule-id firewall_rule_id",
      },
      go: {
        method: 'client.Networking.FirewallRules.Update',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/nirvana-labs/nirvana-go"\n\t"github.com/nirvana-labs/nirvana-go/networking"\n\t"github.com/nirvana-labs/nirvana-go/option"\n)\n\nfunc main() {\n\tclient := nirvana.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\toperation, err := client.Networking.FirewallRules.Update(\n\t\tcontext.TODO(),\n\t\t"vpc_id",\n\t\t"firewall_rule_id",\n\t\tnetworking.FirewallRuleUpdateParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", operation.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.nirvanalabs.io/v1/networking/vpcs/$VPC_ID/firewall_rules/$FIREWALL_RULE_ID \\\n    -X PATCH \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $NIRVANA_LABS_API_KEY" \\\n    -d \'{\n          "destination_address": "10.0.0.0/25",\n          "destination_ports": [\n            "22",\n            "80",\n            "443"\n          ],\n          "name": "my-firewall-rule",\n          "protocol": "tcp",\n          "source_address": "0.0.0.0/0",\n          "tags": [\n            "production",\n            "ethereum"\n          ]\n        }\'',
      },
      typescript: {
        method: 'client.networking.firewallRules.update',
        example:
          "import NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs({\n  apiKey: process.env['NIRVANA_LABS_API_KEY'], // This is the default and can be omitted\n});\n\nconst operation = await client.networking.firewallRules.update('firewall_rule_id', {\n  vpc_id: 'vpc_id',\n});\n\nconsole.log(operation.id);",
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/v1/networking/vpcs/{vpc_id}/firewall_rules/{firewall_rule_id}',
    httpMethod: 'delete',
    summary: 'Delete Firewall Rule',
    description: 'Delete a firewall rule',
    stainlessPath: '(resource) networking.firewall_rules > (method) delete',
    qualified: 'client.networking.firewallRules.delete',
    params: ['vpc_id: string;', 'firewall_rule_id: string;'],
    response:
      "{ id: string; created_at: string; kind: 'vm' | 'volume' | 'vpc' | 'firewall_rule' | 'nks_cluster' | 'nks_node_pool'; project_id: string; resource_id: string; status: 'pending' | 'running' | 'done' | 'failed' | 'unknown'; type: 'create' | 'update' | 'delete' | 'restart'; updated_at: string; }",
    markdown:
      "## delete\n\n`client.networking.firewallRules.delete(vpc_id: string, firewall_rule_id: string): { id: string; created_at: string; kind: operation_kind; project_id: string; resource_id: string; status: operation_status; type: operation_type; updated_at: string; }`\n\n**delete** `/v1/networking/vpcs/{vpc_id}/firewall_rules/{firewall_rule_id}`\n\nDelete a firewall rule\n\n### Parameters\n\n- `vpc_id: string`\n\n- `firewall_rule_id: string`\n\n### Returns\n\n- `{ id: string; created_at: string; kind: 'vm' | 'volume' | 'vpc' | 'firewall_rule' | 'nks_cluster' | 'nks_node_pool'; project_id: string; resource_id: string; status: 'pending' | 'running' | 'done' | 'failed' | 'unknown'; type: 'create' | 'update' | 'delete' | 'restart'; updated_at: string; }`\n  Operation details.\n\n  - `id: string`\n  - `created_at: string`\n  - `kind: 'vm' | 'volume' | 'vpc' | 'firewall_rule' | 'nks_cluster' | 'nks_node_pool'`\n  - `project_id: string`\n  - `resource_id: string`\n  - `status: 'pending' | 'running' | 'done' | 'failed' | 'unknown'`\n  - `type: 'create' | 'update' | 'delete' | 'restart'`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\nconst operation = await client.networking.firewallRules.delete('firewall_rule_id', { vpc_id: 'vpc_id' });\n\nconsole.log(operation);\n```",
    perLanguage: {
      cli: {
        method: 'firewall_rules delete',
        example:
          "nirvana networking:firewall-rules delete \\\n  --api-key 'My API Key' \\\n  --vpc-id vpc_id \\\n  --firewall-rule-id firewall_rule_id",
      },
      go: {
        method: 'client.Networking.FirewallRules.Delete',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/nirvana-labs/nirvana-go"\n\t"github.com/nirvana-labs/nirvana-go/option"\n)\n\nfunc main() {\n\tclient := nirvana.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\toperation, err := client.Networking.FirewallRules.Delete(\n\t\tcontext.TODO(),\n\t\t"vpc_id",\n\t\t"firewall_rule_id",\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", operation.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.nirvanalabs.io/v1/networking/vpcs/$VPC_ID/firewall_rules/$FIREWALL_RULE_ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $NIRVANA_LABS_API_KEY"',
      },
      typescript: {
        method: 'client.networking.firewallRules.delete',
        example:
          "import NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs({\n  apiKey: process.env['NIRVANA_LABS_API_KEY'], // This is the default and can be omitted\n});\n\nconst operation = await client.networking.firewallRules.delete('firewall_rule_id', {\n  vpc_id: 'vpc_id',\n});\n\nconsole.log(operation.id);",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/v1/networking/vpcs/{vpc_id}/firewall_rules',
    httpMethod: 'get',
    summary: 'List Firewall Rules',
    description: 'List all firewall rules',
    stainlessPath: '(resource) networking.firewall_rules > (method) list',
    qualified: 'client.networking.firewallRules.list',
    params: ['vpc_id: string;', 'cursor?: string;', 'limit?: number;'],
    response:
      "{ id: string; created_at: string; destination_address: string; destination_ports: string[]; name: string; protocol: 'tcp' | 'udp'; source_address: string; status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'; tags: string[]; updated_at: string; vpc_id: string; }",
    markdown:
      "## list\n\n`client.networking.firewallRules.list(vpc_id: string, cursor?: string, limit?: number): { id: string; created_at: string; destination_address: string; destination_ports: string[]; name: string; protocol: 'tcp' | 'udp'; source_address: string; status: resource_status; tags: string[]; updated_at: string; vpc_id: string; }`\n\n**get** `/v1/networking/vpcs/{vpc_id}/firewall_rules`\n\nList all firewall rules\n\n### Parameters\n\n- `vpc_id: string`\n\n- `cursor?: string`\n  Pagination cursor returned by a previous request\n\n- `limit?: number`\n  Maximum number of items to return\n\n### Returns\n\n- `{ id: string; created_at: string; destination_address: string; destination_ports: string[]; name: string; protocol: 'tcp' | 'udp'; source_address: string; status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'; tags: string[]; updated_at: string; vpc_id: string; }`\n  Firewall rule details.\n\n  - `id: string`\n  - `created_at: string`\n  - `destination_address: string`\n  - `destination_ports: string[]`\n  - `name: string`\n  - `protocol: 'tcp' | 'udp'`\n  - `source_address: string`\n  - `status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'`\n  - `tags: string[]`\n  - `updated_at: string`\n  - `vpc_id: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\n// Automatically fetches more pages as needed.\nfor await (const firewallRule of client.networking.firewallRules.list('vpc_id')) {\n  console.log(firewallRule);\n}\n```",
    perLanguage: {
      cli: {
        method: 'firewall_rules list',
        example: "nirvana networking:firewall-rules list \\\n  --api-key 'My API Key' \\\n  --vpc-id vpc_id",
      },
      go: {
        method: 'client.Networking.FirewallRules.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/nirvana-labs/nirvana-go"\n\t"github.com/nirvana-labs/nirvana-go/networking"\n\t"github.com/nirvana-labs/nirvana-go/option"\n)\n\nfunc main() {\n\tclient := nirvana.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpage, err := client.Networking.FirewallRules.List(\n\t\tcontext.TODO(),\n\t\t"vpc_id",\n\t\tnetworking.FirewallRuleListParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", page)\n}\n',
      },
      http: {
        example:
          'curl https://api.nirvanalabs.io/v1/networking/vpcs/$VPC_ID/firewall_rules \\\n    -H "Authorization: Bearer $NIRVANA_LABS_API_KEY"',
      },
      typescript: {
        method: 'client.networking.firewallRules.list',
        example:
          "import NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs({\n  apiKey: process.env['NIRVANA_LABS_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const firewallRule of client.networking.firewallRules.list('vpc_id')) {\n  console.log(firewallRule.id);\n}",
      },
    },
  },
  {
    name: 'create',
    endpoint: '/v1/networking/connect/connections',
    httpMethod: 'post',
    summary: 'Create Connect Connection',
    description: 'Create a Connect Connection',
    stainlessPath: '(resource) networking.connect.connections > (method) create',
    qualified: 'client.networking.connect.connections.create',
    params: [
      'bandwidth_mbps: 50 | 200 | 500 | 1000 | 2000;',
      'cidrs: string[];',
      'name: string;',
      'project_id: string;',
      'provider_cidrs: string[];',
      "region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1';",
      'aws?: { account_id: string; region: string; };',
      'tags?: string[];',
    ],
    response:
      "{ id: string; created_at: string; kind: 'vm' | 'volume' | 'vpc' | 'firewall_rule' | 'nks_cluster' | 'nks_node_pool'; project_id: string; resource_id: string; status: 'pending' | 'running' | 'done' | 'failed' | 'unknown'; type: 'create' | 'update' | 'delete' | 'restart'; updated_at: string; }",
    markdown:
      "## create\n\n`client.networking.connect.connections.create(bandwidth_mbps: 50 | 200 | 500 | 1000 | 2000, cidrs: string[], name: string, project_id: string, provider_cidrs: string[], region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1', aws?: { account_id: string; region: string; }, tags?: string[]): { id: string; created_at: string; kind: operation_kind; project_id: string; resource_id: string; status: operation_status; type: operation_type; updated_at: string; }`\n\n**post** `/v1/networking/connect/connections`\n\nCreate a Connect Connection\n\n### Parameters\n\n- `bandwidth_mbps: 50 | 200 | 500 | 1000 | 2000`\n  Connect Connection speed in Mbps\n\n- `cidrs: string[]`\n  CIDRs for the Connect Connection. Must be in network-aligned/canonical form.\n\n- `name: string`\n  Name of the Connect Connection\n\n- `project_id: string`\n  Project ID the Connect Connection belongs to\n\n- `provider_cidrs: string[]`\n  Provider CIDRs. Must be in network-aligned/canonical form.\n\n- `region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1'`\n  Region the resource is in.\n\n- `aws?: { account_id: string; region: string; }`\n  AWS provider configuration\n  - `account_id: string`\n    AWS account id\n  - `region: string`\n    AWS region where the connection will be established\n\n- `tags?: string[]`\n  Tags to attach to the Connect Connection\n\n### Returns\n\n- `{ id: string; created_at: string; kind: 'vm' | 'volume' | 'vpc' | 'firewall_rule' | 'nks_cluster' | 'nks_node_pool'; project_id: string; resource_id: string; status: 'pending' | 'running' | 'done' | 'failed' | 'unknown'; type: 'create' | 'update' | 'delete' | 'restart'; updated_at: string; }`\n  Operation details.\n\n  - `id: string`\n  - `created_at: string`\n  - `kind: 'vm' | 'volume' | 'vpc' | 'firewall_rule' | 'nks_cluster' | 'nks_node_pool'`\n  - `project_id: string`\n  - `resource_id: string`\n  - `status: 'pending' | 'running' | 'done' | 'failed' | 'unknown'`\n  - `type: 'create' | 'update' | 'delete' | 'restart'`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\nconst operation = await client.networking.connect.connections.create({\n  bandwidth_mbps: 50,\n  cidrs: ['10.0.0.0/16'],\n  name: 'my-connect-connection',\n  project_id: '123e4567-e89b-12d3-a456-426614174000',\n  provider_cidrs: ['172.16.0.0/16'],\n  region: 'us-sva-2',\n});\n\nconsole.log(operation);\n```",
    perLanguage: {
      cli: {
        method: 'connections create',
        example:
          "nirvana networking:connect:connections create \\\n  --api-key 'My API Key' \\\n  --bandwidth-mbps 50 \\\n  --cidr 10.0.0.0/16 \\\n  --name my-connect-connection \\\n  --project-id 123e4567-e89b-12d3-a456-426614174000 \\\n  --provider-cidr 172.16.0.0/16 \\\n  --region us-sva-2",
      },
      go: {
        method: 'client.Networking.Connect.Connections.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/nirvana-labs/nirvana-go"\n\t"github.com/nirvana-labs/nirvana-go/networking"\n\t"github.com/nirvana-labs/nirvana-go/option"\n\t"github.com/nirvana-labs/nirvana-go/shared"\n)\n\nfunc main() {\n\tclient := nirvana.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\toperation, err := client.Networking.Connect.Connections.New(context.TODO(), networking.ConnectConnectionNewParams{\n\t\tBandwidthMbps: 50,\n\t\tCIDRs:         []string{"10.0.0.0/16"},\n\t\tName:          "my-connect-connection",\n\t\tProjectID:     "123e4567-e89b-12d3-a456-426614174000",\n\t\tProviderCIDRs: []string{"172.16.0.0/16"},\n\t\tRegion:        shared.RegionNameUsSva2,\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", operation.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.nirvanalabs.io/v1/networking/connect/connections \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $NIRVANA_LABS_API_KEY" \\\n    -d \'{\n          "bandwidth_mbps": 50,\n          "cidrs": [\n            "10.0.0.0/16"\n          ],\n          "name": "my-connect-connection",\n          "project_id": "123e4567-e89b-12d3-a456-426614174000",\n          "provider_cidrs": [\n            "172.16.0.0/16"\n          ],\n          "region": "us-sva-2",\n          "tags": [\n            "production",\n            "ethereum"\n          ]\n        }\'',
      },
      typescript: {
        method: 'client.networking.connect.connections.create',
        example:
          "import NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs({\n  apiKey: process.env['NIRVANA_LABS_API_KEY'], // This is the default and can be omitted\n});\n\nconst operation = await client.networking.connect.connections.create({\n  bandwidth_mbps: 50,\n  cidrs: ['10.0.0.0/16'],\n  name: 'my-connect-connection',\n  project_id: '123e4567-e89b-12d3-a456-426614174000',\n  provider_cidrs: ['172.16.0.0/16'],\n  region: 'us-sva-2',\n});\n\nconsole.log(operation.id);",
      },
    },
  },
  {
    name: 'get',
    endpoint: '/v1/networking/connect/connections/{connection_id}',
    httpMethod: 'get',
    summary: 'Get Connect Connection',
    description: 'Get Connect Connection details',
    stainlessPath: '(resource) networking.connect.connections > (method) get',
    qualified: 'client.networking.connect.connections.get',
    params: ['connection_id: string;'],
    response:
      "{ id: string; asn: number; aws: { region: string; }; bandwidth_mbps: 50 | 200 | 500 | 1000 | 2000; cidrs: string[]; created_at: string; name: string; project_id: string; provider_asn: number; provider_cidrs: string[]; provider_router_ip: string; region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1'; router_ip: string; status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'; tags: string[]; updated_at: string; }",
    markdown:
      "## get\n\n`client.networking.connect.connections.get(connection_id: string): { id: string; asn: number; aws: connect_connection_aws_config; bandwidth_mbps: connect_bandwidth_mbps; cidrs: string[]; created_at: string; name: string; project_id: string; provider_asn: number; provider_cidrs: string[]; provider_router_ip: string; region: region_name; router_ip: string; status: resource_status; tags: string[]; updated_at: string; }`\n\n**get** `/v1/networking/connect/connections/{connection_id}`\n\nGet Connect Connection details\n\n### Parameters\n\n- `connection_id: string`\n\n### Returns\n\n- `{ id: string; asn: number; aws: { region: string; }; bandwidth_mbps: 50 | 200 | 500 | 1000 | 2000; cidrs: string[]; created_at: string; name: string; project_id: string; provider_asn: number; provider_cidrs: string[]; provider_router_ip: string; region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1'; router_ip: string; status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'; tags: string[]; updated_at: string; }`\n  Connect Connection details.\n\n  - `id: string`\n  - `asn: number`\n  - `aws: { region: string; }`\n  - `bandwidth_mbps: 50 | 200 | 500 | 1000 | 2000`\n  - `cidrs: string[]`\n  - `created_at: string`\n  - `name: string`\n  - `project_id: string`\n  - `provider_asn: number`\n  - `provider_cidrs: string[]`\n  - `provider_router_ip: string`\n  - `region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1'`\n  - `router_ip: string`\n  - `status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'`\n  - `tags: string[]`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\nconst connectConnection = await client.networking.connect.connections.get('connection_id');\n\nconsole.log(connectConnection);\n```",
    perLanguage: {
      cli: {
        method: 'connections get',
        example:
          "nirvana networking:connect:connections get \\\n  --api-key 'My API Key' \\\n  --connection-id connection_id",
      },
      go: {
        method: 'client.Networking.Connect.Connections.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/nirvana-labs/nirvana-go"\n\t"github.com/nirvana-labs/nirvana-go/option"\n)\n\nfunc main() {\n\tclient := nirvana.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tconnectConnection, err := client.Networking.Connect.Connections.Get(context.TODO(), "connection_id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", connectConnection.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.nirvanalabs.io/v1/networking/connect/connections/$CONNECTION_ID \\\n    -H "Authorization: Bearer $NIRVANA_LABS_API_KEY"',
      },
      typescript: {
        method: 'client.networking.connect.connections.get',
        example:
          "import NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs({\n  apiKey: process.env['NIRVANA_LABS_API_KEY'], // This is the default and can be omitted\n});\n\nconst connectConnection = await client.networking.connect.connections.get('connection_id');\n\nconsole.log(connectConnection.id);",
      },
    },
  },
  {
    name: 'update',
    endpoint: '/v1/networking/connect/connections/{connection_id}',
    httpMethod: 'patch',
    summary: 'Update Connect Connection',
    description: 'Update Connect Connection details',
    stainlessPath: '(resource) networking.connect.connections > (method) update',
    qualified: 'client.networking.connect.connections.update',
    params: ['connection_id: string;', 'name?: string;', 'tags?: string[];'],
    response:
      "{ id: string; created_at: string; kind: 'vm' | 'volume' | 'vpc' | 'firewall_rule' | 'nks_cluster' | 'nks_node_pool'; project_id: string; resource_id: string; status: 'pending' | 'running' | 'done' | 'failed' | 'unknown'; type: 'create' | 'update' | 'delete' | 'restart'; updated_at: string; }",
    markdown:
      "## update\n\n`client.networking.connect.connections.update(connection_id: string, name?: string, tags?: string[]): { id: string; created_at: string; kind: operation_kind; project_id: string; resource_id: string; status: operation_status; type: operation_type; updated_at: string; }`\n\n**patch** `/v1/networking/connect/connections/{connection_id}`\n\nUpdate Connect Connection details\n\n### Parameters\n\n- `connection_id: string`\n\n- `name?: string`\n  Name of the Connect Connection.\n\n- `tags?: string[]`\n  Tags to attach to the Connect Connection\n\n### Returns\n\n- `{ id: string; created_at: string; kind: 'vm' | 'volume' | 'vpc' | 'firewall_rule' | 'nks_cluster' | 'nks_node_pool'; project_id: string; resource_id: string; status: 'pending' | 'running' | 'done' | 'failed' | 'unknown'; type: 'create' | 'update' | 'delete' | 'restart'; updated_at: string; }`\n  Operation details.\n\n  - `id: string`\n  - `created_at: string`\n  - `kind: 'vm' | 'volume' | 'vpc' | 'firewall_rule' | 'nks_cluster' | 'nks_node_pool'`\n  - `project_id: string`\n  - `resource_id: string`\n  - `status: 'pending' | 'running' | 'done' | 'failed' | 'unknown'`\n  - `type: 'create' | 'update' | 'delete' | 'restart'`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\nconst operation = await client.networking.connect.connections.update('connection_id');\n\nconsole.log(operation);\n```",
    perLanguage: {
      cli: {
        method: 'connections update',
        example:
          "nirvana networking:connect:connections update \\\n  --api-key 'My API Key' \\\n  --connection-id connection_id",
      },
      go: {
        method: 'client.Networking.Connect.Connections.Update',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/nirvana-labs/nirvana-go"\n\t"github.com/nirvana-labs/nirvana-go/networking"\n\t"github.com/nirvana-labs/nirvana-go/option"\n)\n\nfunc main() {\n\tclient := nirvana.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\toperation, err := client.Networking.Connect.Connections.Update(\n\t\tcontext.TODO(),\n\t\t"connection_id",\n\t\tnetworking.ConnectConnectionUpdateParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", operation.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.nirvanalabs.io/v1/networking/connect/connections/$CONNECTION_ID \\\n    -X PATCH \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $NIRVANA_LABS_API_KEY" \\\n    -d \'{\n          "name": "my-connect-connection",\n          "tags": [\n            "production",\n            "ethereum"\n          ]\n        }\'',
      },
      typescript: {
        method: 'client.networking.connect.connections.update',
        example:
          "import NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs({\n  apiKey: process.env['NIRVANA_LABS_API_KEY'], // This is the default and can be omitted\n});\n\nconst operation = await client.networking.connect.connections.update('connection_id');\n\nconsole.log(operation.id);",
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/v1/networking/connect/connections/{connection_id}',
    httpMethod: 'delete',
    summary: 'Delete Connect Connection',
    description: 'Delete Connect Connection',
    stainlessPath: '(resource) networking.connect.connections > (method) delete',
    qualified: 'client.networking.connect.connections.delete',
    params: ['connection_id: string;'],
    response:
      "{ id: string; created_at: string; kind: 'vm' | 'volume' | 'vpc' | 'firewall_rule' | 'nks_cluster' | 'nks_node_pool'; project_id: string; resource_id: string; status: 'pending' | 'running' | 'done' | 'failed' | 'unknown'; type: 'create' | 'update' | 'delete' | 'restart'; updated_at: string; }",
    markdown:
      "## delete\n\n`client.networking.connect.connections.delete(connection_id: string): { id: string; created_at: string; kind: operation_kind; project_id: string; resource_id: string; status: operation_status; type: operation_type; updated_at: string; }`\n\n**delete** `/v1/networking/connect/connections/{connection_id}`\n\nDelete Connect Connection\n\n### Parameters\n\n- `connection_id: string`\n\n### Returns\n\n- `{ id: string; created_at: string; kind: 'vm' | 'volume' | 'vpc' | 'firewall_rule' | 'nks_cluster' | 'nks_node_pool'; project_id: string; resource_id: string; status: 'pending' | 'running' | 'done' | 'failed' | 'unknown'; type: 'create' | 'update' | 'delete' | 'restart'; updated_at: string; }`\n  Operation details.\n\n  - `id: string`\n  - `created_at: string`\n  - `kind: 'vm' | 'volume' | 'vpc' | 'firewall_rule' | 'nks_cluster' | 'nks_node_pool'`\n  - `project_id: string`\n  - `resource_id: string`\n  - `status: 'pending' | 'running' | 'done' | 'failed' | 'unknown'`\n  - `type: 'create' | 'update' | 'delete' | 'restart'`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\nconst operation = await client.networking.connect.connections.delete('connection_id');\n\nconsole.log(operation);\n```",
    perLanguage: {
      cli: {
        method: 'connections delete',
        example:
          "nirvana networking:connect:connections delete \\\n  --api-key 'My API Key' \\\n  --connection-id connection_id",
      },
      go: {
        method: 'client.Networking.Connect.Connections.Delete',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/nirvana-labs/nirvana-go"\n\t"github.com/nirvana-labs/nirvana-go/option"\n)\n\nfunc main() {\n\tclient := nirvana.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\toperation, err := client.Networking.Connect.Connections.Delete(context.TODO(), "connection_id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", operation.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.nirvanalabs.io/v1/networking/connect/connections/$CONNECTION_ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $NIRVANA_LABS_API_KEY"',
      },
      typescript: {
        method: 'client.networking.connect.connections.delete',
        example:
          "import NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs({\n  apiKey: process.env['NIRVANA_LABS_API_KEY'], // This is the default and can be omitted\n});\n\nconst operation = await client.networking.connect.connections.delete('connection_id');\n\nconsole.log(operation.id);",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/v1/networking/connect/connections',
    httpMethod: 'get',
    summary: 'List Connect Connection',
    description: 'List all Connect Connections',
    stainlessPath: '(resource) networking.connect.connections > (method) list',
    qualified: 'client.networking.connect.connections.list',
    params: ['project_id: string;', 'cursor?: string;', 'limit?: number;'],
    response:
      "{ id: string; asn: number; aws: { region: string; }; bandwidth_mbps: 50 | 200 | 500 | 1000 | 2000; cidrs: string[]; created_at: string; name: string; project_id: string; provider_asn: number; provider_cidrs: string[]; provider_router_ip: string; region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1'; router_ip: string; status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'; tags: string[]; updated_at: string; }",
    markdown:
      "## list\n\n`client.networking.connect.connections.list(project_id: string, cursor?: string, limit?: number): { id: string; asn: number; aws: connect_connection_aws_config; bandwidth_mbps: connect_bandwidth_mbps; cidrs: string[]; created_at: string; name: string; project_id: string; provider_asn: number; provider_cidrs: string[]; provider_router_ip: string; region: region_name; router_ip: string; status: resource_status; tags: string[]; updated_at: string; }`\n\n**get** `/v1/networking/connect/connections`\n\nList all Connect Connections\n\n### Parameters\n\n- `project_id: string`\n  Project ID of resources to request\n\n- `cursor?: string`\n  Pagination cursor returned by a previous request\n\n- `limit?: number`\n  Maximum number of items to return\n\n### Returns\n\n- `{ id: string; asn: number; aws: { region: string; }; bandwidth_mbps: 50 | 200 | 500 | 1000 | 2000; cidrs: string[]; created_at: string; name: string; project_id: string; provider_asn: number; provider_cidrs: string[]; provider_router_ip: string; region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1'; router_ip: string; status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'; tags: string[]; updated_at: string; }`\n  Connect Connection details.\n\n  - `id: string`\n  - `asn: number`\n  - `aws: { region: string; }`\n  - `bandwidth_mbps: 50 | 200 | 500 | 1000 | 2000`\n  - `cidrs: string[]`\n  - `created_at: string`\n  - `name: string`\n  - `project_id: string`\n  - `provider_asn: number`\n  - `provider_cidrs: string[]`\n  - `provider_router_ip: string`\n  - `region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1'`\n  - `router_ip: string`\n  - `status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'`\n  - `tags: string[]`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\n// Automatically fetches more pages as needed.\nfor await (const connectConnection of client.networking.connect.connections.list({ project_id: 'project_id' })) {\n  console.log(connectConnection);\n}\n```",
    perLanguage: {
      cli: {
        method: 'connections list',
        example:
          "nirvana networking:connect:connections list \\\n  --api-key 'My API Key' \\\n  --project-id project_id",
      },
      go: {
        method: 'client.Networking.Connect.Connections.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/nirvana-labs/nirvana-go"\n\t"github.com/nirvana-labs/nirvana-go/networking"\n\t"github.com/nirvana-labs/nirvana-go/option"\n)\n\nfunc main() {\n\tclient := nirvana.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpage, err := client.Networking.Connect.Connections.List(context.TODO(), networking.ConnectConnectionListParams{\n\t\tProjectID: "project_id",\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", page)\n}\n',
      },
      http: {
        example:
          'curl https://api.nirvanalabs.io/v1/networking/connect/connections \\\n    -H "Authorization: Bearer $NIRVANA_LABS_API_KEY"',
      },
      typescript: {
        method: 'client.networking.connect.connections.list',
        example:
          "import NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs({\n  apiKey: process.env['NIRVANA_LABS_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const connectConnection of client.networking.connect.connections.list({\n  project_id: 'project_id',\n})) {\n  console.log(connectConnection.id);\n}",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/v1/networking/connect/routes',
    httpMethod: 'get',
    summary: 'List Connect Supported Routes',
    description: 'List all supported routes with regions for Connect.',
    stainlessPath: '(resource) networking.connect.routes > (method) list',
    qualified: 'client.networking.connect.routes.list',
    params: ['cursor?: string;', 'limit?: number;'],
    response:
      "{ nirvana_region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1'; provider: string; provider_region: string; }",
    markdown:
      "## list\n\n`client.networking.connect.routes.list(cursor?: string, limit?: number): { nirvana_region: region_name; provider: string; provider_region: string; }`\n\n**get** `/v1/networking/connect/routes`\n\nList all supported routes with regions for Connect.\n\n### Parameters\n\n- `cursor?: string`\n  Pagination cursor returned by a previous request\n\n- `limit?: number`\n  Maximum number of items to return\n\n### Returns\n\n- `{ nirvana_region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1'; provider: string; provider_region: string; }`\n  Routes supported for Connect.\n\n  - `nirvana_region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1'`\n  - `provider: string`\n  - `provider_region: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\n// Automatically fetches more pages as needed.\nfor await (const connectRoute of client.networking.connect.routes.list()) {\n  console.log(connectRoute);\n}\n```",
    perLanguage: {
      cli: {
        method: 'routes list',
        example: "nirvana networking:connect:routes list \\\n  --api-key 'My API Key'",
      },
      go: {
        method: 'client.Networking.Connect.Routes.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/nirvana-labs/nirvana-go"\n\t"github.com/nirvana-labs/nirvana-go/networking"\n\t"github.com/nirvana-labs/nirvana-go/option"\n)\n\nfunc main() {\n\tclient := nirvana.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpage, err := client.Networking.Connect.Routes.List(context.TODO(), networking.ConnectRouteListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", page)\n}\n',
      },
      http: {
        example:
          'curl https://api.nirvanalabs.io/v1/networking/connect/routes \\\n    -H "Authorization: Bearer $NIRVANA_LABS_API_KEY"',
      },
      typescript: {
        method: 'client.networking.connect.routes.list',
        example:
          "import NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs({\n  apiKey: process.env['NIRVANA_LABS_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const connectRoute of client.networking.connect.routes.list()) {\n  console.log(connectRoute.provider);\n}",
      },
    },
  },
  {
    name: 'create',
    endpoint: '/v1/rpc_nodes/flex',
    httpMethod: 'post',
    summary: 'Create RPC Node Flex',
    description: 'Create a new RPC Node Flex',
    stainlessPath: '(resource) rpc_nodes.flex > (method) create',
    qualified: 'client.rpcNodes.flex.create',
    params: [
      'blockchain: string;',
      'name: string;',
      'network: string;',
      'project_id: string;',
      'tags?: string[];',
    ],
    response:
      '{ id: string; blockchain: string; created_at: string; endpoint: string; name: string; network: string; project_id: string; tags: string[]; updated_at: string; }',
    markdown:
      "## create\n\n`client.rpcNodes.flex.create(blockchain: string, name: string, network: string, project_id: string, tags?: string[]): { id: string; blockchain: string; created_at: string; endpoint: string; name: string; network: string; project_id: string; tags: string[]; updated_at: string; }`\n\n**post** `/v1/rpc_nodes/flex`\n\nCreate a new RPC Node Flex\n\n### Parameters\n\n- `blockchain: string`\n  Blockchain.\n\n- `name: string`\n  Name of the RPC Node Flex.\n\n- `network: string`\n  Network type (e.g., mainnet, testnet).\n\n- `project_id: string`\n  Project ID to associate with the RPC Node Flex.\n\n- `tags?: string[]`\n  Tags to attach to the RPC Node Flex (optional, max 50).\n\n### Returns\n\n- `{ id: string; blockchain: string; created_at: string; endpoint: string; name: string; network: string; project_id: string; tags: string[]; updated_at: string; }`\n  RPC Node Flex details.\n\n  - `id: string`\n  - `blockchain: string`\n  - `created_at: string`\n  - `endpoint: string`\n  - `name: string`\n  - `network: string`\n  - `project_id: string`\n  - `tags: string[]`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\nconst flex = await client.rpcNodes.flex.create({\n  blockchain: 'ethereum',\n  name: 'my-ethereum-node',\n  network: 'mainnet',\n  project_id: '123e4567-e89b-12d3-a456-426614174000',\n});\n\nconsole.log(flex);\n```",
    perLanguage: {
      cli: {
        method: 'flex create',
        example:
          "nirvana rpc-nodes:flex create \\\n  --api-key 'My API Key' \\\n  --blockchain ethereum \\\n  --name my-ethereum-node \\\n  --network mainnet \\\n  --project-id 123e4567-e89b-12d3-a456-426614174000",
      },
      go: {
        method: 'client.RPCNodes.Flex.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/nirvana-labs/nirvana-go"\n\t"github.com/nirvana-labs/nirvana-go/option"\n\t"github.com/nirvana-labs/nirvana-go/rpc_nodes"\n)\n\nfunc main() {\n\tclient := nirvana.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tflex, err := client.RPCNodes.Flex.New(context.TODO(), rpc_nodes.FlexNewParams{\n\t\tBlockchain: "ethereum",\n\t\tName:       "my-ethereum-node",\n\t\tNetwork:    "mainnet",\n\t\tProjectID:  "123e4567-e89b-12d3-a456-426614174000",\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", flex.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.nirvanalabs.io/v1/rpc_nodes/flex \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $NIRVANA_LABS_API_KEY" \\\n    -d \'{\n          "blockchain": "ethereum",\n          "name": "my-ethereum-node",\n          "network": "mainnet",\n          "project_id": "123e4567-e89b-12d3-a456-426614174000",\n          "tags": [\n            "production",\n            "ethereum"\n          ]\n        }\'',
      },
      typescript: {
        method: 'client.rpcNodes.flex.create',
        example:
          "import NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs({\n  apiKey: process.env['NIRVANA_LABS_API_KEY'], // This is the default and can be omitted\n});\n\nconst flex = await client.rpcNodes.flex.create({\n  blockchain: 'ethereum',\n  name: 'my-ethereum-node',\n  network: 'mainnet',\n  project_id: '123e4567-e89b-12d3-a456-426614174000',\n});\n\nconsole.log(flex.id);",
      },
    },
  },
  {
    name: 'get',
    endpoint: '/v1/rpc_nodes/flex/{node_id}',
    httpMethod: 'get',
    summary: 'Get RPC Node Flex Details',
    description: 'Get details about an RPC Node Flex',
    stainlessPath: '(resource) rpc_nodes.flex > (method) get',
    qualified: 'client.rpcNodes.flex.get',
    params: ['node_id: string;'],
    response:
      '{ id: string; blockchain: string; created_at: string; endpoint: string; name: string; network: string; project_id: string; tags: string[]; updated_at: string; }',
    markdown:
      "## get\n\n`client.rpcNodes.flex.get(node_id: string): { id: string; blockchain: string; created_at: string; endpoint: string; name: string; network: string; project_id: string; tags: string[]; updated_at: string; }`\n\n**get** `/v1/rpc_nodes/flex/{node_id}`\n\nGet details about an RPC Node Flex\n\n### Parameters\n\n- `node_id: string`\n\n### Returns\n\n- `{ id: string; blockchain: string; created_at: string; endpoint: string; name: string; network: string; project_id: string; tags: string[]; updated_at: string; }`\n  RPC Node Flex details.\n\n  - `id: string`\n  - `blockchain: string`\n  - `created_at: string`\n  - `endpoint: string`\n  - `name: string`\n  - `network: string`\n  - `project_id: string`\n  - `tags: string[]`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\nconst flex = await client.rpcNodes.flex.get('node_id');\n\nconsole.log(flex);\n```",
    perLanguage: {
      cli: {
        method: 'flex get',
        example: "nirvana rpc-nodes:flex get \\\n  --api-key 'My API Key' \\\n  --node-id node_id",
      },
      go: {
        method: 'client.RPCNodes.Flex.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/nirvana-labs/nirvana-go"\n\t"github.com/nirvana-labs/nirvana-go/option"\n)\n\nfunc main() {\n\tclient := nirvana.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tflex, err := client.RPCNodes.Flex.Get(context.TODO(), "node_id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", flex.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.nirvanalabs.io/v1/rpc_nodes/flex/$NODE_ID \\\n    -H "Authorization: Bearer $NIRVANA_LABS_API_KEY"',
      },
      typescript: {
        method: 'client.rpcNodes.flex.get',
        example:
          "import NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs({\n  apiKey: process.env['NIRVANA_LABS_API_KEY'], // This is the default and can be omitted\n});\n\nconst flex = await client.rpcNodes.flex.get('node_id');\n\nconsole.log(flex.id);",
      },
    },
  },
  {
    name: 'update',
    endpoint: '/v1/rpc_nodes/flex/{node_id}',
    httpMethod: 'patch',
    summary: 'Update RPC Node Flex',
    description: 'Update an existing RPC Node Flex',
    stainlessPath: '(resource) rpc_nodes.flex > (method) update',
    qualified: 'client.rpcNodes.flex.update',
    params: ['node_id: string;', 'name?: string;', 'tags?: string[];'],
    response:
      '{ id: string; blockchain: string; created_at: string; endpoint: string; name: string; network: string; project_id: string; tags: string[]; updated_at: string; }',
    markdown:
      "## update\n\n`client.rpcNodes.flex.update(node_id: string, name?: string, tags?: string[]): { id: string; blockchain: string; created_at: string; endpoint: string; name: string; network: string; project_id: string; tags: string[]; updated_at: string; }`\n\n**patch** `/v1/rpc_nodes/flex/{node_id}`\n\nUpdate an existing RPC Node Flex\n\n### Parameters\n\n- `node_id: string`\n\n- `name?: string`\n  Name of the RPC Node Flex.\n\n- `tags?: string[]`\n  Tags to attach to the RPC Node Flex (optional, max 50).\n\n### Returns\n\n- `{ id: string; blockchain: string; created_at: string; endpoint: string; name: string; network: string; project_id: string; tags: string[]; updated_at: string; }`\n  RPC Node Flex details.\n\n  - `id: string`\n  - `blockchain: string`\n  - `created_at: string`\n  - `endpoint: string`\n  - `name: string`\n  - `network: string`\n  - `project_id: string`\n  - `tags: string[]`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\nconst flex = await client.rpcNodes.flex.update('node_id');\n\nconsole.log(flex);\n```",
    perLanguage: {
      cli: {
        method: 'flex update',
        example: "nirvana rpc-nodes:flex update \\\n  --api-key 'My API Key' \\\n  --node-id node_id",
      },
      go: {
        method: 'client.RPCNodes.Flex.Update',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/nirvana-labs/nirvana-go"\n\t"github.com/nirvana-labs/nirvana-go/option"\n\t"github.com/nirvana-labs/nirvana-go/rpc_nodes"\n)\n\nfunc main() {\n\tclient := nirvana.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tflex, err := client.RPCNodes.Flex.Update(\n\t\tcontext.TODO(),\n\t\t"node_id",\n\t\trpc_nodes.FlexUpdateParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", flex.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.nirvanalabs.io/v1/rpc_nodes/flex/$NODE_ID \\\n    -X PATCH \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $NIRVANA_LABS_API_KEY" \\\n    -d \'{\n          "name": "my-ethereum-node",\n          "tags": [\n            "production",\n            "ethereum"\n          ]\n        }\'',
      },
      typescript: {
        method: 'client.rpcNodes.flex.update',
        example:
          "import NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs({\n  apiKey: process.env['NIRVANA_LABS_API_KEY'], // This is the default and can be omitted\n});\n\nconst flex = await client.rpcNodes.flex.update('node_id');\n\nconsole.log(flex.id);",
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/v1/rpc_nodes/flex/{node_id}',
    httpMethod: 'delete',
    summary: 'Delete RPC Node Flex',
    description: 'Delete an RPC Node Flex',
    stainlessPath: '(resource) rpc_nodes.flex > (method) delete',
    qualified: 'client.rpcNodes.flex.delete',
    params: ['node_id: string;'],
    markdown:
      "## delete\n\n`client.rpcNodes.flex.delete(node_id: string): void`\n\n**delete** `/v1/rpc_nodes/flex/{node_id}`\n\nDelete an RPC Node Flex\n\n### Parameters\n\n- `node_id: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\nawait client.rpcNodes.flex.delete('node_id')\n```",
    perLanguage: {
      cli: {
        method: 'flex delete',
        example: "nirvana rpc-nodes:flex delete \\\n  --api-key 'My API Key' \\\n  --node-id node_id",
      },
      go: {
        method: 'client.RPCNodes.Flex.Delete',
        example:
          'package main\n\nimport (\n\t"context"\n\n\t"github.com/nirvana-labs/nirvana-go"\n\t"github.com/nirvana-labs/nirvana-go/option"\n)\n\nfunc main() {\n\tclient := nirvana.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\terr := client.RPCNodes.Flex.Delete(context.TODO(), "node_id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n}\n',
      },
      http: {
        example:
          'curl https://api.nirvanalabs.io/v1/rpc_nodes/flex/$NODE_ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $NIRVANA_LABS_API_KEY"',
      },
      typescript: {
        method: 'client.rpcNodes.flex.delete',
        example:
          "import NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs({\n  apiKey: process.env['NIRVANA_LABS_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.rpcNodes.flex.delete('node_id');",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/v1/rpc_nodes/flex',
    httpMethod: 'get',
    summary: 'List RPC Node Flex',
    description: 'List all RPC Node Flex you created',
    stainlessPath: '(resource) rpc_nodes.flex > (method) list',
    qualified: 'client.rpcNodes.flex.list',
    params: ['project_id: string;', 'cursor?: string;', 'limit?: number;'],
    response:
      '{ id: string; blockchain: string; created_at: string; endpoint: string; name: string; network: string; project_id: string; tags: string[]; updated_at: string; }',
    markdown:
      "## list\n\n`client.rpcNodes.flex.list(project_id: string, cursor?: string, limit?: number): { id: string; blockchain: string; created_at: string; endpoint: string; name: string; network: string; project_id: string; tags: string[]; updated_at: string; }`\n\n**get** `/v1/rpc_nodes/flex`\n\nList all RPC Node Flex you created\n\n### Parameters\n\n- `project_id: string`\n  Project ID of resources to request\n\n- `cursor?: string`\n  Pagination cursor returned by a previous request\n\n- `limit?: number`\n  Maximum number of items to return\n\n### Returns\n\n- `{ id: string; blockchain: string; created_at: string; endpoint: string; name: string; network: string; project_id: string; tags: string[]; updated_at: string; }`\n  RPC Node Flex details.\n\n  - `id: string`\n  - `blockchain: string`\n  - `created_at: string`\n  - `endpoint: string`\n  - `name: string`\n  - `network: string`\n  - `project_id: string`\n  - `tags: string[]`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\n// Automatically fetches more pages as needed.\nfor await (const flex of client.rpcNodes.flex.list({ project_id: 'project_id' })) {\n  console.log(flex);\n}\n```",
    perLanguage: {
      cli: {
        method: 'flex list',
        example: "nirvana rpc-nodes:flex list \\\n  --api-key 'My API Key' \\\n  --project-id project_id",
      },
      go: {
        method: 'client.RPCNodes.Flex.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/nirvana-labs/nirvana-go"\n\t"github.com/nirvana-labs/nirvana-go/option"\n\t"github.com/nirvana-labs/nirvana-go/rpc_nodes"\n)\n\nfunc main() {\n\tclient := nirvana.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpage, err := client.RPCNodes.Flex.List(context.TODO(), rpc_nodes.FlexListParams{\n\t\tProjectID: "project_id",\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", page)\n}\n',
      },
      http: {
        example:
          'curl https://api.nirvanalabs.io/v1/rpc_nodes/flex \\\n    -H "Authorization: Bearer $NIRVANA_LABS_API_KEY"',
      },
      typescript: {
        method: 'client.rpcNodes.flex.list',
        example:
          "import NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs({\n  apiKey: process.env['NIRVANA_LABS_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const flex of client.rpcNodes.flex.list({ project_id: 'project_id' })) {\n  console.log(flex.id);\n}",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/v1/rpc_nodes/flex/blockchains',
    httpMethod: 'get',
    summary: 'List Flex Blockchains',
    description: 'List all Flex Blockchains',
    stainlessPath: '(resource) rpc_nodes.flex.blockchains > (method) list',
    qualified: 'client.rpcNodes.flex.blockchains.list',
    params: ['cursor?: string;', 'limit?: number;'],
    response: '{ blockchain: string; network: string; }',
    markdown:
      "## list\n\n`client.rpcNodes.flex.blockchains.list(cursor?: string, limit?: number): { blockchain: string; network: string; }`\n\n**get** `/v1/rpc_nodes/flex/blockchains`\n\nList all Flex Blockchains\n\n### Parameters\n\n- `cursor?: string`\n  Pagination cursor returned by a previous request\n\n- `limit?: number`\n  Maximum number of items to return\n\n### Returns\n\n- `{ blockchain: string; network: string; }`\n  Blockchain supported by the RPC Node Flex.\n\n  - `blockchain: string`\n  - `network: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\n// Automatically fetches more pages as needed.\nfor await (const flexBlockchain of client.rpcNodes.flex.blockchains.list()) {\n  console.log(flexBlockchain);\n}\n```",
    perLanguage: {
      cli: {
        method: 'blockchains list',
        example: "nirvana rpc-nodes:flex:blockchains list \\\n  --api-key 'My API Key'",
      },
      go: {
        method: 'client.RPCNodes.Flex.Blockchains.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/nirvana-labs/nirvana-go"\n\t"github.com/nirvana-labs/nirvana-go/option"\n\t"github.com/nirvana-labs/nirvana-go/rpc_nodes"\n)\n\nfunc main() {\n\tclient := nirvana.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpage, err := client.RPCNodes.Flex.Blockchains.List(context.TODO(), rpc_nodes.FlexBlockchainListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", page)\n}\n',
      },
      http: {
        example:
          'curl https://api.nirvanalabs.io/v1/rpc_nodes/flex/blockchains \\\n    -H "Authorization: Bearer $NIRVANA_LABS_API_KEY"',
      },
      typescript: {
        method: 'client.rpcNodes.flex.blockchains.list',
        example:
          "import NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs({\n  apiKey: process.env['NIRVANA_LABS_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const flexBlockchain of client.rpcNodes.flex.blockchains.list()) {\n  console.log(flexBlockchain.blockchain);\n}",
      },
    },
  },
  {
    name: 'get',
    endpoint: '/v1/rpc_nodes/dedicated/{node_id}',
    httpMethod: 'get',
    summary: 'Get RPC Node Dedicated Details',
    description: 'Get details about an RPC Node Dedicated',
    stainlessPath: '(resource) rpc_nodes.dedicated > (method) get',
    qualified: 'client.rpcNodes.dedicated.get',
    params: ['node_id: string;'],
    response:
      '{ id: string; blockchain: string; created_at: string; endpoint: string; name: string; network: string; project_id: string; tags: string[]; updated_at: string; }',
    markdown:
      "## get\n\n`client.rpcNodes.dedicated.get(node_id: string): { id: string; blockchain: string; created_at: string; endpoint: string; name: string; network: string; project_id: string; tags: string[]; updated_at: string; }`\n\n**get** `/v1/rpc_nodes/dedicated/{node_id}`\n\nGet details about an RPC Node Dedicated\n\n### Parameters\n\n- `node_id: string`\n\n### Returns\n\n- `{ id: string; blockchain: string; created_at: string; endpoint: string; name: string; network: string; project_id: string; tags: string[]; updated_at: string; }`\n  RPC Node Dedicated details.\n\n  - `id: string`\n  - `blockchain: string`\n  - `created_at: string`\n  - `endpoint: string`\n  - `name: string`\n  - `network: string`\n  - `project_id: string`\n  - `tags: string[]`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\nconst dedicated = await client.rpcNodes.dedicated.get('node_id');\n\nconsole.log(dedicated);\n```",
    perLanguage: {
      cli: {
        method: 'dedicated get',
        example: "nirvana rpc-nodes:dedicated get \\\n  --api-key 'My API Key' \\\n  --node-id node_id",
      },
      go: {
        method: 'client.RPCNodes.Dedicated.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/nirvana-labs/nirvana-go"\n\t"github.com/nirvana-labs/nirvana-go/option"\n)\n\nfunc main() {\n\tclient := nirvana.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tdedicated, err := client.RPCNodes.Dedicated.Get(context.TODO(), "node_id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", dedicated.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.nirvanalabs.io/v1/rpc_nodes/dedicated/$NODE_ID \\\n    -H "Authorization: Bearer $NIRVANA_LABS_API_KEY"',
      },
      typescript: {
        method: 'client.rpcNodes.dedicated.get',
        example:
          "import NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs({\n  apiKey: process.env['NIRVANA_LABS_API_KEY'], // This is the default and can be omitted\n});\n\nconst dedicated = await client.rpcNodes.dedicated.get('node_id');\n\nconsole.log(dedicated.id);",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/v1/rpc_nodes/dedicated',
    httpMethod: 'get',
    summary: 'List RPC Node Dedicated',
    description: 'List all RPC Node Dedicated you created',
    stainlessPath: '(resource) rpc_nodes.dedicated > (method) list',
    qualified: 'client.rpcNodes.dedicated.list',
    params: ['project_id: string;', 'cursor?: string;', 'limit?: number;'],
    response:
      '{ id: string; blockchain: string; created_at: string; endpoint: string; name: string; network: string; project_id: string; tags: string[]; updated_at: string; }',
    markdown:
      "## list\n\n`client.rpcNodes.dedicated.list(project_id: string, cursor?: string, limit?: number): { id: string; blockchain: string; created_at: string; endpoint: string; name: string; network: string; project_id: string; tags: string[]; updated_at: string; }`\n\n**get** `/v1/rpc_nodes/dedicated`\n\nList all RPC Node Dedicated you created\n\n### Parameters\n\n- `project_id: string`\n  Project ID of resources to request\n\n- `cursor?: string`\n  Pagination cursor returned by a previous request\n\n- `limit?: number`\n  Maximum number of items to return\n\n### Returns\n\n- `{ id: string; blockchain: string; created_at: string; endpoint: string; name: string; network: string; project_id: string; tags: string[]; updated_at: string; }`\n  RPC Node Dedicated details.\n\n  - `id: string`\n  - `blockchain: string`\n  - `created_at: string`\n  - `endpoint: string`\n  - `name: string`\n  - `network: string`\n  - `project_id: string`\n  - `tags: string[]`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\n// Automatically fetches more pages as needed.\nfor await (const dedicated of client.rpcNodes.dedicated.list({ project_id: 'project_id' })) {\n  console.log(dedicated);\n}\n```",
    perLanguage: {
      cli: {
        method: 'dedicated list',
        example:
          "nirvana rpc-nodes:dedicated list \\\n  --api-key 'My API Key' \\\n  --project-id project_id",
      },
      go: {
        method: 'client.RPCNodes.Dedicated.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/nirvana-labs/nirvana-go"\n\t"github.com/nirvana-labs/nirvana-go/option"\n\t"github.com/nirvana-labs/nirvana-go/rpc_nodes"\n)\n\nfunc main() {\n\tclient := nirvana.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpage, err := client.RPCNodes.Dedicated.List(context.TODO(), rpc_nodes.DedicatedListParams{\n\t\tProjectID: "project_id",\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", page)\n}\n',
      },
      http: {
        example:
          'curl https://api.nirvanalabs.io/v1/rpc_nodes/dedicated \\\n    -H "Authorization: Bearer $NIRVANA_LABS_API_KEY"',
      },
      typescript: {
        method: 'client.rpcNodes.dedicated.list',
        example:
          "import NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs({\n  apiKey: process.env['NIRVANA_LABS_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const dedicated of client.rpcNodes.dedicated.list({ project_id: 'project_id' })) {\n  console.log(dedicated.id);\n}",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/v1/rpc_nodes/dedicated/blockchains',
    httpMethod: 'get',
    summary: 'List Dedicated Blockchains',
    description: 'List all Dedicated Blockchains',
    stainlessPath: '(resource) rpc_nodes.dedicated.blockchains > (method) list',
    qualified: 'client.rpcNodes.dedicated.blockchains.list',
    params: ['cursor?: string;', 'limit?: number;'],
    response: '{ blockchain: string; network: string; }',
    markdown:
      "## list\n\n`client.rpcNodes.dedicated.blockchains.list(cursor?: string, limit?: number): { blockchain: string; network: string; }`\n\n**get** `/v1/rpc_nodes/dedicated/blockchains`\n\nList all Dedicated Blockchains\n\n### Parameters\n\n- `cursor?: string`\n  Pagination cursor returned by a previous request\n\n- `limit?: number`\n  Maximum number of items to return\n\n### Returns\n\n- `{ blockchain: string; network: string; }`\n  Blockchain supported by the RPC Node Dedicated.\n\n  - `blockchain: string`\n  - `network: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\n// Automatically fetches more pages as needed.\nfor await (const dedicatedBlockchain of client.rpcNodes.dedicated.blockchains.list()) {\n  console.log(dedicatedBlockchain);\n}\n```",
    perLanguage: {
      cli: {
        method: 'blockchains list',
        example: "nirvana rpc-nodes:dedicated:blockchains list \\\n  --api-key 'My API Key'",
      },
      go: {
        method: 'client.RPCNodes.Dedicated.Blockchains.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/nirvana-labs/nirvana-go"\n\t"github.com/nirvana-labs/nirvana-go/option"\n\t"github.com/nirvana-labs/nirvana-go/rpc_nodes"\n)\n\nfunc main() {\n\tclient := nirvana.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpage, err := client.RPCNodes.Dedicated.Blockchains.List(context.TODO(), rpc_nodes.DedicatedBlockchainListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", page)\n}\n',
      },
      http: {
        example:
          'curl https://api.nirvanalabs.io/v1/rpc_nodes/dedicated/blockchains \\\n    -H "Authorization: Bearer $NIRVANA_LABS_API_KEY"',
      },
      typescript: {
        method: 'client.rpcNodes.dedicated.blockchains.list',
        example:
          "import NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs({\n  apiKey: process.env['NIRVANA_LABS_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const dedicatedBlockchain of client.rpcNodes.dedicated.blockchains.list()) {\n  console.log(dedicatedBlockchain.blockchain);\n}",
      },
    },
  },
  {
    name: 'create',
    endpoint: '/v1/nks/clusters',
    httpMethod: 'post',
    summary: 'Create NKS Cluster',
    description: 'Create an NKS Cluster',
    stainlessPath: '(resource) nks.clusters > (method) create',
    qualified: 'client.nks.clusters.create',
    params: [
      'name: string;',
      'project_id: string;',
      "region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1';",
      'vpc_id: string;',
      'tags?: string[];',
    ],
    response:
      "{ id: string; created_at: string; kind: 'vm' | 'volume' | 'vpc' | 'firewall_rule' | 'nks_cluster' | 'nks_node_pool'; project_id: string; resource_id: string; status: 'pending' | 'running' | 'done' | 'failed' | 'unknown'; type: 'create' | 'update' | 'delete' | 'restart'; updated_at: string; }",
    markdown:
      "## create\n\n`client.nks.clusters.create(name: string, project_id: string, region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1', vpc_id: string, tags?: string[]): { id: string; created_at: string; kind: operation_kind; project_id: string; resource_id: string; status: operation_status; type: operation_type; updated_at: string; }`\n\n**post** `/v1/nks/clusters`\n\nCreate an NKS Cluster\n\n### Parameters\n\n- `name: string`\n  Name of the Cluster.\n\n- `project_id: string`\n  Project ID to create the Cluster in.\n\n- `region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1'`\n  Region the resource is in.\n\n- `vpc_id: string`\n  ID of the VPC to use for the Cluster.\n\n- `tags?: string[]`\n  Tags to attach to the Cluster.\n\n### Returns\n\n- `{ id: string; created_at: string; kind: 'vm' | 'volume' | 'vpc' | 'firewall_rule' | 'nks_cluster' | 'nks_node_pool'; project_id: string; resource_id: string; status: 'pending' | 'running' | 'done' | 'failed' | 'unknown'; type: 'create' | 'update' | 'delete' | 'restart'; updated_at: string; }`\n  Operation details.\n\n  - `id: string`\n  - `created_at: string`\n  - `kind: 'vm' | 'volume' | 'vpc' | 'firewall_rule' | 'nks_cluster' | 'nks_node_pool'`\n  - `project_id: string`\n  - `resource_id: string`\n  - `status: 'pending' | 'running' | 'done' | 'failed' | 'unknown'`\n  - `type: 'create' | 'update' | 'delete' | 'restart'`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\nconst operation = await client.nks.clusters.create({\n  name: 'my-cluster',\n  project_id: '123e4567-e89b-12d3-a456-426614174000',\n  region: 'us-sva-2',\n  vpc_id: '123e4567-e89b-12d3-a456-426614174000',\n});\n\nconsole.log(operation);\n```",
    perLanguage: {
      cli: {
        method: 'clusters create',
        example:
          "nirvana nks:clusters create \\\n  --api-key 'My API Key' \\\n  --name my-cluster \\\n  --project-id 123e4567-e89b-12d3-a456-426614174000 \\\n  --region us-sva-2 \\\n  --vpc-id 123e4567-e89b-12d3-a456-426614174000",
      },
      go: {
        method: 'client.NKS.Clusters.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/nirvana-labs/nirvana-go"\n\t"github.com/nirvana-labs/nirvana-go/nks"\n\t"github.com/nirvana-labs/nirvana-go/option"\n\t"github.com/nirvana-labs/nirvana-go/shared"\n)\n\nfunc main() {\n\tclient := nirvana.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\toperation, err := client.NKS.Clusters.New(context.TODO(), nks.ClusterNewParams{\n\t\tName:      "my-cluster",\n\t\tProjectID: "123e4567-e89b-12d3-a456-426614174000",\n\t\tRegion:    shared.RegionNameUsSva2,\n\t\tVPCID:     "123e4567-e89b-12d3-a456-426614174000",\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", operation.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.nirvanalabs.io/v1/nks/clusters \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $NIRVANA_LABS_API_KEY" \\\n    -d \'{\n          "name": "my-cluster",\n          "project_id": "123e4567-e89b-12d3-a456-426614174000",\n          "region": "us-sva-2",\n          "vpc_id": "123e4567-e89b-12d3-a456-426614174000",\n          "tags": [\n            "production",\n            "ethereum"\n          ]\n        }\'',
      },
      typescript: {
        method: 'client.nks.clusters.create',
        example:
          "import NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs({\n  apiKey: process.env['NIRVANA_LABS_API_KEY'], // This is the default and can be omitted\n});\n\nconst operation = await client.nks.clusters.create({\n  name: 'my-cluster',\n  project_id: '123e4567-e89b-12d3-a456-426614174000',\n  region: 'us-sva-2',\n  vpc_id: '123e4567-e89b-12d3-a456-426614174000',\n});\n\nconsole.log(operation.id);",
      },
    },
  },
  {
    name: 'get',
    endpoint: '/v1/nks/clusters/{cluster_id}',
    httpMethod: 'get',
    summary: 'Get NKS Cluster Details',
    description: 'Get details about an NKS cluster',
    stainlessPath: '(resource) nks.clusters > (method) get',
    qualified: 'client.nks.clusters.get',
    params: ['cluster_id: string;'],
    response:
      "{ id: string; created_at: string; name: string; pool_ids: string[]; private_ip: string; project_id: string; public_ip: string; region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1'; status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'; tags: string[]; updated_at: string; vpc_id: string; }",
    markdown:
      "## get\n\n`client.nks.clusters.get(cluster_id: string): { id: string; created_at: string; name: string; pool_ids: string[]; private_ip: string; project_id: string; public_ip: string; region: region_name; status: resource_status; tags: string[]; updated_at: string; vpc_id: string; }`\n\n**get** `/v1/nks/clusters/{cluster_id}`\n\nGet details about an NKS cluster\n\n### Parameters\n\n- `cluster_id: string`\n\n### Returns\n\n- `{ id: string; created_at: string; name: string; pool_ids: string[]; private_ip: string; project_id: string; public_ip: string; region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1'; status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'; tags: string[]; updated_at: string; vpc_id: string; }`\n  NKS Cluster details.\n\n  - `id: string`\n  - `created_at: string`\n  - `name: string`\n  - `pool_ids: string[]`\n  - `private_ip: string`\n  - `project_id: string`\n  - `public_ip: string`\n  - `region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1'`\n  - `status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'`\n  - `tags: string[]`\n  - `updated_at: string`\n  - `vpc_id: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\nconst nksCluster = await client.nks.clusters.get('cluster_id');\n\nconsole.log(nksCluster);\n```",
    perLanguage: {
      cli: {
        method: 'clusters get',
        example: "nirvana nks:clusters get \\\n  --api-key 'My API Key' \\\n  --cluster-id cluster_id",
      },
      go: {
        method: 'client.NKS.Clusters.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/nirvana-labs/nirvana-go"\n\t"github.com/nirvana-labs/nirvana-go/option"\n)\n\nfunc main() {\n\tclient := nirvana.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tnksCluster, err := client.NKS.Clusters.Get(context.TODO(), "cluster_id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", nksCluster.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.nirvanalabs.io/v1/nks/clusters/$CLUSTER_ID \\\n    -H "Authorization: Bearer $NIRVANA_LABS_API_KEY"',
      },
      typescript: {
        method: 'client.nks.clusters.get',
        example:
          "import NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs({\n  apiKey: process.env['NIRVANA_LABS_API_KEY'], // This is the default and can be omitted\n});\n\nconst nksCluster = await client.nks.clusters.get('cluster_id');\n\nconsole.log(nksCluster.id);",
      },
    },
  },
  {
    name: 'update',
    endpoint: '/v1/nks/clusters/{cluster_id}',
    httpMethod: 'patch',
    summary: 'Update NKS Cluster',
    description: 'Update an NKS cluster',
    stainlessPath: '(resource) nks.clusters > (method) update',
    qualified: 'client.nks.clusters.update',
    params: ['cluster_id: string;', 'name?: string;', 'tags?: string[];'],
    response:
      "{ id: string; created_at: string; name: string; pool_ids: string[]; private_ip: string; project_id: string; public_ip: string; region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1'; status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'; tags: string[]; updated_at: string; vpc_id: string; }",
    markdown:
      "## update\n\n`client.nks.clusters.update(cluster_id: string, name?: string, tags?: string[]): { id: string; created_at: string; name: string; pool_ids: string[]; private_ip: string; project_id: string; public_ip: string; region: region_name; status: resource_status; tags: string[]; updated_at: string; vpc_id: string; }`\n\n**patch** `/v1/nks/clusters/{cluster_id}`\n\nUpdate an NKS cluster\n\n### Parameters\n\n- `cluster_id: string`\n\n- `name?: string`\n  Name of the Cluster.\n\n- `tags?: string[]`\n  Tags to attach to the Cluster.\n\n### Returns\n\n- `{ id: string; created_at: string; name: string; pool_ids: string[]; private_ip: string; project_id: string; public_ip: string; region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1'; status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'; tags: string[]; updated_at: string; vpc_id: string; }`\n  NKS Cluster details.\n\n  - `id: string`\n  - `created_at: string`\n  - `name: string`\n  - `pool_ids: string[]`\n  - `private_ip: string`\n  - `project_id: string`\n  - `public_ip: string`\n  - `region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1'`\n  - `status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'`\n  - `tags: string[]`\n  - `updated_at: string`\n  - `vpc_id: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\nconst nksCluster = await client.nks.clusters.update('cluster_id');\n\nconsole.log(nksCluster);\n```",
    perLanguage: {
      cli: {
        method: 'clusters update',
        example: "nirvana nks:clusters update \\\n  --api-key 'My API Key' \\\n  --cluster-id cluster_id",
      },
      go: {
        method: 'client.NKS.Clusters.Update',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/nirvana-labs/nirvana-go"\n\t"github.com/nirvana-labs/nirvana-go/nks"\n\t"github.com/nirvana-labs/nirvana-go/option"\n)\n\nfunc main() {\n\tclient := nirvana.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tnksCluster, err := client.NKS.Clusters.Update(\n\t\tcontext.TODO(),\n\t\t"cluster_id",\n\t\tnks.ClusterUpdateParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", nksCluster.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.nirvanalabs.io/v1/nks/clusters/$CLUSTER_ID \\\n    -X PATCH \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $NIRVANA_LABS_API_KEY" \\\n    -d \'{\n          "name": "my-cluster",\n          "tags": [\n            "production",\n            "ethereum"\n          ]\n        }\'',
      },
      typescript: {
        method: 'client.nks.clusters.update',
        example:
          "import NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs({\n  apiKey: process.env['NIRVANA_LABS_API_KEY'], // This is the default and can be omitted\n});\n\nconst nksCluster = await client.nks.clusters.update('cluster_id');\n\nconsole.log(nksCluster.id);",
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/v1/nks/clusters/{cluster_id}',
    httpMethod: 'delete',
    summary: 'Delete NKS Cluster',
    description: 'Delete an NKS cluster',
    stainlessPath: '(resource) nks.clusters > (method) delete',
    qualified: 'client.nks.clusters.delete',
    params: ['cluster_id: string;'],
    response:
      "{ id: string; created_at: string; kind: 'vm' | 'volume' | 'vpc' | 'firewall_rule' | 'nks_cluster' | 'nks_node_pool'; project_id: string; resource_id: string; status: 'pending' | 'running' | 'done' | 'failed' | 'unknown'; type: 'create' | 'update' | 'delete' | 'restart'; updated_at: string; }",
    markdown:
      "## delete\n\n`client.nks.clusters.delete(cluster_id: string): { id: string; created_at: string; kind: operation_kind; project_id: string; resource_id: string; status: operation_status; type: operation_type; updated_at: string; }`\n\n**delete** `/v1/nks/clusters/{cluster_id}`\n\nDelete an NKS cluster\n\n### Parameters\n\n- `cluster_id: string`\n\n### Returns\n\n- `{ id: string; created_at: string; kind: 'vm' | 'volume' | 'vpc' | 'firewall_rule' | 'nks_cluster' | 'nks_node_pool'; project_id: string; resource_id: string; status: 'pending' | 'running' | 'done' | 'failed' | 'unknown'; type: 'create' | 'update' | 'delete' | 'restart'; updated_at: string; }`\n  Operation details.\n\n  - `id: string`\n  - `created_at: string`\n  - `kind: 'vm' | 'volume' | 'vpc' | 'firewall_rule' | 'nks_cluster' | 'nks_node_pool'`\n  - `project_id: string`\n  - `resource_id: string`\n  - `status: 'pending' | 'running' | 'done' | 'failed' | 'unknown'`\n  - `type: 'create' | 'update' | 'delete' | 'restart'`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\nconst operation = await client.nks.clusters.delete('cluster_id');\n\nconsole.log(operation);\n```",
    perLanguage: {
      cli: {
        method: 'clusters delete',
        example: "nirvana nks:clusters delete \\\n  --api-key 'My API Key' \\\n  --cluster-id cluster_id",
      },
      go: {
        method: 'client.NKS.Clusters.Delete',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/nirvana-labs/nirvana-go"\n\t"github.com/nirvana-labs/nirvana-go/option"\n)\n\nfunc main() {\n\tclient := nirvana.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\toperation, err := client.NKS.Clusters.Delete(context.TODO(), "cluster_id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", operation.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.nirvanalabs.io/v1/nks/clusters/$CLUSTER_ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $NIRVANA_LABS_API_KEY"',
      },
      typescript: {
        method: 'client.nks.clusters.delete',
        example:
          "import NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs({\n  apiKey: process.env['NIRVANA_LABS_API_KEY'], // This is the default and can be omitted\n});\n\nconst operation = await client.nks.clusters.delete('cluster_id');\n\nconsole.log(operation.id);",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/v1/nks/clusters',
    httpMethod: 'get',
    summary: 'List NKS Clusters',
    description: 'List all NKS clusters',
    stainlessPath: '(resource) nks.clusters > (method) list',
    qualified: 'client.nks.clusters.list',
    params: ['project_id: string;', 'cursor?: string;', 'limit?: number;'],
    response:
      "{ id: string; created_at: string; name: string; pool_ids: string[]; private_ip: string; project_id: string; public_ip: string; region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1'; status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'; tags: string[]; updated_at: string; vpc_id: string; }",
    markdown:
      "## list\n\n`client.nks.clusters.list(project_id: string, cursor?: string, limit?: number): { id: string; created_at: string; name: string; pool_ids: string[]; private_ip: string; project_id: string; public_ip: string; region: region_name; status: resource_status; tags: string[]; updated_at: string; vpc_id: string; }`\n\n**get** `/v1/nks/clusters`\n\nList all NKS clusters\n\n### Parameters\n\n- `project_id: string`\n  Project ID of resources to request\n\n- `cursor?: string`\n  Pagination cursor returned by a previous request\n\n- `limit?: number`\n  Maximum number of items to return\n\n### Returns\n\n- `{ id: string; created_at: string; name: string; pool_ids: string[]; private_ip: string; project_id: string; public_ip: string; region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1'; status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'; tags: string[]; updated_at: string; vpc_id: string; }`\n  NKS Cluster details.\n\n  - `id: string`\n  - `created_at: string`\n  - `name: string`\n  - `pool_ids: string[]`\n  - `private_ip: string`\n  - `project_id: string`\n  - `public_ip: string`\n  - `region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1'`\n  - `status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'`\n  - `tags: string[]`\n  - `updated_at: string`\n  - `vpc_id: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\n// Automatically fetches more pages as needed.\nfor await (const nksCluster of client.nks.clusters.list({ project_id: 'project_id' })) {\n  console.log(nksCluster);\n}\n```",
    perLanguage: {
      cli: {
        method: 'clusters list',
        example: "nirvana nks:clusters list \\\n  --api-key 'My API Key' \\\n  --project-id project_id",
      },
      go: {
        method: 'client.NKS.Clusters.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/nirvana-labs/nirvana-go"\n\t"github.com/nirvana-labs/nirvana-go/nks"\n\t"github.com/nirvana-labs/nirvana-go/option"\n)\n\nfunc main() {\n\tclient := nirvana.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpage, err := client.NKS.Clusters.List(context.TODO(), nks.ClusterListParams{\n\t\tProjectID: "project_id",\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", page)\n}\n',
      },
      http: {
        example:
          'curl https://api.nirvanalabs.io/v1/nks/clusters \\\n    -H "Authorization: Bearer $NIRVANA_LABS_API_KEY"',
      },
      typescript: {
        method: 'client.nks.clusters.list',
        example:
          "import NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs({\n  apiKey: process.env['NIRVANA_LABS_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const nksCluster of client.nks.clusters.list({ project_id: 'project_id' })) {\n  console.log(nksCluster.id);\n}",
      },
    },
  },
  {
    name: 'create',
    endpoint: '/v1/nks/clusters/availability',
    httpMethod: 'post',
    summary: 'Check Create NKS Cluster Availability',
    description: 'Check if an NKS cluster can be created',
    stainlessPath: '(resource) nks.clusters.availability > (method) create',
    qualified: 'client.nks.clusters.availability.create',
    params: [
      'name: string;',
      'project_id: string;',
      "region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1';",
      'vpc_id: string;',
      'tags?: string[];',
    ],
    markdown:
      "## create\n\n`client.nks.clusters.availability.create(name: string, project_id: string, region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1', vpc_id: string, tags?: string[]): void`\n\n**post** `/v1/nks/clusters/availability`\n\nCheck if an NKS cluster can be created\n\n### Parameters\n\n- `name: string`\n  Name of the Cluster.\n\n- `project_id: string`\n  Project ID to create the Cluster in.\n\n- `region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1'`\n  Region the resource is in.\n\n- `vpc_id: string`\n  ID of the VPC to use for the Cluster.\n\n- `tags?: string[]`\n  Tags to attach to the Cluster.\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\nawait client.nks.clusters.availability.create({\n  name: 'my-cluster',\n  project_id: '123e4567-e89b-12d3-a456-426614174000',\n  region: 'us-sva-2',\n  vpc_id: '123e4567-e89b-12d3-a456-426614174000',\n})\n```",
    perLanguage: {
      cli: {
        method: 'availability create',
        example:
          "nirvana nks:clusters:availability create \\\n  --api-key 'My API Key' \\\n  --name my-cluster \\\n  --project-id 123e4567-e89b-12d3-a456-426614174000 \\\n  --region us-sva-2 \\\n  --vpc-id 123e4567-e89b-12d3-a456-426614174000",
      },
      go: {
        method: 'client.NKS.Clusters.Availability.New',
        example:
          'package main\n\nimport (\n\t"context"\n\n\t"github.com/nirvana-labs/nirvana-go"\n\t"github.com/nirvana-labs/nirvana-go/nks"\n\t"github.com/nirvana-labs/nirvana-go/option"\n\t"github.com/nirvana-labs/nirvana-go/shared"\n)\n\nfunc main() {\n\tclient := nirvana.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\terr := client.NKS.Clusters.Availability.New(context.TODO(), nks.ClusterAvailabilityNewParams{\n\t\tName:      "my-cluster",\n\t\tProjectID: "123e4567-e89b-12d3-a456-426614174000",\n\t\tRegion:    shared.RegionNameUsSva2,\n\t\tVPCID:     "123e4567-e89b-12d3-a456-426614174000",\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n}\n',
      },
      http: {
        example:
          'curl https://api.nirvanalabs.io/v1/nks/clusters/availability \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $NIRVANA_LABS_API_KEY" \\\n    -d \'{\n          "name": "my-cluster",\n          "project_id": "123e4567-e89b-12d3-a456-426614174000",\n          "region": "us-sva-2",\n          "vpc_id": "123e4567-e89b-12d3-a456-426614174000",\n          "tags": [\n            "production",\n            "ethereum"\n          ]\n        }\'',
      },
      typescript: {
        method: 'client.nks.clusters.availability.create',
        example:
          "import NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs({\n  apiKey: process.env['NIRVANA_LABS_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.nks.clusters.availability.create({\n  name: 'my-cluster',\n  project_id: '123e4567-e89b-12d3-a456-426614174000',\n  region: 'us-sva-2',\n  vpc_id: '123e4567-e89b-12d3-a456-426614174000',\n});",
      },
    },
  },
  {
    name: 'update',
    endpoint: '/v1/nks/clusters/{cluster_id}/availability',
    httpMethod: 'patch',
    summary: 'Check Update NKS Cluster Availability',
    description: 'Check if an NKS cluster can be updated',
    stainlessPath: '(resource) nks.clusters.availability > (method) update',
    qualified: 'client.nks.clusters.availability.update',
    params: ['cluster_id: string;', 'name?: string;', 'tags?: string[];'],
    markdown:
      "## update\n\n`client.nks.clusters.availability.update(cluster_id: string, name?: string, tags?: string[]): void`\n\n**patch** `/v1/nks/clusters/{cluster_id}/availability`\n\nCheck if an NKS cluster can be updated\n\n### Parameters\n\n- `cluster_id: string`\n\n- `name?: string`\n  Name of the Cluster.\n\n- `tags?: string[]`\n  Tags to attach to the Cluster.\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\nawait client.nks.clusters.availability.update('cluster_id')\n```",
    perLanguage: {
      cli: {
        method: 'availability update',
        example:
          "nirvana nks:clusters:availability update \\\n  --api-key 'My API Key' \\\n  --cluster-id cluster_id",
      },
      go: {
        method: 'client.NKS.Clusters.Availability.Update',
        example:
          'package main\n\nimport (\n\t"context"\n\n\t"github.com/nirvana-labs/nirvana-go"\n\t"github.com/nirvana-labs/nirvana-go/nks"\n\t"github.com/nirvana-labs/nirvana-go/option"\n)\n\nfunc main() {\n\tclient := nirvana.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\terr := client.NKS.Clusters.Availability.Update(\n\t\tcontext.TODO(),\n\t\t"cluster_id",\n\t\tnks.ClusterAvailabilityUpdateParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n}\n',
      },
      http: {
        example:
          'curl https://api.nirvanalabs.io/v1/nks/clusters/$CLUSTER_ID/availability \\\n    -X PATCH \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $NIRVANA_LABS_API_KEY" \\\n    -d \'{\n          "name": "my-cluster",\n          "tags": [\n            "production",\n            "ethereum"\n          ]\n        }\'',
      },
      typescript: {
        method: 'client.nks.clusters.availability.update',
        example:
          "import NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs({\n  apiKey: process.env['NIRVANA_LABS_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.nks.clusters.availability.update('cluster_id');",
      },
    },
  },
  {
    name: 'get',
    endpoint: '/v1/nks/clusters/{cluster_id}/persistent_volume_claims/{persistent_volume_claim_id}',
    httpMethod: 'get',
    summary: 'Get NKS Persistent Volume Claim Details',
    description: 'Get details about an NKS persistent volume claim',
    stainlessPath: '(resource) nks.clusters.persistent_volume_claims > (method) get',
    qualified: 'client.nks.clusters.persistentVolumeClaims.get',
    params: ['cluster_id: string;', 'persistent_volume_claim_id: string;'],
    response:
      "{ id: string; cluster_id: string; created_at: string; name: string; size: number; status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'; type: 'nvme' | 'abs'; updated_at: string; }",
    markdown:
      "## get\n\n`client.nks.clusters.persistentVolumeClaims.get(cluster_id: string, persistent_volume_claim_id: string): { id: string; cluster_id: string; created_at: string; name: string; size: number; status: resource_status; type: volume_type; updated_at: string; }`\n\n**get** `/v1/nks/clusters/{cluster_id}/persistent_volume_claims/{persistent_volume_claim_id}`\n\nGet details about an NKS persistent volume claim\n\n### Parameters\n\n- `cluster_id: string`\n\n- `persistent_volume_claim_id: string`\n\n### Returns\n\n- `{ id: string; cluster_id: string; created_at: string; name: string; size: number; status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'; type: 'nvme' | 'abs'; updated_at: string; }`\n  NKS persistent volume claim details.\n\n  - `id: string`\n  - `cluster_id: string`\n  - `created_at: string`\n  - `name: string`\n  - `size: number`\n  - `status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'`\n  - `type: 'nvme' | 'abs'`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\nconst persistentVolumeClaim = await client.nks.clusters.persistentVolumeClaims.get('persistent_volume_claim_id', { cluster_id: 'cluster_id' });\n\nconsole.log(persistentVolumeClaim);\n```",
    perLanguage: {
      cli: {
        method: 'persistent_volume_claims get',
        example:
          "nirvana nks:clusters:persistent-volume-claims get \\\n  --api-key 'My API Key' \\\n  --cluster-id cluster_id \\\n  --persistent-volume-claim-id persistent_volume_claim_id",
      },
      go: {
        method: 'client.NKS.Clusters.PersistentVolumeClaims.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/nirvana-labs/nirvana-go"\n\t"github.com/nirvana-labs/nirvana-go/option"\n)\n\nfunc main() {\n\tclient := nirvana.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpersistentVolumeClaim, err := client.NKS.Clusters.PersistentVolumeClaims.Get(\n\t\tcontext.TODO(),\n\t\t"cluster_id",\n\t\t"persistent_volume_claim_id",\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", persistentVolumeClaim.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.nirvanalabs.io/v1/nks/clusters/$CLUSTER_ID/persistent_volume_claims/$PERSISTENT_VOLUME_CLAIM_ID \\\n    -H "Authorization: Bearer $NIRVANA_LABS_API_KEY"',
      },
      typescript: {
        method: 'client.nks.clusters.persistentVolumeClaims.get',
        example:
          "import NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs({\n  apiKey: process.env['NIRVANA_LABS_API_KEY'], // This is the default and can be omitted\n});\n\nconst persistentVolumeClaim = await client.nks.clusters.persistentVolumeClaims.get(\n  'persistent_volume_claim_id',\n  { cluster_id: 'cluster_id' },\n);\n\nconsole.log(persistentVolumeClaim.id);",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/v1/nks/clusters/{cluster_id}/persistent_volume_claims',
    httpMethod: 'get',
    summary: 'List NKS Persistent Volume Claims',
    description: 'List all persistent volume claims in an NKS cluster',
    stainlessPath: '(resource) nks.clusters.persistent_volume_claims > (method) list',
    qualified: 'client.nks.clusters.persistentVolumeClaims.list',
    params: ['cluster_id: string;', 'cursor?: string;', 'limit?: number;'],
    response:
      "{ id: string; cluster_id: string; created_at: string; name: string; size: number; status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'; type: 'nvme' | 'abs'; updated_at: string; }",
    markdown:
      "## list\n\n`client.nks.clusters.persistentVolumeClaims.list(cluster_id: string, cursor?: string, limit?: number): { id: string; cluster_id: string; created_at: string; name: string; size: number; status: resource_status; type: volume_type; updated_at: string; }`\n\n**get** `/v1/nks/clusters/{cluster_id}/persistent_volume_claims`\n\nList all persistent volume claims in an NKS cluster\n\n### Parameters\n\n- `cluster_id: string`\n\n- `cursor?: string`\n  Pagination cursor returned by a previous request\n\n- `limit?: number`\n  Maximum number of items to return\n\n### Returns\n\n- `{ id: string; cluster_id: string; created_at: string; name: string; size: number; status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'; type: 'nvme' | 'abs'; updated_at: string; }`\n  NKS persistent volume claim details.\n\n  - `id: string`\n  - `cluster_id: string`\n  - `created_at: string`\n  - `name: string`\n  - `size: number`\n  - `status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'`\n  - `type: 'nvme' | 'abs'`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\n// Automatically fetches more pages as needed.\nfor await (const persistentVolumeClaim of client.nks.clusters.persistentVolumeClaims.list('cluster_id')) {\n  console.log(persistentVolumeClaim);\n}\n```",
    perLanguage: {
      cli: {
        method: 'persistent_volume_claims list',
        example:
          "nirvana nks:clusters:persistent-volume-claims list \\\n  --api-key 'My API Key' \\\n  --cluster-id cluster_id",
      },
      go: {
        method: 'client.NKS.Clusters.PersistentVolumeClaims.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/nirvana-labs/nirvana-go"\n\t"github.com/nirvana-labs/nirvana-go/nks"\n\t"github.com/nirvana-labs/nirvana-go/option"\n)\n\nfunc main() {\n\tclient := nirvana.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpage, err := client.NKS.Clusters.PersistentVolumeClaims.List(\n\t\tcontext.TODO(),\n\t\t"cluster_id",\n\t\tnks.ClusterPersistentVolumeClaimListParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", page)\n}\n',
      },
      http: {
        example:
          'curl https://api.nirvanalabs.io/v1/nks/clusters/$CLUSTER_ID/persistent_volume_claims \\\n    -H "Authorization: Bearer $NIRVANA_LABS_API_KEY"',
      },
      typescript: {
        method: 'client.nks.clusters.persistentVolumeClaims.list',
        example:
          "import NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs({\n  apiKey: process.env['NIRVANA_LABS_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const persistentVolumeClaim of client.nks.clusters.persistentVolumeClaims.list(\n  'cluster_id',\n)) {\n  console.log(persistentVolumeClaim.id);\n}",
      },
    },
  },
  {
    name: 'get',
    endpoint: '/v1/nks/clusters/{cluster_id}/kubeconfig',
    httpMethod: 'get',
    summary: 'Get NKS Cluster Kubeconfig',
    description: 'Get the kubeconfig for an NKS cluster',
    stainlessPath: '(resource) nks.clusters.kubeconfig > (method) get',
    qualified: 'client.nks.clusters.kubeconfig.get',
    params: ['cluster_id: string;'],
    response: '{ kubeconfig: string; }',
    markdown:
      "## get\n\n`client.nks.clusters.kubeconfig.get(cluster_id: string): { kubeconfig: string; }`\n\n**get** `/v1/nks/clusters/{cluster_id}/kubeconfig`\n\nGet the kubeconfig for an NKS cluster\n\n### Parameters\n\n- `cluster_id: string`\n\n### Returns\n\n- `{ kubeconfig: string; }`\n  Kubeconfig for an NKS Cluster.\n\n  - `kubeconfig: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\nconst kubeconfig = await client.nks.clusters.kubeconfig.get('cluster_id');\n\nconsole.log(kubeconfig);\n```",
    perLanguage: {
      cli: {
        method: 'kubeconfig get',
        example:
          "nirvana nks:clusters:kubeconfig get \\\n  --api-key 'My API Key' \\\n  --cluster-id cluster_id",
      },
      go: {
        method: 'client.NKS.Clusters.Kubeconfig.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/nirvana-labs/nirvana-go"\n\t"github.com/nirvana-labs/nirvana-go/option"\n)\n\nfunc main() {\n\tclient := nirvana.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tkubeconfig, err := client.NKS.Clusters.Kubeconfig.Get(context.TODO(), "cluster_id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", kubeconfig.Kubeconfig)\n}\n',
      },
      http: {
        example:
          'curl https://api.nirvanalabs.io/v1/nks/clusters/$CLUSTER_ID/kubeconfig \\\n    -H "Authorization: Bearer $NIRVANA_LABS_API_KEY"',
      },
      typescript: {
        method: 'client.nks.clusters.kubeconfig.get',
        example:
          "import NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs({\n  apiKey: process.env['NIRVANA_LABS_API_KEY'], // This is the default and can be omitted\n});\n\nconst kubeconfig = await client.nks.clusters.kubeconfig.get('cluster_id');\n\nconsole.log(kubeconfig.kubeconfig);",
      },
    },
  },
  {
    name: 'get',
    endpoint: '/v1/nks/clusters/{cluster_id}/controllers/{controller_id}',
    httpMethod: 'get',
    summary: 'Get NKS Controller Details',
    description: 'Get details about an NKS controller',
    stainlessPath: '(resource) nks.clusters.controllers > (method) get',
    qualified: 'client.nks.clusters.controllers.get',
    params: ['cluster_id: string;', 'controller_id: string;'],
    response:
      "{ id: string; created_at: string; instance_type: string; name: string; private_ip: string; status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'; updated_at: string; }",
    markdown:
      "## get\n\n`client.nks.clusters.controllers.get(cluster_id: string, controller_id: string): { id: string; created_at: string; instance_type: string; name: string; private_ip: string; status: resource_status; updated_at: string; }`\n\n**get** `/v1/nks/clusters/{cluster_id}/controllers/{controller_id}`\n\nGet details about an NKS controller\n\n### Parameters\n\n- `cluster_id: string`\n\n- `controller_id: string`\n\n### Returns\n\n- `{ id: string; created_at: string; instance_type: string; name: string; private_ip: string; status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'; updated_at: string; }`\n  NKS controller details.\n\n  - `id: string`\n  - `created_at: string`\n  - `instance_type: string`\n  - `name: string`\n  - `private_ip: string`\n  - `status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\nconst nksController = await client.nks.clusters.controllers.get('controller_id', { cluster_id: 'cluster_id' });\n\nconsole.log(nksController);\n```",
    perLanguage: {
      cli: {
        method: 'controllers get',
        example:
          "nirvana nks:clusters:controllers get \\\n  --api-key 'My API Key' \\\n  --cluster-id cluster_id \\\n  --controller-id controller_id",
      },
      go: {
        method: 'client.NKS.Clusters.Controllers.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/nirvana-labs/nirvana-go"\n\t"github.com/nirvana-labs/nirvana-go/option"\n)\n\nfunc main() {\n\tclient := nirvana.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tnksController, err := client.NKS.Clusters.Controllers.Get(\n\t\tcontext.TODO(),\n\t\t"cluster_id",\n\t\t"controller_id",\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", nksController.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.nirvanalabs.io/v1/nks/clusters/$CLUSTER_ID/controllers/$CONTROLLER_ID \\\n    -H "Authorization: Bearer $NIRVANA_LABS_API_KEY"',
      },
      typescript: {
        method: 'client.nks.clusters.controllers.get',
        example:
          "import NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs({\n  apiKey: process.env['NIRVANA_LABS_API_KEY'], // This is the default and can be omitted\n});\n\nconst nksController = await client.nks.clusters.controllers.get('controller_id', {\n  cluster_id: 'cluster_id',\n});\n\nconsole.log(nksController.id);",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/v1/nks/clusters/{cluster_id}/controllers',
    httpMethod: 'get',
    summary: 'List NKS Controllers',
    description: 'List all controllers in an NKS cluster',
    stainlessPath: '(resource) nks.clusters.controllers > (method) list',
    qualified: 'client.nks.clusters.controllers.list',
    params: ['cluster_id: string;', 'cursor?: string;', 'limit?: number;'],
    response:
      "{ id: string; created_at: string; instance_type: string; name: string; private_ip: string; status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'; updated_at: string; }",
    markdown:
      "## list\n\n`client.nks.clusters.controllers.list(cluster_id: string, cursor?: string, limit?: number): { id: string; created_at: string; instance_type: string; name: string; private_ip: string; status: resource_status; updated_at: string; }`\n\n**get** `/v1/nks/clusters/{cluster_id}/controllers`\n\nList all controllers in an NKS cluster\n\n### Parameters\n\n- `cluster_id: string`\n\n- `cursor?: string`\n  Pagination cursor returned by a previous request\n\n- `limit?: number`\n  Maximum number of items to return\n\n### Returns\n\n- `{ id: string; created_at: string; instance_type: string; name: string; private_ip: string; status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'; updated_at: string; }`\n  NKS controller details.\n\n  - `id: string`\n  - `created_at: string`\n  - `instance_type: string`\n  - `name: string`\n  - `private_ip: string`\n  - `status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\n// Automatically fetches more pages as needed.\nfor await (const nksController of client.nks.clusters.controllers.list('cluster_id')) {\n  console.log(nksController);\n}\n```",
    perLanguage: {
      cli: {
        method: 'controllers list',
        example:
          "nirvana nks:clusters:controllers list \\\n  --api-key 'My API Key' \\\n  --cluster-id cluster_id",
      },
      go: {
        method: 'client.NKS.Clusters.Controllers.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/nirvana-labs/nirvana-go"\n\t"github.com/nirvana-labs/nirvana-go/nks"\n\t"github.com/nirvana-labs/nirvana-go/option"\n)\n\nfunc main() {\n\tclient := nirvana.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpage, err := client.NKS.Clusters.Controllers.List(\n\t\tcontext.TODO(),\n\t\t"cluster_id",\n\t\tnks.ClusterControllerListParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", page)\n}\n',
      },
      http: {
        example:
          'curl https://api.nirvanalabs.io/v1/nks/clusters/$CLUSTER_ID/controllers \\\n    -H "Authorization: Bearer $NIRVANA_LABS_API_KEY"',
      },
      typescript: {
        method: 'client.nks.clusters.controllers.list',
        example:
          "import NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs({\n  apiKey: process.env['NIRVANA_LABS_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const nksController of client.nks.clusters.controllers.list('cluster_id')) {\n  console.log(nksController.id);\n}",
      },
    },
  },
  {
    name: 'get',
    endpoint: '/v1/nks/clusters/{cluster_id}/controllers/{controller_id}/volumes/{volume_id}',
    httpMethod: 'get',
    summary: 'Get NKS Controller Volume Details',
    description: 'Get details about a volume attached to an NKS controller',
    stainlessPath: '(resource) nks.clusters.controllers.volumes > (method) get',
    qualified: 'client.nks.clusters.controllers.volumes.get',
    params: ['cluster_id: string;', 'controller_id: string;', 'volume_id: string;'],
    response:
      "{ id: string; created_at: string; kind: 'boot' | 'data'; name: string; size: number; status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'; type: 'nvme' | 'abs'; updated_at: string; }",
    markdown:
      "## get\n\n`client.nks.clusters.controllers.volumes.get(cluster_id: string, controller_id: string, volume_id: string): { id: string; created_at: string; kind: volume_kind; name: string; size: number; status: resource_status; type: volume_type; updated_at: string; }`\n\n**get** `/v1/nks/clusters/{cluster_id}/controllers/{controller_id}/volumes/{volume_id}`\n\nGet details about a volume attached to an NKS controller\n\n### Parameters\n\n- `cluster_id: string`\n\n- `controller_id: string`\n\n- `volume_id: string`\n\n### Returns\n\n- `{ id: string; created_at: string; kind: 'boot' | 'data'; name: string; size: number; status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'; type: 'nvme' | 'abs'; updated_at: string; }`\n  NKS controller volume details.\n\n  - `id: string`\n  - `created_at: string`\n  - `kind: 'boot' | 'data'`\n  - `name: string`\n  - `size: number`\n  - `status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'`\n  - `type: 'nvme' | 'abs'`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\nconst nksControllerVolume = await client.nks.clusters.controllers.volumes.get('volume_id', { cluster_id: 'cluster_id', controller_id: 'controller_id' });\n\nconsole.log(nksControllerVolume);\n```",
    perLanguage: {
      cli: {
        method: 'volumes get',
        example:
          "nirvana nks:clusters:controllers:volumes get \\\n  --api-key 'My API Key' \\\n  --cluster-id cluster_id \\\n  --controller-id controller_id \\\n  --volume-id volume_id",
      },
      go: {
        method: 'client.NKS.Clusters.Controllers.Volumes.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/nirvana-labs/nirvana-go"\n\t"github.com/nirvana-labs/nirvana-go/option"\n)\n\nfunc main() {\n\tclient := nirvana.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tnksControllerVolume, err := client.NKS.Clusters.Controllers.Volumes.Get(\n\t\tcontext.TODO(),\n\t\t"cluster_id",\n\t\t"controller_id",\n\t\t"volume_id",\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", nksControllerVolume.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.nirvanalabs.io/v1/nks/clusters/$CLUSTER_ID/controllers/$CONTROLLER_ID/volumes/$VOLUME_ID \\\n    -H "Authorization: Bearer $NIRVANA_LABS_API_KEY"',
      },
      typescript: {
        method: 'client.nks.clusters.controllers.volumes.get',
        example:
          "import NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs({\n  apiKey: process.env['NIRVANA_LABS_API_KEY'], // This is the default and can be omitted\n});\n\nconst nksControllerVolume = await client.nks.clusters.controllers.volumes.get('volume_id', {\n  cluster_id: 'cluster_id',\n  controller_id: 'controller_id',\n});\n\nconsole.log(nksControllerVolume.id);",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/v1/nks/clusters/{cluster_id}/controllers/{controller_id}/volumes',
    httpMethod: 'get',
    summary: 'List NKS Controller Volumes',
    description: 'List all volumes attached to an NKS controller',
    stainlessPath: '(resource) nks.clusters.controllers.volumes > (method) list',
    qualified: 'client.nks.clusters.controllers.volumes.list',
    params: ['cluster_id: string;', 'controller_id: string;', 'cursor?: string;', 'limit?: number;'],
    response:
      "{ id: string; created_at: string; kind: 'boot' | 'data'; name: string; size: number; status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'; type: 'nvme' | 'abs'; updated_at: string; }",
    markdown:
      "## list\n\n`client.nks.clusters.controllers.volumes.list(cluster_id: string, controller_id: string, cursor?: string, limit?: number): { id: string; created_at: string; kind: volume_kind; name: string; size: number; status: resource_status; type: volume_type; updated_at: string; }`\n\n**get** `/v1/nks/clusters/{cluster_id}/controllers/{controller_id}/volumes`\n\nList all volumes attached to an NKS controller\n\n### Parameters\n\n- `cluster_id: string`\n\n- `controller_id: string`\n\n- `cursor?: string`\n  Pagination cursor returned by a previous request\n\n- `limit?: number`\n  Maximum number of items to return\n\n### Returns\n\n- `{ id: string; created_at: string; kind: 'boot' | 'data'; name: string; size: number; status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'; type: 'nvme' | 'abs'; updated_at: string; }`\n  NKS controller volume details.\n\n  - `id: string`\n  - `created_at: string`\n  - `kind: 'boot' | 'data'`\n  - `name: string`\n  - `size: number`\n  - `status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'`\n  - `type: 'nvme' | 'abs'`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\n// Automatically fetches more pages as needed.\nfor await (const nksControllerVolume of client.nks.clusters.controllers.volumes.list('controller_id', { cluster_id: 'cluster_id' })) {\n  console.log(nksControllerVolume);\n}\n```",
    perLanguage: {
      cli: {
        method: 'volumes list',
        example:
          "nirvana nks:clusters:controllers:volumes list \\\n  --api-key 'My API Key' \\\n  --cluster-id cluster_id \\\n  --controller-id controller_id",
      },
      go: {
        method: 'client.NKS.Clusters.Controllers.Volumes.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/nirvana-labs/nirvana-go"\n\t"github.com/nirvana-labs/nirvana-go/nks"\n\t"github.com/nirvana-labs/nirvana-go/option"\n)\n\nfunc main() {\n\tclient := nirvana.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpage, err := client.NKS.Clusters.Controllers.Volumes.List(\n\t\tcontext.TODO(),\n\t\t"cluster_id",\n\t\t"controller_id",\n\t\tnks.ClusterControllerVolumeListParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", page)\n}\n',
      },
      http: {
        example:
          'curl https://api.nirvanalabs.io/v1/nks/clusters/$CLUSTER_ID/controllers/$CONTROLLER_ID/volumes \\\n    -H "Authorization: Bearer $NIRVANA_LABS_API_KEY"',
      },
      typescript: {
        method: 'client.nks.clusters.controllers.volumes.list',
        example:
          "import NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs({\n  apiKey: process.env['NIRVANA_LABS_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const nksControllerVolume of client.nks.clusters.controllers.volumes.list(\n  'controller_id',\n  { cluster_id: 'cluster_id' },\n)) {\n  console.log(nksControllerVolume.id);\n}",
      },
    },
  },
  {
    name: 'get',
    endpoint: '/v1/nks/clusters/{cluster_id}/load_balancers/{load_balancer_id}',
    httpMethod: 'get',
    summary: 'Get NKS Load Balancer Details',
    description: 'Get details about an NKS load balancer',
    stainlessPath: '(resource) nks.clusters.load_balancers > (method) get',
    qualified: 'client.nks.clusters.loadBalancers.get',
    params: ['cluster_id: string;', 'load_balancer_id: string;'],
    response:
      "{ id: string; cluster_id: string; created_at: string; namespace: string; private_ip: string; public_ip: string; public_ip_enabled: boolean; service_name: string; status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'; updated_at: string; }",
    markdown:
      "## get\n\n`client.nks.clusters.loadBalancers.get(cluster_id: string, load_balancer_id: string): { id: string; cluster_id: string; created_at: string; namespace: string; private_ip: string; public_ip: string; public_ip_enabled: boolean; service_name: string; status: resource_status; updated_at: string; }`\n\n**get** `/v1/nks/clusters/{cluster_id}/load_balancers/{load_balancer_id}`\n\nGet details about an NKS load balancer\n\n### Parameters\n\n- `cluster_id: string`\n\n- `load_balancer_id: string`\n\n### Returns\n\n- `{ id: string; cluster_id: string; created_at: string; namespace: string; private_ip: string; public_ip: string; public_ip_enabled: boolean; service_name: string; status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'; updated_at: string; }`\n  NKS load balancer details.\n\n  - `id: string`\n  - `cluster_id: string`\n  - `created_at: string`\n  - `namespace: string`\n  - `private_ip: string`\n  - `public_ip: string`\n  - `public_ip_enabled: boolean`\n  - `service_name: string`\n  - `status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\nconst nksLoadBalancer = await client.nks.clusters.loadBalancers.get('load_balancer_id', { cluster_id: 'cluster_id' });\n\nconsole.log(nksLoadBalancer);\n```",
    perLanguage: {
      cli: {
        method: 'load_balancers get',
        example:
          "nirvana nks:clusters:load-balancers get \\\n  --api-key 'My API Key' \\\n  --cluster-id cluster_id \\\n  --load-balancer-id load_balancer_id",
      },
      go: {
        method: 'client.NKS.Clusters.LoadBalancers.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/nirvana-labs/nirvana-go"\n\t"github.com/nirvana-labs/nirvana-go/option"\n)\n\nfunc main() {\n\tclient := nirvana.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tnksLoadBalancer, err := client.NKS.Clusters.LoadBalancers.Get(\n\t\tcontext.TODO(),\n\t\t"cluster_id",\n\t\t"load_balancer_id",\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", nksLoadBalancer.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.nirvanalabs.io/v1/nks/clusters/$CLUSTER_ID/load_balancers/$LOAD_BALANCER_ID \\\n    -H "Authorization: Bearer $NIRVANA_LABS_API_KEY"',
      },
      typescript: {
        method: 'client.nks.clusters.loadBalancers.get',
        example:
          "import NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs({\n  apiKey: process.env['NIRVANA_LABS_API_KEY'], // This is the default and can be omitted\n});\n\nconst nksLoadBalancer = await client.nks.clusters.loadBalancers.get('load_balancer_id', {\n  cluster_id: 'cluster_id',\n});\n\nconsole.log(nksLoadBalancer.id);",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/v1/nks/clusters/{cluster_id}/load_balancers',
    httpMethod: 'get',
    summary: 'List NKS Load Balancers',
    description: 'List all load balancers in an NKS cluster',
    stainlessPath: '(resource) nks.clusters.load_balancers > (method) list',
    qualified: 'client.nks.clusters.loadBalancers.list',
    params: ['cluster_id: string;', 'cursor?: string;', 'limit?: number;'],
    response:
      "{ id: string; cluster_id: string; created_at: string; namespace: string; private_ip: string; public_ip: string; public_ip_enabled: boolean; service_name: string; status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'; updated_at: string; }",
    markdown:
      "## list\n\n`client.nks.clusters.loadBalancers.list(cluster_id: string, cursor?: string, limit?: number): { id: string; cluster_id: string; created_at: string; namespace: string; private_ip: string; public_ip: string; public_ip_enabled: boolean; service_name: string; status: resource_status; updated_at: string; }`\n\n**get** `/v1/nks/clusters/{cluster_id}/load_balancers`\n\nList all load balancers in an NKS cluster\n\n### Parameters\n\n- `cluster_id: string`\n\n- `cursor?: string`\n  Pagination cursor returned by a previous request\n\n- `limit?: number`\n  Maximum number of items to return\n\n### Returns\n\n- `{ id: string; cluster_id: string; created_at: string; namespace: string; private_ip: string; public_ip: string; public_ip_enabled: boolean; service_name: string; status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'; updated_at: string; }`\n  NKS load balancer details.\n\n  - `id: string`\n  - `cluster_id: string`\n  - `created_at: string`\n  - `namespace: string`\n  - `private_ip: string`\n  - `public_ip: string`\n  - `public_ip_enabled: boolean`\n  - `service_name: string`\n  - `status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\n// Automatically fetches more pages as needed.\nfor await (const nksLoadBalancer of client.nks.clusters.loadBalancers.list('cluster_id')) {\n  console.log(nksLoadBalancer);\n}\n```",
    perLanguage: {
      cli: {
        method: 'load_balancers list',
        example:
          "nirvana nks:clusters:load-balancers list \\\n  --api-key 'My API Key' \\\n  --cluster-id cluster_id",
      },
      go: {
        method: 'client.NKS.Clusters.LoadBalancers.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/nirvana-labs/nirvana-go"\n\t"github.com/nirvana-labs/nirvana-go/nks"\n\t"github.com/nirvana-labs/nirvana-go/option"\n)\n\nfunc main() {\n\tclient := nirvana.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpage, err := client.NKS.Clusters.LoadBalancers.List(\n\t\tcontext.TODO(),\n\t\t"cluster_id",\n\t\tnks.ClusterLoadBalancerListParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", page)\n}\n',
      },
      http: {
        example:
          'curl https://api.nirvanalabs.io/v1/nks/clusters/$CLUSTER_ID/load_balancers \\\n    -H "Authorization: Bearer $NIRVANA_LABS_API_KEY"',
      },
      typescript: {
        method: 'client.nks.clusters.loadBalancers.list',
        example:
          "import NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs({\n  apiKey: process.env['NIRVANA_LABS_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const nksLoadBalancer of client.nks.clusters.loadBalancers.list('cluster_id')) {\n  console.log(nksLoadBalancer.id);\n}",
      },
    },
  },
  {
    name: 'create',
    endpoint: '/v1/nks/clusters/{cluster_id}/pools',
    httpMethod: 'post',
    summary: 'Create NKS Node Pool',
    description: 'Create a node pool in an NKS cluster',
    stainlessPath: '(resource) nks.clusters.pools > (method) create',
    qualified: 'client.nks.clusters.pools.create',
    params: [
      'cluster_id: string;',
      'name: string;',
      'node_config: { boot_volume: { size: number; type: volume_type; }; instance_type: string; };',
      'node_count: number;',
      'tags?: string[];',
    ],
    response:
      "{ id: string; created_at: string; kind: 'vm' | 'volume' | 'vpc' | 'firewall_rule' | 'nks_cluster' | 'nks_node_pool'; project_id: string; resource_id: string; status: 'pending' | 'running' | 'done' | 'failed' | 'unknown'; type: 'create' | 'update' | 'delete' | 'restart'; updated_at: string; }",
    markdown:
      "## create\n\n`client.nks.clusters.pools.create(cluster_id: string, name: string, node_config: { boot_volume: nks_node_pool_boot_volume; instance_type: string; }, node_count: number, tags?: string[]): { id: string; created_at: string; kind: operation_kind; project_id: string; resource_id: string; status: operation_status; type: operation_type; updated_at: string; }`\n\n**post** `/v1/nks/clusters/{cluster_id}/pools`\n\nCreate a node pool in an NKS cluster\n\n### Parameters\n\n- `cluster_id: string`\n\n- `name: string`\n  Name of the node pool.\n\n- `node_config: { boot_volume: { size: number; type: volume_type; }; instance_type: string; }`\n  Node configuration.\n  - `boot_volume: { size: number; type: 'nvme' | 'abs'; }`\n    Boot volume configuration.\n  - `instance_type: string`\n    Instance type name used for worker nodes.\n\n- `node_count: number`\n  Number of nodes. Must be between 1 and 100.\n\n- `tags?: string[]`\n  Tags to attach to the node pool.\n\n### Returns\n\n- `{ id: string; created_at: string; kind: 'vm' | 'volume' | 'vpc' | 'firewall_rule' | 'nks_cluster' | 'nks_node_pool'; project_id: string; resource_id: string; status: 'pending' | 'running' | 'done' | 'failed' | 'unknown'; type: 'create' | 'update' | 'delete' | 'restart'; updated_at: string; }`\n  Operation details.\n\n  - `id: string`\n  - `created_at: string`\n  - `kind: 'vm' | 'volume' | 'vpc' | 'firewall_rule' | 'nks_cluster' | 'nks_node_pool'`\n  - `project_id: string`\n  - `resource_id: string`\n  - `status: 'pending' | 'running' | 'done' | 'failed' | 'unknown'`\n  - `type: 'create' | 'update' | 'delete' | 'restart'`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\nconst operation = await client.nks.clusters.pools.create('cluster_id', {\n  name: 'my-node-pool',\n  node_config: {\n  boot_volume: { size: 100, type: 'abs' },\n  instance_type: 'n1-standard-8',\n},\n  node_count: 3,\n});\n\nconsole.log(operation);\n```",
    perLanguage: {
      cli: {
        method: 'pools create',
        example:
          "nirvana nks:clusters:pools create \\\n  --api-key 'My API Key' \\\n  --cluster-id cluster_id \\\n  --name my-node-pool \\\n  --node-config '{boot_volume: {size: 100, type: abs}, instance_type: n1-standard-8}' \\\n  --node-count 3",
      },
      go: {
        method: 'client.NKS.Clusters.Pools.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/nirvana-labs/nirvana-go"\n\t"github.com/nirvana-labs/nirvana-go/compute"\n\t"github.com/nirvana-labs/nirvana-go/nks"\n\t"github.com/nirvana-labs/nirvana-go/option"\n)\n\nfunc main() {\n\tclient := nirvana.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\toperation, err := client.NKS.Clusters.Pools.New(\n\t\tcontext.TODO(),\n\t\t"cluster_id",\n\t\tnks.ClusterPoolNewParams{\n\t\t\tName: "my-node-pool",\n\t\t\tNodeConfig: nks.NKSNodePoolNodeConfigParam{\n\t\t\t\tBootVolume: nks.NKSNodePoolBootVolumeParam{\n\t\t\t\t\tSize: 100,\n\t\t\t\t\tType: compute.VolumeTypeABS,\n\t\t\t\t},\n\t\t\t\tInstanceType: "n1-standard-8",\n\t\t\t},\n\t\t\tNodeCount: 3,\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", operation.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.nirvanalabs.io/v1/nks/clusters/$CLUSTER_ID/pools \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $NIRVANA_LABS_API_KEY" \\\n    -d \'{\n          "name": "my-node-pool",\n          "node_config": {\n            "boot_volume": {\n              "size": 100,\n              "type": "abs"\n            },\n            "instance_type": "n1-standard-8"\n          },\n          "node_count": 3,\n          "tags": [\n            "production",\n            "ethereum"\n          ]\n        }\'',
      },
      typescript: {
        method: 'client.nks.clusters.pools.create',
        example:
          "import NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs({\n  apiKey: process.env['NIRVANA_LABS_API_KEY'], // This is the default and can be omitted\n});\n\nconst operation = await client.nks.clusters.pools.create('cluster_id', {\n  name: 'my-node-pool',\n  node_config: {\n    boot_volume: { size: 100, type: 'abs' },\n    instance_type: 'n1-standard-8',\n  },\n  node_count: 3,\n});\n\nconsole.log(operation.id);",
      },
    },
  },
  {
    name: 'get',
    endpoint: '/v1/nks/clusters/{cluster_id}/pools/{pool_id}',
    httpMethod: 'get',
    summary: 'Get NKS Node Pool Details',
    description: 'Get details about an NKS node pool',
    stainlessPath: '(resource) nks.clusters.pools > (method) get',
    qualified: 'client.nks.clusters.pools.get',
    params: ['cluster_id: string;', 'pool_id: string;'],
    response:
      "{ id: string; cluster_id: string; created_at: string; name: string; node_config: { boot_volume: nks_node_pool_boot_volume_response; instance_type: string; }; node_count: number; status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'; tags: string[]; updated_at: string; }",
    markdown:
      "## get\n\n`client.nks.clusters.pools.get(cluster_id: string, pool_id: string): { id: string; cluster_id: string; created_at: string; name: string; node_config: nks_node_pool_node_config_response; node_count: number; status: resource_status; tags: string[]; updated_at: string; }`\n\n**get** `/v1/nks/clusters/{cluster_id}/pools/{pool_id}`\n\nGet details about an NKS node pool\n\n### Parameters\n\n- `cluster_id: string`\n\n- `pool_id: string`\n\n### Returns\n\n- `{ id: string; cluster_id: string; created_at: string; name: string; node_config: { boot_volume: nks_node_pool_boot_volume_response; instance_type: string; }; node_count: number; status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'; tags: string[]; updated_at: string; }`\n  NKS node pool details.\n\n  - `id: string`\n  - `cluster_id: string`\n  - `created_at: string`\n  - `name: string`\n  - `node_config: { boot_volume: { size: number; type: volume_type; }; instance_type: string; }`\n  - `node_count: number`\n  - `status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'`\n  - `tags: string[]`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\nconst nksNodePool = await client.nks.clusters.pools.get('pool_id', { cluster_id: 'cluster_id' });\n\nconsole.log(nksNodePool);\n```",
    perLanguage: {
      cli: {
        method: 'pools get',
        example:
          "nirvana nks:clusters:pools get \\\n  --api-key 'My API Key' \\\n  --cluster-id cluster_id \\\n  --pool-id pool_id",
      },
      go: {
        method: 'client.NKS.Clusters.Pools.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/nirvana-labs/nirvana-go"\n\t"github.com/nirvana-labs/nirvana-go/option"\n)\n\nfunc main() {\n\tclient := nirvana.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tnksNodePool, err := client.NKS.Clusters.Pools.Get(\n\t\tcontext.TODO(),\n\t\t"cluster_id",\n\t\t"pool_id",\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", nksNodePool.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.nirvanalabs.io/v1/nks/clusters/$CLUSTER_ID/pools/$POOL_ID \\\n    -H "Authorization: Bearer $NIRVANA_LABS_API_KEY"',
      },
      typescript: {
        method: 'client.nks.clusters.pools.get',
        example:
          "import NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs({\n  apiKey: process.env['NIRVANA_LABS_API_KEY'], // This is the default and can be omitted\n});\n\nconst nksNodePool = await client.nks.clusters.pools.get('pool_id', { cluster_id: 'cluster_id' });\n\nconsole.log(nksNodePool.id);",
      },
    },
  },
  {
    name: 'update',
    endpoint: '/v1/nks/clusters/{cluster_id}/pools/{pool_id}',
    httpMethod: 'patch',
    summary: 'Update NKS Node Pool',
    description: 'Update an NKS node pool',
    stainlessPath: '(resource) nks.clusters.pools > (method) update',
    qualified: 'client.nks.clusters.pools.update',
    params: [
      'cluster_id: string;',
      'pool_id: string;',
      'name?: string;',
      'node_count?: number;',
      'tags?: string[];',
    ],
    response:
      "{ id: string; created_at: string; kind: 'vm' | 'volume' | 'vpc' | 'firewall_rule' | 'nks_cluster' | 'nks_node_pool'; project_id: string; resource_id: string; status: 'pending' | 'running' | 'done' | 'failed' | 'unknown'; type: 'create' | 'update' | 'delete' | 'restart'; updated_at: string; }",
    markdown:
      "## update\n\n`client.nks.clusters.pools.update(cluster_id: string, pool_id: string, name?: string, node_count?: number, tags?: string[]): { id: string; created_at: string; kind: operation_kind; project_id: string; resource_id: string; status: operation_status; type: operation_type; updated_at: string; }`\n\n**patch** `/v1/nks/clusters/{cluster_id}/pools/{pool_id}`\n\nUpdate an NKS node pool\n\n### Parameters\n\n- `cluster_id: string`\n\n- `pool_id: string`\n\n- `name?: string`\n  Name of the node pool.\n\n- `node_count?: number`\n  Number of nodes.\n\n- `tags?: string[]`\n  Tags to attach to the node pool.\n\n### Returns\n\n- `{ id: string; created_at: string; kind: 'vm' | 'volume' | 'vpc' | 'firewall_rule' | 'nks_cluster' | 'nks_node_pool'; project_id: string; resource_id: string; status: 'pending' | 'running' | 'done' | 'failed' | 'unknown'; type: 'create' | 'update' | 'delete' | 'restart'; updated_at: string; }`\n  Operation details.\n\n  - `id: string`\n  - `created_at: string`\n  - `kind: 'vm' | 'volume' | 'vpc' | 'firewall_rule' | 'nks_cluster' | 'nks_node_pool'`\n  - `project_id: string`\n  - `resource_id: string`\n  - `status: 'pending' | 'running' | 'done' | 'failed' | 'unknown'`\n  - `type: 'create' | 'update' | 'delete' | 'restart'`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\nconst operation = await client.nks.clusters.pools.update('pool_id', { cluster_id: 'cluster_id' });\n\nconsole.log(operation);\n```",
    perLanguage: {
      cli: {
        method: 'pools update',
        example:
          "nirvana nks:clusters:pools update \\\n  --api-key 'My API Key' \\\n  --cluster-id cluster_id \\\n  --pool-id pool_id",
      },
      go: {
        method: 'client.NKS.Clusters.Pools.Update',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/nirvana-labs/nirvana-go"\n\t"github.com/nirvana-labs/nirvana-go/nks"\n\t"github.com/nirvana-labs/nirvana-go/option"\n)\n\nfunc main() {\n\tclient := nirvana.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\toperation, err := client.NKS.Clusters.Pools.Update(\n\t\tcontext.TODO(),\n\t\t"cluster_id",\n\t\t"pool_id",\n\t\tnks.ClusterPoolUpdateParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", operation.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.nirvanalabs.io/v1/nks/clusters/$CLUSTER_ID/pools/$POOL_ID \\\n    -X PATCH \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $NIRVANA_LABS_API_KEY" \\\n    -d \'{\n          "name": "my-node-pool",\n          "node_count": 5,\n          "tags": [\n            "production",\n            "ethereum"\n          ]\n        }\'',
      },
      typescript: {
        method: 'client.nks.clusters.pools.update',
        example:
          "import NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs({\n  apiKey: process.env['NIRVANA_LABS_API_KEY'], // This is the default and can be omitted\n});\n\nconst operation = await client.nks.clusters.pools.update('pool_id', { cluster_id: 'cluster_id' });\n\nconsole.log(operation.id);",
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/v1/nks/clusters/{cluster_id}/pools/{pool_id}',
    httpMethod: 'delete',
    summary: 'Delete NKS Node Pool',
    description: 'Delete an NKS node pool',
    stainlessPath: '(resource) nks.clusters.pools > (method) delete',
    qualified: 'client.nks.clusters.pools.delete',
    params: ['cluster_id: string;', 'pool_id: string;'],
    response:
      "{ id: string; created_at: string; kind: 'vm' | 'volume' | 'vpc' | 'firewall_rule' | 'nks_cluster' | 'nks_node_pool'; project_id: string; resource_id: string; status: 'pending' | 'running' | 'done' | 'failed' | 'unknown'; type: 'create' | 'update' | 'delete' | 'restart'; updated_at: string; }",
    markdown:
      "## delete\n\n`client.nks.clusters.pools.delete(cluster_id: string, pool_id: string): { id: string; created_at: string; kind: operation_kind; project_id: string; resource_id: string; status: operation_status; type: operation_type; updated_at: string; }`\n\n**delete** `/v1/nks/clusters/{cluster_id}/pools/{pool_id}`\n\nDelete an NKS node pool\n\n### Parameters\n\n- `cluster_id: string`\n\n- `pool_id: string`\n\n### Returns\n\n- `{ id: string; created_at: string; kind: 'vm' | 'volume' | 'vpc' | 'firewall_rule' | 'nks_cluster' | 'nks_node_pool'; project_id: string; resource_id: string; status: 'pending' | 'running' | 'done' | 'failed' | 'unknown'; type: 'create' | 'update' | 'delete' | 'restart'; updated_at: string; }`\n  Operation details.\n\n  - `id: string`\n  - `created_at: string`\n  - `kind: 'vm' | 'volume' | 'vpc' | 'firewall_rule' | 'nks_cluster' | 'nks_node_pool'`\n  - `project_id: string`\n  - `resource_id: string`\n  - `status: 'pending' | 'running' | 'done' | 'failed' | 'unknown'`\n  - `type: 'create' | 'update' | 'delete' | 'restart'`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\nconst operation = await client.nks.clusters.pools.delete('pool_id', { cluster_id: 'cluster_id' });\n\nconsole.log(operation);\n```",
    perLanguage: {
      cli: {
        method: 'pools delete',
        example:
          "nirvana nks:clusters:pools delete \\\n  --api-key 'My API Key' \\\n  --cluster-id cluster_id \\\n  --pool-id pool_id",
      },
      go: {
        method: 'client.NKS.Clusters.Pools.Delete',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/nirvana-labs/nirvana-go"\n\t"github.com/nirvana-labs/nirvana-go/option"\n)\n\nfunc main() {\n\tclient := nirvana.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\toperation, err := client.NKS.Clusters.Pools.Delete(\n\t\tcontext.TODO(),\n\t\t"cluster_id",\n\t\t"pool_id",\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", operation.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.nirvanalabs.io/v1/nks/clusters/$CLUSTER_ID/pools/$POOL_ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $NIRVANA_LABS_API_KEY"',
      },
      typescript: {
        method: 'client.nks.clusters.pools.delete',
        example:
          "import NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs({\n  apiKey: process.env['NIRVANA_LABS_API_KEY'], // This is the default and can be omitted\n});\n\nconst operation = await client.nks.clusters.pools.delete('pool_id', { cluster_id: 'cluster_id' });\n\nconsole.log(operation.id);",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/v1/nks/clusters/{cluster_id}/pools',
    httpMethod: 'get',
    summary: 'List NKS Node Pools',
    description: 'List all node pools in an NKS cluster',
    stainlessPath: '(resource) nks.clusters.pools > (method) list',
    qualified: 'client.nks.clusters.pools.list',
    params: ['cluster_id: string;', 'cursor?: string;', 'limit?: number;'],
    response:
      "{ id: string; cluster_id: string; created_at: string; name: string; node_config: { boot_volume: nks_node_pool_boot_volume_response; instance_type: string; }; node_count: number; status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'; tags: string[]; updated_at: string; }",
    markdown:
      "## list\n\n`client.nks.clusters.pools.list(cluster_id: string, cursor?: string, limit?: number): { id: string; cluster_id: string; created_at: string; name: string; node_config: nks_node_pool_node_config_response; node_count: number; status: resource_status; tags: string[]; updated_at: string; }`\n\n**get** `/v1/nks/clusters/{cluster_id}/pools`\n\nList all node pools in an NKS cluster\n\n### Parameters\n\n- `cluster_id: string`\n\n- `cursor?: string`\n  Pagination cursor returned by a previous request\n\n- `limit?: number`\n  Maximum number of items to return\n\n### Returns\n\n- `{ id: string; cluster_id: string; created_at: string; name: string; node_config: { boot_volume: nks_node_pool_boot_volume_response; instance_type: string; }; node_count: number; status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'; tags: string[]; updated_at: string; }`\n  NKS node pool details.\n\n  - `id: string`\n  - `cluster_id: string`\n  - `created_at: string`\n  - `name: string`\n  - `node_config: { boot_volume: { size: number; type: volume_type; }; instance_type: string; }`\n  - `node_count: number`\n  - `status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'`\n  - `tags: string[]`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\n// Automatically fetches more pages as needed.\nfor await (const nksNodePool of client.nks.clusters.pools.list('cluster_id')) {\n  console.log(nksNodePool);\n}\n```",
    perLanguage: {
      cli: {
        method: 'pools list',
        example: "nirvana nks:clusters:pools list \\\n  --api-key 'My API Key' \\\n  --cluster-id cluster_id",
      },
      go: {
        method: 'client.NKS.Clusters.Pools.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/nirvana-labs/nirvana-go"\n\t"github.com/nirvana-labs/nirvana-go/nks"\n\t"github.com/nirvana-labs/nirvana-go/option"\n)\n\nfunc main() {\n\tclient := nirvana.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpage, err := client.NKS.Clusters.Pools.List(\n\t\tcontext.TODO(),\n\t\t"cluster_id",\n\t\tnks.ClusterPoolListParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", page)\n}\n',
      },
      http: {
        example:
          'curl https://api.nirvanalabs.io/v1/nks/clusters/$CLUSTER_ID/pools \\\n    -H "Authorization: Bearer $NIRVANA_LABS_API_KEY"',
      },
      typescript: {
        method: 'client.nks.clusters.pools.list',
        example:
          "import NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs({\n  apiKey: process.env['NIRVANA_LABS_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const nksNodePool of client.nks.clusters.pools.list('cluster_id')) {\n  console.log(nksNodePool.id);\n}",
      },
    },
  },
  {
    name: 'create',
    endpoint: '/v1/nks/clusters/{cluster_id}/pools/availability',
    httpMethod: 'post',
    summary: 'Check Create NKS Node Pool Availability',
    description: 'Check if a node pool can be created in an NKS cluster',
    stainlessPath: '(resource) nks.clusters.pools.availability > (method) create',
    qualified: 'client.nks.clusters.pools.availability.create',
    params: [
      'cluster_id: string;',
      'name: string;',
      'node_config: { boot_volume: { size: number; type: volume_type; }; instance_type: string; };',
      'node_count: number;',
      'tags?: string[];',
    ],
    markdown:
      "## create\n\n`client.nks.clusters.pools.availability.create(cluster_id: string, name: string, node_config: { boot_volume: nks_node_pool_boot_volume; instance_type: string; }, node_count: number, tags?: string[]): void`\n\n**post** `/v1/nks/clusters/{cluster_id}/pools/availability`\n\nCheck if a node pool can be created in an NKS cluster\n\n### Parameters\n\n- `cluster_id: string`\n\n- `name: string`\n  Name of the node pool.\n\n- `node_config: { boot_volume: { size: number; type: volume_type; }; instance_type: string; }`\n  Node configuration.\n  - `boot_volume: { size: number; type: 'nvme' | 'abs'; }`\n    Boot volume configuration.\n  - `instance_type: string`\n    Instance type name used for worker nodes.\n\n- `node_count: number`\n  Number of nodes. Must be between 1 and 100.\n\n- `tags?: string[]`\n  Tags to attach to the node pool.\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\nawait client.nks.clusters.pools.availability.create('cluster_id', {\n  name: 'my-node-pool',\n  node_config: {\n  boot_volume: { size: 100, type: 'abs' },\n  instance_type: 'n1-standard-8',\n},\n  node_count: 3,\n})\n```",
    perLanguage: {
      cli: {
        method: 'availability create',
        example:
          "nirvana nks:clusters:pools:availability create \\\n  --api-key 'My API Key' \\\n  --cluster-id cluster_id \\\n  --name my-node-pool \\\n  --node-config '{boot_volume: {size: 100, type: abs}, instance_type: n1-standard-8}' \\\n  --node-count 3",
      },
      go: {
        method: 'client.NKS.Clusters.Pools.Availability.New',
        example:
          'package main\n\nimport (\n\t"context"\n\n\t"github.com/nirvana-labs/nirvana-go"\n\t"github.com/nirvana-labs/nirvana-go/compute"\n\t"github.com/nirvana-labs/nirvana-go/nks"\n\t"github.com/nirvana-labs/nirvana-go/option"\n)\n\nfunc main() {\n\tclient := nirvana.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\terr := client.NKS.Clusters.Pools.Availability.New(\n\t\tcontext.TODO(),\n\t\t"cluster_id",\n\t\tnks.ClusterPoolAvailabilityNewParams{\n\t\t\tName: "my-node-pool",\n\t\t\tNodeConfig: nks.NKSNodePoolNodeConfigParam{\n\t\t\t\tBootVolume: nks.NKSNodePoolBootVolumeParam{\n\t\t\t\t\tSize: 100,\n\t\t\t\t\tType: compute.VolumeTypeABS,\n\t\t\t\t},\n\t\t\t\tInstanceType: "n1-standard-8",\n\t\t\t},\n\t\t\tNodeCount: 3,\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n}\n',
      },
      http: {
        example:
          'curl https://api.nirvanalabs.io/v1/nks/clusters/$CLUSTER_ID/pools/availability \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $NIRVANA_LABS_API_KEY" \\\n    -d \'{\n          "name": "my-node-pool",\n          "node_config": {\n            "boot_volume": {\n              "size": 100,\n              "type": "abs"\n            },\n            "instance_type": "n1-standard-8"\n          },\n          "node_count": 3,\n          "tags": [\n            "production",\n            "ethereum"\n          ]\n        }\'',
      },
      typescript: {
        method: 'client.nks.clusters.pools.availability.create',
        example:
          "import NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs({\n  apiKey: process.env['NIRVANA_LABS_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.nks.clusters.pools.availability.create('cluster_id', {\n  name: 'my-node-pool',\n  node_config: {\n    boot_volume: { size: 100, type: 'abs' },\n    instance_type: 'n1-standard-8',\n  },\n  node_count: 3,\n});",
      },
    },
  },
  {
    name: 'update',
    endpoint: '/v1/nks/clusters/{cluster_id}/pools/{pool_id}/availability',
    httpMethod: 'patch',
    summary: 'Check Update NKS Node Pool Availability',
    description: 'Check if an NKS node pool can be updated',
    stainlessPath: '(resource) nks.clusters.pools.availability > (method) update',
    qualified: 'client.nks.clusters.pools.availability.update',
    params: [
      'cluster_id: string;',
      'pool_id: string;',
      'name?: string;',
      'node_count?: number;',
      'tags?: string[];',
    ],
    markdown:
      "## update\n\n`client.nks.clusters.pools.availability.update(cluster_id: string, pool_id: string, name?: string, node_count?: number, tags?: string[]): void`\n\n**patch** `/v1/nks/clusters/{cluster_id}/pools/{pool_id}/availability`\n\nCheck if an NKS node pool can be updated\n\n### Parameters\n\n- `cluster_id: string`\n\n- `pool_id: string`\n\n- `name?: string`\n  Name of the node pool.\n\n- `node_count?: number`\n  Number of nodes.\n\n- `tags?: string[]`\n  Tags to attach to the node pool.\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\nawait client.nks.clusters.pools.availability.update('pool_id', { cluster_id: 'cluster_id' })\n```",
    perLanguage: {
      cli: {
        method: 'availability update',
        example:
          "nirvana nks:clusters:pools:availability update \\\n  --api-key 'My API Key' \\\n  --cluster-id cluster_id \\\n  --pool-id pool_id",
      },
      go: {
        method: 'client.NKS.Clusters.Pools.Availability.Update',
        example:
          'package main\n\nimport (\n\t"context"\n\n\t"github.com/nirvana-labs/nirvana-go"\n\t"github.com/nirvana-labs/nirvana-go/nks"\n\t"github.com/nirvana-labs/nirvana-go/option"\n)\n\nfunc main() {\n\tclient := nirvana.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\terr := client.NKS.Clusters.Pools.Availability.Update(\n\t\tcontext.TODO(),\n\t\t"cluster_id",\n\t\t"pool_id",\n\t\tnks.ClusterPoolAvailabilityUpdateParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n}\n',
      },
      http: {
        example:
          'curl https://api.nirvanalabs.io/v1/nks/clusters/$CLUSTER_ID/pools/$POOL_ID/availability \\\n    -X PATCH \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $NIRVANA_LABS_API_KEY" \\\n    -d \'{\n          "name": "my-node-pool",\n          "node_count": 5,\n          "tags": [\n            "production",\n            "ethereum"\n          ]\n        }\'',
      },
      typescript: {
        method: 'client.nks.clusters.pools.availability.update',
        example:
          "import NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs({\n  apiKey: process.env['NIRVANA_LABS_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.nks.clusters.pools.availability.update('pool_id', { cluster_id: 'cluster_id' });",
      },
    },
  },
  {
    name: 'get',
    endpoint: '/v1/nks/clusters/{cluster_id}/pools/{pool_id}/nodes/{node_id}',
    httpMethod: 'get',
    summary: 'Get NKS Node Details',
    description: 'Get details about an NKS node',
    stainlessPath: '(resource) nks.clusters.pools.nodes > (method) get',
    qualified: 'client.nks.clusters.pools.nodes.get',
    params: ['cluster_id: string;', 'pool_id: string;', 'node_id: string;'],
    response:
      "{ id: string; created_at: string; name: string; private_ip: string; status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'; updated_at: string; }",
    markdown:
      "## get\n\n`client.nks.clusters.pools.nodes.get(cluster_id: string, pool_id: string, node_id: string): { id: string; created_at: string; name: string; private_ip: string; status: resource_status; updated_at: string; }`\n\n**get** `/v1/nks/clusters/{cluster_id}/pools/{pool_id}/nodes/{node_id}`\n\nGet details about an NKS node\n\n### Parameters\n\n- `cluster_id: string`\n\n- `pool_id: string`\n\n- `node_id: string`\n\n### Returns\n\n- `{ id: string; created_at: string; name: string; private_ip: string; status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'; updated_at: string; }`\n  NKS node details.\n\n  - `id: string`\n  - `created_at: string`\n  - `name: string`\n  - `private_ip: string`\n  - `status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\nconst nksNode = await client.nks.clusters.pools.nodes.get('node_id', { cluster_id: 'cluster_id', pool_id: 'pool_id' });\n\nconsole.log(nksNode);\n```",
    perLanguage: {
      cli: {
        method: 'nodes get',
        example:
          "nirvana nks:clusters:pools:nodes get \\\n  --api-key 'My API Key' \\\n  --cluster-id cluster_id \\\n  --pool-id pool_id \\\n  --node-id node_id",
      },
      go: {
        method: 'client.NKS.Clusters.Pools.Nodes.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/nirvana-labs/nirvana-go"\n\t"github.com/nirvana-labs/nirvana-go/option"\n)\n\nfunc main() {\n\tclient := nirvana.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tnksNode, err := client.NKS.Clusters.Pools.Nodes.Get(\n\t\tcontext.TODO(),\n\t\t"cluster_id",\n\t\t"pool_id",\n\t\t"node_id",\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", nksNode.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.nirvanalabs.io/v1/nks/clusters/$CLUSTER_ID/pools/$POOL_ID/nodes/$NODE_ID \\\n    -H "Authorization: Bearer $NIRVANA_LABS_API_KEY"',
      },
      typescript: {
        method: 'client.nks.clusters.pools.nodes.get',
        example:
          "import NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs({\n  apiKey: process.env['NIRVANA_LABS_API_KEY'], // This is the default and can be omitted\n});\n\nconst nksNode = await client.nks.clusters.pools.nodes.get('node_id', {\n  cluster_id: 'cluster_id',\n  pool_id: 'pool_id',\n});\n\nconsole.log(nksNode.id);",
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/v1/nks/clusters/{cluster_id}/pools/{pool_id}/nodes/{node_id}',
    httpMethod: 'delete',
    summary: 'Delete NKS Node',
    description: 'Delete a single node from an NKS node pool',
    stainlessPath: '(resource) nks.clusters.pools.nodes > (method) delete',
    qualified: 'client.nks.clusters.pools.nodes.delete',
    params: ['cluster_id: string;', 'pool_id: string;', 'node_id: string;'],
    response:
      "{ id: string; created_at: string; kind: 'vm' | 'volume' | 'vpc' | 'firewall_rule' | 'nks_cluster' | 'nks_node_pool'; project_id: string; resource_id: string; status: 'pending' | 'running' | 'done' | 'failed' | 'unknown'; type: 'create' | 'update' | 'delete' | 'restart'; updated_at: string; }",
    markdown:
      "## delete\n\n`client.nks.clusters.pools.nodes.delete(cluster_id: string, pool_id: string, node_id: string): { id: string; created_at: string; kind: operation_kind; project_id: string; resource_id: string; status: operation_status; type: operation_type; updated_at: string; }`\n\n**delete** `/v1/nks/clusters/{cluster_id}/pools/{pool_id}/nodes/{node_id}`\n\nDelete a single node from an NKS node pool\n\n### Parameters\n\n- `cluster_id: string`\n\n- `pool_id: string`\n\n- `node_id: string`\n\n### Returns\n\n- `{ id: string; created_at: string; kind: 'vm' | 'volume' | 'vpc' | 'firewall_rule' | 'nks_cluster' | 'nks_node_pool'; project_id: string; resource_id: string; status: 'pending' | 'running' | 'done' | 'failed' | 'unknown'; type: 'create' | 'update' | 'delete' | 'restart'; updated_at: string; }`\n  Operation details.\n\n  - `id: string`\n  - `created_at: string`\n  - `kind: 'vm' | 'volume' | 'vpc' | 'firewall_rule' | 'nks_cluster' | 'nks_node_pool'`\n  - `project_id: string`\n  - `resource_id: string`\n  - `status: 'pending' | 'running' | 'done' | 'failed' | 'unknown'`\n  - `type: 'create' | 'update' | 'delete' | 'restart'`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\nconst operation = await client.nks.clusters.pools.nodes.delete('node_id', { cluster_id: 'cluster_id', pool_id: 'pool_id' });\n\nconsole.log(operation);\n```",
    perLanguage: {
      cli: {
        method: 'nodes delete',
        example:
          "nirvana nks:clusters:pools:nodes delete \\\n  --api-key 'My API Key' \\\n  --cluster-id cluster_id \\\n  --pool-id pool_id \\\n  --node-id node_id",
      },
      go: {
        method: 'client.NKS.Clusters.Pools.Nodes.Delete',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/nirvana-labs/nirvana-go"\n\t"github.com/nirvana-labs/nirvana-go/option"\n)\n\nfunc main() {\n\tclient := nirvana.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\toperation, err := client.NKS.Clusters.Pools.Nodes.Delete(\n\t\tcontext.TODO(),\n\t\t"cluster_id",\n\t\t"pool_id",\n\t\t"node_id",\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", operation.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.nirvanalabs.io/v1/nks/clusters/$CLUSTER_ID/pools/$POOL_ID/nodes/$NODE_ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $NIRVANA_LABS_API_KEY"',
      },
      typescript: {
        method: 'client.nks.clusters.pools.nodes.delete',
        example:
          "import NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs({\n  apiKey: process.env['NIRVANA_LABS_API_KEY'], // This is the default and can be omitted\n});\n\nconst operation = await client.nks.clusters.pools.nodes.delete('node_id', {\n  cluster_id: 'cluster_id',\n  pool_id: 'pool_id',\n});\n\nconsole.log(operation.id);",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/v1/nks/clusters/{cluster_id}/pools/{pool_id}/nodes',
    httpMethod: 'get',
    summary: 'List NKS Nodes',
    description: 'List all nodes in an NKS node pool',
    stainlessPath: '(resource) nks.clusters.pools.nodes > (method) list',
    qualified: 'client.nks.clusters.pools.nodes.list',
    params: ['cluster_id: string;', 'pool_id: string;', 'cursor?: string;', 'limit?: number;'],
    response:
      "{ id: string; created_at: string; name: string; private_ip: string; status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'; updated_at: string; }",
    markdown:
      "## list\n\n`client.nks.clusters.pools.nodes.list(cluster_id: string, pool_id: string, cursor?: string, limit?: number): { id: string; created_at: string; name: string; private_ip: string; status: resource_status; updated_at: string; }`\n\n**get** `/v1/nks/clusters/{cluster_id}/pools/{pool_id}/nodes`\n\nList all nodes in an NKS node pool\n\n### Parameters\n\n- `cluster_id: string`\n\n- `pool_id: string`\n\n- `cursor?: string`\n  Pagination cursor returned by a previous request\n\n- `limit?: number`\n  Maximum number of items to return\n\n### Returns\n\n- `{ id: string; created_at: string; name: string; private_ip: string; status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'; updated_at: string; }`\n  NKS node details.\n\n  - `id: string`\n  - `created_at: string`\n  - `name: string`\n  - `private_ip: string`\n  - `status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\n// Automatically fetches more pages as needed.\nfor await (const nksNode of client.nks.clusters.pools.nodes.list('pool_id', { cluster_id: 'cluster_id' })) {\n  console.log(nksNode);\n}\n```",
    perLanguage: {
      cli: {
        method: 'nodes list',
        example:
          "nirvana nks:clusters:pools:nodes list \\\n  --api-key 'My API Key' \\\n  --cluster-id cluster_id \\\n  --pool-id pool_id",
      },
      go: {
        method: 'client.NKS.Clusters.Pools.Nodes.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/nirvana-labs/nirvana-go"\n\t"github.com/nirvana-labs/nirvana-go/nks"\n\t"github.com/nirvana-labs/nirvana-go/option"\n)\n\nfunc main() {\n\tclient := nirvana.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpage, err := client.NKS.Clusters.Pools.Nodes.List(\n\t\tcontext.TODO(),\n\t\t"cluster_id",\n\t\t"pool_id",\n\t\tnks.ClusterPoolNodeListParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", page)\n}\n',
      },
      http: {
        example:
          'curl https://api.nirvanalabs.io/v1/nks/clusters/$CLUSTER_ID/pools/$POOL_ID/nodes \\\n    -H "Authorization: Bearer $NIRVANA_LABS_API_KEY"',
      },
      typescript: {
        method: 'client.nks.clusters.pools.nodes.list',
        example:
          "import NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs({\n  apiKey: process.env['NIRVANA_LABS_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const nksNode of client.nks.clusters.pools.nodes.list('pool_id', {\n  cluster_id: 'cluster_id',\n})) {\n  console.log(nksNode.id);\n}",
      },
    },
  },
  {
    name: 'get',
    endpoint: '/v1/nks/clusters/{cluster_id}/pools/{pool_id}/nodes/{node_id}/volumes/{volume_id}',
    httpMethod: 'get',
    summary: 'Get NKS Node Volume Details',
    description: 'Get details about a volume attached to an NKS node',
    stainlessPath: '(resource) nks.clusters.pools.nodes.volumes > (method) get',
    qualified: 'client.nks.clusters.pools.nodes.volumes.get',
    params: ['cluster_id: string;', 'pool_id: string;', 'node_id: string;', 'volume_id: string;'],
    response:
      "{ id: string; created_at: string; kind: 'boot' | 'data'; name: string; size: number; status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'; type: 'nvme' | 'abs'; updated_at: string; }",
    markdown:
      "## get\n\n`client.nks.clusters.pools.nodes.volumes.get(cluster_id: string, pool_id: string, node_id: string, volume_id: string): { id: string; created_at: string; kind: volume_kind; name: string; size: number; status: resource_status; type: volume_type; updated_at: string; }`\n\n**get** `/v1/nks/clusters/{cluster_id}/pools/{pool_id}/nodes/{node_id}/volumes/{volume_id}`\n\nGet details about a volume attached to an NKS node\n\n### Parameters\n\n- `cluster_id: string`\n\n- `pool_id: string`\n\n- `node_id: string`\n\n- `volume_id: string`\n\n### Returns\n\n- `{ id: string; created_at: string; kind: 'boot' | 'data'; name: string; size: number; status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'; type: 'nvme' | 'abs'; updated_at: string; }`\n  NKS node volume details.\n\n  - `id: string`\n  - `created_at: string`\n  - `kind: 'boot' | 'data'`\n  - `name: string`\n  - `size: number`\n  - `status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'`\n  - `type: 'nvme' | 'abs'`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\nconst nksNodeVolume = await client.nks.clusters.pools.nodes.volumes.get('volume_id', {\n  cluster_id: 'cluster_id',\n  pool_id: 'pool_id',\n  node_id: 'node_id',\n});\n\nconsole.log(nksNodeVolume);\n```",
    perLanguage: {
      cli: {
        method: 'volumes get',
        example:
          "nirvana nks:clusters:pools:nodes:volumes get \\\n  --api-key 'My API Key' \\\n  --cluster-id cluster_id \\\n  --pool-id pool_id \\\n  --node-id node_id \\\n  --volume-id volume_id",
      },
      go: {
        method: 'client.NKS.Clusters.Pools.Nodes.Volumes.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/nirvana-labs/nirvana-go"\n\t"github.com/nirvana-labs/nirvana-go/option"\n)\n\nfunc main() {\n\tclient := nirvana.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tnksNodeVolume, err := client.NKS.Clusters.Pools.Nodes.Volumes.Get(\n\t\tcontext.TODO(),\n\t\t"cluster_id",\n\t\t"pool_id",\n\t\t"node_id",\n\t\t"volume_id",\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", nksNodeVolume.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.nirvanalabs.io/v1/nks/clusters/$CLUSTER_ID/pools/$POOL_ID/nodes/$NODE_ID/volumes/$VOLUME_ID \\\n    -H "Authorization: Bearer $NIRVANA_LABS_API_KEY"',
      },
      typescript: {
        method: 'client.nks.clusters.pools.nodes.volumes.get',
        example:
          "import NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs({\n  apiKey: process.env['NIRVANA_LABS_API_KEY'], // This is the default and can be omitted\n});\n\nconst nksNodeVolume = await client.nks.clusters.pools.nodes.volumes.get('volume_id', {\n  cluster_id: 'cluster_id',\n  pool_id: 'pool_id',\n  node_id: 'node_id',\n});\n\nconsole.log(nksNodeVolume.id);",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/v1/nks/clusters/{cluster_id}/pools/{pool_id}/nodes/{node_id}/volumes',
    httpMethod: 'get',
    summary: 'List NKS Node Volumes',
    description: 'List all volumes attached to an NKS node',
    stainlessPath: '(resource) nks.clusters.pools.nodes.volumes > (method) list',
    qualified: 'client.nks.clusters.pools.nodes.volumes.list',
    params: [
      'cluster_id: string;',
      'pool_id: string;',
      'node_id: string;',
      'cursor?: string;',
      'limit?: number;',
    ],
    response:
      "{ id: string; created_at: string; kind: 'boot' | 'data'; name: string; size: number; status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'; type: 'nvme' | 'abs'; updated_at: string; }",
    markdown:
      "## list\n\n`client.nks.clusters.pools.nodes.volumes.list(cluster_id: string, pool_id: string, node_id: string, cursor?: string, limit?: number): { id: string; created_at: string; kind: volume_kind; name: string; size: number; status: resource_status; type: volume_type; updated_at: string; }`\n\n**get** `/v1/nks/clusters/{cluster_id}/pools/{pool_id}/nodes/{node_id}/volumes`\n\nList all volumes attached to an NKS node\n\n### Parameters\n\n- `cluster_id: string`\n\n- `pool_id: string`\n\n- `node_id: string`\n\n- `cursor?: string`\n  Pagination cursor returned by a previous request\n\n- `limit?: number`\n  Maximum number of items to return\n\n### Returns\n\n- `{ id: string; created_at: string; kind: 'boot' | 'data'; name: string; size: number; status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'; type: 'nvme' | 'abs'; updated_at: string; }`\n  NKS node volume details.\n\n  - `id: string`\n  - `created_at: string`\n  - `kind: 'boot' | 'data'`\n  - `name: string`\n  - `size: number`\n  - `status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'`\n  - `type: 'nvme' | 'abs'`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\n// Automatically fetches more pages as needed.\nfor await (const nksNodeVolume of client.nks.clusters.pools.nodes.volumes.list('node_id', { cluster_id: 'cluster_id', pool_id: 'pool_id' })) {\n  console.log(nksNodeVolume);\n}\n```",
    perLanguage: {
      cli: {
        method: 'volumes list',
        example:
          "nirvana nks:clusters:pools:nodes:volumes list \\\n  --api-key 'My API Key' \\\n  --cluster-id cluster_id \\\n  --pool-id pool_id \\\n  --node-id node_id",
      },
      go: {
        method: 'client.NKS.Clusters.Pools.Nodes.Volumes.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/nirvana-labs/nirvana-go"\n\t"github.com/nirvana-labs/nirvana-go/nks"\n\t"github.com/nirvana-labs/nirvana-go/option"\n)\n\nfunc main() {\n\tclient := nirvana.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpage, err := client.NKS.Clusters.Pools.Nodes.Volumes.List(\n\t\tcontext.TODO(),\n\t\t"cluster_id",\n\t\t"pool_id",\n\t\t"node_id",\n\t\tnks.ClusterPoolNodeVolumeListParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", page)\n}\n',
      },
      http: {
        example:
          'curl https://api.nirvanalabs.io/v1/nks/clusters/$CLUSTER_ID/pools/$POOL_ID/nodes/$NODE_ID/volumes \\\n    -H "Authorization: Bearer $NIRVANA_LABS_API_KEY"',
      },
      typescript: {
        method: 'client.nks.clusters.pools.nodes.volumes.list',
        example:
          "import NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs({\n  apiKey: process.env['NIRVANA_LABS_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const nksNodeVolume of client.nks.clusters.pools.nodes.volumes.list('node_id', {\n  cluster_id: 'cluster_id',\n  pool_id: 'pool_id',\n})) {\n  console.log(nksNodeVolume.id);\n}",
      },
    },
  },
];

const EMBEDDED_READMES: { language: string; content: string }[] = [
  {
    language: 'go',
    content:
      '# Nirvana Labs Go API Library\n\n<a href="https://pkg.go.dev/github.com/nirvana-labs/nirvana-go"><img src="https://pkg.go.dev/badge/github.com/nirvana-labs/nirvana-go.svg" alt="Go Reference"></a>\n\nThe Nirvana Labs Go library provides convenient access to the [Nirvana Labs REST API](https://docs.nirvanalabs.io)\nfrom applications written in Go.\n\n\n\n## MCP Server\n\nUse the Nirvana Labs MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=%40nirvana-labs%2Fnirvana-mcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsIkBuaXJ2YW5hLWxhYnMvbmlydmFuYS1tY3AiXSwiZW52Ijp7Ik5JUlZBTkFfTEFCU19BUElfS0VZIjoiTXkgQVBJIEtleSJ9fQ)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22%40nirvana-labs%2Fnirvana-mcp%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22%40nirvana-labs%2Fnirvana-mcp%22%5D%2C%22env%22%3A%7B%22NIRVANA_LABS_API_KEY%22%3A%22My%20API%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Installation\n\n<!-- x-release-please-start-version -->\n\n```go\nimport (\n\t"github.com/nirvana-labs/nirvana-go" // imported as SDK_PackageName\n)\n```\n\n<!-- x-release-please-end -->\n\nOr to pin the version:\n\n<!-- x-release-please-start-version -->\n\n```sh\ngo get -u \'github.com/nirvana-labs/nirvana-go@v0.0.1\'\n```\n\n<!-- x-release-please-end -->\n\n## Requirements\n\nThis library requires Go 1.22+.\n\n## Usage\n\nThe full API of this library can be found in [api.md](api.md).\n\n```go\npackage main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/nirvana-labs/nirvana-go"\n\t"github.com/nirvana-labs/nirvana-go/compute"\n\t"github.com/nirvana-labs/nirvana-go/option"\n\t"github.com/nirvana-labs/nirvana-go/shared"\n)\n\nfunc main() {\n\tclient := nirvana.NewClient(\n\t\toption.WithAPIKey("My API Key"), // defaults to os.LookupEnv("NIRVANA_LABS_API_KEY")\n\t)\n\toperation, err := client.Compute.VMs.New(context.TODO(), compute.VMNewParams{\n\t\tBootVolume: compute.VMNewParamsBootVolume{\n\t\t\tSize: 100,\n\t\t\tType: compute.VolumeTypeNvme,\n\t\t},\n\t\tCPUConfig: compute.CPUConfigRequestParam{\n\t\t\tVcpu: 2,\n\t\t},\n\t\tMemoryConfig: compute.MemoryConfigRequestParam{\n\t\t\tSize: 2,\n\t\t},\n\t\tName:            "my-vm",\n\t\tOSImageName:     "ubuntu-noble-2025-10-01",\n\t\tProjectID:       "123e4567-e89b-12d3-a456-426614174000",\n\t\tPublicIPEnabled: true,\n\t\tRegion:          shared.RegionNameUsSva1,\n\t\tSSHKey: compute.SSHKeyRequestParam{\n\t\t\tPublicKey: "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIDBIASkmwNiLcdlW6927Zjt1Hf7Kw/PpEZ4Zm+wU9wn2",\n\t\t},\n\t\tSubnetID: "123e4567-e89b-12d3-a456-426614174000",\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", operation.ID)\n}\n\n```\n\n### Request fields\n\nAll request parameters are wrapped in a generic `Field` type,\nwhich we use to distinguish zero values from null or omitted fields.\n\nThis prevents accidentally sending a zero value if you forget a required parameter,\nand enables explicitly sending `null`, `false`, `\'\'`, or `0` on optional parameters.\nAny field not specified is not sent.\n\nTo construct fields with values, use the helpers `String()`, `Int()`, `Float()`, or most commonly, the generic `F[T]()`.\nTo send a null, use `Null[T]()`, and to send a nonconforming value, use `Raw[T](any)`. For example:\n\n```go\nparams := FooParams{\n\tName: SDK_PackageName.F("hello"),\n\n\t// Explicitly send `"description": null`\n\tDescription: SDK_PackageName.Null[string](),\n\n\tPoint: SDK_PackageName.F(SDK_PackageName.Point{\n\t\tX: SDK_PackageName.Int(0),\n\t\tY: SDK_PackageName.Int(1),\n\n\t\t// In cases where the API specifies a given type,\n\t\t// but you want to send something else, use `Raw`:\n\t\tZ: SDK_PackageName.Raw[int64](0.01), // sends a float\n\t}),\n}\n```\n\n### Response objects\n\nAll fields in response structs are value types (not pointers or wrappers).\n\nIf a given field is `null`, not present, or invalid, the corresponding field\nwill simply be its zero value.\n\nAll response structs also include a special `JSON` field, containing more detailed\ninformation about each property, which you can use like so:\n\n```go\nif res.Name == "" {\n\t// true if `"name"` is either not present or explicitly null\n\tres.JSON.Name.IsNull()\n\n\t// true if the `"name"` key was not present in the response JSON at all\n\tres.JSON.Name.IsMissing()\n\n\t// When the API returns data that cannot be coerced to the expected type:\n\tif res.JSON.Name.IsInvalid() {\n\t\traw := res.JSON.Name.Raw()\n\n\t\tlegacyName := struct{\n\t\t\tFirst string `json:"first"`\n\t\t\tLast  string `json:"last"`\n\t\t}{}\n\t\tjson.Unmarshal([]byte(raw), &legacyName)\n\t\tname = legacyName.First + " " + legacyName.Last\n\t}\n}\n```\n\nThese `.JSON` structs also include an `Extras` map containing\nany properties in the json response that were not specified\nin the struct. This can be useful for API features not yet\npresent in the SDK.\n\n```go\nbody := res.JSON.ExtraFields["my_unexpected_field"].Raw()\n```\n\n### RequestOptions\n\nThis library uses the functional options pattern. Functions defined in the\n`SDK_PackageOptionName` package return a `RequestOption`, which is a closure that mutates a\n`RequestConfig`. These options can be supplied to the client or at individual\nrequests. For example:\n\n```go\nclient := SDK_PackageName.SDK_ClientInitializerName(\n\t// Adds a header to every request made by the client\n\tSDK_PackageOptionName.WithHeader("X-Some-Header", "custom_header_info"),\n)\n\nclient.Compute.VMs.New(context.TODO(), ...,\n\t// Override the header\n\tSDK_PackageOptionName.WithHeader("X-Some-Header", "some_other_custom_header_info"),\n\t// Add an undocumented field to the request body, using sjson syntax\n\tSDK_PackageOptionName.WithJSONSet("some.json.path", map[string]string{"my": "object"}),\n)\n```\n\nSee the [full list of request options](https://pkg.go.dev/github.com/nirvana-labs/nirvana-go/SDK_PackageOptionName).\n\n### Pagination\n\nThis library provides some conveniences for working with paginated list endpoints.\n\nYou can use `.ListAutoPaging()` methods to iterate through items across all pages:\n\n```go\niter := client.Compute.VMs.ListAutoPaging(context.TODO(), compute.VMListParams{\n\tProjectID: "123e4567-e89b-12d3-a456-426614174000",\n\tLimit:     nirvana.Int(10),\n})\n// Automatically fetches more pages as needed.\nfor iter.Next() {\n\tvm := iter.Current()\n\tfmt.Printf("%+v\\n", vm)\n}\nif err := iter.Err(); err != nil {\n\tpanic(err.Error())\n}\n```\n\nOr you can use simple `.List()` methods to fetch a single page and receive a standard response object\nwith additional helper methods like `.GetNextPage()`, e.g.:\n\n```go\npage, err := client.Compute.VMs.List(context.TODO(), compute.VMListParams{\n\tProjectID: "123e4567-e89b-12d3-a456-426614174000",\n\tLimit:     nirvana.Int(10),\n})\nfor page != nil {\n\tfor _, vm := range page.Items {\n\t\tfmt.Printf("%+v\\n", vm)\n\t}\n\tpage, err = page.GetNextPage()\n}\nif err != nil {\n\tpanic(err.Error())\n}\n```\n\n### Errors\n\nWhen the API returns a non-success status code, we return an error with type\n`*SDK_PackageName.Error`. This contains the `StatusCode`, `*http.Request`, and\n`*http.Response` values of the request, as well as the JSON of the error body\n(much like other response objects in the SDK).\n\nTo handle errors, we recommend that you use the `errors.As` pattern:\n\n```go\n_, err := client.Compute.VMs.New(context.TODO(), compute.VMNewParams{\n\tBootVolume: compute.VMNewParamsBootVolume{\n\t\tSize: 100,\n\t\tType: compute.VolumeTypeNvme,\n\t},\n\tCPUConfig: compute.CPUConfigRequestParam{\n\t\tVcpu: 2,\n\t},\n\tMemoryConfig: compute.MemoryConfigRequestParam{\n\t\tSize: 2,\n\t},\n\tName:            "my-vm",\n\tOSImageName:     "ubuntu-noble-2025-10-01",\n\tProjectID:       "123e4567-e89b-12d3-a456-426614174000",\n\tPublicIPEnabled: true,\n\tRegion:          shared.RegionNameUsSva1,\n\tSSHKey: compute.SSHKeyRequestParam{\n\t\tPublicKey: "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIDBIASkmwNiLcdlW6927Zjt1Hf7Kw/PpEZ4Zm+wU9wn2",\n\t},\n\tSubnetID: "123e4567-e89b-12d3-a456-426614174000",\n})\nif err != nil {\n\tvar apierr *nirvana.Error\n\tif errors.As(err, &apierr) {\n\t\tprintln(string(apierr.DumpRequest(true)))  // Prints the serialized HTTP request\n\t\tprintln(string(apierr.DumpResponse(true))) // Prints the serialized HTTP response\n\t}\n\tpanic(err.Error()) // GET "/v1/compute/vms": 400 Bad Request { ... }\n}\n```\n\nWhen other errors occur, they are returned unwrapped; for example,\nif HTTP transport fails, you might receive `*url.Error` wrapping `*net.OpError`.\n\n### Timeouts\n\nRequests do not time out by default; use context to configure a timeout for a request lifecycle.\n\nNote that if a request is [retried](#retries), the context timeout does not start over.\nTo set a per-retry timeout, use `SDK_PackageOptionName.WithRequestTimeout()`.\n\n```go\n// This sets the timeout for the request, including all the retries.\nctx, cancel := context.WithTimeout(context.Background(), 5*time.Minute)\ndefer cancel()\nclient.Compute.VMs.New(\n\tctx,\n\tcompute.VMNewParams{\n\t\tBootVolume: compute.VMNewParamsBootVolume{\n\t\t\tSize: 100,\n\t\t\tType: compute.VolumeTypeNvme,\n\t\t},\n\t\tCPUConfig: compute.CPUConfigRequestParam{\n\t\t\tVcpu: 2,\n\t\t},\n\t\tMemoryConfig: compute.MemoryConfigRequestParam{\n\t\t\tSize: 2,\n\t\t},\n\t\tName:            "my-vm",\n\t\tOSImageName:     "ubuntu-noble-2025-10-01",\n\t\tProjectID:       "123e4567-e89b-12d3-a456-426614174000",\n\t\tPublicIPEnabled: true,\n\t\tRegion:          shared.RegionNameUsSva1,\n\t\tSSHKey: compute.SSHKeyRequestParam{\n\t\t\tPublicKey: "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIDBIASkmwNiLcdlW6927Zjt1Hf7Kw/PpEZ4Zm+wU9wn2",\n\t\t},\n\t\tSubnetID: "123e4567-e89b-12d3-a456-426614174000",\n\t},\n\t// This sets the per-retry timeout\n\toption.WithRequestTimeout(20*time.Second),\n)\n```\n\n### File uploads\n\nRequest parameters that correspond to file uploads in multipart requests are typed as\n`param.Field[io.Reader]`. The contents of the `io.Reader` will by default be sent as a multipart form\npart with the file name of "anonymous_file" and content-type of "application/octet-stream".\n\nThe file name and content-type can be customized by implementing `Name() string` or `ContentType()\nstring` on the run-time type of `io.Reader`. Note that `os.File` implements `Name() string`, so a\nfile returned by `os.Open` will be sent with the file name on disk.\n\nWe also provide a helper `SDK_PackageName.FileParam(reader io.Reader, filename string, contentType string)`\nwhich can be used to wrap any `io.Reader` with the appropriate file name and content type.\n\n\n\n### Retries\n\nCertain errors will be automatically retried 2 times by default, with a short exponential backoff.\nWe retry by default all connection errors, 408 Request Timeout, 409 Conflict, 429 Rate Limit,\nand >=500 Internal errors.\n\nYou can use the `WithMaxRetries` option to configure or disable this:\n\n```go\n// Configure the default for all requests:\nclient := nirvana.NewClient(\n\toption.WithMaxRetries(0), // default is 2\n)\n\n// Override per-request:\nclient.Compute.VMs.New(\n\tcontext.TODO(),\n\tcompute.VMNewParams{\n\t\tBootVolume: compute.VMNewParamsBootVolume{\n\t\t\tSize: 100,\n\t\t\tType: compute.VolumeTypeNvme,\n\t\t},\n\t\tCPUConfig: compute.CPUConfigRequestParam{\n\t\t\tVcpu: 2,\n\t\t},\n\t\tMemoryConfig: compute.MemoryConfigRequestParam{\n\t\t\tSize: 2,\n\t\t},\n\t\tName:            "my-vm",\n\t\tOSImageName:     "ubuntu-noble-2025-10-01",\n\t\tProjectID:       "123e4567-e89b-12d3-a456-426614174000",\n\t\tPublicIPEnabled: true,\n\t\tRegion:          shared.RegionNameUsSva1,\n\t\tSSHKey: compute.SSHKeyRequestParam{\n\t\t\tPublicKey: "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIDBIASkmwNiLcdlW6927Zjt1Hf7Kw/PpEZ4Zm+wU9wn2",\n\t\t},\n\t\tSubnetID: "123e4567-e89b-12d3-a456-426614174000",\n\t},\n\toption.WithMaxRetries(5),\n)\n```\n\n\n### Accessing raw response data (e.g. response headers)\n\nYou can access the raw HTTP response data by using the `option.WithResponseInto()` request option. This is useful when\nyou need to examine response headers, status codes, or other details.\n\n```go\n// Create a variable to store the HTTP response\nvar response *http.Response\noperation, err := client.Compute.VMs.New(\n\tcontext.TODO(),\n\tcompute.VMNewParams{\n\t\tBootVolume: compute.VMNewParamsBootVolume{\n\t\t\tSize: 100,\n\t\t\tType: compute.VolumeTypeNvme,\n\t\t},\n\t\tCPUConfig: compute.CPUConfigRequestParam{\n\t\t\tVcpu: 2,\n\t\t},\n\t\tMemoryConfig: compute.MemoryConfigRequestParam{\n\t\t\tSize: 2,\n\t\t},\n\t\tName:            "my-vm",\n\t\tOSImageName:     "ubuntu-noble-2025-10-01",\n\t\tProjectID:       "123e4567-e89b-12d3-a456-426614174000",\n\t\tPublicIPEnabled: true,\n\t\tRegion:          shared.RegionNameUsSva1,\n\t\tSSHKey: compute.SSHKeyRequestParam{\n\t\t\tPublicKey: "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIDBIASkmwNiLcdlW6927Zjt1Hf7Kw/PpEZ4Zm+wU9wn2",\n\t\t},\n\t\tSubnetID: "123e4567-e89b-12d3-a456-426614174000",\n\t},\n\toption.WithResponseInto(&response),\n)\nif err != nil {\n\t// handle error\n}\nfmt.Printf("%+v\\n", operation)\n\nfmt.Printf("Status Code: %d\\n", response.StatusCode)\nfmt.Printf("Headers: %+#v\\n", response.Header)\n```\n\n### Making custom/undocumented requests\n\nThis library is typed for convenient access to the documented API. If you need to access undocumented\nendpoints, params, or response properties, the library can still be used.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints, you can use `client.Get`, `client.Post`, and other HTTP verbs.\n`RequestOptions` on the client, such as retries, will be respected when making these requests.\n\n```go\nvar (\n    // params can be an io.Reader, a []byte, an encoding/json serializable object,\n    // or a "…Params" struct defined in this library.\n    params map[string]interface{}\n\n    // result can be an []byte, *http.Response, a encoding/json deserializable object,\n    // or a model defined in this library.\n    result *http.Response\n)\nerr := client.Post(context.Background(), "/unspecified", params, &result)\nif err != nil {\n    …\n}\n```\n\n#### Undocumented request params\n\nTo make requests using undocumented parameters, you may use either the `SDK_PackageOptionName.WithQuerySet()`\nor the `SDK_PackageOptionName.WithJSONSet()` methods.\n\n```go\nparams := FooNewParams{\n    ID:   SDK_PackageName.F("id_xxxx"),\n    Data: SDK_PackageName.F(FooNewParamsData{\n        FirstName: SDK_PackageName.F("John"),\n    }),\n}\nclient.Foo.New(context.Background(), params, SDK_PackageOptionName.WithJSONSet("data.last_name", "Doe"))\n```\n\n#### Undocumented response properties\n\nTo access undocumented response properties, you may either access the raw JSON of the response as a string\nwith `result.JSON.RawJSON()`, or get the raw JSON of a particular field on the result with\n`result.JSON.Foo.Raw()`.\n\nAny fields that are not present on the response struct will be saved and can be accessed by `result.JSON.ExtraFields()` which returns the extra fields as a `map[string]Field`.\n\n### Middleware\n\nWe provide `SDK_PackageOptionName.WithMiddleware` which applies the given\nmiddleware to requests.\n\n```go\nfunc Logger(req *http.Request, next SDK_PackageOptionName.MiddlewareNext) (res *http.Response, err error) {\n\t// Before the request\n\tstart := time.Now()\n\tLogReq(req)\n\n\t// Forward the request to the next handler\n\tres, err = next(req)\n\n\t// Handle stuff after the request\n\tend := time.Now()\n\tLogRes(res, err, start - end)\n\n    return res, err\n}\n\nclient := SDK_PackageName.SDK_ClientInitializerName(\n\tSDK_PackageOptionName.WithMiddleware(Logger),\n)\n```\n\nWhen multiple middlewares are provided as variadic arguments, the middlewares\nare applied left to right. If `SDK_PackageOptionName.WithMiddleware` is given\nmultiple times, for example first in the client then the method, the\nmiddleware in the client will run first and the middleware given in the method\nwill run next.\n\nYou may also replace the default `http.Client` with\n`SDK_PackageOptionName.WithHTTPClient(client)`. Only one http client is\naccepted (this overwrites any previous client) and receives requests after any\nmiddleware has been applied.\n\n## Semantic versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n2. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/nirvana-labs/nirvana-go/issues) with questions, bugs, or suggestions.\n\n## Contributing\n\nSee [the contributing documentation](./CONTRIBUTING.md).\n',
  },
  {
    language: 'terraform',
    content:
      '# Nirvana Labs Terraform Provider\n\nThe [Nirvana Labs Terraform provider](https://registry.terraform.io/providers/nirvana-labs/nirvana/latest/docs) provides convenient access to\nthe [Nirvana Labs REST API](https://docs.nirvanalabs.io) from Terraform.\n\n\n\n## Requirements\n\nThis provider requires Terraform CLI 1.0 or later. You can [install it for your system](https://developer.hashicorp.com/terraform/install)\non Hashicorp\'s website.\n\n## Usage\n\nAdd the following to your `main.tf` file:\n\n<!-- x-release-please-start-version -->\n\n```hcl\n# Declare the provider and version\nterraform {\n  required_providers {\n    SDK_ProviderTypeName = {\n      source  = "nirvana-labs/nirvana"\n      version = "~> 0.0.1"\n    }\n  }\n}\n\n# Initialize the provider\nprovider "nirvana" {\n  api_key = "My API Key" # or set NIRVANA_LABS_API_KEY env variable\n}\n\n# Configure a resource\nresource "nirvana_compute_vm" "example_compute_vm" {\n  boot_volume = {\n    size = 100\n    type = "nvme"\n    tags = ["production", "ethereum"]\n  }\n  cpu_config = {\n    vcpu = 2\n  }\n  memory_config = {\n    size = 2\n  }\n  name = "my-vm"\n  os_image_name = "ubuntu-noble-2025-10-01"\n  project_id = "123e4567-e89b-12d3-a456-426614174000"\n  public_ip_enabled = true\n  region = "us-sva-1"\n  ssh_key = {\n    public_key = "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIDBIASkmwNiLcdlW6927Zjt1Hf7Kw/PpEZ4Zm+wU9wn2"\n  }\n  subnet_id = "123e4567-e89b-12d3-a456-426614174000"\n  data_volumes = [{\n    name = "my-data-volume"\n    size = 100\n    type = "abs"\n    tags = ["production", "ethereum"]\n  }]\n  tags = ["production", "ethereum"]\n}\n```\n\n<!-- x-release-please-end -->\n\nInitialize your project by running `terraform init` in the directory.\n\nAdditional examples can be found in the [./examples](./examples) folder within this repository, and you can\nrefer to the full documentation on [the Terraform Registry](https://registry.terraform.io/providers/nirvana-labs/nirvana/latest/docs).\n\n### Provider Options\nWhen you initialize the provider, the following options are supported. It is recommended to use environment variables for sensitive values like access tokens.\nIf an environment variable is provided, then the option does not need to be set in the terraform source.\n\n| Property | Environment variable   | Required | Default value |\n| -------- | ---------------------- | -------- | ------------- |\n| api_key  | `NIRVANA_LABS_API_KEY` | true     | —             |\n\n\n## Semantic versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n2. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/nirvana-labs/terraform-provider-nirvana/issues) with questions, bugs, or suggestions.\n\n## Contributing\n\nSee [the contributing documentation](./CONTRIBUTING.md).\n',
  },
  {
    language: 'typescript',
    content:
      "# Nirvana Labs TypeScript API Library\n\n[![NPM version](https://img.shields.io/npm/v/@nirvana-labs/nirvana.svg?label=npm%20(stable))](https://npmjs.org/package/@nirvana-labs/nirvana) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/@nirvana-labs/nirvana)\n\nThis library provides convenient access to the Nirvana Labs REST API from server-side TypeScript or JavaScript.\n\n\n\nThe REST API documentation can be found on [docs.nirvanalabs.io](https://docs.nirvanalabs.io). The full API of this library can be found in [api.md](api.md).\n\n\n\n## MCP Server\n\nUse the Nirvana Labs MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=%40nirvana-labs%2Fnirvana-mcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsIkBuaXJ2YW5hLWxhYnMvbmlydmFuYS1tY3AiXSwiZW52Ijp7Ik5JUlZBTkFfTEFCU19BUElfS0VZIjoiTXkgQVBJIEtleSJ9fQ)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22%40nirvana-labs%2Fnirvana-mcp%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22%40nirvana-labs%2Fnirvana-mcp%22%5D%2C%22env%22%3A%7B%22NIRVANA_LABS_API_KEY%22%3A%22My%20API%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Installation\n\n```sh\nnpm install @nirvana-labs/nirvana\n```\n\n\n\n## Usage\n\nThe full API of this library can be found in [api.md](api.md).\n\n<!-- prettier-ignore -->\n```js\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs({\n  apiKey: process.env['NIRVANA_LABS_API_KEY'], // This is the default and can be omitted\n});\n\nconst operation = await client.compute.vms.create({\n  boot_volume: { size: 100, type: 'nvme' },\n  cpu_config: { vcpu: 2 },\n  memory_config: { size: 2 },\n  name: 'my-vm',\n  os_image_name: 'ubuntu-noble-2025-10-01',\n  project_id: '123e4567-e89b-12d3-a456-426614174000',\n  public_ip_enabled: true,\n  region: 'us-sva-1',\n  ssh_key: {\n    public_key: 'ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIDBIASkmwNiLcdlW6927Zjt1Hf7Kw/PpEZ4Zm+wU9wn2',\n  },\n  subnet_id: '123e4567-e89b-12d3-a456-426614174000',\n});\n\nconsole.log(operation.id);\n```\n\n\n\n### Request & Response types\n\nThis library includes TypeScript definitions for all request params and response fields. You may import and use them like so:\n\n<!-- prettier-ignore -->\n```ts\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs({\n  apiKey: process.env['NIRVANA_LABS_API_KEY'], // This is the default and can be omitted\n});\n\nconst params: NirvanaLabs.Compute.VMCreateParams = {\n  boot_volume: { size: 100, type: 'nvme' },\n  cpu_config: { vcpu: 2 },\n  memory_config: { size: 2 },\n  name: 'my-vm',\n  os_image_name: 'ubuntu-noble-2025-10-01',\n  project_id: '123e4567-e89b-12d3-a456-426614174000',\n  public_ip_enabled: true,\n  region: 'us-sva-1',\n  ssh_key: {\n    public_key: 'ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIDBIASkmwNiLcdlW6927Zjt1Hf7Kw/PpEZ4Zm+wU9wn2',\n  },\n  subnet_id: '123e4567-e89b-12d3-a456-426614174000',\n};\nconst operation: NirvanaLabs.Operation = await client.compute.vms.create(params);\n```\n\nDocumentation for each method, request param, and response field are available in docstrings and will appear on hover in most modern editors.\n\n\n\n\n\n## Handling errors\n\nWhen the library is unable to connect to the API,\nor if the API returns a non-success status code (i.e., 4xx or 5xx response),\na subclass of `APIError` will be thrown:\n\n<!-- prettier-ignore -->\n```ts\nconst operation = await client.compute.vms\n  .create({\n    boot_volume: { size: 100, type: 'nvme' },\n    cpu_config: { vcpu: 2 },\n    memory_config: { size: 2 },\n    name: 'my-vm',\n    os_image_name: 'ubuntu-noble-2025-10-01',\n    project_id: '123e4567-e89b-12d3-a456-426614174000',\n    public_ip_enabled: true,\n    region: 'us-sva-1',\n    ssh_key: {\n      public_key:\n        'ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIDBIASkmwNiLcdlW6927Zjt1Hf7Kw/PpEZ4Zm+wU9wn2',\n    },\n    subnet_id: '123e4567-e89b-12d3-a456-426614174000',\n  })\n  .catch(async (err) => {\n    if (err instanceof NirvanaLabs.APIError) {\n      console.log(err.status); // 400\n      console.log(err.name); // BadRequestError\n      console.log(err.headers); // {server: 'nginx', ...}\n    } else {\n      throw err;\n    }\n  });\n```\n\nError codes are as follows:\n\n| Status Code | Error Type                 |\n| ----------- | -------------------------- |\n| 400         | `BadRequestError`          |\n| 401         | `AuthenticationError`      |\n| 403         | `PermissionDeniedError`    |\n| 404         | `NotFoundError`            |\n| 422         | `UnprocessableEntityError` |\n| 429         | `RateLimitError`           |\n| >=500       | `InternalServerError`      |\n| N/A         | `APIConnectionError`       |\n\n### Retries\n\nCertain errors will be automatically retried 2 times by default, with a short exponential backoff.\nConnection errors (for example, due to a network connectivity problem), 408 Request Timeout, 409 Conflict,\n429 Rate Limit, and >=500 Internal errors will all be retried by default.\n\nYou can use the `maxRetries` option to configure or disable this:\n\n<!-- prettier-ignore -->\n```js\n// Configure the default for all requests:\nconst client = new NirvanaLabs({\n  maxRetries: 0, // default is 2\n});\n\n// Or, configure per-request:\nawait client.compute.vms.create({\n  boot_volume: { size: 100, type: 'nvme' },\n  cpu_config: { vcpu: 2 },\n  memory_config: { size: 2 },\n  name: 'my-vm',\n  os_image_name: 'ubuntu-noble-2025-10-01',\n  project_id: '123e4567-e89b-12d3-a456-426614174000',\n  public_ip_enabled: true,\n  region: 'us-sva-1',\n  ssh_key: { public_key: 'ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIDBIASkmwNiLcdlW6927Zjt1Hf7Kw/PpEZ4Zm+wU9wn2' },\n  subnet_id: '123e4567-e89b-12d3-a456-426614174000',\n}, {\n  maxRetries: 5,\n});\n```\n\n### Timeouts\n\nRequests time out after 1 minute by default. You can configure this with a `timeout` option:\n\n<!-- prettier-ignore -->\n```ts\n// Configure the default for all requests:\nconst client = new NirvanaLabs({\n  timeout: 20 * 1000, // 20 seconds (default is 1 minute)\n});\n\n// Override per-request:\nawait client.compute.vms.create({\n  boot_volume: { size: 100, type: 'nvme' },\n  cpu_config: { vcpu: 2 },\n  memory_config: { size: 2 },\n  name: 'my-vm',\n  os_image_name: 'ubuntu-noble-2025-10-01',\n  project_id: '123e4567-e89b-12d3-a456-426614174000',\n  public_ip_enabled: true,\n  region: 'us-sva-1',\n  ssh_key: { public_key: 'ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIDBIASkmwNiLcdlW6927Zjt1Hf7Kw/PpEZ4Zm+wU9wn2' },\n  subnet_id: '123e4567-e89b-12d3-a456-426614174000',\n}, {\n  timeout: 5 * 1000,\n});\n```\n\nOn timeout, an `APIConnectionTimeoutError` is thrown.\n\nNote that requests which time out will be [retried twice by default](#retries).\n\n## Auto-pagination\n\nList methods in the NirvanaLabs API are paginated.\nYou can use the `for await … of` syntax to iterate through items across all pages:\n\n```ts\nasync function fetchAllVMs(params) {\n  const allVMs = [];\n  // Automatically fetches more pages as needed.\n  for await (const vm of client.compute.vms.list({\n    project_id: '123e4567-e89b-12d3-a456-426614174000',\n    limit: 10,\n  })) {\n    allVMs.push(vm);\n  }\n  return allVMs;\n}\n```\n\nAlternatively, you can request a single page at a time:\n\n```ts\nlet page = await client.compute.vms.list({\n  project_id: '123e4567-e89b-12d3-a456-426614174000',\n  limit: 10,\n});\nfor (const vm of page.items) {\n  console.log(vm);\n}\n\n// Convenience methods are provided for manually paginating:\nwhile (page.hasNextPage()) {\n  page = await page.getNextPage();\n  // ...\n}\n```\n\n\n\n## Advanced Usage\n\n### Accessing raw Response data (e.g., headers)\n\nThe \"raw\" `Response` returned by `fetch()` can be accessed through the `.asResponse()` method on the `APIPromise` type that all methods return.\nThis method returns as soon as the headers for a successful response are received and does not consume the response body, so you are free to write custom parsing or streaming logic.\n\nYou can also use the `.withResponse()` method to get the raw `Response` along with the parsed data.\nUnlike `.asResponse()` this method consumes the body, returning once it is parsed.\n\n<!-- prettier-ignore -->\n```ts\nconst client = new NirvanaLabs();\n\nconst response = await client.compute.vms\n  .create({\n    boot_volume: { size: 100, type: 'nvme' },\n    cpu_config: { vcpu: 2 },\n    memory_config: { size: 2 },\n    name: 'my-vm',\n    os_image_name: 'ubuntu-noble-2025-10-01',\n    project_id: '123e4567-e89b-12d3-a456-426614174000',\n    public_ip_enabled: true,\n    region: 'us-sva-1',\n    ssh_key: {\n      public_key:\n        'ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIDBIASkmwNiLcdlW6927Zjt1Hf7Kw/PpEZ4Zm+wU9wn2',\n    },\n    subnet_id: '123e4567-e89b-12d3-a456-426614174000',\n  })\n  .asResponse();\nconsole.log(response.headers.get('X-My-Header'));\nconsole.log(response.statusText); // access the underlying Response object\n\nconst { data: operation, response: raw } = await client.compute.vms\n  .create({\n    boot_volume: { size: 100, type: 'nvme' },\n    cpu_config: { vcpu: 2 },\n    memory_config: { size: 2 },\n    name: 'my-vm',\n    os_image_name: 'ubuntu-noble-2025-10-01',\n    project_id: '123e4567-e89b-12d3-a456-426614174000',\n    public_ip_enabled: true,\n    region: 'us-sva-1',\n    ssh_key: {\n      public_key:\n        'ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIDBIASkmwNiLcdlW6927Zjt1Hf7Kw/PpEZ4Zm+wU9wn2',\n    },\n    subnet_id: '123e4567-e89b-12d3-a456-426614174000',\n  })\n  .withResponse();\nconsole.log(raw.headers.get('X-My-Header'));\nconsole.log(operation.id);\n```\n\n### Logging\n\n> [!IMPORTANT]\n> All log messages are intended for debugging only. The format and content of log messages\n> may change between releases.\n\n#### Log levels\n\nThe log level can be configured in two ways:\n\n1. Via the `NIRVANA_LABS_LOG` environment variable\n2. Using the `logLevel` client option (overrides the environment variable if set)\n\n```ts\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs({\n  logLevel: 'debug', // Show all log messages\n});\n```\n\nAvailable log levels, from most to least verbose:\n\n- `'debug'` - Show debug messages, info, warnings, and errors\n- `'info'` - Show info messages, warnings, and errors\n- `'warn'` - Show warnings and errors (default)\n- `'error'` - Show only errors\n- `'off'` - Disable all logging\n\nAt the `'debug'` level, all HTTP requests and responses are logged, including headers and bodies.\nSome authentication-related headers are redacted, but sensitive data in request and response bodies\nmay still be visible.\n\n#### Custom logger\n\nBy default, this library logs to `globalThis.console`. You can also provide a custom logger.\nMost logging libraries are supported, including [pino](https://www.npmjs.com/package/pino), [winston](https://www.npmjs.com/package/winston), [bunyan](https://www.npmjs.com/package/bunyan), [consola](https://www.npmjs.com/package/consola), [signale](https://www.npmjs.com/package/signale), and [@std/log](https://jsr.io/@std/log). If your logger doesn't work, please open an issue.\n\nWhen providing a custom logger, the `logLevel` option still controls which messages are emitted, messages\nbelow the configured level will not be sent to your logger.\n\n```ts\nimport NirvanaLabs from '@nirvana-labs/nirvana';\nimport pino from 'pino';\n\nconst logger = pino();\n\nconst client = new NirvanaLabs({\n  logger: logger.child({ name: 'NirvanaLabs' }),\n  logLevel: 'debug', // Send all messages to pino, allowing it to filter\n});\n```\n\n### Making custom/undocumented requests\n\nThis library is typed for convenient access to the documented API. If you need to access undocumented\nendpoints, params, or response properties, the library can still be used.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints, you can use `client.get`, `client.post`, and other HTTP verbs.\nOptions on the client, such as retries, will be respected when making these requests.\n\n```ts\nawait client.post('/some/path', {\n  body: { some_prop: 'foo' },\n  query: { some_query_arg: 'bar' },\n});\n```\n\n#### Undocumented request params\n\nTo make requests using undocumented parameters, you may use `// @ts-expect-error` on the undocumented\nparameter. This library doesn't validate at runtime that the request matches the type, so any extra values you\nsend will be sent as-is.\n\n```ts\nclient.compute.vms.create({\n  // ...\n  // @ts-expect-error baz is not yet public\n  baz: 'undocumented option',\n});\n```\n\nFor requests with the `GET` verb, any extra params will be in the query, all other requests will send the\nextra param in the body.\n\nIf you want to explicitly send an extra argument, you can do so with the `query`, `body`, and `headers` request\noptions.\n\n#### Undocumented response properties\n\nTo access undocumented response properties, you may access the response object with `// @ts-expect-error` on\nthe response object, or cast the response object to the requisite type. Like the request params, we do not\nvalidate or strip extra properties from the response from the API.\n\n### Customizing the fetch client\n\nBy default, this library expects a global `fetch` function is defined.\n\nIf you want to use a different `fetch` function, you can either polyfill the global:\n\n```ts\nimport fetch from 'my-fetch';\n\nglobalThis.fetch = fetch;\n```\n\nOr pass it to the client:\n\n```ts\nimport NirvanaLabs from '@nirvana-labs/nirvana';\nimport fetch from 'my-fetch';\n\nconst client = new NirvanaLabs({ fetch });\n```\n\n### Fetch options\n\nIf you want to set custom `fetch` options without overriding the `fetch` function, you can provide a `fetchOptions` object when instantiating the client or making a request. (Request-specific options override client options.)\n\n```ts\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs({\n  fetchOptions: {\n    // `RequestInit` options\n  },\n});\n```\n\n#### Configuring proxies\n\nTo modify proxy behavior, you can provide custom `fetchOptions` that add runtime-specific proxy\noptions to requests:\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/node.svg\" align=\"top\" width=\"18\" height=\"21\"> **Node** <sup>[[docs](https://github.com/nodejs/undici/blob/main/docs/docs/api/ProxyAgent.md#example---proxyagent-with-fetch)]</sup>\n\n```ts\nimport NirvanaLabs from '@nirvana-labs/nirvana';\nimport * as undici from 'undici';\n\nconst proxyAgent = new undici.ProxyAgent('http://localhost:8888');\nconst client = new NirvanaLabs({\n  fetchOptions: {\n    dispatcher: proxyAgent,\n  },\n});\n```\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/bun.svg\" align=\"top\" width=\"18\" height=\"21\"> **Bun** <sup>[[docs](https://bun.sh/guides/http/proxy)]</sup>\n\n```ts\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs({\n  fetchOptions: {\n    proxy: 'http://localhost:8888',\n  },\n});\n```\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/deno.svg\" align=\"top\" width=\"18\" height=\"21\"> **Deno** <sup>[[docs](https://docs.deno.com/api/deno/~/Deno.createHttpClient)]</sup>\n\n```ts\nimport NirvanaLabs from 'npm:@nirvana-labs/nirvana';\n\nconst httpClient = Deno.createHttpClient({ proxy: { url: 'http://localhost:8888' } });\nconst client = new NirvanaLabs({\n  fetchOptions: {\n    client: httpClient,\n  },\n});\n```\n\n## Frequently Asked Questions\n\n## Semantic versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes that only affect static types, without breaking runtime behavior.\n2. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n3. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/nirvana-labs/nirvana-typescript/issues) with questions, bugs, or suggestions.\n\n## Requirements\n\nTypeScript >= 4.9 is supported.\n\nThe following runtimes are supported:\n\n- Web browsers (Up-to-date Chrome, Firefox, Safari, Edge, and more)\n- Node.js 20 LTS or later ([non-EOL](https://endoflife.date/nodejs)) versions.\n- Deno v1.28.0 or higher.\n- Bun 1.0 or later.\n- Cloudflare Workers.\n- Vercel Edge Runtime.\n- Jest 28 or greater with the `\"node\"` environment (`\"jsdom\"` is not supported at this time).\n- Nitro v2.6 or greater.\n\nNote that React Native is not supported at this time.\n\nIf you are interested in other runtime environments, please open or upvote an issue on GitHub.\n\n## Contributing\n\nSee [the contributing documentation](./CONTRIBUTING.md).\n",
  },
  {
    language: 'cli',
    content:
      "# Nirvana Labs CLI\n\nThe official CLI for the [Nirvana Labs REST API](https://docs.nirvanalabs.io).\n\n<!-- x-release-please-start-version -->\n\n## Installation\n\n### Installing with Homebrew\n\n~~~sh\nbrew install nirvana-labs/tap/nirvana\n~~~\n\n### Installing with Go\n\nTo test or install the CLI locally, you need [Go](https://go.dev/doc/install) version 1.22 or later installed.\n\n~~~sh\ngo install 'github.com/nirvana-labs/nirvana-cli/cmd/nirvana@latest'\n~~~\n\nOnce you have run `go install`, the binary is placed in your Go bin directory:\n\n- **Default location**: `$HOME/go/bin` (or `$GOPATH/bin` if GOPATH is set)\n- **Check your path**: Run `go env GOPATH` to see the base directory\n\nIf commands aren't found after installation, add the Go bin directory to your PATH:\n\n~~~sh\n# Add to your shell profile (.zshrc, .bashrc, etc.)\nexport PATH=\"$PATH:$(go env GOPATH)/bin\"\n~~~\n\n<!-- x-release-please-end -->\n\n### Running Locally\n\nAfter cloning the git repository for this project, you can use the\n`scripts/run` script to run the tool locally:\n\n~~~sh\n./scripts/run args...\n~~~\n\n## Usage\n\nThe CLI follows a resource-based command structure:\n\n~~~sh\nnirvana [resource] <command> [flags...]\n~~~\n\n~~~sh\nnirvana compute:vms create \\\n  --api-key 'My API Key' \\\n  --boot-volume '{size: 100, type: nvme}' \\\n  --cpu-config '{vcpu: 2}' \\\n  --memory-config '{size: 2}' \\\n  --name my-vm \\\n  --os-image-name ubuntu-noble-2025-10-01 \\\n  --project-id 123e4567-e89b-12d3-a456-426614174000 \\\n  --public-ip-enabled \\\n  --region us-sva-1 \\\n  --ssh-key '{public_key: ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIDBIASkmwNiLcdlW6927Zjt1Hf7Kw/PpEZ4Zm+wU9wn2}' \\\n  --subnet-id 123e4567-e89b-12d3-a456-426614174000\n~~~\n\nFor details about specific commands, use the `--help` flag.\n\n### Environment variables\n\n| Environment variable   | Required |\n| ---------------------- | -------- |\n| `NIRVANA_LABS_API_KEY` | yes      |\n\n### Global flags\n\n- `--api-key` (can also be set with `NIRVANA_LABS_API_KEY` env var)\n- `--help` - Show command line usage\n- `--debug` - Enable debug logging (includes HTTP request/response details)\n- `--version`, `-v` - Show the CLI version\n- `--base-url` - Use a custom API backend URL\n- `--format` - Change the output format (`auto`, `explore`, `json`, `jsonl`, `pretty`, `raw`, `yaml`)\n- `--format-error` - Change the output format for errors (`auto`, `explore`, `json`, `jsonl`, `pretty`, `raw`, `yaml`)\n- `--transform` - Transform the data output using [GJSON syntax](https://github.com/tidwall/gjson/blob/master/SYNTAX.md)\n- `--transform-error` - Transform the error output using [GJSON syntax](https://github.com/tidwall/gjson/blob/master/SYNTAX.md)\n\n### Passing files as arguments\n\nTo pass files to your API, you can use the `@myfile.ext` syntax:\n\n~~~bash\nnirvana <command> --arg @abe.jpg\n~~~\n\nFiles can also be passed inside JSON or YAML blobs:\n\n~~~bash\nnirvana <command> --arg '{image: \"@abe.jpg\"}'\n# Equivalent:\nnirvana <command> <<YAML\narg:\n  image: \"@abe.jpg\"\nYAML\n~~~\n\nIf you need to pass a string literal that begins with an `@` sign, you can\nescape the `@` sign to avoid accidentally passing a file.\n\n~~~bash\nnirvana <command> --username '\\@abe'\n~~~\n\n#### Explicit encoding\n\nFor JSON endpoints, the CLI tool does filetype sniffing to determine whether the\nfile contents should be sent as a string literal (for plain text files) or as a\nbase64-encoded string literal (for binary files). If you need to explicitly send\nthe file as either plain text or base64-encoded data, you can use\n`@file://myfile.txt` (for string encoding) or `@data://myfile.dat` (for\nbase64-encoding). Note that absolute paths will begin with `@file://` or\n`@data://`, followed by a third `/` (for example, `@file:///tmp/file.txt`).\n\n~~~bash\nnirvana <command> --arg @data://file.txt\n~~~\n\n## Linking different Go SDK versions\n\nYou can link the CLI against a different version of the Nirvana Labs Go SDK\nfor development purposes using the `./scripts/link` script.\n\nTo link to a specific version from a repository (version can be a branch,\ngit tag, or commit hash):\n\n~~~bash\n./scripts/link github.com/org/repo@version\n~~~\n\nTo link to a local copy of the SDK:\n\n~~~bash\n./scripts/link ../path/to/nirvana-go\n~~~\n\nIf you run the link script without any arguments, it will default to `../nirvana-go`.\n",
  },
];

const INDEX_OPTIONS = {
  fields: [
    'name',
    'endpoint',
    'summary',
    'description',
    'qualified',
    'stainlessPath',
    'content',
    'sectionContext',
  ],
  storeFields: ['kind', '_original'],
  searchOptions: {
    prefix: true,
    fuzzy: 0.1,
    boost: {
      name: 5,
      stainlessPath: 3,
      endpoint: 3,
      qualified: 3,
      summary: 2,
      content: 1,
      description: 1,
    } as Record<string, number>,
  },
};

/**
 * Self-contained local search engine backed by MiniSearch.
 * Method data is embedded at SDK build time; prose documents
 * can be loaded from an optional docs directory at runtime.
 */
export class LocalDocsSearch {
  private methodIndex: MiniSearch<MiniSearchDocument>;
  private proseIndex: MiniSearch<MiniSearchDocument>;

  private constructor() {
    this.methodIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
    this.proseIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
  }

  static async create(opts?: { docsDir?: string }): Promise<LocalDocsSearch> {
    const instance = new LocalDocsSearch();
    instance.indexMethods(EMBEDDED_METHODS);
    for (const readme of EMBEDDED_READMES) {
      instance.indexProse(readme.content, `readme:${readme.language}`);
    }
    if (opts?.docsDir) {
      await instance.loadDocsDirectory(opts.docsDir);
    }
    return instance;
  }

  search(props: {
    query: string;
    language?: string;
    detail?: string;
    maxResults?: number;
    maxLength?: number;
  }): SearchResult {
    const { query, language = 'typescript', detail = 'default', maxResults = 5, maxLength = 100_000 } = props;

    const useMarkdown = detail === 'verbose' || detail === 'high';

    // Search both indices and merge results by score.
    // Filter prose hits so language-tagged content (READMEs and docs with
    // frontmatter) only matches the requested language.
    const methodHits = this.methodIndex
      .search(query)
      .map((hit) => ({ ...hit, _kind: 'http_method' as const }));
    const proseHits = this.proseIndex
      .search(query)
      .filter((hit) => {
        const source = ((hit as Record<string, unknown>)['_original'] as ProseChunk | undefined)?.source;
        if (!source) return true;
        // Check for language-tagged sources: "readme:<lang>" or "lang:<lang>:<filename>"
        let taggedLang: string | undefined;
        if (source.startsWith('readme:')) taggedLang = source.slice('readme:'.length);
        else if (source.startsWith('lang:')) taggedLang = source.split(':')[1];
        if (!taggedLang) return true;
        return taggedLang === language || (language === 'javascript' && taggedLang === 'typescript');
      })
      .map((hit) => ({ ...hit, _kind: 'prose' as const }));
    const merged = [...methodHits, ...proseHits].sort((a, b) => b.score - a.score);
    const top = merged.slice(0, maxResults);

    const fullResults: (string | Record<string, unknown>)[] = [];

    for (const hit of top) {
      const original = (hit as Record<string, unknown>)['_original'];
      if (hit._kind === 'http_method') {
        const m = original as MethodEntry;
        if (useMarkdown && m.markdown) {
          fullResults.push(m.markdown);
        } else {
          // Use per-language data when available, falling back to the
          // top-level fields (which are TypeScript-specific in the
          // legacy codepath).
          const langData = m.perLanguage?.[language];
          fullResults.push({
            method: langData?.method ?? m.qualified,
            summary: m.summary,
            description: m.description,
            endpoint: `${m.httpMethod.toUpperCase()} ${m.endpoint}`,
            ...(langData?.example ? { example: langData.example } : {}),
            ...(m.params ? { params: m.params } : {}),
            ...(m.response ? { response: m.response } : {}),
          });
        }
      } else {
        const c = original as ProseChunk;
        fullResults.push({
          content: c.content,
          ...(c.source ? { source: c.source } : {}),
        });
      }
    }

    let totalLength = 0;
    const results: (string | Record<string, unknown>)[] = [];
    for (const result of fullResults) {
      const len = typeof result === 'string' ? result.length : JSON.stringify(result).length;
      totalLength += len;
      if (totalLength > maxLength) break;
      results.push(result);
    }

    if (results.length < fullResults.length) {
      results.unshift(`Truncated; showing ${results.length} of ${fullResults.length} results.`);
    }

    return { results };
  }

  private indexMethods(methods: MethodEntry[]): void {
    const docs: MiniSearchDocument[] = methods.map((m, i) => ({
      id: `method-${i}`,
      kind: 'http_method' as const,
      name: m.name,
      endpoint: m.endpoint,
      summary: m.summary,
      description: m.description,
      qualified: m.qualified,
      stainlessPath: m.stainlessPath,
      _original: m as unknown as Record<string, unknown>,
    }));
    if (docs.length > 0) {
      this.methodIndex.addAll(docs);
    }
  }

  private async loadDocsDirectory(docsDir: string): Promise<void> {
    let entries;
    try {
      entries = await fs.readdir(docsDir, { withFileTypes: true });
    } catch (err) {
      getLogger().warn({ err, docsDir }, 'Could not read docs directory');
      return;
    }

    const files = entries
      .filter((e) => e.isFile())
      .filter((e) => e.name.endsWith('.md') || e.name.endsWith('.markdown') || e.name.endsWith('.json'));

    for (const file of files) {
      try {
        const filePath = path.join(docsDir, file.name);
        const content = await fs.readFile(filePath, 'utf-8');

        if (file.name.endsWith('.json')) {
          const texts = extractTexts(JSON.parse(content));
          if (texts.length > 0) {
            this.indexProse(texts.join('\n\n'), file.name);
          }
        } else {
          // Parse optional YAML frontmatter for language tagging.
          // Files with a "language" field in frontmatter will only
          // surface in searches for that language.
          //
          // Example:
          //   ---
          //   language: python
          //   ---
          //   # Error handling in Python
          //   ...
          const frontmatter = parseFrontmatter(content);
          const source = frontmatter.language ? `lang:${frontmatter.language}:${file.name}` : file.name;
          this.indexProse(content, source);
        }
      } catch (err) {
        getLogger().warn({ err, file: file.name }, 'Failed to index docs file');
      }
    }
  }

  private indexProse(markdown: string, source: string): void {
    const chunks = chunkMarkdown(markdown);
    const baseId = this.proseIndex.documentCount;

    const docs: MiniSearchDocument[] = chunks.map((chunk, i) => ({
      id: `prose-${baseId + i}`,
      kind: 'prose' as const,
      content: chunk.content,
      ...(chunk.sectionContext != null ? { sectionContext: chunk.sectionContext } : {}),
      _original: { ...chunk, source } as unknown as Record<string, unknown>,
    }));

    if (docs.length > 0) {
      this.proseIndex.addAll(docs);
    }
  }
}

/** Lightweight markdown chunker — splits on headers, chunks by word count. */
function chunkMarkdown(markdown: string): { content: string; tag: string; sectionContext?: string }[] {
  // Strip YAML frontmatter
  const stripped = markdown.replace(/^---\n[\s\S]*?\n---\n?/, '');
  const lines = stripped.split('\n');

  const chunks: { content: string; tag: string; sectionContext?: string }[] = [];
  const headers: string[] = [];
  let current: string[] = [];

  const flush = () => {
    const text = current.join('\n').trim();
    if (!text) return;
    const sectionContext = headers.length > 0 ? headers.join(' > ') : undefined;
    // Split into ~200-word chunks
    const words = text.split(/\s+/);
    for (let i = 0; i < words.length; i += 200) {
      const slice = words.slice(i, i + 200).join(' ');
      if (slice) {
        chunks.push({ content: slice, tag: 'p', ...(sectionContext != null ? { sectionContext } : {}) });
      }
    }
    current = [];
  };

  for (const line of lines) {
    const headerMatch = line.match(/^(#{1,6})\s+(.+)/);
    if (headerMatch) {
      flush();
      const level = headerMatch[1]!.length;
      const text = headerMatch[2]!.trim();
      while (headers.length >= level) headers.pop();
      headers.push(text);
    } else {
      current.push(line);
    }
  }
  flush();

  return chunks;
}

/** Recursively extracts string values from a JSON structure. */
function extractTexts(data: unknown, depth = 0): string[] {
  if (depth > 10) return [];
  if (typeof data === 'string') return data.trim() ? [data] : [];
  if (Array.isArray(data)) return data.flatMap((item) => extractTexts(item, depth + 1));
  if (typeof data === 'object' && data !== null) {
    return Object.values(data).flatMap((v) => extractTexts(v, depth + 1));
  }
  return [];
}

/** Parses YAML frontmatter from a markdown string, extracting the language field if present. */
function parseFrontmatter(markdown: string): { language?: string } {
  const match = markdown.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const body = match[1] ?? '';
  const langMatch = body.match(/^language:\s*(.+)$/m);
  return langMatch ? { language: langMatch[1]!.trim() } : {};
}
