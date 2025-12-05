// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@nirvana-labs/nirvana-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@nirvana-labs/nirvana-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import NirvanaLabs from '@nirvana-labs/nirvana';

export const metadata: Metadata = {
  resource: 'api_keys',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/v1/api_keys/{api_key_id}',
  operationId: 'update_api_key',
};

export const tool: Tool = {
  name: 'update_api_keys',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdate an existing API key\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/api_key',\n  $defs: {\n    api_key: {\n      type: 'object',\n      description: 'API Key response.',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'API Key ID.'\n        },\n        created_at: {\n          type: 'string',\n          description: 'When the API Key was created.',\n          format: 'date-time'\n        },\n        expires_at: {\n          type: 'string',\n          description: 'When the API Key expires and is no longer valid.',\n          format: 'date-time'\n        },\n        name: {\n          type: 'string',\n          description: 'API Key name.'\n        },\n        status: {\n          type: 'string',\n          description: 'Status of the API Key.',\n          enum: [            'active',\n            'inactive',\n            'expired'\n          ]\n        },\n        tags: {\n          type: 'array',\n          description: 'Tags to attach to the API Key.',\n          items: {\n            type: 'string'\n          }\n        },\n        updated_at: {\n          type: 'string',\n          description: 'When the API Key was updated.',\n          format: 'date-time'\n        },\n        key: {\n          type: 'string',\n          description: 'API Key. Only returned on creation.'\n        },\n        starts_at: {\n          type: 'string',\n          description: 'When the API Key starts to be valid.',\n          format: 'date-time'\n        }\n      },\n      required: [        'id',\n        'created_at',\n        'expires_at',\n        'name',\n        'status',\n        'tags',\n        'updated_at'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      api_key_id: {
        type: 'string',
      },
      name: {
        type: 'string',
        description: 'API Key name.',
      },
      tags: {
        type: 'array',
        description: 'Tags to attach to the API Key.',
        items: {
          type: 'string',
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['api_key_id'],
  },
  annotations: {},
};

export const handler = async (client: NirvanaLabs, args: Record<string, unknown> | undefined) => {
  const { api_key_id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.apiKeys.update(api_key_id, body)));
  } catch (error) {
    if (error instanceof NirvanaLabs.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
