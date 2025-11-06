// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as VolumesVolumesAPI from '../volumes/volumes';
import { VolumesCursor } from '../volumes/volumes';
import { Cursor, type CursorParams, PagePromise } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Volumes extends APIResource {
  /**
   * List VM's Volumes
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const volume of client.compute.vms.volumes.list(
   *   'vm_id',
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    vmID: string,
    query: VolumeListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<VolumesCursor, VolumesVolumesAPI.Volume> {
    return this._client.getAPIList(path`/v1/compute/vms/${vmID}/volumes`, Cursor<VolumesVolumesAPI.Volume>, {
      query,
      ...options,
    });
  }
}

export interface VolumeListParams extends CursorParams {}

export declare namespace Volumes {
  export { type VolumeListParams as VolumeListParams };
}

export { type VolumesCursor };
