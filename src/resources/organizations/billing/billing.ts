// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as RechargePolicyAPI from './recharge-policy';
import {
  AutomaticPolicyArgs,
  OrganizationRechargePolicy,
  RechargePolicy,
  RechargePolicyMode,
  RechargePolicyUpdateParams,
} from './recharge-policy';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Billing extends APIResource {
  rechargePolicy: RechargePolicyAPI.RechargePolicy = new RechargePolicyAPI.RechargePolicy(this._client);

  /**
   * Get the organization's billing summary: effective balance, monthly and daily
   * run-rate cost, runway, and the projected next-recharge date. Costs are run-rate
   * projections.
   *
   * @example
   * ```ts
   * const organizationBillingSummary =
   *   await client.organizations.billing.summary(
   *     'organization_id',
   *   );
   * ```
   */
  summary(organizationID: string, options?: RequestOptions): APIPromise<Shared.OrganizationBillingSummary> {
    return this._client.get(path`/v1/organizations/${organizationID}/billing/summary`, options);
  }

  /**
   * Get the organization's total usage cost per UTC day over a date range (max 90
   * days), summing open and closed resources. One entry per day, oldest first.
   * Defaults to the last 30 days.
   *
   * @example
   * ```ts
   * const organizationDailyCost =
   *   await client.organizations.billing.cost(
   *     'organization_id',
   *   );
   * ```
   */
  cost(
    organizationID: string,
    query: BillingCostParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OrganizationDailyCost> {
    return this._client.get(path`/v1/organizations/${organizationID}/billing/cost`, { query, ...options });
  }

  /**
   * List the organization's billing history: prepaid credits, top-ups, and manual
   * adjustments, newest first. Paginated with an opaque cursor.
   *
   * @example
   * ```ts
   * const billingHistoryEntryList =
   *   await client.organizations.billing.history(
   *     'organization_id',
   *   );
   * ```
   */
  history(
    organizationID: string,
    query: BillingHistoryParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BillingHistoryEntryList> {
    return this._client.get(path`/v1/organizations/${organizationID}/billing/history`, { query, ...options });
  }

  /**
   * Charge the card on file and credit the prepaid balance. A unique Idempotency-Key
   * header is required; reuse it across retries so a timed-out top-up is not charged
   * twice.
   *
   * @example
   * ```ts
   * const organizationBillingSummary =
   *   await client.organizations.billing.topUp(
   *     'organization_id',
   *     {
   *       amount: '50.00',
   *       'Idempotency-Key': 'Idempotency-Key',
   *     },
   *   );
   * ```
   */
  topUp(
    organizationID: string,
    params: BillingTopUpParams,
    options?: RequestOptions,
  ): APIPromise<Shared.OrganizationBillingSummary> {
    const { 'Idempotency-Key': idempotencyKey, ...body } = params;
    return this._client.post(path`/v1/organizations/${organizationID}/billing/topup`, {
      body,
      ...options,
      headers: buildHeaders([{ 'Idempotency-Key': idempotencyKey }, options?.headers]),
    });
  }

  /**
   * Charge the card on file up to the recharge target now instead of waiting for the
   * scheduled retry. Automatic-policy prepaid organizations only. Idempotency-Key
   * header required.
   *
   * @example
   * ```ts
   * const organizationBillingSummary =
   *   await client.organizations.billing.recharge(
   *     'organization_id',
   *     { 'Idempotency-Key': 'Idempotency-Key' },
   *   );
   * ```
   */
  recharge(
    organizationID: string,
    params: BillingRechargeParams,
    options?: RequestOptions,
  ): APIPromise<Shared.OrganizationBillingSummary> {
    const { 'Idempotency-Key': idempotencyKey } = params;
    return this._client.post(path`/v1/organizations/${organizationID}/billing/recharge`, {
      ...options,
      headers: buildHeaders([{ 'Idempotency-Key': idempotencyKey }, options?.headers]),
    });
  }

  /**
   * Get the itemized monthly usage statement: consumption grouped by project,
   * resource type, and dimension, priced from recorded usage. Defaults to the
   * current month.
   *
   * @example
   * ```ts
   * const organizationUsageStatement =
   *   await client.organizations.billing.statements(
   *     'organization_id',
   *   );
   * ```
   */
  statements(
    organizationID: string,
    query: BillingStatementsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OrganizationUsageStatement> {
    return this._client.get(path`/v1/organizations/${organizationID}/billing/statements`, {
      query,
      ...options,
    });
  }
}

/**
 * A single billing history line item: a prepaid credit or a manual adjustment.
 */
export interface BillingHistoryEntry {
  /**
   * Unique identifier for the entry.
   */
  id: string;

  /**
   * Arbitrary-precision decimal serialized as a string (e.g. "58.40").
   */
  amount: string;

  /**
   * When the entry was recorded.
   */
  created_at: string;

  /**
   * ISO 4217 currency code.
   */
  currency: string;

  /**
   * Kind of entry.
   */
  type: BillingHistoryEntryType;

  /**
   * Human-readable note describing the entry, when available.
   */
  description?: string | null;

  /**
   * Link to the hosted receipt for the payment behind this entry, when one is
   * available. Present for prepaid credits funded by a card charge; absent for
   * manual adjustments and while a payment's receipt is still being finalized.
   */
  receipt_url?: string | null;
}

export interface BillingHistoryEntryList {
  items: Array<BillingHistoryEntry>;

  /**
   * Pagination response details.
   */
  pagination: Shared.Pagination;
}

/**
 * Kind of entry.
 */
export type BillingHistoryEntryType = 'grant' | 'adjustment';

/**
 * Total usage cost for a single UTC day.
 */
export interface DailyCostPoint {
  /**
   * Arbitrary-precision decimal serialized as a string (e.g. "58.40").
   */
  cost: string;

  /**
   * UTC calendar day (YYYY-MM-DD).
   */
  date: string;
}

/**
 * Daily usage cost over a date range: one entry per UTC day (zero on idle days),
 * summing open and closed resources. Suitable for a daily cost bar chart.
 */
export interface OrganizationDailyCost {
  /**
   * ISO 4217 currency code.
   */
  currency: string;

  /**
   * One entry per UTC day in the range, oldest first.
   */
  days: Array<DailyCostPoint>;

  /**
   * Inclusive start of the range, as a UTC calendar day (YYYY-MM-DD).
   */
  from: string;

  /**
   * Inclusive end of the range, as a UTC calendar day (YYYY-MM-DD).
   */
  to: string;
}

/**
 * Itemized usage statement for a billing month: consumption grouped by project,
 * resource type, and dimension. Costs are recorded at consumption time, not
 * re-priced.
 */
export interface OrganizationUsageStatement {
  /**
   * ISO 4217 currency code.
   */
  currency: string;

  /**
   * Billing month the statement covers, as YYYY-MM (UTC).
   */
  month: string;

  /**
   * One entry per project with consumption in the month, ordered by name.
   */
  projects: Array<StatementProject>;

  /**
   * Arbitrary-precision decimal serialized as a string (e.g. "58.40").
   */
  total: string;
}

/**
 * A top-level metered dimension. Heads nest components as children (cost is the
 * subtotal, unit_price null); standalone dimensions carry a unit price and an
 * empty children array.
 */
export interface StatementLineItem {
  /**
   * Component dimensions nested under this one (e.g. vCPU and memory under an
   * instance type). Empty for a leaf.
   */
  children: Array<StatementLineItemLeaf>;

  /**
   * Arbitrary-precision decimal serialized as a string (e.g. "58.40").
   */
  cost: string;

  /**
   * Metered dimension identifier (e.g. "compute_n1_standard_8", "storage_abs_gb").
   */
  dimension: string;

  /**
   * Human-readable label for the dimension.
   */
  display_name: string;

  /**
   * Arbitrary-precision decimal serialized as a string (e.g. "58.40").
   */
  quantity_hours: string;

  /**
   * Arbitrary-precision decimal serialized as a string (e.g. "58.40").
   */
  unit_price?: string | null;
}

/**
 * A priced dimension line: a component nested under a head, or one rate segment of
 * a dimension whose price changed mid-period.
 */
export interface StatementLineItemLeaf {
  /**
   * Arbitrary-precision decimal serialized as a string (e.g. "58.40").
   */
  cost: string;

  /**
   * Metered dimension identifier (e.g. "compute_vcpu", "compute_memory_gb").
   */
  dimension: string;

  /**
   * Human-readable label for the dimension.
   */
  display_name: string;

  /**
   * Arbitrary-precision decimal serialized as a string (e.g. "58.40").
   */
  quantity_hours: string;

  /**
   * Arbitrary-precision decimal serialized as a string (e.g. "58.40").
   */
  unit_price: string;
}

/**
 * A single project's consumption within a usage statement.
 */
export interface StatementProject {
  /**
   * Project identifier.
   */
  project_id: string;

  /**
   * Human-readable project name.
   */
  project_name: string;

  /**
   * Consumption grouped by resource type.
   */
  resource_types: Array<StatementResourceType>;

  /**
   * Arbitrary-precision decimal serialized as a string (e.g. "58.40").
   */
  subtotal: string;
}

/**
 * Consumption for one resource type within a project (e.g. every VM, every
 * volume).
 */
export interface StatementResourceType {
  /**
   * Top-level metered dimensions; a dimension expanded into components carries them
   * in children.
   */
  items: Array<StatementLineItem>;

  /**
   * Resource type the line items belong to (e.g. "vm", "volume", "nks_node_pool").
   */
  resource_type: string;

  /**
   * Arbitrary-precision decimal serialized as a string (e.g. "58.40").
   */
  subtotal: string;
}

export interface BillingCostParams {
  /**
   * Inclusive start day, YYYY-MM-DD (UTC). Defaults to 30 days before to.
   */
  from?: string;

  /**
   * Inclusive end day, YYYY-MM-DD (UTC). Defaults to today.
   */
  to?: string;
}

export interface BillingHistoryParams {
  /**
   * Pagination cursor returned by a previous request
   */
  cursor?: string;

  /**
   * Maximum number of items to return
   */
  limit?: number;
}

export interface BillingTopUpParams {
  /**
   * Body param: Amount to charge and credit, in USD. Must be greater than 0, at most
   * two decimal places, and at most 10000.
   */
  amount: string;

  /**
   * Header param: Unique idempotency key scoping the charge; reuse the same value
   * across retries so a timed-out top-up is not charged twice
   */
  'Idempotency-Key': string;
}

export interface BillingRechargeParams {
  /**
   * Idempotency key scoping one charge attempt; reuse to retry it, but use a fresh
   * key for a new attempt (e.g. after updating a declined card)
   */
  'Idempotency-Key': string;
}

export interface BillingStatementsParams {
  /**
   * Billing month, YYYY-MM (UTC). Defaults to the current month.
   */
  month?: string;
}

Billing.RechargePolicy = RechargePolicy;

export declare namespace Billing {
  export {
    type BillingHistoryEntry as BillingHistoryEntry,
    type BillingHistoryEntryList as BillingHistoryEntryList,
    type BillingHistoryEntryType as BillingHistoryEntryType,
    type DailyCostPoint as DailyCostPoint,
    type OrganizationDailyCost as OrganizationDailyCost,
    type OrganizationUsageStatement as OrganizationUsageStatement,
    type StatementLineItem as StatementLineItem,
    type StatementLineItemLeaf as StatementLineItemLeaf,
    type StatementProject as StatementProject,
    type StatementResourceType as StatementResourceType,
    type BillingCostParams as BillingCostParams,
    type BillingHistoryParams as BillingHistoryParams,
    type BillingTopUpParams as BillingTopUpParams,
    type BillingRechargeParams as BillingRechargeParams,
    type BillingStatementsParams as BillingStatementsParams,
  };

  export {
    RechargePolicy as RechargePolicy,
    type AutomaticPolicyArgs as AutomaticPolicyArgs,
    type OrganizationRechargePolicy as OrganizationRechargePolicy,
    type RechargePolicyMode as RechargePolicyMode,
    type RechargePolicyUpdateParams as RechargePolicyUpdateParams,
  };
}
