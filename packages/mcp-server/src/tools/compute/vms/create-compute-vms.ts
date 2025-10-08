// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@nirvana-labs/nirvana-mcp/filtering';
import { Metadata, asTextContentResult } from '@nirvana-labs/nirvana-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import NirvanaLabs from '@nirvana-labs/nirvana';

export const metadata: Metadata = {
  resource: 'compute.vms',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/compute/vms',
  operationId: 'create_vm',
};

export const tool: Tool = {
  name: 'create_compute_vms',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate a VM\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/operation',\n  $defs: {\n    operation: {\n      type: 'object',\n      description: 'Operation details.',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Unique identifier for the Operation.'\n        },\n        created_at: {\n          type: 'string',\n          description: 'When the Operation was created.',\n          format: 'date-time'\n        },\n        kind: {\n          $ref: '#/$defs/operation_kind'\n        },\n        resource_id: {\n          type: 'string',\n          description: 'ID of the resource that the Operation is acting on.'\n        },\n        status: {\n          $ref: '#/$defs/operation_status'\n        },\n        type: {\n          $ref: '#/$defs/operation_type'\n        },\n        updated_at: {\n          type: 'string',\n          description: 'When the Operation was updated.',\n          format: 'date-time'\n        }\n      },\n      required: [        'id',\n        'created_at',\n        'kind',\n        'resource_id',\n        'status',\n        'type',\n        'updated_at'\n      ]\n    },\n    operation_kind: {\n      type: 'string',\n      description: 'Kind of Operation.',\n      enum: [        'vm',\n        'volume',\n        'vpc',\n        'firewall_rule'\n      ]\n    },\n    operation_status: {\n      type: 'string',\n      description: 'Status of the Operation.',\n      enum: [        'pending',\n        'running',\n        'done',\n        'failed',\n        'unknown'\n      ]\n    },\n    operation_type: {\n      type: 'string',\n      description: 'Type of Operation.',\n      enum: [        'create',\n        'update',\n        'delete',\n        'restart'\n      ]\n    }\n  }\n}\n```",
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
          tags: {
            type: 'array',
            description: 'Tags to attach to the Volume.',
            items: {
              type: 'string',
            },
          },
        },
        required: ['size'],
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
            tags: {
              type: 'array',
              description: 'Tags to attach to the Volume.',
              items: {
                type: 'string',
              },
            },
          },
          required: ['name', 'size'],
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
  return asTextContentResult(await maybeFilter(jq_filter, await client.compute.vms.create(body)));
};

export default { metadata, tool, handler };
