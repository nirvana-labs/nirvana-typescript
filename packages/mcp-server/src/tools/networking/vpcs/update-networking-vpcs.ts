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
  name: 'update_networking_vpcs',
  description: 'Update a VPC',
  inputSchema: {
    type: 'object',
    properties: {
      vpc_id: {
        type: 'string',
      },
      name: {
        type: 'string',
      },
      subnet_name: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: NirvanaLabs, args: any) => {
  const { vpc_id, ...body } = args;
  return client.networking.vpcs.update(vpc_id, body);
};

export default { metadata, tool, handler };
