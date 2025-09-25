// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, Endpoint, HandlerFunction } from './types';

export { Metadata, Endpoint, HandlerFunction };

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
import restart_compute_vms from './compute/vms/restart-compute-vms';
import create_vms_compute_availability from './compute/vms/availability/create-vms-compute-availability';
import update_vms_compute_availability from './compute/vms/availability/update-vms-compute-availability';
import list_vms_compute_volumes from './compute/vms/volumes/list-vms-compute-volumes';
import list_vms_compute_os_images from './compute/vms/os-images/list-vms-compute-os-images';
import create_compute_volumes from './compute/volumes/create-compute-volumes';
import update_compute_volumes from './compute/volumes/update-compute-volumes';
import list_compute_volumes from './compute/volumes/list-compute-volumes';
import delete_compute_volumes from './compute/volumes/delete-compute-volumes';
import get_compute_volumes from './compute/volumes/get-compute-volumes';
import create_volumes_compute_availability from './compute/volumes/availability/create-volumes-compute-availability';
import update_volumes_compute_availability from './compute/volumes/availability/update-volumes-compute-availability';
import create_networking_vpcs from './networking/vpcs/create-networking-vpcs';
import update_networking_vpcs from './networking/vpcs/update-networking-vpcs';
import list_networking_vpcs from './networking/vpcs/list-networking-vpcs';
import delete_networking_vpcs from './networking/vpcs/delete-networking-vpcs';
import get_networking_vpcs from './networking/vpcs/get-networking-vpcs';
import create_vpcs_networking_availability from './networking/vpcs/availability/create-vpcs-networking-availability';
import update_vpcs_networking_availability from './networking/vpcs/availability/update-vpcs-networking-availability';
import create_networking_firewall_rules from './networking/firewall-rules/create-networking-firewall-rules';
import update_networking_firewall_rules from './networking/firewall-rules/update-networking-firewall-rules';
import list_networking_firewall_rules from './networking/firewall-rules/list-networking-firewall-rules';
import delete_networking_firewall_rules from './networking/firewall-rules/delete-networking-firewall-rules';
import get_networking_firewall_rules from './networking/firewall-rules/get-networking-firewall-rules';
import list_rpc_nodes_flex from './rpc-nodes/flex/list-rpc-nodes-flex';
import get_rpc_nodes_flex from './rpc-nodes/flex/get-rpc-nodes-flex';
import list_flex_rpc_nodes_blockchains from './rpc-nodes/flex/blockchains/list-flex-rpc-nodes-blockchains';
import list_rpc_nodes_dedicated from './rpc-nodes/dedicated/list-rpc-nodes-dedicated';
import get_rpc_nodes_dedicated from './rpc-nodes/dedicated/get-rpc-nodes-dedicated';
import list_dedicated_rpc_nodes_blockchains from './rpc-nodes/dedicated/blockchains/list-dedicated-rpc-nodes-blockchains';
import create_connect_flux from './connect/flux/create-connect-flux';
import update_connect_flux from './connect/flux/update-connect-flux';
import list_connect_flux from './connect/flux/list-connect-flux';
import delete_connect_flux from './connect/flux/delete-connect-flux';
import get_connect_flux from './connect/flux/get-connect-flux';
import list_flux_connect_providers from './connect/flux/providers/list-flux-connect-providers';
import list_registry_vektor_assets from './vektor/registry/assets/list-registry-vektor-assets';
import list_registry_vektor_blockchains from './vektor/registry/blockchains/list-registry-vektor-blockchains';
import list_registry_vektor_venues from './vektor/registry/venues/list-registry-vektor-venues';
import list_registry_vektor_errors from './vektor/registry/errors/list-registry-vektor-errors';
import list_registry_vektor_lend_markets from './vektor/registry/lend-markets/list-registry-vektor-lend-markets';
import list_registry_vektor_borrow_markets from './vektor/registry/borrow-markets/list-registry-vektor-borrow-markets';
import list_registry_vektor_lp_pools from './vektor/registry/lp-pools/list-registry-vektor-lp-pools';
import list_vektor_balances from './vektor/balances/list-vektor-balances';
import list_historical_vektor_balances from './vektor/balances/list-historical-vektor-balances';
import list_vektor_prices from './vektor/prices/list-vektor-prices';
import list_historical_vektor_prices from './vektor/prices/list-historical-vektor-prices';
import list_lend_vektor_markets from './vektor/lend/markets/list-lend-vektor-markets';
import list_historical_lend_vektor_markets from './vektor/lend/markets/list-historical-lend-vektor-markets';
import list_lend_vektor_positions from './vektor/lend/positions/list-lend-vektor-positions';
import list_historical_lend_vektor_positions from './vektor/lend/positions/list-historical-lend-vektor-positions';
import create_lend_vektor_lend from './vektor/lend/lend_/create-lend-vektor-lend';
import create_lend_vektor_withdraw from './vektor/lend/withdraw/create-lend-vektor-withdraw';
import create_lend_vektor_set_collateral from './vektor/lend/set-collateral/create-lend-vektor-set-collateral';
import list_borrow_vektor_markets from './vektor/borrow/markets/list-borrow-vektor-markets';
import list_historical_borrow_vektor_markets from './vektor/borrow/markets/list-historical-borrow-vektor-markets';
import list_borrow_vektor_positions from './vektor/borrow/positions/list-borrow-vektor-positions';
import list_historical_borrow_vektor_positions from './vektor/borrow/positions/list-historical-borrow-vektor-positions';
import list_borrow_vektor_accounts from './vektor/borrow/accounts/list-borrow-vektor-accounts';
import list_historical_borrow_vektor_accounts from './vektor/borrow/accounts/list-historical-borrow-vektor-accounts';
import create_borrow_vektor_borrow from './vektor/borrow/borrow_/create-borrow-vektor-borrow';
import create_borrow_vektor_repay from './vektor/borrow/repay/create-borrow-vektor-repay';
import list_lp_vektor_pools from './vektor/lp/pools/list-lp-vektor-pools';
import list_historical_lp_vektor_pools from './vektor/lp/pools/list-historical-lp-vektor-pools';
import list_lp_vektor_positions from './vektor/lp/positions/list-lp-vektor-positions';
import list_historical_lp_vektor_positions from './vektor/lp/positions/list-historical-lp-vektor-positions';
import create_lp_vektor_deposit_quote from './vektor/lp/deposit-quote/create-lp-vektor-deposit-quote';
import create_lp_vektor_withdraw_quote from './vektor/lp/withdraw-quote/create-lp-vektor-withdraw-quote';
import list_buy_vektor_quotes from './vektor/buy/quotes/list-buy-vektor-quotes';
import create_buy_vektor_buy from './vektor/buy/buy_/create-buy-vektor-buy';
import list_sell_vektor_quotes from './vektor/sell/quotes/list-sell-vektor-quotes';
import create_sell_vektor_sell from './vektor/sell/sell_/create-sell-vektor-sell';
import create_vektor_move from './vektor/move/create-vektor-move';
import create_wrap_vektor_wrap from './vektor/wrap/wrap_/create-wrap-vektor-wrap';
import create_wrap_vektor_unwrap from './vektor/wrap/unwrap/create-wrap-vektor-unwrap';
import list_bridge_vektor_quotes from './vektor/bridge/quotes/list-bridge-vektor-quotes';
import list_lock_vektor_markets from './vektor/lock/markets/list-lock-vektor-markets';
import list_lock_vektor_positions from './vektor/lock/positions/list-lock-vektor-positions';
import list_vote_vektor_markets from './vektor/vote/markets/list-vote-vektor-markets';
import list_vote_vektor_rewards from './vektor/vote/rewards/list-vote-vektor-rewards';
import list_vektor_incentivize from './vektor/incentivize/list-vektor-incentivize';
import list_vektor_executions from './vektor/executions/list-vektor-executions';
import get_vektor_executions from './vektor/executions/get-vektor-executions';
import get_executions_vektor_steps from './vektor/executions/steps/get-executions-vektor-steps';
import sign_executions_vektor_steps from './vektor/executions/steps/sign-executions-vektor-steps';

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
addEndpoint(restart_compute_vms);
addEndpoint(create_vms_compute_availability);
addEndpoint(update_vms_compute_availability);
addEndpoint(list_vms_compute_volumes);
addEndpoint(list_vms_compute_os_images);
addEndpoint(create_compute_volumes);
addEndpoint(update_compute_volumes);
addEndpoint(list_compute_volumes);
addEndpoint(delete_compute_volumes);
addEndpoint(get_compute_volumes);
addEndpoint(create_volumes_compute_availability);
addEndpoint(update_volumes_compute_availability);
addEndpoint(create_networking_vpcs);
addEndpoint(update_networking_vpcs);
addEndpoint(list_networking_vpcs);
addEndpoint(delete_networking_vpcs);
addEndpoint(get_networking_vpcs);
addEndpoint(create_vpcs_networking_availability);
addEndpoint(update_vpcs_networking_availability);
addEndpoint(create_networking_firewall_rules);
addEndpoint(update_networking_firewall_rules);
addEndpoint(list_networking_firewall_rules);
addEndpoint(delete_networking_firewall_rules);
addEndpoint(get_networking_firewall_rules);
addEndpoint(list_rpc_nodes_flex);
addEndpoint(get_rpc_nodes_flex);
addEndpoint(list_flex_rpc_nodes_blockchains);
addEndpoint(list_rpc_nodes_dedicated);
addEndpoint(get_rpc_nodes_dedicated);
addEndpoint(list_dedicated_rpc_nodes_blockchains);
addEndpoint(create_connect_flux);
addEndpoint(update_connect_flux);
addEndpoint(list_connect_flux);
addEndpoint(delete_connect_flux);
addEndpoint(get_connect_flux);
addEndpoint(list_flux_connect_providers);
addEndpoint(list_registry_vektor_assets);
addEndpoint(list_registry_vektor_blockchains);
addEndpoint(list_registry_vektor_venues);
addEndpoint(list_registry_vektor_errors);
addEndpoint(list_registry_vektor_lend_markets);
addEndpoint(list_registry_vektor_borrow_markets);
addEndpoint(list_registry_vektor_lp_pools);
addEndpoint(list_vektor_balances);
addEndpoint(list_historical_vektor_balances);
addEndpoint(list_vektor_prices);
addEndpoint(list_historical_vektor_prices);
addEndpoint(list_lend_vektor_markets);
addEndpoint(list_historical_lend_vektor_markets);
addEndpoint(list_lend_vektor_positions);
addEndpoint(list_historical_lend_vektor_positions);
addEndpoint(create_lend_vektor_lend);
addEndpoint(create_lend_vektor_withdraw);
addEndpoint(create_lend_vektor_set_collateral);
addEndpoint(list_borrow_vektor_markets);
addEndpoint(list_historical_borrow_vektor_markets);
addEndpoint(list_borrow_vektor_positions);
addEndpoint(list_historical_borrow_vektor_positions);
addEndpoint(list_borrow_vektor_accounts);
addEndpoint(list_historical_borrow_vektor_accounts);
addEndpoint(create_borrow_vektor_borrow);
addEndpoint(create_borrow_vektor_repay);
addEndpoint(list_lp_vektor_pools);
addEndpoint(list_historical_lp_vektor_pools);
addEndpoint(list_lp_vektor_positions);
addEndpoint(list_historical_lp_vektor_positions);
addEndpoint(create_lp_vektor_deposit_quote);
addEndpoint(create_lp_vektor_withdraw_quote);
addEndpoint(list_buy_vektor_quotes);
addEndpoint(create_buy_vektor_buy);
addEndpoint(list_sell_vektor_quotes);
addEndpoint(create_sell_vektor_sell);
addEndpoint(create_vektor_move);
addEndpoint(create_wrap_vektor_wrap);
addEndpoint(create_wrap_vektor_unwrap);
addEndpoint(list_bridge_vektor_quotes);
addEndpoint(list_lock_vektor_markets);
addEndpoint(list_lock_vektor_positions);
addEndpoint(list_vote_vektor_markets);
addEndpoint(list_vote_vektor_rewards);
addEndpoint(list_vektor_incentivize);
addEndpoint(list_vektor_executions);
addEndpoint(get_vektor_executions);
addEndpoint(get_executions_vektor_steps);
addEndpoint(sign_executions_vektor_steps);

export type Filter = {
  type: 'resource' | 'operation' | 'tag' | 'tool';
  op: 'include' | 'exclude';
  value: string;
};

export function query(filters: Filter[], endpoints: Endpoint[]): Endpoint[] {
  const allExcludes = filters.length > 0 && filters.every((filter) => filter.op === 'exclude');
  const unmatchedFilters = new Set(filters);

  const filtered = endpoints.filter((endpoint: Endpoint) => {
    let included = false || allExcludes;

    for (const filter of filters) {
      if (match(filter, endpoint)) {
        unmatchedFilters.delete(filter);
        included = filter.op === 'include';
      }
    }

    return included;
  });

  // Check if any filters didn't match
  const unmatched = Array.from(unmatchedFilters).filter((f) => f.type === 'tool' || f.type === 'resource');
  if (unmatched.length > 0) {
    throw new Error(
      `The following filters did not match any endpoints: ${unmatched
        .map((f) => `${f.type}=${f.value}`)
        .join(', ')}`,
    );
  }

  return filtered;
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
