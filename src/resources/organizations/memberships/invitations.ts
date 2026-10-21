// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Invitations extends APIResource {
  /**
   * Invite an email address to join an organization with a role. The membership is
   * created when the invitee accepts. Owners may invite with any role; admins may
   * invite with admin, billing or member.
   *
   * @example
   * ```ts
   * const organizationInvitation =
   *   await client.organizations.memberships.invitations.create(
   *     'organization_id',
   *     { email: 'jane@example.com', role: 'owner' },
   *   );
   * ```
   */
  create(
    organizationID: string,
    body: InvitationCreateParams,
    options?: RequestOptions,
  ): APIPromise<OrganizationInvitation> {
    return this._client.post(path`/v1/organizations/${organizationID}/memberships/invitations`, {
      body,
      ...options,
    });
  }

  /**
   * List the invitations to an organization that are still pending: not yet
   * accepted, revoked or expired. Only owners and admins may list invitations.
   *
   * @example
   * ```ts
   * const organizationInvitationList =
   *   await client.organizations.memberships.invitations.list(
   *     'organization_id',
   *   );
   * ```
   */
  list(organizationID: string, options?: RequestOptions): APIPromise<OrganizationInvitationList> {
    return this._client.get(path`/v1/organizations/${organizationID}/memberships/invitations`, options);
  }

  /**
   * Send a pending invitation's email again. Owners may resend any invitation;
   * admins may resend invitations with the admin, billing or member role.
   *
   * @example
   * ```ts
   * const organizationInvitation =
   *   await client.organizations.memberships.invitations.resend(
   *     'invitation_id',
   *     { organization_id: 'organization_id' },
   *   );
   * ```
   */
  resend(
    invitationID: string,
    params: InvitationResendParams,
    options?: RequestOptions,
  ): APIPromise<OrganizationInvitation> {
    const { organization_id } = params;
    return this._client.post(
      path`/v1/organizations/${organization_id}/memberships/invitations/${invitationID}/resend`,
      options,
    );
  }

  /**
   * Revoke a pending invitation so it can no longer be accepted. Owners may revoke
   * any invitation; admins may revoke invitations with the admin, billing or member
   * role.
   *
   * @example
   * ```ts
   * await client.organizations.memberships.invitations.delete(
   *   'invitation_id',
   *   { organization_id: 'organization_id' },
   * );
   * ```
   */
  delete(invitationID: string, params: InvitationDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { organization_id } = params;
    return this._client.delete(
      path`/v1/organizations/${organization_id}/memberships/invitations/${invitationID}`,
      { ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
    );
  }
}

/**
 * Organization invitation details.
 */
export interface OrganizationInvitation {
  /**
   * Invitation ID.
   */
  id: string;

  /**
   * When the invitation was created.
   */
  created_at: string;

  /**
   * Email address the invitation was sent to.
   */
  email: string;

  /**
   * When the invitation expires.
   */
  expires_at: string;

  /**
   * ID of the user who sent the invitation, or null when the sender is not known.
   */
  inviter_user_id: string | null;

  /**
   * Organization ID.
   */
  organization_id: string;

  /**
   * Role of the user in the organization.
   */
  role: 'owner' | 'admin' | 'billing' | 'member';
}

export interface OrganizationInvitationList {
  items: Array<OrganizationInvitation>;

  /**
   * Pagination response details.
   */
  pagination: Shared.Pagination;
}

export interface InvitationCreateParams {
  /**
   * Email address to invite. Inviting an address that already belongs to a member of
   * the organization fails.
   */
  email: string;

  /**
   * Role of the user in the organization.
   */
  role: 'owner' | 'admin' | 'billing' | 'member';
}

export interface InvitationResendParams {
  /**
   * Organization ID
   */
  organization_id: string;
}

export interface InvitationDeleteParams {
  /**
   * Organization ID
   */
  organization_id: string;
}

export declare namespace Invitations {
  export {
    type OrganizationInvitation as OrganizationInvitation,
    type OrganizationInvitationList as OrganizationInvitationList,
    type InvitationCreateParams as InvitationCreateParams,
    type InvitationResendParams as InvitationResendParams,
    type InvitationDeleteParams as InvitationDeleteParams,
  };
}
