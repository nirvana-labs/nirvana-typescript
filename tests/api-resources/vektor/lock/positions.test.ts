// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NirvanaLabs from '@nirvana-labs/nirvana';

const client = new NirvanaLabs({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource positions', () => {
  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('list: only required params', async () => {
    const responsePromise = client.vektor.lock.positions.list({
      accounts: ['0x6b175474e89094c44da98b954eedeac495271d0f'],
      assets: ['asset_01jbz9qc00f8wr64hfe459gb7y'],
      blockchain: 'blockchain_01jbz9nsy8egar70jg79dkwmaf',
      venues: ['venue_01jbz9qc18evw86sg8m0sj9jg5'],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('list: required and optional params', async () => {
    const response = await client.vektor.lock.positions.list({
      accounts: ['0x6b175474e89094c44da98b954eedeac495271d0f'],
      assets: ['asset_01jbz9qc00f8wr64hfe459gb7y'],
      blockchain: 'blockchain_01jbz9nsy8egar70jg79dkwmaf',
      venues: ['venue_01jbz9qc18evw86sg8m0sj9jg5'],
    });
  });
});
