// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@nirvana-labs/nirvana-mcp/filtering';
import { Metadata, asTextContentResult } from '@nirvana-labs/nirvana-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import NirvanaLabs from '@nirvana-labs/nirvana';

export const metadata: Metadata = {
  resource: 'networking.connect.connections',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/networking/connect/connections',
  operationId: 'list_connect_connections',
};

export const tool: Tool = {
  name: 'list_connect_networking_connections',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList all Connect Connections\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/connect_connection_list',\n  $defs: {\n    connect_connection_list: {\n      type: 'object',\n      properties: {\n        items: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/connect_connection'\n          }\n        },\n        pagination: {\n          $ref: '#/$defs/pagination'\n        }\n      },\n      required: [        'items'\n      ]\n    },\n    connect_connection: {\n      type: 'object',\n      description: 'Connect Connection details.',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Unique identifier for the Connect Connection'\n        },\n        asn: {\n          type: 'integer',\n          description: 'ASN'\n        },\n        aws: {\n          $ref: '#/$defs/connect_connection_aws_config'\n        },\n        bandwidth_mbps: {\n          $ref: '#/$defs/connect_bandwidth_mbps'\n        },\n        cidrs: {\n          type: 'array',\n          description: 'CIDRs for the Connect Connection',\n          items: {\n            type: 'string'\n          }\n        },\n        created_at: {\n          type: 'string',\n          description: 'When the Connect Connection was created',\n          format: 'date-time'\n        },\n        name: {\n          type: 'string',\n          description: 'Name of the Connect Connection'\n        },\n        provider_asn: {\n          type: 'integer',\n          description: 'Provider ASN'\n        },\n        provider_cidrs: {\n          type: 'array',\n          description: 'Provider CIDRs for the Connect Connection',\n          items: {\n            type: 'string'\n          }\n        },\n        provider_router_ip: {\n          type: 'string',\n          description: 'Provider Router IP for the Connect Connection'\n        },\n        region: {\n          $ref: '#/$defs/region_name'\n        },\n        router_ip: {\n          type: 'string',\n          description: 'Router IP'\n        },\n        status: {\n          $ref: '#/$defs/resource_status'\n        },\n        tags: {\n          type: 'array',\n          description: 'Tags to attach to the Connect Connection',\n          items: {\n            type: 'string'\n          }\n        },\n        updated_at: {\n          type: 'string',\n          description: 'When the Connect Connection was updated',\n          format: 'date-time'\n        }\n      },\n      required: [        'id',\n        'asn',\n        'aws',\n        'bandwidth_mbps',\n        'cidrs',\n        'created_at',\n        'name',\n        'provider_asn',\n        'provider_cidrs',\n        'provider_router_ip',\n        'region',\n        'router_ip',\n        'status',\n        'tags',\n        'updated_at'\n      ]\n    },\n    connect_connection_aws_config: {\n      type: 'object',\n      description: 'AWS provider configuration',\n      properties: {\n        region: {\n          type: 'string',\n          description: 'AWS region where the connection is established'\n        }\n      },\n      required: [        'region'\n      ]\n    },\n    connect_bandwidth_mbps: {\n      type: 'string',\n      description: 'Connect Connection speed in Mbps',\n      enum: [        50,\n        200,\n        500,\n        1000,\n        2000\n      ]\n    },\n    region_name: {\n      type: 'string',\n      description: 'Region the resource is in.',\n      enum: [        'us-sea-1',\n        'us-sva-1',\n        'us-chi-1',\n        'us-wdc-1',\n        'eu-frk-1',\n        'ap-sin-1',\n        'ap-seo-1',\n        'ap-tyo-1'\n      ]\n    },\n    resource_status: {\n      type: 'string',\n      description: 'Status of the resource.',\n      enum: [        'pending',\n        'creating',\n        'updating',\n        'ready',\n        'deleting',\n        'deleted',\n        'error'\n      ]\n    },\n    pagination: {\n      type: 'object',\n      description: 'Pagination response details.',\n      properties: {\n        next_cursor: {\n          type: 'string'\n        },\n        previous_cursor: {\n          type: 'string'\n        },\n        total_count: {\n          type: 'integer'\n        }\n      },\n      required: [        'next_cursor',\n        'previous_cursor',\n        'total_count'\n      ]\n    }\n  }\n}\n```",
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
  const response = await client.networking.connect.connections.list(body).asResponse();
  return asTextContentResult(await maybeFilter(jq_filter, await response.json()));
};

export default { metadata, tool, handler };
