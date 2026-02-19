# Organizations

Types:

- <code><a href="./src/resources/organizations.ts">Organization</a></code>
- <code><a href="./src/resources/organizations.ts">OrganizationList</a></code>
- <code><a href="./src/resources/organizations.ts">OrganizationMembership</a></code>

Methods:

- <code title="post /v1/organizations">client.organizations.<a href="./src/resources/organizations.ts">create</a>({ ...params }) -> Organization</code>
- <code title="patch /v1/organizations/{organization_id}">client.organizations.<a href="./src/resources/organizations.ts">update</a>(organizationID, { ...params }) -> Organization</code>
- <code title="get /v1/organizations">client.organizations.<a href="./src/resources/organizations.ts">list</a>({ ...params }) -> OrganizationsCursor</code>
- <code title="get /v1/organizations/{organization_id}">client.organizations.<a href="./src/resources/organizations.ts">get</a>(organizationID) -> Organization</code>
