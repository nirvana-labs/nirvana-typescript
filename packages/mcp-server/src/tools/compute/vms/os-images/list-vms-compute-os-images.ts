// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import NirvanaLabs from '@nirvana-labs/nirvana';

export const metadata: Metadata = {
  resource: 'compute.vms.os_images',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_vms_compute_os_images',
  description: 'List all OS Images',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = (client: NirvanaLabs, args: any) => {
  const {} = args;
  return client.compute.vms.osImages.list();
};

export default { metadata, tool, handler };
