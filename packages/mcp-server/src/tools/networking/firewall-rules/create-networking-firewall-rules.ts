// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@nirvana-labs/nirvana-mcp/filtering';
import { Metadata, asTextContentResult } from '@nirvana-labs/nirvana-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import NirvanaLabs from '@nirvana-labs/nirvana';

export const metadata: Metadata = {
  resource: 'networking.firewall_rules',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/networking/vpcs/{vpc_id}/firewall_rules',
  operationId: 'create_firewall_rule',
};

export const tool: Tool = {
  name: 'create_networking_firewall_rules',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate a firewall rule\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/operation',\n  $defs: {\n    operation: {\n      type: 'object',\n      description: 'Operation details.',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Unique identifier for the operation.'\n        },\n        created_at: {\n          type: 'string',\n          description: 'When the operation was created.',\n          format: 'date-time'\n        },\n        kind: {\n          $ref: '#/$defs/operation_kind'\n        },\n        resource_id: {\n          type: 'string',\n          description: 'ID of the resource that the operation is acting on.'\n        },\n        status: {\n          $ref: '#/$defs/operation_status'\n        },\n        type: {\n          $ref: '#/$defs/operation_type'\n        },\n        updated_at: {\n          type: 'string',\n          description: 'When the operation was updated.',\n          format: 'date-time'\n        }\n      },\n      required: [        'id',\n        'created_at',\n        'kind',\n        'resource_id',\n        'status',\n        'type',\n        'updated_at'\n      ]\n    },\n    operation_kind: {\n      type: 'string',\n      description: 'Kind of operation.',\n      enum: [        'vm',\n        'volume',\n        'vpc',\n        'firewall_rule'\n      ]\n    },\n    operation_status: {\n      type: 'string',\n      description: 'Status of the operation.',\n      enum: [        'pending',\n        'running',\n        'done',\n        'failed',\n        'unknown'\n      ]\n    },\n    operation_type: {\n      type: 'string',\n      description: 'Type of operation.',\n      enum: [        'create',\n        'update',\n        'delete',\n        'restart'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      vpc_id: {
        type: 'string',
      },
      destination_address: {
        type: 'string',
        description: 'Destination address of the firewall rule. Either VPC CIDR or VM in VPC.',
      },
      destination_ports: {
        type: 'array',
        description: 'Destination ports of the firewall rule.',
        items: {
          type: 'string',
        },
      },
      name: {
        type: 'string',
        description: 'Name of the firewall rule.',
      },
      protocol: {
        type: 'string',
        description: 'Protocol of the firewall rule.',
        enum: ['tcp', 'udp'],
      },
      source_address: {
        type: 'string',
        description: 'Source address of the firewall rule. Address of 0.0.0.0 requires a CIDR mask of 0.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['vpc_id', 'destination_address', 'destination_ports', 'name', 'protocol', 'source_address'],
  },
  annotations: {},
};

export const handler = async (client: NirvanaLabs, args: Record<string, unknown> | undefined) => {
  const { vpc_id, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.networking.firewallRules.create(vpc_id, body)),
  );
};

export default { metadata, tool, handler };
