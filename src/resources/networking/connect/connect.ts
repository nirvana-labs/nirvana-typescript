// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as ConnectionsAPI from './connections';
import {
  ConnectionCreateParams,
  ConnectionListParams,
  ConnectionUpdateParams,
  Connections,
} from './connections';
import * as RoutesAPI from './routes';
import { RouteListParams, Routes } from './routes';
import { Cursor } from '../../../core/pagination';

export class Connect extends APIResource {
  connections: ConnectionsAPI.Connections = new ConnectionsAPI.Connections(this._client);
  routes: RoutesAPI.Routes = new RoutesAPI.Routes(this._client);
}

export type ConnectConnectionsCursor = Cursor<ConnectConnection>;

/**
 * Connect Connection speed in Mbps
 */
export type ConnectBandwidthMbps = 50 | 200 | 500 | 1000 | 2000;

/**
 * Connect Connection details.
 */
export interface ConnectConnection {
  /**
   * Unique identifier for the Connect Connection
   */
  id: string;

  /**
   * ASN
   */
  asn: number | null;

  /**
   * AWS provider configuration
   */
  aws: ConnectConnectionAWSConfig | null;

  /**
   * Connect Connection speed in Mbps
   */
  bandwidth_mbps: ConnectBandwidthMbps;

  /**
   * CIDRs for the Connect Connection
   */
  cidrs: Array<string>;

  /**
   * When the Connect Connection was created
   */
  created_at: string;

  /**
   * Name of the Connect Connection
   */
  name: string;

  /**
   * Provider ASN
   */
  provider_asn: number | null;

  /**
   * Provider CIDRs for the Connect Connection
   */
  provider_cidrs: Array<string>;

  /**
   * Provider Router IP for the Connect Connection
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
   * Tags to attach to the Connect Connection
   */
  tags: Array<string>;

  /**
   * When the Connect Connection was updated
   */
  updated_at: string;
}

/**
 * AWS provider configuration
 */
export interface ConnectConnectionAWSConfig {
  /**
   * AWS region where the connection is established
   */
  region: string;
}

/**
 * AWS provider configuration
 */
export interface ConnectConnectionAWSConfigRequest {
  /**
   * AWS account id
   */
  account_id: string;

  /**
   * AWS region where the connection will be established
   */
  region: string;
}

export interface ConnectConnectionList {
  items: Array<ConnectConnection>;

  /**
   * Pagination response details.
   */
  pagination?: Shared.Pagination;
}

/**
 * Routes supported for Connect.
 */
export interface ConnectRoute {
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

export interface ConnectRouteList {
  items: Array<ConnectRoute>;

  /**
   * Pagination response details.
   */
  pagination?: Shared.Pagination;
}

Connect.Connections = Connections;
Connect.Routes = Routes;

export declare namespace Connect {
  export {
    type ConnectBandwidthMbps as ConnectBandwidthMbps,
    type ConnectConnection as ConnectConnection,
    type ConnectConnectionAWSConfig as ConnectConnectionAWSConfig,
    type ConnectConnectionAWSConfigRequest as ConnectConnectionAWSConfigRequest,
    type ConnectConnectionList as ConnectConnectionList,
    type ConnectRoute as ConnectRoute,
    type ConnectRouteList as ConnectRouteList,
  };

  export {
    Connections as Connections,
    type ConnectionCreateParams as ConnectionCreateParams,
    type ConnectionUpdateParams as ConnectionUpdateParams,
    type ConnectionListParams as ConnectionListParams,
  };

  export { Routes as Routes, type RouteListParams as RouteListParams };
}
