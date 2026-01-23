// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

/**
 * Pagination response details.
 */
export interface Pagination {
  next_cursor: string | null;

  previous_cursor: string | null;

  total_count: number;
}

/**
 * Region the resource is in.
 */
export type RegionName =
  | 'us-sea-1'
  | 'us-sva-1'
  | 'us-sva-2'
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

/**
 * IP filter rules.
 */
export interface SourceIPRule {
  /**
   * List of IPv4 CIDR addresses to allow.
   */
  allowed?: Array<string>;

  /**
   * List of IPv4 CIDR addresses to deny.
   */
  blocked?: Array<string>;
}
