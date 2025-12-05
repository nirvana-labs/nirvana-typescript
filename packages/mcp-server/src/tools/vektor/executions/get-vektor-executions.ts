// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from '@nirvana-labs/nirvana-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import NirvanaLabs from '@nirvana-labs/nirvana';

export const metadata: Metadata = {
  resource: 'vektor.executions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/vektor/executions/{execution_id}',
  operationId: 'execution_get',
};

export const tool: Tool = {
  name: 'get_vektor_executions',
  description: 'Get an execution',
  inputSchema: {
    type: 'object',
    properties: {
      execution_id: {
        type: 'string',
      },
    },
    required: ['execution_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: NirvanaLabs, args: Record<string, unknown> | undefined) => {
  const { execution_id, ...body } = args as any;
  try {
    return asTextContentResult(await client.vektor.executions.get(execution_id));
  } catch (error) {
    if (error instanceof NirvanaLabs.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
