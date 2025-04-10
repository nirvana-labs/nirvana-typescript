// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import NirvanaLabs from '@nirvana-labs/nirvana';

export const metadata: Metadata = {
  resource: 'networking.firewall_rules',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_networking_firewall_rules',
  description: 'Update a firewall rule',
  inputSchema: {
    type: 'object',
    properties: {
      vpc_id: {
        type: 'string',
      },
      firewall_rule_id: {
        type: 'string',
      },
      destination_address: {
        type: 'string',
      },
      destination_ports: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      name: {
        type: 'string',
      },
      protocol: {
        type: 'string',
        description: 'Supported Firewall Rule protocols.',
        enum: ['tcp', 'udp'],
      },
      source_address: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: NirvanaLabs, args: any) => {
  const { vpc_id, firewall_rule_id, ...body } = args;
  return client.networking.firewallRules.update(vpc_id, firewall_rule_id, body);
};

export default { metadata, tool, handler };
