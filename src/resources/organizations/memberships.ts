// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as OrganizationsAPI from './organizations';
import { OrganizationMembershipsCursor } from './organizations';
import { APIPromise } from '../../core/api-promise';
import { Cursor, type CursorParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Memberships extends APIResource {
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
  ): PagePromise<OrganizationMembershipsCursor, OrganizationsAPI.OrganizationMembership> {
    return this._client.getAPIList(
      path`/v1/organizations/${organizationID}/memberships`,
      Cursor<OrganizationsAPI.OrganizationMembership>,
      { query, ...options },
    );
  }

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
  ): APIPromise<OrganizationsAPI.OrganizationMembership> {
    const { organization_id } = params;
    return this._client.get(path`/v1/organizations/${organization_id}/memberships/${membershipID}`, options);
  }
}

export interface OrganizationMembershipList {
  items: Array<OrganizationsAPI.OrganizationMembership>;

  /**
   * Pagination response details.
   */
  pagination: Shared.Pagination;
}

export interface MembershipListParams extends CursorParams {}

export interface MembershipGetParams {
  /**
   * Organization ID
   */
  organization_id: string;
}

export declare namespace Memberships {
  export {
    type OrganizationMembershipList as OrganizationMembershipList,
    type MembershipListParams as MembershipListParams,
    type MembershipGetParams as MembershipGetParams,
  };
}

export { type OrganizationMembershipsCursor };
