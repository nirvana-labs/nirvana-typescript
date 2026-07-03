// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
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
  summary(organizationID: string, options?: RequestOptions): APIPromise<Shared.OrganizationBillingSummary> {
    return this._client.get(path`/v1/organizations/${organizationID}/billing/summary`, options);
  }
}
