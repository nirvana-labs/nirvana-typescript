// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Operations extends APIResource {
  /**
   * Get details about a specific VM operation
   */
  retrieve(operationId: string, options?: Core.RequestOptions): Core.APIPromise<OperationRetrieveResponse> {
    return this._client.get(`/vms/operations/${operationId}`, options);
  }
}

/**
 * Operation details.
 */
export interface OperationRetrieveResponse {
  id: string;

  kind: 'VM' | 'VPC' | 'FIREWALL_RULE';

  resource_id: string;

  status: 'PENDING' | 'RUNNING' | 'DONE' | 'FAILED';

  type: 'CREATE' | 'UPDATE' | 'DELETE';
}

export declare namespace Operations {
  export { type OperationRetrieveResponse as OperationRetrieveResponse };
}
