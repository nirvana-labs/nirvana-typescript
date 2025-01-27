// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as VolumesAPI from './volumes';
import {
  StorageType,
  Volume,
  VolumeCreateParams,
  VolumeDeleteParams,
  VolumeKind,
  VolumeListResponse,
  VolumeUpdateParams,
  Volumes,
} from './volumes';
import * as VMsAPI from './vms/vms';
import { CPU, OSImage, Ram, SSHKey, VM, VMCreateParams, VMList, VMUpdateParams, VMs } from './vms/vms';

export class Compute extends APIResource {
  vms: VMsAPI.VMs = new VMsAPI.VMs(this._client);
  volumes: VolumesAPI.Volumes = new VolumesAPI.Volumes(this._client);
}

Compute.VMs = VMs;
Compute.Volumes = Volumes;

export declare namespace Compute {
  export {
    VMs as VMs,
    type CPU as CPU,
    type OSImage as OSImage,
    type Ram as Ram,
    type SSHKey as SSHKey,
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
    type VolumeListResponse as VolumeListResponse,
    type VolumeCreateParams as VolumeCreateParams,
    type VolumeUpdateParams as VolumeUpdateParams,
    type VolumeDeleteParams as VolumeDeleteParams,
  };
}
