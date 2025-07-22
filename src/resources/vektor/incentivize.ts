// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as VektorAPI from './vektor';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Incentivize extends APIResource {
  /**
   * List the current incentive markets
   *
   * @example
   * ```ts
   * const incentivizes = await client.vektor.incentivize.list({
   *   assets: ['asset_01jbz9qc00f8wr64hfe459gb7y'],
   *   blockchain: 'blockchain_01jbz9nsy8egar70jg79dkwmaf',
   *   venues: ['venue_01jbz9qc18evw86sg8m0sj9jg5'],
   * });
   * ```
   */
  list(body: IncentivizeListParams, options?: RequestOptions): APIPromise<IncentivizeListResponse> {
    return this._client.post('/v1/vektor/incentivize/markets', { body, ...options });
  }
}

export interface IncentivizeListResponse {
  /**
   * A list of lp pool incentive markets
   */
  items: Array<VektorAPI.IncentivizeMarket>;
}

export interface IncentivizeListParams {
  /**
   * A list of asset IDs, EVM addresses or asset symbols
   */
  assets: Array<VektorAPI.AssetIDOrAddressEVMOrAssetSymbol>;

  /**
   * A blockchain ID, represented as a TypeID with `blockchain` prefix
   */
  blockchain: VektorAPI.BlockchainIDOrBlockchainSymbol;

  /**
   * A list of venue IDs or venue symbols
   */
  venues: Array<VektorAPI.VenueIDOrVenueSymbol>;

  /**
   * An asset symbol
   */
  quote_asset_symbol?: string | null;
}

export declare namespace Incentivize {
  export {
    type IncentivizeListResponse as IncentivizeListResponse,
    type IncentivizeListParams as IncentivizeListParams,
  };
}
