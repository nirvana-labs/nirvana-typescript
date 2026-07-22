// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as AddressAPI from './address';
import { Address, AddressCreateParams, AddressUpdateParams, OrganizationAddress } from './address';
import * as MembershipsAPI from './memberships';
import {
  MembershipGetParams,
  MembershipListParams,
  Memberships,
  OrganizationMembership,
  OrganizationMembershipList,
  OrganizationMembershipsCursor,
} from './memberships';
import * as BillingAPI from './billing/billing';
import {
  Billing,
  BillingCostParams,
  BillingHistoryEntry,
  BillingHistoryEntryList,
  BillingHistoryEntryType,
  BillingHistoryParams,
  BillingRechargeParams,
  BillingTopUpParams,
  DailyCostPoint,
  OrganizationDailyCost,
} from './billing/billing';
import { APIPromise } from '../../core/api-promise';
import { Cursor, type CursorParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Organizations extends APIResource {
  memberships: MembershipsAPI.Memberships = new MembershipsAPI.Memberships(this._client);
  address: AddressAPI.Address = new AddressAPI.Address(this._client);
  billing: BillingAPI.Billing = new BillingAPI.Billing(this._client);

  /**
   * Create a new organization
   *
   * @example
   * ```ts
   * const organization = await client.organizations.create({
   *   name: 'My Organization',
   * });
   * ```
   */
  create(body: OrganizationCreateParams, options?: RequestOptions): APIPromise<Organization> {
    return this._client.post('/v1/organizations', { body, ...options });
  }

  /**
   * Get details about an Organization
   *
   * @example
   * ```ts
   * const organization = await client.organizations.get(
   *   'organization_id',
   * );
   * ```
   */
  get(organizationID: string, options?: RequestOptions): APIPromise<Organization> {
    return this._client.get(path`/v1/organizations/${organizationID}`, options);
  }

  /**
   * Update an existing organization
   *
   * @example
   * ```ts
   * const organization = await client.organizations.update(
   *   'organization_id',
   * );
   * ```
   */
  update(
    organizationID: string,
    body: OrganizationUpdateParams,
    options?: RequestOptions,
  ): APIPromise<Organization> {
    return this._client.patch(path`/v1/organizations/${organizationID}`, { body, ...options });
  }

  /**
   * List organizations
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const organization of client.organizations.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: OrganizationListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<OrganizationsCursor, Organization> {
    return this._client.getAPIList('/v1/organizations', Cursor<Organization>, { query, ...options });
  }

  /**
   * Leave an Organization
   *
   * @example
   * ```ts
   * await client.organizations.leave('organization_id');
   * ```
   */
  leave(organizationID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/v1/organizations/${organizationID}/leave`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type OrganizationsCursor = Cursor<Organization>;

/**
 * Organization response.
 */
export interface Organization {
  /**
   * Organization ID.
   */
  id: string;

  /**
   * Billing email. Null when no custom billing email is set (reverts to the oldest
   * owner's email).
   */
  billing_email: string | null;

  /**
   * Organization billing lifecycle state.
   */
  billing_state: 'unfunded' | 'active' | 'requires_action' | 'suspended' | 'closed';

  /**
   * When the organization entered its current billing state.
   */
  billing_state_since: string;

  /**
   * How the organization is charged for resource usage.
   */
  charging_model: 'manual' | 'prepaid';

  /**
   * When the Organization was created.
   */
  created_at: string;

  /**
   * Domains associated with the organization.
   */
  domains: Array<OrganizationDomain>;

  /**
   * Organization name.
   */
  name: string;

  /**
   * Whether the organization is a personal Organization.
   */
  personal: boolean;

  /**
   * Services that the Organization has access to.
   */
  services: OrganizationServices;

  /**
   * Stripe customer ID.
   */
  stripe_customer_id: string | null;

  /**
   * Organization type.
   */
  type: OrganizationType;

  /**
   * When the Organization was updated.
   */
  updated_at: string;

  /**
   * Authentication provider organization ID.
   */
  auth_id?: string;
}

/**
 * Organization domain details.
 */
export interface OrganizationDomain {
  /**
   * Domain ID.
   */
  id: string;

  /**
   * Domain name.
   */
  domain: string;

  /**
   * Whether the domain has been verified.
   */
  verified: boolean;
}

export interface OrganizationList {
  items: Array<Organization>;

  /**
   * Pagination response details.
   */
  pagination: Shared.Pagination;
}

/**
 * Services that the Organization has access to.
 */
export interface OrganizationServices {
  /**
   * Whether cloud services are enabled for the organization.
   */
  cloud: boolean;

  /**
   * Whether just-in-time provisioning is enabled for the organization.
   */
  jit_provisioning: boolean;

  /**
   * Whether SCIM provisioning is enabled for the organization.
   */
  scim: boolean;

  /**
   * Whether SIEM integration is enabled for the organization.
   */
  siem: boolean;

  /**
   * Whether single sign-on is enabled for the organization.
   */
  sso: boolean;
}

/**
 * Organization type.
 */
export type OrganizationType = 'personal' | 'company';

export interface OrganizationCreateParams {
  /**
   * Organization name.
   */
  name: string;

  /**
   * Optional billing email. When omitted, the oldest owner's email is used.
   */
  billing_email?: string;
}

export interface OrganizationUpdateParams {
  /**
   * Billing email. Omit to leave unchanged, send null to clear (reverts to the
   * oldest owner's email), or send a value to set it.
   */
  billing_email?: string | null;

  /**
   * Organization name.
   */
  name?: string;
}

export interface OrganizationListParams extends CursorParams {}

Organizations.Memberships = Memberships;
Organizations.Address = Address;
Organizations.Billing = Billing;

export declare namespace Organizations {
  export {
    type Organization as Organization,
    type OrganizationDomain as OrganizationDomain,
    type OrganizationList as OrganizationList,
    type OrganizationServices as OrganizationServices,
    type OrganizationType as OrganizationType,
    type OrganizationsCursor as OrganizationsCursor,
    type OrganizationCreateParams as OrganizationCreateParams,
    type OrganizationUpdateParams as OrganizationUpdateParams,
    type OrganizationListParams as OrganizationListParams,
  };

  export {
    Memberships as Memberships,
    type OrganizationMembership as OrganizationMembership,
    type OrganizationMembershipList as OrganizationMembershipList,
    type OrganizationMembershipsCursor as OrganizationMembershipsCursor,
    type MembershipGetParams as MembershipGetParams,
    type MembershipListParams as MembershipListParams,
  };

  export {
    Address as Address,
    type OrganizationAddress as OrganizationAddress,
    type AddressCreateParams as AddressCreateParams,
    type AddressUpdateParams as AddressUpdateParams,
  };

  export {
    Billing as Billing,
    type BillingHistoryEntry as BillingHistoryEntry,
    type BillingHistoryEntryList as BillingHistoryEntryList,
    type BillingHistoryEntryType as BillingHistoryEntryType,
    type DailyCostPoint as DailyCostPoint,
    type OrganizationDailyCost as OrganizationDailyCost,
    type BillingCostParams as BillingCostParams,
    type BillingHistoryParams as BillingHistoryParams,
    type BillingTopUpParams as BillingTopUpParams,
    type BillingRechargeParams as BillingRechargeParams,
  };
}
