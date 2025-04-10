// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import NirvanaLabs from '@nirvana-labs/nirvana';

export const metadata: Metadata = {
  resource: 'user',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_user',
  description: 'Get details about an authenticated user',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = (client: NirvanaLabs, args: any) => {
  const {} = args;
  return client.user.get();
};

export default { metadata, tool, handler };
