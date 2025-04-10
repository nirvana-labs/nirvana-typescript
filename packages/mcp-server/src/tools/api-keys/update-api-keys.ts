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
  name: 'update_api_keys',
  description: "Update an API key's name",
  inputSchema: {
    type: 'object',
    properties: {
      api_key_id: {
        type: 'string',
      },
      name: {
        type: 'string',
        description: 'API key name.',
      },
    },
  },
};

export const handler = (client: NirvanaLabs, args: any) => {
  const { api_key_id, ...body } = args;
  return client.apiKeys.update(api_key_id, body);
};

export default { metadata, tool, handler };
