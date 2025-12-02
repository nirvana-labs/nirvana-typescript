// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from '@nirvana-labs/nirvana-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import NirvanaLabs from '@nirvana-labs/nirvana';

export const metadata: Metadata = {
  resource: 'vektor.borrow.markets',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/vektor/borrow/markets/historical',
  operationId: 'borrow_markets_historical',
};

export const tool: Tool = {
  name: 'list_historical_borrow_vektor_markets',
  description: 'Get the current market rates for borrowing an asset',
  inputSchema: {
    type: 'object',
    anyOf: [
      {
        type: 'object',
        properties: {
          assets: {
            type: 'array',
            title: 'AssetIDOrAddressEVMOrAssetSymbolList',
            description: 'A list of asset IDs, EVM addresses or asset symbols',
            items: {
              $ref: '#/$defs/asset_id_or_address_evm_or_asset_symbol',
            },
          },
          blockchain: {
            $ref: '#/$defs/blockchain_id_or_blockchain_symbol',
          },
          from: {
            $ref: '#/$defs/timestamp_or_block_number',
          },
          to: {
            $ref: '#/$defs/timestamp_or_block_number',
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
        required: ['assets', 'blockchain', 'from', 'to', 'venues'],
      },
      {
        type: 'object',
        properties: {
          blockchain: {
            $ref: '#/$defs/blockchain_id_or_blockchain_symbol',
          },
          from: {
            $ref: '#/$defs/timestamp_or_block_number',
          },
          market_ids: {
            type: 'array',
            title: 'LendBorrowMarketIDList',
            description: 'A list of lend/borrow market IDs',
            items: {
              $ref: '#/$defs/lend_borrow_market_id',
            },
          },
          to: {
            $ref: '#/$defs/timestamp_or_block_number',
          },
          quote_asset_symbol: {
            type: 'string',
            title: 'AssetSymbol',
            description: 'An asset symbol',
          },
        },
        required: ['blockchain', 'from', 'market_ids', 'to'],
      },
    ],
    $defs: {
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
      timestamp_or_block_number: {
        anyOf: [
          {
            $ref: '#/$defs/timestamp',
          },
          {
            $ref: '#/$defs/block_number',
          },
        ],
        title: 'TimestampOrBlockNumber',
        description: 'Either a ISO8601 timestamp or a block number',
      },
      timestamp: {
        type: 'string',
        title: 'Timestamp',
        description: 'ISO8601 Timestamp',
      },
      block_number: {
        type: 'integer',
        title: 'BlockNumber',
        description: 'A block number',
      },
      venue_id_or_venue_symbol: {
        type: 'string',
        title: 'VenueID',
        description: 'A venue ID, represented as a TypeID with `venue` prefix',
      },
      lend_borrow_market_id: {
        type: 'string',
        title: 'LendBorrowMarketID',
        description: 'A lend/borrow market ID, represented as a TypeID with `lend_borrow_market` prefix',
      },
    },
  },
  annotations: {},
};

export const handler = async (client: NirvanaLabs, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  try {
    return asTextContentResult(await client.vektor.borrow.markets.listHistorical(body));
  } catch (error) {
    if (error instanceof NirvanaLabs.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
