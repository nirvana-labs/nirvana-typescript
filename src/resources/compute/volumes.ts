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
   *
   * @example
   * ```ts
   * const operation = await client.compute.volumes.create({
   *   name: 'my-data-volume',
   *   size: 100,
   *   vm_id: 'vm_id',
   * });
   * ```
   */
  create(body: VolumeCreateParams, options?: RequestOptions): APIPromise<OperationsAPI.Operation> {
    return this._client.post('/v1/compute/volumes', { body, ...options });
  }

  /**
   * Update a Volume. Boot or data volumes can be updated.
   *
   * @example
   * ```ts
   * const operation = await client.compute.volumes.update(
   *   'volume_id',
   * );
   * ```
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
   *
   * @example
   * ```ts
   * const volumeList = await client.compute.volumes.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<VolumeList> {
    return this._client.get('/v1/compute/volumes', options);
  }

  /**
   * Delete a Volume. Boot or data volumes can be deleted.
   *
   * @example
   * ```ts
   * const operation = await client.compute.volumes.delete(
   *   'volume_id',
   * );
   * ```
   */
  delete(volumeID: string, options?: RequestOptions): APIPromise<OperationsAPI.Operation> {
    return this._client.delete(path`/v1/compute/volumes/${volumeID}`, options);
  }

  /**
   * Get a Volume.
   *
   * @example
   * ```ts
   * const volume = await client.compute.volumes.get(
   *   'volume_id',
   * );
   * ```
   */
  get(volumeID: string, options?: RequestOptions): APIPromise<Volume> {
    return this._client.get(path`/v1/compute/volumes/${volumeID}`, options);
  }
}

/**
 * Storage type the volume is using.
 */
export type StorageType = 'nvme';

/**
 * Volume details.
 */
export interface Volume {
  /**
   * Unique identifier for the volume.
   */
  id: string;

  /**
   * When the volume was created.
   */
  created_at: string;

  /**
   * Volume kind.
   */
  kind: VolumeKind;

  /**
   * Name of the volume.
   */
  name: string;

  /**
   * Size of the volume in GB.
   */
  size: number;

  /**
   * Status of the resource.
   */
  status: Shared.ResourceStatus;

  /**
   * Storage type the volume is using.
   */
  type: StorageType;

  /**
   * When the volume was updated.
   */
  updated_at: string;

  /**
   * ID of the VM the volume is attached to.
   */
  vm_id: string | null;

  /**
   * Name of the VM the volume is attached to.
   */
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
  /**
   * Name of the volume.
   */
  name: string;

  /**
   * Size of the volume in GB.
   */
  size: number;

  /**
   * ID of the VM the volume is attached to.
   */
  vm_id: string;
}

export interface VolumeUpdateParams {
  /**
   * Name of the volume.
   */
  name?: string;

  /**
   * Size of the volume in GB.
   */
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
