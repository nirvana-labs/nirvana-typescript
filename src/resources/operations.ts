// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { Cursor, type CursorParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Operations extends APIResource {
  /**
   * List all operations
   */
  list(
    query: OperationListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<OperationsCursor, Operation> {
    return this._client.getAPIList('/v1/operations', Cursor<Operation>, { query, ...options });
  }

  /**
   * Get details about a specific operation
   */
  get(operationID: string, options?: RequestOptions): APIPromise<Operation> {
    return this._client.get(path`/v1/operations/${operationID}`, options);
  }
}

export type OperationsCursor = Cursor<Operation>;

/**
 * Operation details.
 */
export interface Operation {
  /**
   * Unique identifier for the Operation.
   */
  id: string;

  /**
   * When the Operation was created.
   */
  created_at: string;

  /**
   * Kind of Operation.
   */
  kind: OperationKind;

  /**
   * ID of the resource that the Operation is acting on.
   */
  resource_id: string;

  /**
   * Status of the Operation.
   */
  status: OperationStatus;

  /**
   * Type of Operation.
   */
  type: OperationType;

  /**
   * When the Operation was updated.
   */
  updated_at: string;

  /**
   * Project ID the Operation belongs to.
   */
  project_id?: string;
}

/**
 * Kind of Operation.
 */
export type OperationKind = 'vm' | 'volume' | 'vpc' | 'firewall_rule';

export interface OperationList {
  items: Array<Operation>;

  /**
   * Pagination response details.
   */
  pagination: Shared.Pagination;
}

/**
 * Status of the Operation.
 */
export type OperationStatus = 'pending' | 'running' | 'done' | 'failed' | 'unknown';

/**
 * Type of Operation.
 */
export type OperationType = 'create' | 'update' | 'delete' | 'restart';

export interface OperationListParams extends CursorParams {
  /**
   * Project ID of resources to request
   */
  project_id?: string;
}

export declare namespace Operations {
  export {
    type Operation as Operation,
    type OperationKind as OperationKind,
    type OperationList as OperationList,
    type OperationStatus as OperationStatus,
    type OperationType as OperationType,
    type OperationsCursor as OperationsCursor,
    type OperationListParams as OperationListParams,
  };
}
