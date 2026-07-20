# Organizations

Types:

- <code><a href="./src/resources/organizations/organizations.ts">Organization</a></code>
- <code><a href="./src/resources/organizations/organizations.ts">OrganizationDomain</a></code>
- <code><a href="./src/resources/organizations/organizations.ts">OrganizationList</a></code>
- <code><a href="./src/resources/organizations/organizations.ts">OrganizationServices</a></code>
- <code><a href="./src/resources/organizations/organizations.ts">OrganizationType</a></code>

Methods:

- <code title="post /v1/organizations">client.organizations.<a href="./src/resources/organizations/organizations.ts">create</a>({ ...params }) -> Organization</code>
- <code title="get /v1/organizations/{organization_id}">client.organizations.<a href="./src/resources/organizations/organizations.ts">get</a>(organizationID) -> Organization</code>
- <code title="patch /v1/organizations/{organization_id}">client.organizations.<a href="./src/resources/organizations/organizations.ts">update</a>(organizationID, { ...params }) -> Organization</code>
- <code title="get /v1/organizations">client.organizations.<a href="./src/resources/organizations/organizations.ts">list</a>({ ...params }) -> OrganizationsCursor</code>
- <code title="post /v1/organizations/{organization_id}/leave">client.organizations.<a href="./src/resources/organizations/organizations.ts">leave</a>(organizationID) -> void</code>

## Memberships

Types:

- <code><a href="./src/resources/organizations/memberships.ts">OrganizationMembership</a></code>
- <code><a href="./src/resources/organizations/memberships.ts">OrganizationMembershipList</a></code>

Methods:

- <code title="get /v1/organizations/{organization_id}/memberships/{membership_id}">client.organizations.memberships.<a href="./src/resources/organizations/memberships.ts">get</a>(membershipID, { ...params }) -> OrganizationMembership</code>
- <code title="get /v1/organizations/{organization_id}/memberships">client.organizations.memberships.<a href="./src/resources/organizations/memberships.ts">list</a>(organizationID, { ...params }) -> OrganizationMembershipsCursor</code>

## Address

Types:

- <code><a href="./src/resources/organizations/address.ts">OrganizationAddress</a></code>

Methods:

- <code title="post /v1/organizations/{organization_id}/address">client.organizations.address.<a href="./src/resources/organizations/address.ts">create</a>(organizationID, { ...params }) -> OrganizationAddress</code>
- <code title="get /v1/organizations/{organization_id}/address">client.organizations.address.<a href="./src/resources/organizations/address.ts">get</a>(organizationID) -> OrganizationAddress</code>
- <code title="patch /v1/organizations/{organization_id}/address">client.organizations.address.<a href="./src/resources/organizations/address.ts">update</a>(organizationID, { ...params }) -> OrganizationAddress</code>

## Billing

Types:

- <code><a href="./src/resources/organizations/billing.ts">BillingHistoryEntry</a></code>
- <code><a href="./src/resources/organizations/billing.ts">BillingHistoryEntryList</a></code>
- <code><a href="./src/resources/organizations/billing.ts">BillingHistoryEntryType</a></code>
- <code><a href="./src/resources/organizations/billing.ts">DailyCostPoint</a></code>
- <code><a href="./src/resources/organizations/billing.ts">OrganizationDailyCost</a></code>

Methods:

- <code title="get /v1/organizations/{organization_id}/billing/summary">client.organizations.billing.<a href="./src/resources/organizations/billing.ts">summary</a>(organizationID) -> OrganizationBillingSummary</code>
- <code title="get /v1/organizations/{organization_id}/billing/cost">client.organizations.billing.<a href="./src/resources/organizations/billing.ts">cost</a>(organizationID, { ...params }) -> OrganizationDailyCost</code>
- <code title="get /v1/organizations/{organization_id}/billing/history">client.organizations.billing.<a href="./src/resources/organizations/billing.ts">history</a>(organizationID, { ...params }) -> BillingHistoryEntryList</code>
- <code title="post /v1/organizations/{organization_id}/billing/topup">client.organizations.billing.<a href="./src/resources/organizations/billing.ts">topUp</a>(organizationID, { ...params }) -> OrganizationBillingSummary</code>
- <code title="post /v1/organizations/{organization_id}/billing/recharge">client.organizations.billing.<a href="./src/resources/organizations/billing.ts">recharge</a>(organizationID, { ...params }) -> OrganizationBillingSummary</code>
