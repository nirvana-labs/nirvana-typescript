// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as BlockchainsAPI from './blockchains';
import { Blockchains } from './blockchains';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Flex extends APIResource {
  blockchains: BlockchainsAPI.Blockchains = new BlockchainsAPI.Blockchains(this._client);

  /**
   * List all RPC Node Flex you created
   */
  list(options?: RequestOptions): APIPromise<RPCNodesFlexList> {
    return this._client.get('/v1/rpc_nodes/flex', options);
  }

  /**
   * Get details about an RPC Node Flex
   */
  get(nodeID: string, options?: RequestOptions): APIPromise<RPCNodesFlex> {
    return this._client.get(path`/v1/rpc_nodes/flex/${nodeID}`, options);
  }
}

export interface RPCNodesFlex {
  id: string;

  blockchain: string;

  created_at: string;

  endpoint: string;

  name: string;

  network: string;

  updated_at: string;

  user_id: string;
}

/**
 * Blockchain supported by the API.
 */
export interface RPCNodesFlexBlockchain {
  blockchain: string;

  network: string;
}

export interface RPCNodesFlexBlockchainList {
  items: Array<RPCNodesFlexBlockchain>;
}

export interface RPCNodesFlexList {
  items: Array<RPCNodesFlex>;
}

Flex.Blockchains = Blockchains;

export declare namespace Flex {
  export {
    type RPCNodesFlex as RPCNodesFlex,
    type RPCNodesFlexBlockchain as RPCNodesFlexBlockchain,
    type RPCNodesFlexBlockchainList as RPCNodesFlexBlockchainList,
    type RPCNodesFlexList as RPCNodesFlexList,
  };

  export { Blockchains as Blockchains };
}
