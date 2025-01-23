// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';

export class Volumes extends APIResource {}

/**
 * Storage type.
 */
export type StorageType = 'nvme';

/**
 * Volume details.
 */
export interface Volume {
  id: string;

  size: number;

  /**
   * Storage type.
   */
  type: StorageType;
}
