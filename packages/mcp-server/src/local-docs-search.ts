// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MiniSearch from 'minisearch';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { getLogger } from './logger';

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
      "{ id: string; created_at: string; domains: { id: string; domain: string; verified: boolean; }[]; membership: { id: string; role: 'owner' | 'member'; }; name: string; personal: boolean; services: { cloud: boolean; jit_provisioning: boolean; scim: boolean; siem: boolean; sso: boolean; }; updated_at: string; auth_id?: string; }",
    markdown:
      "## create\n\n`client.organizations.create(name: string): { id: string; created_at: string; domains: organization_domain[]; membership: organization_membership; name: string; personal: boolean; services: organization_services; updated_at: string; auth_id?: string; }`\n\n**post** `/v1/organizations`\n\nCreate a new organization\n\n### Parameters\n\n- `name: string`\n  Organization name.\n\n### Returns\n\n- `{ id: string; created_at: string; domains: { id: string; domain: string; verified: boolean; }[]; membership: { id: string; role: 'owner' | 'member'; }; name: string; personal: boolean; services: { cloud: boolean; jit_provisioning: boolean; scim: boolean; siem: boolean; sso: boolean; }; updated_at: string; auth_id?: string; }`\n  Organization response.\n\n  - `id: string`\n  - `created_at: string`\n  - `domains: { id: string; domain: string; verified: boolean; }[]`\n  - `membership: { id: string; role: 'owner' | 'member'; }`\n  - `name: string`\n  - `personal: boolean`\n  - `services: { cloud: boolean; jit_provisioning: boolean; scim: boolean; siem: boolean; sso: boolean; }`\n  - `updated_at: string`\n  - `auth_id?: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\nconst organization = await client.organizations.create({ name: 'My Organization' });\n\nconsole.log(organization);\n```",
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
      "{ id: string; created_at: string; domains: { id: string; domain: string; verified: boolean; }[]; membership: { id: string; role: 'owner' | 'member'; }; name: string; personal: boolean; services: { cloud: boolean; jit_provisioning: boolean; scim: boolean; siem: boolean; sso: boolean; }; updated_at: string; auth_id?: string; }",
    markdown:
      "## update\n\n`client.organizations.update(organization_id: string, name?: string): { id: string; created_at: string; domains: organization_domain[]; membership: organization_membership; name: string; personal: boolean; services: organization_services; updated_at: string; auth_id?: string; }`\n\n**patch** `/v1/organizations/{organization_id}`\n\nUpdate an existing organization\n\n### Parameters\n\n- `organization_id: string`\n\n- `name?: string`\n  Organization name.\n\n### Returns\n\n- `{ id: string; created_at: string; domains: { id: string; domain: string; verified: boolean; }[]; membership: { id: string; role: 'owner' | 'member'; }; name: string; personal: boolean; services: { cloud: boolean; jit_provisioning: boolean; scim: boolean; siem: boolean; sso: boolean; }; updated_at: string; auth_id?: string; }`\n  Organization response.\n\n  - `id: string`\n  - `created_at: string`\n  - `domains: { id: string; domain: string; verified: boolean; }[]`\n  - `membership: { id: string; role: 'owner' | 'member'; }`\n  - `name: string`\n  - `personal: boolean`\n  - `services: { cloud: boolean; jit_provisioning: boolean; scim: boolean; siem: boolean; sso: boolean; }`\n  - `updated_at: string`\n  - `auth_id?: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\nconst organization = await client.organizations.update('organization_id');\n\nconsole.log(organization);\n```",
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
      "{ id: string; created_at: string; domains: { id: string; domain: string; verified: boolean; }[]; membership: { id: string; role: 'owner' | 'member'; }; name: string; personal: boolean; services: { cloud: boolean; jit_provisioning: boolean; scim: boolean; siem: boolean; sso: boolean; }; updated_at: string; auth_id?: string; }",
    markdown:
      "## list\n\n`client.organizations.list(cursor?: string, limit?: number): { id: string; created_at: string; domains: organization_domain[]; membership: organization_membership; name: string; personal: boolean; services: organization_services; updated_at: string; auth_id?: string; }`\n\n**get** `/v1/organizations`\n\nList organizations\n\n### Parameters\n\n- `cursor?: string`\n  Pagination cursor returned by a previous request\n\n- `limit?: number`\n  Maximum number of items to return\n\n### Returns\n\n- `{ id: string; created_at: string; domains: { id: string; domain: string; verified: boolean; }[]; membership: { id: string; role: 'owner' | 'member'; }; name: string; personal: boolean; services: { cloud: boolean; jit_provisioning: boolean; scim: boolean; siem: boolean; sso: boolean; }; updated_at: string; auth_id?: string; }`\n  Organization response.\n\n  - `id: string`\n  - `created_at: string`\n  - `domains: { id: string; domain: string; verified: boolean; }[]`\n  - `membership: { id: string; role: 'owner' | 'member'; }`\n  - `name: string`\n  - `personal: boolean`\n  - `services: { cloud: boolean; jit_provisioning: boolean; scim: boolean; siem: boolean; sso: boolean; }`\n  - `updated_at: string`\n  - `auth_id?: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\n// Automatically fetches more pages as needed.\nfor await (const organization of client.organizations.list()) {\n  console.log(organization);\n}\n```",
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
      "{ id: string; created_at: string; domains: { id: string; domain: string; verified: boolean; }[]; membership: { id: string; role: 'owner' | 'member'; }; name: string; personal: boolean; services: { cloud: boolean; jit_provisioning: boolean; scim: boolean; siem: boolean; sso: boolean; }; updated_at: string; auth_id?: string; }",
    markdown:
      "## get\n\n`client.organizations.get(organization_id: string): { id: string; created_at: string; domains: organization_domain[]; membership: organization_membership; name: string; personal: boolean; services: organization_services; updated_at: string; auth_id?: string; }`\n\n**get** `/v1/organizations/{organization_id}`\n\nGet details about an Organization\n\n### Parameters\n\n- `organization_id: string`\n\n### Returns\n\n- `{ id: string; created_at: string; domains: { id: string; domain: string; verified: boolean; }[]; membership: { id: string; role: 'owner' | 'member'; }; name: string; personal: boolean; services: { cloud: boolean; jit_provisioning: boolean; scim: boolean; siem: boolean; sso: boolean; }; updated_at: string; auth_id?: string; }`\n  Organization response.\n\n  - `id: string`\n  - `created_at: string`\n  - `domains: { id: string; domain: string; verified: boolean; }[]`\n  - `membership: { id: string; role: 'owner' | 'member'; }`\n  - `name: string`\n  - `personal: boolean`\n  - `services: { cloud: boolean; jit_provisioning: boolean; scim: boolean; siem: boolean; sso: boolean; }`\n  - `updated_at: string`\n  - `auth_id?: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\nconst organization = await client.organizations.get('organization_id');\n\nconsole.log(organization);\n```",
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
      '{ id: string; action: string; actor: { id: string; type: audit_log_type; }; client_ip: string; created_at: string; method: string; path: string; status_code: number; user_agent: string; target?: { id: string; type: string; }; }',
    markdown:
      "## list\n\n`client.auditLogs.list(cursor?: string, limit?: number): { id: string; action: string; actor: audit_log_actor; client_ip: string; created_at: string; method: string; path: string; status_code: number; user_agent: string; target?: object; }`\n\n**get** `/v1/audit_logs`\n\nList Audit Log entries for an organization\n\n### Parameters\n\n- `cursor?: string`\n  Pagination cursor returned by a previous request\n\n- `limit?: number`\n  Maximum number of items to return\n\n### Returns\n\n- `{ id: string; action: string; actor: { id: string; type: audit_log_type; }; client_ip: string; created_at: string; method: string; path: string; status_code: number; user_agent: string; target?: { id: string; type: string; }; }`\n  Audit log entry.\n\n  - `id: string`\n  - `action: string`\n  - `actor: { id: string; type: 'user' | 'api_key'; }`\n  - `client_ip: string`\n  - `created_at: string`\n  - `method: string`\n  - `path: string`\n  - `status_code: number`\n  - `user_agent: string`\n  - `target?: { id: string; type: string; }`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\n// Automatically fetches more pages as needed.\nfor await (const auditLog of client.auditLogs.list()) {\n  console.log(auditLog);\n}\n```",
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
      '{ id: string; action: string; actor: { id: string; type: audit_log_type; }; client_ip: string; created_at: string; method: string; path: string; status_code: number; user_agent: string; target?: { id: string; type: string; }; }',
    markdown:
      "## get\n\n`client.auditLogs.get(audit_log_id: string): { id: string; action: string; actor: audit_log_actor; client_ip: string; created_at: string; method: string; path: string; status_code: number; user_agent: string; target?: object; }`\n\n**get** `/v1/audit_logs/{audit_log_id}`\n\nGet an Audit Log entry\n\n### Parameters\n\n- `audit_log_id: string`\n\n### Returns\n\n- `{ id: string; action: string; actor: { id: string; type: audit_log_type; }; client_ip: string; created_at: string; method: string; path: string; status_code: number; user_agent: string; target?: { id: string; type: string; }; }`\n  Audit log entry.\n\n  - `id: string`\n  - `action: string`\n  - `actor: { id: string; type: 'user' | 'api_key'; }`\n  - `client_ip: string`\n  - `created_at: string`\n  - `method: string`\n  - `path: string`\n  - `status_code: number`\n  - `user_agent: string`\n  - `target?: { id: string; type: string; }`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\nconst auditLog = await client.auditLogs.get('audit_log_id');\n\nconsole.log(auditLog);\n```",
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
      "## get\n\n`client.regions.get(name: string): { availability: region_availability; compute: object; name: string; networking: object; nks: object; storage: object; }`\n\n**get** `/v1/regions/{name}`\n\nGet a region by name\n\n### Parameters\n\n- `name: string`\n\n### Returns\n\n- `{ availability: 'live' | 'preview' | 'maintenance' | 'sunset'; compute: { vms: boolean; }; name: string; networking: { connect: boolean; vpcs: boolean; }; nks: { clusters: boolean; }; storage: { abs: boolean; local_nvme: boolean; }; }`\n  Region response with product availability.\n\n  - `availability: 'live' | 'preview' | 'maintenance' | 'sunset'`\n  - `compute: { vms: boolean; }`\n  - `name: string`\n  - `networking: { connect: boolean; vpcs: boolean; }`\n  - `nks: { clusters: boolean; }`\n  - `storage: { abs: boolean; local_nvme: boolean; }`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\nconst region = await client.regions.get('us-wdc-1');\n\nconsole.log(region);\n```",
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
      "region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1' | 'us-wdc-1';",
      'ssh_key: { public_key: string; };',
      'subnet_id: string;',
      "data_volumes?: { name: string; size: number; type: 'nvme' | 'abs'; tags?: string[]; }[];",
      'tags?: string[];',
    ],
    response:
      "{ id: string; created_at: string; kind: 'vm' | 'volume' | 'vpc' | 'firewall_rule' | 'nks_cluster' | 'nks_node_pool'; project_id: string; resource_id: string; status: 'pending' | 'running' | 'done' | 'failed' | 'unknown'; type: 'create' | 'update' | 'delete' | 'restart'; updated_at: string; }",
    markdown:
      "## create\n\n`client.compute.vms.create(boot_volume: { size: number; type: 'nvme' | 'abs'; tags?: string[]; }, cpu_config: { vcpu: number; }, memory_config: { size: number; }, name: string, os_image_name: string, project_id: string, public_ip_enabled: boolean, region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1' | 'us-wdc-1', ssh_key: { public_key: string; }, subnet_id: string, data_volumes?: { name: string; size: number; type: 'nvme' | 'abs'; tags?: string[]; }[], tags?: string[]): { id: string; created_at: string; kind: operation_kind; project_id: string; resource_id: string; status: operation_status; type: operation_type; updated_at: string; }`\n\n**post** `/v1/compute/vms`\n\nCreate a VM\n\n### Parameters\n\n- `boot_volume: { size: number; type: 'nvme' | 'abs'; tags?: string[]; }`\n  Boot volume for the VM.\n  - `size: number`\n    Size of the Volume in GB.\n  - `type: 'nvme' | 'abs'`\n    Type of the Volume.\n  - `tags?: string[]`\n    Tags to attach to the Volume.\n\n- `cpu_config: { vcpu: number; }`\n  CPU configuration for the VM.\n  - `vcpu: number`\n    Number of virtual CPUs.\n\n- `memory_config: { size: number; }`\n  Memory configuration for the VM.\n  - `size: number`\n    Size of the memory in GB.\n\n- `name: string`\n  Name of the VM.\n\n- `os_image_name: string`\n  Name of the OS Image to use for the VM.\n\n- `project_id: string`\n  Project ID to create the VM in.\n\n- `public_ip_enabled: boolean`\n  Whether to enable public IP for the VM.\n\n- `region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1' | 'us-wdc-1'`\n  Region the resource is in.\n\n- `ssh_key: { public_key: string; }`\n  Public SSH key configuration for the VM.\n  - `public_key: string`\n    Public key to and and use to access the VM.\n\n- `subnet_id: string`\n  ID of the subnet to use for the VM.\n\n- `data_volumes?: { name: string; size: number; type: 'nvme' | 'abs'; tags?: string[]; }[]`\n  Data volumes for the VM.\n\n- `tags?: string[]`\n  Tags to attach to the VM.\n\n### Returns\n\n- `{ id: string; created_at: string; kind: 'vm' | 'volume' | 'vpc' | 'firewall_rule' | 'nks_cluster' | 'nks_node_pool'; project_id: string; resource_id: string; status: 'pending' | 'running' | 'done' | 'failed' | 'unknown'; type: 'create' | 'update' | 'delete' | 'restart'; updated_at: string; }`\n  Operation details.\n\n  - `id: string`\n  - `created_at: string`\n  - `kind: 'vm' | 'volume' | 'vpc' | 'firewall_rule' | 'nks_cluster' | 'nks_node_pool'`\n  - `project_id: string`\n  - `resource_id: string`\n  - `status: 'pending' | 'running' | 'done' | 'failed' | 'unknown'`\n  - `type: 'create' | 'update' | 'delete' | 'restart'`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\nconst operation = await client.compute.vms.create({\n  boot_volume: { size: 100, type: 'abs' },\n  cpu_config: { vcpu: 2 },\n  memory_config: { size: 2 },\n  name: 'my-vm',\n  os_image_name: 'ubuntu-noble-2025-10-01',\n  project_id: '123e4567-e89b-12d3-a456-426614174000',\n  public_ip_enabled: true,\n  region: 'us-wdc-1',\n  ssh_key: { public_key: 'ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIDBIASkmwNiLcdlW6927Zjt1Hf7Kw/PpEZ4Zm+wU9wn2' },\n  subnet_id: '123e4567-e89b-12d3-a456-426614174000',\n});\n\nconsole.log(operation);\n```",
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
      "{ id: string; boot_volume_id: string; cpu_config: { vcpu: number; }; created_at: string; data_volume_ids: string[]; memory_config: { size: number; }; name: string; private_ip: string; project_id: string; public_ip: string; public_ip_enabled: boolean; region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1' | 'us-wdc-1'; status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'; subnet_id: string; tags: string[]; updated_at: string; vpc_id: string; vpc_name: string; }",
    markdown:
      "## list\n\n`client.compute.vms.list(project_id: string, cursor?: string, limit?: number): { id: string; boot_volume_id: string; cpu_config: cpu_config; created_at: string; data_volume_ids: string[]; memory_config: memory_config; name: string; private_ip: string; project_id: string; public_ip: string; public_ip_enabled: boolean; region: region_name; status: resource_status; subnet_id: string; tags: string[]; updated_at: string; vpc_id: string; vpc_name: string; }`\n\n**get** `/v1/compute/vms`\n\nList all VMs\n\n### Parameters\n\n- `project_id: string`\n  Project ID of resources to request\n\n- `cursor?: string`\n  Pagination cursor returned by a previous request\n\n- `limit?: number`\n  Maximum number of items to return\n\n### Returns\n\n- `{ id: string; boot_volume_id: string; cpu_config: { vcpu: number; }; created_at: string; data_volume_ids: string[]; memory_config: { size: number; }; name: string; private_ip: string; project_id: string; public_ip: string; public_ip_enabled: boolean; region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1' | 'us-wdc-1'; status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'; subnet_id: string; tags: string[]; updated_at: string; vpc_id: string; vpc_name: string; }`\n  VM details.\n\n  - `id: string`\n  - `boot_volume_id: string`\n  - `cpu_config: { vcpu: number; }`\n  - `created_at: string`\n  - `data_volume_ids: string[]`\n  - `memory_config: { size: number; }`\n  - `name: string`\n  - `private_ip: string`\n  - `project_id: string`\n  - `public_ip: string`\n  - `public_ip_enabled: boolean`\n  - `region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1' | 'us-wdc-1'`\n  - `status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'`\n  - `subnet_id: string`\n  - `tags: string[]`\n  - `updated_at: string`\n  - `vpc_id: string`\n  - `vpc_name: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\n// Automatically fetches more pages as needed.\nfor await (const vm of client.compute.vms.list({ project_id: 'project_id' })) {\n  console.log(vm);\n}\n```",
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
      "{ id: string; boot_volume_id: string; cpu_config: { vcpu: number; }; created_at: string; data_volume_ids: string[]; memory_config: { size: number; }; name: string; private_ip: string; project_id: string; public_ip: string; public_ip_enabled: boolean; region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1' | 'us-wdc-1'; status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'; subnet_id: string; tags: string[]; updated_at: string; vpc_id: string; vpc_name: string; }",
    markdown:
      "## get\n\n`client.compute.vms.get(vm_id: string): { id: string; boot_volume_id: string; cpu_config: cpu_config; created_at: string; data_volume_ids: string[]; memory_config: memory_config; name: string; private_ip: string; project_id: string; public_ip: string; public_ip_enabled: boolean; region: region_name; status: resource_status; subnet_id: string; tags: string[]; updated_at: string; vpc_id: string; vpc_name: string; }`\n\n**get** `/v1/compute/vms/{vm_id}`\n\nGet details about a VM\n\n### Parameters\n\n- `vm_id: string`\n\n### Returns\n\n- `{ id: string; boot_volume_id: string; cpu_config: { vcpu: number; }; created_at: string; data_volume_ids: string[]; memory_config: { size: number; }; name: string; private_ip: string; project_id: string; public_ip: string; public_ip_enabled: boolean; region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1' | 'us-wdc-1'; status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'; subnet_id: string; tags: string[]; updated_at: string; vpc_id: string; vpc_name: string; }`\n  VM details.\n\n  - `id: string`\n  - `boot_volume_id: string`\n  - `cpu_config: { vcpu: number; }`\n  - `created_at: string`\n  - `data_volume_ids: string[]`\n  - `memory_config: { size: number; }`\n  - `name: string`\n  - `private_ip: string`\n  - `project_id: string`\n  - `public_ip: string`\n  - `public_ip_enabled: boolean`\n  - `region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1' | 'us-wdc-1'`\n  - `status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'`\n  - `subnet_id: string`\n  - `tags: string[]`\n  - `updated_at: string`\n  - `vpc_id: string`\n  - `vpc_name: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\nconst vm = await client.compute.vms.get('vm_id');\n\nconsole.log(vm);\n```",
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
      "region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1' | 'us-wdc-1';",
      'ssh_key: { public_key: string; };',
      'subnet_id: string;',
      "data_volumes?: { name: string; size: number; type: 'nvme' | 'abs'; tags?: string[]; }[];",
      'tags?: string[];',
    ],
    markdown:
      "## create\n\n`client.compute.vms.availability.create(boot_volume: { size: number; type: 'nvme' | 'abs'; tags?: string[]; }, cpu_config: { vcpu: number; }, memory_config: { size: number; }, name: string, os_image_name: string, project_id: string, public_ip_enabled: boolean, region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1' | 'us-wdc-1', ssh_key: { public_key: string; }, subnet_id: string, data_volumes?: { name: string; size: number; type: 'nvme' | 'abs'; tags?: string[]; }[], tags?: string[]): void`\n\n**post** `/v1/compute/vms/availability`\n\nCheck VM Create Availability\n\n### Parameters\n\n- `boot_volume: { size: number; type: 'nvme' | 'abs'; tags?: string[]; }`\n  Boot volume for the VM.\n  - `size: number`\n    Size of the Volume in GB.\n  - `type: 'nvme' | 'abs'`\n    Type of the Volume.\n  - `tags?: string[]`\n    Tags to attach to the Volume.\n\n- `cpu_config: { vcpu: number; }`\n  CPU configuration for the VM.\n  - `vcpu: number`\n    Number of virtual CPUs.\n\n- `memory_config: { size: number; }`\n  Memory configuration for the VM.\n  - `size: number`\n    Size of the memory in GB.\n\n- `name: string`\n  Name of the VM.\n\n- `os_image_name: string`\n  Name of the OS Image to use for the VM.\n\n- `project_id: string`\n  Project ID to create the VM in.\n\n- `public_ip_enabled: boolean`\n  Whether to enable public IP for the VM.\n\n- `region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1' | 'us-wdc-1'`\n  Region the resource is in.\n\n- `ssh_key: { public_key: string; }`\n  Public SSH key configuration for the VM.\n  - `public_key: string`\n    Public key to and and use to access the VM.\n\n- `subnet_id: string`\n  ID of the subnet to use for the VM.\n\n- `data_volumes?: { name: string; size: number; type: 'nvme' | 'abs'; tags?: string[]; }[]`\n  Data volumes for the VM.\n\n- `tags?: string[]`\n  Tags to attach to the VM.\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\nawait client.compute.vms.availability.create({\n  boot_volume: { size: 100, type: 'abs' },\n  cpu_config: { vcpu: 2 },\n  memory_config: { size: 2 },\n  name: 'my-vm',\n  os_image_name: 'ubuntu-noble-2025-10-01',\n  project_id: '123e4567-e89b-12d3-a456-426614174000',\n  public_ip_enabled: true,\n  region: 'us-wdc-1',\n  ssh_key: { public_key: 'ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIDBIASkmwNiLcdlW6927Zjt1Hf7Kw/PpEZ4Zm+wU9wn2' },\n  subnet_id: '123e4567-e89b-12d3-a456-426614174000',\n})\n```",
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
      "{ id: string; created_at: string; kind: 'boot' | 'data'; name: string; project_id: string; region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1' | 'us-wdc-1'; size: number; status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'; tags: string[]; type: 'nvme' | 'abs'; updated_at: string; vm_id: string; vm_name: string; }",
    markdown:
      "## list\n\n`client.compute.vms.volumes.list(vm_id: string, cursor?: string, limit?: number): { id: string; created_at: string; kind: volume_kind; name: string; project_id: string; region: region_name; size: number; status: resource_status; tags: string[]; type: volume_type; updated_at: string; vm_id: string; vm_name: string; }`\n\n**get** `/v1/compute/vms/{vm_id}/volumes`\n\nList VM's Volumes\n\n### Parameters\n\n- `vm_id: string`\n\n- `cursor?: string`\n  Pagination cursor returned by a previous request\n\n- `limit?: number`\n  Maximum number of items to return\n\n### Returns\n\n- `{ id: string; created_at: string; kind: 'boot' | 'data'; name: string; project_id: string; region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1' | 'us-wdc-1'; size: number; status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'; tags: string[]; type: 'nvme' | 'abs'; updated_at: string; vm_id: string; vm_name: string; }`\n  Volume details.\n\n  - `id: string`\n  - `created_at: string`\n  - `kind: 'boot' | 'data'`\n  - `name: string`\n  - `project_id: string`\n  - `region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1' | 'us-wdc-1'`\n  - `size: number`\n  - `status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'`\n  - `tags: string[]`\n  - `type: 'nvme' | 'abs'`\n  - `updated_at: string`\n  - `vm_id: string`\n  - `vm_name: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\n// Automatically fetches more pages as needed.\nfor await (const volume of client.compute.vms.volumes.list('vm_id')) {\n  console.log(volume);\n}\n```",
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
      "region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1' | 'us-wdc-1';",
      'size: number;',
      "type: 'nvme' | 'abs';",
      'tags?: string[];',
      'vm_id?: string;',
    ],
    response:
      "{ id: string; created_at: string; kind: 'vm' | 'volume' | 'vpc' | 'firewall_rule' | 'nks_cluster' | 'nks_node_pool'; project_id: string; resource_id: string; status: 'pending' | 'running' | 'done' | 'failed' | 'unknown'; type: 'create' | 'update' | 'delete' | 'restart'; updated_at: string; }",
    markdown:
      "## create\n\n`client.compute.volumes.create(name: string, project_id: string, region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1' | 'us-wdc-1', size: number, type: 'nvme' | 'abs', tags?: string[], vm_id?: string): { id: string; created_at: string; kind: operation_kind; project_id: string; resource_id: string; status: operation_status; type: operation_type; updated_at: string; }`\n\n**post** `/v1/compute/volumes`\n\nCreate a Volume. Only data volumes can be created.\n\n### Parameters\n\n- `name: string`\n  Name of the Volume.\n\n- `project_id: string`\n  Project ID the Volume belongs to.\n\n- `region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1' | 'us-wdc-1'`\n  Region the resource is in.\n\n- `size: number`\n  Size of the Volume in GB.\n\n- `type: 'nvme' | 'abs'`\n  Type of the Volume.\n\n- `tags?: string[]`\n  Tags to attach to the Volume.\n\n- `vm_id?: string`\n  ID of the VM the Volume is attached to.\n\n### Returns\n\n- `{ id: string; created_at: string; kind: 'vm' | 'volume' | 'vpc' | 'firewall_rule' | 'nks_cluster' | 'nks_node_pool'; project_id: string; resource_id: string; status: 'pending' | 'running' | 'done' | 'failed' | 'unknown'; type: 'create' | 'update' | 'delete' | 'restart'; updated_at: string; }`\n  Operation details.\n\n  - `id: string`\n  - `created_at: string`\n  - `kind: 'vm' | 'volume' | 'vpc' | 'firewall_rule' | 'nks_cluster' | 'nks_node_pool'`\n  - `project_id: string`\n  - `resource_id: string`\n  - `status: 'pending' | 'running' | 'done' | 'failed' | 'unknown'`\n  - `type: 'create' | 'update' | 'delete' | 'restart'`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\nconst operation = await client.compute.volumes.create({\n  name: 'my-data-volume',\n  project_id: '123e4567-e89b-12d3-a456-426614174000',\n  region: 'us-wdc-1',\n  size: 100,\n  type: 'abs',\n});\n\nconsole.log(operation);\n```",
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
      "{ id: string; created_at: string; kind: 'boot' | 'data'; name: string; project_id: string; region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1' | 'us-wdc-1'; size: number; status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'; tags: string[]; type: 'nvme' | 'abs'; updated_at: string; vm_id: string; vm_name: string; }",
    markdown:
      "## list\n\n`client.compute.volumes.list(project_id: string, cursor?: string, limit?: number): { id: string; created_at: string; kind: volume_kind; name: string; project_id: string; region: region_name; size: number; status: resource_status; tags: string[]; type: volume_type; updated_at: string; vm_id: string; vm_name: string; }`\n\n**get** `/v1/compute/volumes`\n\nList all volumes\n\n### Parameters\n\n- `project_id: string`\n  Project ID of resources to request\n\n- `cursor?: string`\n  Pagination cursor returned by a previous request\n\n- `limit?: number`\n  Maximum number of items to return\n\n### Returns\n\n- `{ id: string; created_at: string; kind: 'boot' | 'data'; name: string; project_id: string; region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1' | 'us-wdc-1'; size: number; status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'; tags: string[]; type: 'nvme' | 'abs'; updated_at: string; vm_id: string; vm_name: string; }`\n  Volume details.\n\n  - `id: string`\n  - `created_at: string`\n  - `kind: 'boot' | 'data'`\n  - `name: string`\n  - `project_id: string`\n  - `region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1' | 'us-wdc-1'`\n  - `size: number`\n  - `status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'`\n  - `tags: string[]`\n  - `type: 'nvme' | 'abs'`\n  - `updated_at: string`\n  - `vm_id: string`\n  - `vm_name: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\n// Automatically fetches more pages as needed.\nfor await (const volume of client.compute.volumes.list({ project_id: 'project_id' })) {\n  console.log(volume);\n}\n```",
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
      "{ id: string; created_at: string; kind: 'boot' | 'data'; name: string; project_id: string; region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1' | 'us-wdc-1'; size: number; status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'; tags: string[]; type: 'nvme' | 'abs'; updated_at: string; vm_id: string; vm_name: string; }",
    markdown:
      "## get\n\n`client.compute.volumes.get(volume_id: string): { id: string; created_at: string; kind: volume_kind; name: string; project_id: string; region: region_name; size: number; status: resource_status; tags: string[]; type: volume_type; updated_at: string; vm_id: string; vm_name: string; }`\n\n**get** `/v1/compute/volumes/{volume_id}`\n\nGet a Volume.\n\n### Parameters\n\n- `volume_id: string`\n\n### Returns\n\n- `{ id: string; created_at: string; kind: 'boot' | 'data'; name: string; project_id: string; region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1' | 'us-wdc-1'; size: number; status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'; tags: string[]; type: 'nvme' | 'abs'; updated_at: string; vm_id: string; vm_name: string; }`\n  Volume details.\n\n  - `id: string`\n  - `created_at: string`\n  - `kind: 'boot' | 'data'`\n  - `name: string`\n  - `project_id: string`\n  - `region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1' | 'us-wdc-1'`\n  - `size: number`\n  - `status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'`\n  - `tags: string[]`\n  - `type: 'nvme' | 'abs'`\n  - `updated_at: string`\n  - `vm_id: string`\n  - `vm_name: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\nconst volume = await client.compute.volumes.get('volume_id');\n\nconsole.log(volume);\n```",
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
      "region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1' | 'us-wdc-1';",
      'size: number;',
      "type: 'nvme' | 'abs';",
      'tags?: string[];',
      'vm_id?: string;',
    ],
    markdown:
      "## create\n\n`client.compute.volumes.availability.create(name: string, project_id: string, region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1' | 'us-wdc-1', size: number, type: 'nvme' | 'abs', tags?: string[], vm_id?: string): void`\n\n**post** `/v1/compute/volumes/availability`\n\nCheck Volume Create Availability\n\n### Parameters\n\n- `name: string`\n  Name of the Volume.\n\n- `project_id: string`\n  Project ID the Volume belongs to.\n\n- `region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1' | 'us-wdc-1'`\n  Region the resource is in.\n\n- `size: number`\n  Size of the Volume in GB.\n\n- `type: 'nvme' | 'abs'`\n  Type of the Volume.\n\n- `tags?: string[]`\n  Tags to attach to the Volume.\n\n- `vm_id?: string`\n  ID of the VM the Volume is attached to.\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\nawait client.compute.volumes.availability.create({\n  name: 'my-data-volume',\n  project_id: '123e4567-e89b-12d3-a456-426614174000',\n  region: 'us-wdc-1',\n  size: 100,\n  type: 'abs',\n})\n```",
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
      "region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1' | 'us-wdc-1';",
      'subnet_name: string;',
      'tags?: string[];',
    ],
    response:
      "{ id: string; created_at: string; kind: 'vm' | 'volume' | 'vpc' | 'firewall_rule' | 'nks_cluster' | 'nks_node_pool'; project_id: string; resource_id: string; status: 'pending' | 'running' | 'done' | 'failed' | 'unknown'; type: 'create' | 'update' | 'delete' | 'restart'; updated_at: string; }",
    markdown:
      "## create\n\n`client.networking.vpcs.create(name: string, project_id: string, region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1' | 'us-wdc-1', subnet_name: string, tags?: string[]): { id: string; created_at: string; kind: operation_kind; project_id: string; resource_id: string; status: operation_status; type: operation_type; updated_at: string; }`\n\n**post** `/v1/networking/vpcs`\n\nCreate a VPC\n\n### Parameters\n\n- `name: string`\n  Name of the VPC.\n\n- `project_id: string`\n  Project ID the VPC belongs to.\n\n- `region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1' | 'us-wdc-1'`\n  Region the resource is in.\n\n- `subnet_name: string`\n  Name of the subnet to create.\n\n- `tags?: string[]`\n  Tags to attach to the VPC.\n\n### Returns\n\n- `{ id: string; created_at: string; kind: 'vm' | 'volume' | 'vpc' | 'firewall_rule' | 'nks_cluster' | 'nks_node_pool'; project_id: string; resource_id: string; status: 'pending' | 'running' | 'done' | 'failed' | 'unknown'; type: 'create' | 'update' | 'delete' | 'restart'; updated_at: string; }`\n  Operation details.\n\n  - `id: string`\n  - `created_at: string`\n  - `kind: 'vm' | 'volume' | 'vpc' | 'firewall_rule' | 'nks_cluster' | 'nks_node_pool'`\n  - `project_id: string`\n  - `resource_id: string`\n  - `status: 'pending' | 'running' | 'done' | 'failed' | 'unknown'`\n  - `type: 'create' | 'update' | 'delete' | 'restart'`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\nconst operation = await client.networking.vpcs.create({\n  name: 'my-vpc',\n  project_id: '123e4567-e89b-12d3-a456-426614174000',\n  region: 'us-wdc-1',\n  subnet_name: 'my-subnet',\n});\n\nconsole.log(operation);\n```",
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
      "{ id: string; created_at: string; firewall_rule_ids: string[]; name: string; project_id: string; region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1' | 'us-wdc-1'; status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'; subnet: { id: string; cidr: string; created_at: string; name: string; updated_at: string; }; tags: string[]; updated_at: string; }",
    markdown:
      "## list\n\n`client.networking.vpcs.list(project_id: string, cursor?: string, limit?: number): { id: string; created_at: string; firewall_rule_ids: string[]; name: string; project_id: string; region: region_name; status: resource_status; subnet: subnet; tags: string[]; updated_at: string; }`\n\n**get** `/v1/networking/vpcs`\n\nList all VPCs\n\n### Parameters\n\n- `project_id: string`\n  Project ID of resources to request\n\n- `cursor?: string`\n  Pagination cursor returned by a previous request\n\n- `limit?: number`\n  Maximum number of items to return\n\n### Returns\n\n- `{ id: string; created_at: string; firewall_rule_ids: string[]; name: string; project_id: string; region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1' | 'us-wdc-1'; status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'; subnet: { id: string; cidr: string; created_at: string; name: string; updated_at: string; }; tags: string[]; updated_at: string; }`\n  VPC details.\n\n  - `id: string`\n  - `created_at: string`\n  - `firewall_rule_ids: string[]`\n  - `name: string`\n  - `project_id: string`\n  - `region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1' | 'us-wdc-1'`\n  - `status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'`\n  - `subnet: { id: string; cidr: string; created_at: string; name: string; updated_at: string; }`\n  - `tags: string[]`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\n// Automatically fetches more pages as needed.\nfor await (const vpc of client.networking.vpcs.list({ project_id: 'project_id' })) {\n  console.log(vpc);\n}\n```",
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
      "{ id: string; created_at: string; firewall_rule_ids: string[]; name: string; project_id: string; region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1' | 'us-wdc-1'; status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'; subnet: { id: string; cidr: string; created_at: string; name: string; updated_at: string; }; tags: string[]; updated_at: string; }",
    markdown:
      "## get\n\n`client.networking.vpcs.get(vpc_id: string): { id: string; created_at: string; firewall_rule_ids: string[]; name: string; project_id: string; region: region_name; status: resource_status; subnet: subnet; tags: string[]; updated_at: string; }`\n\n**get** `/v1/networking/vpcs/{vpc_id}`\n\nGet details about a VPC\n\n### Parameters\n\n- `vpc_id: string`\n\n### Returns\n\n- `{ id: string; created_at: string; firewall_rule_ids: string[]; name: string; project_id: string; region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1' | 'us-wdc-1'; status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'; subnet: { id: string; cidr: string; created_at: string; name: string; updated_at: string; }; tags: string[]; updated_at: string; }`\n  VPC details.\n\n  - `id: string`\n  - `created_at: string`\n  - `firewall_rule_ids: string[]`\n  - `name: string`\n  - `project_id: string`\n  - `region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1' | 'us-wdc-1'`\n  - `status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'`\n  - `subnet: { id: string; cidr: string; created_at: string; name: string; updated_at: string; }`\n  - `tags: string[]`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\nconst vpc = await client.networking.vpcs.get('vpc_id');\n\nconsole.log(vpc);\n```",
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
      "region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1' | 'us-wdc-1';",
      'subnet_name: string;',
      'tags?: string[];',
    ],
    markdown:
      "## create\n\n`client.networking.vpcs.availability.create(name: string, project_id: string, region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1' | 'us-wdc-1', subnet_name: string, tags?: string[]): void`\n\n**post** `/v1/networking/vpcs/availability`\n\nCheck if a VPC can be created\n\n### Parameters\n\n- `name: string`\n  Name of the VPC.\n\n- `project_id: string`\n  Project ID the VPC belongs to.\n\n- `region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1' | 'us-wdc-1'`\n  Region the resource is in.\n\n- `subnet_name: string`\n  Name of the subnet to create.\n\n- `tags?: string[]`\n  Tags to attach to the VPC.\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\nawait client.networking.vpcs.availability.create({\n  name: 'my-vpc',\n  project_id: '123e4567-e89b-12d3-a456-426614174000',\n  region: 'us-wdc-1',\n  subnet_name: 'my-subnet',\n})\n```",
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
      "region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1' | 'us-wdc-1';",
      'aws?: { account_id: string; region: string; };',
      'tags?: string[];',
    ],
    response:
      "{ id: string; created_at: string; kind: 'vm' | 'volume' | 'vpc' | 'firewall_rule' | 'nks_cluster' | 'nks_node_pool'; project_id: string; resource_id: string; status: 'pending' | 'running' | 'done' | 'failed' | 'unknown'; type: 'create' | 'update' | 'delete' | 'restart'; updated_at: string; }",
    markdown:
      "## create\n\n`client.networking.connect.connections.create(bandwidth_mbps: 50 | 200 | 500 | 1000 | 2000, cidrs: string[], name: string, project_id: string, provider_cidrs: string[], region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1' | 'us-wdc-1', aws?: { account_id: string; region: string; }, tags?: string[]): { id: string; created_at: string; kind: operation_kind; project_id: string; resource_id: string; status: operation_status; type: operation_type; updated_at: string; }`\n\n**post** `/v1/networking/connect/connections`\n\nCreate a Connect Connection\n\n### Parameters\n\n- `bandwidth_mbps: 50 | 200 | 500 | 1000 | 2000`\n  Connect Connection speed in Mbps\n\n- `cidrs: string[]`\n  CIDRs for the Connect Connection. Must be in network-aligned/canonical form.\n\n- `name: string`\n  Name of the Connect Connection\n\n- `project_id: string`\n  Project ID the Connect Connection belongs to\n\n- `provider_cidrs: string[]`\n  Provider CIDRs. Must be in network-aligned/canonical form.\n\n- `region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1' | 'us-wdc-1'`\n  Region the resource is in.\n\n- `aws?: { account_id: string; region: string; }`\n  AWS provider configuration\n  - `account_id: string`\n    AWS account id\n  - `region: string`\n    AWS region where the connection will be established\n\n- `tags?: string[]`\n  Tags to attach to the Connect Connection\n\n### Returns\n\n- `{ id: string; created_at: string; kind: 'vm' | 'volume' | 'vpc' | 'firewall_rule' | 'nks_cluster' | 'nks_node_pool'; project_id: string; resource_id: string; status: 'pending' | 'running' | 'done' | 'failed' | 'unknown'; type: 'create' | 'update' | 'delete' | 'restart'; updated_at: string; }`\n  Operation details.\n\n  - `id: string`\n  - `created_at: string`\n  - `kind: 'vm' | 'volume' | 'vpc' | 'firewall_rule' | 'nks_cluster' | 'nks_node_pool'`\n  - `project_id: string`\n  - `resource_id: string`\n  - `status: 'pending' | 'running' | 'done' | 'failed' | 'unknown'`\n  - `type: 'create' | 'update' | 'delete' | 'restart'`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\nconst operation = await client.networking.connect.connections.create({\n  bandwidth_mbps: 50,\n  cidrs: ['10.0.0.0/16'],\n  name: 'my-connect-connection',\n  project_id: '123e4567-e89b-12d3-a456-426614174000',\n  provider_cidrs: ['172.16.0.0/16'],\n  region: 'us-wdc-1',\n});\n\nconsole.log(operation);\n```",
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
      "{ id: string; asn: number; aws: { region: string; }; bandwidth_mbps: 50 | 200 | 500 | 1000 | 2000; cidrs: string[]; created_at: string; name: string; project_id: string; provider_asn: number; provider_cidrs: string[]; provider_router_ip: string; region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1' | 'us-wdc-1'; router_ip: string; status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'; tags: string[]; updated_at: string; }",
    markdown:
      "## list\n\n`client.networking.connect.connections.list(project_id: string, cursor?: string, limit?: number): { id: string; asn: number; aws: connect_connection_aws_config; bandwidth_mbps: connect_bandwidth_mbps; cidrs: string[]; created_at: string; name: string; project_id: string; provider_asn: number; provider_cidrs: string[]; provider_router_ip: string; region: region_name; router_ip: string; status: resource_status; tags: string[]; updated_at: string; }`\n\n**get** `/v1/networking/connect/connections`\n\nList all Connect Connections\n\n### Parameters\n\n- `project_id: string`\n  Project ID of resources to request\n\n- `cursor?: string`\n  Pagination cursor returned by a previous request\n\n- `limit?: number`\n  Maximum number of items to return\n\n### Returns\n\n- `{ id: string; asn: number; aws: { region: string; }; bandwidth_mbps: 50 | 200 | 500 | 1000 | 2000; cidrs: string[]; created_at: string; name: string; project_id: string; provider_asn: number; provider_cidrs: string[]; provider_router_ip: string; region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1' | 'us-wdc-1'; router_ip: string; status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'; tags: string[]; updated_at: string; }`\n  Connect Connection details.\n\n  - `id: string`\n  - `asn: number`\n  - `aws: { region: string; }`\n  - `bandwidth_mbps: 50 | 200 | 500 | 1000 | 2000`\n  - `cidrs: string[]`\n  - `created_at: string`\n  - `name: string`\n  - `project_id: string`\n  - `provider_asn: number`\n  - `provider_cidrs: string[]`\n  - `provider_router_ip: string`\n  - `region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1' | 'us-wdc-1'`\n  - `router_ip: string`\n  - `status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'`\n  - `tags: string[]`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\n// Automatically fetches more pages as needed.\nfor await (const connectConnection of client.networking.connect.connections.list({ project_id: 'project_id' })) {\n  console.log(connectConnection);\n}\n```",
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
      "{ id: string; asn: number; aws: { region: string; }; bandwidth_mbps: 50 | 200 | 500 | 1000 | 2000; cidrs: string[]; created_at: string; name: string; project_id: string; provider_asn: number; provider_cidrs: string[]; provider_router_ip: string; region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1' | 'us-wdc-1'; router_ip: string; status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'; tags: string[]; updated_at: string; }",
    markdown:
      "## get\n\n`client.networking.connect.connections.get(connection_id: string): { id: string; asn: number; aws: connect_connection_aws_config; bandwidth_mbps: connect_bandwidth_mbps; cidrs: string[]; created_at: string; name: string; project_id: string; provider_asn: number; provider_cidrs: string[]; provider_router_ip: string; region: region_name; router_ip: string; status: resource_status; tags: string[]; updated_at: string; }`\n\n**get** `/v1/networking/connect/connections/{connection_id}`\n\nGet Connect Connection details\n\n### Parameters\n\n- `connection_id: string`\n\n### Returns\n\n- `{ id: string; asn: number; aws: { region: string; }; bandwidth_mbps: 50 | 200 | 500 | 1000 | 2000; cidrs: string[]; created_at: string; name: string; project_id: string; provider_asn: number; provider_cidrs: string[]; provider_router_ip: string; region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1' | 'us-wdc-1'; router_ip: string; status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'; tags: string[]; updated_at: string; }`\n  Connect Connection details.\n\n  - `id: string`\n  - `asn: number`\n  - `aws: { region: string; }`\n  - `bandwidth_mbps: 50 | 200 | 500 | 1000 | 2000`\n  - `cidrs: string[]`\n  - `created_at: string`\n  - `name: string`\n  - `project_id: string`\n  - `provider_asn: number`\n  - `provider_cidrs: string[]`\n  - `provider_router_ip: string`\n  - `region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1' | 'us-wdc-1'`\n  - `router_ip: string`\n  - `status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'`\n  - `tags: string[]`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\nconst connectConnection = await client.networking.connect.connections.get('connection_id');\n\nconsole.log(connectConnection);\n```",
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
      "{ nirvana_region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1' | 'us-wdc-1'; provider: string; provider_region: string; }",
    markdown:
      "## list\n\n`client.networking.connect.routes.list(cursor?: string, limit?: number): { nirvana_region: region_name; provider: string; provider_region: string; }`\n\n**get** `/v1/networking/connect/routes`\n\nList all supported routes with regions for Connect.\n\n### Parameters\n\n- `cursor?: string`\n  Pagination cursor returned by a previous request\n\n- `limit?: number`\n  Maximum number of items to return\n\n### Returns\n\n- `{ nirvana_region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1' | 'us-wdc-1'; provider: string; provider_region: string; }`\n  Routes supported for Connect.\n\n  - `nirvana_region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1' | 'us-wdc-1'`\n  - `provider: string`\n  - `provider_region: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\n// Automatically fetches more pages as needed.\nfor await (const connectRoute of client.networking.connect.routes.list()) {\n  console.log(connectRoute);\n}\n```",
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
      "region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1' | 'us-wdc-1';",
      'vpc_id: string;',
      'tags?: string[];',
    ],
    response:
      "{ id: string; created_at: string; kind: 'vm' | 'volume' | 'vpc' | 'firewall_rule' | 'nks_cluster' | 'nks_node_pool'; project_id: string; resource_id: string; status: 'pending' | 'running' | 'done' | 'failed' | 'unknown'; type: 'create' | 'update' | 'delete' | 'restart'; updated_at: string; }",
    markdown:
      "## create\n\n`client.nks.clusters.create(name: string, project_id: string, region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1' | 'us-wdc-1', vpc_id: string, tags?: string[]): { id: string; created_at: string; kind: operation_kind; project_id: string; resource_id: string; status: operation_status; type: operation_type; updated_at: string; }`\n\n**post** `/v1/nks/clusters`\n\nCreate an NKS Cluster\n\n### Parameters\n\n- `name: string`\n  Name of the Cluster.\n\n- `project_id: string`\n  Project ID to create the Cluster in.\n\n- `region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1' | 'us-wdc-1'`\n  Region the resource is in.\n\n- `vpc_id: string`\n  ID of the VPC to use for the Cluster.\n\n- `tags?: string[]`\n  Tags to attach to the Cluster.\n\n### Returns\n\n- `{ id: string; created_at: string; kind: 'vm' | 'volume' | 'vpc' | 'firewall_rule' | 'nks_cluster' | 'nks_node_pool'; project_id: string; resource_id: string; status: 'pending' | 'running' | 'done' | 'failed' | 'unknown'; type: 'create' | 'update' | 'delete' | 'restart'; updated_at: string; }`\n  Operation details.\n\n  - `id: string`\n  - `created_at: string`\n  - `kind: 'vm' | 'volume' | 'vpc' | 'firewall_rule' | 'nks_cluster' | 'nks_node_pool'`\n  - `project_id: string`\n  - `resource_id: string`\n  - `status: 'pending' | 'running' | 'done' | 'failed' | 'unknown'`\n  - `type: 'create' | 'update' | 'delete' | 'restart'`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\nconst operation = await client.nks.clusters.create({\n  name: 'my-cluster',\n  project_id: '123e4567-e89b-12d3-a456-426614174000',\n  region: 'us-wdc-1',\n  vpc_id: '123e4567-e89b-12d3-a456-426614174000',\n});\n\nconsole.log(operation);\n```",
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
      "{ id: string; created_at: string; name: string; pool_ids: string[]; private_ip: string; project_id: string; public_ip: string; region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1' | 'us-wdc-1'; status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'; tags: string[]; updated_at: string; vpc_id: string; }",
    markdown:
      "## update\n\n`client.nks.clusters.update(cluster_id: string, name?: string, tags?: string[]): { id: string; created_at: string; name: string; pool_ids: string[]; private_ip: string; project_id: string; public_ip: string; region: region_name; status: resource_status; tags: string[]; updated_at: string; vpc_id: string; }`\n\n**patch** `/v1/nks/clusters/{cluster_id}`\n\nUpdate an NKS cluster\n\n### Parameters\n\n- `cluster_id: string`\n\n- `name?: string`\n  Name of the Cluster.\n\n- `tags?: string[]`\n  Tags to attach to the Cluster.\n\n### Returns\n\n- `{ id: string; created_at: string; name: string; pool_ids: string[]; private_ip: string; project_id: string; public_ip: string; region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1' | 'us-wdc-1'; status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'; tags: string[]; updated_at: string; vpc_id: string; }`\n  NKS Cluster details.\n\n  - `id: string`\n  - `created_at: string`\n  - `name: string`\n  - `pool_ids: string[]`\n  - `private_ip: string`\n  - `project_id: string`\n  - `public_ip: string`\n  - `region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1' | 'us-wdc-1'`\n  - `status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'`\n  - `tags: string[]`\n  - `updated_at: string`\n  - `vpc_id: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\nconst nksCluster = await client.nks.clusters.update('cluster_id');\n\nconsole.log(nksCluster);\n```",
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
      "{ id: string; created_at: string; name: string; pool_ids: string[]; private_ip: string; project_id: string; public_ip: string; region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1' | 'us-wdc-1'; status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'; tags: string[]; updated_at: string; vpc_id: string; }",
    markdown:
      "## list\n\n`client.nks.clusters.list(project_id: string, cursor?: string, limit?: number): { id: string; created_at: string; name: string; pool_ids: string[]; private_ip: string; project_id: string; public_ip: string; region: region_name; status: resource_status; tags: string[]; updated_at: string; vpc_id: string; }`\n\n**get** `/v1/nks/clusters`\n\nList all NKS clusters\n\n### Parameters\n\n- `project_id: string`\n  Project ID of resources to request\n\n- `cursor?: string`\n  Pagination cursor returned by a previous request\n\n- `limit?: number`\n  Maximum number of items to return\n\n### Returns\n\n- `{ id: string; created_at: string; name: string; pool_ids: string[]; private_ip: string; project_id: string; public_ip: string; region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1' | 'us-wdc-1'; status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'; tags: string[]; updated_at: string; vpc_id: string; }`\n  NKS Cluster details.\n\n  - `id: string`\n  - `created_at: string`\n  - `name: string`\n  - `pool_ids: string[]`\n  - `private_ip: string`\n  - `project_id: string`\n  - `public_ip: string`\n  - `region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1' | 'us-wdc-1'`\n  - `status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'`\n  - `tags: string[]`\n  - `updated_at: string`\n  - `vpc_id: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\n// Automatically fetches more pages as needed.\nfor await (const nksCluster of client.nks.clusters.list({ project_id: 'project_id' })) {\n  console.log(nksCluster);\n}\n```",
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
      "{ id: string; created_at: string; name: string; pool_ids: string[]; private_ip: string; project_id: string; public_ip: string; region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1' | 'us-wdc-1'; status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'; tags: string[]; updated_at: string; vpc_id: string; }",
    markdown:
      "## get\n\n`client.nks.clusters.get(cluster_id: string): { id: string; created_at: string; name: string; pool_ids: string[]; private_ip: string; project_id: string; public_ip: string; region: region_name; status: resource_status; tags: string[]; updated_at: string; vpc_id: string; }`\n\n**get** `/v1/nks/clusters/{cluster_id}`\n\nGet details about an NKS cluster\n\n### Parameters\n\n- `cluster_id: string`\n\n### Returns\n\n- `{ id: string; created_at: string; name: string; pool_ids: string[]; private_ip: string; project_id: string; public_ip: string; region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1' | 'us-wdc-1'; status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'; tags: string[]; updated_at: string; vpc_id: string; }`\n  NKS Cluster details.\n\n  - `id: string`\n  - `created_at: string`\n  - `name: string`\n  - `pool_ids: string[]`\n  - `private_ip: string`\n  - `project_id: string`\n  - `public_ip: string`\n  - `region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1' | 'us-wdc-1'`\n  - `status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'`\n  - `tags: string[]`\n  - `updated_at: string`\n  - `vpc_id: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\nconst nksCluster = await client.nks.clusters.get('cluster_id');\n\nconsole.log(nksCluster);\n```",
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
      "region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1' | 'us-wdc-1';",
      'vpc_id: string;',
      'tags?: string[];',
    ],
    markdown:
      "## create\n\n`client.nks.clusters.availability.create(name: string, project_id: string, region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1' | 'us-wdc-1', vpc_id: string, tags?: string[]): void`\n\n**post** `/v1/nks/clusters/availability`\n\nCheck if an NKS cluster can be created\n\n### Parameters\n\n- `name: string`\n  Name of the Cluster.\n\n- `project_id: string`\n  Project ID to create the Cluster in.\n\n- `region: 'us-sva-1' | 'us-sva-2' | 'us-chi-1' | 'us-wdc-1'`\n  Region the resource is in.\n\n- `vpc_id: string`\n  ID of the VPC to use for the Cluster.\n\n- `tags?: string[]`\n  Tags to attach to the Cluster.\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\nawait client.nks.clusters.availability.create({\n  name: 'my-cluster',\n  project_id: '123e4567-e89b-12d3-a456-426614174000',\n  region: 'us-wdc-1',\n  vpc_id: '123e4567-e89b-12d3-a456-426614174000',\n})\n```",
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
      "{ id: string; cpu_config: { vcpu: number; }; created_at: string; memory_config: { size: number; }; name: string; private_ip: string; status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'; updated_at: string; }",
    markdown:
      "## list\n\n`client.nks.clusters.controllers.list(cluster_id: string, cursor?: string, limit?: number): { id: string; cpu_config: nks_controller_cpu_config_response; created_at: string; memory_config: nks_controller_memory_config_response; name: string; private_ip: string; status: resource_status; updated_at: string; }`\n\n**get** `/v1/nks/clusters/{cluster_id}/controllers`\n\nList all controllers in an NKS cluster\n\n### Parameters\n\n- `cluster_id: string`\n\n- `cursor?: string`\n  Pagination cursor returned by a previous request\n\n- `limit?: number`\n  Maximum number of items to return\n\n### Returns\n\n- `{ id: string; cpu_config: { vcpu: number; }; created_at: string; memory_config: { size: number; }; name: string; private_ip: string; status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'; updated_at: string; }`\n  NKS controller details.\n\n  - `id: string`\n  - `cpu_config: { vcpu: number; }`\n  - `created_at: string`\n  - `memory_config: { size: number; }`\n  - `name: string`\n  - `private_ip: string`\n  - `status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\n// Automatically fetches more pages as needed.\nfor await (const nksController of client.nks.clusters.controllers.list('cluster_id')) {\n  console.log(nksController);\n}\n```",
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
      "{ id: string; cpu_config: { vcpu: number; }; created_at: string; memory_config: { size: number; }; name: string; private_ip: string; status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'; updated_at: string; }",
    markdown:
      "## get\n\n`client.nks.clusters.controllers.get(cluster_id: string, controller_id: string): { id: string; cpu_config: nks_controller_cpu_config_response; created_at: string; memory_config: nks_controller_memory_config_response; name: string; private_ip: string; status: resource_status; updated_at: string; }`\n\n**get** `/v1/nks/clusters/{cluster_id}/controllers/{controller_id}`\n\nGet details about an NKS controller\n\n### Parameters\n\n- `cluster_id: string`\n\n- `controller_id: string`\n\n### Returns\n\n- `{ id: string; cpu_config: { vcpu: number; }; created_at: string; memory_config: { size: number; }; name: string; private_ip: string; status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'; updated_at: string; }`\n  NKS controller details.\n\n  - `id: string`\n  - `cpu_config: { vcpu: number; }`\n  - `created_at: string`\n  - `memory_config: { size: number; }`\n  - `name: string`\n  - `private_ip: string`\n  - `status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\nconst nksController = await client.nks.clusters.controllers.get('controller_id', { cluster_id: 'cluster_id' });\n\nconsole.log(nksController);\n```",
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
      "{ id: string; cluster_id: string; created_at: string; namespace: string; private_ip: string; service_name: string; status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'; updated_at: string; }",
    markdown:
      "## list\n\n`client.nks.clusters.loadBalancers.list(cluster_id: string, cursor?: string, limit?: number): { id: string; cluster_id: string; created_at: string; namespace: string; private_ip: string; service_name: string; status: resource_status; updated_at: string; }`\n\n**get** `/v1/nks/clusters/{cluster_id}/load_balancers`\n\nList all load balancers in an NKS cluster\n\n### Parameters\n\n- `cluster_id: string`\n\n- `cursor?: string`\n  Pagination cursor returned by a previous request\n\n- `limit?: number`\n  Maximum number of items to return\n\n### Returns\n\n- `{ id: string; cluster_id: string; created_at: string; namespace: string; private_ip: string; service_name: string; status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'; updated_at: string; }`\n  NKS load balancer details.\n\n  - `id: string`\n  - `cluster_id: string`\n  - `created_at: string`\n  - `namespace: string`\n  - `private_ip: string`\n  - `service_name: string`\n  - `status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\n// Automatically fetches more pages as needed.\nfor await (const nksLoadBalancer of client.nks.clusters.loadBalancers.list('cluster_id')) {\n  console.log(nksLoadBalancer);\n}\n```",
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
      "{ id: string; cluster_id: string; created_at: string; namespace: string; private_ip: string; service_name: string; status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'; updated_at: string; }",
    markdown:
      "## get\n\n`client.nks.clusters.loadBalancers.get(cluster_id: string, load_balancer_id: string): { id: string; cluster_id: string; created_at: string; namespace: string; private_ip: string; service_name: string; status: resource_status; updated_at: string; }`\n\n**get** `/v1/nks/clusters/{cluster_id}/load_balancers/{load_balancer_id}`\n\nGet details about an NKS load balancer\n\n### Parameters\n\n- `cluster_id: string`\n\n- `load_balancer_id: string`\n\n### Returns\n\n- `{ id: string; cluster_id: string; created_at: string; namespace: string; private_ip: string; service_name: string; status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'; updated_at: string; }`\n  NKS load balancer details.\n\n  - `id: string`\n  - `cluster_id: string`\n  - `created_at: string`\n  - `namespace: string`\n  - `private_ip: string`\n  - `service_name: string`\n  - `status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\nconst nksLoadBalancer = await client.nks.clusters.loadBalancers.get('load_balancer_id', { cluster_id: 'cluster_id' });\n\nconsole.log(nksLoadBalancer);\n```",
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
      'node_config: { boot_volume: { size: number; type: volume_type; }; cpu_config: { vcpu: number; }; memory_config: { size: number; }; };',
      'node_count: number;',
      'tags?: string[];',
    ],
    response:
      "{ id: string; created_at: string; kind: 'vm' | 'volume' | 'vpc' | 'firewall_rule' | 'nks_cluster' | 'nks_node_pool'; project_id: string; resource_id: string; status: 'pending' | 'running' | 'done' | 'failed' | 'unknown'; type: 'create' | 'update' | 'delete' | 'restart'; updated_at: string; }",
    markdown:
      "## create\n\n`client.nks.clusters.pools.create(cluster_id: string, name: string, node_config: { boot_volume: nks_node_pool_boot_volume; cpu_config: nks_node_pool_cpu_config; memory_config: nks_node_pool_memory_config; }, node_count: number, tags?: string[]): { id: string; created_at: string; kind: operation_kind; project_id: string; resource_id: string; status: operation_status; type: operation_type; updated_at: string; }`\n\n**post** `/v1/nks/clusters/{cluster_id}/pools`\n\nCreate a node pool in an NKS cluster\n\n### Parameters\n\n- `cluster_id: string`\n\n- `name: string`\n  Name of the node pool.\n\n- `node_config: { boot_volume: { size: number; type: volume_type; }; cpu_config: { vcpu: number; }; memory_config: { size: number; }; }`\n  Node configuration.\n  - `boot_volume: { size: number; type: 'nvme' | 'abs'; }`\n    Boot volume configuration.\n  - `cpu_config: { vcpu: number; }`\n    CPU configuration.\n  - `memory_config: { size: number; }`\n    Memory configuration.\n\n- `node_count: number`\n  Number of nodes. Must be between 1 and 100.\n\n- `tags?: string[]`\n  Tags to attach to the node pool.\n\n### Returns\n\n- `{ id: string; created_at: string; kind: 'vm' | 'volume' | 'vpc' | 'firewall_rule' | 'nks_cluster' | 'nks_node_pool'; project_id: string; resource_id: string; status: 'pending' | 'running' | 'done' | 'failed' | 'unknown'; type: 'create' | 'update' | 'delete' | 'restart'; updated_at: string; }`\n  Operation details.\n\n  - `id: string`\n  - `created_at: string`\n  - `kind: 'vm' | 'volume' | 'vpc' | 'firewall_rule' | 'nks_cluster' | 'nks_node_pool'`\n  - `project_id: string`\n  - `resource_id: string`\n  - `status: 'pending' | 'running' | 'done' | 'failed' | 'unknown'`\n  - `type: 'create' | 'update' | 'delete' | 'restart'`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\nconst operation = await client.nks.clusters.pools.create('cluster_id', {\n  name: 'my-node-pool',\n  node_config: {\n  boot_volume: { size: 100, type: 'abs' },\n  cpu_config: { vcpu: 4 },\n  memory_config: { size: 8 },\n},\n  node_count: 3,\n});\n\nconsole.log(operation);\n```",
  },
  {
    name: 'update',
    endpoint: '/v1/nks/clusters/{cluster_id}/pools/{pool_id}',
    httpMethod: 'patch',
    summary: 'Update NKS Node Pool',
    description: 'Update an NKS node pool',
    stainlessPath: '(resource) nks.clusters.pools > (method) update',
    qualified: 'client.nks.clusters.pools.update',
    params: ['cluster_id: string;', 'pool_id: string;', 'name?: string;', 'tags?: string[];'],
    response:
      "{ id: string; cluster_id: string; created_at: string; name: string; node_config: { boot_volume: nks_node_pool_boot_volume_response; cpu_config: nks_node_pool_cpu_config_response; memory_config: nks_node_pool_memory_config_response; }; node_count: number; status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'; tags: string[]; updated_at: string; }",
    markdown:
      "## update\n\n`client.nks.clusters.pools.update(cluster_id: string, pool_id: string, name?: string, tags?: string[]): { id: string; cluster_id: string; created_at: string; name: string; node_config: nks_node_pool_node_config_response; node_count: number; status: resource_status; tags: string[]; updated_at: string; }`\n\n**patch** `/v1/nks/clusters/{cluster_id}/pools/{pool_id}`\n\nUpdate an NKS node pool\n\n### Parameters\n\n- `cluster_id: string`\n\n- `pool_id: string`\n\n- `name?: string`\n  Name of the node pool.\n\n- `tags?: string[]`\n  Tags to attach to the node pool.\n\n### Returns\n\n- `{ id: string; cluster_id: string; created_at: string; name: string; node_config: { boot_volume: nks_node_pool_boot_volume_response; cpu_config: nks_node_pool_cpu_config_response; memory_config: nks_node_pool_memory_config_response; }; node_count: number; status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'; tags: string[]; updated_at: string; }`\n  NKS node pool details.\n\n  - `id: string`\n  - `cluster_id: string`\n  - `created_at: string`\n  - `name: string`\n  - `node_config: { boot_volume: { size: number; type: volume_type; }; cpu_config: { vcpu: number; }; memory_config: { size: number; }; }`\n  - `node_count: number`\n  - `status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'`\n  - `tags: string[]`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\nconst nksNodePool = await client.nks.clusters.pools.update('pool_id', { cluster_id: 'cluster_id' });\n\nconsole.log(nksNodePool);\n```",
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
      "{ id: string; cluster_id: string; created_at: string; name: string; node_config: { boot_volume: nks_node_pool_boot_volume_response; cpu_config: nks_node_pool_cpu_config_response; memory_config: nks_node_pool_memory_config_response; }; node_count: number; status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'; tags: string[]; updated_at: string; }",
    markdown:
      "## list\n\n`client.nks.clusters.pools.list(cluster_id: string, cursor?: string, limit?: number): { id: string; cluster_id: string; created_at: string; name: string; node_config: nks_node_pool_node_config_response; node_count: number; status: resource_status; tags: string[]; updated_at: string; }`\n\n**get** `/v1/nks/clusters/{cluster_id}/pools`\n\nList all node pools in an NKS cluster\n\n### Parameters\n\n- `cluster_id: string`\n\n- `cursor?: string`\n  Pagination cursor returned by a previous request\n\n- `limit?: number`\n  Maximum number of items to return\n\n### Returns\n\n- `{ id: string; cluster_id: string; created_at: string; name: string; node_config: { boot_volume: nks_node_pool_boot_volume_response; cpu_config: nks_node_pool_cpu_config_response; memory_config: nks_node_pool_memory_config_response; }; node_count: number; status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'; tags: string[]; updated_at: string; }`\n  NKS node pool details.\n\n  - `id: string`\n  - `cluster_id: string`\n  - `created_at: string`\n  - `name: string`\n  - `node_config: { boot_volume: { size: number; type: volume_type; }; cpu_config: { vcpu: number; }; memory_config: { size: number; }; }`\n  - `node_count: number`\n  - `status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'`\n  - `tags: string[]`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\n// Automatically fetches more pages as needed.\nfor await (const nksNodePool of client.nks.clusters.pools.list('cluster_id')) {\n  console.log(nksNodePool);\n}\n```",
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
      "{ id: string; cluster_id: string; created_at: string; name: string; node_config: { boot_volume: nks_node_pool_boot_volume_response; cpu_config: nks_node_pool_cpu_config_response; memory_config: nks_node_pool_memory_config_response; }; node_count: number; status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'; tags: string[]; updated_at: string; }",
    markdown:
      "## get\n\n`client.nks.clusters.pools.get(cluster_id: string, pool_id: string): { id: string; cluster_id: string; created_at: string; name: string; node_config: nks_node_pool_node_config_response; node_count: number; status: resource_status; tags: string[]; updated_at: string; }`\n\n**get** `/v1/nks/clusters/{cluster_id}/pools/{pool_id}`\n\nGet details about an NKS node pool\n\n### Parameters\n\n- `cluster_id: string`\n\n- `pool_id: string`\n\n### Returns\n\n- `{ id: string; cluster_id: string; created_at: string; name: string; node_config: { boot_volume: nks_node_pool_boot_volume_response; cpu_config: nks_node_pool_cpu_config_response; memory_config: nks_node_pool_memory_config_response; }; node_count: number; status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'; tags: string[]; updated_at: string; }`\n  NKS node pool details.\n\n  - `id: string`\n  - `cluster_id: string`\n  - `created_at: string`\n  - `name: string`\n  - `node_config: { boot_volume: { size: number; type: volume_type; }; cpu_config: { vcpu: number; }; memory_config: { size: number; }; }`\n  - `node_count: number`\n  - `status: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error'`\n  - `tags: string[]`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\nconst nksNodePool = await client.nks.clusters.pools.get('pool_id', { cluster_id: 'cluster_id' });\n\nconsole.log(nksNodePool);\n```",
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
      'node_config: { boot_volume: { size: number; type: volume_type; }; cpu_config: { vcpu: number; }; memory_config: { size: number; }; };',
      'node_count: number;',
      'tags?: string[];',
    ],
    markdown:
      "## create\n\n`client.nks.clusters.pools.availability.create(cluster_id: string, name: string, node_config: { boot_volume: nks_node_pool_boot_volume; cpu_config: nks_node_pool_cpu_config; memory_config: nks_node_pool_memory_config; }, node_count: number, tags?: string[]): void`\n\n**post** `/v1/nks/clusters/{cluster_id}/pools/availability`\n\nCheck if a node pool can be created in an NKS cluster\n\n### Parameters\n\n- `cluster_id: string`\n\n- `name: string`\n  Name of the node pool.\n\n- `node_config: { boot_volume: { size: number; type: volume_type; }; cpu_config: { vcpu: number; }; memory_config: { size: number; }; }`\n  Node configuration.\n  - `boot_volume: { size: number; type: 'nvme' | 'abs'; }`\n    Boot volume configuration.\n  - `cpu_config: { vcpu: number; }`\n    CPU configuration.\n  - `memory_config: { size: number; }`\n    Memory configuration.\n\n- `node_count: number`\n  Number of nodes. Must be between 1 and 100.\n\n- `tags?: string[]`\n  Tags to attach to the node pool.\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\nawait client.nks.clusters.pools.availability.create('cluster_id', {\n  name: 'my-node-pool',\n  node_config: {\n  boot_volume: { size: 100, type: 'abs' },\n  cpu_config: { vcpu: 4 },\n  memory_config: { size: 8 },\n},\n  node_count: 3,\n})\n```",
  },
  {
    name: 'update',
    endpoint: '/v1/nks/clusters/{cluster_id}/pools/{pool_id}/availability',
    httpMethod: 'patch',
    summary: 'Check Update NKS Node Pool Availability',
    description: 'Check if an NKS node pool can be updated',
    stainlessPath: '(resource) nks.clusters.pools.availability > (method) update',
    qualified: 'client.nks.clusters.pools.availability.update',
    params: ['cluster_id: string;', 'pool_id: string;', 'name?: string;', 'tags?: string[];'],
    markdown:
      "## update\n\n`client.nks.clusters.pools.availability.update(cluster_id: string, pool_id: string, name?: string, tags?: string[]): void`\n\n**patch** `/v1/nks/clusters/{cluster_id}/pools/{pool_id}/availability`\n\nCheck if an NKS node pool can be updated\n\n### Parameters\n\n- `cluster_id: string`\n\n- `pool_id: string`\n\n- `name?: string`\n  Name of the node pool.\n\n- `tags?: string[]`\n  Tags to attach to the node pool.\n\n### Example\n\n```typescript\nimport NirvanaLabs from '@nirvana-labs/nirvana';\n\nconst client = new NirvanaLabs();\n\nawait client.nks.clusters.pools.availability.update('pool_id', { cluster_id: 'cluster_id' })\n```",
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
    fuzzy: 0.2,
    boost: {
      name: 3,
      endpoint: 2,
      summary: 2,
      qualified: 2,
      content: 1,
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
    if (opts?.docsDir) {
      await instance.loadDocsDirectory(opts.docsDir);
    }
    return instance;
  }

  // Note: Language is accepted for interface consistency with remote search, but currently has no
  // effect since this local search only supports TypeScript docs.
  search(props: {
    query: string;
    language?: string;
    detail?: string;
    maxResults?: number;
    maxLength?: number;
  }): SearchResult {
    const { query, detail = 'default', maxResults = 5, maxLength = 100_000 } = props;

    const useMarkdown = detail === 'verbose' || detail === 'high';

    // Search both indices and merge results by score
    const methodHits = this.methodIndex
      .search(query)
      .map((hit) => ({ ...hit, _kind: 'http_method' as const }));
    const proseHits = this.proseIndex.search(query).map((hit) => ({ ...hit, _kind: 'prose' as const }));
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
          fullResults.push({
            method: m.qualified,
            summary: m.summary,
            description: m.description,
            endpoint: `${m.httpMethod.toUpperCase()} ${m.endpoint}`,
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
          this.indexProse(content, file.name);
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
