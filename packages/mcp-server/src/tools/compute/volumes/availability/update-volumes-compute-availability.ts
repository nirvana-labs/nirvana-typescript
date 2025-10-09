// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@nirvana-labs/nirvana-mcp/filtering';
import { Metadata, asTextContentResult } from '@nirvana-labs/nirvana-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import NirvanaLabs from '@nirvana-labs/nirvana';

export const metadata: Metadata = {
  resource: 'compute.volumes.availability',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/v1/compute/volumes/{volume_id}/availability',
  operationId: 'update_volume_availability',
};

export const tool: Tool = {
  name: 'update_volumes_compute_availability',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCheck Volume Update Availability\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/availability_update_response',\n  $defs: {\n    availability_update_response: {\n      type: 'string'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      volume_id: {
        type: 'string',
      },
      name: {
        type: 'string',
        description: 'Name of the Volume.',
      },
      size: {
        type: 'integer',
        description: 'Size of the Volume in GB.',
      },
      tags: {
        type: 'array',
        description: 'Tags to attach to the Volume.',
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
    required: ['volume_id'],
  },
  annotations: {},
};

export const handler = async (client: NirvanaLabs, args: Record<string, unknown> | undefined) => {
  const { volume_id, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.compute.volumes.availability.update(volume_id, body)),
  );
};

export default { metadata, tool, handler };
