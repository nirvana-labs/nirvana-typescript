// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as OperationsAPI from '../../operations/operations';
import * as ConnectAPI from './connect';
import { ConnectConnectionsCursor } from './connect';
import { APIPromise } from '../../../core/api-promise';
import { Cursor, type CursorParams, PagePromise } from '../../../core/pagination';
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
   *     project_id: '123e4567-e89b-12d3-a456-426614174000',
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
   * // Automatically fetches more pages as needed.
   * for await (const connectConnection of client.networking.connect.connections.list(
   *   { project_id: 'project_id' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    query: ConnectionListParams,
    options?: RequestOptions,
  ): PagePromise<ConnectConnectionsCursor, ConnectAPI.ConnectConnection> {
    return this._client.getAPIList(
      '/v1/networking/connect/connections',
      Cursor<ConnectAPI.ConnectConnection>,
      { query, ...options },
    );
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
   * CIDRs for the Connect Connection. Must be in network-aligned/canonical form.
   */
  cidrs: Array<string>;

  /**
   * Name of the Connect Connection
   */
  name: string;

  /**
   * Project ID the Connect Connection belongs to
   */
  project_id: string;

  /**
   * Provider CIDRs. Must be in network-aligned/canonical form.
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

export interface ConnectionListParams extends CursorParams {
  /**
   * Project ID of resources to request
   */
  project_id: string;
}

export declare namespace Connections {
  export {
    type ConnectionCreateParams as ConnectionCreateParams,
    type ConnectionUpdateParams as ConnectionUpdateParams,
    type ConnectionListParams as ConnectionListParams,
  };
}

export { type ConnectConnectionsCursor };
