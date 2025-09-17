// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@nirvana-labs/nirvana-mcp/filtering';
import { Metadata, asTextContentResult } from '@nirvana-labs/nirvana-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import NirvanaLabs from '@nirvana-labs/nirvana';

export const metadata: Metadata = {
  resource: 'connect.flux',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/connect/flux/{flux_id}',
  operationId: 'get_connect_flux',
};

export const tool: Tool = {
  name: 'get_connect_flux',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet Connect Flux details\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/connect_flux',\n  $defs: {\n    connect_flux: {\n      type: 'object',\n      description: 'Connect flux details.',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Unique identifier for the connect flux'\n        },\n        bandwidth_mbps: {\n          type: 'string',\n          description: 'Connect flux speed in Mbps',\n          enum: [            50,\n            100,\n            200,\n            500,\n            1000,\n            2000,\n            5000\n          ]\n        },\n        cidrs: {\n          type: 'array',\n          description: 'CIDRs',\n          items: {\n            type: 'string'\n          }\n        },\n        created_at: {\n          type: 'string',\n          description: 'When the connect flux was created',\n          format: 'date-time'\n        },\n        name: {\n          type: 'string',\n          description: 'Name of the connect flux'\n        },\n        provider_cidrs: {\n          type: 'array',\n          description: 'Provider CIDRs',\n          items: {\n            type: 'string'\n          }\n        },\n        provider_name: {\n          type: 'string',\n          description: 'Provider name'\n        },\n        provider_region: {\n          type: 'string',\n          description: 'Provider region'\n        },\n        region: {\n          $ref: '#/$defs/region_name'\n        },\n        status: {\n          $ref: '#/$defs/resource_status'\n        },\n        updated_at: {\n          type: 'string',\n          description: 'When the connect flux was updated',\n          format: 'date-time'\n        }\n      },\n      required: [        'id',\n        'bandwidth_mbps',\n        'cidrs',\n        'created_at',\n        'name',\n        'provider_cidrs',\n        'provider_name',\n        'provider_region',\n        'region',\n        'status',\n        'updated_at'\n      ]\n    },\n    region_name: {\n      type: 'string',\n      description: 'Region the resource is in.',\n      enum: [        'us-sea-1',\n        'us-sva-1',\n        'us-chi-1',\n        'us-wdc-1',\n        'eu-frk-1',\n        'ap-sin-1',\n        'ap-seo-1',\n        'ap-tyo-1'\n      ]\n    },\n    resource_status: {\n      type: 'string',\n      description: 'Status of the resource.',\n      enum: [        'pending',\n        'creating',\n        'updating',\n        'ready',\n        'deleting',\n        'deleted',\n        'error'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      flux_id: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['flux_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: NirvanaLabs, args: Record<string, unknown> | undefined) => {
  const { flux_id, jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.connect.flux.get(flux_id)));
};

export default { metadata, tool, handler };
