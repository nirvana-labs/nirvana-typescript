// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as FlexAPI from './flex/flex';
import {
  Flex,
  RPCNodesFlex,
  RPCNodesFlexBlockchain,
  RPCNodesFlexBlockchainList,
  RPCNodesFlexList,
} from './flex/flex';

export class RPCNodes extends APIResource {
  flex: FlexAPI.Flex = new FlexAPI.Flex(this._client);
}

RPCNodes.Flex = Flex;

export declare namespace RPCNodes {
  export {
    Flex as Flex,
    type RPCNodesFlex as RPCNodesFlex,
    type RPCNodesFlexBlockchain as RPCNodesFlexBlockchain,
    type RPCNodesFlexBlockchainList as RPCNodesFlexBlockchainList,
    type RPCNodesFlexList as RPCNodesFlexList,
  };
}
