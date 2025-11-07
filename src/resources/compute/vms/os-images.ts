// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as VMsAPI from './vms';
import { OSImagesCursor } from './vms';
import { Cursor, type CursorParams, PagePromise } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';

export class OSImages extends APIResource {
  /**
   * List all OS Images
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const osImage of client.compute.vms.osImages.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: OSImageListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<OSImagesCursor, VMsAPI.OSImage> {
    return this._client.getAPIList('/v1/compute/vms/os_images', Cursor<VMsAPI.OSImage>, {
      query,
      ...options,
    });
  }
}

export interface OSImageListParams extends CursorParams {}

export declare namespace OSImages {
  export { type OSImageListParams as OSImageListParams };
}

export { type OSImagesCursor };
