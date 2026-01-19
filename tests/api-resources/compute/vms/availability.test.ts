// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NirvanaLabs from '@nirvana-labs/nirvana';

const client = new NirvanaLabs({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource availability', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.compute.vms.availability.create({
      boot_volume: { size: 100, type: 'nvme' },
      cpu_config: { vcpu: 2 },
      memory_config: { size: 2 },
      name: 'my-vm',
      os_image_name: 'ubuntu-noble-2025-10-01',
      public_ip_enabled: true,
      region: 'us-wdc-1',
      ssh_key: {
        public_key: 'ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIDBIASkmwNiLcdlW6927Zjt1Hf7Kw/PpEZ4Zm+wU9wn2',
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

  // Prism tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.compute.vms.availability.create({
      boot_volume: {
        size: 100,
        type: 'nvme',
        tags: ['production', 'ethereum'],
      },
      cpu_config: { vcpu: 2 },
      memory_config: { size: 2 },
      name: 'my-vm',
      os_image_name: 'ubuntu-noble-2025-10-01',
      public_ip_enabled: true,
      region: 'us-wdc-1',
      ssh_key: {
        public_key: 'ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIDBIASkmwNiLcdlW6927Zjt1Hf7Kw/PpEZ4Zm+wU9wn2',
      },
      subnet_id: '123e4567-e89b-12d3-a456-426614174000',
      data_volumes: [
        {
          name: 'my-data-volume',
          size: 100,
          type: 'nvme',
          tags: ['production', 'ethereum'],
        },
      ],
      tags: ['production', 'ethereum'],
    });
  });

  // Prism tests are disabled
  test.skip('update', async () => {
    const responsePromise = client.compute.vms.availability.update('vm_id', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
