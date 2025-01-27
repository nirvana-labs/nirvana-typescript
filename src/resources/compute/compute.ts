// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as VolumesAPI from './volumes';
import { Volumes } from './volumes';
import * as VMsAPI from './vms/vms';
import { VMs } from './vms/vms';

export class Compute extends APIResource {
  vms: VMsAPI.VMs = new VMsAPI.VMs(this._client);
  volumes: VolumesAPI.Volumes = new VolumesAPI.Volumes(this._client);
}

Compute.VMs = VMs;
Compute.Volumes = Volumes;

export declare namespace Compute {
  export { VMs as VMs };

  export { Volumes as Volumes };
}
