// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class UserResource extends APIResource {
  /**
   * Get details about an authenticated user
   */
  get(options?: RequestOptions): APIPromise<User> {
    return this._client.get('/v1/user', options);
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

export declare namespace UserResource {
  export { type User as User };
}
