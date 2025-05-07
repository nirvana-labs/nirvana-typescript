// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as VolumesAPI from '../volumes';
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
  list(vmID: string, options?: RequestOptions): APIPromise<VolumesAPI.VolumeList> {
    return this._client.get(path`/v1/compute/vms/${vmID}/volumes`, options);
  }
}
