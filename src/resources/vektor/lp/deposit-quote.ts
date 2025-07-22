// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as VektorAPI from '../vektor';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class DepositQuote extends APIResource {
  /**
   * Simulate depositing liquidity to a specific LP pool, creating a position or
   * adding to an existing one.
   *
   * @example
   * ```ts
   * const depositQuote =
   *   await client.vektor.lp.depositQuote.create({
   *     amount: '10.0000000000000024',
   *     asset: 'asset_01jbz9qc00f8wr64hfe459gb7y',
   *     blockchain: 'blockchain_01jbz9nsy8egar70jg79dkwmaf',
   *     lp_pool_id: 'lp_pool_01h455vb4pex5vsknk084sn02q',
   *   });
   * ```
   */
  create(body: DepositQuoteCreateParams, options?: RequestOptions): APIPromise<DepositQuoteCreateResponse> {
    return this._client.post('/v1/vektor/lp/deposit_quote', { body, ...options });
  }
}

export interface DepositQuoteCreateResponse {
  /**
   * An LP quote
   */
  items: VektorAPI.LPQuote;
}

export type DepositQuoteCreateParams =
  | DepositQuoteCreateParams.LPPoolDepositQuoteRequestInput
  | DepositQuoteCreateParams.LPPositionDepositQuoteRequestInput;

export declare namespace DepositQuoteCreateParams {
  export interface LPPoolDepositQuoteRequestInput {
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
     * A LP pool ID, represented as a TypeID with `lp_pool` prefix
     */
    lp_pool_id: string;

    /**
     * An asset symbol
     */
    quote_asset_symbol?: string | null;

    /**
     * A Uniswap V3 range. Lower and upper bounds should satisfy 0 <= `lower` <
     * `upper`. The value -1 can be used in `upper` for infinity
     */
    range?: LPPoolDepositQuoteRequestInput.Range | null;
  }

  export namespace LPPoolDepositQuoteRequestInput {
    /**
     * A Uniswap V3 range. Lower and upper bounds should satisfy 0 <= `lower` <
     * `upper`. The value -1 can be used in `upper` for infinity
     */
    export interface Range {
      /**
       * An arbitrary precision decimal represented as a string
       */
      lower: VektorAPI.Decimal;

      /**
       * An arbitrary precision decimal represented as a string
       */
      upper: VektorAPI.Decimal;
    }
  }

  export interface LPPositionDepositQuoteRequestInput {
    /**
     * An EVM address
     */
    account: VektorAPI.Account;

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
     * A LP pool ID, represented as a TypeID with `lp_pool` prefix
     */
    lp_pool_id: string;

    /**
     * An asset symbol
     */
    quote_asset_symbol?: string | null;

    /**
     * Uniswap position specifier
     */
    specifier?: LPPositionDepositQuoteRequestInput.Specifier | null;
  }

  export namespace LPPositionDepositQuoteRequestInput {
    /**
     * Uniswap position specifier
     */
    export interface Specifier {
      /**
       * A NFT
       */
      position_nft: VektorAPI.NFT;
    }
  }
}

export declare namespace DepositQuote {
  export {
    type DepositQuoteCreateResponse as DepositQuoteCreateResponse,
    type DepositQuoteCreateParams as DepositQuoteCreateParams,
  };
}
