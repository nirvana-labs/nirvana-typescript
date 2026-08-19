// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Metrics extends APIResource {
  /**
   * Read a VM's resource metrics over an interval. Every series covers the same
   * periods, so they line up index for index, and a period the VM reported no
   * observation for carries a null value.
   *
   * @example
   * ```ts
   * const vmMetrics = await client.compute.vms.metrics.list(
   *   'vm_id',
   * );
   * ```
   */
  list(
    vmID: string,
    query: MetricListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<VMMetrics> {
    return this._client.get(path`/v1/compute/vms/${vmID}/metrics`, { query, ...options });
  }
}

/**
 * One period's value.
 */
export interface VMMetricPoint {
  /**
   * End of the period the value covers, so a point timestamped 00:05 over
   * five-minute periods describes 00:00 through 00:05.
   */
  timestamp: string;

  /**
   * Value over the period, in the series' unit. Null means the VM reported no
   * observation for this period, which is what a stopped VM looks like.
   */
  value: number | null;
}

/**
 * One metric's values over the interval served.
 */
export interface VMMetricSeries {
  /**
   * Fully-qualified name of the metric.
   */
  metric: string;

  /**
   * Values over the interval, oldest first. Every series in a response covers the
   * same periods, so they line up index for index.
   */
  points: Array<VMMetricPoint>;

  /**
   * Unit the values are expressed in.
   */
  unit: Shared.VMMetricUnit;
}

/**
 * A VM's metrics over an interval: one series per metric, on a shared grid of
 * periods.
 */
export interface VMMetrics {
  /**
   * How the samples inside one period were folded into a single value.
   */
  aggregation: 'mean' | 'max' | 'min';

  /**
   * End of the interval served, exclusive.
   */
  end_time: string;

  /**
   * One series per requested metric, in the order they were requested.
   */
  metrics: Array<VMMetricSeries>;

  /**
   * Width of one period, and so the spacing between consecutive points.
   */
  period: '5m' | '15m' | '1h' | '6h' | '24h';

  /**
   * Start of the interval served, inclusive. It can be later than the requested
   * start when the request asked for more than the available history.
   */
  start_time: string;

  /**
   * ID of the VM the series belong to.
   */
  vm_id: string;
}

export interface MetricListParams {
  /**
   * How the samples inside one period are folded into a single value.
   */
  aggregation?: 'mean' | 'max' | 'min';

  /**
   * End of the interval, exclusive, as an RFC 3339 timestamp. Defaults to now.
   */
  end_time?: string;

  /**
   * Metric to return. Repeat the parameter for several; every metric is returned
   * when it is left out.
   */
  metric?: Array<
    | 'compute.nirvanalabs.io/vm/cpu/used_cores'
    | 'compute.nirvanalabs.io/vm/cpu/utilization'
    | 'compute.nirvanalabs.io/vm/memory/used_bytes'
    | 'compute.nirvanalabs.io/vm/memory/utilization'
    | 'compute.nirvanalabs.io/vm/disk/read_bytes'
    | 'compute.nirvanalabs.io/vm/disk/write_bytes'
    | 'compute.nirvanalabs.io/vm/disk/read_ops'
    | 'compute.nirvanalabs.io/vm/disk/write_ops'
    | 'compute.nirvanalabs.io/vm/network/rx_bytes'
    | 'compute.nirvanalabs.io/vm/network/tx_bytes'
  >;

  /**
   * Width of one period, and so the spacing between points. An interval holding more
   * than 1440 periods is rejected; the error names a period that fits.
   */
  period?: '5m' | '15m' | '1h' | '6h' | '24h';

  /**
   * Start of the interval, inclusive, as an RFC 3339 timestamp. Defaults to an hour
   * before end_time. A start older than the 30 days of history kept is served from
   * where that history begins.
   */
  start_time?: string;
}

export declare namespace Metrics {
  export {
    type VMMetricPoint as VMMetricPoint,
    type VMMetricSeries as VMMetricSeries,
    type VMMetrics as VMMetrics,
    type MetricListParams as MetricListParams,
  };
}
