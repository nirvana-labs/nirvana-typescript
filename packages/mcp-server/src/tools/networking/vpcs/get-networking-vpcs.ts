// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@nirvana-labs/nirvana-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@nirvana-labs/nirvana-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import NirvanaLabs from '@nirvana-labs/nirvana';

export const metadata: Metadata = {
  resource: 'networking.vpcs',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/networking/vpcs/{vpc_id}',
  operationId: 'get_vpc',
};

export const tool: Tool = {
  name: 'get_networking_vpcs',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet details about a VPC\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/vpc',\n  $defs: {\n    vpc: {\n      type: 'object',\n      description: 'VPC details.',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Unique identifier for the VPC.'\n        },\n        created_at: {\n          type: 'string',\n          description: 'When the VPC was created.',\n          format: 'date-time'\n        },\n        firewall_rule_ids: {\n          type: 'array',\n          description: 'IDs of the Firewall Rules associated with the VPC.',\n          items: {\n            type: 'string'\n          }\n        },\n        name: {\n          type: 'string',\n          description: 'Name of the VPC.'\n        },\n        region: {\n          $ref: '#/$defs/region_name'\n        },\n        status: {\n          $ref: '#/$defs/resource_status'\n        },\n        subnet: {\n          $ref: '#/$defs/subnet'\n        },\n        tags: {\n          type: 'array',\n          description: 'Tags to attach to the VPC.',\n          items: {\n            type: 'string'\n          }\n        },\n        updated_at: {\n          type: 'string',\n          description: 'When the VPC was updated.',\n          format: 'date-time'\n        }\n      },\n      required: [        'id',\n        'created_at',\n        'firewall_rule_ids',\n        'name',\n        'region',\n        'status',\n        'subnet',\n        'tags',\n        'updated_at'\n      ]\n    },\n    region_name: {\n      type: 'string',\n      description: 'Region the resource is in.',\n      enum: [        'us-sea-1',\n        'us-sva-1',\n        'us-sva-2',\n        'us-chi-1',\n        'us-wdc-1',\n        'eu-frk-1',\n        'ap-sin-1',\n        'ap-seo-1',\n        'ap-tyo-1'\n      ]\n    },\n    resource_status: {\n      type: 'string',\n      description: 'Status of the resource.',\n      enum: [        'pending',\n        'creating',\n        'updating',\n        'ready',\n        'deleting',\n        'deleted',\n        'error'\n      ]\n    },\n    subnet: {\n      type: 'object',\n      description: 'Subnet of the VPC.',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Unique identifier for the Subnet.'\n        },\n        cidr: {\n          type: 'string',\n          description: 'CIDR block for the Subnet.'\n        },\n        created_at: {\n          type: 'string',\n          description: 'When the Subnet was created.',\n          format: 'date-time'\n        },\n        name: {\n          type: 'string',\n          description: 'Name of the Subnet.'\n        },\n        updated_at: {\n          type: 'string',\n          description: 'When the Subnet was updated.',\n          format: 'date-time'\n        }\n      },\n      required: [        'id',\n        'cidr',\n        'created_at',\n        'name',\n        'updated_at'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      vpc_id: {
        type: 'string',
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
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: NirvanaLabs, args: Record<string, unknown> | undefined) => {
  const { vpc_id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.networking.vpcs.get(vpc_id)));
  } catch (error) {
    if (error instanceof NirvanaLabs.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
