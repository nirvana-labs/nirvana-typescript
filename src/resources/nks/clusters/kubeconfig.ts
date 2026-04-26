// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class KubeconfigResource extends APIResource {
  /**
   * Get the kubeconfig for an NKS cluster
   *
   * @example
   * ```ts
   * const kubeconfig = await client.nks.clusters.kubeconfig.get(
   *   'cluster_id',
   * );
   * ```
   */
  get(clusterID: string, options?: RequestOptions): APIPromise<Kubeconfig> {
    return this._client.get(path`/v1/nks/clusters/${clusterID}/kubeconfig`, options);
  }
}

/**
 * Kubeconfig for an NKS Cluster.
 */
export interface Kubeconfig {
  /**
   * Kubeconfig content for the Cluster.
   */
  kubeconfig: string;
}

export declare namespace KubeconfigResource {
  export {
    type Kubeconfig as Kubeconfig
  };
}
