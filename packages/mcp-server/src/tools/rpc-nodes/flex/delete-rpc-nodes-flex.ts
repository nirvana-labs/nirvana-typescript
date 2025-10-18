// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@nirvana-labs/nirvana-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import NirvanaLabs from '@nirvana-labs/nirvana';

export const metadata: Metadata = {
  resource: 'rpc_nodes.flex',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v1/rpc_nodes/flex/{node_id}',
  operationId: 'delete_rpc_nodes_flex',
};

export const tool: Tool = {
  name: 'delete_rpc_nodes_flex',
  description: 'Delete an RPC Node Flex',
  inputSchema: {
    type: 'object',
    properties: {
      node_id: {
        type: 'string',
      },
    },
    required: ['node_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: NirvanaLabs, args: Record<string, unknown> | undefined) => {
  const { node_id, ...body } = args as any;
  const response = await client.rpcNodes.flex.delete(node_id).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
