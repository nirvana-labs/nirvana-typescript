// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@nirvana-labs/nirvana-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import NirvanaLabs from '@nirvana-labs/nirvana';

export const metadata: Metadata = {
  resource: 'vektor.executions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/vektor/executions',
  operationId: 'execution_list',
};

export const tool: Tool = {
  name: 'list_vektor_executions',
  description: 'Get a list of executions',
  inputSchema: {
    type: 'object',
    properties: {},
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: NirvanaLabs, args: Record<string, unknown> | undefined) => {
  return asTextContentResult(await client.vektor.executions.list());
};

export default { metadata, tool, handler };
