// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as OperationsAPI from '../operations';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Volumes extends APIResource {
  /**
   * Create a Volume. Only data volumes can be created.
   */
  create(body: VolumeCreateParams, options?: RequestOptions): APIPromise<OperationsAPI.Operation> {
    return this._client.post('/v1/compute/volumes', { body, ...options });
  }

  /**
   * Update a Volume. Boot or data volumes can be updated.
   */
  update(
    volumeID: string,
    body: VolumeUpdateParams,
    options?: RequestOptions,
  ): APIPromise<OperationsAPI.Operation> {
    return this._client.patch(path`/v1/compute/volumes/${volumeID}`, { body, ...options });
  }

  /**
   * List all volumes
   */
  list(options?: RequestOptions): APIPromise<VolumeList> {
    return this._client.get('/v1/compute/volumes', options);
  }

  /**
   * Delete a Volume. Boot or data volumes can be deleted.
   */
  delete(volumeID: string, options?: RequestOptions): APIPromise<OperationsAPI.Operation> {
    return this._client.delete(path`/v1/compute/volumes/${volumeID}`, options);
  }

  /**
   * Get a Volume.
   */
  get(volumeID: string, options?: RequestOptions): APIPromise<Volume> {
    return this._client.get(path`/v1/compute/volumes/${volumeID}`, options);
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

  name: string;

  size: number;

  status: Shared.ResourceStatus;

  /**
   * Storage type.
   */
  type: StorageType;

  updated_at: string;

  vm_id: string | null;

  vm_name: string | null;
}

/**
 * Volume kind.
 */
export type VolumeKind = 'boot' | 'data';

export interface VolumeList {
  items: Array<Volume>;
}

export interface VolumeCreateParams {
  name: string;

  size: number;

  vm_id: string;
}

export interface VolumeUpdateParams {
  name?: string;

  size?: number;
}

export declare namespace Volumes {
  export {
    type StorageType as StorageType,
    type Volume as Volume,
    type VolumeKind as VolumeKind,
    type VolumeList as VolumeList,
    type VolumeCreateParams as VolumeCreateParams,
    type VolumeUpdateParams as VolumeUpdateParams,
  };
}
