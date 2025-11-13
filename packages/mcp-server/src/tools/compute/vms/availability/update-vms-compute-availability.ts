// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@nirvana-labs/nirvana-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@nirvana-labs/nirvana-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import NirvanaLabs from '@nirvana-labs/nirvana';

export const metadata: Metadata = {
  resource: 'compute.vms.availability',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/v1/compute/vms/{vm_id}/availability',
  operationId: 'update_vm_availability',
};

export const tool: Tool = {
  name: 'update_vms_compute_availability',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCheck VM Update Availability\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/availability_update_response',\n  $defs: {\n    availability_update_response: {\n      type: 'string'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      vm_id: {
        type: 'string',
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
      public_ip_enabled: {
        type: 'boolean',
        description: 'Whether to enable public IP for the VM.',
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
    required: ['vm_id'],
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
    },
  },
  annotations: {},
};

export const handler = async (client: NirvanaLabs, args: Record<string, unknown> | undefined) => {
  const { vm_id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.compute.vms.availability.update(vm_id, body)),
    );
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
