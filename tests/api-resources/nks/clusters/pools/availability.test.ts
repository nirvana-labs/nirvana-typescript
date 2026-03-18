// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NirvanaLabs from '@nirvana-labs/nirvana';

const client = new NirvanaLabs({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource availability', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.nks.clusters.pools.availability.create('cluster_id', {
      name: 'my-node-pool',
      node_config: {
        ram_gi: 8,
        storage_gi: 100,
        vcpu: 4,
      },
      node_count: 3,
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
    const response = await client.nks.clusters.pools.availability.create('cluster_id', {
      name: 'my-node-pool',
      node_config: {
        ram_gi: 8,
        storage_gi: 100,
        vcpu: 4,
      },
      node_count: 3,
      tags: ['production', 'ethereum'],
    });
  });

  // Mock server tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.nks.clusters.pools.availability.update('pool_id', {
      cluster_id: 'cluster_id',
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
  test.skip('update: required and optional params', async () => {
    const response = await client.nks.clusters.pools.availability.update('pool_id', {
      cluster_id: 'cluster_id',
      name: 'my-node-pool',
      tags: ['production', 'ethereum'],
    });
  });
});
