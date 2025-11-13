// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@nirvana-labs/nirvana-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@nirvana-labs/nirvana-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import NirvanaLabs from '@nirvana-labs/nirvana';

export const metadata: Metadata = {
  resource: 'networking.vpcs.availability',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/v1/networking/vpcs/{vpc_id}/availability',
  operationId: 'check_update_vpc_availability',
};

export const tool: Tool = {
  name: 'update_vpcs_networking_availability',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCheck if a VPC can be updated\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/availability_update_response',\n  $defs: {\n    availability_update_response: {\n      type: 'string'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      vpc_id: {
        type: 'string',
      },
      name: {
        type: 'string',
        description: 'Name of the VPC.',
      },
      subnet_name: {
        type: 'string',
        description: 'Name of the subnet to create.',
      },
      tags: {
        type: 'array',
        description: 'Tags to attach to the VPC.',
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
    required: ['vpc_id'],
  },
  annotations: {},
};

export const handler = async (client: NirvanaLabs, args: Record<string, unknown> | undefined) => {
  const { vpc_id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.networking.vpcs.availability.update(vpc_id, body)),
    );
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
