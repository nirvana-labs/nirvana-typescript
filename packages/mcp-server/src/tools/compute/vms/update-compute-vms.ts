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
  name: 'update_compute_vms',
  description: 'Update a VM',
  inputSchema: {
    type: 'object',
    properties: {
      vm_id: {
        type: 'string',
      },
      cpu_config: {
        type: 'object',
        description: 'CPU configuration details.',
        properties: {
          vcpu: {
            type: 'integer',
            description: 'virtual CPUs',
          },
        },
        required: ['vcpu'],
      },
      memory_config: {
        type: 'object',
        description: 'Memory configuration details.',
        properties: {
          size: {
            type: 'integer',
            description: 'memory size',
          },
        },
        required: ['size'],
      },
      name: {
        type: 'string',
      },
      public_ip_enabled: {
        type: 'boolean',
      },
    },
  },
};

export const handler = (client: NirvanaLabs, args: any) => {
  const { vm_id, ...body } = args;
  return client.compute.vms.update(vm_id, body);
};

export default { metadata, tool, handler };
