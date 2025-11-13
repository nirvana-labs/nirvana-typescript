// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@nirvana-labs/nirvana-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@nirvana-labs/nirvana-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import NirvanaLabs from '@nirvana-labs/nirvana';

export const metadata: Metadata = {
  resource: 'compute.vms',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/compute/vms',
  operationId: 'list_vms',
};

export const tool: Tool = {
  name: 'list_compute_vms',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList all VMs\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/vm_list',\n  $defs: {\n    vm_list: {\n      type: 'object',\n      properties: {\n        items: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/vm'\n          }\n        },\n        pagination: {\n          $ref: '#/$defs/pagination'\n        }\n      },\n      required: [        'items',\n        'pagination'\n      ]\n    },\n    vm: {\n      type: 'object',\n      description: 'VM details.',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Unique identifier for the VM.'\n        },\n        boot_volume_id: {\n          type: 'string',\n          description: 'ID of the boot volume attached to the VM.'\n        },\n        cpu_config: {\n          $ref: '#/$defs/cpu_config'\n        },\n        created_at: {\n          type: 'string',\n          description: 'When the VM was created.',\n          format: 'date-time'\n        },\n        data_volume_ids: {\n          type: 'array',\n          description: 'IDs of the data volumes attached to the VM.',\n          items: {\n            type: 'string'\n          }\n        },\n        memory_config: {\n          $ref: '#/$defs/memory_config'\n        },\n        name: {\n          type: 'string',\n          description: 'Name of the VM.'\n        },\n        private_ip: {\n          type: 'string',\n          description: 'Private IP of the VM.'\n        },\n        public_ip: {\n          type: 'string',\n          description: 'Public IP of the VM.'\n        },\n        public_ip_enabled: {\n          type: 'boolean',\n          description: 'Whether the public IP is enabled for the VM.'\n        },\n        region: {\n          $ref: '#/$defs/region_name'\n        },\n        status: {\n          $ref: '#/$defs/resource_status'\n        },\n        subnet_id: {\n          type: 'string',\n          description: 'ID of the subnet the VM is in.'\n        },\n        tags: {\n          type: 'array',\n          description: 'Tags to attach to the VM.',\n          items: {\n            type: 'string'\n          }\n        },\n        updated_at: {\n          type: 'string',\n          description: 'When the VM was updated.',\n          format: 'date-time'\n        },\n        vpc_id: {\n          type: 'string',\n          description: 'ID of the VPC the VM is in.'\n        },\n        vpc_name: {\n          type: 'string',\n          description: 'Name of the VPC the VM is in.'\n        }\n      },\n      required: [        'id',\n        'boot_volume_id',\n        'cpu_config',\n        'created_at',\n        'data_volume_ids',\n        'memory_config',\n        'name',\n        'private_ip',\n        'public_ip',\n        'public_ip_enabled',\n        'region',\n        'status',\n        'subnet_id',\n        'tags',\n        'updated_at',\n        'vpc_id',\n        'vpc_name'\n      ]\n    },\n    cpu_config: {\n      type: 'object',\n      description: 'CPU configuration for the VM.',\n      properties: {\n        vcpu: {\n          type: 'integer',\n          description: 'Number of virtual CPUs.'\n        }\n      },\n      required: [        'vcpu'\n      ]\n    },\n    memory_config: {\n      type: 'object',\n      description: 'Memory configuration for the VM.',\n      properties: {\n        size: {\n          type: 'integer',\n          description: 'Size of the memory in GB.'\n        }\n      },\n      required: [        'size'\n      ]\n    },\n    region_name: {\n      type: 'string',\n      description: 'Region the resource is in.',\n      enum: [        'us-sea-1',\n        'us-sva-1',\n        'us-chi-1',\n        'us-wdc-1',\n        'eu-frk-1',\n        'ap-sin-1',\n        'ap-seo-1',\n        'ap-tyo-1'\n      ]\n    },\n    resource_status: {\n      type: 'string',\n      description: 'Status of the resource.',\n      enum: [        'pending',\n        'creating',\n        'updating',\n        'ready',\n        'deleting',\n        'deleted',\n        'error'\n      ]\n    },\n    pagination: {\n      type: 'object',\n      description: 'Pagination response details.',\n      properties: {\n        next_cursor: {\n          type: 'string'\n        },\n        previous_cursor: {\n          type: 'string'\n        },\n        total_count: {\n          type: 'integer'\n        }\n      },\n      required: [        'next_cursor',\n        'previous_cursor',\n        'total_count'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      cursor: {
        type: 'string',
        description: 'Pagination cursor returned by a previous request',
      },
      limit: {
        type: 'integer',
        description: 'Maximum number of items to return',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: NirvanaLabs, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  const response = await client.compute.vms.list(body).asResponse();
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await response.json()));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
