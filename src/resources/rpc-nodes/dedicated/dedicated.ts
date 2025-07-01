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

export interface RPCNodesDedicated {
  id: string;

  blockchain: string;

  created_at: string;

  dedicated_ip: string;

  endpoint: string;

  name: string;

  network: string;

  updated_at: string;

  user_id: string;
}

/**
 * Blockchain supported by a dedicated node.
 */
export interface RPCNodesDedicatedBlockchain {
  blockchain: string;

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
