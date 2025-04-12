// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

/**
 * Region of the VPC.
 */
export type RegionName =
  | 'us-sea-1'
  | 'us-sva-1'
  | 'us-chi-1'
  | 'us-wdc-1'
  | 'eu-lon-1'
  | 'eu-ams-1'
  | 'eu-frk-1'
  | 'ap-sin-1'
  | 'ap-seo-1'
  | 'ap-tyo-1';

/**
 * Status of the VPC.
 */
export type ResourceStatus = 'pending' | 'creating' | 'updating' | 'ready' | 'deleting' | 'deleted' | 'error';
