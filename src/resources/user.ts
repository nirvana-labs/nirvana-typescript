// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class UserResource extends APIResource {
  /**
   * Get details about an authenticated user
   */
  get(options?: Core.RequestOptions): Core.APIPromise<User> {
    return this._client.get('/user', options);
  }
}

export interface User {
  id: string;

  email: string;

  services: User.Services;
}

export namespace User {
  export interface Services {
    cloud?: boolean;
  }
}
