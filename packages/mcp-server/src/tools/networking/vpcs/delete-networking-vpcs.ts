// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import NirvanaLabs from '@nirvana-labs/nirvana';

export const metadata: Metadata = {
  resource: 'networking.vpcs',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'delete_networking_vpcs',
  description: 'Delete a VPC',
  inputSchema: {
    type: 'object',
    properties: {
      vpc_id: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: NirvanaLabs, args: any) => {
  const { vpc_id } = args;
  return client.networking.vpcs.delete(vpc_id);
};

export default { metadata, tool, handler };
