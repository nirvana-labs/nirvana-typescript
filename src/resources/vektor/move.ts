// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as VektorAPI from './vektor';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Move extends APIResource {
  /**
   * Move balance from one address to another
   *
   * @example
   * ```ts
   * const execution = await client.vektor.move.create({
   *   amount: '10.0000000000000024',
   *   asset: 'asset_01jbz9qc00f8wr64hfe459gb7y',
   *   blockchain: 'blockchain_01jbz9nsy8egar70jg79dkwmaf',
   *   from: '0x6b175474e89094c44da98b954eedeac495271d0f',
   *   to: '0x6b175474e89094c44da98b954eedeac495271d0f',
   * });
   * ```
   */
  create(body: MoveCreateParams, options?: RequestOptions): APIPromise<VektorAPI.Execution> {
    return this._client.post('/v1/vektor/move/move', { body, ...options });
  }
}

export interface MoveCreateParams {
  /**
   * An arbitrary precision decimal represented as a string
   */
  amount: VektorAPI.Decimal;

  /**
   * An asset ID, represented as a TypeID with `asset` prefix
   */
  asset: VektorAPI.AssetIDOrAddressEVMOrAssetSymbol;

  /**
   * A blockchain ID, represented as a TypeID with `blockchain` prefix
   */
  blockchain: VektorAPI.BlockchainIDOrBlockchainSymbol;

  /**
   * An EVM address
   */
  from: VektorAPI.Account;

  /**
   * An EVM address
   */
  to: VektorAPI.Account;
}

export declare namespace Move {
  export { type MoveCreateParams as MoveCreateParams };
}
