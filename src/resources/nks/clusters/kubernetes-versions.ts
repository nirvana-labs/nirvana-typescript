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
   * for await (const kubernetesVersion of client.nks.clusters.kubernetesVersions.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: KubernetesVersionListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<KubernetesVersionsCursor, KubernetesVersion> {
    return this._client.getAPIList('/v1/nks/kubernetes_versions', Cursor<KubernetesVersion>, {
      query,
      ...options,
    });
  }
}

export type KubernetesVersionsCursor = Cursor<KubernetesVersion>;

/**
 * NKS Kubernetes version details.
 */
export interface KubernetesVersion {
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
    type KubernetesVersion as KubernetesVersion,
    type KubernetesVersionsCursor as KubernetesVersionsCursor,
    type KubernetesVersionListParams as KubernetesVersionListParams,
  };
}
