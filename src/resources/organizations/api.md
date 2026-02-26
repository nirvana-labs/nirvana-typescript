# Organizations

Types:

- <code><a href="./src/resources/organizations/organizations.ts">AuditLog</a></code>
- <code><a href="./src/resources/organizations/organizations.ts">AuditLogActor</a></code>
- <code><a href="./src/resources/organizations/organizations.ts">AuditLogType</a></code>
- <code><a href="./src/resources/organizations/organizations.ts">Organization</a></code>
- <code><a href="./src/resources/organizations/organizations.ts">OrganizationList</a></code>
- <code><a href="./src/resources/organizations/organizations.ts">OrganizationMembership</a></code>
- <code><a href="./src/resources/organizations/organizations.ts">Services</a></code>

Methods:

- <code title="post /v1/organizations">client.organizations.<a href="./src/resources/organizations/organizations.ts">create</a>({ ...params }) -> Organization</code>
- <code title="patch /v1/organizations/{organization_id}">client.organizations.<a href="./src/resources/organizations/organizations.ts">update</a>(organizationID, { ...params }) -> Organization</code>
- <code title="get /v1/organizations">client.organizations.<a href="./src/resources/organizations/organizations.ts">list</a>({ ...params }) -> OrganizationsCursor</code>
- <code title="get /v1/organizations/{organization_id}">client.organizations.<a href="./src/resources/organizations/organizations.ts">get</a>(organizationID) -> Organization</code>

## AuditLogs

Methods:

- <code title="get /v1/organizations/{organization_id}/audit_logs">client.organizations.auditLogs.<a href="./src/resources/organizations/audit-logs.ts">list</a>(organizationID, { ...params }) -> AuditLogsCursor</code>
- <code title="get /v1/organizations/{organization_id}/audit_logs/{audit_log_id}">client.organizations.auditLogs.<a href="./src/resources/organizations/audit-logs.ts">get</a>(auditLogID, { ...params }) -> AuditLog</code>
