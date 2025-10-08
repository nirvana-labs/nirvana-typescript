// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@nirvana-labs/nirvana-mcp/filtering';
import { Metadata, asTextContentResult } from '@nirvana-labs/nirvana-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import NirvanaLabs from '@nirvana-labs/nirvana';

export const metadata: Metadata = {
  resource: 'connect.flux.routes',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/connect/flux/routes',
  operationId: 'list_connect_flux_routes',
};

export const tool: Tool = {
  name: 'list_flux_connect_routes',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList all supported routes with regions for Connect Flux.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/flux_route_list',\n  $defs: {\n    flux_route_list: {\n      type: 'object',\n      properties: {\n        items: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/flux_route'\n          }\n        }\n      },\n      required: [        'items'\n      ]\n    },\n    flux_route: {\n      type: 'object',\n      description: 'Routes supported for Connect Flux.',\n      properties: {\n        nirvana_region: {\n          $ref: '#/$defs/region_name'\n        },\n        provider: {\n          type: 'string',\n          description: 'Provider name.'\n        },\n        provider_region: {\n          type: 'string',\n          description: 'Provider region name.'\n        }\n      },\n      required: [        'nirvana_region',\n        'provider',\n        'provider_region'\n      ]\n    },\n    region_name: {\n      type: 'string',\n      description: 'Region the resource is in.',\n      enum: [        'us-sea-1',\n        'us-sva-1',\n        'us-chi-1',\n        'us-wdc-1',\n        'eu-frk-1',\n        'ap-sin-1',\n        'ap-seo-1',\n        'ap-tyo-1'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
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
  const { jq_filter } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.connect.flux.routes.list()));
};

export default { metadata, tool, handler };
