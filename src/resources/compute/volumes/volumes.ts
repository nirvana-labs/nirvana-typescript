// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as OperationsAPI from '../../operations';
import * as Shared from '../../shared';
import * as AvailabilityAPI from './availability';
import {
  Availability,
  AvailabilityCreateParams,
  AvailabilityCreateResponse,
  AvailabilityUpdateParams,
  AvailabilityUpdateResponse,
} from './availability';
import { APIPromise } from '../../../core/api-promise';
import { Cursor, type CursorParams, PagePromise } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Volumes extends APIResource {
  availability: AvailabilityAPI.Availability = new AvailabilityAPI.Availability(this._client);

  /**
   * Create a Volume. Only data volumes can be created.
   *
   * @example
   * ```ts
   * const operation = await client.compute.volumes.create({
   *   name: 'my-data-volume',
   *   region: 'us-wdc-1',
   *   size: 100,
   *   type: 'nvme',
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
   * // Automatically fetches more pages as needed.
   * for await (const volume of client.compute.volumes.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: VolumeListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<VolumesCursor, Volume> {
    return this._client.getAPIList('/v1/compute/volumes', Cursor<Volume>, { query, ...options });
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
   * Attach a volume to a VM
   *
   * @example
   * ```ts
   * const operation = await client.compute.volumes.attach(
   *   'volume_id',
   *   { vm_id: '123e4567-e89b-12d3-a456-426614174000' },
   * );
   * ```
   */
  attach(
    volumeID: string,
    body: VolumeAttachParams,
    options?: RequestOptions,
  ): APIPromise<OperationsAPI.Operation> {
    return this._client.post(path`/v1/compute/volumes/${volumeID}/attach`, { body, ...options });
  }

  /**
   * Detach a volume from a VM
   *
   * @example
   * ```ts
   * const operation = await client.compute.volumes.detach(
   *   'volume_id',
   * );
   * ```
   */
  detach(volumeID: string, options?: RequestOptions): APIPromise<OperationsAPI.Operation> {
    return this._client.post(path`/v1/compute/volumes/${volumeID}/detach`, options);
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

export type VolumesCursor = Cursor<Volume>;

/**
 * Volume details.
 */
export interface Volume {
  /**
   * Unique identifier for the Volume.
   */
  id: string;

  /**
   * When the Volume was created.
   */
  created_at: string;

  /**
   * Volume kind.
   */
  kind: VolumeKind;

  /**
   * Name of the Volume.
   */
  name: string;

  /**
   * Project ID the Volume belongs to.
   */
  project_id: string;

  /**
   * Region the resource is in.
   */
  region: Shared.RegionName;

  /**
   * Size of the Volume in GB.
   */
  size: number;

  /**
   * Status of the resource.
   */
  status: Shared.ResourceStatus;

  /**
   * Tags to attach to the Volume.
   */
  tags: Array<string>;

  /**
   * Type of the Volume.
   */
  type: VolumeType;

  /**
   * When the Volume was updated.
   */
  updated_at: string;

  /**
   * ID of the VM the Volume is attached to.
   */
  vm_id: string | null;

  /**
   * Name of the VM the Volume is attached to.
   */
  vm_name: string | null;
}

/**
 * Volume kind.
 */
export type VolumeKind = 'boot' | 'data';

export interface VolumeList {
  items: Array<Volume>;

  /**
   * Pagination response details.
   */
  pagination: Shared.Pagination;
}

/**
 * Type of the Volume.
 */
export type VolumeType = 'nvme' | 'abs';

export interface VolumeCreateParams {
  /**
   * Name of the Volume.
   */
  name: string;

  /**
   * Region the resource is in.
   */
  region: Shared.RegionName;

  /**
   * Size of the Volume in GB.
   */
  size: number;

  /**
   * Type of the Volume.
   */
  type: VolumeType;

  /**
   * Project ID the Volume belongs to.
   */
  project_id?: string;

  /**
   * Tags to attach to the Volume.
   */
  tags?: Array<string>;

  /**
   * ID of the VM the Volume is attached to.
   */
  vm_id?: string;
}

export interface VolumeUpdateParams {
  /**
   * Name of the Volume.
   */
  name?: string;

  /**
   * Size of the Volume in GB.
   */
  size?: number;

  /**
   * Tags to attach to the Volume.
   */
  tags?: Array<string>;
}

export interface VolumeListParams extends CursorParams {
  /**
   * Project ID of resources to request
   */
  project_id?: string;
}

export interface VolumeAttachParams {
  /**
   * ID of the VM to attach the Volume to.
   */
  vm_id: string;
}

Volumes.Availability = Availability;

export declare namespace Volumes {
  export {
    type Volume as Volume,
    type VolumeKind as VolumeKind,
    type VolumeList as VolumeList,
    type VolumeType as VolumeType,
    type VolumesCursor as VolumesCursor,
    type VolumeCreateParams as VolumeCreateParams,
    type VolumeUpdateParams as VolumeUpdateParams,
    type VolumeListParams as VolumeListParams,
    type VolumeAttachParams as VolumeAttachParams,
  };

  export {
    Availability as Availability,
    type AvailabilityCreateResponse as AvailabilityCreateResponse,
    type AvailabilityUpdateResponse as AvailabilityUpdateResponse,
    type AvailabilityCreateParams as AvailabilityCreateParams,
    type AvailabilityUpdateParams as AvailabilityUpdateParams,
  };
}
