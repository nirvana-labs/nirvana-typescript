// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@nirvana-labs/nirvana-mcp/filtering';
import { Metadata, asTextContentResult } from '@nirvana-labs/nirvana-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import NirvanaLabs from '@nirvana-labs/nirvana';

export const metadata: Metadata = {
  resource: 'vektor.registry.lend_markets',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/vektor/registry/lend/markets',
  operationId: 'registry_lend_markets_list',
};

export const tool: Tool = {
  name: 'list_registry_vektor_lend_markets',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList lend markets in the registry, optionally filtered by blockchain, assets or venues\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'RegistryLendBorrowMarketListOutput',\n  properties: {\n    items: {\n      type: 'array',\n      title: 'RegistryLendBorrowMarketList',\n      description: 'A list of registry data for lend borrow markets',\n      items: {\n        $ref: '#/$defs/registry_lend_borrow_market'\n      }\n    }\n  },\n  required: [    'items'\n  ],\n  $defs: {\n    registry_lend_borrow_market: {\n      type: 'object',\n      title: 'RegistryLendBorrowMarket',\n      description: 'Registry data for a lend borrow market',\n      properties: {\n        id: {\n          $ref: '#/$defs/lend_borrow_market_id'\n        },\n        asset: {\n          $ref: '#/$defs/asset'\n        },\n        blockchain: {\n          $ref: '#/$defs/blockchain'\n        },\n        venue: {\n          $ref: '#/$defs/venue'\n        }\n      },\n      required: [        'id',\n        'asset',\n        'blockchain',\n        'venue'\n      ]\n    },\n    lend_borrow_market_id: {\n      type: 'string',\n      title: 'LendBorrowMarketID',\n      description: 'A lend/borrow market ID, represented as a TypeID with `lend_borrow_market` prefix'\n    },\n    asset: {\n      type: 'object',\n      title: 'Asset',\n      description: 'On-chain asset (aka token)',\n      properties: {\n        id: {\n          $ref: '#/$defs/asset_id'\n        },\n        address: {\n          type: 'string',\n          title: 'AddressEVM',\n          description: 'An EVM address'\n        },\n        blockchain: {\n          $ref: '#/$defs/blockchain'\n        },\n        decimals: {\n          type: 'integer',\n          description: 'Asset\\'s decimal places'\n        },\n        name: {\n          type: 'string',\n          description: 'Asset\\'s name'\n        },\n        symbol: {\n          type: 'string',\n          description: 'Asset\\'s symbol'\n        }\n      },\n      required: [        'id',\n        'address',\n        'blockchain',\n        'decimals',\n        'name',\n        'symbol'\n      ]\n    },\n    asset_id: {\n      type: 'string',\n      title: 'AssetID',\n      description: 'An asset ID, represented as a TypeID with `asset` prefix'\n    },\n    blockchain: {\n      type: 'object',\n      title: 'Blockchain',\n      description: 'Data about a blockchain',\n      properties: {\n        id: {\n          $ref: '#/$defs/blockchain_id'\n        },\n        chain_data: {\n          $ref: '#/$defs/evm_chain_data'\n        },\n        chain_type: {\n          $ref: '#/$defs/chain_type'\n        },\n        explorer_url: {\n          type: 'string',\n          description: 'The blockchain\\'s explorer URL'\n        },\n        name: {\n          $ref: '#/$defs/blockchain_name'\n        },\n        network: {\n          $ref: '#/$defs/network_name'\n        },\n        symbol: {\n          $ref: '#/$defs/blockchain_symbol'\n        }\n      },\n      required: [        'id',\n        'chain_data',\n        'chain_type',\n        'explorer_url',\n        'name',\n        'network',\n        'symbol'\n      ]\n    },\n    blockchain_id: {\n      type: 'string',\n      title: 'BlockchainID',\n      description: 'A blockchain ID, represented as a TypeID with `blockchain` prefix'\n    },\n    evm_chain_data: {\n      type: 'object',\n      title: 'EVMChainData',\n      description: 'Data about an EVM blockchain',\n      properties: {\n        chain_id: {\n          type: 'integer',\n          description: 'Chain ID'\n        }\n      },\n      required: [        'chain_id'\n      ]\n    },\n    chain_type: {\n      type: 'string',\n      title: 'ChainType',\n      description: 'Blockchain ecosystem',\n      enum: [        'evm'\n      ]\n    },\n    blockchain_name: {\n      type: 'string',\n      title: 'BlockchainName',\n      description: 'BlockchainName'\n    },\n    network_name: {\n      type: 'string',\n      title: 'NetworkName',\n      description: 'Blockchain\\'s network'\n    },\n    blockchain_symbol: {\n      type: 'string',\n      title: 'BlockchainSymbol',\n      description: 'A blockchain symbol'\n    },\n    venue: {\n      type: 'object',\n      title: 'Venue',\n      description: 'On-chain venue',\n      properties: {\n        id: {\n          $ref: '#/$defs/venue_id'\n        },\n        blockchain_ids: {\n          type: 'array',\n          title: 'BlockchainIDList',\n          description: 'A list of blockchain IDs',\n          items: {\n            $ref: '#/$defs/blockchain_id'\n          }\n        },\n        name: {\n          type: 'string',\n          description: 'Venue name'\n        },\n        symbol: {\n          $ref: '#/$defs/venue_symbol'\n        },\n        type: {\n          type: 'string',\n          description: 'Venue type'\n        },\n        url: {\n          type: 'string',\n          description: 'Venue url'\n        }\n      },\n      required: [        'id',\n        'blockchain_ids',\n        'name',\n        'symbol',\n        'type',\n        'url'\n      ]\n    },\n    venue_id: {\n      type: 'string',\n      title: 'VenueID',\n      description: 'A venue ID, represented as a TypeID with `venue` prefix'\n    },\n    venue_symbol: {\n      type: 'string',\n      title: 'VenueSymbol',\n      description: 'A venue symbol'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        title: 'LendBorrowMarketID',
        description: 'A lend/borrow market ID, represented as a TypeID with `lend_borrow_market` prefix',
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
        $ref: '#/$defs/blockchain_id',
      },
      venues: {
        type: 'array',
        title: 'VenueIDOrVenueSymbolList',
        description: 'A list of venue IDs or venue symbols',
        items: {
          $ref: '#/$defs/venue_id_or_venue_symbol',
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
    $defs: {
      asset_id_or_address_evm_or_asset_symbol: {
        type: 'string',
        title: 'AssetID',
        description: 'An asset ID, represented as a TypeID with `asset` prefix',
      },
      blockchain_id: {
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
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.vektor.registry.lendMarkets.list(body)),
  );
};

export default { metadata, tool, handler };
