// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as FlexAPI from './flex';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Blockchains extends APIResource {
  /**
   * List all Flex Blockchains
   */
  list(options?: RequestOptions): APIPromise<FlexAPI.FlexBlockchainList> {
    return this._client.get('/v1/rpc_nodes/flex/blockchains', options);
  }
}
