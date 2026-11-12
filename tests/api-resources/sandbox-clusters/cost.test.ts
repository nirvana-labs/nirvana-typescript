// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NirvanaLabs from '@nirvana-labs/nirvana';

const client = new NirvanaLabs({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource cost', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.sandboxClusters.cost.create({
      instance_type: 'n1-standard-8',
      name: 'my-sandboxes',
      node_count: 3,
      project_id: '123e4567-e89b-12d3-a456-426614174000',
      region: 'us-sva-2',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.sandboxClusters.cost.create({
      instance_type: 'n1-standard-8',
      name: 'my-sandboxes',
      node_count: 3,
      project_id: '123e4567-e89b-12d3-a456-426614174000',
      region: 'us-sva-2',
      tags: ['production', 'agents'],
    });
  });
});
