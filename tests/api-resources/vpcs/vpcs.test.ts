// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NirvanaLabs from 'nirvana';
import { Response } from 'node-fetch';

const client = new NirvanaLabs({
  authToken: 'My Auth Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource vpcs', () => {
  test('create: only required params', async () => {
    const responsePromise = client.vpcs.create({
      name: 'my-vpc',
      region: 'amsterdam',
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

  test('create: required and optional params', async () => {
    const response = await client.vpcs.create({
      name: 'my-vpc',
      region: 'amsterdam',
      subnet_name: 'my-subnet',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.vpcs.list({ region: 'region' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.vpcs.list({ region: 'region' });
  });

  test('delete', async () => {
    const responsePromise = client.vpcs.delete('vpc_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.vpcs.delete('vpc_id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      NirvanaLabs.NotFoundError,
    );
  });

  test('get', async () => {
    const responsePromise = client.vpcs.get('vpc_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.vpcs.get('vpc_id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      NirvanaLabs.NotFoundError,
    );
  });
});
