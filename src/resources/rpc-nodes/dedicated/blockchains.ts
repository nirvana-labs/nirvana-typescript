// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as DedicatedAPI from './dedicated';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Blockchains extends APIResource {
  /**
   * List all Dedicated Blockchains
   */
  list(options?: RequestOptions): APIPromise<DedicatedAPI.DedicatedBlockchainList> {
    return this._client.get('/v1/rpc_nodes/dedicated/blockchains', options);
  }
}
