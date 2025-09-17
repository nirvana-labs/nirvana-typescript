// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@nirvana-labs/nirvana-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import NirvanaLabs from '@nirvana-labs/nirvana';

export const metadata: Metadata = {
  resource: 'api_keys',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v1/api_keys/{api_key_id}',
  operationId: 'delete_api_key',
};

export const tool: Tool = {
  name: 'delete_api_keys',
  description: 'Delete an API key',
  inputSchema: {
    type: 'object',
    properties: {
      api_key_id: {
        type: 'string',
      },
    },
    required: ['api_key_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: NirvanaLabs, args: Record<string, unknown> | undefined) => {
  const { api_key_id, ...body } = args as any;
  const response = await client.apiKeys.delete(api_key_id).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
