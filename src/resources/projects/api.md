# Projects

Types:

- <code><a href="./src/resources/projects.ts">Project</a></code>
- <code><a href="./src/resources/projects.ts">ProjectList</a></code>

Methods:

- <code title="post /v1/projects">client.projects.<a href="./src/resources/projects.ts">create</a>({ ...params }) -> Project</code>
- <code title="patch /v1/projects/{project_id}">client.projects.<a href="./src/resources/projects.ts">update</a>(projectID, { ...params }) -> Project</code>
- <code title="get /v1/projects">client.projects.<a href="./src/resources/projects.ts">list</a>({ ...params }) -> ProjectsCursor</code>
- <code title="delete /v1/projects/{project_id}">client.projects.<a href="./src/resources/projects.ts">delete</a>(projectID) -> void</code>
- <code title="get /v1/projects/{project_id}">client.projects.<a href="./src/resources/projects.ts">get</a>(projectID) -> Project</code>
