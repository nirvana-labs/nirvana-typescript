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
  name: 'update_compute_volumes',
  description: 'Update a Volume. Boot or data volumes can be updated.',
  inputSchema: {
    type: 'object',
    properties: {
      volume_id: {
        type: 'string',
      },
      name: {
        type: 'string',
      },
      size: {
        type: 'integer',
      },
    },
  },
};

export const handler = (client: NirvanaLabs, args: any) => {
  const { volume_id, ...body } = args;
  return client.compute.volumes.update(volume_id, body);
};

export default { metadata, tool, handler };
