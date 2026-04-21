# Organizations

Types:

- <code><a href="./src/resources/organizations/organizations.ts">Organization</a></code>
- <code><a href="./src/resources/organizations/organizations.ts">OrganizationDomain</a></code>
- <code><a href="./src/resources/organizations/organizations.ts">OrganizationList</a></code>
- <code><a href="./src/resources/organizations/organizations.ts">OrganizationServices</a></code>
- <code><a href="./src/resources/organizations/organizations.ts">OrganizationType</a></code>

Methods:

- <code title="post /v1/organizations">client.organizations.<a href="./src/resources/organizations/organizations.ts">create</a>({ ...params }) -> Organization</code>
- <code title="patch /v1/organizations/{organization_id}">client.organizations.<a href="./src/resources/organizations/organizations.ts">update</a>(organizationID, { ...params }) -> Organization</code>
- <code title="get /v1/organizations">client.organizations.<a href="./src/resources/organizations/organizations.ts">list</a>({ ...params }) -> OrganizationsCursor</code>
- <code title="get /v1/organizations/{organization_id}">client.organizations.<a href="./src/resources/organizations/organizations.ts">get</a>(organizationID) -> Organization</code>
- <code title="post /v1/organizations/{organization_id}/leave">client.organizations.<a href="./src/resources/organizations/organizations.ts">leave</a>(organizationID) -> void</code>

## Memberships

Types:

- <code><a href="./src/resources/organizations/memberships.ts">OrganizationMembership</a></code>
- <code><a href="./src/resources/organizations/memberships.ts">OrganizationMembershipList</a></code>

Methods:

- <code title="get /v1/organizations/{organization_id}/memberships">client.organizations.memberships.<a href="./src/resources/organizations/memberships.ts">list</a>(organizationID, { ...params }) -> OrganizationMembershipsCursor</code>
- <code title="get /v1/organizations/{organization_id}/memberships/{membership_id}">client.organizations.memberships.<a href="./src/resources/organizations/memberships.ts">get</a>(membershipID, { ...params }) -> OrganizationMembership</code>
