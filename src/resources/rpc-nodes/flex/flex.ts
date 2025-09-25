// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as BlockchainsAPI from './blockchains';
import { Blockchains } from './blockchains';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class FlexResource extends APIResource {
  blockchains: BlockchainsAPI.Blockchains = new BlockchainsAPI.Blockchains(this._client);

  /**
   * List all RPC Node Flex you created
   */
  list(options?: RequestOptions): APIPromise<FlexList> {
    return this._client.get('/v1/rpc_nodes/flex', options);
  }

  /**
   * Get details about an RPC Node Flex
   */
  get(nodeID: string, options?: RequestOptions): APIPromise<Flex> {
    return this._client.get(path`/v1/rpc_nodes/flex/${nodeID}`, options);
  }
}

/**
 * RPC Node Flex details.
 */
export interface Flex {
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
export interface FlexBlockchain {
  /**
   * Blockchain type.
   */
  blockchain: string;

  /**
   * Network type (e.g., mainnet, testnet).
   */
  network: string;
}

export interface FlexBlockchainList {
  items: Array<FlexBlockchain>;
}

export interface FlexList {
  items: Array<Flex>;
}

FlexResource.Blockchains = Blockchains;

export declare namespace FlexResource {
  export {
    type Flex as Flex,
    type FlexBlockchain as FlexBlockchain,
    type FlexBlockchainList as FlexBlockchainList,
    type FlexList as FlexList,
  };

  export { Blockchains as Blockchains };
}
