// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as VektorAPI from './vektor';
import * as BalancesAPI from './balances';
import {
  BalanceListHistoricalParams,
  BalanceListHistoricalResponse,
  BalanceListParams,
  BalanceListResponse,
  Balances,
} from './balances';
import * as IncentivizeAPI from './incentivize';
import { Incentivize, IncentivizeListParams, IncentivizeListResponse } from './incentivize';
import * as MoveAPI from './move';
import { Move, MoveCreateParams } from './move';
import * as PricesAPI from './prices';
import {
  PriceListHistoricalParams,
  PriceListHistoricalResponse,
  PriceListParams,
  PriceListResponse,
  Prices,
} from './prices';
import * as BorrowAPI from './borrow/borrow';
import { Borrow } from './borrow/borrow';
import * as BridgeAPI from './bridge/bridge';
import { Bridge } from './bridge/bridge';
import * as BuyAPI from './buy/buy';
import { Buy } from './buy/buy';
import * as ExecutionsAPI from './executions/executions';
import { ExecutionListResponse, Executions } from './executions/executions';
import * as LendAPI from './lend/lend';
import { Lend } from './lend/lend';
import * as LockAPI from './lock/lock';
import { Lock } from './lock/lock';
import * as LPAPI from './lp/lp';
import { LP } from './lp/lp';
import * as RegistryAPI from './registry/registry';
import { Registry } from './registry/registry';
import * as SellAPI from './sell/sell';
import { Sell } from './sell/sell';
import * as VoteAPI from './vote/vote';
import { Vote } from './vote/vote';
import * as WrapAPI from './wrap/wrap';
import { Wrap } from './wrap/wrap';

export class Vektor extends APIResource {
  registry: RegistryAPI.Registry = new RegistryAPI.Registry(this._client);
  balances: BalancesAPI.Balances = new BalancesAPI.Balances(this._client);
  prices: PricesAPI.Prices = new PricesAPI.Prices(this._client);
  lend: LendAPI.Lend = new LendAPI.Lend(this._client);
  borrow: BorrowAPI.Borrow = new BorrowAPI.Borrow(this._client);
  lp: LPAPI.LP = new LPAPI.LP(this._client);
  buy: BuyAPI.Buy = new BuyAPI.Buy(this._client);
  sell: SellAPI.Sell = new SellAPI.Sell(this._client);
  move: MoveAPI.Move = new MoveAPI.Move(this._client);
  wrap: WrapAPI.Wrap = new WrapAPI.Wrap(this._client);
  bridge: BridgeAPI.Bridge = new BridgeAPI.Bridge(this._client);
  lock: LockAPI.Lock = new LockAPI.Lock(this._client);
  vote: VoteAPI.Vote = new VoteAPI.Vote(this._client);
  incentivize: IncentivizeAPI.Incentivize = new IncentivizeAPI.Incentivize(this._client);
  executions: ExecutionsAPI.Executions = new ExecutionsAPI.Executions(this._client);
}

/**
 * An EVM address
 */
export type Account = string;

/**
 * An EVM address
 */
export type AddressEVM = string;

/**
 * APY Data
 */
export interface APY {
  /**
   * An arbitrary precision decimal represented as a string
   */
  apy: Decimal;

  /**
   * On-chain asset (aka token)
   */
  asset: Asset;

  /**
   * APY Type
   */
  type: 'fixed' | 'variable';
}

/**
 * On-chain asset (aka token)
 */
export interface Asset {
  /**
   * An asset ID, represented as a TypeID with `asset` prefix
   */
  id: AssetID;

  /**
   * An EVM address
   */
  address: string | null;

  /**
   * Data about a blockchain
   */
  blockchain: Blockchain;

  /**
   * Asset's decimal places
   */
  decimals: number;

  /**
   * Asset's name
   */
  name: string;

  /**
   * Asset's symbol
   */
  symbol: string;
}

/**
 * An asset ID, represented as a TypeID with `asset` prefix
 */
export type AssetID = string;

/**
 * An asset ID, represented as a TypeID with `asset` prefix
 */
export type AssetIDOrAddressEVMOrAssetSymbol = string;

/**
 * An asset symbol
 */
export type AssetSymbol = string;

/**
 * Balance properties
 */
export interface Balance {
  /**
   * An EVM address
   */
  account: AddressEVM;

  /**
   * An arbitrary precision decimal represented as a string
   */
  amount: Decimal;

  /**
   * An asset ID, represented as a TypeID with `asset` prefix
   */
  asset_id: AssetID;

  /**
   * Information about a specific block number and its timestamp
   */
  blockstamp: Blockstamp;

  /**
   * An arbitrary precision decimal represented as a string
   */
  value: Decimal;

  /**
   * An asset symbol
   */
  quote_asset_symbol?: string | null;
}

/**
 * A block number
 */
export type BlockNumber = number;

/**
 * Data about a blockchain
 */
export interface Blockchain {
  /**
   * A blockchain ID, represented as a TypeID with `blockchain` prefix
   */
  id: BlockchainID;

  /**
   * Data about an EVM blockchain
   */
  chain_data: EVMChainData;

  /**
   * Blockchain ecosystem
   */
  chain_type: ChainType;

  /**
   * The blockchain's explorer URL
   */
  explorer_url: string;

  /**
   * BlockchainName
   */
  name: BlockchainName;

  /**
   * Blockchain's network
   */
  network: NetworkName;

  /**
   * A blockchain symbol
   */
  symbol: BlockchainSymbol;
}

/**
 * A blockchain ID, represented as a TypeID with `blockchain` prefix
 */
export type BlockchainID = string;

/**
 * A blockchain ID, represented as a TypeID with `blockchain` prefix
 */
export type BlockchainIDOrBlockchainSymbol = string;

/**
 * BlockchainName
 */
export type BlockchainName = string;

/**
 * A blockchain symbol
 */
export type BlockchainSymbol = string;

/**
 * Information about a specific block number and its timestamp
 */
export interface Blockstamp {
  /**
   * A block number
   */
  block_number: BlockNumber;

  /**
   * Data about a blockchain
   */
  blockchain: Blockchain;

  /**
   * ISO8601 Timestamp
   */
  timestamp: Timestamp;
}

/**
 * A borrow account
 */
export interface BorrowAccount {
  /**
   * An EVM address
   */
  account: Account;

  /**
   * An arbitrary precision decimal represented as a string
   */
  available_borrow: Decimal;

  /**
   * Information about a specific block number and its timestamp
   */
  blockstamp: Blockstamp;

  /**
   * An arbitrary precision decimal represented as a string
   */
  health_factor: Decimal;

  /**
   * An asset symbol
   */
  quote_asset_symbol: string | null;

  /**
   * An arbitrary precision decimal represented as a string
   */
  total_collateral: Decimal;

  /**
   * An arbitrary precision decimal represented as a string
   */
  total_debt: Decimal;

  /**
   * On-chain venue
   */
  venue: Venue;
}

/**
 * A borrow market
 */
export interface BorrowMarket {
  /**
   * A lend/borrow market ID, represented as a TypeID with `lend_borrow_market`
   * prefix
   */
  id: LendBorrowMarketID;

  /**
   * APY Data for lend/borrow markets
   */
  apys: LendBorrowAPYs;

  /**
   * On-chain asset (aka token)
   */
  asset: Asset;

  /**
   * Information about a specific block number and its timestamp
   */
  blockstamp: Blockstamp;

  /**
   * An arbitrary precision decimal represented as a string
   */
  liquidity: Decimal;

  /**
   * An asset symbol
   */
  quote_asset_symbol: string | null;

  /**
   * An arbitrary precision decimal represented as a string
   */
  total_debt: Decimal;

  /**
   * On-chain venue
   */
  venue: Venue;
}

/**
 * A borrow position
 */
export interface BorrowPosition {
  /**
   * An EVM address
   */
  account: Account;

  /**
   * Information about a specific block number and its timestamp
   */
  blockstamp: Blockstamp;

  /**
   * An arbitrary precision decimal represented as a string
   */
  debt_amount: Decimal;

  /**
   * A borrow market
   */
  market: BorrowMarket;

  /**
   * An asset symbol
   */
  quote_asset_symbol: string | null;

  /**
   * An arbitrary precision decimal represented as a string
   */
  value: string | null;
}

/**
 * A bridge quote
 */
export interface BridgeQuote {
  /**
   * Estimated cost of an operation
   */
  fee_estimate: BridgeQuote.FeeEstimate | null;

  /**
   * An arbitrary precision decimal represented as a string
   */
  receive_amount: Decimal;

  /**
   * On-chain asset (aka token)
   */
  receive_asset: Asset;

  /**
   * Estimated time to receive the asset (in seconds)
   */
  receive_time_est: number;

  /**
   * The route name
   */
  route: string;

  /**
   * An arbitrary precision decimal represented as a string
   */
  send_amount: Decimal;

  /**
   * On-chain asset (aka token)
   */
  send_asset: Asset;

  /**
   * On-chain venue
   */
  venue: Venue;
}

export namespace BridgeQuote {
  /**
   * Estimated cost of an operation
   */
  export interface FeeEstimate {
    /**
     * An arbitrary precision decimal represented as a string
     */
    amount: VektorAPI.Decimal;

    /**
     * On-chain asset (aka token)
     */
    asset: VektorAPI.Asset;

    /**
     * An arbitrary precision decimal represented as a string
     */
    cost: string | null;

    /**
     * An asset symbol
     */
    quote_asset_symbol: string | null;
  }
}

/**
 * A buy quote
 */
export interface BuyQuote {
  /**
   * Data about a blockchain
   */
  blockchain: Blockchain;

  /**
   * Estimated cost of an operation
   */
  fee_estimate: BuyQuote.FeeEstimate | null;

  /**
   * An asset symbol
   */
  quote_asset_symbol: string | null;

  /**
   * Quote info for buy quotes
   */
  quote_info: QuoteInfoUniswapV2 | QuoteInfoUniswapV3;

  /**
   * An arbitrary precision decimal represented as a string
   */
  quote_value: string | null;

  /**
   * An arbitrary precision decimal represented as a string
   */
  receive_amount: Decimal;

  /**
   * On-chain asset (aka token)
   */
  receive_asset: Asset;

  /**
   * An arbitrary precision decimal represented as a string
   */
  spend_amount: Decimal;

  /**
   * On-chain asset (aka token)
   */
  spend_asset: Asset;

  /**
   * On-chain venue
   */
  venue: Venue;
}

export namespace BuyQuote {
  /**
   * Estimated cost of an operation
   */
  export interface FeeEstimate {
    /**
     * An arbitrary precision decimal represented as a string
     */
    amount: VektorAPI.Decimal;

    /**
     * On-chain asset (aka token)
     */
    asset: VektorAPI.Asset;

    /**
     * An arbitrary precision decimal represented as a string
     */
    cost: string | null;

    /**
     * An asset symbol
     */
    quote_asset_symbol: string | null;
  }
}

/**
 * Blockchain ecosystem
 */
export type ChainType = 'evm';

/**
 * An arbitrary precision decimal represented as a string
 */
export type Decimal = string;

/**
 * Data about an EVM blockchain
 */
export interface EVMChainData {
  /**
   * Chain ID
   */
  chain_id: number;
}

/**
 * An execution
 */
export interface Execution {
  /**
   * An execution ID, represented as a TypeID with `execution` prefix
   */
  id: ExecutionID;

  /**
   * ISO8601 Timestamp
   */
  created_at: Timestamp;

  /**
   * An execution request
   */
  request:
    | Execution.BorrowRequestFull
    | Execution.BorrowRepayRequestFull
    | Execution.BuyRequestFull
    | Execution.LendRequestFull
    | Execution.LendSetCollateralRequestFull
    | Execution.LendWithdrawRequestFull
    | Execution.MoveRequestFull
    | Execution.SellRequestFull
    | Execution.WrapRequestFull
    | Execution.UnwrapRequestFull;

  /**
   * An execution step ID, represented as a TypeID with `execution_step` prefix
   */
  request_action_step_id: string | null;

  /**
   * The state of an execution
   */
  state: ExecutionState;

  step_action_url: string | null;

  /**
   * A list of execution steps
   */
  steps: Array<Execution.Step>;

  /**
   * ISO8601 Timestamp
   */
  updated_at: Timestamp;
}

export namespace Execution {
  /**
   * A request to borrow an asset
   */
  export interface BorrowRequestFull {
    /**
     * An arbitrary precision decimal represented as a string
     */
    amount: VektorAPI.Decimal;

    /**
     * On-chain asset (aka token)
     */
    asset: VektorAPI.Asset;

    /**
     * Data about a blockchain
     */
    blockchain: VektorAPI.Blockchain;

    /**
     * An EVM address
     */
    from: VektorAPI.Account;

    /**
     * A list of venues
     */
    venues: Array<VektorAPI.Venue>;
  }

  /**
   * A request to repay a borrowed asset
   */
  export interface BorrowRepayRequestFull {
    /**
     * An arbitrary precision decimal represented as a string
     */
    amount: string | null;

    /**
     * On-chain asset (aka token)
     */
    asset: BorrowRepayRequestFull.Asset | null;

    /**
     * Data about a blockchain
     */
    blockchain: VektorAPI.Blockchain;

    /**
     * An EVM address
     */
    from: VektorAPI.Account;

    /**
     * A lend/borrow market ID, represented as a TypeID with `lend_borrow_market`
     * prefix
     */
    market_id: VektorAPI.LendBorrowMarketID;
  }

  export namespace BorrowRepayRequestFull {
    /**
     * On-chain asset (aka token)
     */
    export interface Asset {
      /**
       * An asset ID, represented as a TypeID with `asset` prefix
       */
      id: VektorAPI.AssetID;

      /**
       * An EVM address
       */
      address: string | null;

      /**
       * Data about a blockchain
       */
      blockchain: VektorAPI.Blockchain;

      /**
       * Asset's decimal places
       */
      decimals: number;

      /**
       * Asset's name
       */
      name: string;

      /**
       * Asset's symbol
       */
      symbol: string;
    }
  }

  /**
   * A request to buy an asset
   */
  export interface BuyRequestFull {
    /**
     * Data about a blockchain
     */
    blockchain: VektorAPI.Blockchain;

    /**
     * An EVM address
     */
    from: VektorAPI.Account;

    /**
     * An arbitrary precision decimal represented as a string
     */
    receive_amount: VektorAPI.Decimal;

    /**
     * On-chain asset (aka token)
     */
    receive_asset: VektorAPI.Asset;

    /**
     * An arbitrary precision decimal represented as a string
     */
    slippage: VektorAPI.Decimal;

    /**
     * On-chain asset (aka token)
     */
    spend_asset: VektorAPI.Asset;

    /**
     * A list of venues
     */
    venues: Array<VektorAPI.Venue>;
  }

  /**
   * A request to lend an asset
   */
  export interface LendRequestFull {
    /**
     * An arbitrary precision decimal represented as a string
     */
    amount: VektorAPI.Decimal;

    /**
     * On-chain asset (aka token)
     */
    asset: VektorAPI.Asset;

    /**
     * Data about a blockchain
     */
    blockchain: VektorAPI.Blockchain;

    /**
     * An EVM address
     */
    from: VektorAPI.Account;

    /**
     * A list of venues
     */
    venues: Array<VektorAPI.Venue>;
  }

  /**
   * A request to set/unset a position as collateral
   */
  export interface LendSetCollateralRequestFull {
    /**
     * Data about a blockchain
     */
    blockchain: VektorAPI.Blockchain;

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

  /**
   * A request to withdraw an asset
   */
  export interface LendWithdrawRequestFull {
    /**
     * An arbitrary precision decimal represented as a string
     */
    amount: string | null;

    /**
     * On-chain asset (aka token)
     */
    asset: LendWithdrawRequestFull.Asset | null;

    /**
     * Data about a blockchain
     */
    blockchain: VektorAPI.Blockchain;

    /**
     * An EVM address
     */
    from: VektorAPI.Account;

    /**
     * A lend/borrow market ID, represented as a TypeID with `lend_borrow_market`
     * prefix
     */
    market_id: VektorAPI.LendBorrowMarketID;
  }

  export namespace LendWithdrawRequestFull {
    /**
     * On-chain asset (aka token)
     */
    export interface Asset {
      /**
       * An asset ID, represented as a TypeID with `asset` prefix
       */
      id: VektorAPI.AssetID;

      /**
       * An EVM address
       */
      address: string | null;

      /**
       * Data about a blockchain
       */
      blockchain: VektorAPI.Blockchain;

      /**
       * Asset's decimal places
       */
      decimals: number;

      /**
       * Asset's name
       */
      name: string;

      /**
       * Asset's symbol
       */
      symbol: string;
    }
  }

  /**
   * A request to move assets from one account to another
   */
  export interface MoveRequestFull {
    /**
     * An arbitrary precision decimal represented as a string
     */
    amount: VektorAPI.Decimal;

    /**
     * On-chain asset (aka token)
     */
    asset: VektorAPI.Asset;

    /**
     * Data about a blockchain
     */
    blockchain: VektorAPI.Blockchain;

    /**
     * An EVM address
     */
    from: VektorAPI.Account;

    /**
     * An EVM address
     */
    to: VektorAPI.Account;
  }

  /**
   * A request to sell an asset
   */
  export interface SellRequestFull {
    /**
     * Data about a blockchain
     */
    blockchain: VektorAPI.Blockchain;

    /**
     * An EVM address
     */
    from: VektorAPI.Account;

    /**
     * On-chain asset (aka token)
     */
    receive_asset: VektorAPI.Asset;

    /**
     * An arbitrary precision decimal represented as a string
     */
    slippage: VektorAPI.Decimal;

    /**
     * An arbitrary precision decimal represented as a string
     */
    spend_amount: VektorAPI.Decimal;

    /**
     * On-chain asset (aka token)
     */
    spend_asset: VektorAPI.Asset;

    /**
     * A list of venues
     */
    venues: Array<VektorAPI.Venue>;
  }

  /**
   * A request to wrap the native asset
   */
  export interface WrapRequestFull {
    /**
     * An arbitrary precision decimal represented as a string
     */
    amount: VektorAPI.Decimal;

    /**
     * Data about a blockchain
     */
    blockchain: VektorAPI.Blockchain;

    /**
     * An EVM address
     */
    from: VektorAPI.Account;
  }

  /**
   * A request to unwrap the wrapped native asset
   */
  export interface UnwrapRequestFull {
    /**
     * An arbitrary precision decimal represented as a string
     */
    amount: VektorAPI.Decimal;

    /**
     * Data about a blockchain
     */
    blockchain: VektorAPI.Blockchain;

    /**
     * An EVM address
     */
    from: VektorAPI.Account;
  }

  /**
   * An execution step
   */
  export interface Step {
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
      | Step.ExecutionEVMTransactionApprove
      | Step.ExecutionEVMTransactionBorrow
      | Step.ExecutionEVMTransactionBorrowRepay
      | Step.ExecutionEVMTransactionBuy
      | Step.ExecutionEVMTransactionLend
      | Step.ExecutionEVMTransactionLendSetCollateral
      | Step.ExecutionEVMTransactionLendWithdraw
      | Step.ExecutionEVMTransactionMove
      | Step.ExecutionEVMTransactionPermission
      | Step.ExecutionEVMTransactionUnwrap
      | Step.ExecutionEVMTransactionWrap
      | Step.ExecutionEVMTransactionSell;

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

  export namespace Step {
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
       * An error
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
       * An error
       */
      export interface Error {
        /**
         * Error message
         */
        message: string;

        /**
         * Error parameters
         */
        params: { [key: string]: unknown };

        /**
         * Error type
         */
        type: string;
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
       * An error
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
       * An error
       */
      export interface Error {
        /**
         * Error message
         */
        message: string;

        /**
         * Error parameters
         */
        params: { [key: string]: unknown };

        /**
         * Error type
         */
        type: string;
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
       * An error
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
       * An error
       */
      export interface Error {
        /**
         * Error message
         */
        message: string;

        /**
         * Error parameters
         */
        params: { [key: string]: unknown };

        /**
         * Error type
         */
        type: string;
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
       * An error
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
       * An error
       */
      export interface Error {
        /**
         * Error message
         */
        message: string;

        /**
         * Error parameters
         */
        params: { [key: string]: unknown };

        /**
         * Error type
         */
        type: string;
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
       * An error
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
       * An error
       */
      export interface Error {
        /**
         * Error message
         */
        message: string;

        /**
         * Error parameters
         */
        params: { [key: string]: unknown };

        /**
         * Error type
         */
        type: string;
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
       * An error
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
       * An error
       */
      export interface Error {
        /**
         * Error message
         */
        message: string;

        /**
         * Error parameters
         */
        params: { [key: string]: unknown };

        /**
         * Error type
         */
        type: string;
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
       * An error
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
       * An error
       */
      export interface Error {
        /**
         * Error message
         */
        message: string;

        /**
         * Error parameters
         */
        params: { [key: string]: unknown };

        /**
         * Error type
         */
        type: string;
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
       * An error
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
       * An error
       */
      export interface Error {
        /**
         * Error message
         */
        message: string;

        /**
         * Error parameters
         */
        params: { [key: string]: unknown };

        /**
         * Error type
         */
        type: string;
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
       * An error
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
       * An error
       */
      export interface Error {
        /**
         * Error message
         */
        message: string;

        /**
         * Error parameters
         */
        params: { [key: string]: unknown };

        /**
         * Error type
         */
        type: string;
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
       * An error
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
       * An error
       */
      export interface Error {
        /**
         * Error message
         */
        message: string;

        /**
         * Error parameters
         */
        params: { [key: string]: unknown };

        /**
         * Error type
         */
        type: string;
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
       * An error
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
       * An error
       */
      export interface Error {
        /**
         * Error message
         */
        message: string;

        /**
         * Error parameters
         */
        params: { [key: string]: unknown };

        /**
         * Error type
         */
        type: string;
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
       * An error
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
       * An error
       */
      export interface Error {
        /**
         * Error message
         */
        message: string;

        /**
         * Error parameters
         */
        params: { [key: string]: unknown };

        /**
         * Error type
         */
        type: string;
      }
    }
  }
}

/**
 * The payload of an EIP-1559 transaction
 */
export interface ExecutionEVMTransactionEIP1559Payload {
  /**
   * A hex string starting with 0x
   */
  data: HexString;

  /**
   * An EVM address
   */
  from: AddressEVM;

  /**
   * A hex string starting with 0x
   */
  gasLimit: HexString;

  /**
   * A hex string starting with 0x
   */
  maxFeePerGas: HexString;

  /**
   * A hex string starting with 0x
   */
  maxPriorityFeePerGas: HexString;

  /**
   * A hex string starting with 0x
   */
  nonce: HexString;

  /**
   * An EVM address
   */
  to: AddressEVM;

  /**
   * A hex string starting with 0x
   */
  value: HexString;

  /**
   * A hex string starting with 0x
   */
  chainId?: HexString;
}

/**
 * The payload of an EIP-1559 transaction
 */
export interface ExecutionEVMTransactionPayload {
  /**
   * A hex string starting with 0x
   */
  data: HexString;

  /**
   * An EVM address
   */
  from: AddressEVM;

  /**
   * A hex string starting with 0x
   */
  gasLimit: HexString;

  /**
   * A hex string starting with 0x
   */
  maxFeePerGas: HexString;

  /**
   * A hex string starting with 0x
   */
  maxPriorityFeePerGas: HexString;

  /**
   * A hex string starting with 0x
   */
  nonce: HexString;

  /**
   * An EVM address
   */
  to: AddressEVM;

  /**
   * A hex string starting with 0x
   */
  value: HexString;

  /**
   * A hex string starting with 0x
   */
  chainId?: HexString;
}

/**
 * The state of an EVM transaction
 */
export type ExecutionEVMTransactionState =
  | 'not_started'
  | 'signature_required'
  | 'signed'
  | 'broadcasted'
  | 'confirmed'
  | 'error';

/**
 * An execution ID, represented as a TypeID with `execution` prefix
 */
export type ExecutionID = string;

/**
 * The state of an execution
 */
export type ExecutionState = 'not_started' | 'started' | 'success' | 'aborted' | 'error';

/**
 * An execution step ID, represented as a TypeID with `execution_step` prefix
 */
export type ExecutionStepID = string;

/**
 * A hex string starting with 0x
 */
export type HexString = string;

/**
 * A lp pool incentive market
 */
export interface IncentivizeMarket {
  /**
   * A list of arbitrary precision decimals
   */
  amounts: Array<Decimal>;

  /**
   * Response for multiple assets
   */
  assets: Array<Asset>;

  /**
   * Information about a specific block number and its timestamp
   */
  blockstamp: Blockstamp;

  /**
   * ISO8601 Timestamp
   */
  closed_at: Timestamp;

  /**
   * A liquidity pool
   */
  pool: LPPool;

  /**
   * An asset symbol
   */
  quote_asset_symbol: string | null;

  /**
   * The round number
   */
  round: number;

  /**
   * An arbitrary precision decimal represented as a string
   */
  value: string | null;

  /**
   * On-chain venue
   */
  venue: Venue;
}

/**
 * APY Data for lend/borrow markets
 */
export interface LendBorrowAPYs {
  /**
   * APY Data
   */
  base: APY;

  /**
   * Array of APY
   */
  rewards: Array<APY>;

  /**
   * An arbitrary precision decimal represented as a string
   */
  total: Decimal;
}

/**
 * A lend/borrow market ID, represented as a TypeID with `lend_borrow_market`
 * prefix
 */
export type LendBorrowMarketID = string;

/**
 * A lend market
 */
export interface LendMarket {
  /**
   * A lend/borrow market ID, represented as a TypeID with `lend_borrow_market`
   * prefix
   */
  id: LendBorrowMarketID;

  /**
   * APY Data for lend/borrow markets
   */
  apys: LendBorrowAPYs;

  /**
   * On-chain asset (aka token)
   */
  asset: Asset;

  /**
   * Information about a specific block number and its timestamp
   */
  blockstamp: Blockstamp;

  /**
   * An arbitrary precision decimal represented as a string
   */
  liquidity: Decimal;

  /**
   * An asset symbol
   */
  quote_asset_symbol: string | null;

  /**
   * An arbitrary precision decimal represented as a string
   */
  total_supply: Decimal;

  /**
   * On-chain venue
   */
  venue: Venue;
}

/**
 * A lend position
 */
export interface LendPosition {
  /**
   * An EVM address
   */
  account: Account;

  /**
   * Information about a specific block number and its timestamp
   */
  blockstamp: Blockstamp;

  collateral_enabled: boolean;

  /**
   * A lend market
   */
  market: LendMarket;

  /**
   * An asset symbol
   */
  quote_asset_symbol: string | null;

  /**
   * An arbitrary precision decimal represented as a string
   */
  supplied_amount: Decimal;

  /**
   * An arbitrary precision decimal represented as a string
   */
  value: string | null;
}

/**
 * A lock market
 */
export interface LockMarket {
  /**
   * On-chain asset (aka token)
   */
  asset: Asset;

  /**
   * Data about a blockchain
   */
  blockchain: Blockchain;

  /**
   * On-chain venue
   */
  venue: Venue;
}

/**
 * A lock position
 */
export interface LockPosition {
  /**
   * An EVM address
   */
  account: Account;

  /**
   * Information about a specific block number and its timestamp
   */
  blockstamp: Blockstamp;

  /**
   * An arbitrary precision decimal represented as a string
   */
  locked_amount: Decimal;

  /**
   * A NFT
   */
  locked_asset: NFT;

  /**
   * A lock market
   */
  market: LockMarket;

  /**
   * ISO8601 Timestamp
   */
  unlocked_at: Timestamp;

  used: boolean;

  /**
   * An arbitrary precision decimal represented as a string
   */
  voting_power: Decimal;
}

/**
 * A liquidity pool
 */
export interface LPPool {
  /**
   * A LP pool ID, represented as a TypeID with `lp_pool` prefix
   */
  id: string;

  /**
   * Response for multiple assets
   */
  assets: Array<Asset>;

  /**
   * Pool attributes that are specific to particular venue types
   */
  attributes: LPPoolUniswapV3Attributes | LPPoolSolidlyAttributes;

  /**
   * Information about a specific block number and its timestamp
   */
  blockstamp: Blockstamp;

  /**
   * An EVM address
   */
  pool_address: Account;

  /**
   * An arbitrary precision decimal represented as a string
   */
  pool_fee: Decimal;

  /**
   * Type of a liquidity pool
   */
  pool_type: 'pair' | 'multi' | 'weighted' | 'range';

  /**
   * An asset symbol
   */
  quote_asset_symbol: string | null;

  /**
   * A list of arbitrary precision decimals
   */
  reserve_amounts: Array<Decimal>;

  /**
   * A list of arbitrary precision decimals
   */
  reserve_ratios: Array<Decimal> | null;

  /**
   * An arbitrary precision decimal represented as a string
   */
  total_liquidity: string | null;

  /**
   * On-chain venue
   */
  venue: Venue;
}

/**
 * Attributes for Solidly venue type pools
 */
export interface LPPoolSolidlyAttributes {
  /**
   * True if pool is stable, false if volatile
   */
  stable: boolean;
}

/**
 * Attributes for Uniswap V3 venue type pools
 */
export interface LPPoolUniswapV3Attributes {
  /**
   * Pool fee
   */
  fee: string;
}

/**
 * A position in a liquidity pool
 */
export interface LPPosition {
  /**
   * An EVM address
   */
  account: Account;

  /**
   * A list of arbitrary precision decimals
   */
  amounts: Array<Decimal>;

  /**
   * Attributes for Uniswap V3 venue type positions
   */
  attributes: LPPositionAttributes;

  /**
   * Information about a specific block number and its timestamp
   */
  blockstamp: Blockstamp;

  /**
   * An arbitrary precision decimal represented as a string
   */
  lp_amount: Decimal;

  /**
   * An LP asset, either an Asset or a NFT
   */
  lp_asset: Asset | NFT;

  /**
   * An arbitrary precision decimal represented as a string
   */
  ownership: string | null;

  /**
   * A liquidity pool
   */
  pool: LPPool;

  /**
   * An asset symbol
   */
  quote_asset_symbol: string | null;

  /**
   * An arbitrary precision decimal represented as a string
   */
  value: string | null;
}

/**
 * Attributes for Uniswap V3 venue type positions
 */
export interface LPPositionAttributes {
  /**
   * Whether the position is in range
   */
  in_range: boolean;

  /**
   * An arbitrary precision decimal represented as a string
   */
  lower: Decimal;

  /**
   * An arbitrary precision decimal represented as a string
   */
  price: Decimal;

  /**
   * Lower tick
   */
  tick_lower: number;

  /**
   * Upper tick
   */
  tick_upper: number;

  /**
   * An arbitrary precision decimal represented as a string
   */
  upper: Decimal;
}

/**
 * Attributes for Uniswap V3 venue type positions
 */
export interface LPPositionUniswapV3Attributes {
  /**
   * Whether the position is in range
   */
  in_range: boolean;

  /**
   * An arbitrary precision decimal represented as a string
   */
  lower: Decimal;

  /**
   * An arbitrary precision decimal represented as a string
   */
  price: Decimal;

  /**
   * Lower tick
   */
  tick_lower: number;

  /**
   * Upper tick
   */
  tick_upper: number;

  /**
   * An arbitrary precision decimal represented as a string
   */
  upper: Decimal;
}

/**
 * An LP quote
 */
export interface LPQuote {
  /**
   * An EVM address
   */
  account: Account;

  /**
   * A list of arbitrary precision decimals
   */
  amounts: Array<Decimal>;

  /**
   * A list of arbitrary precision decimals
   */
  amounts_delta: Array<Decimal>;

  /**
   * Information about a specific block number and its timestamp
   */
  blockstamp: Blockstamp;

  /**
   * An arbitrary precision decimal represented as a string
   */
  ownership: string | null;

  /**
   * A liquidity pool
   */
  pool: LPPool;

  /**
   * An asset symbol
   */
  quote_asset_symbol: string | null;

  /**
   * An arbitrary precision decimal represented as a string
   */
  value: string | null;
}

/**
 * Uniswap position specifier
 */
export interface LPUniswapV3PositionSpecifier {
  /**
   * A NFT
   */
  position_nft: NFT;
}

/**
 * A Uniswap V3 range. Lower and upper bounds should satisfy 0 <= `lower` <
 * `upper`. The value -1 can be used in `upper` for infinity
 */
export interface LPUniswapV3Range {
  /**
   * An arbitrary precision decimal represented as a string
   */
  lower: Decimal;

  /**
   * An arbitrary precision decimal represented as a string
   */
  upper: Decimal;
}

/**
 * Estimated cost of an operation
 */
export interface NetworkFeeEstimate {
  /**
   * An arbitrary precision decimal represented as a string
   */
  amount: Decimal;

  /**
   * On-chain asset (aka token)
   */
  asset: Asset;

  /**
   * An arbitrary precision decimal represented as a string
   */
  cost: string | null;

  /**
   * An asset symbol
   */
  quote_asset_symbol: string | null;
}

/**
 * Blockchain's network
 */
export type NetworkName = string;

/**
 * A NFT
 */
export interface NFT {
  /**
   * The NFT id
   */
  id: number;

  /**
   * A NFT Collection
   */
  collection: NFTCollection;
}

/**
 * A NFT Collection
 */
export interface NFTCollection {
  /**
   * The NFT Collection's address
   */
  address: string;

  /**
   * Data about a blockchain
   */
  blockchain?: NFTCollection.Blockchain;

  /**
   * The NFT Collection's name
   */
  name?: string;
}

export namespace NFTCollection {
  /**
   * Data about a blockchain
   */
  export interface Blockchain {
    /**
     * A blockchain ID, represented as a TypeID with `blockchain` prefix
     */
    id: VektorAPI.BlockchainID;

    /**
     * Data about an EVM blockchain
     */
    chain_data: VektorAPI.EVMChainData;

    /**
     * Blockchain ecosystem
     */
    chain_type: VektorAPI.ChainType;

    /**
     * The blockchain's explorer URL
     */
    explorer_url: string;

    /**
     * BlockchainName
     */
    name: VektorAPI.BlockchainName;

    /**
     * Blockchain's network
     */
    network: VektorAPI.NetworkName;

    /**
     * A blockchain symbol
     */
    symbol: VektorAPI.BlockchainSymbol;
  }
}

/**
 * A range of timestamps
 */
export interface OffChainHistoricalRange {
  /**
   * ISO8601 Timestamp
   */
  from: Timestamp;

  /**
   * ISO8601 Timestamp
   */
  to: Timestamp;
}

/**
 * A range of blockstamps
 */
export interface OnChainHistoricalRange {
  /**
   * Information about a specific block number and its timestamp
   */
  from: Blockstamp;

  /**
   * Information about a specific block number and its timestamp
   */
  to: Blockstamp;
}

/**
 * A price
 */
export interface Price {
  /**
   * An asset symbol
   */
  asset_symbol: AssetSymbol;

  /**
   * An arbitrary precision decimal represented as a string
   */
  change_1h: string | null;

  /**
   * An arbitrary precision decimal represented as a string
   */
  change_1y: string | null;

  /**
   * An arbitrary precision decimal represented as a string
   */
  change_24h: string | null;

  /**
   * An arbitrary precision decimal represented as a string
   */
  change_30d: string | null;

  /**
   * An arbitrary precision decimal represented as a string
   */
  change_7d: string | null;

  /**
   * An arbitrary precision decimal represented as a string
   */
  market_cap: string | null;

  /**
   * An arbitrary precision decimal represented as a string
   */
  price: Decimal;

  /**
   * An asset symbol
   */
  quote_asset_symbol: AssetSymbol;
}

/**
 * Quote info for 0x
 */
export interface QuoteInfo0x {
  /**
   * An arbitrary precision decimal represented as a string
   */
  estimated_gas_used: string | null;

  /**
   * A route in a 0x quote
   */
  route: QuoteInfo0xRoute;
}

/**
 * A fill in a 0x quote
 */
export interface QuoteInfo0xFill {
  /**
   * An EVM address
   */
  from: AddressEVM;

  proportion_bps: number;

  source: string;

  /**
   * An EVM address
   */
  to: AddressEVM;
}

/**
 * A route in a 0x quote
 */
export interface QuoteInfo0xRoute {
  /**
   * A list of fills in a 0x quote
   */
  fills: Array<QuoteInfo0xFill>;

  /**
   * A list of tokens in a 0x quote
   */
  tokens: Array<QuoteInfo0xToken>;
}

/**
 * A token in a 0x quote
 */
export interface QuoteInfo0xToken {
  /**
   * An EVM address
   */
  address: AddressEVM;

  symbol: string;
}

/**
 * Quote info for Curve
 */
export interface QuoteInfoCurve {
  i_index: number;

  j_index: number;

  /**
   * A LP pool ID, represented as a TypeID with `lp_pool` prefix
   */
  pool_id: string;

  swap_type: string;
}

/**
 * Quote info for Uniswap V2
 */
export interface QuoteInfoUniswapV2 {
  /**
   * A list of LP pool IDs
   */
  pool_ids: Array<string>;
}

/**
 * Quote info for Uniswap V3
 */
export interface QuoteInfoUniswapV3 {
  /**
   * A list of LP pool IDs
   */
  pool_ids: Array<string>;
}

/**
 * Registry data for a lend borrow market
 */
export interface RegistryLendBorrowMarket {
  /**
   * A lend/borrow market ID, represented as a TypeID with `lend_borrow_market`
   * prefix
   */
  id: LendBorrowMarketID;

  /**
   * On-chain asset (aka token)
   */
  asset: Asset;

  /**
   * Data about a blockchain
   */
  blockchain: Blockchain;

  /**
   * On-chain venue
   */
  venue: Venue;
}

/**
 * Registry data for an LP pool
 */
export interface RegistryLPPool {
  /**
   * A LP pool ID, represented as a TypeID with `lp_pool` prefix
   */
  id: string;

  /**
   * Response for multiple assets
   */
  assets: Array<Asset>;

  /**
   * Data about a blockchain
   */
  blockchain: Blockchain;

  /**
   * On-chain venue
   */
  venue: Venue;
}

/**
 * A sell quote
 */
export interface SellQuote {
  /**
   * Data about a blockchain
   */
  blockchain: Blockchain;

  /**
   * Estimated cost of an operation
   */
  fee_estimate: SellQuote.FeeEstimate | null;

  /**
   * An asset symbol
   */
  quote_asset_symbol: string | null;

  /**
   * Quote info for sell quotes
   */
  quote_info: QuoteInfoCurve | QuoteInfoUniswapV2 | QuoteInfoUniswapV3 | QuoteInfo0x;

  /**
   * An arbitrary precision decimal represented as a string
   */
  quote_value: string | null;

  /**
   * An arbitrary precision decimal represented as a string
   */
  receive_amount: Decimal;

  /**
   * On-chain asset (aka token)
   */
  receive_asset: Asset;

  /**
   * An arbitrary precision decimal represented as a string
   */
  spend_amount: Decimal;

  /**
   * On-chain asset (aka token)
   */
  spend_asset: Asset;

  /**
   * On-chain venue
   */
  venue: Venue;
}

export namespace SellQuote {
  /**
   * Estimated cost of an operation
   */
  export interface FeeEstimate {
    /**
     * An arbitrary precision decimal represented as a string
     */
    amount: VektorAPI.Decimal;

    /**
     * On-chain asset (aka token)
     */
    asset: VektorAPI.Asset;

    /**
     * An arbitrary precision decimal represented as a string
     */
    cost: string | null;

    /**
     * An asset symbol
     */
    quote_asset_symbol: string | null;
  }
}

/**
 * ISO8601 Timestamp
 */
export type Timestamp = string;

/**
 * Either a ISO8601 timestamp or a block number
 */
export type TimestampOrBlockNumber = Timestamp | BlockNumber;

/**
 * A transaction hash
 */
export type TransactionHash = string;

export interface VektorError {
  timestamp: string;

  context?: VektorError.Context;

  message?: string;

  request_id?: string;

  resource?: string;

  type?:
    | 'INTERNAL_SERVER_ERROR'
    | 'VALIDATION_ERROR'
    | 'NOT_FOUND'
    | 'UNAUTHORIZED'
    | 'FORBIDDEN'
    | 'BAD_REQUEST'
    | 'CONFLICT'
    | 'TOO_MANY_REQUESTS'
    | 'SERVICE_UNAVAILABLE';
}

export namespace VektorError {
  export interface Context {
    parameters?: { [key: string]: string };
  }
}

/**
 * On-chain venue
 */
export interface Venue {
  /**
   * A venue ID, represented as a TypeID with `venue` prefix
   */
  id: VenueID;

  /**
   * A list of blockchain IDs
   */
  blockchain_ids: Array<BlockchainID>;

  /**
   * Venue name
   */
  name: string;

  /**
   * A venue symbol
   */
  symbol: VenueSymbol;

  /**
   * Venue type
   */
  type: string;

  /**
   * Venue url
   */
  url: string;
}

/**
 * A venue ID, represented as a TypeID with `venue` prefix
 */
export type VenueID = string;

/**
 * A venue ID, represented as a TypeID with `venue` prefix
 */
export type VenueIDOrVenueSymbol = string;

/**
 * A venue symbol
 */
export type VenueSymbol = string;

/**
 * A LP incentive vote market
 */
export interface VoteMarket {
  /**
   * Information about a specific block number and its timestamp
   */
  blockstamp: Blockstamp;

  /**
   * A lp pool incentive market
   */
  market: IncentivizeMarket;

  /**
   * An asset symbol
   */
  quote_asset_symbol: string | null;

  /**
   * A list of arbitrary precision decimals
   */
  trading_fees_amounts: Array<Decimal>;

  /**
   * Response for multiple assets
   */
  trading_fees_assets: Array<Asset>;

  /**
   * An arbitrary precision decimal represented as a string
   */
  value: Decimal;

  /**
   * An arbitrary precision decimal represented as a string
   */
  value_per_vote: Decimal;

  /**
   * An arbitrary precision decimal represented as a string
   */
  votes: Decimal;
}

/**
 * A LP vote reward
 */
export interface VoteReward {
  /**
   * An EVM address
   */
  account: Account;

  /**
   * Information about a specific block number and its timestamp
   */
  blockstamp: Blockstamp;

  /**
   * A list of arbitrary precision decimals
   */
  fee_amounts: Array<Decimal>;

  /**
   * Response for multiple assets
   */
  fee_assets: Array<Asset>;

  /**
   * A list of arbitrary precision decimals
   */
  incentive_amounts: Array<Decimal>;

  /**
   * Response for multiple assets
   */
  incentive_assets: Array<Asset>;

  /**
   * A list of lock positions
   */
  lock_positions: Array<LockPosition>;

  /**
   * A liquidity pool
   */
  pool: LPPool;

  /**
   * An asset symbol
   */
  quote_asset_symbol: string | null;

  /**
   * An arbitrary precision decimal represented as a string
   */
  value: Decimal;
}

Vektor.Registry = Registry;
Vektor.Balances = Balances;
Vektor.Prices = Prices;
Vektor.Lend = Lend;
Vektor.Borrow = Borrow;
Vektor.LP = LP;
Vektor.Buy = Buy;
Vektor.Sell = Sell;
Vektor.Move = Move;
Vektor.Wrap = Wrap;
Vektor.Bridge = Bridge;
Vektor.Lock = Lock;
Vektor.Vote = Vote;
Vektor.Incentivize = Incentivize;
Vektor.Executions = Executions;

export declare namespace Vektor {
  export {
    type Account as Account,
    type AddressEVM as AddressEVM,
    type APY as APY,
    type Asset as Asset,
    type AssetID as AssetID,
    type AssetIDOrAddressEVMOrAssetSymbol as AssetIDOrAddressEVMOrAssetSymbol,
    type AssetSymbol as AssetSymbol,
    type Balance as Balance,
    type BlockNumber as BlockNumber,
    type Blockchain as Blockchain,
    type BlockchainID as BlockchainID,
    type BlockchainIDOrBlockchainSymbol as BlockchainIDOrBlockchainSymbol,
    type BlockchainName as BlockchainName,
    type BlockchainSymbol as BlockchainSymbol,
    type Blockstamp as Blockstamp,
    type BorrowAccount as BorrowAccount,
    type BorrowMarket as BorrowMarket,
    type BorrowPosition as BorrowPosition,
    type BridgeQuote as BridgeQuote,
    type BuyQuote as BuyQuote,
    type ChainType as ChainType,
    type Decimal as Decimal,
    type EVMChainData as EVMChainData,
    type Execution as Execution,
    type ExecutionEVMTransactionEIP1559Payload as ExecutionEVMTransactionEIP1559Payload,
    type ExecutionEVMTransactionPayload as ExecutionEVMTransactionPayload,
    type ExecutionEVMTransactionState as ExecutionEVMTransactionState,
    type ExecutionID as ExecutionID,
    type ExecutionState as ExecutionState,
    type ExecutionStepID as ExecutionStepID,
    type HexString as HexString,
    type IncentivizeMarket as IncentivizeMarket,
    type LendBorrowAPYs as LendBorrowAPYs,
    type LendBorrowMarketID as LendBorrowMarketID,
    type LendMarket as LendMarket,
    type LendPosition as LendPosition,
    type LockMarket as LockMarket,
    type LockPosition as LockPosition,
    type LPPool as LPPool,
    type LPPoolSolidlyAttributes as LPPoolSolidlyAttributes,
    type LPPoolUniswapV3Attributes as LPPoolUniswapV3Attributes,
    type LPPosition as LPPosition,
    type LPPositionAttributes as LPPositionAttributes,
    type LPPositionUniswapV3Attributes as LPPositionUniswapV3Attributes,
    type LPQuote as LPQuote,
    type LPUniswapV3PositionSpecifier as LPUniswapV3PositionSpecifier,
    type LPUniswapV3Range as LPUniswapV3Range,
    type NetworkFeeEstimate as NetworkFeeEstimate,
    type NetworkName as NetworkName,
    type NFT as NFT,
    type NFTCollection as NFTCollection,
    type OffChainHistoricalRange as OffChainHistoricalRange,
    type OnChainHistoricalRange as OnChainHistoricalRange,
    type Price as Price,
    type QuoteInfo0x as QuoteInfo0x,
    type QuoteInfo0xFill as QuoteInfo0xFill,
    type QuoteInfo0xRoute as QuoteInfo0xRoute,
    type QuoteInfo0xToken as QuoteInfo0xToken,
    type QuoteInfoCurve as QuoteInfoCurve,
    type QuoteInfoUniswapV2 as QuoteInfoUniswapV2,
    type QuoteInfoUniswapV3 as QuoteInfoUniswapV3,
    type RegistryLendBorrowMarket as RegistryLendBorrowMarket,
    type RegistryLPPool as RegistryLPPool,
    type SellQuote as SellQuote,
    type Timestamp as Timestamp,
    type TimestampOrBlockNumber as TimestampOrBlockNumber,
    type TransactionHash as TransactionHash,
    type VektorError as VektorError,
    type Venue as Venue,
    type VenueID as VenueID,
    type VenueIDOrVenueSymbol as VenueIDOrVenueSymbol,
    type VenueSymbol as VenueSymbol,
    type VoteMarket as VoteMarket,
    type VoteReward as VoteReward,
  };

  export { Registry as Registry };

  export {
    Balances as Balances,
    type BalanceListResponse as BalanceListResponse,
    type BalanceListHistoricalResponse as BalanceListHistoricalResponse,
    type BalanceListParams as BalanceListParams,
    type BalanceListHistoricalParams as BalanceListHistoricalParams,
  };

  export {
    Prices as Prices,
    type PriceListResponse as PriceListResponse,
    type PriceListHistoricalResponse as PriceListHistoricalResponse,
    type PriceListParams as PriceListParams,
    type PriceListHistoricalParams as PriceListHistoricalParams,
  };

  export { Lend as Lend };

  export { Borrow as Borrow };

  export { LP as LP };

  export { Buy as Buy };

  export { Sell as Sell };

  export { Move as Move, type MoveCreateParams as MoveCreateParams };

  export { Wrap as Wrap };

  export { Bridge as Bridge };

  export { Lock as Lock };

  export { Vote as Vote };

  export {
    Incentivize as Incentivize,
    type IncentivizeListResponse as IncentivizeListResponse,
    type IncentivizeListParams as IncentivizeListParams,
  };

  export { Executions as Executions, type ExecutionListResponse as ExecutionListResponse };
}
