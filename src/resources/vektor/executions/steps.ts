// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as VektorAPI from '../vektor';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Steps extends APIResource {
  /**
   * Get a step of an execution
   *
   * @example
   * ```ts
   * const step = await client.vektor.executions.steps.get(
   *   'step_id',
   *   { execution_id: 'execution_id' },
   * );
   * ```
   */
  get(stepID: string, params: StepGetParams, options?: RequestOptions): APIPromise<StepGetResponse> {
    const { execution_id } = params;
    return this._client.get(path`/v1/vektor/executions/${execution_id}/steps/${stepID}`, options);
  }

  /**
   * Sign an EVM transaction step
   *
   * @example
   * ```ts
   * await client.vektor.executions.steps.sign('step_id', {
   *   execution_id: 'execution_id',
   *   signed_payload: '0x123456789abcdef',
   * });
   * ```
   */
  sign(stepID: string, params: StepSignParams, options?: RequestOptions): APIPromise<void> {
    const { execution_id, ...body } = params;
    return this._client.post(path`/v1/vektor/executions/${execution_id}/steps/${stepID}/sign`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

/**
 * An execution step
 */
export interface StepGetResponse {
  /**
   * An execution step ID, represented as a TypeID with `execution_step` prefix
   */
  id: VektorAPI.ExecutionStepID;

  /**
   * ISO8601 Timestamp
   */
  created_at: VektorAPI.Timestamp;

  /**
   * The definition of an execution step
   */
  definition:
    | StepGetResponse.ExecutionEVMTransactionApprove
    | StepGetResponse.ExecutionEVMTransactionBorrow
    | StepGetResponse.ExecutionEVMTransactionBorrowRepay
    | StepGetResponse.ExecutionEVMTransactionBuy
    | StepGetResponse.ExecutionEVMTransactionLend
    | StepGetResponse.ExecutionEVMTransactionLendSetCollateral
    | StepGetResponse.ExecutionEVMTransactionLendWithdraw
    | StepGetResponse.ExecutionEVMTransactionMove
    | StepGetResponse.ExecutionEVMTransactionPermission
    | StepGetResponse.ExecutionEVMTransactionUnwrap
    | StepGetResponse.ExecutionEVMTransactionWrap
    | StepGetResponse.ExecutionEVMTransactionSell;

  index: number;

  /**
   * The type of an execution step
   */
  type:
    | 'evm_transaction_approve'
    | 'evm_transaction_borrow'
    | 'evm_transaction_borrow_repay'
    | 'evm_transaction_buy'
    | 'evm_transaction_lend'
    | 'evm_transaction_lend_set_collateral'
    | 'evm_transaction_lend_withdraw'
    | 'evm_transaction_move'
    | 'evm_transaction_permission'
    | 'evm_transaction_wrap'
    | 'evm_transaction_unwrap'
    | 'evm_transaction_sell';

  /**
   * ISO8601 Timestamp
   */
  updated_at: VektorAPI.Timestamp;
}

export namespace StepGetResponse {
  /**
   * An approval of an asset
   */
  export interface ExecutionEVMTransactionApprove {
    /**
     * An arbitrary precision decimal represented as a string
     */
    amount: VektorAPI.Decimal;

    /**
     * On-chain asset (aka token)
     */
    asset: VektorAPI.Asset;

    block_number: number | null;

    /**
     * ISO8601 Timestamp
     */
    broadcasted_at: string | null;

    confirmation_target: number;

    /**
     * ISO8601 Timestamp
     */
    confirmed_at: string | null;

    /**
     * ISO8601 Timestamp
     */
    created_at: VektorAPI.Timestamp;

    /**
     * A hex string starting with 0x
     */
    data: string | null;

    /**
     * An arbitrary precision decimal represented as a string
     */
    effective_gas_price: string | null;

    /**
     * Vektor error
     */
    error: ExecutionEVMTransactionApprove.Error | null;

    /**
     * ISO8601 Timestamp
     */
    errored_at: string | null;

    /**
     * An arbitrary precision decimal represented as a string
     */
    gas_used: string | null;

    /**
     * A transaction hash
     */
    hash: string | null;

    /**
     * The payload of an EIP-1559 transaction
     */
    payload: VektorAPI.ExecutionEVMTransactionEIP1559Payload;

    /**
     * ISO8601 Timestamp
     */
    signed_at: string | null;

    /**
     * An EVM address
     */
    spender: VektorAPI.Account;

    /**
     * The state of an EVM transaction
     */
    state: VektorAPI.ExecutionEVMTransactionState;

    /**
     * The state of an EVM transaction
     */
    target_state: VektorAPI.ExecutionEVMTransactionState;

    /**
     * An EVM address
     */
    to: string | null;

    /**
     * The type of approval
     */
    type: 'spend_erc20' | 'borrow_erc20' | 'spend_erc721' | 'spend_erc721_collection';

    /**
     * ISO8601 Timestamp
     */
    updated_at: VektorAPI.Timestamp;

    /**
     * An arbitrary precision decimal represented as a string
     */
    value: string | null;
  }

  export namespace ExecutionEVMTransactionApprove {
    /**
     * Vektor error
     */
    export interface Error {
      /**
       * Error context
       */
      context: Error.Context;

      /**
       * Error message
       */
      message: string;

      /**
       * Request ID
       */
      request_id: string;

      /**
       * Error resource
       */
      resource: string | null;

      /**
       * ISO8601 Timestamp
       */
      timestamp: VektorAPI.Timestamp;

      /**
       * Error type
       */
      type: string;
    }

    export namespace Error {
      /**
       * Error context
       */
      export interface Context {
        /**
         * Error parameters
         */
        parameters: { [key: string]: unknown };
      }
    }
  }

  /**
   * Borrowing an asset
   */
  export interface ExecutionEVMTransactionBorrow {
    /**
     * An arbitrary precision decimal represented as a string
     */
    amount: VektorAPI.Decimal;

    /**
     * On-chain asset (aka token)
     */
    asset: VektorAPI.Asset;

    block_number: number | null;

    /**
     * ISO8601 Timestamp
     */
    broadcasted_at: string | null;

    confirmation_target: number;

    /**
     * ISO8601 Timestamp
     */
    confirmed_at: string | null;

    /**
     * ISO8601 Timestamp
     */
    created_at: VektorAPI.Timestamp;

    /**
     * A hex string starting with 0x
     */
    data: string | null;

    /**
     * An arbitrary precision decimal represented as a string
     */
    effective_gas_price: string | null;

    /**
     * Vektor error
     */
    error: ExecutionEVMTransactionBorrow.Error | null;

    /**
     * ISO8601 Timestamp
     */
    errored_at: string | null;

    /**
     * An arbitrary precision decimal represented as a string
     */
    gas_used: string | null;

    /**
     * A transaction hash
     */
    hash: string | null;

    /**
     * A lend/borrow market ID, represented as a TypeID with `lend_borrow_market`
     * prefix
     */
    lend_borrow_market_id: VektorAPI.LendBorrowMarketID;

    /**
     * The payload of an EIP-1559 transaction
     */
    payload: VektorAPI.ExecutionEVMTransactionEIP1559Payload;

    /**
     * ISO8601 Timestamp
     */
    signed_at: string | null;

    /**
     * The state of an EVM transaction
     */
    state: VektorAPI.ExecutionEVMTransactionState;

    /**
     * The state of an EVM transaction
     */
    target_state: VektorAPI.ExecutionEVMTransactionState;

    /**
     * An EVM address
     */
    to: string | null;

    /**
     * ISO8601 Timestamp
     */
    updated_at: VektorAPI.Timestamp;

    /**
     * An arbitrary precision decimal represented as a string
     */
    value: string | null;

    /**
     * A venue symbol
     */
    venue_symbol: VektorAPI.VenueSymbol;
  }

  export namespace ExecutionEVMTransactionBorrow {
    /**
     * Vektor error
     */
    export interface Error {
      /**
       * Error context
       */
      context: Error.Context;

      /**
       * Error message
       */
      message: string;

      /**
       * Request ID
       */
      request_id: string;

      /**
       * Error resource
       */
      resource: string | null;

      /**
       * ISO8601 Timestamp
       */
      timestamp: VektorAPI.Timestamp;

      /**
       * Error type
       */
      type: string;
    }

    export namespace Error {
      /**
       * Error context
       */
      export interface Context {
        /**
         * Error parameters
         */
        parameters: { [key: string]: unknown };
      }
    }
  }

  /**
   * Repaying a borrowed asset
   */
  export interface ExecutionEVMTransactionBorrowRepay {
    /**
     * An arbitrary precision decimal represented as a string
     */
    amount: string | null;

    /**
     * On-chain asset (aka token)
     */
    asset: VektorAPI.Asset;

    block_number: number | null;

    /**
     * ISO8601 Timestamp
     */
    broadcasted_at: string | null;

    confirmation_target: number;

    /**
     * ISO8601 Timestamp
     */
    confirmed_at: string | null;

    /**
     * ISO8601 Timestamp
     */
    created_at: VektorAPI.Timestamp;

    /**
     * A hex string starting with 0x
     */
    data: string | null;

    /**
     * An arbitrary precision decimal represented as a string
     */
    effective_gas_price: string | null;

    /**
     * Vektor error
     */
    error: ExecutionEVMTransactionBorrowRepay.Error | null;

    /**
     * ISO8601 Timestamp
     */
    errored_at: string | null;

    /**
     * An arbitrary precision decimal represented as a string
     */
    gas_used: string | null;

    /**
     * A transaction hash
     */
    hash: string | null;

    /**
     * A lend/borrow market ID, represented as a TypeID with `lend_borrow_market`
     * prefix
     */
    lend_borrow_market_id: VektorAPI.LendBorrowMarketID;

    /**
     * The payload of an EIP-1559 transaction
     */
    payload: VektorAPI.ExecutionEVMTransactionEIP1559Payload;

    /**
     * ISO8601 Timestamp
     */
    signed_at: string | null;

    /**
     * The state of an EVM transaction
     */
    state: VektorAPI.ExecutionEVMTransactionState;

    /**
     * The state of an EVM transaction
     */
    target_state: VektorAPI.ExecutionEVMTransactionState;

    /**
     * An EVM address
     */
    to: string | null;

    /**
     * ISO8601 Timestamp
     */
    updated_at: VektorAPI.Timestamp;

    /**
     * An arbitrary precision decimal represented as a string
     */
    value: string | null;
  }

  export namespace ExecutionEVMTransactionBorrowRepay {
    /**
     * Vektor error
     */
    export interface Error {
      /**
       * Error context
       */
      context: Error.Context;

      /**
       * Error message
       */
      message: string;

      /**
       * Request ID
       */
      request_id: string;

      /**
       * Error resource
       */
      resource: string | null;

      /**
       * ISO8601 Timestamp
       */
      timestamp: VektorAPI.Timestamp;

      /**
       * Error type
       */
      type: string;
    }

    export namespace Error {
      /**
       * Error context
       */
      export interface Context {
        /**
         * Error parameters
         */
        parameters: { [key: string]: unknown };
      }
    }
  }

  /**
   * Buying an asset with another asset
   */
  export interface ExecutionEVMTransactionBuy {
    /**
     * An EVM address
     */
    approval_target: VektorAPI.Account;

    block_number: number | null;

    /**
     * ISO8601 Timestamp
     */
    broadcasted_at: string | null;

    confirmation_target: number;

    /**
     * ISO8601 Timestamp
     */
    confirmed_at: string | null;

    /**
     * ISO8601 Timestamp
     */
    created_at: VektorAPI.Timestamp;

    /**
     * A hex string starting with 0x
     */
    data: string | null;

    /**
     * An arbitrary precision decimal represented as a string
     */
    effective_gas_price: string | null;

    /**
     * Vektor error
     */
    error: ExecutionEVMTransactionBuy.Error | null;

    /**
     * ISO8601 Timestamp
     */
    errored_at: string | null;

    /**
     * An arbitrary precision decimal represented as a string
     */
    gas_used: string | null;

    /**
     * A transaction hash
     */
    hash: string | null;

    /**
     * An arbitrary precision decimal represented as a string
     */
    max_spend_amount: VektorAPI.Decimal;

    /**
     * The payload of an EIP-1559 transaction
     */
    payload: VektorAPI.ExecutionEVMTransactionEIP1559Payload;

    /**
     * A buy quote
     */
    quote: VektorAPI.BuyQuote;

    /**
     * ISO8601 Timestamp
     */
    signed_at: string | null;

    /**
     * An arbitrary precision decimal represented as a string
     */
    slippage: VektorAPI.Decimal;

    /**
     * The state of an EVM transaction
     */
    state: VektorAPI.ExecutionEVMTransactionState;

    /**
     * The state of an EVM transaction
     */
    target_state: VektorAPI.ExecutionEVMTransactionState;

    /**
     * An EVM address
     */
    to: string | null;

    /**
     * ISO8601 Timestamp
     */
    updated_at: VektorAPI.Timestamp;

    /**
     * An arbitrary precision decimal represented as a string
     */
    value: string | null;
  }

  export namespace ExecutionEVMTransactionBuy {
    /**
     * Vektor error
     */
    export interface Error {
      /**
       * Error context
       */
      context: Error.Context;

      /**
       * Error message
       */
      message: string;

      /**
       * Request ID
       */
      request_id: string;

      /**
       * Error resource
       */
      resource: string | null;

      /**
       * ISO8601 Timestamp
       */
      timestamp: VektorAPI.Timestamp;

      /**
       * Error type
       */
      type: string;
    }

    export namespace Error {
      /**
       * Error context
       */
      export interface Context {
        /**
         * Error parameters
         */
        parameters: { [key: string]: unknown };
      }
    }
  }

  /**
   * Lending an asset
   */
  export interface ExecutionEVMTransactionLend {
    /**
     * An arbitrary precision decimal represented as a string
     */
    amount: VektorAPI.Decimal;

    /**
     * On-chain asset (aka token)
     */
    asset: VektorAPI.Asset;

    block_number: number | null;

    /**
     * ISO8601 Timestamp
     */
    broadcasted_at: string | null;

    confirmation_target: number;

    /**
     * ISO8601 Timestamp
     */
    confirmed_at: string | null;

    /**
     * ISO8601 Timestamp
     */
    created_at: VektorAPI.Timestamp;

    /**
     * A hex string starting with 0x
     */
    data: string | null;

    /**
     * An arbitrary precision decimal represented as a string
     */
    effective_gas_price: string | null;

    /**
     * Vektor error
     */
    error: ExecutionEVMTransactionLend.Error | null;

    /**
     * ISO8601 Timestamp
     */
    errored_at: string | null;

    /**
     * An arbitrary precision decimal represented as a string
     */
    gas_used: string | null;

    /**
     * A transaction hash
     */
    hash: string | null;

    /**
     * A lend/borrow market ID, represented as a TypeID with `lend_borrow_market`
     * prefix
     */
    lend_borrow_market_id: VektorAPI.LendBorrowMarketID;

    /**
     * The payload of an EIP-1559 transaction
     */
    payload: VektorAPI.ExecutionEVMTransactionEIP1559Payload;

    /**
     * ISO8601 Timestamp
     */
    signed_at: string | null;

    /**
     * The state of an EVM transaction
     */
    state: VektorAPI.ExecutionEVMTransactionState;

    /**
     * The state of an EVM transaction
     */
    target_state: VektorAPI.ExecutionEVMTransactionState;

    /**
     * An EVM address
     */
    to: string | null;

    /**
     * ISO8601 Timestamp
     */
    updated_at: VektorAPI.Timestamp;

    /**
     * An arbitrary precision decimal represented as a string
     */
    value: string | null;

    /**
     * A venue symbol
     */
    venue_symbol: VektorAPI.VenueSymbol;
  }

  export namespace ExecutionEVMTransactionLend {
    /**
     * Vektor error
     */
    export interface Error {
      /**
       * Error context
       */
      context: Error.Context;

      /**
       * Error message
       */
      message: string;

      /**
       * Request ID
       */
      request_id: string;

      /**
       * Error resource
       */
      resource: string | null;

      /**
       * ISO8601 Timestamp
       */
      timestamp: VektorAPI.Timestamp;

      /**
       * Error type
       */
      type: string;
    }

    export namespace Error {
      /**
       * Error context
       */
      export interface Context {
        /**
         * Error parameters
         */
        parameters: { [key: string]: unknown };
      }
    }
  }

  /**
   * Setting/unsetting a position as collateral
   */
  export interface ExecutionEVMTransactionLendSetCollateral {
    block_number: number | null;

    /**
     * ISO8601 Timestamp
     */
    broadcasted_at: string | null;

    confirmation_target: number;

    /**
     * ISO8601 Timestamp
     */
    confirmed_at: string | null;

    /**
     * ISO8601 Timestamp
     */
    created_at: VektorAPI.Timestamp;

    /**
     * A hex string starting with 0x
     */
    data: string | null;

    /**
     * An arbitrary precision decimal represented as a string
     */
    effective_gas_price: string | null;

    /**
     * Vektor error
     */
    error: ExecutionEVMTransactionLendSetCollateral.Error | null;

    /**
     * ISO8601 Timestamp
     */
    errored_at: string | null;

    /**
     * An arbitrary precision decimal represented as a string
     */
    gas_used: string | null;

    /**
     * A transaction hash
     */
    hash: string | null;

    /**
     * A lend/borrow market ID, represented as a TypeID with `lend_borrow_market`
     * prefix
     */
    lend_borrow_market_id: VektorAPI.LendBorrowMarketID;

    /**
     * The payload of an EIP-1559 transaction
     */
    payload: VektorAPI.ExecutionEVMTransactionEIP1559Payload;

    /**
     * ISO8601 Timestamp
     */
    signed_at: string | null;

    /**
     * The state of an EVM transaction
     */
    state: VektorAPI.ExecutionEVMTransactionState;

    status: boolean;

    /**
     * The state of an EVM transaction
     */
    target_state: VektorAPI.ExecutionEVMTransactionState;

    /**
     * An EVM address
     */
    to: string | null;

    /**
     * ISO8601 Timestamp
     */
    updated_at: VektorAPI.Timestamp;

    /**
     * An arbitrary precision decimal represented as a string
     */
    value: string | null;
  }

  export namespace ExecutionEVMTransactionLendSetCollateral {
    /**
     * Vektor error
     */
    export interface Error {
      /**
       * Error context
       */
      context: Error.Context;

      /**
       * Error message
       */
      message: string;

      /**
       * Request ID
       */
      request_id: string;

      /**
       * Error resource
       */
      resource: string | null;

      /**
       * ISO8601 Timestamp
       */
      timestamp: VektorAPI.Timestamp;

      /**
       * Error type
       */
      type: string;
    }

    export namespace Error {
      /**
       * Error context
       */
      export interface Context {
        /**
         * Error parameters
         */
        parameters: { [key: string]: unknown };
      }
    }
  }

  /**
   * Withdrawing an asset
   */
  export interface ExecutionEVMTransactionLendWithdraw {
    /**
     * An arbitrary precision decimal represented as a string
     */
    amount: string | null;

    /**
     * On-chain asset (aka token)
     */
    asset: VektorAPI.Asset;

    block_number: number | null;

    /**
     * ISO8601 Timestamp
     */
    broadcasted_at: string | null;

    confirmation_target: number;

    /**
     * ISO8601 Timestamp
     */
    confirmed_at: string | null;

    /**
     * ISO8601 Timestamp
     */
    created_at: VektorAPI.Timestamp;

    /**
     * A hex string starting with 0x
     */
    data: string | null;

    /**
     * An arbitrary precision decimal represented as a string
     */
    effective_gas_price: string | null;

    /**
     * Vektor error
     */
    error: ExecutionEVMTransactionLendWithdraw.Error | null;

    /**
     * ISO8601 Timestamp
     */
    errored_at: string | null;

    /**
     * An arbitrary precision decimal represented as a string
     */
    gas_used: string | null;

    /**
     * A transaction hash
     */
    hash: string | null;

    /**
     * A lend/borrow market ID, represented as a TypeID with `lend_borrow_market`
     * prefix
     */
    lend_borrow_market_id: VektorAPI.LendBorrowMarketID;

    /**
     * The payload of an EIP-1559 transaction
     */
    payload: VektorAPI.ExecutionEVMTransactionEIP1559Payload;

    /**
     * ISO8601 Timestamp
     */
    signed_at: string | null;

    /**
     * The state of an EVM transaction
     */
    state: VektorAPI.ExecutionEVMTransactionState;

    /**
     * The state of an EVM transaction
     */
    target_state: VektorAPI.ExecutionEVMTransactionState;

    /**
     * An EVM address
     */
    to: string | null;

    /**
     * ISO8601 Timestamp
     */
    updated_at: VektorAPI.Timestamp;

    /**
     * An arbitrary precision decimal represented as a string
     */
    value: string | null;
  }

  export namespace ExecutionEVMTransactionLendWithdraw {
    /**
     * Vektor error
     */
    export interface Error {
      /**
       * Error context
       */
      context: Error.Context;

      /**
       * Error message
       */
      message: string;

      /**
       * Request ID
       */
      request_id: string;

      /**
       * Error resource
       */
      resource: string | null;

      /**
       * ISO8601 Timestamp
       */
      timestamp: VektorAPI.Timestamp;

      /**
       * Error type
       */
      type: string;
    }

    export namespace Error {
      /**
       * Error context
       */
      export interface Context {
        /**
         * Error parameters
         */
        parameters: { [key: string]: unknown };
      }
    }
  }

  /**
   * A move of assets from one account to another
   */
  export interface ExecutionEVMTransactionMove {
    /**
     * An arbitrary precision decimal represented as a string
     */
    amount: VektorAPI.Decimal;

    /**
     * On-chain asset (aka token)
     */
    asset: VektorAPI.Asset;

    block_number: number | null;

    /**
     * ISO8601 Timestamp
     */
    broadcasted_at: string | null;

    confirmation_target: number;

    /**
     * ISO8601 Timestamp
     */
    confirmed_at: string | null;

    /**
     * ISO8601 Timestamp
     */
    created_at: VektorAPI.Timestamp;

    /**
     * A hex string starting with 0x
     */
    data: string | null;

    /**
     * An arbitrary precision decimal represented as a string
     */
    effective_gas_price: string | null;

    /**
     * Vektor error
     */
    error: ExecutionEVMTransactionMove.Error | null;

    /**
     * ISO8601 Timestamp
     */
    errored_at: string | null;

    /**
     * An arbitrary precision decimal represented as a string
     */
    gas_used: string | null;

    /**
     * A transaction hash
     */
    hash: string | null;

    /**
     * The payload of an EIP-1559 transaction
     */
    payload: VektorAPI.ExecutionEVMTransactionEIP1559Payload;

    /**
     * ISO8601 Timestamp
     */
    signed_at: string | null;

    /**
     * The state of an EVM transaction
     */
    state: VektorAPI.ExecutionEVMTransactionState;

    /**
     * The state of an EVM transaction
     */
    target_state: VektorAPI.ExecutionEVMTransactionState;

    /**
     * An EVM address
     */
    to: VektorAPI.Account | null;

    /**
     * ISO8601 Timestamp
     */
    updated_at: VektorAPI.Timestamp;

    /**
     * An arbitrary precision decimal represented as a string
     */
    value: string | null;
  }

  export namespace ExecutionEVMTransactionMove {
    /**
     * Vektor error
     */
    export interface Error {
      /**
       * Error context
       */
      context: Error.Context;

      /**
       * Error message
       */
      message: string;

      /**
       * Request ID
       */
      request_id: string;

      /**
       * Error resource
       */
      resource: string | null;

      /**
       * ISO8601 Timestamp
       */
      timestamp: VektorAPI.Timestamp;

      /**
       * Error type
       */
      type: string;
    }

    export namespace Error {
      /**
       * Error context
       */
      export interface Context {
        /**
         * Error parameters
         */
        parameters: { [key: string]: unknown };
      }
    }
  }

  /**
   * A permission to a contract
   */
  export interface ExecutionEVMTransactionPermission {
    block_number: number | null;

    /**
     * ISO8601 Timestamp
     */
    broadcasted_at: string | null;

    confirmation_target: number;

    /**
     * ISO8601 Timestamp
     */
    confirmed_at: string | null;

    /**
     * An EVM address
     */
    contract_address: VektorAPI.AddressEVM;

    /**
     * ISO8601 Timestamp
     */
    created_at: VektorAPI.Timestamp;

    /**
     * A hex string starting with 0x
     */
    data: string | null;

    /**
     * An arbitrary precision decimal represented as a string
     */
    effective_gas_price: string | null;

    /**
     * Vektor error
     */
    error: ExecutionEVMTransactionPermission.Error | null;

    /**
     * ISO8601 Timestamp
     */
    errored_at: string | null;

    /**
     * An arbitrary precision decimal represented as a string
     */
    gas_used: string | null;

    /**
     * A transaction hash
     */
    hash: string | null;

    /**
     * A lend/borrow market ID, represented as a TypeID with `lend_borrow_market`
     * prefix
     */
    lend_borrow_market_id: VektorAPI.LendBorrowMarketID;

    /**
     * The payload of an EIP-1559 transaction
     */
    payload: VektorAPI.ExecutionEVMTransactionEIP1559Payload;

    permission: boolean;

    /**
     * ISO8601 Timestamp
     */
    signed_at: string | null;

    /**
     * An EVM address
     */
    spender: VektorAPI.Account;

    /**
     * The state of an EVM transaction
     */
    state: VektorAPI.ExecutionEVMTransactionState;

    /**
     * The state of an EVM transaction
     */
    target_state: VektorAPI.ExecutionEVMTransactionState;

    /**
     * An EVM address
     */
    to: string | null;

    /**
     * The type of a permission
     */
    type: 'compound_v3_comet';

    /**
     * ISO8601 Timestamp
     */
    updated_at: VektorAPI.Timestamp;

    /**
     * An arbitrary precision decimal represented as a string
     */
    value: string | null;
  }

  export namespace ExecutionEVMTransactionPermission {
    /**
     * Vektor error
     */
    export interface Error {
      /**
       * Error context
       */
      context: Error.Context;

      /**
       * Error message
       */
      message: string;

      /**
       * Request ID
       */
      request_id: string;

      /**
       * Error resource
       */
      resource: string | null;

      /**
       * ISO8601 Timestamp
       */
      timestamp: VektorAPI.Timestamp;

      /**
       * Error type
       */
      type: string;
    }

    export namespace Error {
      /**
       * Error context
       */
      export interface Context {
        /**
         * Error parameters
         */
        parameters: { [key: string]: unknown };
      }
    }
  }

  /**
   * An unwrap of the wrapped native asset
   */
  export interface ExecutionEVMTransactionUnwrap {
    /**
     * An arbitrary precision decimal represented as a string
     */
    amount: VektorAPI.Decimal;

    block_number: number | null;

    /**
     * ISO8601 Timestamp
     */
    broadcasted_at: string | null;

    confirmation_target: number;

    /**
     * ISO8601 Timestamp
     */
    confirmed_at: string | null;

    /**
     * ISO8601 Timestamp
     */
    created_at: VektorAPI.Timestamp;

    /**
     * A hex string starting with 0x
     */
    data: string | null;

    /**
     * An arbitrary precision decimal represented as a string
     */
    effective_gas_price: string | null;

    /**
     * Vektor error
     */
    error: ExecutionEVMTransactionUnwrap.Error | null;

    /**
     * ISO8601 Timestamp
     */
    errored_at: string | null;

    /**
     * An arbitrary precision decimal represented as a string
     */
    gas_used: string | null;

    /**
     * A transaction hash
     */
    hash: string | null;

    /**
     * The payload of an EIP-1559 transaction
     */
    payload: VektorAPI.ExecutionEVMTransactionEIP1559Payload;

    /**
     * ISO8601 Timestamp
     */
    signed_at: string | null;

    /**
     * The state of an EVM transaction
     */
    state: VektorAPI.ExecutionEVMTransactionState;

    /**
     * The state of an EVM transaction
     */
    target_state: VektorAPI.ExecutionEVMTransactionState;

    /**
     * An EVM address
     */
    to: string | null;

    /**
     * ISO8601 Timestamp
     */
    updated_at: VektorAPI.Timestamp;

    /**
     * An arbitrary precision decimal represented as a string
     */
    value: string | null;
  }

  export namespace ExecutionEVMTransactionUnwrap {
    /**
     * Vektor error
     */
    export interface Error {
      /**
       * Error context
       */
      context: Error.Context;

      /**
       * Error message
       */
      message: string;

      /**
       * Request ID
       */
      request_id: string;

      /**
       * Error resource
       */
      resource: string | null;

      /**
       * ISO8601 Timestamp
       */
      timestamp: VektorAPI.Timestamp;

      /**
       * Error type
       */
      type: string;
    }

    export namespace Error {
      /**
       * Error context
       */
      export interface Context {
        /**
         * Error parameters
         */
        parameters: { [key: string]: unknown };
      }
    }
  }

  /**
   * A wrap of the native asset
   */
  export interface ExecutionEVMTransactionWrap {
    /**
     * An arbitrary precision decimal represented as a string
     */
    amount: VektorAPI.Decimal;

    block_number: number | null;

    /**
     * ISO8601 Timestamp
     */
    broadcasted_at: string | null;

    confirmation_target: number;

    /**
     * ISO8601 Timestamp
     */
    confirmed_at: string | null;

    /**
     * ISO8601 Timestamp
     */
    created_at: VektorAPI.Timestamp;

    /**
     * A hex string starting with 0x
     */
    data: string | null;

    /**
     * An arbitrary precision decimal represented as a string
     */
    effective_gas_price: string | null;

    /**
     * Vektor error
     */
    error: ExecutionEVMTransactionWrap.Error | null;

    /**
     * ISO8601 Timestamp
     */
    errored_at: string | null;

    /**
     * An arbitrary precision decimal represented as a string
     */
    gas_used: string | null;

    /**
     * A transaction hash
     */
    hash: string | null;

    /**
     * The payload of an EIP-1559 transaction
     */
    payload: VektorAPI.ExecutionEVMTransactionEIP1559Payload;

    /**
     * ISO8601 Timestamp
     */
    signed_at: string | null;

    /**
     * The state of an EVM transaction
     */
    state: VektorAPI.ExecutionEVMTransactionState;

    /**
     * The state of an EVM transaction
     */
    target_state: VektorAPI.ExecutionEVMTransactionState;

    /**
     * An EVM address
     */
    to: string | null;

    /**
     * ISO8601 Timestamp
     */
    updated_at: VektorAPI.Timestamp;

    /**
     * An arbitrary precision decimal represented as a string
     */
    value: string | null;
  }

  export namespace ExecutionEVMTransactionWrap {
    /**
     * Vektor error
     */
    export interface Error {
      /**
       * Error context
       */
      context: Error.Context;

      /**
       * Error message
       */
      message: string;

      /**
       * Request ID
       */
      request_id: string;

      /**
       * Error resource
       */
      resource: string | null;

      /**
       * ISO8601 Timestamp
       */
      timestamp: VektorAPI.Timestamp;

      /**
       * Error type
       */
      type: string;
    }

    export namespace Error {
      /**
       * Error context
       */
      export interface Context {
        /**
         * Error parameters
         */
        parameters: { [key: string]: unknown };
      }
    }
  }

  /**
   * Selling an asset for another asset
   */
  export interface ExecutionEVMTransactionSell {
    /**
     * An EVM address
     */
    approval_target: VektorAPI.Account;

    block_number: number | null;

    /**
     * ISO8601 Timestamp
     */
    broadcasted_at: string | null;

    confirmation_target: number;

    /**
     * ISO8601 Timestamp
     */
    confirmed_at: string | null;

    /**
     * ISO8601 Timestamp
     */
    created_at: VektorAPI.Timestamp;

    /**
     * A hex string starting with 0x
     */
    data: string | null;

    /**
     * An arbitrary precision decimal represented as a string
     */
    effective_gas_price: string | null;

    /**
     * Vektor error
     */
    error: ExecutionEVMTransactionSell.Error | null;

    /**
     * ISO8601 Timestamp
     */
    errored_at: string | null;

    /**
     * An arbitrary precision decimal represented as a string
     */
    gas_used: string | null;

    /**
     * A transaction hash
     */
    hash: string | null;

    /**
     * An arbitrary precision decimal represented as a string
     */
    min_receive_amount: VektorAPI.Decimal;

    /**
     * The payload of an EIP-1559 transaction
     */
    payload: VektorAPI.ExecutionEVMTransactionEIP1559Payload;

    /**
     * A sell quote
     */
    quote: VektorAPI.SellQuote;

    /**
     * ISO8601 Timestamp
     */
    signed_at: string | null;

    /**
     * An arbitrary precision decimal represented as a string
     */
    slippage: VektorAPI.Decimal;

    /**
     * The state of an EVM transaction
     */
    state: VektorAPI.ExecutionEVMTransactionState;

    /**
     * The state of an EVM transaction
     */
    target_state: VektorAPI.ExecutionEVMTransactionState;

    /**
     * An EVM address
     */
    to: string | null;

    /**
     * ISO8601 Timestamp
     */
    updated_at: VektorAPI.Timestamp;

    /**
     * An arbitrary precision decimal represented as a string
     */
    value: string | null;
  }

  export namespace ExecutionEVMTransactionSell {
    /**
     * Vektor error
     */
    export interface Error {
      /**
       * Error context
       */
      context: Error.Context;

      /**
       * Error message
       */
      message: string;

      /**
       * Request ID
       */
      request_id: string;

      /**
       * Error resource
       */
      resource: string | null;

      /**
       * ISO8601 Timestamp
       */
      timestamp: VektorAPI.Timestamp;

      /**
       * Error type
       */
      type: string;
    }

    export namespace Error {
      /**
       * Error context
       */
      export interface Context {
        /**
         * Error parameters
         */
        parameters: { [key: string]: unknown };
      }
    }
  }
}

export interface StepGetParams {
  /**
   * Execution ID
   */
  execution_id: string;
}

export interface StepSignParams {
  /**
   * Path param: Execution ID
   */
  execution_id: string;

  /**
   * Body param: A hex string starting with 0x
   */
  signed_payload: VektorAPI.HexString;
}

export declare namespace Steps {
  export {
    type StepGetResponse as StepGetResponse,
    type StepGetParams as StepGetParams,
    type StepSignParams as StepSignParams,
  };
}
