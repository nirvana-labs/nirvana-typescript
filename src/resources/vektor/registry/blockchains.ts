// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as VektorAPI from '../vektor';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Blockchains extends APIResource {
  /**
   * List supported blockchains
   *
   * @example
   * ```ts
   * const blockchains =
   *   await client.vektor.registry.blockchains.list();
   * ```
   */
  list(
    body: BlockchainListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BlockchainListResponse> {
    return this._client.post('/v1/vektor/registry/blockchains', { body, ...options });
  }
}

export interface BlockchainListResponse {
  /**
   * A list of blockchains
   */
  items: Array<VektorAPI.Blockchain>;
}

export interface BlockchainListParams {
  /**
   * A blockchain ID, represented as a TypeID with `blockchain` prefix
   */
  id?: string | null;

  /**
   * A blockchain symbol
   */
  symbol?: string | null;
}

export declare namespace Blockchains {
  export {
    type BlockchainListResponse as BlockchainListResponse,
    type BlockchainListParams as BlockchainListParams,
  };
}
