// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as VolumesVolumesAPI from '../volumes/volumes';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Volumes extends APIResource {
  /**
   * List VM's Volumes
   *
   * @example
   * ```ts
   * const volumeList = await client.compute.vms.volumes.list(
   *   'vm_id',
   * );
   * ```
   */
  list(
    vmID: string,
    query: VolumeListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<VolumesVolumesAPI.VolumeList> {
    return this._client.get(path`/v1/compute/vms/${vmID}/volumes`, { query, ...options });
  }
}

export interface VolumeListParams {
  /**
   * Pagination cursor returned by a previous request
   */
  cursor?: string;

  /**
   * Maximum number of items to return
   */
  limit?: number;
}

export declare namespace Volumes {
  export { type VolumeListParams as VolumeListParams };
}
