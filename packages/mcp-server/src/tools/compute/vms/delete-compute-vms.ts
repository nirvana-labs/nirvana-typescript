// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import NirvanaLabs from '@nirvana-labs/nirvana';

export const metadata: Metadata = {
  resource: 'compute.vms',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'delete_compute_vms',
  description: 'Delete a VM',
  inputSchema: {
    type: 'object',
    properties: {
      vm_id: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: NirvanaLabs, args: any) => {
  const { vm_id } = args;
  return client.compute.vms.delete(vm_id);
};

export default { metadata, tool, handler };
