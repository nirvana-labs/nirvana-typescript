// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from '@nirvana-labs/nirvana-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import NirvanaLabs from '@nirvana-labs/nirvana';

export const metadata: Metadata = {
  resource: 'vektor.move',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/vektor/move/move',
  operationId: 'move',
};

export const tool: Tool = {
  name: 'create_vektor_move',
  description: 'Move balance from one address to another',
  inputSchema: {
    type: 'object',
    properties: {
      amount: {
        $ref: '#/$defs/decimal',
      },
      asset: {
        $ref: '#/$defs/asset_id_or_address_evm_or_asset_symbol',
      },
      blockchain: {
        $ref: '#/$defs/blockchain_id_or_blockchain_symbol',
      },
      from: {
        $ref: '#/$defs/account',
      },
      to: {
        $ref: '#/$defs/account',
      },
    },
    required: ['amount', 'asset', 'blockchain', 'from', 'to'],
    $defs: {
      decimal: {
        type: 'string',
        title: 'Decimal',
        description: 'An arbitrary precision decimal represented as a string',
      },
      asset_id_or_address_evm_or_asset_symbol: {
        type: 'string',
        title: 'AssetID',
        description: 'An asset ID, represented as a TypeID with `asset` prefix',
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
  try {
    return asTextContentResult(await client.vektor.move.create(body));
  } catch (error) {
    if (error instanceof NirvanaLabs.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
