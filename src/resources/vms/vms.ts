// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as Shared from '../shared';
import * as OperationsAPI from './operations';
import { Operations } from './operations';
import * as VPCsAPI from '../vpcs/vpcs';

export class VMs extends APIResource {
  operations: OperationsAPI.Operations = new OperationsAPI.Operations(this._client);

  /**
   * Create a VM
   */
  create(body: VMCreateParams, options?: Core.RequestOptions): Core.APIPromise<Shared.Operation> {
    return this._client.post('/vms', { body, ...options });
  }

  /**
   * Update a VM
   */
  update(
    vmId: string,
    body: VMUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Operation> {
    return this._client.patch(`/vms/${vmId}`, { body, ...options });
  }

  /**
   * List all VMs
   */
  list(query: VMListParams, options?: Core.RequestOptions): Core.APIPromise<VMListResponse> {
    return this._client.get('/vms', { query, ...options });
  }

  /**
   * Delete a VM
   */
  delete(vmId: string, options?: Core.RequestOptions): Core.APIPromise<Shared.Operation> {
    return this._client.delete(`/vms/${vmId}`, options);
  }

  /**
   * Get details about a VM
   */
  get(vmId: string, options?: Core.RequestOptions): Core.APIPromise<VM> {
    return this._client.get(`/vms/${vmId}`, options);
  }
}

/**
 * CPU details.
 */
export interface CPU {
  cores: number;
}

/**
 * RAM details.
 */
export interface Ram {
  /**
   * RAM size
   */
  size: number;

  /**
   * Unit (GB, MB, etc.)
   */
  unit: RamUnit;
}

/**
 * Unit (GB, MB, etc.)
 */
export type RamUnit = 'GB';

/**
 * SSH key details.
 */
export interface SSHKey {
  public_key: string;
}

/**
 * Storage details.
 */
export interface Storage {
  /**
   * Storage size
   */
  size: number;

  /**
   * Storage type.
   */
  type: StorageType;

  /**
   * Storage unit.
   */
  unit: StorageUnit;

  /**
   * Disk name, used later
   */
  disk_name?: string;
}

/**
 * Storage type.
 */
export type StorageType = 'nvme';

/**
 * Storage unit.
 */
export type StorageUnit = 'GB';

/**
 * VM details.
 */
export interface VM {
  id: string;

  /**
   * CPU details.
   */
  cpu_config: CPU;

  created_at: string;

  /**
   * RAM details.
   */
  mem_config: Ram;

  name: string;

  public_ip: string;

  region: Shared.RegionName;

  status: Shared.ResourceStatus;

  storage_config: Array<Storage>;

  updated_at: string;

  /**
   * VPC details.
   */
  vpc: VPCsAPI.VPC;
}

export interface VMListResponse {
  items: Array<VM>;
}

export interface VMCreateParams {
  /**
   * CPU details.
   */
  cpu: CPU;

  name: string;

  need_public_ip: boolean;

  os_image_id: number;

  ports: Array<string>;

  /**
   * RAM details.
   */
  ram: Ram;

  region: Shared.RegionName;

  source_address: string;

  /**
   * SSH key details.
   */
  ssh_key: SSHKey;

  storage: Array<Storage>;

  subnet_id?: string;
}

export interface VMUpdateParams {
  /**
   * CPU details.
   */
  cpu?: CPU;

  /**
   * RAM details.
   */
  ram?: Ram;

  storage?: Array<Storage>;
}

export interface VMListParams {
  /**
   * Region
   */
  region: string;
}

VMs.Operations = Operations;

export declare namespace VMs {
  export { Operations as Operations };
}
