// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@nirvana-labs/nirvana-mcp/filtering';
import { Metadata, asTextContentResult } from '@nirvana-labs/nirvana-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import NirvanaLabs from '@nirvana-labs/nirvana';

export const metadata: Metadata = {
  resource: 'api_keys',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/api_keys',
  operationId: 'list_api_keys',
};

export const tool: Tool = {
  name: 'list_api_keys',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList all API keys for the authenticated user\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/api_key_list',\n  $defs: {\n    api_key_list: {\n      type: 'object',\n      properties: {\n        items: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/api_key'\n          }\n        },\n        pagination: {\n          $ref: '#/$defs/pagination'\n        }\n      },\n      required: [        'items'\n      ]\n    },\n    api_key: {\n      type: 'object',\n      description: 'API Key response.',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'API Key ID.'\n        },\n        created_at: {\n          type: 'string',\n          description: 'When the API Key was created.',\n          format: 'date-time'\n        },\n        expires_at: {\n          type: 'string',\n          description: 'When the API Key expires and is no longer valid.',\n          format: 'date-time'\n        },\n        name: {\n          type: 'string',\n          description: 'API Key name.'\n        },\n        status: {\n          type: 'string',\n          description: 'Status of the API Key.',\n          enum: [            'active',\n            'inactive',\n            'expired'\n          ]\n        },\n        tags: {\n          type: 'array',\n          description: 'Tags to attach to the API Key.',\n          items: {\n            type: 'string'\n          }\n        },\n        updated_at: {\n          type: 'string',\n          description: 'When the API Key was updated.',\n          format: 'date-time'\n        },\n        key: {\n          type: 'string',\n          description: 'API Key. Only returned on creation.'\n        },\n        starts_at: {\n          type: 'string',\n          description: 'When the API Key starts to be valid.',\n          format: 'date-time'\n        }\n      },\n      required: [        'id',\n        'created_at',\n        'expires_at',\n        'name',\n        'status',\n        'tags',\n        'updated_at'\n      ]\n    },\n    pagination: {\n      type: 'object',\n      description: 'Pagination response details.',\n      properties: {\n        next_cursor: {\n          type: 'string'\n        },\n        previous_cursor: {\n          type: 'string'\n        },\n        total_count: {\n          type: 'integer'\n        }\n      },\n      required: [        'next_cursor',\n        'previous_cursor',\n        'total_count'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      cursor: {
        type: 'string',
        description: 'Pagination cursor returned by a previous request',
      },
      limit: {
        type: 'integer',
        description: 'Maximum number of items to return',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: NirvanaLabs, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  const response = await client.apiKeys.list(body).asResponse();
  return asTextContentResult(await maybeFilter(jq_filter, await response.json()));
};

export default { metadata, tool, handler };
