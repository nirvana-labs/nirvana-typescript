// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@nirvana-labs/nirvana-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import NirvanaLabs from '@nirvana-labs/nirvana';

export const metadata: Metadata = {
  resource: 'vektor.executions.steps',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/vektor/executions/{execution_id}/steps/{step_id}/sign',
  operationId: 'step_sign',
};

export const tool: Tool = {
  name: 'sign_executions_vektor_steps',
  description: 'Sign an EVM transaction step',
  inputSchema: {
    type: 'object',
    properties: {
      execution_id: {
        type: 'string',
      },
      step_id: {
        type: 'string',
      },
      signed_payload: {
        $ref: '#/$defs/hex_string',
      },
    },
    required: ['execution_id', 'step_id', 'signed_payload'],
    $defs: {
      hex_string: {
        type: 'string',
        title: 'HexString',
        description: 'A hex string starting with 0x',
      },
    },
  },
  annotations: {},
};

export const handler = async (client: NirvanaLabs, args: Record<string, unknown> | undefined) => {
  const { step_id, ...body } = args as any;
  const response = await client.vektor.executions.steps.sign(step_id, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
