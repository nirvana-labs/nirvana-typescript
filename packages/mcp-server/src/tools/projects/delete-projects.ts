// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@nirvana-labs/nirvana-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import NirvanaLabs from '@nirvana-labs/nirvana';

export const metadata: Metadata = {
  resource: 'projects',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v1/projects/{project_id}',
  operationId: 'delete_project',
};

export const tool: Tool = {
  name: 'delete_projects',
  description: 'Delete a project',
  inputSchema: {
    type: 'object',
    properties: {
      project_id: {
        type: 'string',
      },
    },
    required: ['project_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: NirvanaLabs, args: Record<string, unknown> | undefined) => {
  const { project_id, ...body } = args as any;
  const response = await client.projects.delete(project_id).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
