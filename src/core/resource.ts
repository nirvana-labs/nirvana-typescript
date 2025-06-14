// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { NirvanaLabs } from '../client';

export abstract class APIResource {
  protected _client: NirvanaLabs;

  constructor(client: NirvanaLabs) {
    this._client = client;
  }
}
