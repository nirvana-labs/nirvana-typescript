// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NirvanaLabs from '@nirvana-labs/nirvana';

const client = new NirvanaLabs({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource quotes', () => {
  // Prism doesn't support callbacks yet
  test.skip('list: only required params', async () => {
    const responsePromise = client.vektor.sell.quotes.list({
      blockchain: 'blockchain_01jbz9nsy8egar70jg79dkwmaf',
      receive_asset: 'asset_01jbz9qc00f8wr64hfe459gb7y',
      spend_amount: '10.0000000000000024',
      spend_asset: 'asset_01jbz9qc00f8wr64hfe459gb7y',
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
    const response = await client.vektor.sell.quotes.list({
      blockchain: 'blockchain_01jbz9nsy8egar70jg79dkwmaf',
      receive_asset: 'asset_01jbz9qc00f8wr64hfe459gb7y',
      spend_amount: '10.0000000000000024',
      spend_asset: 'asset_01jbz9qc00f8wr64hfe459gb7y',
      venues: ['venue_01jbz9qc18evw86sg8m0sj9jg5'],
      quote_asset_symbol: 'eth',
    });
  });
});
