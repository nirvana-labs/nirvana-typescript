// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as BlockchainsAPI from './blockchains';
import { Blockchains } from './blockchains';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Dedicated extends APIResource {
  blockchains: BlockchainsAPI.Blockchains = new BlockchainsAPI.Blockchains(this._client);

  /**
   * List all RPC Node Dedicated you created
   */
  list(options?: RequestOptions): APIPromise<RPCNodesDedicatedList> {
    return this._client.get('/v1/rpc_nodes/dedicated', options);
  }

  /**
   * Get details about an RPC Node Dedicated
   */
  get(nodeID: string, options?: RequestOptions): APIPromise<RPCNodesDedicated> {
    return this._client.get(path`/v1/rpc_nodes/dedicated/${nodeID}`, options);
  }
}

/**
 * RPC Node Dedicated details.
 */
export interface RPCNodesDedicated {
  /**
   * Unique identifier for the RPC Node Dedicated.
   */
  id: string;

  /**
   * Blockchain type.
   */
  blockchain: string;

  /**
   * When the RPC Node Dedicated was created.
   */
  created_at: string;

  /**
   * RPC endpoint URL.
   */
  endpoint: string;

  /**
   * Name of the RPC Node Dedicated.
   */
  name: string;

  /**
   * Network type (e.g., mainnet, testnet).
   */
  network: string;

  /**
   * When the RPC Node Dedicated was updated.
   */
  updated_at: string;

  /**
   * User ID associated with the RPC Node Dedicated.
   */
  user_id: string;
}

/**
 * Blockchain supported by the Dedicated RPC Node.
 */
export interface RPCNodesDedicatedBlockchain {
  /**
   * Blockchain type.
   */
  blockchain: string;

  /**
   * Network type (e.g., mainnet, testnet).
   */
  network: string;
}

export interface RPCNodesDedicatedBlockchainList {
  items: Array<RPCNodesDedicatedBlockchain>;
}

export interface RPCNodesDedicatedList {
  items: Array<RPCNodesDedicated>;
}

Dedicated.Blockchains = Blockchains;

export declare namespace Dedicated {
  export {
    type RPCNodesDedicated as RPCNodesDedicated,
    type RPCNodesDedicatedBlockchain as RPCNodesDedicatedBlockchain,
    type RPCNodesDedicatedBlockchainList as RPCNodesDedicatedBlockchainList,
    type RPCNodesDedicatedList as RPCNodesDedicatedList,
  };

  export { Blockchains as Blockchains };
}
