// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@nirvana-labs/nirvana-mcp/filtering';
import { Metadata, asTextContentResult } from '@nirvana-labs/nirvana-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import NirvanaLabs from '@nirvana-labs/nirvana';

export const metadata: Metadata = {
  resource: 'vektor.balances',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/vektor/balances',
  operationId: 'balances_list',
};

export const tool: Tool = {
  name: 'list_vektor_balances',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList balances for a given set of assets and addresses\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/balance_list_response',\n  $defs: {\n    balance_list_response: {\n      type: 'object',\n      title: 'BalanceListOutput',\n      properties: {\n        items: {\n          type: 'array',\n          title: 'BalanceList',\n          description: 'Array of Balance',\n          items: {\n            $ref: '#/$defs/balance'\n          }\n        }\n      },\n      required: [        'items'\n      ]\n    },\n    balance: {\n      type: 'object',\n      title: 'Balance',\n      description: 'Balance properties',\n      properties: {\n        account: {\n          $ref: '#/$defs/address_evm'\n        },\n        amount: {\n          $ref: '#/$defs/decimal'\n        },\n        asset_id: {\n          $ref: '#/$defs/asset_id'\n        },\n        blockstamp: {\n          $ref: '#/$defs/blockstamp'\n        },\n        value: {\n          $ref: '#/$defs/decimal'\n        },\n        quote_asset_symbol: {\n          type: 'string',\n          title: 'AssetSymbol',\n          description: 'An asset symbol'\n        }\n      },\n      required: [        'account',\n        'amount',\n        'asset_id',\n        'blockstamp',\n        'value'\n      ]\n    },\n    address_evm: {\n      type: 'string',\n      title: 'AddressEVM',\n      description: 'An EVM address'\n    },\n    decimal: {\n      type: 'string',\n      title: 'Decimal',\n      description: 'An arbitrary precision decimal represented as a string'\n    },\n    asset_id: {\n      type: 'string',\n      title: 'AssetID',\n      description: 'An asset ID, represented as a TypeID with `asset` prefix'\n    },\n    blockstamp: {\n      type: 'object',\n      title: 'Blockstamp',\n      description: 'Information about a specific block number and its timestamp',\n      properties: {\n        block_number: {\n          $ref: '#/$defs/block_number'\n        },\n        blockchain: {\n          $ref: '#/$defs/blockchain'\n        },\n        timestamp: {\n          $ref: '#/$defs/timestamp'\n        }\n      },\n      required: [        'block_number',\n        'blockchain',\n        'timestamp'\n      ]\n    },\n    block_number: {\n      type: 'integer',\n      title: 'BlockNumber',\n      description: 'A block number'\n    },\n    blockchain: {\n      type: 'object',\n      title: 'Blockchain',\n      description: 'Data about a blockchain',\n      properties: {\n        id: {\n          $ref: '#/$defs/blockchain_id'\n        },\n        chain_data: {\n          $ref: '#/$defs/evm_chain_data'\n        },\n        chain_type: {\n          $ref: '#/$defs/chain_type'\n        },\n        explorer_url: {\n          type: 'string',\n          description: 'The blockchain\\'s explorer URL'\n        },\n        name: {\n          $ref: '#/$defs/blockchain_name'\n        },\n        network: {\n          $ref: '#/$defs/network_name'\n        },\n        symbol: {\n          $ref: '#/$defs/blockchain_symbol'\n        }\n      },\n      required: [        'id',\n        'chain_data',\n        'chain_type',\n        'explorer_url',\n        'name',\n        'network',\n        'symbol'\n      ]\n    },\n    blockchain_id: {\n      type: 'string',\n      title: 'BlockchainID',\n      description: 'A blockchain ID, represented as a TypeID with `blockchain` prefix'\n    },\n    evm_chain_data: {\n      type: 'object',\n      title: 'EVMChainData',\n      description: 'Data about an EVM blockchain',\n      properties: {\n        chain_id: {\n          type: 'integer',\n          description: 'Chain ID'\n        }\n      },\n      required: [        'chain_id'\n      ]\n    },\n    chain_type: {\n      type: 'string',\n      title: 'ChainType',\n      description: 'Blockchain ecosystem',\n      enum: [        'evm'\n      ]\n    },\n    blockchain_name: {\n      type: 'string',\n      title: 'BlockchainName',\n      description: 'BlockchainName'\n    },\n    network_name: {\n      type: 'string',\n      title: 'NetworkName',\n      description: 'Blockchain\\'s network'\n    },\n    blockchain_symbol: {\n      type: 'string',\n      title: 'BlockchainSymbol',\n      description: 'A blockchain symbol'\n    },\n    timestamp: {\n      type: 'string',\n      title: 'Timestamp',\n      description: 'ISO8601 Timestamp'\n    }\n  }\n}\n```",
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
      at: {
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
    required: ['accounts', 'assets', 'blockchain'],
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
  return asTextContentResult(await maybeFilter(jq_filter, await client.vektor.balances.list(body)));
};

export default { metadata, tool, handler };
