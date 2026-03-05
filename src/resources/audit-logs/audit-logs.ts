// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as OrganizationsAPI from '../organizations/organizations';
import { AuditLogsCursor } from '../organizations/organizations';
import { APIPromise } from '../../core/api-promise';
import { Cursor, type CursorParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class AuditLogs extends APIResource {
  /**
   * List Audit Log entries for an organization
   */
  list(
    query: AuditLogListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<AuditLogsCursor, OrganizationsAPI.AuditLog> {
    return this._client.getAPIList('/v1/audit_logs', Cursor<OrganizationsAPI.AuditLog>, {
      query,
      ...options,
    });
  }

  /**
   * Get an Audit Log entry
   */
  get(auditLogID: string, options?: RequestOptions): APIPromise<OrganizationsAPI.AuditLog> {
    return this._client.get(path`/v1/audit_logs/${auditLogID}`, options);
  }
}

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
  actor: OrganizationsAPI.AuditLogActor;

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

export interface AuditLogList {
  items: Array<OrganizationsAPI.AuditLog>;

  /**
   * Pagination response details.
   */
  pagination: Shared.Pagination;
}

export interface AuditLogListParams extends CursorParams {}

export declare namespace AuditLogs {
  export {
    type AuditLog as AuditLog,
    type AuditLogList as AuditLogList,
    type AuditLogListParams as AuditLogListParams,
  };
}

export { type AuditLogsCursor };
