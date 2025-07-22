// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as VektorAPI from '../vektor';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Buy extends APIResource {
  /**
   * Buy an asset with another asset
   *
   * @example
   * ```ts
   * const execution = await client.vektor.buy.buy.create({
   *   blockchain: 'blockchain_01jbz9nsy8egar70jg79dkwmaf',
   *   from: '0x6b175474e89094c44da98b954eedeac495271d0f',
   *   receive_amount: '10.0000000000000024',
   *   receive_asset: 'asset_01jbz9qc00f8wr64hfe459gb7y',
   *   spend_asset: 'asset_01jbz9qc00f8wr64hfe459gb7y',
   *   venues: ['venue_01jbz9qc18evw86sg8m0sj9jg5'],
   * });
   * ```
   */
  create(body: BuyCreateParams, options?: RequestOptions): APIPromise<VektorAPI.Execution> {
    return this._client.post('/v1/vektor/buy/buy', { body, ...options });
  }
}

export interface BuyCreateParams {
  /**
   * A blockchain ID, represented as a TypeID with `blockchain` prefix
   */
  blockchain: VektorAPI.BlockchainIDOrBlockchainSymbol;

  /**
   * An EVM address
   */
  from: VektorAPI.Account;

  /**
   * An arbitrary precision decimal represented as a string
   */
  receive_amount: VektorAPI.Decimal;

  /**
   * An asset ID, represented as a TypeID with `asset` prefix
   */
  receive_asset: VektorAPI.AssetIDOrAddressEVMOrAssetSymbol;

  /**
   * An asset ID, represented as a TypeID with `asset` prefix
   */
  spend_asset: VektorAPI.AssetIDOrAddressEVMOrAssetSymbol;

  /**
   * A list of venue IDs or venue symbols
   */
  venues: Array<VektorAPI.VenueIDOrVenueSymbol>;

  /**
   * An arbitrary precision decimal represented as a string
   */
  slippage?: string;
}

export declare namespace Buy {
  export { type BuyCreateParams as BuyCreateParams };
}
