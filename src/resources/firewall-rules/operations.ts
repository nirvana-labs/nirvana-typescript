// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as Shared from '../shared';

export class Operations extends APIResource {
  /**
   * Get details of a firewall rule operation
   */
  operations(
    vpcId: string,
    operationId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Operation> {
    return this._client.get(`/vpcs/${vpcId}/firewall_rules/operations/${operationId}`, options);
  }
}
