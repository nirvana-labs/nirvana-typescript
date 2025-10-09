// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@nirvana-labs/nirvana-mcp/filtering';
import { Metadata, asTextContentResult } from '@nirvana-labs/nirvana-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import NirvanaLabs from '@nirvana-labs/nirvana';

export const metadata: Metadata = {
  resource: 'vektor.borrow.accounts',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/vektor/borrow/accounts',
  operationId: 'borrow_accounts',
};

export const tool: Tool = {
  name: 'list_borrow_vektor_accounts',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet account-level borrow info on specified accounts\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/account_list_response',\n  $defs: {\n    account_list_response: {\n      type: 'object',\n      title: 'BorrowAccountListOutput',\n      properties: {\n        items: {\n          type: 'array',\n          title: 'BorrowAccountList',\n          description: 'A list of borrow accounts',\n          items: {\n            $ref: '#/$defs/borrow_account'\n          }\n        }\n      },\n      required: [        'items'\n      ]\n    },\n    borrow_account: {\n      type: 'object',\n      title: 'BorrowAccount',\n      description: 'A borrow account',\n      properties: {\n        account: {\n          $ref: '#/$defs/account'\n        },\n        available_borrow: {\n          $ref: '#/$defs/decimal'\n        },\n        blockstamp: {\n          $ref: '#/$defs/blockstamp'\n        },\n        health_factor: {\n          $ref: '#/$defs/decimal'\n        },\n        quote_asset_symbol: {\n          type: 'string',\n          title: 'AssetSymbol',\n          description: 'An asset symbol'\n        },\n        total_collateral: {\n          $ref: '#/$defs/decimal'\n        },\n        total_debt: {\n          $ref: '#/$defs/decimal'\n        },\n        venue: {\n          $ref: '#/$defs/venue'\n        }\n      },\n      required: [        'account',\n        'available_borrow',\n        'blockstamp',\n        'health_factor',\n        'quote_asset_symbol',\n        'total_collateral',\n        'total_debt',\n        'venue'\n      ]\n    },\n    account: {\n      type: 'string',\n      title: 'AddressEVM',\n      description: 'An EVM address'\n    },\n    decimal: {\n      type: 'string',\n      title: 'Decimal',\n      description: 'An arbitrary precision decimal represented as a string'\n    },\n    blockstamp: {\n      type: 'object',\n      title: 'Blockstamp',\n      description: 'Information about a specific block number and its timestamp',\n      properties: {\n        block_number: {\n          $ref: '#/$defs/block_number'\n        },\n        blockchain: {\n          $ref: '#/$defs/blockchain'\n        },\n        timestamp: {\n          $ref: '#/$defs/timestamp'\n        }\n      },\n      required: [        'block_number',\n        'blockchain',\n        'timestamp'\n      ]\n    },\n    block_number: {\n      type: 'integer',\n      title: 'BlockNumber',\n      description: 'A block number'\n    },\n    blockchain: {\n      type: 'object',\n      title: 'Blockchain',\n      description: 'Data about a blockchain',\n      properties: {\n        id: {\n          $ref: '#/$defs/blockchain_id'\n        },\n        chain_data: {\n          $ref: '#/$defs/evm_chain_data'\n        },\n        chain_type: {\n          $ref: '#/$defs/chain_type'\n        },\n        explorer_url: {\n          type: 'string',\n          description: 'The blockchain\\'s explorer URL'\n        },\n        name: {\n          $ref: '#/$defs/blockchain_name'\n        },\n        network: {\n          $ref: '#/$defs/network_name'\n        },\n        symbol: {\n          $ref: '#/$defs/blockchain_symbol'\n        }\n      },\n      required: [        'id',\n        'chain_data',\n        'chain_type',\n        'explorer_url',\n        'name',\n        'network',\n        'symbol'\n      ]\n    },\n    blockchain_id: {\n      type: 'string',\n      title: 'BlockchainID',\n      description: 'A blockchain ID, represented as a TypeID with `blockchain` prefix'\n    },\n    evm_chain_data: {\n      type: 'object',\n      title: 'EVMChainData',\n      description: 'Data about an EVM blockchain',\n      properties: {\n        chain_id: {\n          type: 'integer',\n          description: 'Chain ID'\n        }\n      },\n      required: [        'chain_id'\n      ]\n    },\n    chain_type: {\n      type: 'string',\n      title: 'ChainType',\n      description: 'Blockchain ecosystem',\n      enum: [        'evm'\n      ]\n    },\n    blockchain_name: {\n      type: 'string',\n      title: 'BlockchainName',\n      description: 'BlockchainName'\n    },\n    network_name: {\n      type: 'string',\n      title: 'NetworkName',\n      description: 'Blockchain\\'s network'\n    },\n    blockchain_symbol: {\n      type: 'string',\n      title: 'BlockchainSymbol',\n      description: 'A blockchain symbol'\n    },\n    timestamp: {\n      type: 'string',\n      title: 'Timestamp',\n      description: 'ISO8601 Timestamp'\n    },\n    venue: {\n      type: 'object',\n      title: 'Venue',\n      description: 'On-chain venue',\n      properties: {\n        id: {\n          $ref: '#/$defs/venue_id'\n        },\n        blockchain_ids: {\n          type: 'array',\n          title: 'BlockchainIDList',\n          description: 'A list of blockchain IDs',\n          items: {\n            $ref: '#/$defs/blockchain_id'\n          }\n        },\n        name: {\n          type: 'string',\n          description: 'Venue name'\n        },\n        symbol: {\n          $ref: '#/$defs/venue_symbol'\n        },\n        type: {\n          type: 'string',\n          description: 'Venue type'\n        },\n        url: {\n          type: 'string',\n          description: 'Venue url'\n        }\n      },\n      required: [        'id',\n        'blockchain_ids',\n        'name',\n        'symbol',\n        'type',\n        'url'\n      ]\n    },\n    venue_id: {\n      type: 'string',\n      title: 'VenueID',\n      description: 'A venue ID, represented as a TypeID with `venue` prefix'\n    },\n    venue_symbol: {\n      type: 'string',\n      title: 'VenueSymbol',\n      description: 'A venue symbol'\n    }\n  }\n}\n```",
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
    required: ['accounts', 'blockchain', 'venues'],
    $defs: {
      account: {
        type: 'string',
        title: 'AddressEVM',
        description: 'An EVM address',
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
    },
  },
  annotations: {},
};

export const handler = async (client: NirvanaLabs, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.vektor.borrow.accounts.list(body)));
};

export default { metadata, tool, handler };
