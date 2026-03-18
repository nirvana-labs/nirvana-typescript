// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Availability extends APIResource {
  /**
   * Check if an NKS cluster can be created
   *
   * @example
   * ```ts
   * await client.nks.clusters.availability.create({
   *   name: 'my-cluster',
   *   project_id: '123e4567-e89b-12d3-a456-426614174000',
   *   region: 'us-wdc-1',
   *   vpc_id: '123e4567-e89b-12d3-a456-426614174000',
   * });
   * ```
   */
  create(body: AvailabilityCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/v1/nks/clusters/availability', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Check if an NKS cluster can be updated
   *
   * @example
   * ```ts
   * await client.nks.clusters.availability.update('cluster_id');
   * ```
   */
  update(clusterID: string, body: AvailabilityUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.patch(path`/v1/nks/clusters/${clusterID}/availability`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface AvailabilityCreateParams {
  /**
   * Name of the Cluster.
   */
  name: string;

  /**
   * Project ID to create the Cluster in.
   */
  project_id: string;

  /**
   * Region the resource is in.
   */
  region: Shared.RegionName;

  /**
   * ID of the VPC to use for the Cluster.
   */
  vpc_id: string;

  /**
   * Tags to attach to the Cluster.
   */
  tags?: Array<string>;
}

export interface AvailabilityUpdateParams {
  /**
   * Name of the Cluster.
   */
  name?: string;

  /**
   * Tags to attach to the Cluster.
   */
  tags?: Array<string>;
}

export declare namespace Availability {
  export {
    type AvailabilityCreateParams as AvailabilityCreateParams,
    type AvailabilityUpdateParams as AvailabilityUpdateParams,
  };
}
