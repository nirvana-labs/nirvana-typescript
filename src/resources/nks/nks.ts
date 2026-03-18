// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ClustersAPI from './clusters/clusters';
import {
  ClusterCreateParams,
  ClusterListParams,
  ClusterUpdateParams,
  Clusters,
  Kubeconfig,
  NKSCluster,
  NKSClusterList,
  NKSClustersCursor,
} from './clusters/clusters';

export class NKS extends APIResource {
  clusters: ClustersAPI.Clusters = new ClustersAPI.Clusters(this._client);
}

NKS.Clusters = Clusters;

export declare namespace NKS {
  export {
    Clusters as Clusters,
    type Kubeconfig as Kubeconfig,
    type NKSCluster as NKSCluster,
    type NKSClusterList as NKSClusterList,
    type NKSClustersCursor as NKSClustersCursor,
    type ClusterCreateParams as ClusterCreateParams,
    type ClusterUpdateParams as ClusterUpdateParams,
    type ClusterListParams as ClusterListParams,
  };
}
