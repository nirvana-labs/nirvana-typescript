// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@nirvana-labs/nirvana-mcp/filtering';
import { Metadata, asTextContentResult } from '@nirvana-labs/nirvana-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import NirvanaLabs from '@nirvana-labs/nirvana';

export const metadata: Metadata = {
  resource: 'rpc_nodes.flex.blockchains',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/rpc_nodes/flex/blockchains',
  operationId: 'list_flex_blockchains',
};

export const tool: Tool = {
  name: 'list_flex_rpc_nodes_blockchains',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList all Flex Blockchains\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/flex_blockchain_list',\n  $defs: {\n    flex_blockchain_list: {\n      type: 'object',\n      properties: {\n        items: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/flex_blockchain'\n          }\n        },\n        pagination: {\n          $ref: '#/$defs/pagination'\n        }\n      },\n      required: [        'items'\n      ]\n    },\n    flex_blockchain: {\n      type: 'object',\n      description: 'Blockchain supported by the RPC Node Flex.',\n      properties: {\n        blockchain: {\n          type: 'string',\n          description: 'Blockchain type.'\n        },\n        network: {\n          type: 'string',\n          description: 'Network type (e.g., mainnet, testnet).'\n        }\n      },\n      required: [        'blockchain',\n        'network'\n      ]\n    },\n    pagination: {\n      type: 'object',\n      description: 'Pagination response details.',\n      properties: {\n        next_cursor: {\n          type: 'string'\n        },\n        previous_cursor: {\n          type: 'string'\n        },\n        total_count: {\n          type: 'integer'\n        }\n      },\n      required: [        'next_cursor',\n        'previous_cursor',\n        'total_count'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
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
  const { jq_filter } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.rpcNodes.flex.blockchains.list()));
};

export default { metadata, tool, handler };
