// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as VMsAPI from './vms';

export class OSImages extends APIResource {
  /**
   * List all OS Images
   */
  list(options?: Core.RequestOptions): Core.APIPromise<OSImageListResponse> {
    return this._client.get('/vms/os_images', options);
  }
}

export type OSImageListResponse = Array<VMsAPI.OSImage>;

export declare namespace OSImages {
  export { type OSImageListResponse as OSImageListResponse };
}
