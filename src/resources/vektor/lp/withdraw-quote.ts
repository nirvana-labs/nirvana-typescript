// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as VektorAPI from '../vektor';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class WithdrawQuote extends APIResource {
  /**
   * Simulate withdrawing liquidity from a specific existing LP position
   *
   * @example
   * ```ts
   * const withdrawQuote =
   *   await client.vektor.lp.withdrawQuote.create({
   *     account: '0x6b175474e89094c44da98b954eedeac495271d0f',
   *     amount: '10.0000000000000024',
   *     asset: 'asset_01jbz9qc00f8wr64hfe459gb7y',
   *     blockchain: 'blockchain_01jbz9nsy8egar70jg79dkwmaf',
   *     lp_pool_id: 'lp_pool_01h455vb4pex5vsknk084sn02q',
   *   });
   * ```
   */
  create(body: WithdrawQuoteCreateParams, options?: RequestOptions): APIPromise<WithdrawQuoteCreateResponse> {
    return this._client.post('/v1/vektor/lp/withdraw_quote', { body, ...options });
  }
}

export interface WithdrawQuoteCreateResponse {
  /**
   * An LP quote
   */
  items: VektorAPI.LPQuote;
}

export interface WithdrawQuoteCreateParams {
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
  specifier?: WithdrawQuoteCreateParams.Specifier | null;
}

export namespace WithdrawQuoteCreateParams {
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

export declare namespace WithdrawQuote {
  export {
    type WithdrawQuoteCreateResponse as WithdrawQuoteCreateResponse,
    type WithdrawQuoteCreateParams as WithdrawQuoteCreateParams,
  };
}
