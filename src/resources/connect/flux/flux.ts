// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as OperationsAPI from '../../operations';
import * as Shared from '../../shared';
import * as RoutesAPI from './routes';
import { Routes } from './routes';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class FluxResource extends APIResource {
  routes: RoutesAPI.Routes = new RoutesAPI.Routes(this._client);

  /**
   * Create a Connect Flux
   *
   * @example
   * ```ts
   * const operation = await client.connect.flux.create({
   *   bandwidth_mbps: 50,
   *   cidrs: ['10.0.0.0/16'],
   *   name: 'my-connect-flux',
   *   provider_cidrs: ['172.16.0.0/16'],
   *   region: 'us-wdc-1',
   * });
   * ```
   */
  create(body: FluxCreateParams, options?: RequestOptions): APIPromise<OperationsAPI.Operation> {
    return this._client.post('/v1/connect/flux', { body, ...options });
  }

  /**
   * Update Connect Flux details
   *
   * @example
   * ```ts
   * const operation = await client.connect.flux.update(
   *   'flux_id',
   * );
   * ```
   */
  update(
    fluxID: string,
    body: FluxUpdateParams,
    options?: RequestOptions,
  ): APIPromise<OperationsAPI.Operation> {
    return this._client.patch(path`/v1/connect/flux/${fluxID}`, { body, ...options });
  }

  /**
   * List all Connect Flux
   *
   * @example
   * ```ts
   * const fluxList = await client.connect.flux.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<FluxList> {
    return this._client.get('/v1/connect/flux', options);
  }

  /**
   * Delete Connect Flux
   *
   * @example
   * ```ts
   * const operation = await client.connect.flux.delete(
   *   'flux_id',
   * );
   * ```
   */
  delete(fluxID: string, options?: RequestOptions): APIPromise<OperationsAPI.Operation> {
    return this._client.delete(path`/v1/connect/flux/${fluxID}`, options);
  }

  /**
   * Get Connect Flux details
   *
   * @example
   * ```ts
   * const flux = await client.connect.flux.get('flux_id');
   * ```
   */
  get(fluxID: string, options?: RequestOptions): APIPromise<Flux> {
    return this._client.get(path`/v1/connect/flux/${fluxID}`, options);
  }
}

/**
 * Connect flux details.
 */
export interface Flux {
  /**
   * Unique identifier for the Connect Flux
   */
  id: string;

  /**
   * ASN
   */
  asn: number | null;

  /**
   * AWS provider configuration
   */
  aws: FluxProviderAWSConfig | null;

  /**
   * Connect Flux speed in Mbps
   */
  bandwidth_mbps: FluxBandwidthMbps;

  /**
   * CIDRs for the Connect Flux
   */
  cidrs: Array<string>;

  /**
   * When the Connect Flux was created
   */
  created_at: string;

  /**
   * Name of the Connect Flux
   */
  name: string;

  /**
   * Provider ASN
   */
  provider_asn: number | null;

  /**
   * Provider CIDRs for the Connect Flux
   */
  provider_cidrs: Array<string>;

  /**
   * Provider Router IP
   */
  provider_router_ip: string | null;

  /**
   * Region the resource is in.
   */
  region: Shared.RegionName;

  /**
   * Router IP
   */
  router_ip: string | null;

  /**
   * Status of the resource.
   */
  status: Shared.ResourceStatus;

  /**
   * When the Connect Flux was updated
   */
  updated_at: string;
}

/**
 * Connect Flux speed in Mbps
 */
export type FluxBandwidthMbps = 50 | 200 | 500 | 1000 | 2000;

export interface FluxList {
  items: Array<Flux>;
}

/**
 * AWS provider configuration
 */
export interface FluxProviderAWSConfig {
  /**
   * AWS region where the connection is established
   */
  region: string;
}

/**
 * AWS provider configuration
 */
export interface FluxProviderAWSConfigRequest {
  /**
   * AWS account id
   */
  account_id: string;

  /**
   * AWS region where the connection will be established
   */
  region: string;
}

/**
 * Routes supported for Connect Flux.
 */
export interface FluxRoute {
  /**
   * Region the resource is in.
   */
  nirvana_region: Shared.RegionName;

  /**
   * Provider name.
   */
  provider: string;

  /**
   * Provider region name.
   */
  provider_region: string;
}

export interface FluxRouteList {
  items: Array<FluxRoute>;
}

export interface FluxCreateParams {
  /**
   * Connect Flux speed in Mbps
   */
  bandwidth_mbps: FluxBandwidthMbps;

  /**
   * CIDRs for the Connect Flux
   */
  cidrs: Array<string>;

  /**
   * Name of the Connect Flux
   */
  name: string;

  /**
   * Provider CIDRs
   */
  provider_cidrs: Array<string>;

  /**
   * Region the resource is in.
   */
  region: Shared.RegionName;

  /**
   * AWS provider configuration
   */
  aws?: FluxProviderAWSConfigRequest;
}

export interface FluxUpdateParams {
  /**
   * Name of the Connect Flux.
   */
  name?: string;
}

FluxResource.Routes = Routes;

export declare namespace FluxResource {
  export {
    type Flux as Flux,
    type FluxBandwidthMbps as FluxBandwidthMbps,
    type FluxList as FluxList,
    type FluxProviderAWSConfig as FluxProviderAWSConfig,
    type FluxProviderAWSConfigRequest as FluxProviderAWSConfigRequest,
    type FluxRoute as FluxRoute,
    type FluxRouteList as FluxRouteList,
    type FluxCreateParams as FluxCreateParams,
    type FluxUpdateParams as FluxUpdateParams,
  };

  export { Routes as Routes };
}
