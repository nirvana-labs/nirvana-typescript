// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

export class Availability extends APIResource {
  /**
   * Check if a Bucket can be created
   *
   * @example
   * ```ts
   * await client.storage.buckets.availability.create({
   *   name: 'my-bucket',
   *   project_id: '123e4567-e89b-12d3-a456-426614174000',
   *   region: 'us-sva-2',
   * });
   * ```
   */
  create(body: AvailabilityCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/v1/storage/buckets/availability', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface AvailabilityCreateParams {
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

export declare namespace Availability {
  export { type AvailabilityCreateParams as AvailabilityCreateParams };
}
