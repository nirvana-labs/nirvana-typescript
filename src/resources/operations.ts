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

  created_at: string;

  kind: 'vm' | 'volume' | 'vpc' | 'firewall_rule';

  resource_id: string;

  status: 'pending' | 'running' | 'done' | 'failed' | 'unknown';

  type: 'create' | 'update' | 'delete';

  updated_at: string;
}

export interface OperationListResponse {
  items: Array<Operation>;
}
