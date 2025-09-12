// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as VMsAPI from './vms/vms';
import {
  CPUConfig,
  CPUConfigRequest,
  MemoryConfig,
  MemoryConfigRequest,
  OSImage,
  SSHKeyRequest,
  VM,
  VMCreateParams,
  VMList,
  VMUpdateParams,
  VMs,
} from './vms/vms';
import * as VolumesAPI from './volumes/volumes';
import {
  StorageType,
  Volume,
  VolumeCreateParams,
  VolumeKind,
  VolumeList,
  VolumeUpdateParams,
  Volumes,
} from './volumes/volumes';

export class Compute extends APIResource {
  vms: VMsAPI.VMs = new VMsAPI.VMs(this._client);
  volumes: VolumesAPI.Volumes = new VolumesAPI.Volumes(this._client);
}

Compute.VMs = VMs;
Compute.Volumes = Volumes;

export declare namespace Compute {
  export {
    VMs as VMs,
    type CPUConfig as CPUConfig,
    type CPUConfigRequest as CPUConfigRequest,
    type MemoryConfig as MemoryConfig,
    type MemoryConfigRequest as MemoryConfigRequest,
    type OSImage as OSImage,
    type SSHKeyRequest as SSHKeyRequest,
    type VM as VM,
    type VMList as VMList,
    type VMCreateParams as VMCreateParams,
    type VMUpdateParams as VMUpdateParams,
  };

  export {
    Volumes as Volumes,
    type StorageType as StorageType,
    type Volume as Volume,
    type VolumeKind as VolumeKind,
    type VolumeList as VolumeList,
    type VolumeCreateParams as VolumeCreateParams,
    type VolumeUpdateParams as VolumeUpdateParams,
  };
}
