# Nirvana Labs TypeScript MCP Server

## Installation

### Direct invocation

You can run the MCP Server directly via `npx`:

```sh
export NIRVANA_LABS_API_KEY="My API Key"
npx -y @nirvana-labs/nirvana-mcp@latest
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
      "args": ["-y", "@nirvana-labs/nirvana-mcp", "--client=claude", "--tools=dynamic"],
      "env": {
        "NIRVANA_LABS_API_KEY": "My API Key"
      }
    }
  }
}
```

## Exposing endpoints to your MCP Client

There are two ways to expose endpoints as tools in the MCP server:

1. Exposing one tool per endpoint, and filtering as necessary
2. Exposing a set of tools to dynamically discover and invoke endpoints from the API

### Filtering endpoints and tools

You can run the package on the command line to discover and filter the set of tools that are exposed by the
MCP Server. This can be helpful for large APIs where including all endpoints at once is too much for your AI's
context window.

You can filter by multiple aspects:

- `--tool` includes a specific tool by name
- `--resource` includes all tools under a specific resource, and can have wildcards, e.g. `my.resource*`
- `--operation` includes just read (get/list) or just write operations

### Dynamic tools

If you specify `--tools=dynamic` to the MCP server, instead of exposing one tool per endpoint in the API, it will
expose the following tools:

1. `list_api_endpoints` - Discovers available endpoints, with optional filtering by search query
2. `get_api_endpoint_schema` - Gets detailed schema information for a specific endpoint
3. `invoke_api_endpoint` - Executes any endpoint with the appropriate parameters

This allows you to have the full set of API endpoints available to your MCP Client, while not requiring that all
of their schemas be loaded into context at once. Instead, the LLM will automatically use these tools together to
search for, look up, and invoke endpoints dynamically. However, due to the indirect nature of the schemas, it
can struggle to provide the correct properties a bit more than when tools are imported explicitly. Therefore,
you can opt-in to explicit tools, the dynamic tools, or both.

See more information with `--help`.

All of these command-line options can be repeated, combined together, and have corresponding exclusion versions (e.g. `--no-tool`).

Use `--list` to see the list of available tools, or see below.

### Specifying the MCP Client

Different clients have varying abilities to handle arbitrary tools and schemas.

You can specify the client you are using with the `--client` argument, and the MCP server will automatically
serve tools and schemas that are more compatible with that client.

- `--client=<type>`: Set all capabilities based on a known MCP client

  - Valid values: `openai-agents`, `claude`, `claude-code`, `cursor`
  - Example: `--client=cursor`

Additionally, if you have a client not on the above list, or the client has gotten better
over time, you can manually enable or disable certain capabilities:

- `--capability=<name>`: Specify individual client capabilities
  - Available capabilities:
    - `top-level-unions`: Enable support for top-level unions in tool schemas
    - `valid-json`: Enable JSON string parsing for arguments
    - `refs`: Enable support for $ref pointers in schemas
    - `unions`: Enable support for union types (anyOf) in schemas
    - `formats`: Enable support for format validations in schemas (e.g. date-time, email)
    - `tool-name-length=N`: Set maximum tool name length to N characters
  - Example: `--capability=top-level-unions --capability=tool-name-length=40`
  - Example: `--capability=top-level-unions,tool-name-length=40`

### Examples

1. Filter for read operations on cards:

```bash
--resource=cards --operation=read
```

2. Exclude specific tools while including others:

```bash
--resource=cards --no-tool=create_cards
```

3. Configure for Cursor client with custom max tool name length:

```bash
--client=cursor --capability=tool-name-length=40
```

4. Complex filtering with multiple criteria:

```bash
--resource=cards,accounts --operation=read --tag=kyc --no-tool=create_cards
```

## Running remotely

Launching the client with `--transport=http` launches the server as a remote server using Streamable HTTP transport. The `--port` setting can choose the port it will run on, and the `--socket` setting allows it to run on a Unix socket.

Authorization can be provided via the `Authorization` header using the Bearer scheme.

Additionally, authorization can be provided via the following headers:
| Header | Equivalent client option | Security scheme |
| ------------------------ | ------------------------ | --------------- |
| `x-nirvana-labs-api-key` | `apiKey` | bearerauth |

A configuration JSON for this server might look like this, assuming the server is hosted at `http://localhost:3000`:

```json
{
  "mcpServers": {
    "nirvana_labs_nirvana_api": {
      "url": "http://localhost:3000",
      "headers": {
        "Authorization": "Bearer <auth value>"
      }
    }
  }
}
```

The command-line arguments for filtering tools and specifying clients can also be used as query parameters in the URL.
For example, to exclude specific tools while including others, use the URL:

```
http://localhost:3000?resource=cards&resource=accounts&no_tool=create_cards
```

Or, to configure for the Cursor client, with a custom max tool name length, use the URL:

```
http://localhost:3000?client=cursor&capability=tool-name-length%3D40
```

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
- `update_api_keys` (`write`): Update an existing API key
- `list_api_keys` (`read`): List all API keys for the authenticated user
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
- `restart_compute_vms` (`write`): Restart a VM

### Resource `compute.vms.availability`:

- `create_vms_compute_availability` (`write`): Check VM Create Availability
- `update_vms_compute_availability` (`write`): Check VM Update Availability

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

### Resource `compute.volumes.availability`:

- `create_volumes_compute_availability` (`write`): Check Volume Create Availability
- `update_volumes_compute_availability` (`write`): Check Volume Update Availability

### Resource `networking.vpcs`:

- `create_networking_vpcs` (`write`): Create a VPC
- `update_networking_vpcs` (`write`): Update a VPC
- `list_networking_vpcs` (`read`): List all VPCs
- `delete_networking_vpcs` (`write`): Delete a VPC
- `get_networking_vpcs` (`read`): Get details about a VPC

### Resource `networking.vpcs.availability`:

- `create_vpcs_networking_availability` (`write`): Check if a VPC can be created
- `update_vpcs_networking_availability` (`write`): Check if a VPC can be updated

### Resource `networking.firewall_rules`:

- `create_networking_firewall_rules` (`write`): Create a firewall rule
- `update_networking_firewall_rules` (`write`): Update a firewall rule
- `list_networking_firewall_rules` (`read`): List all firewall rules
- `delete_networking_firewall_rules` (`write`): Delete a firewall rule
- `get_networking_firewall_rules` (`read`): Get details about a firewall rule

### Resource `rpc_nodes.flex`:

- `list_rpc_nodes_flex` (`read`): List all RPC Node Flex you created
- `get_rpc_nodes_flex` (`read`): Get details about an RPC Node Flex

### Resource `rpc_nodes.flex.blockchains`:

- `list_flex_rpc_nodes_blockchains` (`read`): List all Flex Blockchains

### Resource `rpc_nodes.dedicated`:

- `list_rpc_nodes_dedicated` (`read`): List all RPC Node Dedicated you created
- `get_rpc_nodes_dedicated` (`read`): Get details about an RPC Node Dedicated

### Resource `rpc_nodes.dedicated.blockchains`:

- `list_dedicated_rpc_nodes_blockchains` (`read`): List all Dedicated Blockchains

### Resource `connect.flux`:

- `create_connect_flux` (`write`): Create a Connect Flux
- `update_connect_flux` (`write`): Update Connect Flux details
- `list_connect_flux` (`read`): List all Connect Flux
- `delete_connect_flux` (`write`): Delete Connect Flux
- `get_connect_flux` (`read`): Get Connect Flux details

### Resource `connect.flux.providers`:

- `list_flux_connect_providers` (`read`): List all supported providers with regions for Connect Flux.

### Resource `vektor.registry.assets`:

- `list_registry_vektor_assets` (`write`): List supported assets, optionally filtered by blockchain

### Resource `vektor.registry.blockchains`:

- `list_registry_vektor_blockchains` (`write`): List supported blockchains

### Resource `vektor.registry.venues`:

- `list_registry_vektor_venues` (`write`): List supported venues

### Resource `vektor.registry.errors`:

- `list_registry_vektor_errors` (`write`): A list with one example of each error type

### Resource `vektor.registry.lend_markets`:

- `list_registry_vektor_lend_markets` (`write`): List lend markets in the registry, optionally filtered by blockchain, assets or venues

### Resource `vektor.registry.borrow_markets`:

- `list_registry_vektor_borrow_markets` (`write`): List borrow markets in the registry, optionally filtered by blockchain, assets or venues

### Resource `vektor.registry.lp_pools`:

- `list_registry_vektor_lp_pools` (`write`): List LP pools in the registry, optionally filtered by blockchain, assets or venues

### Resource `vektor.balances`:

- `list_vektor_balances` (`write`): List balances for a given set of assets and addresses
- `list_historical_vektor_balances` (`write`): List balances for a given set of assets and addresses

### Resource `vektor.prices`:

- `list_vektor_prices` (`write`): Get a list of asset prices
- `list_historical_vektor_prices` (`write`): Get a list of asset prices

### Resource `vektor.lend.markets`:

- `list_lend_vektor_markets` (`write`): Get the current market rates for lending an asset
- `list_historical_lend_vektor_markets` (`write`): Get the current market rates for lending an asset

### Resource `vektor.lend.positions`:

- `list_lend_vektor_positions` (`write`): Get info on lending positions
- `list_historical_lend_vektor_positions` (`write`): Get info on lending positions

### Resource `vektor.lend.lend`:

- `create_lend_vektor_lend` (`write`): Lend an asset

### Resource `vektor.lend.withdraw`:

- `create_lend_vektor_withdraw` (`write`): Withdraw an asset

### Resource `vektor.lend.set_collateral`:

- `create_lend_vektor_set_collateral` (`write`): Enable/disable a specific lending position to be used as collateral

### Resource `vektor.borrow.markets`:

- `list_borrow_vektor_markets` (`write`): Get the current market rates for borrowing an asset
- `list_historical_borrow_vektor_markets` (`write`): Get the current market rates for borrowing an asset

### Resource `vektor.borrow.positions`:

- `list_borrow_vektor_positions` (`write`): Get info on borrowed positions
- `list_historical_borrow_vektor_positions` (`write`): Get info on borrowed positions

### Resource `vektor.borrow.accounts`:

- `list_borrow_vektor_accounts` (`write`): Get account-level borrow info on specified accounts
- `list_historical_borrow_vektor_accounts` (`write`): Get account-level borrow info on specified accounts

### Resource `vektor.borrow.borrow`:

- `create_borrow_vektor_borrow` (`write`): Borrow an asset

### Resource `vektor.borrow.repay`:

- `create_borrow_vektor_repay` (`write`): Repay to a borrow

### Resource `vektor.lp.pools`:

- `list_lp_vektor_pools` (`write`): Get a list of LP pools
- `list_historical_lp_vektor_pools` (`write`): Get a list of LP pools

### Resource `vektor.lp.positions`:

- `list_lp_vektor_positions` (`write`): Get info on LP positions
- `list_historical_lp_vektor_positions` (`write`): Get info on LP positions

### Resource `vektor.lp.deposit_quote`:

- `create_lp_vektor_deposit_quote` (`write`): Simulate depositing liquidity to a specific LP pool, creating a position or adding to an existing one.

### Resource `vektor.lp.withdraw_quote`:

- `create_lp_vektor_withdraw_quote` (`write`): Simulate withdrawing liquidity from a specific existing LP position

### Resource `vektor.buy.quotes`:

- `list_buy_vektor_quotes` (`write`): Get quotes for buying an exact amount of an asset at current market rate

### Resource `vektor.buy.buy`:

- `create_buy_vektor_buy` (`write`): Buy an asset with another asset

### Resource `vektor.sell.quotes`:

- `list_sell_vektor_quotes` (`write`): Get quotes for selling an exact amount of an asset at current market rate

### Resource `vektor.sell.sell`:

- `create_sell_vektor_sell` (`write`): Sell an asset for another asset

### Resource `vektor.move`:

- `create_vektor_move` (`write`): Move balance from one address to another

### Resource `vektor.wrap.wrap`:

- `create_wrap_vektor_wrap` (`write`): Wrap the native asset

### Resource `vektor.wrap.unwrap`:

- `create_wrap_vektor_unwrap` (`write`): Unwrap the wrapped native asset

### Resource `vektor.bridge.quotes`:

- `list_bridge_vektor_quotes` (`write`): Get quotes for bridging an exact amount of an asset to another blockchain

### Resource `vektor.lock.markets`:

- `list_lock_vektor_markets` (`write`): Get a list of markets where assets can be locked

### Resource `vektor.lock.positions`:

- `list_lock_vektor_positions` (`write`): Get info on locked positions

### Resource `vektor.vote.markets`:

- `list_vote_vektor_markets` (`write`): Get the current LP voting markets

### Resource `vektor.vote.rewards`:

- `list_vote_vektor_rewards` (`write`): Get the unclaimed rewards from LP voting markets

### Resource `vektor.incentivize`:

- `list_vektor_incentivize` (`write`): List the current incentive markets

### Resource `vektor.executions`:

- `list_vektor_executions` (`read`): Get a list of executions
- `get_vektor_executions` (`read`): Get an execution

### Resource `vektor.executions.steps`:

- `get_executions_vektor_steps` (`read`): Get a step of an execution
- `sign_executions_vektor_steps` (`write`): Sign an EVM transaction step
