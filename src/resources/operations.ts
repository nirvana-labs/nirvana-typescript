// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Operations extends APIResource {
  /**
   * List all operations
   */
  list(options?: Core.RequestOptions): Core.APIPromise<OperationListResponse> {
    return this._client.get('/operations', options);
  }

  /**
   * Get details about a specific operation
   */
  get(operationId: string, options?: Core.RequestOptions): Core.APIPromise<Operation> {
    return this._client.get(`/operations/${operationId}`, options);
  }
}

/**
 * Operation details.
 */
export interface Operation {
  id: string;

  kind: 'VM' | 'VOLUME' | 'VPC' | 'FIREWALL_RULE';

  resource_id: string;

  status: 'PENDING' | 'RUNNING' | 'DONE' | 'FAILED' | 'UNKNOWN';

  type: 'CREATE' | 'UPDATE' | 'DELETE';
}

export type OperationListResponse = Array<Operation>;
