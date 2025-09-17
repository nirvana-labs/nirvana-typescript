// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@nirvana-labs/nirvana-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import NirvanaLabs from '@nirvana-labs/nirvana';

export const metadata: Metadata = {
  resource: 'vektor.lp.withdraw_quote',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/vektor/lp/withdraw_quote',
  operationId: 'lp_withdraw_quote',
};

export const tool: Tool = {
  name: 'create_lp_vektor_withdraw_quote',
  description: 'Simulate withdrawing liquidity from a specific existing LP position',
  inputSchema: {
    type: 'object',
    properties: {
      account: {
        $ref: '#/$defs/account',
      },
      amount: {
        $ref: '#/$defs/decimal',
      },
      asset: {
        $ref: '#/$defs/asset_id_or_address_evm_or_asset_symbol',
      },
      blockchain: {
        $ref: '#/$defs/blockchain_id_or_blockchain_symbol',
      },
      lp_pool_id: {
        type: 'string',
        title: 'LPPoolID',
        description: 'A LP pool ID, represented as a TypeID with `lp_pool` prefix',
      },
      quote_asset_symbol: {
        type: 'string',
        title: 'AssetSymbol',
        description: 'An asset symbol',
      },
      specifier: {
        type: 'object',
        title: 'LPUniswapV3PositionSpecifier',
        description: 'Uniswap position specifier',
        properties: {
          position_nft: {
            $ref: '#/$defs/nft',
          },
        },
        required: ['position_nft'],
      },
    },
    required: ['account', 'amount', 'asset', 'blockchain', 'lp_pool_id'],
    $defs: {
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
      blockchain_id_or_blockchain_symbol: {
        type: 'string',
        title: 'BlockchainID',
        description: 'A blockchain ID, represented as a TypeID with `blockchain` prefix',
      },
      nft: {
        type: 'object',
        title: 'NFT',
        description: 'A NFT',
        properties: {
          id: {
            type: 'integer',
            description: 'The NFT id',
          },
          collection: {
            $ref: '#/$defs/nft_collection',
          },
        },
        required: ['id', 'collection'],
      },
      nft_collection: {
        type: 'object',
        title: 'NFTCollection',
        description: 'A NFT Collection',
        properties: {
          address: {
            type: 'string',
            description: "The NFT Collection's address",
          },
          blockchain: {
            type: 'object',
            title: 'Blockchain',
            description: 'Data about a blockchain',
            properties: {
              id: {
                $ref: '#/$defs/blockchain_id',
              },
              chain_data: {
                $ref: '#/$defs/evm_chain_data',
              },
              chain_type: {
                $ref: '#/$defs/chain_type',
              },
              explorer_url: {
                type: 'string',
                description: "The blockchain's explorer URL",
              },
              name: {
                $ref: '#/$defs/blockchain_name',
              },
              network: {
                $ref: '#/$defs/network_name',
              },
              symbol: {
                $ref: '#/$defs/blockchain_symbol',
              },
            },
            required: ['id', 'chain_data', 'chain_type', 'explorer_url', 'name', 'network', 'symbol'],
          },
          name: {
            type: 'string',
            description: "The NFT Collection's name",
          },
        },
        required: ['address'],
      },
      blockchain_id: {
        type: 'string',
        title: 'BlockchainID',
        description: 'A blockchain ID, represented as a TypeID with `blockchain` prefix',
      },
      evm_chain_data: {
        type: 'object',
        title: 'EVMChainData',
        description: 'Data about an EVM blockchain',
        properties: {
          chain_id: {
            type: 'integer',
            description: 'Chain ID',
          },
        },
        required: ['chain_id'],
      },
      chain_type: {
        type: 'string',
        title: 'ChainType',
        description: 'Blockchain ecosystem',
        enum: ['evm'],
      },
      blockchain_name: {
        type: 'string',
        title: 'BlockchainName',
        description: 'BlockchainName',
      },
      network_name: {
        type: 'string',
        title: 'NetworkName',
        description: "Blockchain's network",
      },
      blockchain_symbol: {
        type: 'string',
        title: 'BlockchainSymbol',
        description: 'A blockchain symbol',
      },
    },
  },
  annotations: {},
};

export const handler = async (client: NirvanaLabs, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.vektor.lp.withdrawQuote.create(body));
};

export default { metadata, tool, handler };
