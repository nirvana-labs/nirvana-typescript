// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as OperationsAPI from '../../operations';
import * as Shared from '../../shared';
import * as ConnectAPI from './connect';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Connections extends APIResource {
  /**
   * Create a Connect Connection
   *
   * @example
   * ```ts
   * const operation =
   *   await client.networking.connect.connections.create({
   *     bandwidth_mbps: 50,
   *     cidrs: ['10.0.0.0/16'],
   *     name: 'my-connect-connection',
   *     provider_cidrs: ['172.16.0.0/16'],
   *     region: 'us-wdc-1',
   *   });
   * ```
   */
  create(body: ConnectionCreateParams, options?: RequestOptions): APIPromise<OperationsAPI.Operation> {
    return this._client.post('/v1/networking/connect/connections', { body, ...options });
  }

  /**
   * Update Connect Connection details
   *
   * @example
   * ```ts
   * const operation =
   *   await client.networking.connect.connections.update(
   *     'connection_id',
   *   );
   * ```
   */
  update(
    connectionID: string,
    body: ConnectionUpdateParams,
    options?: RequestOptions,
  ): APIPromise<OperationsAPI.Operation> {
    return this._client.patch(path`/v1/networking/connect/connections/${connectionID}`, { body, ...options });
  }

  /**
   * List all Connect Connections
   *
   * @example
   * ```ts
   * const connectConnectionList =
   *   await client.networking.connect.connections.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<ConnectAPI.ConnectConnectionList> {
    return this._client.get('/v1/networking/connect/connections', options);
  }

  /**
   * Delete Connect Connection
   *
   * @example
   * ```ts
   * const operation =
   *   await client.networking.connect.connections.delete(
   *     'connection_id',
   *   );
   * ```
   */
  delete(connectionID: string, options?: RequestOptions): APIPromise<OperationsAPI.Operation> {
    return this._client.delete(path`/v1/networking/connect/connections/${connectionID}`, options);
  }

  /**
   * Get Connect Connection details
   *
   * @example
   * ```ts
   * const connectConnection =
   *   await client.networking.connect.connections.get(
   *     'connection_id',
   *   );
   * ```
   */
  get(connectionID: string, options?: RequestOptions): APIPromise<ConnectAPI.ConnectConnection> {
    return this._client.get(path`/v1/networking/connect/connections/${connectionID}`, options);
  }
}

export interface ConnectionCreateParams {
  /**
   * Connect Connection speed in Mbps
   */
  bandwidth_mbps: ConnectAPI.ConnectBandwidthMbps;

  /**
   * CIDRs for the Connect Connection
   */
  cidrs: Array<string>;

  /**
   * Name of the Connect Connection
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
  aws?: ConnectAPI.ConnectConnectionAWSConfigRequest;

  /**
   * Tags to attach to the Connect Connection
   */
  tags?: Array<string>;
}

export interface ConnectionUpdateParams {
  /**
   * Name of the Connect Connection.
   */
  name?: string;

  /**
   * Tags to attach to the Connect Connection
   */
  tags?: Array<string>;
}

export declare namespace Connections {
  export {
    type ConnectionCreateParams as ConnectionCreateParams,
    type ConnectionUpdateParams as ConnectionUpdateParams,
  };
}
