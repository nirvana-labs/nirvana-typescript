// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@nirvana-labs/nirvana-mcp/filtering';
import { Metadata, asTextContentResult } from '@nirvana-labs/nirvana-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import NirvanaLabs from '@nirvana-labs/nirvana';

export const metadata: Metadata = {
  resource: 'vektor.buy.quotes',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/vektor/buy/quotes',
  operationId: 'buy_quotes',
};

export const tool: Tool = {
  name: 'list_buy_vektor_quotes',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet quotes for buying an exact amount of an asset at current market rate\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/quote_list_response',\n  $defs: {\n    quote_list_response: {\n      type: 'object',\n      title: 'BuyQuoteListOutput',\n      properties: {\n        items: {\n          type: 'array',\n          title: 'BuyQuoteList',\n          description: 'A list of buy quotes',\n          items: {\n            $ref: '#/$defs/buy_quote'\n          }\n        }\n      },\n      required: [        'items'\n      ]\n    },\n    buy_quote: {\n      type: 'object',\n      title: 'BuyQuote',\n      description: 'A buy quote',\n      properties: {\n        blockchain: {\n          $ref: '#/$defs/blockchain'\n        },\n        fee_estimate: {\n          type: 'object',\n          title: 'NetworkFeeEstimate',\n          description: 'Estimated cost of an operation',\n          properties: {\n            amount: {\n              $ref: '#/$defs/decimal'\n            },\n            asset: {\n              $ref: '#/$defs/asset'\n            },\n            cost: {\n              type: 'string',\n              title: 'Decimal',\n              description: 'An arbitrary precision decimal represented as a string'\n            },\n            quote_asset_symbol: {\n              type: 'string',\n              title: 'AssetSymbol',\n              description: 'An asset symbol'\n            }\n          },\n          required: [            'amount',\n            'asset',\n            'cost',\n            'quote_asset_symbol'\n          ]\n        },\n        quote_asset_symbol: {\n          type: 'string',\n          title: 'AssetSymbol',\n          description: 'An asset symbol'\n        },\n        quote_info: {\n          anyOf: [            {\n              $ref: '#/$defs/quote_info_uniswap_v2'\n            },\n            {\n              $ref: '#/$defs/quote_info_uniswap_v3'\n            }\n          ],\n          title: 'BuyQuoteInfo',\n          description: 'Quote info for buy quotes'\n        },\n        quote_value: {\n          type: 'string',\n          title: 'Decimal',\n          description: 'An arbitrary precision decimal represented as a string'\n        },\n        receive_amount: {\n          $ref: '#/$defs/decimal'\n        },\n        receive_asset: {\n          $ref: '#/$defs/asset'\n        },\n        spend_amount: {\n          $ref: '#/$defs/decimal'\n        },\n        spend_asset: {\n          $ref: '#/$defs/asset'\n        },\n        venue: {\n          $ref: '#/$defs/venue'\n        }\n      },\n      required: [        'blockchain',\n        'fee_estimate',\n        'quote_asset_symbol',\n        'quote_info',\n        'quote_value',\n        'receive_amount',\n        'receive_asset',\n        'spend_amount',\n        'spend_asset',\n        'venue'\n      ]\n    },\n    blockchain: {\n      type: 'object',\n      title: 'Blockchain',\n      description: 'Data about a blockchain',\n      properties: {\n        id: {\n          $ref: '#/$defs/blockchain_id'\n        },\n        chain_data: {\n          $ref: '#/$defs/evm_chain_data'\n        },\n        chain_type: {\n          $ref: '#/$defs/chain_type'\n        },\n        explorer_url: {\n          type: 'string',\n          description: 'The blockchain\\'s explorer URL'\n        },\n        name: {\n          $ref: '#/$defs/blockchain_name'\n        },\n        network: {\n          $ref: '#/$defs/network_name'\n        },\n        symbol: {\n          $ref: '#/$defs/blockchain_symbol'\n        }\n      },\n      required: [        'id',\n        'chain_data',\n        'chain_type',\n        'explorer_url',\n        'name',\n        'network',\n        'symbol'\n      ]\n    },\n    blockchain_id: {\n      type: 'string',\n      title: 'BlockchainID',\n      description: 'A blockchain ID, represented as a TypeID with `blockchain` prefix'\n    },\n    evm_chain_data: {\n      type: 'object',\n      title: 'EVMChainData',\n      description: 'Data about an EVM blockchain',\n      properties: {\n        chain_id: {\n          type: 'integer',\n          description: 'Chain ID'\n        }\n      },\n      required: [        'chain_id'\n      ]\n    },\n    chain_type: {\n      type: 'string',\n      title: 'ChainType',\n      description: 'Blockchain ecosystem',\n      enum: [        'evm'\n      ]\n    },\n    blockchain_name: {\n      type: 'string',\n      title: 'BlockchainName',\n      description: 'BlockchainName'\n    },\n    network_name: {\n      type: 'string',\n      title: 'NetworkName',\n      description: 'Blockchain\\'s network'\n    },\n    blockchain_symbol: {\n      type: 'string',\n      title: 'BlockchainSymbol',\n      description: 'A blockchain symbol'\n    },\n    decimal: {\n      type: 'string',\n      title: 'Decimal',\n      description: 'An arbitrary precision decimal represented as a string'\n    },\n    asset: {\n      type: 'object',\n      title: 'Asset',\n      description: 'On-chain asset (aka token)',\n      properties: {\n        id: {\n          $ref: '#/$defs/asset_id'\n        },\n        address: {\n          type: 'string',\n          title: 'AddressEVM',\n          description: 'An EVM address'\n        },\n        blockchain: {\n          $ref: '#/$defs/blockchain'\n        },\n        decimals: {\n          type: 'integer',\n          description: 'Asset\\'s decimal places'\n        },\n        name: {\n          type: 'string',\n          description: 'Asset\\'s name'\n        },\n        symbol: {\n          type: 'string',\n          description: 'Asset\\'s symbol'\n        }\n      },\n      required: [        'id',\n        'address',\n        'blockchain',\n        'decimals',\n        'name',\n        'symbol'\n      ]\n    },\n    asset_id: {\n      type: 'string',\n      title: 'AssetID',\n      description: 'An asset ID, represented as a TypeID with `asset` prefix'\n    },\n    quote_info_uniswap_v2: {\n      type: 'object',\n      title: 'QuoteInfoUniswapV2',\n      description: 'Quote info for Uniswap V2',\n      properties: {\n        pool_ids: {\n          type: 'array',\n          title: 'LPPoolIDList',\n          description: 'A list of LP pool IDs',\n          items: {\n            type: 'string',\n            title: 'LPPoolID',\n            description: 'A LP pool ID, represented as a TypeID with `lp_pool` prefix'\n          }\n        }\n      },\n      required: [        'pool_ids'\n      ]\n    },\n    quote_info_uniswap_v3: {\n      type: 'object',\n      title: 'QuoteInfoUniswapV3',\n      description: 'Quote info for Uniswap V3',\n      properties: {\n        pool_ids: {\n          type: 'array',\n          title: 'LPPoolIDList',\n          description: 'A list of LP pool IDs',\n          items: {\n            type: 'string',\n            title: 'LPPoolID',\n            description: 'A LP pool ID, represented as a TypeID with `lp_pool` prefix'\n          }\n        }\n      },\n      required: [        'pool_ids'\n      ]\n    },\n    venue: {\n      type: 'object',\n      title: 'Venue',\n      description: 'On-chain venue',\n      properties: {\n        id: {\n          $ref: '#/$defs/venue_id'\n        },\n        blockchain_ids: {\n          type: 'array',\n          title: 'BlockchainIDList',\n          description: 'A list of blockchain IDs',\n          items: {\n            $ref: '#/$defs/blockchain_id'\n          }\n        },\n        name: {\n          type: 'string',\n          description: 'Venue name'\n        },\n        symbol: {\n          $ref: '#/$defs/venue_symbol'\n        },\n        type: {\n          type: 'string',\n          description: 'Venue type'\n        },\n        url: {\n          type: 'string',\n          description: 'Venue url'\n        }\n      },\n      required: [        'id',\n        'blockchain_ids',\n        'name',\n        'symbol',\n        'type',\n        'url'\n      ]\n    },\n    venue_id: {\n      type: 'string',\n      title: 'VenueID',\n      description: 'A venue ID, represented as a TypeID with `venue` prefix'\n    },\n    venue_symbol: {\n      type: 'string',\n      title: 'VenueSymbol',\n      description: 'A venue symbol'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      blockchain: {
        $ref: '#/$defs/blockchain_id_or_blockchain_symbol',
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
      quote_asset_symbol: {
        type: 'string',
        title: 'AssetSymbol',
        description: 'An asset symbol',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['blockchain', 'receive_amount', 'receive_asset', 'spend_asset', 'venues'],
    $defs: {
      blockchain_id_or_blockchain_symbol: {
        type: 'string',
        title: 'BlockchainID',
        description: 'A blockchain ID, represented as a TypeID with `blockchain` prefix',
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
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.vektor.buy.quotes.list(body)));
};

export default { metadata, tool, handler };
