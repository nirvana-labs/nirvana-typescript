// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@nirvana-labs/nirvana-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@nirvana-labs/nirvana-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import NirvanaLabs from '@nirvana-labs/nirvana';

export const metadata: Metadata = {
  resource: 'vektor.registry.assets',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/vektor/registry/assets',
  operationId: 'registry_assets_list',
};

export const tool: Tool = {
  name: 'list_registry_vektor_assets',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList supported assets, optionally filtered by blockchain\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/asset_list_response',\n  $defs: {\n    asset_list_response: {\n      type: 'object',\n      title: 'AssetListOutput',\n      properties: {\n        items: {\n          type: 'array',\n          title: 'AssetList',\n          description: 'Response for multiple assets',\n          items: {\n            $ref: '#/$defs/asset'\n          }\n        }\n      },\n      required: [        'items'\n      ]\n    },\n    asset: {\n      type: 'object',\n      title: 'Asset',\n      description: 'On-chain asset (aka token)',\n      properties: {\n        id: {\n          $ref: '#/$defs/asset_id'\n        },\n        address: {\n          type: 'string',\n          title: 'AddressEVM',\n          description: 'An EVM address'\n        },\n        blockchain: {\n          $ref: '#/$defs/blockchain'\n        },\n        decimals: {\n          type: 'integer',\n          description: 'Asset\\'s decimal places'\n        },\n        name: {\n          type: 'string',\n          description: 'Asset\\'s name'\n        },\n        symbol: {\n          type: 'string',\n          description: 'Asset\\'s symbol'\n        }\n      },\n      required: [        'id',\n        'address',\n        'blockchain',\n        'decimals',\n        'name',\n        'symbol'\n      ]\n    },\n    asset_id: {\n      type: 'string',\n      title: 'AssetID',\n      description: 'An asset ID, represented as a TypeID with `asset` prefix'\n    },\n    blockchain: {\n      type: 'object',\n      title: 'Blockchain',\n      description: 'Data about a blockchain',\n      properties: {\n        id: {\n          $ref: '#/$defs/blockchain_id'\n        },\n        chain_data: {\n          $ref: '#/$defs/evm_chain_data'\n        },\n        chain_type: {\n          $ref: '#/$defs/chain_type'\n        },\n        explorer_url: {\n          type: 'string',\n          description: 'The blockchain\\'s explorer URL'\n        },\n        name: {\n          $ref: '#/$defs/blockchain_name'\n        },\n        network: {\n          $ref: '#/$defs/network_name'\n        },\n        symbol: {\n          $ref: '#/$defs/blockchain_symbol'\n        }\n      },\n      required: [        'id',\n        'chain_data',\n        'chain_type',\n        'explorer_url',\n        'name',\n        'network',\n        'symbol'\n      ]\n    },\n    blockchain_id: {\n      type: 'string',\n      title: 'BlockchainID',\n      description: 'A blockchain ID, represented as a TypeID with `blockchain` prefix'\n    },\n    evm_chain_data: {\n      type: 'object',\n      title: 'EVMChainData',\n      description: 'Data about an EVM blockchain',\n      properties: {\n        chain_id: {\n          type: 'integer',\n          description: 'Chain ID'\n        }\n      },\n      required: [        'chain_id'\n      ]\n    },\n    chain_type: {\n      type: 'string',\n      title: 'ChainType',\n      description: 'Blockchain ecosystem',\n      enum: [        'evm'\n      ]\n    },\n    blockchain_name: {\n      type: 'string',\n      title: 'BlockchainName',\n      description: 'BlockchainName'\n    },\n    network_name: {\n      type: 'string',\n      title: 'NetworkName',\n      description: 'Blockchain\\'s network'\n    },\n    blockchain_symbol: {\n      type: 'string',\n      title: 'BlockchainSymbol',\n      description: 'A blockchain symbol'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        title: 'AssetID',
        description: 'An asset ID, represented as a TypeID with `asset` prefix',
      },
      blockchain: {
        $ref: '#/$defs/blockchain_id',
      },
      symbol: {
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
    required: [],
    $defs: {
      blockchain_id: {
        type: 'string',
        title: 'BlockchainID',
        description: 'A blockchain ID, represented as a TypeID with `blockchain` prefix',
      },
    },
  },
  annotations: {},
};

export const handler = async (client: NirvanaLabs, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.vektor.registry.assets.list(body)));
  } catch (error) {
    if (error instanceof NirvanaLabs.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
