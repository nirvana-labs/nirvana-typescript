// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as DedicatedAPI from './dedicated/dedicated';
import {
  Dedicated,
  DedicatedBlockchain,
  DedicatedBlockchainList,
  DedicatedList,
  DedicatedListParams,
  DedicatedResource,
  DedicatedsCursor,
} from './dedicated/dedicated';
import * as FlexAPI from './flex/flex';
import {
  Flex,
  FlexBlockchain,
  FlexBlockchainList,
  FlexCreateParams,
  FlexList,
  FlexListParams,
  FlexResource,
  FlexUpdateParams,
  FlexesCursor,
} from './flex/flex';

export class RPCNodes extends APIResource {
  flex: FlexAPI.FlexResource = new FlexAPI.FlexResource(this._client);
  dedicated: DedicatedAPI.DedicatedResource = new DedicatedAPI.DedicatedResource(this._client);
}

RPCNodes.FlexResource = FlexResource;
RPCNodes.DedicatedResource = DedicatedResource;

export declare namespace RPCNodes {
  export {
    FlexResource as FlexResource,
    type Flex as Flex,
    type FlexBlockchain as FlexBlockchain,
    type FlexBlockchainList as FlexBlockchainList,
    type FlexList as FlexList,
    type FlexesCursor as FlexesCursor,
    type FlexCreateParams as FlexCreateParams,
    type FlexUpdateParams as FlexUpdateParams,
    type FlexListParams as FlexListParams,
  };

  export {
    DedicatedResource as DedicatedResource,
    type Dedicated as Dedicated,
    type DedicatedBlockchain as DedicatedBlockchain,
    type DedicatedBlockchainList as DedicatedBlockchainList,
    type DedicatedList as DedicatedList,
    type DedicatedsCursor as DedicatedsCursor,
    type DedicatedListParams as DedicatedListParams,
  };
}
