// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as FlexAPI from './flex';
import { FlexBlockchainsCursor } from './flex';
import { Cursor, type CursorParams, PagePromise } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';

export class Blockchains extends APIResource {
  /**
   * List all Flex Blockchains
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const flexBlockchain of client.rpcNodes.flex.blockchains.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: BlockchainListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<FlexBlockchainsCursor, FlexAPI.FlexBlockchain> {
    return this._client.getAPIList('/v1/rpc_nodes/flex/blockchains', Cursor<FlexAPI.FlexBlockchain>, {
      query,
      ...options,
    });
  }
}

export interface BlockchainListParams extends CursorParams {
  /**
   * Filter by blockchain
   */
  blockchain?: string;

  /**
   * Filter by network
   */
  network?: string;

  /**
   * Comma-separated sort terms in precedence order, each field:asc or field:desc.
   * Fields: created_at, blockchain, network
   */
  sort?: string;
}

export declare namespace Blockchains {
  export { type BlockchainListParams as BlockchainListParams };
}

export { type FlexBlockchainsCursor };
