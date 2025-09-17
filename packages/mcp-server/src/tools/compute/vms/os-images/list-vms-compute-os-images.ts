// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@nirvana-labs/nirvana-mcp/filtering';
import { Metadata, asTextContentResult } from '@nirvana-labs/nirvana-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import NirvanaLabs from '@nirvana-labs/nirvana';

export const metadata: Metadata = {
  resource: 'compute.vms.os_images',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/compute/vms/os_images',
  operationId: 'list_os_images',
};

export const tool: Tool = {
  name: 'list_vms_compute_os_images',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList all OS Images\n\n# Response Schema\n```json\n{\n  type: 'array',\n  items: {\n    $ref: '#/$defs/os_image'\n  },\n  $defs: {\n    os_image: {\n      type: 'object',\n      description: 'OS Image details.',\n      properties: {\n        created_at: {\n          type: 'string',\n          description: 'When the OS Image was created.',\n          format: 'date-time'\n        },\n        display_name: {\n          type: 'string',\n          description: 'Display name of the OS Image.'\n        },\n        name: {\n          type: 'string',\n          description: 'Name of the OS Image.'\n        }\n      },\n      required: [        'created_at',\n        'display_name',\n        'name'\n      ]\n    }\n  }\n}\n```",
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
  return asTextContentResult(await maybeFilter(jq_filter, await client.compute.vms.osImages.list()));
};

export default { metadata, tool, handler };
