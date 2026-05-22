// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { Cursor, type CursorParams, PagePromise } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';

export class KubernetesVersions extends APIResource {
  /**
   * List all supported Kubernetes versions for NKS clusters
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const kubernetesVersionListResponse of client.nks.clusters.kubernetesVersions.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: KubernetesVersionListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<KubernetesVersionListResponsesCursor, KubernetesVersionListResponse> {
    return this._client.getAPIList('/v1/nks/kubernetes_versions', Cursor<KubernetesVersionListResponse>, {
      query,
      ...options,
    });
  }
}

export type KubernetesVersionListResponsesCursor = Cursor<KubernetesVersionListResponse>;

/**
 * NKS Kubernetes version details.
 */
export interface KubernetesVersionListResponse {
  /**
   * When the Kubernetes version was created.
   */
  created_at: string;

  /**
   * Display name of the Kubernetes version.
   */
  display_name: string;

  /**
   * Name of the Kubernetes version.
   */
  name: string;
}

export interface KubernetesVersionListParams extends CursorParams {}

export declare namespace KubernetesVersions {
  export {
    type KubernetesVersionListResponse as KubernetesVersionListResponse,
    type KubernetesVersionListResponsesCursor as KubernetesVersionListResponsesCursor,
    type KubernetesVersionListParams as KubernetesVersionListParams,
  };
}
