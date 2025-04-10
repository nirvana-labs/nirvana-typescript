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
  name: 'create_compute_vms',
  description: 'Create a VM',
  inputSchema: {
    type: 'object',
    properties: {
      boot_volume: {
        type: 'object',
        description: 'Boot volume create request.',
        properties: {
          size: {
            type: 'integer',
          },
        },
        required: ['size'],
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
      os_image_name: {
        type: 'string',
      },
      public_ip_enabled: {
        type: 'boolean',
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
      ssh_key: {
        type: 'object',
        description: 'SSH key details.',
        properties: {
          public_key: {
            type: 'string',
          },
        },
        required: ['public_key'],
      },
      subnet_id: {
        type: 'string',
      },
      data_volumes: {
        type: 'array',
        items: {
          type: 'object',
          description: 'VM data volume create request.',
          properties: {
            name: {
              type: 'string',
            },
            size: {
              type: 'integer',
            },
          },
          required: ['name', 'size'],
        },
      },
    },
  },
};

export const handler = (client: NirvanaLabs, args: any) => {
  const { ...body } = args;
  return client.compute.vms.create(body);
};

export default { metadata, tool, handler };
