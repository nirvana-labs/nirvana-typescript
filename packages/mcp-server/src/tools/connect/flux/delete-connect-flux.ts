// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@nirvana-labs/nirvana-mcp/filtering';
import { Metadata, asTextContentResult } from '@nirvana-labs/nirvana-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import NirvanaLabs from '@nirvana-labs/nirvana';

export const metadata: Metadata = {
  resource: 'connect.flux',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v1/connect/flux/{flux_id}',
  operationId: 'delete_connect_flux',
};

export const tool: Tool = {
  name: 'delete_connect_flux',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nDelete Connect Flux\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/operation',\n  $defs: {\n    operation: {\n      type: 'object',\n      description: 'Operation details.',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Unique identifier for the Operation.'\n        },\n        created_at: {\n          type: 'string',\n          description: 'When the Operation was created.',\n          format: 'date-time'\n        },\n        kind: {\n          $ref: '#/$defs/operation_kind'\n        },\n        resource_id: {\n          type: 'string',\n          description: 'ID of the resource that the Operation is acting on.'\n        },\n        status: {\n          $ref: '#/$defs/operation_status'\n        },\n        type: {\n          $ref: '#/$defs/operation_type'\n        },\n        updated_at: {\n          type: 'string',\n          description: 'When the Operation was updated.',\n          format: 'date-time'\n        }\n      },\n      required: [        'id',\n        'created_at',\n        'kind',\n        'resource_id',\n        'status',\n        'type',\n        'updated_at'\n      ]\n    },\n    operation_kind: {\n      type: 'string',\n      description: 'Kind of Operation.',\n      enum: [        'vm',\n        'volume',\n        'vpc',\n        'firewall_rule'\n      ]\n    },\n    operation_status: {\n      type: 'string',\n      description: 'Status of the Operation.',\n      enum: [        'pending',\n        'running',\n        'done',\n        'failed',\n        'unknown'\n      ]\n    },\n    operation_type: {\n      type: 'string',\n      description: 'Type of Operation.',\n      enum: [        'create',\n        'update',\n        'delete',\n        'restart'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      flux_id: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['flux_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: NirvanaLabs, args: Record<string, unknown> | undefined) => {
  const { flux_id, jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.connect.flux.delete(flux_id)));
};

export default { metadata, tool, handler };
