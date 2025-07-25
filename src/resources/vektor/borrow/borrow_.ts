// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as VektorAPI from '../vektor';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Borrow extends APIResource {
  /**
   * Borrow an asset
   *
   * @example
   * ```ts
   * const execution = await client.vektor.borrow.borrow.create({
   *   amount: '10.0000000000000024',
   *   asset: 'asset_01jbz9qc00f8wr64hfe459gb7y',
   *   blockchain: 'blockchain_01jbz9nsy8egar70jg79dkwmaf',
   *   from: '0x6b175474e89094c44da98b954eedeac495271d0f',
   *   venues: ['venue_01jbz9qc18evw86sg8m0sj9jg5'],
   * });
   * ```
   */
  create(body: BorrowCreateParams, options?: RequestOptions): APIPromise<VektorAPI.Execution> {
    return this._client.post('/v1/vektor/borrow/borrow', { body, ...options });
  }
}

export interface BorrowCreateParams {
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
   * A list of venue IDs or venue symbols
   */
  venues: Array<VektorAPI.VenueIDOrVenueSymbol>;
}

export declare namespace Borrow {
  export { type BorrowCreateParams as BorrowCreateParams };
}
