// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import NirvanaLabs from '@nirvana-labs/nirvana';

export const metadata: Metadata = {
  resource: 'networking.vpcs',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_networking_vpcs',
  description: 'List all VPCs',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = (client: NirvanaLabs, args: any) => {
  const {} = args;
  return client.networking.vpcs.list();
};

export default { metadata, tool, handler };
