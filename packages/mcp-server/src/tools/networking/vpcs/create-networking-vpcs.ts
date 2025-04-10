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
  name: 'create_networking_vpcs',
  description: 'Create a VPC',
  inputSchema: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
      },
      region: {
        type: 'string',
        enum: [
          'us-sea-1',
          'us-sva-1',
          'us-chi-1',
          'us-wdc-1',
          'eu-lon-1',
          'eu-ams-1',
          'eu-frk-1',
          'ap-sin-1',
          'ap-seo-1',
          'ap-tyo-1',
        ],
      },
      subnet_name: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: NirvanaLabs, args: any) => {
  const { ...body } = args;
  return client.networking.vpcs.create(body);
};

export default { metadata, tool, handler };
