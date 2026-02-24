// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { Cursor, type CursorParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Organizations extends APIResource {
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
   * When the Organization was created.
   */
  created_at: string;

  /**
   * Current user's membership details.
   */
  membership: OrganizationMembership;

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
  services: Services;

  /**
   * When the Organization was updated.
   */
  updated_at: string;

  /**
   * Authentication provider organization ID.
   */
  auth_id?: string;
}

export interface OrganizationList {
  items: Array<Organization>;

  /**
   * Pagination response details.
   */
  pagination: Shared.Pagination;
}

/**
 * Current user's membership details.
 */
export interface OrganizationMembership {
  /**
   * Membership ID.
   */
  id: string;

  /**
   * Role of the user in the organization.
   */
  role: 'owner' | 'member';
}

/**
 * Services that the Organization has access to.
 */
export interface Services {
  cloud?: boolean;
}

export interface OrganizationCreateParams {
  /**
   * Organization name.
   */
  name: string;
}

export interface OrganizationUpdateParams {
  /**
   * Organization name.
   */
  name?: string;
}

export interface OrganizationListParams extends CursorParams {}

export declare namespace Organizations {
  export {
    type Organization as Organization,
    type OrganizationList as OrganizationList,
    type OrganizationMembership as OrganizationMembership,
    type Services as Services,
    type OrganizationsCursor as OrganizationsCursor,
    type OrganizationCreateParams as OrganizationCreateParams,
    type OrganizationUpdateParams as OrganizationUpdateParams,
    type OrganizationListParams as OrganizationListParams,
  };
}
