// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { McpOptions } from './options';

export type SdkMethod = {
  clientCallName: string;
  fullyQualifiedName: string;
  httpMethod?: 'get' | 'post' | 'put' | 'patch' | 'delete' | 'query';
  httpPath?: string;
};

export const sdkMethods: SdkMethod[] = [
  {
    clientCallName: 'client.user.get',
    fullyQualifiedName: 'user.get',
    httpMethod: 'get',
    httpPath: '/v1/user',
  },
  {
    clientCallName: 'client.user.security.update',
    fullyQualifiedName: 'user.security.update',
    httpMethod: 'patch',
    httpPath: '/v1/user/security',
  },
  {
    clientCallName: 'client.user.security.get',
    fullyQualifiedName: 'user.security.get',
    httpMethod: 'get',
    httpPath: '/v1/user/security',
  },
  {
    clientCallName: 'client.apiKeys.create',
    fullyQualifiedName: 'apiKeys.create',
    httpMethod: 'post',
    httpPath: '/v1/api_keys',
  },
  {
    clientCallName: 'client.apiKeys.update',
    fullyQualifiedName: 'apiKeys.update',
    httpMethod: 'patch',
    httpPath: '/v1/api_keys/{api_key_id}',
  },
  {
    clientCallName: 'client.apiKeys.list',
    fullyQualifiedName: 'apiKeys.list',
    httpMethod: 'get',
    httpPath: '/v1/api_keys',
  },
  {
    clientCallName: 'client.apiKeys.delete',
    fullyQualifiedName: 'apiKeys.delete',
    httpMethod: 'delete',
    httpPath: '/v1/api_keys/{api_key_id}',
  },
  {
    clientCallName: 'client.apiKeys.get',
    fullyQualifiedName: 'apiKeys.get',
    httpMethod: 'get',
    httpPath: '/v1/api_keys/{api_key_id}',
  },
  {
    clientCallName: 'client.operations.list',
    fullyQualifiedName: 'operations.list',
    httpMethod: 'get',
    httpPath: '/v1/operations',
  },
  {
    clientCallName: 'client.operations.get',
    fullyQualifiedName: 'operations.get',
    httpMethod: 'get',
    httpPath: '/v1/operations/{operation_id}',
  },
  {
    clientCallName: 'client.organizations.create',
    fullyQualifiedName: 'organizations.create',
    httpMethod: 'post',
    httpPath: '/v1/organizations',
  },
  {
    clientCallName: 'client.organizations.update',
    fullyQualifiedName: 'organizations.update',
    httpMethod: 'patch',
    httpPath: '/v1/organizations/{organization_id}',
  },
  {
    clientCallName: 'client.organizations.list',
    fullyQualifiedName: 'organizations.list',
    httpMethod: 'get',
    httpPath: '/v1/organizations',
  },
  {
    clientCallName: 'client.organizations.get',
    fullyQualifiedName: 'organizations.get',
    httpMethod: 'get',
    httpPath: '/v1/organizations/{organization_id}',
  },
  {
    clientCallName: 'client.projects.create',
    fullyQualifiedName: 'projects.create',
    httpMethod: 'post',
    httpPath: '/v1/projects',
  },
  {
    clientCallName: 'client.projects.update',
    fullyQualifiedName: 'projects.update',
    httpMethod: 'patch',
    httpPath: '/v1/projects/{project_id}',
  },
  {
    clientCallName: 'client.projects.list',
    fullyQualifiedName: 'projects.list',
    httpMethod: 'get',
    httpPath: '/v1/projects',
  },
  {
    clientCallName: 'client.projects.delete',
    fullyQualifiedName: 'projects.delete',
    httpMethod: 'delete',
    httpPath: '/v1/projects/{project_id}',
  },
  {
    clientCallName: 'client.projects.get',
    fullyQualifiedName: 'projects.get',
    httpMethod: 'get',
    httpPath: '/v1/projects/{project_id}',
  },
  {
    clientCallName: 'client.regions.list',
    fullyQualifiedName: 'regions.list',
    httpMethod: 'get',
    httpPath: '/v1/regions',
  },
  {
    clientCallName: 'client.regions.get',
    fullyQualifiedName: 'regions.get',
    httpMethod: 'get',
    httpPath: '/v1/regions/{name}',
  },
  {
    clientCallName: 'client.compute.vms.create',
    fullyQualifiedName: 'compute.vms.create',
    httpMethod: 'post',
    httpPath: '/v1/compute/vms',
  },
  {
    clientCallName: 'client.compute.vms.update',
    fullyQualifiedName: 'compute.vms.update',
    httpMethod: 'patch',
    httpPath: '/v1/compute/vms/{vm_id}',
  },
  {
    clientCallName: 'client.compute.vms.list',
    fullyQualifiedName: 'compute.vms.list',
    httpMethod: 'get',
    httpPath: '/v1/compute/vms',
  },
  {
    clientCallName: 'client.compute.vms.delete',
    fullyQualifiedName: 'compute.vms.delete',
    httpMethod: 'delete',
    httpPath: '/v1/compute/vms/{vm_id}',
  },
  {
    clientCallName: 'client.compute.vms.get',
    fullyQualifiedName: 'compute.vms.get',
    httpMethod: 'get',
    httpPath: '/v1/compute/vms/{vm_id}',
  },
  {
    clientCallName: 'client.compute.vms.restart',
    fullyQualifiedName: 'compute.vms.restart',
    httpMethod: 'post',
    httpPath: '/v1/compute/vms/{vm_id}/restart',
  },
  {
    clientCallName: 'client.compute.vms.availability.create',
    fullyQualifiedName: 'compute.vms.availability.create',
    httpMethod: 'post',
    httpPath: '/v1/compute/vms/availability',
  },
  {
    clientCallName: 'client.compute.vms.availability.update',
    fullyQualifiedName: 'compute.vms.availability.update',
    httpMethod: 'patch',
    httpPath: '/v1/compute/vms/{vm_id}/availability',
  },
  {
    clientCallName: 'client.compute.vms.volumes.list',
    fullyQualifiedName: 'compute.vms.volumes.list',
    httpMethod: 'get',
    httpPath: '/v1/compute/vms/{vm_id}/volumes',
  },
  {
    clientCallName: 'client.compute.vms.osImages.list',
    fullyQualifiedName: 'compute.vms.osImages.list',
    httpMethod: 'get',
    httpPath: '/v1/compute/vms/os_images',
  },
  {
    clientCallName: 'client.compute.volumes.create',
    fullyQualifiedName: 'compute.volumes.create',
    httpMethod: 'post',
    httpPath: '/v1/compute/volumes',
  },
  {
    clientCallName: 'client.compute.volumes.update',
    fullyQualifiedName: 'compute.volumes.update',
    httpMethod: 'patch',
    httpPath: '/v1/compute/volumes/{volume_id}',
  },
  {
    clientCallName: 'client.compute.volumes.list',
    fullyQualifiedName: 'compute.volumes.list',
    httpMethod: 'get',
    httpPath: '/v1/compute/volumes',
  },
  {
    clientCallName: 'client.compute.volumes.delete',
    fullyQualifiedName: 'compute.volumes.delete',
    httpMethod: 'delete',
    httpPath: '/v1/compute/volumes/{volume_id}',
  },
  {
    clientCallName: 'client.compute.volumes.attach',
    fullyQualifiedName: 'compute.volumes.attach',
    httpMethod: 'post',
    httpPath: '/v1/compute/volumes/{volume_id}/attach',
  },
  {
    clientCallName: 'client.compute.volumes.detach',
    fullyQualifiedName: 'compute.volumes.detach',
    httpMethod: 'post',
    httpPath: '/v1/compute/volumes/{volume_id}/detach',
  },
  {
    clientCallName: 'client.compute.volumes.get',
    fullyQualifiedName: 'compute.volumes.get',
    httpMethod: 'get',
    httpPath: '/v1/compute/volumes/{volume_id}',
  },
  {
    clientCallName: 'client.compute.volumes.availability.create',
    fullyQualifiedName: 'compute.volumes.availability.create',
    httpMethod: 'post',
    httpPath: '/v1/compute/volumes/availability',
  },
  {
    clientCallName: 'client.compute.volumes.availability.update',
    fullyQualifiedName: 'compute.volumes.availability.update',
    httpMethod: 'patch',
    httpPath: '/v1/compute/volumes/{volume_id}/availability',
  },
  {
    clientCallName: 'client.networking.vpcs.create',
    fullyQualifiedName: 'networking.vpcs.create',
    httpMethod: 'post',
    httpPath: '/v1/networking/vpcs',
  },
  {
    clientCallName: 'client.networking.vpcs.update',
    fullyQualifiedName: 'networking.vpcs.update',
    httpMethod: 'patch',
    httpPath: '/v1/networking/vpcs/{vpc_id}',
  },
  {
    clientCallName: 'client.networking.vpcs.list',
    fullyQualifiedName: 'networking.vpcs.list',
    httpMethod: 'get',
    httpPath: '/v1/networking/vpcs',
  },
  {
    clientCallName: 'client.networking.vpcs.delete',
    fullyQualifiedName: 'networking.vpcs.delete',
    httpMethod: 'delete',
    httpPath: '/v1/networking/vpcs/{vpc_id}',
  },
  {
    clientCallName: 'client.networking.vpcs.get',
    fullyQualifiedName: 'networking.vpcs.get',
    httpMethod: 'get',
    httpPath: '/v1/networking/vpcs/{vpc_id}',
  },
  {
    clientCallName: 'client.networking.vpcs.availability.create',
    fullyQualifiedName: 'networking.vpcs.availability.create',
    httpMethod: 'post',
    httpPath: '/v1/networking/vpcs/availability',
  },
  {
    clientCallName: 'client.networking.vpcs.availability.update',
    fullyQualifiedName: 'networking.vpcs.availability.update',
    httpMethod: 'patch',
    httpPath: '/v1/networking/vpcs/{vpc_id}/availability',
  },
  {
    clientCallName: 'client.networking.firewallRules.create',
    fullyQualifiedName: 'networking.firewallRules.create',
    httpMethod: 'post',
    httpPath: '/v1/networking/vpcs/{vpc_id}/firewall_rules',
  },
  {
    clientCallName: 'client.networking.firewallRules.update',
    fullyQualifiedName: 'networking.firewallRules.update',
    httpMethod: 'patch',
    httpPath: '/v1/networking/vpcs/{vpc_id}/firewall_rules/{firewall_rule_id}',
  },
  {
    clientCallName: 'client.networking.firewallRules.list',
    fullyQualifiedName: 'networking.firewallRules.list',
    httpMethod: 'get',
    httpPath: '/v1/networking/vpcs/{vpc_id}/firewall_rules',
  },
  {
    clientCallName: 'client.networking.firewallRules.delete',
    fullyQualifiedName: 'networking.firewallRules.delete',
    httpMethod: 'delete',
    httpPath: '/v1/networking/vpcs/{vpc_id}/firewall_rules/{firewall_rule_id}',
  },
  {
    clientCallName: 'client.networking.firewallRules.get',
    fullyQualifiedName: 'networking.firewallRules.get',
    httpMethod: 'get',
    httpPath: '/v1/networking/vpcs/{vpc_id}/firewall_rules/{firewall_rule_id}',
  },
  {
    clientCallName: 'client.networking.connect.connections.create',
    fullyQualifiedName: 'networking.connect.connections.create',
    httpMethod: 'post',
    httpPath: '/v1/networking/connect/connections',
  },
  {
    clientCallName: 'client.networking.connect.connections.update',
    fullyQualifiedName: 'networking.connect.connections.update',
    httpMethod: 'patch',
    httpPath: '/v1/networking/connect/connections/{connection_id}',
  },
  {
    clientCallName: 'client.networking.connect.connections.list',
    fullyQualifiedName: 'networking.connect.connections.list',
    httpMethod: 'get',
    httpPath: '/v1/networking/connect/connections',
  },
  {
    clientCallName: 'client.networking.connect.connections.delete',
    fullyQualifiedName: 'networking.connect.connections.delete',
    httpMethod: 'delete',
    httpPath: '/v1/networking/connect/connections/{connection_id}',
  },
  {
    clientCallName: 'client.networking.connect.connections.get',
    fullyQualifiedName: 'networking.connect.connections.get',
    httpMethod: 'get',
    httpPath: '/v1/networking/connect/connections/{connection_id}',
  },
  {
    clientCallName: 'client.networking.connect.routes.list',
    fullyQualifiedName: 'networking.connect.routes.list',
    httpMethod: 'get',
    httpPath: '/v1/networking/connect/routes',
  },
  {
    clientCallName: 'client.rpcNodes.flex.create',
    fullyQualifiedName: 'rpcNodes.flex.create',
    httpMethod: 'post',
    httpPath: '/v1/rpc_nodes/flex',
  },
  {
    clientCallName: 'client.rpcNodes.flex.update',
    fullyQualifiedName: 'rpcNodes.flex.update',
    httpMethod: 'patch',
    httpPath: '/v1/rpc_nodes/flex/{node_id}',
  },
  {
    clientCallName: 'client.rpcNodes.flex.list',
    fullyQualifiedName: 'rpcNodes.flex.list',
    httpMethod: 'get',
    httpPath: '/v1/rpc_nodes/flex',
  },
  {
    clientCallName: 'client.rpcNodes.flex.delete',
    fullyQualifiedName: 'rpcNodes.flex.delete',
    httpMethod: 'delete',
    httpPath: '/v1/rpc_nodes/flex/{node_id}',
  },
  {
    clientCallName: 'client.rpcNodes.flex.get',
    fullyQualifiedName: 'rpcNodes.flex.get',
    httpMethod: 'get',
    httpPath: '/v1/rpc_nodes/flex/{node_id}',
  },
  {
    clientCallName: 'client.rpcNodes.flex.blockchains.list',
    fullyQualifiedName: 'rpcNodes.flex.blockchains.list',
    httpMethod: 'get',
    httpPath: '/v1/rpc_nodes/flex/blockchains',
  },
  {
    clientCallName: 'client.rpcNodes.dedicated.list',
    fullyQualifiedName: 'rpcNodes.dedicated.list',
    httpMethod: 'get',
    httpPath: '/v1/rpc_nodes/dedicated',
  },
  {
    clientCallName: 'client.rpcNodes.dedicated.get',
    fullyQualifiedName: 'rpcNodes.dedicated.get',
    httpMethod: 'get',
    httpPath: '/v1/rpc_nodes/dedicated/{node_id}',
  },
  {
    clientCallName: 'client.rpcNodes.dedicated.blockchains.list',
    fullyQualifiedName: 'rpcNodes.dedicated.blockchains.list',
    httpMethod: 'get',
    httpPath: '/v1/rpc_nodes/dedicated/blockchains',
  },
];

function allowedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  if (!options) {
    return undefined;
  }

  let allowedMethods: SdkMethod[];

  if (options.codeAllowHttpGets || options.codeAllowedMethods) {
    // Start with nothing allowed and then add into it from options
    let allowedMethodsSet = new Set<SdkMethod>();

    if (options.codeAllowHttpGets) {
      // Add all methods that map to an HTTP GET
      sdkMethods
        .filter((method) => method.httpMethod === 'get')
        .forEach((method) => allowedMethodsSet.add(method));
    }

    if (options.codeAllowedMethods) {
      // Add all methods that match any of the allowed regexps
      const allowedRegexps = options.codeAllowedMethods.map((pattern) => {
        try {
          return new RegExp(pattern);
        } catch (e) {
          throw new Error(
            `Invalid regex pattern for allowed method: "${pattern}": ${e instanceof Error ? e.message : e}`,
          );
        }
      });

      sdkMethods
        .filter((method) => allowedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)))
        .forEach((method) => allowedMethodsSet.add(method));
    }

    allowedMethods = Array.from(allowedMethodsSet);
  } else {
    // Start with everything allowed
    allowedMethods = [...sdkMethods];
  }

  if (options.codeBlockedMethods) {
    // Filter down based on blocked regexps
    const blockedRegexps = options.codeBlockedMethods.map((pattern) => {
      try {
        return new RegExp(pattern);
      } catch (e) {
        throw new Error(
          `Invalid regex pattern for blocked method: "${pattern}": ${e instanceof Error ? e.message : e}`,
        );
      }
    });

    allowedMethods = allowedMethods.filter(
      (method) => !blockedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)),
    );
  }

  return allowedMethods;
}

export function blockedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  const allowedMethods = allowedMethodsForCodeTool(options);
  if (!allowedMethods) {
    return undefined;
  }

  const allowedSet = new Set(allowedMethods.map((method) => method.fullyQualifiedName));

  // Return any methods that are not explicitly allowed
  return sdkMethods.filter((method) => !allowedSet.has(method.fullyQualifiedName));
}
