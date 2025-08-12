// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NirvanaLabs from '@nirvana-labs/nirvana';

const client = new NirvanaLabs({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource depositQuote', () => {
  // Prism doesn't support callbacks yet
  test.skip('create: only required params', async () => {
    const responsePromise = client.vektor.lp.depositQuote.create({
      amount: '10.0000000000000024',
      asset: 'asset_01jbz9qc00f8wr64hfe459gb7y',
      blockchain: 'blockchain_01jbz9nsy8egar70jg79dkwmaf',
      lp_pool_id: 'lp_pool_01h455vb4pex5vsknk084sn02q',
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
  test.skip('create: required and optional params', async () => {
    const response = await client.vektor.lp.depositQuote.create({
      amount: '10.0000000000000024',
      asset: 'asset_01jbz9qc00f8wr64hfe459gb7y',
      blockchain: 'blockchain_01jbz9nsy8egar70jg79dkwmaf',
      lp_pool_id: 'lp_pool_01h455vb4pex5vsknk084sn02q',
      quote_asset_symbol: 'eth',
      range: { lower: '10.0000000000000024', upper: '10.0000000000000024' },
    });
  });
});
