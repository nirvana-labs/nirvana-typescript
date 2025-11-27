// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@nirvana-labs/nirvana-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@nirvana-labs/nirvana-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import NirvanaLabs from '@nirvana-labs/nirvana';

export const metadata: Metadata = {
  resource: 'compute.vms.availability',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/compute/vms/availability',
  operationId: 'create_vm_availability',
};

export const tool: Tool = {
  name: 'create_vms_compute_availability',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCheck VM Create Availability\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/availability_create_response',\n  $defs: {\n    availability_create_response: {\n      type: 'string'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      boot_volume: {
        type: 'object',
        description: 'Boot volume for the VM.',
        properties: {
          size: {
            type: 'integer',
            description: 'Size of the Volume in GB.',
          },
          type: {
            $ref: '#/$defs/volume_type',
          },
          tags: {
            type: 'array',
            description: 'Tags to attach to the Volume.',
            items: {
              type: 'string',
            },
          },
        },
        required: ['size', 'type'],
      },
      cpu_config: {
        $ref: '#/$defs/cpu_config_request',
      },
      memory_config: {
        $ref: '#/$defs/memory_config_request',
      },
      name: {
        type: 'string',
        description: 'Name of the VM.',
      },
      os_image_name: {
        type: 'string',
        description: 'Name of the OS Image to use for the VM.',
      },
      public_ip_enabled: {
        type: 'boolean',
        description: 'Whether to enable public IP for the VM.',
      },
      region: {
        $ref: '#/$defs/region_name',
      },
      ssh_key: {
        $ref: '#/$defs/ssh_key_request',
      },
      subnet_id: {
        type: 'string',
        description: 'ID of the subnet to use for the VM.',
      },
      data_volumes: {
        type: 'array',
        description: 'Data volumes for the VM.',
        items: {
          type: 'object',
          description: 'VM data volume create request.',
          properties: {
            name: {
              type: 'string',
              description: 'Name of the Volume.',
            },
            size: {
              type: 'integer',
              description: 'Size of the Volume in GB.',
            },
            type: {
              $ref: '#/$defs/volume_type',
            },
            tags: {
              type: 'array',
              description: 'Tags to attach to the Volume.',
              items: {
                type: 'string',
              },
            },
          },
          required: ['name', 'size', 'type'],
        },
      },
      tags: {
        type: 'array',
        description: 'Tags to attach to the VM.',
        items: {
          type: 'string',
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [
      'boot_volume',
      'cpu_config',
      'memory_config',
      'name',
      'os_image_name',
      'public_ip_enabled',
      'region',
      'ssh_key',
      'subnet_id',
    ],
    $defs: {
      volume_type: {
        type: 'string',
        description: 'Type of the Volume.',
        enum: ['nvme', 'abs'],
      },
      cpu_config_request: {
        type: 'object',
        description: 'CPU configuration for the VM.',
        properties: {
          vcpu: {
            type: 'integer',
            description: 'Number of virtual CPUs.',
          },
        },
        required: ['vcpu'],
      },
      memory_config_request: {
        type: 'object',
        description: 'Memory configuration for the VM.',
        properties: {
          size: {
            type: 'integer',
            description: 'Size of the memory in GB.',
          },
        },
        required: ['size'],
      },
      region_name: {
        type: 'string',
        description: 'Region the resource is in.',
        enum: [
          'us-sea-1',
          'us-sva-1',
          'us-sva-2',
          'us-chi-1',
          'us-wdc-1',
          'eu-frk-1',
          'ap-sin-1',
          'ap-seo-1',
          'ap-tyo-1',
        ],
      },
      ssh_key_request: {
        type: 'object',
        description: 'Public SSH key configuration for the VM.',
        properties: {
          public_key: {
            type: 'string',
            description: 'Public key to and and use to access the VM.',
          },
        },
        required: ['public_key'],
      },
    },
  },
  annotations: {},
};

export const handler = async (client: NirvanaLabs, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.compute.vms.availability.create(body)),
    );
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
