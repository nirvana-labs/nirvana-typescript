// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ClustersAPI from './clusters';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Kubeconfig extends APIResource {
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
  get(clusterID: string, options?: RequestOptions): APIPromise<ClustersAPI.Kubeconfig> {
    return this._client.get(path`/v1/nks/clusters/${clusterID}/kubeconfig`, options);
  }
}
