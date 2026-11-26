// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ComputeVolumesAPI from '../volumes/volumes';
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
  ): PagePromise<VolumesCursor, ComputeVolumesAPI.Volume> {
    return this._client.getAPIList(path`/v1/compute/vms/${vmID}/volumes`, Cursor<ComputeVolumesAPI.Volume>, {
      query,
      ...options,
    });
  }
}

export interface VolumeListParams extends CursorParams {
  /**
   * Filter by Volume kind
   */
  kind?: 'boot' | 'data';

  /**
   * Filter by a case-insensitive substring of the Volume name
   */
  name?: string;

  /**
   * Comma-separated sort terms in precedence order, each field:asc or field:desc.
   * Fields: created_at, updated_at, name, status, size
   */
  sort?: string;

  /**
   * Filter by Volume status
   */
  status?: 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'error';

  /**
   * Filter by tags. Repeat the parameter to require several tags; a Volume must
   * carry all of them.
   */
  tags?: Array<string>;

  /**
   * Filter by storage type
   */
  type?: 'nvme' | 'abs';
}

export declare namespace Volumes {
  export { type VolumeListParams as VolumeListParams };
}

export { type VolumesCursor };
