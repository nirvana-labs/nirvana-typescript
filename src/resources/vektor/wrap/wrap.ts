// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as UnwrapAPI from './unwrap';
import { Unwrap, UnwrapCreateParams } from './unwrap';
import * as WrapAPI from './wrap_';
import { Wrap as WrapAPIWrap, WrapCreateParams } from './wrap_';

export class Wrap extends APIResource {
  wrap: WrapAPI.Wrap = new WrapAPI.Wrap(this._client);
  unwrap: UnwrapAPI.Unwrap = new UnwrapAPI.Unwrap(this._client);
}

Wrap.Wrap = WrapAPIWrap;
Wrap.Unwrap = Unwrap;

export declare namespace Wrap {
  export { WrapAPIWrap as Wrap, type WrapCreateParams as WrapCreateParams };

  export { Unwrap as Unwrap, type UnwrapCreateParams as UnwrapCreateParams };
}
