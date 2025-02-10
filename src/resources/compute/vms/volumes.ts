// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as VolumesAPI from '../volumes';

export class Volumes extends APIResource {
  /**
   * List VM's Volumes
   */
  list(vmId: string, options?: Core.RequestOptions): Core.APIPromise<VolumesAPI.VolumeList> {
    return this._client.get(`/compute/vms/${vmId}/volumes`, options);
  }
}
