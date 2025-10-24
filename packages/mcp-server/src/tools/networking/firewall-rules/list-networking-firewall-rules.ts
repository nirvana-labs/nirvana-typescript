// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@nirvana-labs/nirvana-mcp/filtering';
import { Metadata, asTextContentResult } from '@nirvana-labs/nirvana-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import NirvanaLabs from '@nirvana-labs/nirvana';

export const metadata: Metadata = {
  resource: 'networking.firewall_rules',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/networking/vpcs/{vpc_id}/firewall_rules',
  operationId: 'list_firewall_rules',
};

export const tool: Tool = {
  name: 'list_networking_firewall_rules',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList all firewall rules\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/firewall_rule_list',\n  $defs: {\n    firewall_rule_list: {\n      type: 'object',\n      properties: {\n        items: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/firewall_rule'\n          }\n        },\n        pagination: {\n          $ref: '#/$defs/pagination'\n        }\n      },\n      required: [        'items'\n      ]\n    },\n    firewall_rule: {\n      type: 'object',\n      description: 'Firewall rule details.',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Unique identifier for the Firewall Rule.'\n        },\n        created_at: {\n          type: 'string',\n          description: 'When the Firewall Rule was created.',\n          format: 'date-time'\n        },\n        destination_address: {\n          type: 'string',\n          description: 'Destination address of the Firewall Rule. Either VPC CIDR or VM in VPC.'\n        },\n        destination_ports: {\n          type: 'array',\n          description: 'Destination ports of the Firewall Rule.',\n          items: {\n            type: 'string'\n          }\n        },\n        name: {\n          type: 'string',\n          description: 'Name of the Firewall Rule.'\n        },\n        protocol: {\n          type: 'string',\n          description: 'Protocol of the Firewall Rule.',\n          enum: [            'tcp',\n            'udp'\n          ]\n        },\n        source_address: {\n          type: 'string',\n          description: 'Source address of the Firewall Rule. Address of 0.0.0.0 requires a CIDR mask of 0.'\n        },\n        status: {\n          $ref: '#/$defs/resource_status'\n        },\n        tags: {\n          type: 'array',\n          description: 'Tags to attach to the Firewall Rule.',\n          items: {\n            type: 'string'\n          }\n        },\n        updated_at: {\n          type: 'string',\n          description: 'When the Firewall Rule was updated.',\n          format: 'date-time'\n        },\n        vpc_id: {\n          type: 'string',\n          description: 'ID of the VPC the Firewall Rule belongs to.'\n        }\n      },\n      required: [        'id',\n        'created_at',\n        'destination_address',\n        'destination_ports',\n        'name',\n        'protocol',\n        'source_address',\n        'status',\n        'tags',\n        'updated_at',\n        'vpc_id'\n      ]\n    },\n    resource_status: {\n      type: 'string',\n      description: 'Status of the resource.',\n      enum: [        'pending',\n        'creating',\n        'updating',\n        'ready',\n        'deleting',\n        'deleted',\n        'error'\n      ]\n    },\n    pagination: {\n      type: 'object',\n      description: 'Pagination response details.',\n      properties: {\n        next_cursor: {\n          type: 'string'\n        },\n        previous_cursor: {\n          type: 'string'\n        },\n        total_count: {\n          type: 'integer'\n        }\n      },\n      required: [        'next_cursor',\n        'previous_cursor',\n        'total_count'\n      ]\n    }\n  }\n}\n```",
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
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.networking.firewallRules.list(vpc_id)),
  );
};

export default { metadata, tool, handler };
