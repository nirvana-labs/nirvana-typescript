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

/**
 * RPC Node Flex details.
 */
export interface RPCNodesFlex {
  /**
   * Unique identifier for the RPC Node Flex.
   */
  id: string;

  /**
   * Blockchain type.
   */
  blockchain: string;

  /**
   * When the RPC Node Flex was created.
   */
  created_at: string;

  /**
   * RPC endpoint URL.
   */
  endpoint: string;

  /**
   * Name of the RPC Node Flex.
   */
  name: string;

  /**
   * Network type (e.g., mainnet, testnet).
   */
  network: string;

  /**
   * When the RPC Node Flex was updated.
   */
  updated_at: string;
}

/**
 * Blockchain supported by the Flex RPC Node.
 */
export interface RPCNodesFlexBlockchain {
  /**
   * Blockchain type.
   */
  blockchain: string;

  /**
   * Network type (e.g., mainnet, testnet).
   */
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
