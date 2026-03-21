// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as VolumesAPI from '../../../compute/volumes/volumes';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Availability extends APIResource {
  /**
   * Check if a node pool can be created in an NKS cluster
   *
   * @example
   * ```ts
   * await client.nks.clusters.pools.availability.create(
   *   'cluster_id',
   *   {
   *     name: 'my-node-pool',
   *     node_config: {
   *       boot_volume: { size: 100, type: 'abs' },
   *       cpu_config: { vcpu: 4 },
   *       memory_config: { size: 8 },
   *     },
   *     node_count: 3,
   *   },
   * );
   * ```
   */
  create(clusterID: string, body: AvailabilityCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/v1/nks/clusters/${clusterID}/pools/availability`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Check if an NKS node pool can be updated
   *
   * @example
   * ```ts
   * await client.nks.clusters.pools.availability.update(
   *   'pool_id',
   *   { cluster_id: 'cluster_id' },
   * );
   * ```
   */
  update(poolID: string, params: AvailabilityUpdateParams, options?: RequestOptions): APIPromise<void> {
    const { cluster_id, ...body } = params;
    return this._client.patch(path`/v1/nks/clusters/${cluster_id}/pools/${poolID}/availability`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface AvailabilityCreateParams {
  /**
   * Name of the node pool.
   */
  name: string;

  /**
   * Node configuration.
   */
  node_config: AvailabilityCreateParams.NodeConfig;

  /**
   * Number of nodes. Must be between 1 and 100.
   */
  node_count: number;

  /**
   * Tags to attach to the node pool.
   */
  tags?: Array<string>;
}

export namespace AvailabilityCreateParams {
  /**
   * Node configuration.
   */
  export interface NodeConfig {
    /**
     * Boot volume configuration.
     */
    boot_volume: NodeConfig.BootVolume;

    /**
     * CPU configuration.
     */
    cpu_config: NodeConfig.CPUConfig;

    /**
     * Memory configuration.
     */
    memory_config: NodeConfig.MemoryConfig;
  }

  export namespace NodeConfig {
    /**
     * Boot volume configuration.
     */
    export interface BootVolume {
      /**
       * Size of the boot volume in GB.
       */
      size: number;

      /**
       * Type of the Volume.
       */
      type: VolumesAPI.VolumeType;
    }

    /**
     * CPU configuration.
     */
    export interface CPUConfig {
      /**
       * Number of virtual CPUs.
       */
      vcpu: number;
    }

    /**
     * Memory configuration.
     */
    export interface MemoryConfig {
      /**
       * Size of the memory in GB.
       */
      size: number;
    }
  }
}

export interface AvailabilityUpdateParams {
  /**
   * Path param: Cluster ID
   */
  cluster_id: string;

  /**
   * Body param: Name of the node pool.
   */
  name?: string;

  /**
   * Body param: Tags to attach to the node pool.
   */
  tags?: Array<string>;
}

export declare namespace Availability {
  export {
    type AvailabilityCreateParams as AvailabilityCreateParams,
    type AvailabilityUpdateParams as AvailabilityUpdateParams,
  };
}
