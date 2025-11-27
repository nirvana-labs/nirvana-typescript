// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@nirvana-labs/nirvana-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@nirvana-labs/nirvana-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import NirvanaLabs from '@nirvana-labs/nirvana';

export const metadata: Metadata = {
  resource: 'compute.volumes.availability',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/compute/volumes/availability',
  operationId: 'create_volume_availability',
};

export const tool: Tool = {
  name: 'create_volumes_compute_availability',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCheck Volume Create Availability\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/availability_create_response',\n  $defs: {\n    availability_create_response: {\n      type: 'string'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
        description: 'Name of the Volume.',
      },
      size: {
        type: 'integer',
        description: 'Size of the Volume in GB.',
      },
      vm_id: {
        type: 'string',
        description: 'ID of the VM the Volume is attached to.',
      },
      tags: {
        type: 'array',
        description: 'Tags to attach to the Volume.',
        items: {
          type: 'string',
        },
      },
      type: {
        $ref: '#/$defs/volume_type',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['name', 'size', 'vm_id'],
    $defs: {
      volume_type: {
        type: 'string',
        description: 'Type of the Volume.',
        enum: ['nvme', 'abs'],
      },
    },
  },
  annotations: {},
};

export const handler = async (client: NirvanaLabs, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.compute.volumes.availability.create(body)),
    );
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
