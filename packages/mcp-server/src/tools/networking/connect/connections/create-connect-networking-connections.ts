// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@nirvana-labs/nirvana-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@nirvana-labs/nirvana-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import NirvanaLabs from '@nirvana-labs/nirvana';

export const metadata: Metadata = {
  resource: 'networking.connect.connections',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/networking/connect/connections',
  operationId: 'create_connect_connection',
};

export const tool: Tool = {
  name: 'create_connect_networking_connections',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate a Connect Connection\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/operation',\n  $defs: {\n    operation: {\n      type: 'object',\n      description: 'Operation details.',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Unique identifier for the Operation.'\n        },\n        created_at: {\n          type: 'string',\n          description: 'When the Operation was created.',\n          format: 'date-time'\n        },\n        kind: {\n          $ref: '#/$defs/operation_kind'\n        },\n        resource_id: {\n          type: 'string',\n          description: 'ID of the resource that the Operation is acting on.'\n        },\n        status: {\n          $ref: '#/$defs/operation_status'\n        },\n        type: {\n          $ref: '#/$defs/operation_type'\n        },\n        updated_at: {\n          type: 'string',\n          description: 'When the Operation was updated.',\n          format: 'date-time'\n        }\n      },\n      required: [        'id',\n        'created_at',\n        'kind',\n        'resource_id',\n        'status',\n        'type',\n        'updated_at'\n      ]\n    },\n    operation_kind: {\n      type: 'string',\n      description: 'Kind of Operation.',\n      enum: [        'vm',\n        'volume',\n        'vpc',\n        'firewall_rule'\n      ]\n    },\n    operation_status: {\n      type: 'string',\n      description: 'Status of the Operation.',\n      enum: [        'pending',\n        'running',\n        'done',\n        'failed',\n        'unknown'\n      ]\n    },\n    operation_type: {\n      type: 'string',\n      description: 'Type of Operation.',\n      enum: [        'create',\n        'update',\n        'delete',\n        'restart'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      bandwidth_mbps: {
        $ref: '#/$defs/connect_bandwidth_mbps',
      },
      cidrs: {
        type: 'array',
        description: 'CIDRs for the Connect Connection. Must be in network-aligned/canonical form.',
        items: {
          type: 'string',
        },
      },
      name: {
        type: 'string',
        description: 'Name of the Connect Connection',
      },
      provider_cidrs: {
        type: 'array',
        description: 'Provider CIDRs. Must be in network-aligned/canonical form.',
        items: {
          type: 'string',
        },
      },
      region: {
        $ref: '#/$defs/region_name',
      },
      aws: {
        $ref: '#/$defs/connect_connection_aws_config_request',
      },
      tags: {
        type: 'array',
        description: 'Tags to attach to the Connect Connection',
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
    required: ['bandwidth_mbps', 'cidrs', 'name', 'provider_cidrs', 'region'],
    $defs: {
      connect_bandwidth_mbps: {
        type: 'string',
        description: 'Connect Connection speed in Mbps',
        enum: [50, 200, 500, 1000, 2000],
      },
      region_name: {
        type: 'string',
        description: 'Region the resource is in.',
        enum: [
          'us-sea-1',
          'us-sva-1',
          'us-chi-1',
          'us-wdc-1',
          'eu-frk-1',
          'ap-sin-1',
          'ap-seo-1',
          'ap-tyo-1',
        ],
      },
      connect_connection_aws_config_request: {
        type: 'object',
        description: 'AWS provider configuration',
        properties: {
          account_id: {
            type: 'string',
            description: 'AWS account id',
          },
          region: {
            type: 'string',
            description: 'AWS region where the connection will be established',
          },
        },
        required: ['account_id', 'region'],
      },
    },
  },
  annotations: {},
};

export const handler = async (client: NirvanaLabs, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.networking.connect.connections.create(body)),
    );
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
