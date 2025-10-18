// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as RoutesAPI from './routes';
import { Routes } from './routes';

export class Flux extends APIResource {
  routes: RoutesAPI.Routes = new RoutesAPI.Routes(this._client);
}

Flux.Routes = Routes;

export declare namespace Flux {
  export { Routes as Routes };
}
