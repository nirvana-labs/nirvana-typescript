// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@nirvana-labs/nirvana-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import NirvanaLabs from '@nirvana-labs/nirvana';

export const metadata: Metadata = {
  resource: 'vektor.executions.steps',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/vektor/executions/{execution_id}/steps/{step_id}',
  operationId: 'execution_get_step',
};

export const tool: Tool = {
  name: 'get_executions_vektor_steps',
  description: 'Get a step of an execution',
  inputSchema: {
    type: 'object',
    properties: {
      execution_id: {
        type: 'string',
      },
      step_id: {
        type: 'string',
      },
    },
    required: ['execution_id', 'step_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: NirvanaLabs, args: Record<string, unknown> | undefined) => {
  const { step_id, ...body } = args as any;
  return asTextContentResult(await client.vektor.executions.steps.get(step_id, body));
};

export default { metadata, tool, handler };
