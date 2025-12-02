// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from '@nirvana-labs/nirvana-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import NirvanaLabs from '@nirvana-labs/nirvana';

export const metadata: Metadata = {
  resource: 'vektor.borrow.repay',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/vektor/borrow/repay',
  operationId: 'borrow_repay',
};

export const tool: Tool = {
  name: 'create_borrow_vektor_repay',
  description: 'Repay to a borrow',
  inputSchema: {
    type: 'object',
    properties: {
      blockchain: {
        $ref: '#/$defs/blockchain_id_or_blockchain_symbol',
      },
      from: {
        $ref: '#/$defs/account',
      },
      market_id: {
        $ref: '#/$defs/lend_borrow_market_id',
      },
      amount: {
        type: 'string',
        title: 'Decimal',
        description: 'An arbitrary precision decimal represented as a string',
      },
      asset: {
        $ref: '#/$defs/asset_id',
      },
    },
    required: ['blockchain', 'from', 'market_id'],
    $defs: {
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
      lend_borrow_market_id: {
        type: 'string',
        title: 'LendBorrowMarketID',
        description: 'A lend/borrow market ID, represented as a TypeID with `lend_borrow_market` prefix',
      },
      asset_id: {
        type: 'string',
        title: 'AssetID',
        description: 'An asset ID, represented as a TypeID with `asset` prefix',
      },
    },
  },
  annotations: {},
};

export const handler = async (client: NirvanaLabs, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  try {
    return asTextContentResult(await client.vektor.borrow.repay.create(body));
  } catch (error) {
    if (error instanceof NirvanaLabs.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
