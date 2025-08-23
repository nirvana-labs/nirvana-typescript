// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Flux extends APIResource {
  /**
   * List all Connect Flux
   */
  list(options?: RequestOptions): APIPromise<ConnectFluxList> {
    return this._client.get('/v1/connect/flux', options);
  }

  /**
   * Get Connect Flux details
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
   * Connect flux speed in Mbps
   */
  bandwidth_mbps: 50 | 100 | 200 | 500 | 1000 | 2000 | 5000;

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
   * Region the resource is in.
   */
  region: Shared.RegionName;

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

export declare namespace Flux {
  export { type ConnectFlux as ConnectFlux, type ConnectFluxList as ConnectFluxList };
}
