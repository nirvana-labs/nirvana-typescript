// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { Cursor, type CursorParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class AuditLogs extends APIResource {
  /**
   * Get an Audit Log entry
   */
  get(auditLogID: string, options?: RequestOptions): APIPromise<AuditLog> {
    return this._client.get(path`/v1/audit_logs/${auditLogID}`, options);
  }

  /**
   * List Audit Log entries for an organization
   */
  list(
    query: AuditLogListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<AuditLogsCursor, AuditLog> {
    return this._client.getAPIList('/v1/audit_logs', Cursor<AuditLog>, { query, ...options });
  }
}

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
   * The action that was performed.
   */
  action: string;

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

  /**
   * The target resource of the action.
   */
  target?: AuditLogTarget | null;
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
   * Display name of the actor.
   */
  name: string | null;

  /**
   * Type of actor.
   */
  type: AuditLogType;
}

export interface AuditLogList {
  items: Array<AuditLog>;

  /**
   * Pagination response details.
   */
  pagination: Shared.Pagination;
}

/**
 * The target resource of the action.
 */
export interface AuditLogTarget {
  /**
   * Unique identifier for the target resource.
   */
  id: string;

  /**
   * Type of the target resource.
   */
  type: string;
}

/**
 * Type of actor.
 */
export type AuditLogType = 'user' | 'api_key';

export interface AuditLogListParams extends CursorParams {
  /**
   * Filter by recorded action
   */
  action?: string;

  /**
   * Filter by the acting user or API key
   */
  actor_id?: string;

  /**
   * Filter by the kind of actor that acted
   */
  actor_type?: 'user' | 'api_key';

  /**
   * Filter by client IP address, matched exactly
   */
  client_ip?: string;

  /**
   * Only entries at or before this RFC 3339 instant
   */
  created_at_max?: string;

  /**
   * Only entries at or after this RFC 3339 instant
   */
  created_at_min?: string;

  /**
   * Filter by HTTP method
   */
  method?: string;

  /**
   * Filter by a case-insensitive substring of the request path
   */
  path?: string;

  /**
   * Comma-separated sort terms in precedence order, each field:asc or field:desc.
   * Fields: created_at, status_code
   */
  sort?: string;

  /**
   * Only entries with a status code at or below this
   */
  status_code_max?: number;

  /**
   * Only entries with a status code at or above this, e.g. 400 for failures only
   */
  status_code_min?: number;

  /**
   * Filter by the resource acted on
   */
  target_id?: string;

  /**
   * Filter by the kind of resource acted on
   */
  target_type?: string;
}

export declare namespace AuditLogs {
  export {
    type AuditLog as AuditLog,
    type AuditLogActor as AuditLogActor,
    type AuditLogList as AuditLogList,
    type AuditLogTarget as AuditLogTarget,
    type AuditLogType as AuditLogType,
    type AuditLogsCursor as AuditLogsCursor,
    type AuditLogListParams as AuditLogListParams,
  };
}
