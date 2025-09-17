// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@nirvana-labs/nirvana-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import NirvanaLabs from '@nirvana-labs/nirvana';

export const metadata: Metadata = {
  resource: 'vektor.wrap.unwrap',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/vektor/wrap/unwrap',
  operationId: 'unwrap',
};

export const tool: Tool = {
  name: 'create_wrap_vektor_unwrap',
  description: 'Unwrap the wrapped native asset',
  inputSchema: {
    type: 'object',
    properties: {
      amount: {
        $ref: '#/$defs/decimal',
      },
      blockchain: {
        $ref: '#/$defs/blockchain_id_or_blockchain_symbol',
      },
      from: {
        $ref: '#/$defs/account',
      },
    },
    required: ['amount', 'blockchain', 'from'],
    $defs: {
      decimal: {
        type: 'string',
        title: 'Decimal',
        description: 'An arbitrary precision decimal represented as a string',
      },
      blockchain_id_or_blockchain_symbol: {
        type: 'string',
        title: 'BlockchainID',
        description: 'A blockchain ID, represented as a TypeID with `blockchain` prefix',
      },
      account: {
        type: 'string',
        title: 'AddressEVM',
        description: 'An EVM address',
      },
    },
  },
  annotations: {},
};

export const handler = async (client: NirvanaLabs, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.vektor.wrap.unwrap.create(body));
};

export default { metadata, tool, handler };
