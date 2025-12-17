// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@nirvana-labs/nirvana-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@nirvana-labs/nirvana-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import NirvanaLabs from '@nirvana-labs/nirvana';

export const metadata: Metadata = {
  resource: 'compute.volumes',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/compute/volumes/{volume_id}',
  operationId: 'get_volume',
};

export const tool: Tool = {
  name: 'get_compute_volumes',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet a Volume.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/volume',\n  $defs: {\n    volume: {\n      type: 'object',\n      description: 'Volume details.',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Unique identifier for the Volume.'\n        },\n        created_at: {\n          type: 'string',\n          description: 'When the Volume was created.',\n          format: 'date-time'\n        },\n        kind: {\n          $ref: '#/$defs/volume_kind'\n        },\n        name: {\n          type: 'string',\n          description: 'Name of the Volume.'\n        },\n        region: {\n          type: 'string',\n          description: 'Region where the Volume is located.'\n        },\n        size: {\n          type: 'integer',\n          description: 'Size of the Volume in GB.'\n        },\n        status: {\n          $ref: '#/$defs/resource_status'\n        },\n        tags: {\n          type: 'array',\n          description: 'Tags to attach to the Volume.',\n          items: {\n            type: 'string'\n          }\n        },\n        type: {\n          $ref: '#/$defs/volume_type'\n        },\n        updated_at: {\n          type: 'string',\n          description: 'When the Volume was updated.',\n          format: 'date-time'\n        },\n        vm_id: {\n          type: 'string',\n          description: 'ID of the VM the Volume is attached to.'\n        },\n        vm_name: {\n          type: 'string',\n          description: 'Name of the VM the Volume is attached to.'\n        }\n      },\n      required: [        'id',\n        'created_at',\n        'kind',\n        'name',\n        'region',\n        'size',\n        'status',\n        'tags',\n        'type',\n        'updated_at',\n        'vm_id',\n        'vm_name'\n      ]\n    },\n    volume_kind: {\n      type: 'string',\n      description: 'Volume kind.',\n      enum: [        'boot',\n        'data'\n      ]\n    },\n    resource_status: {\n      type: 'string',\n      description: 'Status of the resource.',\n      enum: [        'pending',\n        'creating',\n        'updating',\n        'ready',\n        'deleting',\n        'deleted',\n        'error'\n      ]\n    },\n    volume_type: {\n      type: 'string',\n      description: 'Type of the Volume.',\n      enum: [        'nvme',\n        'abs'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      volume_id: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['volume_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: NirvanaLabs, args: Record<string, unknown> | undefined) => {
  const { volume_id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.compute.volumes.get(volume_id)));
  } catch (error) {
    if (error instanceof NirvanaLabs.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
