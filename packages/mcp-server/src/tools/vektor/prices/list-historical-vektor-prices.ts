// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@nirvana-labs/nirvana-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@nirvana-labs/nirvana-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import NirvanaLabs from '@nirvana-labs/nirvana';

export const metadata: Metadata = {
  resource: 'vektor.prices',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/vektor/prices/historical',
  operationId: 'prices_list_historical',
};

export const tool: Tool = {
  name: 'list_historical_vektor_prices',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet a list of asset prices\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/price_list_historical_response',\n  $defs: {\n    price_list_historical_response: {\n      type: 'object',\n      title: 'HistoricalPriceListOutput',\n      properties: {\n        historical: {\n          $ref: '#/$defs/off_chain_historical_range'\n        },\n        items: {\n          type: 'array',\n          title: 'TimestampedListPriceList',\n          items: {\n            type: 'object',\n            title: 'TimestampedPriceList',\n            properties: {\n              items: {\n                type: 'array',\n                title: 'PriceList',\n                description: 'Array of price',\n                items: {\n                  $ref: '#/$defs/price'\n                }\n              },\n              timestamp: {\n                $ref: '#/$defs/timestamp'\n              }\n            },\n            required: [              'items',\n              'timestamp'\n            ]\n          }\n        }\n      },\n      required: [        'historical',\n        'items'\n      ]\n    },\n    off_chain_historical_range: {\n      type: 'object',\n      title: 'OffChainHistoricalRange',\n      description: 'A range of timestamps',\n      properties: {\n        from: {\n          $ref: '#/$defs/timestamp'\n        },\n        to: {\n          $ref: '#/$defs/timestamp'\n        }\n      },\n      required: [        'from',\n        'to'\n      ]\n    },\n    timestamp: {\n      type: 'string',\n      title: 'Timestamp',\n      description: 'ISO8601 Timestamp'\n    },\n    price: {\n      type: 'object',\n      title: 'Price',\n      description: 'A price',\n      properties: {\n        asset_symbol: {\n          $ref: '#/$defs/asset_symbol'\n        },\n        change_1h: {\n          type: 'string',\n          title: 'Decimal',\n          description: 'An arbitrary precision decimal represented as a string'\n        },\n        change_1y: {\n          type: 'string',\n          title: 'Decimal',\n          description: 'An arbitrary precision decimal represented as a string'\n        },\n        change_24h: {\n          type: 'string',\n          title: 'Decimal',\n          description: 'An arbitrary precision decimal represented as a string'\n        },\n        change_30d: {\n          type: 'string',\n          title: 'Decimal',\n          description: 'An arbitrary precision decimal represented as a string'\n        },\n        change_7d: {\n          type: 'string',\n          title: 'Decimal',\n          description: 'An arbitrary precision decimal represented as a string'\n        },\n        market_cap: {\n          type: 'string',\n          title: 'Decimal',\n          description: 'An arbitrary precision decimal represented as a string'\n        },\n        price: {\n          $ref: '#/$defs/decimal'\n        },\n        quote_asset_symbol: {\n          $ref: '#/$defs/asset_symbol'\n        }\n      },\n      required: [        'asset_symbol',\n        'change_1h',\n        'change_1y',\n        'change_24h',\n        'change_30d',\n        'change_7d',\n        'market_cap',\n        'price',\n        'quote_asset_symbol'\n      ]\n    },\n    asset_symbol: {\n      type: 'string',\n      title: 'AssetSymbol',\n      description: 'An asset symbol'\n    },\n    decimal: {\n      type: 'string',\n      title: 'Decimal',\n      description: 'An arbitrary precision decimal represented as a string'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      asset_symbols: {
        type: 'array',
        title: 'AssetSymbolList',
        description: 'A list of asset symbols',
        items: {
          $ref: '#/$defs/asset_symbol',
        },
      },
      quote_asset_symbol: {
        $ref: '#/$defs/asset_symbol',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['asset_symbols'],
    $defs: {
      asset_symbol: {
        type: 'string',
        title: 'AssetSymbol',
        description: 'An asset symbol',
      },
    },
  },
  annotations: {},
};

export const handler = async (client: NirvanaLabs, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.vektor.prices.listHistorical(body)));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
