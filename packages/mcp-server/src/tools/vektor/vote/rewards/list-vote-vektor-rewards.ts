// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@nirvana-labs/nirvana-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import NirvanaLabs from '@nirvana-labs/nirvana';

export const metadata: Metadata = {
  resource: 'vektor.vote.rewards',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/vektor/vote/rewards',
  operationId: 'vote_rewards',
};

export const tool: Tool = {
  name: 'list_vote_vektor_rewards',
  description: 'Get the unclaimed rewards from LP voting markets',
  inputSchema: {
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
    required: ['accounts', 'assets', 'blockchain', 'venues'],
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
  return asTextContentResult(await client.vektor.vote.rewards.list(body));
};

export default { metadata, tool, handler };
