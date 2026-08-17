// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NirvanaLabs from '@nirvana-labs/nirvana';

const client = new NirvanaLabs({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource instanceTypes', () => {
  // Mock server tests are disabled
  test.skip('get: only required params', async () => {
    const responsePromise = client.instanceTypes.get('n1-standard-8', { region: 'us-sva-2' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('get: required and optional params', async () => {
    const response = await client.instanceTypes.get('n1-standard-8', { region: 'us-sva-2' });
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.instanceTypes.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.instanceTypes.list(
        {
          chipset: 'chipset',
          cursor: 'cursor',
          family: 'family',
          limit: 10,
          memory_gb_max: 0,
          memory_gb_min: 0,
          name: 'name',
          network_bandwidth_gbps_max: 0,
          network_bandwidth_gbps_min: 0,
          region: 'region',
          series: 'series',
          sort: 'sort',
          vcpu_max: 0,
          vcpu_min: 0,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(NirvanaLabs.NotFoundError);
  });
});
