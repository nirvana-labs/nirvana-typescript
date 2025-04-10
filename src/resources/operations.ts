// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Operations extends APIResource {
  /**
   * List all operations
   */
  list(options?: RequestOptions): APIPromise<OperationList> {
    return this._client.get('/v1/operations', options);
  }

  /**
   * Get details about a specific operation
   */
  get(operationID: string, options?: RequestOptions): APIPromise<Operation> {
    return this._client.get(path`/v1/operations/${operationID}`, options);
  }
}

/**
 * Operation details.
 */
export interface Operation {
  id: string;

  created_at: string;

  kind: OperationKind;

  resource_id: string;

  status: OperationStatus;

  type: OperationType;

  updated_at: string;
}

export type OperationKind = 'vm' | 'volume' | 'vpc' | 'firewall_rule';

export interface OperationList {
  items: Array<Operation>;
}

export type OperationStatus = 'pending' | 'running' | 'done' | 'failed' | 'unknown';

export type OperationType = 'create' | 'update' | 'delete';

export declare namespace Operations {
  export {
    type Operation as Operation,
    type OperationKind as OperationKind,
    type OperationList as OperationList,
    type OperationStatus as OperationStatus,
    type OperationType as OperationType,
  };
}
