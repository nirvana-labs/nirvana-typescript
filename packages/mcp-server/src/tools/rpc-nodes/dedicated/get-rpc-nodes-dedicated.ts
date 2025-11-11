// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@nirvana-labs/nirvana-mcp/filtering';
import { Metadata, asTextContentResult } from '@nirvana-labs/nirvana-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import NirvanaLabs from '@nirvana-labs/nirvana';

export const metadata: Metadata = {
  resource: 'rpc_nodes.dedicated',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/rpc_nodes/dedicated/{node_id}',
  operationId: 'get_rpc_nodes_dedicated',
};

export const tool: Tool = {
  name: 'get_rpc_nodes_dedicated',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet details about an RPC Node Dedicated\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/dedicated',\n  $defs: {\n    dedicated: {\n      type: 'object',\n      description: 'RPC Node Dedicated details.',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Unique identifier for the RPC Node Dedicated.'\n        },\n        blockchain: {\n          type: 'string',\n          description: 'Blockchain type.'\n        },\n        created_at: {\n          type: 'string',\n          description: 'When the RPC Node Dedicated was created.',\n          format: 'date-time'\n        },\n        endpoint: {\n          type: 'string',\n          description: 'RPC endpoint URL.'\n        },\n        name: {\n          type: 'string',\n          description: 'Name of the RPC Node Dedicated.'\n        },\n        network: {\n          type: 'string',\n          description: 'Network type (e.g., mainnet, testnet).'\n        },\n        project_id: {\n          type: 'string',\n          description: 'Project identifier associated with the RPC Node Dedicated.'\n        },\n        tags: {\n          type: 'array',\n          description: 'Tags to attach to the RPC Node Dedicated.',\n          items: {\n            type: 'string'\n          }\n        },\n        updated_at: {\n          type: 'string',\n          description: 'When the RPC Node Dedicated was updated.',\n          format: 'date-time'\n        }\n      },\n      required: [        'id',\n        'blockchain',\n        'created_at',\n        'endpoint',\n        'name',\n        'network',\n        'project_id',\n        'tags',\n        'updated_at'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      node_id: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['node_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: NirvanaLabs, args: Record<string, unknown> | undefined) => {
  const { node_id, jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.rpcNodes.dedicated.get(node_id)));
};

export default { metadata, tool, handler };
