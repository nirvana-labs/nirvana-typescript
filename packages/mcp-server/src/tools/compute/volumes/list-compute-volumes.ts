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
  httpPath: '/v1/compute/volumes',
  operationId: 'list_volumes',
};

export const tool: Tool = {
  name: 'list_compute_volumes',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList all volumes\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/volume_list',\n  $defs: {\n    volume_list: {\n      type: 'object',\n      properties: {\n        items: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/volume'\n          }\n        },\n        pagination: {\n          $ref: '#/$defs/pagination'\n        }\n      },\n      required: [        'items',\n        'pagination'\n      ]\n    },\n    volume: {\n      type: 'object',\n      description: 'Volume details.',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Unique identifier for the Volume.'\n        },\n        created_at: {\n          type: 'string',\n          description: 'When the Volume was created.',\n          format: 'date-time'\n        },\n        kind: {\n          $ref: '#/$defs/volume_kind'\n        },\n        name: {\n          type: 'string',\n          description: 'Name of the Volume.'\n        },\n        size: {\n          type: 'integer',\n          description: 'Size of the Volume in GB.'\n        },\n        status: {\n          $ref: '#/$defs/resource_status'\n        },\n        tags: {\n          type: 'array',\n          description: 'Tags to attach to the Volume.',\n          items: {\n            type: 'string'\n          }\n        },\n        type: {\n          $ref: '#/$defs/storage_type'\n        },\n        updated_at: {\n          type: 'string',\n          description: 'When the Volume was updated.',\n          format: 'date-time'\n        },\n        vm_id: {\n          type: 'string',\n          description: 'ID of the VM the Volume is attached to.'\n        },\n        vm_name: {\n          type: 'string',\n          description: 'Name of the VM the Volume is attached to.'\n        }\n      },\n      required: [        'id',\n        'created_at',\n        'kind',\n        'name',\n        'size',\n        'status',\n        'tags',\n        'type',\n        'updated_at',\n        'vm_id',\n        'vm_name'\n      ]\n    },\n    volume_kind: {\n      type: 'string',\n      description: 'Volume kind.',\n      enum: [        'boot',\n        'data'\n      ]\n    },\n    resource_status: {\n      type: 'string',\n      description: 'Status of the resource.',\n      enum: [        'pending',\n        'creating',\n        'updating',\n        'ready',\n        'deleting',\n        'deleted',\n        'error'\n      ]\n    },\n    storage_type: {\n      type: 'string',\n      description: 'Storage type the Volume is using.',\n      enum: [        'nvme'\n      ]\n    },\n    pagination: {\n      type: 'object',\n      description: 'Pagination response details.',\n      properties: {\n        next_cursor: {\n          type: 'string'\n        },\n        previous_cursor: {\n          type: 'string'\n        },\n        total_count: {\n          type: 'integer'\n        }\n      },\n      required: [        'next_cursor',\n        'previous_cursor',\n        'total_count'\n      ]\n    }\n  }\n}\n```",
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
  const response = await client.compute.volumes.list(body).asResponse();
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
