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
  name: 'delete_compute_volumes',
  description: 'Delete a Volume. Boot or data volumes can be deleted.',
  inputSchema: {
    type: 'object',
    properties: {
      volume_id: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: NirvanaLabs, args: any) => {
  const { volume_id } = args;
  return client.compute.volumes.delete(volume_id);
};

export default { metadata, tool, handler };
