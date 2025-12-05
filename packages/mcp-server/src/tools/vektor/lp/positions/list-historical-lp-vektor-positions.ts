// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from '@nirvana-labs/nirvana-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import NirvanaLabs from '@nirvana-labs/nirvana';

export const metadata: Metadata = {
  resource: 'vektor.lp.positions',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/vektor/lp/positions/historical',
  operationId: 'lp_positions_historical',
};

export const tool: Tool = {
  name: 'list_historical_lp_vektor_positions',
  description: 'Get info on LP positions',
  inputSchema: {
    type: 'object',
    anyOf: [
      {
        type: 'object',
        properties: {
          accounts: {
            type: 'array',
            title: 'AccountList',
            description: 'A list of accounts. Currently only EVM addresses are supported.',
            items: {
              $ref: '#/$defs/account',
            },
          },
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
          exclude_zeros: {
            type: 'boolean',
            title: 'LPPositionsExcludeZeros',
            description: 'Whether to exclude empty positions',
          },
          quote_asset_symbol: {
            type: 'string',
            title: 'AssetSymbol',
            description: 'An asset symbol',
          },
        },
        required: ['accounts', 'assets', 'blockchain', 'from', 'to', 'venues'],
      },
      {
        type: 'object',
        properties: {
          accounts: {
            type: 'array',
            title: 'AccountList',
            description: 'A list of accounts. Currently only EVM addresses are supported.',
            items: {
              $ref: '#/$defs/account',
            },
          },
          blockchain: {
            $ref: '#/$defs/blockchain_id_or_blockchain_symbol',
          },
          from: {
            $ref: '#/$defs/timestamp_or_block_number',
          },
          lp_pool_ids: {
            type: 'array',
            title: 'LPPoolIDList',
            description: 'A list of LP pool IDs',
            items: {
              type: 'string',
              title: 'LPPoolID',
              description: 'A LP pool ID, represented as a TypeID with `lp_pool` prefix',
            },
          },
          to: {
            $ref: '#/$defs/timestamp_or_block_number',
          },
          exclude_zeros: {
            type: 'boolean',
            title: 'LPPositionsExcludeZeros',
            description: 'Whether to exclude empty positions',
          },
          quote_asset_symbol: {
            type: 'string',
            title: 'AssetSymbol',
            description: 'An asset symbol',
          },
        },
        required: ['accounts', 'blockchain', 'from', 'lp_pool_ids', 'to'],
      },
    ],
    $defs: {
      account: {
        type: 'string',
        title: 'AddressEVM',
        description: 'An EVM address',
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
    },
  },
  annotations: {},
};

export const handler = async (client: NirvanaLabs, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  try {
    return asTextContentResult(await client.vektor.lp.positions.listHistorical(body));
  } catch (error) {
    if (error instanceof NirvanaLabs.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
