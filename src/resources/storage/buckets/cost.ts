// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Cost extends APIResource {
  /**
   * Return a priced cost quote for the proposed Bucket.
   *
   * @example
   * ```ts
   * const costQuote = await client.storage.buckets.cost.create({
   *   name: 'my-bucket',
   *   project_id: '123e4567-e89b-12d3-a456-426614174000',
   *   region: 'us-sva-2',
   * });
   * ```
   */
  create(body: CostCreateParams, options?: RequestOptions): APIPromise<Shared.CostQuote> {
    return this._client.post('/v1/storage/buckets/cost', { body, ...options });
  }
}

export interface CostCreateParams {
  /**
   * Name of the Bucket, used to address it over S3. It must be 3 to 63 characters of
   * lowercase letters, digits, dots and hyphens, start and end with a letter or
   * digit, not contain two adjacent dots and not be formatted as an IP address.
   * "admin" and "ops-api" are reserved. The name cannot be changed once the Bucket
   * is created.
   */
  name: string;

  /**
   * Project ID the Bucket belongs to.
   */
  project_id: string;

  /**
   * Region the resource is in.
   */
  region: Shared.RegionName;

  /**
   * Tags to attach to the Bucket.
   */
  tags?: Array<string>;
}

export declare namespace Cost {
  export { type CostCreateParams as CostCreateParams };
}
