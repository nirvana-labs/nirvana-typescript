// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Security extends APIResource {
  /**
   * Update the current user's security settings
   */
  update(body: SecurityUpdateParams, options?: RequestOptions): APIPromise<UserSecurity> {
    return this._client.patch('/v1/user/security', { body, ...options });
  }

  /**
   * Get the current user's security settings
   */
  get(options?: RequestOptions): APIPromise<UserSecurity> {
    return this._client.get('/v1/user/security', options);
  }
}

/**
 * User security settings response.
 */
export interface UserSecurity {
  /**
   * IP filter rules.
   */
  source_ip_rule: UserSecurity.SourceIPRule;

  /**
   * When the user security settings were created.
   */
  created_at?: string;

  /**
   * When the user security settings were updated.
   */
  updated_at?: string;
}

export namespace UserSecurity {
  /**
   * IP filter rules.
   */
  export interface SourceIPRule {
    /**
     * List of IPv4 CIDR addresses to allow.
     */
    allowed: Array<string>;

    /**
     * List of IPv4 CIDR addresses to deny.
     */
    blocked: Array<string>;
  }
}

export interface SecurityUpdateParams {
  /**
   * IP filter rules.
   */
  source_ip_rule?: Shared.SourceIPRule;
}

export declare namespace Security {
  export { type UserSecurity as UserSecurity, type SecurityUpdateParams as SecurityUpdateParams };
}
