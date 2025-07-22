// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as VektorAPI from './vektor';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Balances extends APIResource {
  /**
   * List balances for a given set of assets and addresses
   *
   * @example
   * ```ts
   * const balances = await client.vektor.balances.list({
   *   accounts: ['0x6b175474e89094c44da98b954eedeac495271d0f'],
   *   assets: ['asset_01jbz9qc00f8wr64hfe459gb7y'],
   *   blockchain: 'blockchain_01jbz9nsy8egar70jg79dkwmaf',
   * });
   * ```
   */
  list(body: BalanceListParams, options?: RequestOptions): APIPromise<BalanceListResponse> {
    return this._client.post('/v1/vektor/balances', { body, ...options });
  }

  /**
   * List balances for a given set of assets and addresses
   *
   * @example
   * ```ts
   * const response =
   *   await client.vektor.balances.listHistorical({
   *     accounts: [
   *       '0x6b175474e89094c44da98b954eedeac495271d0f',
   *     ],
   *     assets: ['asset_01jbz9qc00f8wr64hfe459gb7y'],
   *     blockchain: 'blockchain_01jbz9nsy8egar70jg79dkwmaf',
   *     from: '2021-01-01T12:00:00Z',
   *     to: '2021-01-01T12:00:00Z',
   *   });
   * ```
   */
  listHistorical(
    body: BalanceListHistoricalParams,
    options?: RequestOptions,
  ): APIPromise<BalanceListHistoricalResponse> {
    return this._client.post('/v1/vektor/balances/historical', { body, ...options });
  }
}

export interface BalanceListResponse {
  /**
   * Array of Balance
   */
  items: Array<VektorAPI.Balance>;
}

export interface BalanceListHistoricalResponse {
  /**
   * A range of blockstamps
   */
  historical: VektorAPI.OnChainHistoricalRange;

  items: Array<BalanceListHistoricalResponse.Item>;
}

export namespace BalanceListHistoricalResponse {
  export interface Item {
    /**
     * Information about a specific block number and its timestamp
     */
    blockstamp: VektorAPI.Blockstamp;

    /**
     * Array of Balance
     */
    items: Array<VektorAPI.Balance>;
  }
}

export interface BalanceListParams {
  /**
   * A list of accounts. Currently only EVM addresses are supported.
   */
  accounts: Array<VektorAPI.Account>;

  /**
   * A list of asset IDs, EVM addresses or asset symbols
   */
  assets: Array<VektorAPI.AssetIDOrAddressEVMOrAssetSymbol>;

  /**
   * A blockchain ID, represented as a TypeID with `blockchain` prefix
   */
  blockchain: VektorAPI.BlockchainIDOrBlockchainSymbol;

  /**
   * Either a ISO8601 timestamp or a block number
   */
  at?: VektorAPI.Timestamp | VektorAPI.BlockNumber;

  /**
   * An asset symbol
   */
  quote_asset_symbol?: VektorAPI.AssetSymbol;
}

export interface BalanceListHistoricalParams {
  /**
   * A list of accounts. Currently only EVM addresses are supported.
   */
  accounts: Array<VektorAPI.Account>;

  /**
   * A list of asset IDs, EVM addresses or asset symbols
   */
  assets: Array<VektorAPI.AssetIDOrAddressEVMOrAssetSymbol>;

  /**
   * A blockchain ID, represented as a TypeID with `blockchain` prefix
   */
  blockchain: VektorAPI.BlockchainIDOrBlockchainSymbol;

  /**
   * Either a ISO8601 timestamp or a block number
   */
  from: VektorAPI.TimestampOrBlockNumber;

  /**
   * Either a ISO8601 timestamp or a block number
   */
  to: VektorAPI.TimestampOrBlockNumber;

  /**
   * An asset symbol
   */
  quote_asset_symbol?: VektorAPI.AssetSymbol;
}

export declare namespace Balances {
  export {
    type BalanceListResponse as BalanceListResponse,
    type BalanceListHistoricalResponse as BalanceListHistoricalResponse,
    type BalanceListParams as BalanceListParams,
    type BalanceListHistoricalParams as BalanceListHistoricalParams,
  };
}
