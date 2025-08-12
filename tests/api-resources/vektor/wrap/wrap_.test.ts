// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NirvanaLabs from '@nirvana-labs/nirvana';

const client = new NirvanaLabs({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource wrap', () => {
  // Prism doesn't support callbacks yet
  test.skip('create: only required params', async () => {
    const responsePromise = client.vektor.wrap.wrap.create({
      amount: '10.0000000000000024',
      blockchain: 'blockchain_01jbz9nsy8egar70jg79dkwmaf',
      from: '0x6b175474e89094c44da98b954eedeac495271d0f',
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
    const response = await client.vektor.wrap.wrap.create({
      amount: '10.0000000000000024',
      blockchain: 'blockchain_01jbz9nsy8egar70jg79dkwmaf',
      from: '0x6b175474e89094c44da98b954eedeac495271d0f',
    });
  });
});
