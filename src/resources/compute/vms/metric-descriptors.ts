// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class MetricDescriptors extends APIResource {
  /**
   * Describe every metric a VM reports: its name, unit, the range its values fall
   * in, and whether a value can be null. Read this instead of holding a list of
   * metric names, so a metric published later is picked up without a client change.
   *
   * @example
   * ```ts
   * const vmMetricDescriptorList =
   *   await client.compute.vms.metricDescriptors.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<VMMetricDescriptorList> {
    return this._client.get('/v1/compute/metric_descriptors', options);
  }
}

/**
 * Describes one metric a VM reports: how to name it, what its values mean, and the
 * range they fall in.
 */
export interface VMMetricDescriptor {
  /**
   * What the metric measures.
   */
  description: string;

  /**
   * Highest value the metric reports, or null when it has no ceiling of its own.
   */
  max_value: number | null;

  /**
   * Fully-qualified name of the metric, and the only spelling the metric query
   * parameter accepts.
   */
  metric: string;

  /**
   * Lowest value the metric reports.
   */
  min_value: number;

  /**
   * Whether a point's value can be null. A null means the VM reported no observation
   * for that period, which is what a stopped VM looks like.
   */
  nullable: boolean;

  /**
   * Unit the values are expressed in.
   */
  unit: Shared.VMMetricUnit;
}

export interface VMMetricDescriptorList {
  items: Array<VMMetricDescriptor>;

  /**
   * Pagination response details.
   */
  pagination: Shared.Pagination;
}

export declare namespace MetricDescriptors {
  export {
    type VMMetricDescriptor as VMMetricDescriptor,
    type VMMetricDescriptorList as VMMetricDescriptorList,
  };
}
