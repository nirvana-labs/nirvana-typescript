// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NirvanaLabs from '@nirvana-labs/nirvana';

const client = new NirvanaLabs({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource markets', () => {
  // Prism doesn't support callbacks yet
  test.skip('list: only required params', async () => {
    const responsePromise = client.vektor.lend.markets.list({
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

  // Prism doesn't support callbacks yet
  test.skip('list: required and optional params', async () => {
    const response = await client.vektor.lend.markets.list({
      assets: ['asset_01jbz9qc00f8wr64hfe459gb7y'],
      blockchain: 'blockchain_01jbz9nsy8egar70jg79dkwmaf',
      venues: ['venue_01jbz9qc18evw86sg8m0sj9jg5'],
      at: '2021-01-01T12:00:00Z',
      quote_asset_symbol: 'eth',
    });
  });

  // Prism doesn't support callbacks yet
  test.skip('listHistorical: only required params', async () => {
    const responsePromise = client.vektor.lend.markets.listHistorical({
      assets: ['asset_01jbz9qc00f8wr64hfe459gb7y'],
      blockchain: 'blockchain_01jbz9nsy8egar70jg79dkwmaf',
      from: '2021-01-01T12:00:00Z',
      to: '2021-01-01T12:00:00Z',
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

  // Prism doesn't support callbacks yet
  test.skip('listHistorical: required and optional params', async () => {
    const response = await client.vektor.lend.markets.listHistorical({
      assets: ['asset_01jbz9qc00f8wr64hfe459gb7y'],
      blockchain: 'blockchain_01jbz9nsy8egar70jg79dkwmaf',
      from: '2021-01-01T12:00:00Z',
      to: '2021-01-01T12:00:00Z',
      venues: ['venue_01jbz9qc18evw86sg8m0sj9jg5'],
      quote_asset_symbol: 'eth',
    });
  });
});
