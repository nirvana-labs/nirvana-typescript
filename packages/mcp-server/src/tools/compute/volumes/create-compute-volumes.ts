// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import NirvanaLabs from '@nirvana-labs/nirvana';

export const metadata: Metadata = {
  resource: 'compute.volumes',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_compute_volumes',
  description: 'Create a Volume. Only data volumes can be created.',
  inputSchema: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
      },
      size: {
        type: 'integer',
      },
      vm_id: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: NirvanaLabs, args: any) => {
  const { ...body } = args;
  return client.compute.volumes.create(body);
};

export default { metadata, tool, handler };
