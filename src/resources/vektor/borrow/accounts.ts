// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as VektorAPI from '../vektor';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Accounts extends APIResource {
  /**
   * Get account-level borrow info on specified accounts
   *
   * @example
   * ```ts
   * const accounts = await client.vektor.borrow.accounts.list({
   *   accounts: ['0x6b175474e89094c44da98b954eedeac495271d0f'],
   *   blockchain: 'blockchain_01jbz9nsy8egar70jg79dkwmaf',
   *   venues: ['venue_01jbz9qc18evw86sg8m0sj9jg5'],
   * });
   * ```
   */
  list(body: AccountListParams, options?: RequestOptions): APIPromise<AccountListResponse> {
    return this._client.post('/v1/vektor/borrow/accounts', { body, ...options });
  }

  /**
   * Get account-level borrow info on specified accounts
   *
   * @example
   * ```ts
   * const response =
   *   await client.vektor.borrow.accounts.listHistorical({
   *     accounts: [
   *       '0x6b175474e89094c44da98b954eedeac495271d0f',
   *     ],
   *     blockchain: 'blockchain_01jbz9nsy8egar70jg79dkwmaf',
   *     from: '2021-01-01T12:00:00Z',
   *     to: '2021-01-01T12:00:00Z',
   *     venues: ['venue_01jbz9qc18evw86sg8m0sj9jg5'],
   *   });
   * ```
   */
  listHistorical(
    body: AccountListHistoricalParams,
    options?: RequestOptions,
  ): APIPromise<AccountListHistoricalResponse> {
    return this._client.post('/v1/vektor/borrow/accounts/historical', { body, ...options });
  }
}

export interface AccountListResponse {
  /**
   * A list of borrow accounts
   */
  items: Array<VektorAPI.BorrowAccount>;
}

export interface AccountListHistoricalResponse {
  /**
   * A range of blockstamps
   */
  historical: VektorAPI.OnChainHistoricalRange;

  items: Array<AccountListHistoricalResponse.Item>;
}

export namespace AccountListHistoricalResponse {
  export interface Item {
    /**
     * Information about a specific block number and its timestamp
     */
    blockstamp: VektorAPI.Blockstamp;

    /**
     * A list of borrow accounts
     */
    items: Array<VektorAPI.BorrowAccount>;
  }
}

export interface AccountListParams {
  /**
   * A list of accounts. Currently only EVM addresses are supported.
   */
  accounts: Array<VektorAPI.Account>;

  /**
   * A blockchain ID, represented as a TypeID with `blockchain` prefix
   */
  blockchain: VektorAPI.BlockchainIDOrBlockchainSymbol;

  /**
   * A list of venue IDs or venue symbols
   */
  venues: Array<VektorAPI.VenueIDOrVenueSymbol>;

  /**
   * Either a ISO8601 timestamp or a block number
   */
  at?: VektorAPI.Timestamp | VektorAPI.BlockNumber;

  /**
   * An asset symbol
   */
  quote_asset_symbol?: string | null;
}

export interface AccountListHistoricalParams {
  /**
   * A list of accounts. Currently only EVM addresses are supported.
   */
  accounts: Array<VektorAPI.Account>;

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
   * A list of venue IDs or venue symbols
   */
  venues: Array<VektorAPI.VenueIDOrVenueSymbol>;

  /**
   * An asset symbol
   */
  quote_asset_symbol?: string | null;
}

export declare namespace Accounts {
  export {
    type AccountListResponse as AccountListResponse,
    type AccountListHistoricalResponse as AccountListHistoricalResponse,
    type AccountListParams as AccountListParams,
    type AccountListHistoricalParams as AccountListHistoricalParams,
  };
}
