// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as OperationsAPI from './operations';

export class Volumes extends APIResource {
  /**
   * Create a Volume. Only data volumes can be created.
   */
  create(body: VolumeCreateParams, options?: Core.RequestOptions): Core.APIPromise<OperationsAPI.Operation> {
    return this._client.post('/volumes', { body, ...options });
  }

  /**
   * Update a Volume. Boot or data volumes can be updated.
   */
  update(
    volumeId: string,
    body: VolumeUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OperationsAPI.Operation> {
    return this._client.patch(`/volumes/${volumeId}`, { body, ...options });
  }

  /**
   * Delete a Volume. Boot or data volumes can be deleted.
   */
  delete(
    volumeId: string,
    body: VolumeDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OperationsAPI.Operation> {
    return this._client.delete(`/volumes/${volumeId}`, { body, ...options });
  }
}

/**
 * Storage type.
 */
export type StorageType = 'nvme';

/**
 * Volume details.
 */
export interface Volume {
  id: string;

  size: number;

  /**
   * Storage type.
   */
  type: StorageType;
}

export interface VolumeCreateParams {
  size: number;

  vm_id: string;

  /**
   * Storage type.
   */
  type?: StorageType;
}

export interface VolumeUpdateParams {
  size: number;

  vm_id: string;
}

export interface VolumeDeleteParams {
  vm_id: string;
}
