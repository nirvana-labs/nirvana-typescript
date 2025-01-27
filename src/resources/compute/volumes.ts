// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as OperationsAPI from '../operations';

export class Volumes extends APIResource {
  /**
   * Create a Volume. Only data volumes can be created.
   */
  create(body: VolumeCreateParams, options?: Core.RequestOptions): Core.APIPromise<OperationsAPI.Operation> {
    return this._client.post('/compute/volumes', { body, ...options });
  }

  /**
   * Update a Volume. Boot or data volumes can be updated.
   */
  update(
    volumeId: string,
    body: VolumeUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OperationsAPI.Operation> {
    return this._client.patch(`/compute/volumes/${volumeId}`, { body, ...options });
  }

  /**
   * List all volumes
   */
  list(options?: Core.RequestOptions): Core.APIPromise<VolumeListResponse> {
    return this._client.get('/compute/volumes', options);
  }

  /**
   * Delete a Volume. Boot or data volumes can be deleted.
   */
  delete(
    volumeId: string,
    body: VolumeDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OperationsAPI.Operation> {
    return this._client.delete(`/compute/volumes/${volumeId}`, { body, ...options });
  }

  /**
   * Get a Volume.
   */
  get(volumeId: string, options?: Core.RequestOptions): Core.APIPromise<Volume> {
    return this._client.get(`/compute/volumes/${volumeId}`, options);
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

  created_at: string;

  /**
   * Volume kind.
   */
  kind: VolumeKind;

  size: number;

  /**
   * Storage type.
   */
  type: StorageType;

  updated_at: string;
}

/**
 * Volume kind.
 */
export type VolumeKind = 'boot' | 'data';

export interface VolumeListResponse {
  items: Array<Volume>;
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

export declare namespace Volumes {
  export {
    type StorageType as StorageType,
    type Volume as Volume,
    type VolumeKind as VolumeKind,
    type VolumeListResponse as VolumeListResponse,
    type VolumeCreateParams as VolumeCreateParams,
    type VolumeUpdateParams as VolumeUpdateParams,
    type VolumeDeleteParams as VolumeDeleteParams,
  };
}
