// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as FluxAPI from './flux/flux';
import {
  Flux,
  FluxBandwidthMbps,
  FluxCreateParams,
  FluxList,
  FluxProviderAWSConfig,
  FluxProviderAWSConfigRequest,
  FluxResource,
  FluxRoute,
  FluxRouteList,
  FluxUpdateParams,
} from './flux/flux';

export class Connect extends APIResource {
  flux: FluxAPI.FluxResource = new FluxAPI.FluxResource(this._client);
}

Connect.FluxResource = FluxResource;

export declare namespace Connect {
  export {
    FluxResource as FluxResource,
    type Flux as Flux,
    type FluxBandwidthMbps as FluxBandwidthMbps,
    type FluxList as FluxList,
    type FluxProviderAWSConfig as FluxProviderAWSConfig,
    type FluxProviderAWSConfigRequest as FluxProviderAWSConfigRequest,
    type FluxRoute as FluxRoute,
    type FluxRouteList as FluxRouteList,
    type FluxCreateParams as FluxCreateParams,
    type FluxUpdateParams as FluxUpdateParams,
  };
}
