// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NirvanaLabs from 'nirvana-labs';
import { Response } from 'node-fetch';

const client = new NirvanaLabs({
  authToken: 'My Auth Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource vms', () => {
  test('create: only required params', async () => {
    const responsePromise = client.vms.create({
      boot_volume: { size: 100 },
      cpu: { cores: 2 },
      name: 'my-vm',
      need_public_ip: true,
      os_image_id: 1,
      ports: ['22', '80', '443'],
      ram: { size: 2 },
      region: 'amsterdam',
      source_address: '0.0.0.0/0',
      ssh_key: { public_key: 'ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQC1234567890' },
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
      boot_volume: { size: 100 },
      cpu: { cores: 2 },
      name: 'my-vm',
      need_public_ip: true,
      os_image_id: 1,
      ports: ['22', '80', '443'],
      ram: { size: 2 },
      region: 'amsterdam',
      source_address: '0.0.0.0/0',
      ssh_key: { public_key: 'ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQC1234567890' },
      data_volumes: [{ size: 100, type: 'nvme' }],
      subnet_id: '123e4567-e89b-12d3-a456-426614174000',
    });
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

  test('list', async () => {
    const responsePromise = client.vms.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.vms.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      NirvanaLabs.NotFoundError,
    );
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
      NirvanaLabs.NotFoundError,
    );
  });

  test('get', async () => {
    const responsePromise = client.vms.get('vm_id');
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
    await expect(client.vms.get('vm_id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      NirvanaLabs.NotFoundError,
    );
  });
});
