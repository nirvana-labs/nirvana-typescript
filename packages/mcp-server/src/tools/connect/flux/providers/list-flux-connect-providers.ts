// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@nirvana-labs/nirvana-mcp/filtering';
import { Metadata, asTextContentResult } from '@nirvana-labs/nirvana-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import NirvanaLabs from '@nirvana-labs/nirvana';

export const metadata: Metadata = {
  resource: 'connect.flux.providers',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/connect/flux/providers',
  operationId: 'list_connect_flux_providers',
};

export const tool: Tool = {
  name: 'list_flux_connect_providers',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList all supported providers with regions for Connect Flux.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/connect_flux_provider_list',\n  $defs: {\n    connect_flux_provider_list: {\n      type: 'object',\n      properties: {\n        items: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/connect_flux_provider'\n          }\n        }\n      },\n      required: [        'items'\n      ]\n    },\n    connect_flux_provider: {\n      type: 'object',\n      description: 'Provider supported for Connect Flux.',\n      properties: {\n        name: {\n          type: 'string',\n          description: 'Provider name.'\n        },\n        region: {\n          type: 'string',\n          description: 'Provider region name.'\n        }\n      },\n      required: [        'name',\n        'region'\n      ]\n    }\n  }\n}\n```",
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
  return asTextContentResult(await maybeFilter(jq_filter, await client.connect.flux.providers.list()));
};

export default { metadata, tool, handler };
