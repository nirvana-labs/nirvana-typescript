// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NirvanaLabs from '@nirvana-labs/nirvana';

const client = new NirvanaLabs({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource steps', () => {
  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('get: only required params', async () => {
    const responsePromise = client.vektor.executions.steps.get('step_id', { execution_id: 'execution_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('get: required and optional params', async () => {
    const response = await client.vektor.executions.steps.get('step_id', { execution_id: 'execution_id' });
  });

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('sign: only required params', async () => {
    const responsePromise = client.vektor.executions.steps.sign('step_id', {
      execution_id: 'execution_id',
      signed_payload: '0x123456789abcdef',
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
  test.skip('sign: required and optional params', async () => {
    const response = await client.vektor.executions.steps.sign('step_id', {
      execution_id: 'execution_id',
      signed_payload: '0x123456789abcdef',
    });
  });
});
