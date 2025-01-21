// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as Shared from './shared';

export class Volumes extends APIResource {
  /**
   * Create a Volume
   */
  create(
    vmId: string,
    body: VolumeCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Operation> {
    return this._client.post(`/vms/${vmId}/volumes`, { body, ...options });
  }

  /**
   * Delete a volume
   */
  delete(vmId: string, volumeId: string, options?: Core.RequestOptions): Core.APIPromise<Shared.Operation> {
    return this._client.delete(`/vms/${vmId}/volumes/${volumeId}`, options);
  }
}

export interface VolumeCreateParams {
  size: number;
}
