// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NirvanaLabs from '@nirvana-labs/nirvana';

const client = new NirvanaLabs({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource availability', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.networking.vpcs.availability.create({
      name: 'my-vpc',
      region: 'us-wdc-1',
      subnet_name: 'my-subnet',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.networking.vpcs.availability.create({
      name: 'my-vpc',
      region: 'us-wdc-1',
      subnet_name: 'my-subnet',
      project_id: '123e4567-e89b-12d3-a456-426614174000',
      tags: ['production', 'ethereum'],
    });
  });

  // Prism tests are disabled
  test.skip('update', async () => {
    const responsePromise = client.networking.vpcs.availability.update('vpc_id', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
