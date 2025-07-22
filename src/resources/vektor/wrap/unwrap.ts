// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as VektorAPI from '../vektor';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Unwrap extends APIResource {
  /**
   * Unwrap the wrapped native asset
   *
   * @example
   * ```ts
   * const execution = await client.vektor.wrap.unwrap.create({
   *   amount: '10.0000000000000024',
   *   blockchain: 'blockchain_01jbz9nsy8egar70jg79dkwmaf',
   *   from: '0x6b175474e89094c44da98b954eedeac495271d0f',
   * });
   * ```
   */
  create(body: UnwrapCreateParams, options?: RequestOptions): APIPromise<VektorAPI.Execution> {
    return this._client.post('/v1/vektor/wrap/unwrap', { body, ...options });
  }
}

export interface UnwrapCreateParams {
  /**
   * An arbitrary precision decimal represented as a string
   */
  amount: VektorAPI.Decimal;

  /**
   * A blockchain ID, represented as a TypeID with `blockchain` prefix
   */
  blockchain: VektorAPI.BlockchainIDOrBlockchainSymbol;

  /**
   * An EVM address
   */
  from: VektorAPI.Account;
}

export declare namespace Unwrap {
  export { type UnwrapCreateParams as UnwrapCreateParams };
}
