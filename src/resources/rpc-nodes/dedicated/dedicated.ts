// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as BlockchainsAPI from './blockchains';
import { BlockchainListParams, Blockchains } from './blockchains';
import { APIPromise } from '../../../core/api-promise';
import { Cursor, type CursorParams, PagePromise } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class DedicatedResource extends APIResource {
  blockchains: BlockchainsAPI.Blockchains = new BlockchainsAPI.Blockchains(this._client);

  /**
   * List all RPC Node Dedicated you created
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const dedicated of client.rpcNodes.dedicated.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: DedicatedListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<DedicatedsCursor, Dedicated> {
    return this._client.getAPIList('/v1/rpc_nodes/dedicated', Cursor<Dedicated>, { query, ...options });
  }

  /**
   * Get details about an RPC Node Dedicated
   *
   * @example
   * ```ts
   * const dedicated = await client.rpcNodes.dedicated.get(
   *   'node_id',
   * );
   * ```
   */
  get(nodeID: string, options?: RequestOptions): APIPromise<Dedicated> {
    return this._client.get(path`/v1/rpc_nodes/dedicated/${nodeID}`, options);
  }
}

export type DedicatedsCursor = Cursor<Dedicated>;

export type DedicatedBlockchainsCursor = Cursor<DedicatedBlockchain>;

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
   * Project identifier associated with the RPC Node Dedicated.
   */
  project_id: string | null;

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

  /**
   * Pagination response details.
   */
  pagination: Shared.Pagination;
}

export interface DedicatedList {
  items: Array<Dedicated>;

  /**
   * Pagination response details.
   */
  pagination: Shared.Pagination;
}

export interface DedicatedListParams extends CursorParams {
  /**
   * Project ID of resources to request
   */
  project_id?: string;
}

DedicatedResource.Blockchains = Blockchains;

export declare namespace DedicatedResource {
  export {
    type Dedicated as Dedicated,
    type DedicatedBlockchain as DedicatedBlockchain,
    type DedicatedBlockchainList as DedicatedBlockchainList,
    type DedicatedList as DedicatedList,
    type DedicatedsCursor as DedicatedsCursor,
    type DedicatedListParams as DedicatedListParams,
  };

  export { Blockchains as Blockchains, type BlockchainListParams as BlockchainListParams };
}
