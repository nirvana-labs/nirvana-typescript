// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as InvitationsAPI from './invitations';
import {
  InvitationCreateParams,
  InvitationDeleteParams,
  InvitationResendParams,
  Invitations,
  OrganizationInvitation,
  OrganizationInvitationList,
} from './invitations';
import { APIPromise } from '../../../core/api-promise';
import { Cursor, type CursorParams, PagePromise } from '../../../core/pagination';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Memberships extends APIResource {
  invitations: InvitationsAPI.Invitations = new InvitationsAPI.Invitations(this._client);

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

  /**
   * Change the role of a member of an organization. Owners may assign any role.
   * Admins may assign admin, billing or member, and cannot change the role of an
   * owner. The last owner cannot be demoted, and members cannot change their own
   * role except for an owner stepping down while another owner remains.
   *
   * @example
   * ```ts
   * const organizationMembership =
   *   await client.organizations.memberships.update(
   *     'membership_id',
   *     { organization_id: 'organization_id', role: 'owner' },
   *   );
   * ```
   */
  update(
    membershipID: string,
    params: MembershipUpdateParams,
    options?: RequestOptions,
  ): APIPromise<OrganizationMembership> {
    const { organization_id, ...body } = params;
    return this._client.patch(path`/v1/organizations/${organization_id}/memberships/${membershipID}`, {
      body,
      ...options,
    });
  }

  /**
   * Remove a member from an organization. Admins cannot remove an owner, and the
   * last owner cannot be removed.
   *
   * @example
   * ```ts
   * await client.organizations.memberships.delete(
   *   'membership_id',
   *   { organization_id: 'organization_id' },
   * );
   * ```
   */
  delete(membershipID: string, params: MembershipDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { organization_id } = params;
    return this._client.delete(path`/v1/organizations/${organization_id}/memberships/${membershipID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
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
  role: 'owner' | 'admin' | 'billing' | 'member';

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

export interface MembershipListParams extends CursorParams {
  /**
   * Filter by membership role
   */
  role?: 'owner' | 'admin' | 'billing' | 'member';

  /**
   * Comma-separated sort terms in precedence order, each field:asc or field:desc.
   * Fields: created_at, updated_at, role
   */
  sort?: string;

  /**
   * Filter by the member's user ID
   */
  user_id?: string;
}

export interface MembershipUpdateParams {
  /**
   * Path param: Organization ID
   */
  organization_id: string;

  /**
   * Body param: Role of the user in the organization.
   */
  role: 'owner' | 'admin' | 'billing' | 'member';
}

export interface MembershipDeleteParams {
  /**
   * Organization ID
   */
  organization_id: string;
}

Memberships.Invitations = Invitations;

export declare namespace Memberships {
  export {
    type OrganizationMembership as OrganizationMembership,
    type OrganizationMembershipList as OrganizationMembershipList,
    type OrganizationMembershipsCursor as OrganizationMembershipsCursor,
    type MembershipGetParams as MembershipGetParams,
    type MembershipListParams as MembershipListParams,
    type MembershipUpdateParams as MembershipUpdateParams,
    type MembershipDeleteParams as MembershipDeleteParams,
  };

  export {
    Invitations as Invitations,
    type OrganizationInvitation as OrganizationInvitation,
    type OrganizationInvitationList as OrganizationInvitationList,
    type InvitationCreateParams as InvitationCreateParams,
    type InvitationResendParams as InvitationResendParams,
    type InvitationDeleteParams as InvitationDeleteParams,
  };
}
