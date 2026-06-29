// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
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
  summary(organizationID: string, options?: RequestOptions): APIPromise<OrganizationBillingSummary> {
    return this._client.get(path`/v1/organizations/${organizationID}/billing/summary`, options);
  }
}

/**
 * Forward-looking billing summary for an organization. All costs are run-rate
 * projections from the organization's current active usage ("≈ $X/mo at current
 * usage").
 */
export interface OrganizationBillingSummary {
  /**
   * Arbitrary-precision decimal serialized as a string (e.g. "58.40").
   */
  daily_cost: string;

  /**
   * Arbitrary-precision decimal serialized as a string (e.g. "58.40").
   */
  effective_balance: string;

  /**
   * Arbitrary-precision decimal serialized as a string (e.g. "58.40").
   */
  monthly_cost: string;

  /**
   * Arbitrary-precision decimal serialized as a string (e.g. "58.40").
   */
  recharge_threshold_fraction: string;

  /**
   * Projected date the balance reaches the recharge threshold at the current
   * run-rate. Null when there is no active usage (never charges).
   */
  estimated_next_charge_at?: string | null;

  /**
   * Arbitrary-precision decimal serialized as a string (e.g. "58.40").
   */
  runway_months?: string | null;
}

export declare namespace Billing {
  export { type OrganizationBillingSummary as OrganizationBillingSummary };
}
