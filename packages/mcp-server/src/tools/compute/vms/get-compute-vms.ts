// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import NirvanaLabs from '@nirvana-labs/nirvana';

export const metadata: Metadata = {
  resource: 'compute.vms',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_compute_vms',
  description: 'Get details about a VM',
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
  return client.compute.vms.get(vm_id);
};

export default { metadata, tool, handler };
