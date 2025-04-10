// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NirvanaLabs from '@nirvana-labs/nirvana';
import { Tool } from '@modelcontextprotocol/sdk/types.js';

import get_user from './user/get-user';
import create_api_keys from './api-keys/create-api-keys';
import update_api_keys from './api-keys/update-api-keys';
import list_api_keys from './api-keys/list-api-keys';
import delete_api_keys from './api-keys/delete-api-keys';
import get_api_keys from './api-keys/get-api-keys';
import list_operations from './operations/list-operations';
import get_operations from './operations/get-operations';
import create_compute_vms from './compute/vms/create-compute-vms';
import update_compute_vms from './compute/vms/update-compute-vms';
import list_compute_vms from './compute/vms/list-compute-vms';
import delete_compute_vms from './compute/vms/delete-compute-vms';
import get_compute_vms from './compute/vms/get-compute-vms';
import list_vms_compute_volumes from './compute/vms/volumes/list-vms-compute-volumes';
import list_vms_compute_os_images from './compute/vms/os-images/list-vms-compute-os-images';
import create_compute_volumes from './compute/volumes/create-compute-volumes';
import update_compute_volumes from './compute/volumes/update-compute-volumes';
import list_compute_volumes from './compute/volumes/list-compute-volumes';
import delete_compute_volumes from './compute/volumes/delete-compute-volumes';
import get_compute_volumes from './compute/volumes/get-compute-volumes';
import create_networking_vpcs from './networking/vpcs/create-networking-vpcs';
import update_networking_vpcs from './networking/vpcs/update-networking-vpcs';
import list_networking_vpcs from './networking/vpcs/list-networking-vpcs';
import delete_networking_vpcs from './networking/vpcs/delete-networking-vpcs';
import get_networking_vpcs from './networking/vpcs/get-networking-vpcs';
import create_networking_firewall_rules from './networking/firewall-rules/create-networking-firewall-rules';
import update_networking_firewall_rules from './networking/firewall-rules/update-networking-firewall-rules';
import list_networking_firewall_rules from './networking/firewall-rules/list-networking-firewall-rules';
import delete_networking_firewall_rules from './networking/firewall-rules/delete-networking-firewall-rules';
import get_networking_firewall_rules from './networking/firewall-rules/get-networking-firewall-rules';

export type HandlerFunction = (client: NirvanaLabs, args: any) => Promise<any>;

export type Metadata = {
  resource: string;
  operation: 'read' | 'write';
  tags: string[];
};

export type Endpoint = {
  metadata: Metadata;
  tool: Tool;
  handler: HandlerFunction;
};

export const endpoints: Endpoint[] = [];

function addEndpoint(endpoint: Endpoint) {
  endpoints.push(endpoint);
}

addEndpoint(get_user);
addEndpoint(create_api_keys);
addEndpoint(update_api_keys);
addEndpoint(list_api_keys);
addEndpoint(delete_api_keys);
addEndpoint(get_api_keys);
addEndpoint(list_operations);
addEndpoint(get_operations);
addEndpoint(create_compute_vms);
addEndpoint(update_compute_vms);
addEndpoint(list_compute_vms);
addEndpoint(delete_compute_vms);
addEndpoint(get_compute_vms);
addEndpoint(list_vms_compute_volumes);
addEndpoint(list_vms_compute_os_images);
addEndpoint(create_compute_volumes);
addEndpoint(update_compute_volumes);
addEndpoint(list_compute_volumes);
addEndpoint(delete_compute_volumes);
addEndpoint(get_compute_volumes);
addEndpoint(create_networking_vpcs);
addEndpoint(update_networking_vpcs);
addEndpoint(list_networking_vpcs);
addEndpoint(delete_networking_vpcs);
addEndpoint(get_networking_vpcs);
addEndpoint(create_networking_firewall_rules);
addEndpoint(update_networking_firewall_rules);
addEndpoint(list_networking_firewall_rules);
addEndpoint(delete_networking_firewall_rules);
addEndpoint(get_networking_firewall_rules);

export type Filter = {
  type: 'resource' | 'operation' | 'tag' | 'tool';
  op: 'include' | 'exclude';
  value: string;
};

export function query(filters: Filter[], endpoints: Endpoint[]): Endpoint[] {
  if (filters.length === 0) {
    return endpoints;
  }
  const allExcludes = filters.every((filter) => filter.op === 'exclude');

  return endpoints.filter((endpoint: Endpoint) => {
    let included = false || allExcludes;

    for (const filter of filters) {
      if (match(filter, endpoint)) {
        included = filter.op === 'include';
      }
    }

    return included;
  });
}

function match({ type, value }: Filter, endpoint: Endpoint): boolean {
  switch (type) {
    case 'resource': {
      const regexStr = '^' + normalizeResource(value).replace(/\*/g, '.*') + '$';
      const regex = new RegExp(regexStr);
      return regex.test(normalizeResource(endpoint.metadata.resource));
    }
    case 'operation':
      return endpoint.metadata.operation === value;
    case 'tag':
      return endpoint.metadata.tags.includes(value);
    case 'tool':
      return endpoint.tool.name === value;
  }
}

function normalizeResource(resource: string): string {
  return resource.toLowerCase().replace(/[^a-z.*\-_]*/g, '');
}
