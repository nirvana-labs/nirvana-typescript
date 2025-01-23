// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NirvanaLabs from '@nirvana-labs/nirvana';
import { Response } from 'node-fetch';

const client = new NirvanaLabs({
  authToken: 'My Auth Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource volumes', () => {
  test('create: only required params', async () => {
    const responsePromise = client.volumes.create({ size: 100, vm_id: 'vm_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.volumes.create({ size: 100, vm_id: 'vm_id', type: 'nvme' });
  });

  test('update: only required params', async () => {
    const responsePromise = client.volumes.update('volume_id', { size: 100, vm_id: 'vm_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.volumes.update('volume_id', { size: 100, vm_id: 'vm_id' });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.volumes.delete('volume_id', { vm_id: 'vm_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.volumes.delete('volume_id', { vm_id: 'vm_id' });
  });
});
