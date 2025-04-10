// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import NirvanaLabs from '@nirvana-labs/nirvana';

export const metadata: Metadata = {
  resource: 'api_keys',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_api_keys',
  description: 'Create a new API key',
  inputSchema: {
    type: 'object',
    properties: {
      expires_at: {
        type: 'string',
        description: 'Time after which the API key is not valid.',
        format: 'date-time',
      },
      name: {
        type: 'string',
        description: 'API key name.',
      },
      starts_at: {
        type: 'string',
        description: 'Time before which the API key is not valid.',
        format: 'date-time',
      },
    },
  },
};

export const handler = (client: NirvanaLabs, args: any) => {
  const { ...body } = args;
  return client.apiKeys.create(body);
};

export default { metadata, tool, handler };
