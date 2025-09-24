// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as FluxAPI from './flux/flux';
import { ConnectFlux, ConnectFluxList, Flux, FluxCreateParams, FluxUpdateParams } from './flux/flux';

export class Connect extends APIResource {
  flux: FluxAPI.Flux = new FluxAPI.Flux(this._client);
}

Connect.Flux = Flux;

export declare namespace Connect {
  export {
    Flux as Flux,
    type ConnectFlux as ConnectFlux,
    type ConnectFluxList as ConnectFluxList,
    type FluxCreateParams as FluxCreateParams,
    type FluxUpdateParams as FluxUpdateParams,
  };
}
