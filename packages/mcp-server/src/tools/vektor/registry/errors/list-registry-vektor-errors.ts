// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@nirvana-labs/nirvana-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@nirvana-labs/nirvana-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import NirvanaLabs from '@nirvana-labs/nirvana';

export const metadata: Metadata = {
  resource: 'vektor.registry.errors',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/vektor/registry/errors',
  operationId: 'registry_errors_list',
};

export const tool: Tool = {
  name: 'list_registry_vektor_errors',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nA list with one example of each error type\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/error_list_output',\n  $defs: {\n    error_list_output: {\n      type: 'object',\n      title: 'ErrorListOutput',\n      properties: {\n        items: {\n          $ref: '#/$defs/vektor_error_list'\n        }\n      },\n      required: [        'items'\n      ]\n    },\n    vektor_error_list: {\n      type: 'array',\n      title: 'VektorErrorList',\n      description: 'A list of vektor errors',\n      items: {\n        $ref: '#/$defs/vektor_error'\n      }\n    },\n    vektor_error: {\n      type: 'object',\n      title: 'VektorError',\n      description: 'Vektor error',\n      properties: {\n        context: {\n          type: 'object',\n          title: 'VektorErrorContext',\n          description: 'Error context',\n          properties: {\n            parameters: {\n              type: 'object',\n              description: 'Error parameters',\n              additionalProperties: true\n            }\n          },\n          required: [            'parameters'\n          ]\n        },\n        message: {\n          type: 'string',\n          description: 'Error message'\n        },\n        request_id: {\n          type: 'string',\n          description: 'Request ID'\n        },\n        resource: {\n          type: 'string',\n          description: 'Error resource'\n        },\n        timestamp: {\n          $ref: '#/$defs/timestamp'\n        },\n        type: {\n          type: 'string',\n          description: 'Error type'\n        }\n      },\n      required: [        'context',\n        'message',\n        'request_id',\n        'resource',\n        'timestamp',\n        'type'\n      ]\n    },\n    timestamp: {\n      type: 'string',\n      title: 'Timestamp',\n      description: 'ISO8601 Timestamp'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      errors: {
        type: 'array',
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
    required: [],
  },
  annotations: {},
};

export const handler = async (client: NirvanaLabs, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.vektor.registry.errors.list(body)));
  } catch (error) {
    if (error instanceof NirvanaLabs.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
