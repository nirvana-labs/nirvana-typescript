// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@nirvana-labs/nirvana-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import NirvanaLabs from '@nirvana-labs/nirvana';

export const metadata: Metadata = {
  resource: 'vektor.buy.buy',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/vektor/buy/buy',
  operationId: 'buy',
};

export const tool: Tool = {
  name: 'create_buy_vektor_buy',
  description: 'Buy an asset with another asset',
  inputSchema: {
    type: 'object',
    properties: {
      blockchain: {
        $ref: '#/$defs/blockchain_id_or_blockchain_symbol',
      },
      from: {
        $ref: '#/$defs/account',
      },
      receive_amount: {
        $ref: '#/$defs/decimal',
      },
      receive_asset: {
        $ref: '#/$defs/asset_id_or_address_evm_or_asset_symbol',
      },
      spend_asset: {
        $ref: '#/$defs/asset_id_or_address_evm_or_asset_symbol',
      },
      venues: {
        type: 'array',
        title: 'VenueIDOrVenueSymbolList',
        description: 'A list of venue IDs or venue symbols',
        items: {
          $ref: '#/$defs/venue_id_or_venue_symbol',
        },
      },
      slippage: {
        type: 'string',
        title: 'Decimal',
        description: 'An arbitrary precision decimal represented as a string',
      },
    },
    required: ['blockchain', 'from', 'receive_amount', 'receive_asset', 'spend_asset', 'venues'],
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
      venue_id_or_venue_symbol: {
        type: 'string',
        title: 'VenueID',
        description: 'A venue ID, represented as a TypeID with `venue` prefix',
      },
    },
  },
  annotations: {},
};

export const handler = async (client: NirvanaLabs, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.vektor.buy.buy.create(body));
};

export default { metadata, tool, handler };
