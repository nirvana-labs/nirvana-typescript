// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NirvanaLabs from '@nirvana-labs/nirvana';

const client = new NirvanaLabs({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource vms', () => {
  test('create: only required params', async () => {
    const responsePromise = client.compute.vms.create({
      boot_volume: { size: 100 },
      cpu_config: { vcpu: 2 },
      memory_config: { size: 2 },
      name: 'my-vm',
      os_image_name: 'ubuntu-noble-2025-04-03',
      public_ip_enabled: true,
      region: 'us-wdc-1',
      ssh_key: {
        public_key:
          'ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAAAgQDJiJabIUkXw7VrQG+yBohvhEsyoKEYvejZc4RFzV5maybqQei1punVsoe4r6gJttMM1Gr3cNr3OfepikCQAhAchw5ww94ZWqDsDYIqMrlDFbqhGTXDNzFAjeVIKptCOlz9k+7aM69YtLXJ6gFUCq1fbK9PjY+AK28UpMfKYUcyHQ== noname',
      },
      subnet_id: '123e4567-e89b-12d3-a456-426614174000',
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
    const response = await client.compute.vms.create({
      boot_volume: { size: 100 },
      cpu_config: { vcpu: 2 },
      memory_config: { size: 2 },
      name: 'my-vm',
      os_image_name: 'ubuntu-noble-2025-04-03',
      public_ip_enabled: true,
      region: 'us-wdc-1',
      ssh_key: {
        public_key:
          'ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAAAgQDJiJabIUkXw7VrQG+yBohvhEsyoKEYvejZc4RFzV5maybqQei1punVsoe4r6gJttMM1Gr3cNr3OfepikCQAhAchw5ww94ZWqDsDYIqMrlDFbqhGTXDNzFAjeVIKptCOlz9k+7aM69YtLXJ6gFUCq1fbK9PjY+AK28UpMfKYUcyHQ== noname',
      },
      subnet_id: '123e4567-e89b-12d3-a456-426614174000',
      data_volumes: [{ name: 'my-data-volume', size: 100 }],
    });
  });

  test('update', async () => {
    const responsePromise = client.compute.vms.update('vm_id', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list', async () => {
    const responsePromise = client.compute.vms.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete', async () => {
    const responsePromise = client.compute.vms.delete('vm_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get', async () => {
    const responsePromise = client.compute.vms.get('vm_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
