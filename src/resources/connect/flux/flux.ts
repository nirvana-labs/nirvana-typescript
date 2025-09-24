// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as OperationsAPI from '../../operations';
import * as Shared from '../../shared';
import * as ProvidersAPI from './providers';
import { Providers } from './providers';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Flux extends APIResource {
  providers: ProvidersAPI.Providers = new ProvidersAPI.Providers(this._client);

  /**
   * Create a Connect Flux
   *
   * @example
   * ```ts
   * const operation = await client.connect.flux.create({
   *   bandwidth_mbps: 50,
   *   cidrs: ['10.0.0.0/16'],
   *   name: 'my_aws_direct_connect',
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
   * const connectFluxList = await client.connect.flux.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<ConnectFluxList> {
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
   * const connectFlux = await client.connect.flux.get(
   *   'flux_id',
   * );
   * ```
   */
  get(fluxID: string, options?: RequestOptions): APIPromise<ConnectFlux> {
    return this._client.get(path`/v1/connect/flux/${fluxID}`, options);
  }
}

/**
 * Connect flux details.
 */
export interface ConnectFlux {
  /**
   * Unique identifier for the connect flux
   */
  id: string;

  /**
   * ASN
   */
  asn: number | null;

  /**
   * Connect flux speed in Mbps
   */
  bandwidth_mbps: 50 | 200 | 500;

  /**
   * CIDRs
   */
  cidrs: Array<string>;

  /**
   * When the connect flux was created
   */
  created_at: string;

  /**
   * Name of the connect flux
   */
  name: string;

  /**
   * Provider ASN
   */
  provider_asn: number | null;

  /**
   * Provider CIDRs
   */
  provider_cidrs: Array<string>;

  /**
   * Provider name
   */
  provider_name: string;

  /**
   * Provider region
   */
  provider_region: string;

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
   * When the connect flux was updated
   */
  updated_at: string;
}

export interface ConnectFluxList {
  items: Array<ConnectFlux>;
}

/**
 * Provider supported for Connect Flux.
 */
export interface ConnectFluxProvider {
  /**
   * Provider name.
   */
  name: string;

  /**
   * Provider region name.
   */
  region: string;
}

export interface ConnectFluxProviderList {
  items: Array<ConnectFluxProvider>;
}

export interface FluxCreateParams {
  /**
   * Connect flux speed in Mbps
   */
  bandwidth_mbps: 50 | 200 | 500;

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
  aws?: FluxCreateParams.Aws;
}

export namespace FluxCreateParams {
  /**
   * AWS provider configuration
   */
  export interface Aws {
    /**
     * AWS account number
     */
    account_number: string;

    /**
     * AWS region where the connection will be established
     */
    region: string;
  }
}

export interface FluxUpdateParams {
  /**
   * Name of the Connect Flux.
   */
  name?: string;
}

Flux.Providers = Providers;

export declare namespace Flux {
  export {
    type ConnectFlux as ConnectFlux,
    type ConnectFluxList as ConnectFluxList,
    type ConnectFluxProvider as ConnectFluxProvider,
    type ConnectFluxProviderList as ConnectFluxProviderList,
    type FluxCreateParams as FluxCreateParams,
    type FluxUpdateParams as FluxUpdateParams,
  };

  export { Providers as Providers };
}
