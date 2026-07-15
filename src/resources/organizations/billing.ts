// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Billing extends APIResource {
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

export declare namespace Billing {
  export {
    type BillingHistoryEntry as BillingHistoryEntry,
    type BillingHistoryEntryList as BillingHistoryEntryList,
    type BillingHistoryEntryType as BillingHistoryEntryType,
    type DailyCostPoint as DailyCostPoint,
    type OrganizationDailyCost as OrganizationDailyCost,
    type BillingCostParams as BillingCostParams,
    type BillingHistoryParams as BillingHistoryParams,
    type BillingTopUpParams as BillingTopUpParams,
  };
}
