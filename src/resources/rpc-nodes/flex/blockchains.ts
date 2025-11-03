// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as FlexAPI from './flex';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Blockchains extends APIResource {
  /**
   * List all Flex Blockchains
   *
   * @example
   * ```ts
   * const flexBlockchainList =
   *   await client.rpcNodes.flex.blockchains.list();
   * ```
   */
  list(
    query: BlockchainListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FlexAPI.FlexBlockchainList> {
    return this._client.get('/v1/rpc_nodes/flex/blockchains', { query, ...options });
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
