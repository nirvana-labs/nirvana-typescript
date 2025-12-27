// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as SecurityAPI from './security';
import { Security, SecurityUpdateParams, UserSecurity } from './security';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class UserResource extends APIResource {
  security: SecurityAPI.Security = new SecurityAPI.Security(this._client);

  /**
   * Get details about an authenticated user
   */
  get(options?: RequestOptions): APIPromise<User> {
    return this._client.get('/v1/user', options);
  }
}

/**
 * User details.
 */
export interface User {
  /**
   * Unique identifier for the User.
   */
  id: string;

  /**
   * Email address of the user.
   */
  email: string;

  /**
   * Services that the User has access to.
   */
  services: User.Services;
}

export namespace User {
  /**
   * Services that the User has access to.
   */
  export interface Services {
    cloud?: boolean;
  }
}

UserResource.Security = Security;

export declare namespace UserResource {
  export { type User as User };

  export {
    Security as Security,
    type UserSecurity as UserSecurity,
    type SecurityUpdateParams as SecurityUpdateParams,
  };
}
