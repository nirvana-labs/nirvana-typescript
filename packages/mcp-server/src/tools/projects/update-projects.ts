// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@nirvana-labs/nirvana-mcp/filtering';
import { Metadata, asTextContentResult } from '@nirvana-labs/nirvana-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import NirvanaLabs from '@nirvana-labs/nirvana';

export const metadata: Metadata = {
  resource: 'projects',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/v1/projects/{project_id}',
  operationId: 'update_project',
};

export const tool: Tool = {
  name: 'update_projects',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdate an existing project\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/project',\n  $defs: {\n    project: {\n      type: 'object',\n      description: 'Project response.',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Project ID.'\n        },\n        created_at: {\n          type: 'string',\n          description: 'When the Project was created.',\n          format: 'date-time'\n        },\n        name: {\n          type: 'string',\n          description: 'Project name.'\n        },\n        tags: {\n          type: 'array',\n          description: 'Tags attached to the Project.',\n          items: {\n            type: 'string'\n          }\n        },\n        updated_at: {\n          type: 'string',\n          description: 'When the Project was updated.',\n          format: 'date-time'\n        },\n        user_id: {\n          type: 'string',\n          description: 'User ID that owns the project.'\n        }\n      },\n      required: [        'id',\n        'created_at',\n        'name',\n        'tags',\n        'updated_at',\n        'user_id'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      project_id: {
        type: 'string',
      },
      name: {
        type: 'string',
        description: 'Project name.',
      },
      tags: {
        type: 'array',
        description: 'Tags to attach to the Project.',
        items: {
          type: 'string',
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['project_id'],
  },
  annotations: {},
};

export const handler = async (client: NirvanaLabs, args: Record<string, unknown> | undefined) => {
  const { project_id, jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.projects.update(project_id, body)));
};

export default { metadata, tool, handler };
