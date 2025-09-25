// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as BlockchainsAPI from './blockchains';
import { Blockchains } from './blockchains';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class DedicatedResource extends APIResource {
  blockchains: BlockchainsAPI.Blockchains = new BlockchainsAPI.Blockchains(this._client);

  /**
   * List all RPC Node Dedicated you created
   */
  list(options?: RequestOptions): APIPromise<DedicatedList> {
    return this._client.get('/v1/rpc_nodes/dedicated', options);
  }

  /**
   * Get details about an RPC Node Dedicated
   */
  get(nodeID: string, options?: RequestOptions): APIPromise<Dedicated> {
    return this._client.get(path`/v1/rpc_nodes/dedicated/${nodeID}`, options);
  }
}

/**
 * RPC Node Dedicated details.
 */
export interface Dedicated {
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
   * Tags to attach to the RPC Node Dedicated.
   */
  tags: Array<string>;

  /**
   * When the RPC Node Dedicated was updated.
   */
  updated_at: string;
}

/**
 * Blockchain supported by the RPC Node Dedicated.
 */
export interface DedicatedBlockchain {
  /**
   * Blockchain type.
   */
  blockchain: string;

  /**
   * Network type (e.g., mainnet, testnet).
   */
  network: string;
}

export interface DedicatedBlockchainList {
  items: Array<DedicatedBlockchain>;
}

export interface DedicatedList {
  items: Array<Dedicated>;
}

DedicatedResource.Blockchains = Blockchains;

export declare namespace DedicatedResource {
  export {
    type Dedicated as Dedicated,
    type DedicatedBlockchain as DedicatedBlockchain,
    type DedicatedBlockchainList as DedicatedBlockchainList,
    type DedicatedList as DedicatedList,
  };

  export { Blockchains as Blockchains };
}
