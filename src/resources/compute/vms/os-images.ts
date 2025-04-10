// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as VMsAPI from './vms';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class OSImages extends APIResource {
  /**
   * List all OS Images
   */
  list(options?: RequestOptions): APIPromise<OSImageListResponse> {
    return this._client.get('/v1/compute/vms/os_images', options);
  }
}

export type OSImageListResponse = Array<VMsAPI.OSImage>;

export declare namespace OSImages {
  export { type OSImageListResponse as OSImageListResponse };
}
