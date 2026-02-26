// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as AuditLogsAPI from './audit-logs';
import { AuditLogGetParams, AuditLogListParams, AuditLogs } from './audit-logs';
import { APIPromise } from '../../core/api-promise';
import { Cursor, type CursorParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Organizations extends APIResource {
  auditLogs: AuditLogsAPI.AuditLogs = new AuditLogsAPI.AuditLogs(this._client);

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

export type AuditLogsCursor = Cursor<AuditLog>;

/**
 * Audit log entry.
 */
export interface AuditLog {
  /**
   * Unique identifier for the audit log entry.
   */
  id: string;

  /**
   * The entity that performed the action.
   */
  actor: AuditLogActor;

  /**
   * Client IP address.
   */
  client_ip: string;

  /**
   * When the action occurred.
   */
  created_at: string;

  /**
   * HTTP method of the request.
   */
  method: string;

  /**
   * Request path.
   */
  path: string;

  /**
   * HTTP status code of the response.
   */
  status_code: number;

  /**
   * User agent string.
   */
  user_agent: string;
}

/**
 * The entity that performed the action.
 */
export interface AuditLogActor {
  /**
   * Unique identifier for the actor.
   */
  id: string;

  /**
   * Type of actor.
   */
  type: AuditLogType;
}

/**
 * Type of actor.
 */
export type AuditLogType = 'user' | 'api_key';

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

Organizations.AuditLogs = AuditLogs;

export declare namespace Organizations {
  export {
    type AuditLog as AuditLog,
    type AuditLogActor as AuditLogActor,
    type AuditLogType as AuditLogType,
    type Organization as Organization,
    type OrganizationList as OrganizationList,
    type OrganizationMembership as OrganizationMembership,
    type Services as Services,
    type OrganizationsCursor as OrganizationsCursor,
    type OrganizationCreateParams as OrganizationCreateParams,
    type OrganizationUpdateParams as OrganizationUpdateParams,
    type OrganizationListParams as OrganizationListParams,
  };

  export {
    AuditLogs as AuditLogs,
    type AuditLogListParams as AuditLogListParams,
    type AuditLogGetParams as AuditLogGetParams,
  };
}
