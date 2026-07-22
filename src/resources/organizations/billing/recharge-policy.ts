// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class RechargePolicy extends APIResource {
  /**
   * Get the organization's recharge configuration: the top-up mode and the fixed and
   * proportional threshold components.
   *
   * @example
   * ```ts
   * const organizationRechargePolicy =
   *   await client.organizations.billing.rechargePolicy.get(
   *     'organization_id',
   *   );
   * ```
   */
  get(organizationID: string, options?: RequestOptions): APIPromise<OrganizationRechargePolicy> {
    return this._client.get(path`/v1/organizations/${organizationID}/billing/recharge_policy`, options);
  }

  /**
   * Update the organization's recharge mode: manual for self-serve top-ups, or
   * automatic to charge the card on file at the recharge threshold (fixed and
   * proportional required).
   *
   * @example
   * ```ts
   * const organizationRechargePolicy =
   *   await client.organizations.billing.rechargePolicy.update(
   *     'organization_id',
   *     { policy: 'automatic' },
   *   );
   * ```
   */
  update(
    organizationID: string,
    body: RechargePolicyUpdateParams,
    options?: RequestOptions,
  ): APIPromise<OrganizationRechargePolicy> {
    return this._client.patch(path`/v1/organizations/${organizationID}/billing/recharge_policy`, {
      body,
      ...options,
    });
  }
}

/**
 * PolicyArgs carries the threshold parameters. Required when policy is
 * "automatic"; must be omitted when policy is "manual".
 */
export interface AutomaticPolicyArgs {
  /**
   * Arbitrary-precision decimal serialized as a string (e.g. "58.40").
   */
  fixed: string;

  /**
   * Arbitrary-precision decimal serialized as a string (e.g. "58.40").
   */
  runway_days: string;
}

/**
 * An organization's current recharge policy. policy_args is null for a manual
 * policy.
 */
export interface OrganizationRechargePolicy {
  /**
   * Policy is the top-up mode.
   */
  policy?: RechargePolicyMode;

  /**
   * PolicyArgs carries the threshold parameters. Required when policy is
   * "automatic"; must be omitted when policy is "manual".
   */
  policy_args?: AutomaticPolicyArgs | null;
}

/**
 * Policy is the top-up mode.
 */
export type RechargePolicyMode = 'manual' | 'automatic';

export interface RechargePolicyUpdateParams {
  /**
   * Policy is the top-up mode.
   */
  policy: RechargePolicyMode;

  /**
   * PolicyArgs carries the threshold parameters. Required when policy is
   * "automatic"; must be omitted when policy is "manual".
   */
  policy_args?: AutomaticPolicyArgs;
}

export declare namespace RechargePolicy {
  export {
    type AutomaticPolicyArgs as AutomaticPolicyArgs,
    type OrganizationRechargePolicy as OrganizationRechargePolicy,
    type RechargePolicyMode as RechargePolicyMode,
    type RechargePolicyUpdateParams as RechargePolicyUpdateParams,
  };
}
