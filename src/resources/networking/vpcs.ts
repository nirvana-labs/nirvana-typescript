// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as OperationsAPI from '../operations';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class VPCs extends APIResource {
  /**
   * Create a VPC
   */
  create(body: VPCCreateParams, options?: RequestOptions): APIPromise<OperationsAPI.Operation> {
    return this._client.post('/v1/networking/vpcs', { body, ...options });
  }

  /**
   * Update a VPC
   */
  update(
    vpcID: string,
    body: VPCUpdateParams,
    options?: RequestOptions,
  ): APIPromise<OperationsAPI.Operation> {
    return this._client.patch(path`/v1/networking/vpcs/${vpcID}`, { body, ...options });
  }

  /**
   * List all VPCs
   */
  list(options?: RequestOptions): APIPromise<VPCList> {
    return this._client.get('/v1/networking/vpcs', options);
  }

  /**
   * Delete a VPC
   */
  delete(vpcID: string, options?: RequestOptions): APIPromise<OperationsAPI.Operation> {
    return this._client.delete(path`/v1/networking/vpcs/${vpcID}`, options);
  }

  /**
   * Get details about a VPC
   */
  get(vpcID: string, options?: RequestOptions): APIPromise<VPC> {
    return this._client.get(path`/v1/networking/vpcs/${vpcID}`, options);
  }
}

/**
 * Subnet details.
 */
export interface Subnet {
  id: string;

  cidr: string;

  created_at: string;

  name: string;

  updated_at: string;
}

/**
 * VPC details.
 */
export interface VPC {
  id: string;

  created_at: string;

  firewall_rule_ids: Array<string>;

  name: string;

  region: Shared.RegionName;

  status: Shared.ResourceStatus;

  /**
   * Subnet details.
   */
  subnet: Subnet;

  updated_at: string;
}

export interface VPCList {
  items: Array<VPC>;
}

export interface VPCCreateParams {
  name: string;

  region: Shared.RegionName;

  subnet_name: string;
}

export interface VPCUpdateParams {
  name?: string;

  subnet_name?: string;
}

export declare namespace VPCs {
  export {
    type Subnet as Subnet,
    type VPC as VPC,
    type VPCList as VPCList,
    type VPCCreateParams as VPCCreateParams,
    type VPCUpdateParams as VPCUpdateParams,
  };
}
