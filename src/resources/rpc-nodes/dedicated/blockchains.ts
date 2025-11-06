// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as DedicatedAPI from './dedicated';
import { DedicatedBlockchainsCursor } from './dedicated';
import { Cursor, type CursorParams, PagePromise } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';

export class Blockchains extends APIResource {
  /**
   * List all Dedicated Blockchains
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const dedicatedBlockchain of client.rpcNodes.dedicated.blockchains.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: BlockchainListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<DedicatedBlockchainsCursor, DedicatedAPI.DedicatedBlockchain> {
    return this._client.getAPIList(
      '/v1/rpc_nodes/dedicated/blockchains',
      Cursor<DedicatedAPI.DedicatedBlockchain>,
      { query, ...options },
    );
  }
}

export interface BlockchainListParams extends CursorParams {}

export declare namespace Blockchains {
  export { type BlockchainListParams as BlockchainListParams };
}

export { type DedicatedBlockchainsCursor };
