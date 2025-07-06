// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as BlockchainsAPI from './blockchains';
import { Blockchains } from './blockchains';

export class Flex extends APIResource {
  blockchains: BlockchainsAPI.Blockchains = new BlockchainsAPI.Blockchains(this._client);
}

Flex.Blockchains = Blockchains;

export declare namespace Flex {
  export { Blockchains as Blockchains };
}
