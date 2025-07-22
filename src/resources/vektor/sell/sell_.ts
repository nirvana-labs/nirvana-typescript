// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as VektorAPI from '../vektor';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Sell extends APIResource {
  /**
   * Sell an asset for another asset
   *
   * @example
   * ```ts
   * const execution = await client.vektor.sell.sell.create({
   *   blockchain: 'blockchain_01jbz9nsy8egar70jg79dkwmaf',
   *   from: '0x6b175474e89094c44da98b954eedeac495271d0f',
   *   receive_asset: 'asset_01jbz9qc00f8wr64hfe459gb7y',
   *   spend_amount: '10.0000000000000024',
   *   spend_asset: 'asset_01jbz9qc00f8wr64hfe459gb7y',
   *   venues: ['venue_01jbz9qc18evw86sg8m0sj9jg5'],
   * });
   * ```
   */
  create(body: SellCreateParams, options?: RequestOptions): APIPromise<VektorAPI.Execution> {
    return this._client.post('/v1/vektor/sell/sell', { body, ...options });
  }
}

export interface SellCreateParams {
  /**
   * A blockchain ID, represented as a TypeID with `blockchain` prefix
   */
  blockchain: VektorAPI.BlockchainIDOrBlockchainSymbol;

  /**
   * An EVM address
   */
  from: VektorAPI.Account;

  /**
   * An asset ID, represented as a TypeID with `asset` prefix
   */
  receive_asset: VektorAPI.AssetIDOrAddressEVMOrAssetSymbol;

  /**
   * An arbitrary precision decimal represented as a string
   */
  spend_amount: VektorAPI.Decimal;

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

export declare namespace Sell {
  export { type SellCreateParams as SellCreateParams };
}
