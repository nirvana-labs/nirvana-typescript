// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as BlockchainsAPI from './blockchains';
import { BlockchainListParams, Blockchains } from './blockchains';
import { APIPromise } from '../../../core/api-promise';
import { Cursor, type CursorParams, PagePromise } from '../../../core/pagination';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class FlexResource extends APIResource {
  blockchains: BlockchainsAPI.Blockchains = new BlockchainsAPI.Blockchains(this._client);

  /**
   * Create a new RPC Node Flex
   *
   * @example
   * ```ts
   * const flex = await client.rpcNodes.flex.create({
   *   blockchain: 'ethereum',
   *   name: 'my-ethereum-node',
   *   network: 'mainnet',
   *   project_id: '123e4567-e89b-12d3-a456-426614174000',
   * });
   * ```
   */
  create(body: FlexCreateParams, options?: RequestOptions): APIPromise<Flex> {
    return this._client.post('/v1/rpc_nodes/flex', { body, ...options });
  }

  /**
   * Update an existing RPC Node Flex
   *
   * @example
   * ```ts
   * const flex = await client.rpcNodes.flex.update('node_id');
   * ```
   */
  update(nodeID: string, body: FlexUpdateParams, options?: RequestOptions): APIPromise<Flex> {
    return this._client.patch(path`/v1/rpc_nodes/flex/${nodeID}`, { body, ...options });
  }

  /**
   * List all RPC Node Flex you created
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const flex of client.rpcNodes.flex.list({
   *   project_id: 'project_id',
   * })) {
   *   // ...
   * }
   * ```
   */
  list(query: FlexListParams, options?: RequestOptions): PagePromise<FlexesCursor, Flex> {
    return this._client.getAPIList('/v1/rpc_nodes/flex', Cursor<Flex>, { query, ...options });
  }

  /**
   * Delete an RPC Node Flex
   *
   * @example
   * ```ts
   * await client.rpcNodes.flex.delete('node_id');
   * ```
   */
  delete(nodeID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/rpc_nodes/flex/${nodeID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get details about an RPC Node Flex
   *
   * @example
   * ```ts
   * const flex = await client.rpcNodes.flex.get('node_id');
   * ```
   */
  get(nodeID: string, options?: RequestOptions): APIPromise<Flex> {
    return this._client.get(path`/v1/rpc_nodes/flex/${nodeID}`, options);
  }
}

export type FlexesCursor = Cursor<Flex>;

export type FlexBlockchainsCursor = Cursor<FlexBlockchain>;

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
   * Project identifier associated with the RPC Node Flex.
   */
  project_id: string;

  /**
   * Tags to attach to the RPC Node Flex.
   */
  tags: Array<string>;

  /**
   * When the RPC Node Flex was updated.
   */
  updated_at: string;
}

/**
 * Blockchain supported by the RPC Node Flex.
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

  /**
   * Pagination response details.
   */
  pagination: Shared.Pagination;
}

export interface FlexList {
  items: Array<Flex>;

  /**
   * Pagination response details.
   */
  pagination: Shared.Pagination;
}

export interface FlexCreateParams {
  /**
   * Blockchain.
   */
  blockchain: string;

  /**
   * Name of the RPC Node Flex.
   */
  name: string;

  /**
   * Network type (e.g., mainnet, testnet).
   */
  network: string;

  /**
   * Project ID to associate with the RPC Node Flex.
   */
  project_id: string;

  /**
   * Tags to attach to the RPC Node Flex (optional, max 50).
   */
  tags?: Array<string>;
}

export interface FlexUpdateParams {
  /**
   * Name of the RPC Node Flex.
   */
  name?: string;

  /**
   * Tags to attach to the RPC Node Flex (optional, max 50).
   */
  tags?: Array<string>;
}

export interface FlexListParams extends CursorParams {
  /**
   * Project ID of resources to request
   */
  project_id: string;
}

FlexResource.Blockchains = Blockchains;

export declare namespace FlexResource {
  export {
    type Flex as Flex,
    type FlexBlockchain as FlexBlockchain,
    type FlexBlockchainList as FlexBlockchainList,
    type FlexList as FlexList,
    type FlexesCursor as FlexesCursor,
    type FlexCreateParams as FlexCreateParams,
    type FlexUpdateParams as FlexUpdateParams,
    type FlexListParams as FlexListParams,
  };

  export { Blockchains as Blockchains, type BlockchainListParams as BlockchainListParams };
}
