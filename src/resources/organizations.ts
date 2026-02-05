// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { Cursor, type CursorParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Organizations extends APIResource {
  /**
   * List all Organizations
   */
  list(
    query: OrganizationListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<OrganizationsCursor, Organization> {
    return this._client.getAPIList('/v1/organizations', Cursor<Organization>, { query, ...options });
  }

  /**
   * Get details about an Organization
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
   * Organization name.
   */
  name: string;

  /**
   * When the Organization was updated.
   */
  updated_at: string;
}

export interface OrganizationList {
  items: Array<Organization>;

  /**
   * Pagination response details.
   */
  pagination: Shared.Pagination;
}

export interface OrganizationListParams extends CursorParams {}

export declare namespace Organizations {
  export {
    type Organization as Organization,
    type OrganizationList as OrganizationList,
    type OrganizationsCursor as OrganizationsCursor,
    type OrganizationListParams as OrganizationListParams,
  };
}
