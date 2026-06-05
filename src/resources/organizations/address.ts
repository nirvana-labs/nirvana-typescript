// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Address extends APIResource {
  /**
   * Create the address for an organization
   *
   * @example
   * ```ts
   * const organizationAddress =
   *   await client.organizations.address.create(
   *     'organization_id',
   *     {
   *       city: 'San Francisco',
   *       country: 'US',
   *       line1: '123 Main St',
   *       postal_code: '94105',
   *     },
   *   );
   * ```
   */
  create(
    organizationID: string,
    body: AddressCreateParams,
    options?: RequestOptions,
  ): APIPromise<OrganizationAddress> {
    return this._client.post(path`/v1/organizations/${organizationID}/address`, { body, ...options });
  }

  /**
   * Get the address for an organization
   *
   * @example
   * ```ts
   * const organizationAddress =
   *   await client.organizations.address.get('organization_id');
   * ```
   */
  get(organizationID: string, options?: RequestOptions): APIPromise<OrganizationAddress> {
    return this._client.get(path`/v1/organizations/${organizationID}/address`, options);
  }

  /**
   * Update the address for an organization
   *
   * @example
   * ```ts
   * const organizationAddress =
   *   await client.organizations.address.update(
   *     'organization_id',
   *   );
   * ```
   */
  update(
    organizationID: string,
    body: AddressUpdateParams,
    options?: RequestOptions,
  ): APIPromise<OrganizationAddress> {
    return this._client.patch(path`/v1/organizations/${organizationID}/address`, { body, ...options });
  }
}

/**
 * Organization address details.
 */
export interface OrganizationAddress {
  /**
   * Address ID.
   */
  id: string;

  /**
   * City or locality.
   */
  city: string;

  /**
   * Two-letter ISO 3166-1 alpha-2 country code.
   */
  country: string;

  /**
   * When the address was created.
   */
  created_at: string;

  /**
   * First line of the street address.
   */
  line1: string;

  /**
   * Second line of the street address. Null when not provided.
   */
  line2: string | null;

  /**
   * Organization ID the address belongs to.
   */
  organization_id: string;

  /**
   * Postal or ZIP code.
   */
  postal_code: string;

  /**
   * State, province, or region. Null when not provided.
   */
  state: string | null;

  /**
   * Tax identification number. Null when not provided.
   */
  tax_id: string | null;

  /**
   * Type of the tax identification number. Null when not provided.
   */
  tax_id_type: string | null;

  /**
   * When the address was updated.
   */
  updated_at: string;
}

export interface AddressCreateParams {
  /**
   * City or locality.
   */
  city: string;

  /**
   * Two-letter ISO 3166-1 alpha-2 country code.
   */
  country: string;

  /**
   * First line of the street address.
   */
  line1: string;

  /**
   * Postal or ZIP code.
   */
  postal_code: string;

  /**
   * Second line of the street address (suite, unit, building).
   */
  line2?: string;

  /**
   * State, province, or region. Required by some tax jurisdictions (e.g. US, CA).
   */
  state?: string;

  /**
   * Tax identification number (e.g. VAT, EIN, ABN). Optional.
   */
  tax_id?: string;

  /**
   * Type of the tax identification number (e.g. eu_vat, us_ein, gb_vat, au_abn).
   * Optional.
   */
  tax_id_type?: string;
}

export interface AddressUpdateParams {
  /**
   * City or locality.
   */
  city?: string;

  /**
   * Two-letter ISO 3166-1 alpha-2 country code.
   */
  country?: string;

  /**
   * First line of the street address.
   */
  line1?: string;

  /**
   * Second line of the street address (suite, unit, building). Omit to leave
   * unchanged, send null to clear, or send a value to set it.
   */
  line2?: string | null;

  /**
   * Postal or ZIP code.
   */
  postal_code?: string;

  /**
   * State, province, or region. Omit to leave unchanged, send null to clear, or send
   * a value to set it.
   */
  state?: string | null;

  /**
   * Tax identification number (e.g. VAT, EIN, ABN). Omit to leave unchanged, send
   * null to clear, or send a value to set it.
   */
  tax_id?: string | null;

  /**
   * Type of the tax identification number (e.g. eu_vat, us_ein, gb_vat, au_abn).
   * Omit to leave unchanged, send null to clear, or send a value to set it.
   */
  tax_id_type?: string | null;
}

export declare namespace Address {
  export {
    type OrganizationAddress as OrganizationAddress,
    type AddressCreateParams as AddressCreateParams,
    type AddressUpdateParams as AddressUpdateParams,
  };
}
