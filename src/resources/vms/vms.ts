// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as OperationsAPI from './operations';
import { OperationRetrieveResponse, Operations } from './operations';
import * as VpcsAPI from '../vpcs/vpcs';

export class Vms extends APIResource {
  operations: OperationsAPI.Operations = new OperationsAPI.Operations(this._client);

  /**
   * Create a VM
   */
  create(body: VmCreateParams, options?: Core.RequestOptions): Core.APIPromise<VmCreateResponse> {
    return this._client.post('/vms', { body, ...options });
  }

  /**
   * Get details about a VM
   */
  retrieve(vmId: string, options?: Core.RequestOptions): Core.APIPromise<Vm> {
    return this._client.get(`/vms/${vmId}`, options);
  }

  /**
   * Update a VM
   */
  update(
    vmId: string,
    body: VmUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<VmUpdateResponse> {
    return this._client.patch(`/vms/${vmId}`, { body, ...options });
  }

  /**
   * List all VMs
   */
  list(query: VmListParams, options?: Core.RequestOptions): Core.APIPromise<VmListResponse> {
    return this._client.get('/vms', { query, ...options });
  }

  /**
   * Delete a VM
   */
  delete(vmId: string, options?: Core.RequestOptions): Core.APIPromise<VmDeleteResponse> {
    return this._client.delete(`/vms/${vmId}`, options);
  }
}

/**
 * VM details.
 */
export interface Vm {
  id: string;

  /**
   * CPU details.
   */
  cpu_config: Vm.CPUConfig;

  created_at: string;

  /**
   * RAM details.
   */
  mem_config: Vm.MemConfig;

  name: string;

  public_ip: string;

  region:
    | 'amsterdam'
    | 'chicago'
    | 'frankfurt'
    | 'hongkong'
    | 'london'
    | 'mumbai'
    | 'saopaulo'
    | 'seattle'
    | 'siliconvalley'
    | 'singapore'
    | 'stockholm'
    | 'sydney'
    | 'tokyo'
    | 'washingtondc'
    | 'staging';

  status: 'PENDING' | 'CREATING' | 'UPDATING' | 'READY' | 'DELETING' | 'DELETED' | 'FAILED';

  storage_config: Array<Vm.StorageConfig>;

  updated_at: string;

  /**
   * VPC details.
   */
  vpc: VpcsAPI.Vpc;
}

export namespace Vm {
  /**
   * CPU details.
   */
  export interface CPUConfig {
    cores: number;
  }

  /**
   * RAM details.
   */
  export interface MemConfig {
    /**
     * RAM size
     */
    size: number;

    /**
     * Unit (GB, MB, etc.)
     */
    unit: 'GB';
  }

  /**
   * Storage details.
   */
  export interface StorageConfig {
    /**
     * Storage size
     */
    size: number;

    /**
     * Storage type.
     */
    type: 'nvme';

    /**
     * Storage unit.
     */
    unit: 'GB';

    /**
     * Disk name, used later
     */
    disk_name?: string;
  }
}

/**
 * Operation details.
 */
export interface VmCreateResponse {
  id: string;

  kind: 'VM' | 'VPC' | 'FIREWALL_RULE';

  resource_id: string;

  status: 'PENDING' | 'RUNNING' | 'DONE' | 'FAILED';

  type: 'CREATE' | 'UPDATE' | 'DELETE';
}

/**
 * Operation details.
 */
export interface VmUpdateResponse {
  id: string;

  kind: 'VM' | 'VPC' | 'FIREWALL_RULE';

  resource_id: string;

  status: 'PENDING' | 'RUNNING' | 'DONE' | 'FAILED';

  type: 'CREATE' | 'UPDATE' | 'DELETE';
}

export interface VmListResponse {
  items: Array<Vm>;
}

/**
 * Operation details.
 */
export interface VmDeleteResponse {
  id: string;

  kind: 'VM' | 'VPC' | 'FIREWALL_RULE';

  resource_id: string;

  status: 'PENDING' | 'RUNNING' | 'DONE' | 'FAILED';

  type: 'CREATE' | 'UPDATE' | 'DELETE';
}

export interface VmCreateParams {
  /**
   * CPU details.
   */
  cpu: VmCreateParams.CPU;

  name: string;

  need_public_ip: boolean;

  os_image_id: number;

  ports: Array<string>;

  /**
   * RAM details.
   */
  ram: VmCreateParams.Ram;

  region:
    | 'amsterdam'
    | 'chicago'
    | 'frankfurt'
    | 'hongkong'
    | 'london'
    | 'mumbai'
    | 'saopaulo'
    | 'seattle'
    | 'siliconvalley'
    | 'singapore'
    | 'stockholm'
    | 'sydney'
    | 'tokyo'
    | 'washingtondc'
    | 'staging';

  source_address: string;

  /**
   * SSH key details.
   */
  ssh_key: VmCreateParams.SSHKey;

  storage: Array<VmCreateParams.Storage>;

  subnet_id?: string;
}

export namespace VmCreateParams {
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
    unit: 'GB';
  }

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
    type: 'nvme';

    /**
     * Storage unit.
     */
    unit: 'GB';

    /**
     * Disk name, used later
     */
    disk_name?: string;
  }
}

export interface VmUpdateParams {
  /**
   * CPU details.
   */
  cpu?: VmUpdateParams.CPU;

  /**
   * RAM details.
   */
  ram?: VmUpdateParams.Ram;

  storage?: Array<VmUpdateParams.Storage>;
}

export namespace VmUpdateParams {
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
    unit: 'GB';
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
    type: 'nvme';

    /**
     * Storage unit.
     */
    unit: 'GB';

    /**
     * Disk name, used later
     */
    disk_name?: string;
  }
}

export interface VmListParams {
  /**
   * Region
   */
  region: string;
}

Vms.Operations = Operations;

export declare namespace Vms {
  export {
    type Vm as Vm,
    type VmCreateResponse as VmCreateResponse,
    type VmUpdateResponse as VmUpdateResponse,
    type VmListResponse as VmListResponse,
    type VmDeleteResponse as VmDeleteResponse,
    type VmCreateParams as VmCreateParams,
    type VmUpdateParams as VmUpdateParams,
    type VmListParams as VmListParams,
  };

  export { Operations as Operations, type OperationRetrieveResponse as OperationRetrieveResponse };
}
