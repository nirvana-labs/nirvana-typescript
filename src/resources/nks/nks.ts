// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as KubernetesVersionsAPI from './kubernetes-versions';
import {
  KubernetesVersion,
  KubernetesVersionListParams,
  KubernetesVersions,
  KubernetesVersionsCursor,
} from './kubernetes-versions';
import * as ClustersAPI from './clusters/clusters';
import {
  ClusterCreateParams,
  ClusterListParams,
  ClusterUpdateParams,
  Clusters,
  NKSCluster,
  NKSClusterList,
  NKSClustersCursor,
} from './clusters/clusters';

export class NKS extends APIResource {
  kubernetesVersions: KubernetesVersionsAPI.KubernetesVersions = new KubernetesVersionsAPI.KubernetesVersions(
    this._client,
  );
  clusters: ClustersAPI.Clusters = new ClustersAPI.Clusters(this._client);
}

NKS.KubernetesVersions = KubernetesVersions;
NKS.Clusters = Clusters;

export declare namespace NKS {
  export {
    KubernetesVersions as KubernetesVersions,
    type KubernetesVersion as KubernetesVersion,
    type KubernetesVersionsCursor as KubernetesVersionsCursor,
    type KubernetesVersionListParams as KubernetesVersionListParams,
  };

  export {
    Clusters as Clusters,
    type NKSCluster as NKSCluster,
    type NKSClusterList as NKSClusterList,
    type NKSClustersCursor as NKSClustersCursor,
    type ClusterCreateParams as ClusterCreateParams,
    type ClusterUpdateParams as ClusterUpdateParams,
    type ClusterListParams as ClusterListParams,
  };
}
