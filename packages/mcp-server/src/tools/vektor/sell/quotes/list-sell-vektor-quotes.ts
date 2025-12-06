// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from '@nirvana-labs/nirvana-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import NirvanaLabs from '@nirvana-labs/nirvana';

export const metadata: Metadata = {
  resource: 'vektor.sell.quotes',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/vektor/sell/quotes',
  operationId: 'sell_quotes',
};

export const tool: Tool = {
  name: 'list_sell_vektor_quotes',
  description: 'Get quotes for selling an exact amount of an asset at current market rate',
  inputSchema: {
    type: 'object',
    properties: {
      blockchain: {
        $ref: '#/$defs/blockchain_id_or_blockchain_symbol',
      },
      receive_asset: {
        $ref: '#/$defs/asset_id_or_address_evm_or_asset_symbol',
      },
      spend_amount: {
        $ref: '#/$defs/decimal',
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
      quote_asset_symbol: {
        type: 'string',
        title: 'AssetSymbol',
        description: 'An asset symbol',
      },
    },
    required: ['blockchain', 'receive_asset', 'spend_amount', 'spend_asset', 'venues'],
    $defs: {
      blockchain_id_or_blockchain_symbol: {
        type: 'string',
        title: 'BlockchainID',
        description: 'A blockchain ID, represented as a TypeID with `blockchain` prefix',
      },
      asset_id_or_address_evm_or_asset_symbol: {
        type: 'string',
        title: 'AssetID',
        description: 'An asset ID, represented as a TypeID with `asset` prefix',
      },
      decimal: {
        type: 'string',
        title: 'Decimal',
        description: 'An arbitrary precision decimal represented as a string',
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
  try {
    return asTextContentResult(await client.vektor.sell.quotes.list(body));
  } catch (error) {
    if (error instanceof NirvanaLabs.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
