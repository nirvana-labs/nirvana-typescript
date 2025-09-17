// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@nirvana-labs/nirvana-mcp/filtering';
import { Metadata, asTextContentResult } from '@nirvana-labs/nirvana-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import NirvanaLabs from '@nirvana-labs/nirvana';

export const metadata: Metadata = {
  resource: 'api_keys',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/api_keys',
  operationId: 'create_api_key',
};

export const tool: Tool = {
  name: 'create_api_keys',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate a new API key\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/api_key',\n  $defs: {\n    api_key: {\n      type: 'object',\n      description: 'API key response.',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'API key ID.'\n        },\n        created_at: {\n          type: 'string',\n          description: 'When the API key was created.',\n          format: 'date-time'\n        },\n        expires_at: {\n          type: 'string',\n          description: 'When the API key expires and is no longer valid.',\n          format: 'date-time'\n        },\n        name: {\n          type: 'string',\n          description: 'API key name.'\n        },\n        status: {\n          type: 'string',\n          description: 'Status of the API key.',\n          enum: [            'active',\n            'inactive',\n            'expired'\n          ]\n        },\n        updated_at: {\n          type: 'string',\n          description: 'When the API key was updated.',\n          format: 'date-time'\n        },\n        key: {\n          type: 'string',\n          description: 'API key. Only returned on creation.'\n        },\n        starts_at: {\n          type: 'string',\n          description: 'When the API key starts to be valid.',\n          format: 'date-time'\n        }\n      },\n      required: [        'id',\n        'created_at',\n        'expires_at',\n        'name',\n        'status',\n        'updated_at'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      expires_at: {
        type: 'string',
        description: 'When the API key expires and is no longer valid.',
        format: 'date-time',
      },
      name: {
        type: 'string',
        description: 'API key name.',
      },
      starts_at: {
        type: 'string',
        description: 'When the API key starts to be valid.',
        format: 'date-time',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['expires_at', 'name'],
  },
  annotations: {},
};

export const handler = async (client: NirvanaLabs, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.apiKeys.create(body)));
};

export default { metadata, tool, handler };
