// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as VektorAPI from '../vektor';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class SetCollateral extends APIResource {
  /**
   * Enable/disable a specific lending position to be used as collateral
   *
   * @example
   * ```ts
   * const execution =
   *   await client.vektor.lend.setCollateral.create({
   *     blockchain: 'blockchain_01jbz9nsy8egar70jg79dkwmaf',
   *     from: '0x6b175474e89094c44da98b954eedeac495271d0f',
   *     market_id:
   *       'lend_borrow_market_01h455vb4pex5vsknk084sn02q',
   *     status: true,
   *   });
   * ```
   */
  create(body: SetCollateralCreateParams, options?: RequestOptions): APIPromise<VektorAPI.Execution> {
    return this._client.post('/v1/vektor/lend/set_collateral', { body, ...options });
  }
}

export interface SetCollateralCreateParams {
  /**
   * A blockchain ID, represented as a TypeID with `blockchain` prefix
   */
  blockchain: VektorAPI.BlockchainIDOrBlockchainSymbol;

  /**
   * An EVM address
   */
  from: VektorAPI.Account;

  /**
   * A lend/borrow market ID, represented as a TypeID with `lend_borrow_market`
   * prefix
   */
  market_id: VektorAPI.LendBorrowMarketID;

  status: boolean;
}

export declare namespace SetCollateral {
  export { type SetCollateralCreateParams as SetCollateralCreateParams };
}
