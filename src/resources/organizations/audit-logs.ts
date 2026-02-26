// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as OrganizationsAPI from './organizations';
import { AuditLogsCursor } from './organizations';
import { APIPromise } from '../../core/api-promise';
import { Cursor, type CursorParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class AuditLogs extends APIResource {
  /**
   * List Audit Log entries for an organization
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const auditLog of client.organizations.auditLogs.list(
   *   'organization_id',
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    organizationID: string,
    query: AuditLogListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<AuditLogsCursor, OrganizationsAPI.AuditLog> {
    return this._client.getAPIList(
      path`/v1/organizations/${organizationID}/audit_logs`,
      Cursor<OrganizationsAPI.AuditLog>,
      { query, ...options },
    );
  }

  /**
   * Get an Audit Log entry
   *
   * @example
   * ```ts
   * const auditLog = await client.organizations.auditLogs.get(
   *   'audit_log_id',
   *   { organization_id: 'organization_id' },
   * );
   * ```
   */
  get(
    auditLogID: string,
    params: AuditLogGetParams,
    options?: RequestOptions,
  ): APIPromise<OrganizationsAPI.AuditLog> {
    const { organization_id } = params;
    return this._client.get(path`/v1/organizations/${organization_id}/audit_logs/${auditLogID}`, options);
  }
}

export interface AuditLogListParams extends CursorParams {}

export interface AuditLogGetParams {
  /**
   * Organization ID
   */
  organization_id: string;
}

export declare namespace AuditLogs {
  export { type AuditLogListParams as AuditLogListParams, type AuditLogGetParams as AuditLogGetParams };
}

export { type AuditLogsCursor };
