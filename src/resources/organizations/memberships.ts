// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { Cursor, type CursorParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Memberships extends APIResource {
  /**
   * Get details about an organization membership
   *
   * @example
   * ```ts
   * const organizationMembership =
   *   await client.organizations.memberships.get(
   *     'membership_id',
   *     { organization_id: 'organization_id' },
   *   );
   * ```
   */
  get(
    membershipID: string,
    params: MembershipGetParams,
    options?: RequestOptions,
  ): APIPromise<OrganizationMembership> {
    const { organization_id } = params;
    return this._client.get(path`/v1/organizations/${organization_id}/memberships/${membershipID}`, options);
  }

  /**
   * List all memberships for an organization
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const organizationMembership of client.organizations.memberships.list(
   *   'organization_id',
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    organizationID: string,
    query: MembershipListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<OrganizationMembershipsCursor, OrganizationMembership> {
    return this._client.getAPIList(
      path`/v1/organizations/${organizationID}/memberships`,
      Cursor<OrganizationMembership>,
      { query, ...options },
    );
  }
}

export type OrganizationMembershipsCursor = Cursor<OrganizationMembership>;

/**
 * Organization membership details.
 */
export interface OrganizationMembership {
  /**
   * Membership ID.
   */
  id: string;

  /**
   * When the membership was created.
   */
  created_at: string;

  /**
   * Organization ID.
   */
  organization_id: string;

  /**
   * Role of the user in the organization.
   */
  role: 'owner' | 'member';

  /**
   * When the membership was updated.
   */
  updated_at: string;

  /**
   * User ID.
   */
  user_id: string;
}

export interface OrganizationMembershipList {
  items: Array<OrganizationMembership>;

  /**
   * Pagination response details.
   */
  pagination: Shared.Pagination;
}

export interface MembershipGetParams {
  /**
   * Organization ID
   */
  organization_id: string;
}

export interface MembershipListParams extends CursorParams {}

export declare namespace Memberships {
  export {
    type OrganizationMembership as OrganizationMembership,
    type OrganizationMembershipList as OrganizationMembershipList,
    type OrganizationMembershipsCursor as OrganizationMembershipsCursor,
    type MembershipGetParams as MembershipGetParams,
    type MembershipListParams as MembershipListParams,
  };
}
