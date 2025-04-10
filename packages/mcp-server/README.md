# Nirvana Labs Node MCP Server

## Installation

### Direct invocation

You can run the MCP Server directly via `npx`:

```sh
export NIRVANA_LABS_API_KEY="My API Key"
npx -y @nirvana-labs/nirvana-mcp
```

### Via MCP Client

There is a partial list of existing clients at [modelcontextprotocol.io](https://modelcontextprotocol.io/clients). If you already
have a client, consult their documentation to install the MCP server.

For clients with a configuration JSON, it might look something like this:

```json
{
  "mcpServers": {
    "nirvana_labs_nirvana_api": {
      "command": "npx",
      "args": ["-y", "@nirvana-labs/nirvana-mcp"],
      "env": {
        "NIRVANA_LABS_API_KEY": "My API Key"
      }
    }
  }
}
```

## Filtering tools

You can run the package on the command line to discover and filter the set of tools that are exposed by the
MCP Server. This can be helpful for large APIs where including all endpoints at once is too much for your AI's
context window.

You can filter by multiple aspects:

- `--tool` includes a specific tool by name
- `--resource` includes all tools under a specific resource, and can have wildcards, e.g. `my.resource*`
- `--operation` includes just read (get/list) or just write operations

See more information with `--help`.

All of these command-line options can be repeated, combined together, and have corresponding exclusion versions (e.g. `--no-tool`).

Use `--list` to see the list of available tools, or see below.

## Importing the tools and server individually

```js
// Import the server, generated endpoints, or the init function
import { server, endpoints, init } from "@nirvana-labs/nirvana-mcp/server";

// import a specific tool
import getUser from "@nirvana-labs/nirvana-mcp/tools/user/get-user";

// initialize the server and all endpoints
init({ server, endpoints });

// manually start server
const transport = new StdioServerTransport();
await server.connect(transport);

// or initialize your own server with specific tools
const myServer = new McpServer(...);

// define your own endpoint
const myCustomEndpoint = {
  tool: {
    name: 'my_custom_tool',
    description: 'My custom tool',
    inputSchema: zodToJsonSchema(z.object({ a_property: z.string() })),
  },
  handler: async (client: client, args: any) => {
    return { myResponse: 'Hello world!' };
  })
};

// initialize the server with your custom endpoints
init({ server: myServer, endpoints: [getUser, myCustomEndpoint] });
```

## Available Tools

The following tools are available in this MCP server.

### Resource `user`:

- `get_user` (`read`): Get details about an authenticated user

### Resource `api_keys`:

- `create_api_keys` (`write`): Create a new API key
- `update_api_keys` (`write`): Update an API key's name
- `list_api_keys` (`read`): List all API keys you created
- `delete_api_keys` (`write`): Delete an API key
- `get_api_keys` (`read`): Get details about an API key

### Resource `operations`:

- `list_operations` (`read`): List all operations
- `get_operations` (`read`): Get details about a specific operation

### Resource `compute.vms`:

- `create_compute_vms` (`write`): Create a VM
- `update_compute_vms` (`write`): Update a VM
- `list_compute_vms` (`read`): List all VMs
- `delete_compute_vms` (`write`): Delete a VM
- `get_compute_vms` (`read`): Get details about a VM

### Resource `compute.vms.volumes`:

- `list_vms_compute_volumes` (`read`): List VM's Volumes

### Resource `compute.vms.os_images`:

- `list_vms_compute_os_images` (`read`): List all OS Images

### Resource `compute.volumes`:

- `create_compute_volumes` (`write`): Create a Volume. Only data volumes can be created.
- `update_compute_volumes` (`write`): Update a Volume. Boot or data volumes can be updated.
- `list_compute_volumes` (`read`): List all volumes
- `delete_compute_volumes` (`write`): Delete a Volume. Boot or data volumes can be deleted.
- `get_compute_volumes` (`read`): Get a Volume.

### Resource `networking.vpcs`:

- `create_networking_vpcs` (`write`): Create a VPC
- `update_networking_vpcs` (`write`): Update a VPC
- `list_networking_vpcs` (`read`): List all VPCs
- `delete_networking_vpcs` (`write`): Delete a VPC
- `get_networking_vpcs` (`read`): Get details about a VPC

### Resource `networking.firewall_rules`:

- `create_networking_firewall_rules` (`write`): Create a firewall rule
- `update_networking_firewall_rules` (`write`): Update a firewall rule
- `list_networking_firewall_rules` (`read`): List all firewall rules
- `delete_networking_firewall_rules` (`write`): Delete a firewall rule
- `get_networking_firewall_rules` (`read`): Get details about a firewall rule
