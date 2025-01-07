// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Nirvana from 'nirvana';
import { Response } from 'node-fetch';

const client = new Nirvana({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource vms', () => {
  test('create: only required params', async () => {
    const responsePromise = client.vms.create({
      cpu: { cores: 2 },
      name: 'my-vm',
      need_public_ip: true,
      os_image_id: 1,
      ports: ['22', '80', '443'],
      ram: { size: 2, unit: 'GB' },
      region: 'amsterdam',
      source_address: '0.0.0.0/0',
      ssh_key: { public_key: 'ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQC1234567890' },
      storage: [{ size: 100, type: 'nvme', unit: 'GB' }],
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
    const response = await client.vms.create({
      cpu: { cores: 2 },
      name: 'my-vm',
      need_public_ip: true,
      os_image_id: 1,
      ports: ['22', '80', '443'],
      ram: { size: 2, unit: 'GB' },
      region: 'amsterdam',
      source_address: '0.0.0.0/0',
      ssh_key: { public_key: 'ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQC1234567890' },
      storage: [{ size: 100, type: 'nvme', unit: 'GB', disk_name: 'disk_name' }],
      subnet_id: '123e4567-e89b-12d3-a456-426614174000',
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.vms.retrieve('vm_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.vms.retrieve('vm_id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Nirvana.NotFoundError,
    );
  });

  test('update', async () => {
    const responsePromise = client.vms.update('vm_id', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: only required params', async () => {
    const responsePromise = client.vms.list({ region: 'region' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.vms.list({ region: 'region' });
  });

  test('delete', async () => {
    const responsePromise = client.vms.delete('vm_id');
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
    await expect(client.vms.delete('vm_id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Nirvana.NotFoundError,
    );
  });
});
