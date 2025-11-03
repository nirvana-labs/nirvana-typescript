// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as DedicatedAPI from './dedicated';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Blockchains extends APIResource {
  /**
   * List all Dedicated Blockchains
   *
   * @example
   * ```ts
   * const dedicatedBlockchainList =
   *   await client.rpcNodes.dedicated.blockchains.list();
   * ```
   */
  list(
    query: BlockchainListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DedicatedAPI.DedicatedBlockchainList> {
    return this._client.get('/v1/rpc_nodes/dedicated/blockchains', { query, ...options });
  }
}

export interface BlockchainListParams {
  /**
   * Pagination cursor returned by a previous request
   */
  cursor?: string;

  /**
   * Maximum number of items to return
   */
  limit?: number;
}

export declare namespace Blockchains {
  export { type BlockchainListParams as BlockchainListParams };
}
