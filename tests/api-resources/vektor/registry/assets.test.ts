// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NirvanaLabs from '@nirvana-labs/nirvana';

const client = new NirvanaLabs({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource assets', () => {
  // Prism doesn't support callbacks yet
  test.skip('list', async () => {
    const responsePromise = client.vektor.registry.assets.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism doesn't support callbacks yet
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.vektor.registry.assets.list(
        {
          id: 'asset_01jbz9qc00f8wr64hfe459gb7y',
          blockchain: 'blockchain_01jbz9nsy8egar70jg79dkwmaf',
          symbol: 'eth',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(NirvanaLabs.NotFoundError);
  });
});
