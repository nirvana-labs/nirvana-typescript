// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NirvanaLabs from '@nirvana-labs/nirvana';

const client = new NirvanaLabs({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource volumes', () => {
  // Mock server tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.nks.clusters.pools.volumes.list('pool_id', { cluster_id: 'cluster_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: required and optional params', async () => {
    const response = await client.nks.clusters.pools.volumes.list('pool_id', {
      cluster_id: 'cluster_id',
      cursor: 'cursor',
      kind: 'boot',
      limit: 10,
      name: 'name',
      size_gb_max: 0,
      size_gb_min: 0,
      sort: 'sort',
      status: 'ready',
      type: 'abs',
    });
  });
});
