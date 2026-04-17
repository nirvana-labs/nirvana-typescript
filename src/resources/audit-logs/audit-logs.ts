// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
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
  ): PagePromise<AuditLogsCursor, AuditLog> {
    return this._client.getAPIList('/v1/audit_logs', Cursor<AuditLog>, { query, ...options });
  }

  /**
   * Get an Audit Log entry
   */
  get(auditLogID: string, options?: RequestOptions): APIPromise<AuditLog> {
    return this._client.get(path`/v1/audit_logs/${auditLogID}`, options);
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

export interface AuditLogListParams extends CursorParams {}

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
