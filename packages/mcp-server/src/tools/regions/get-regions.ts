// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@nirvana-labs/nirvana-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@nirvana-labs/nirvana-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import NirvanaLabs from '@nirvana-labs/nirvana';

export const metadata: Metadata = {
  resource: 'regions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/regions/{region_name}',
  operationId: 'get_region',
};

export const tool: Tool = {
  name: 'get_regions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet a region by name\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/region',\n  $defs: {\n    region: {\n      type: 'object',\n      description: 'Region response with product availability.',\n      properties: {\n        availability: {\n          type: 'string',\n          description: 'Availability status of the region.',\n          enum: [            'live',\n            'preview',\n            'maintenance',\n            'sunset'\n          ]\n        },\n        compute: {\n          type: 'object',\n          description: 'Compute products available in this region.',\n          properties: {\n            vms: {\n              type: 'boolean',\n              description: 'VMs indicates if Virtual Machines are available.'\n            }\n          },\n          required: [            'vms'\n          ]\n        },\n        name: {\n          type: 'string',\n          description: 'Name of the region.'\n        },\n        networking: {\n          type: 'object',\n          description: 'Networking products available in this region.',\n          properties: {\n            connect: {\n              type: 'boolean',\n              description: 'Connect indicates if Nirvana Connect is available.'\n            },\n            vpcs: {\n              type: 'boolean',\n              description: 'VPCs indicates if Virtual Private Clouds are available.'\n            }\n          },\n          required: [            'connect',\n            'vpcs'\n          ]\n        },\n        storage: {\n          type: 'object',\n          description: 'Storage products available in this region.',\n          properties: {\n            abs: {\n              type: 'boolean',\n              description: 'ABS indicates if Accelerated Block Storage is available.'\n            },\n            local_nvme: {\n              type: 'boolean',\n              description: 'LocalNVMe indicates if locally-attached NVMe storage is available.'\n            }\n          },\n          required: [            'abs',\n            'local_nvme'\n          ]\n        }\n      },\n      required: [        'availability',\n        'compute',\n        'name',\n        'networking',\n        'storage'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      region_name: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['region_name'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: NirvanaLabs, args: Record<string, unknown> | undefined) => {
  const { region_name, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.regions.get(region_name)));
  } catch (error) {
    if (error instanceof NirvanaLabs.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
