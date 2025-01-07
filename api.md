# Vms

Types:

- <code><a href="./src/resources/vms/vms.ts">Vm</a></code>
- <code><a href="./src/resources/vms/vms.ts">VmCreateResponse</a></code>
- <code><a href="./src/resources/vms/vms.ts">VmUpdateResponse</a></code>
- <code><a href="./src/resources/vms/vms.ts">VmListResponse</a></code>
- <code><a href="./src/resources/vms/vms.ts">VmDeleteResponse</a></code>

Methods:

- <code title="post /vms">client.vms.<a href="./src/resources/vms/vms.ts">create</a>({ ...params }) -> VmCreateResponse</code>
- <code title="get /vms/{vm_id}">client.vms.<a href="./src/resources/vms/vms.ts">retrieve</a>(vmId) -> Vm</code>
- <code title="patch /vms/{vm_id}">client.vms.<a href="./src/resources/vms/vms.ts">update</a>(vmId, { ...params }) -> VmUpdateResponse</code>
- <code title="get /vms">client.vms.<a href="./src/resources/vms/vms.ts">list</a>({ ...params }) -> VmListResponse</code>
- <code title="delete /vms/{vm_id}">client.vms.<a href="./src/resources/vms/vms.ts">delete</a>(vmId) -> VmDeleteResponse</code>

## Operations

Types:

- <code><a href="./src/resources/vms/operations.ts">OperationRetrieveResponse</a></code>

Methods:

- <code title="get /vms/operations/{operation_id}">client.vms.operations.<a href="./src/resources/vms/operations.ts">retrieve</a>(operationId) -> OperationRetrieveResponse</code>

# Vpcs

Types:

- <code><a href="./src/resources/vpcs/vpcs.ts">Vpc</a></code>
- <code><a href="./src/resources/vpcs/vpcs.ts">VpcCreateResponse</a></code>
- <code><a href="./src/resources/vpcs/vpcs.ts">VpcListResponse</a></code>
- <code><a href="./src/resources/vpcs/vpcs.ts">VpcDeleteResponse</a></code>

Methods:

- <code title="post /vpcs">client.vpcs.<a href="./src/resources/vpcs/vpcs.ts">create</a>({ ...params }) -> VpcCreateResponse</code>
- <code title="get /vpcs/{vpc_id}">client.vpcs.<a href="./src/resources/vpcs/vpcs.ts">retrieve</a>(vpcId) -> Vpc</code>
- <code title="get /vpcs">client.vpcs.<a href="./src/resources/vpcs/vpcs.ts">list</a>({ ...params }) -> VpcListResponse</code>
- <code title="delete /vpcs/{vpc_id}">client.vpcs.<a href="./src/resources/vpcs/vpcs.ts">delete</a>(vpcId) -> VpcDeleteResponse</code>

## Operations

Types:

- <code><a href="./src/resources/vpcs/operations.ts">OperationRetrieveResponse</a></code>

Methods:

- <code title="get /vpcs/operations/{operation_id}">client.vpcs.operations.<a href="./src/resources/vpcs/operations.ts">retrieve</a>(operationId) -> OperationRetrieveResponse</code>

## FirewallRules

Types:

- <code><a href="./src/resources/vpcs/firewall-rules/firewall-rules.ts">Firewallrule</a></code>
- <code><a href="./src/resources/vpcs/firewall-rules/firewall-rules.ts">FirewallRuleCreateResponse</a></code>
- <code><a href="./src/resources/vpcs/firewall-rules/firewall-rules.ts">FirewallRuleUpdateResponse</a></code>
- <code><a href="./src/resources/vpcs/firewall-rules/firewall-rules.ts">FirewallRuleListResponse</a></code>
- <code><a href="./src/resources/vpcs/firewall-rules/firewall-rules.ts">FirewallRuleDeleteResponse</a></code>

Methods:

- <code title="post /vpcs/{vpc_id}/firewall_rules">client.vpcs.firewallRules.<a href="./src/resources/vpcs/firewall-rules/firewall-rules.ts">create</a>(vpcId, { ...params }) -> FirewallRuleCreateResponse</code>
- <code title="get /vpcs/{vpc_id}/firewall_rules/{firewall_rule_id}">client.vpcs.firewallRules.<a href="./src/resources/vpcs/firewall-rules/firewall-rules.ts">retrieve</a>(vpcId, firewallRuleId) -> Firewallrule</code>
- <code title="patch /vpcs/{vpc_id}/firewall_rules/{firewall_rule_id}">client.vpcs.firewallRules.<a href="./src/resources/vpcs/firewall-rules/firewall-rules.ts">update</a>(vpcId, firewallRuleId, { ...params }) -> FirewallRuleUpdateResponse</code>
- <code title="get /vpcs/{vpc_id}/firewall_rules">client.vpcs.firewallRules.<a href="./src/resources/vpcs/firewall-rules/firewall-rules.ts">list</a>(vpcId) -> FirewallRuleListResponse</code>
- <code title="delete /vpcs/{vpc_id}/firewall_rules/{firewall_rule_id}">client.vpcs.firewallRules.<a href="./src/resources/vpcs/firewall-rules/firewall-rules.ts">delete</a>(vpcId, firewallRuleId) -> FirewallRuleDeleteResponse</code>

### Operations

Types:

- <code><a href="./src/resources/vpcs/firewall-rules/operations.ts">OperationRetrieveResponse</a></code>

Methods:

- <code title="get /vpcs/{vpc_id}/firewall_rules/operations/{operation_id}">client.vpcs.firewallRules.operations.<a href="./src/resources/vpcs/firewall-rules/operations.ts">retrieve</a>(vpcId, operationId) -> OperationRetrieveResponse</code>
