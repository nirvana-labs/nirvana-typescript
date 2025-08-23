// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

/**
 * Region the resource is in.
 */
export type RegionName =
  | 'us-sea-1'
  | 'us-sva-1'
  | 'us-chi-1'
  | 'us-wdc-1'
  | 'eu-frk-1'
  | 'ap-sin-1'
  | 'ap-seo-1'
  | 'ap-tyo-1';

/**
 * Status of the resource.
 */
export type ResourceStatus = 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error';
