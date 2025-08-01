// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NirvanaLabs from '@nirvana-labs/nirvana';

const client = new NirvanaLabs({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource firewallRules', () => {
  test('create: only required params', async () => {
    const responsePromise = client.networking.firewallRules.create('vpc_id', {
      destination_address: '10.0.0.0/25',
      destination_ports: ['22', '80', '443'],
      name: 'my-firewall-rule',
      protocol: 'tcp',
      source_address: '0.0.0.0/0',
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
    const response = await client.networking.firewallRules.create('vpc_id', {
      destination_address: '10.0.0.0/25',
      destination_ports: ['22', '80', '443'],
      name: 'my-firewall-rule',
      protocol: 'tcp',
      source_address: '0.0.0.0/0',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.networking.firewallRules.update('firewall_rule_id', { vpc_id: 'vpc_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.networking.firewallRules.update('firewall_rule_id', {
      vpc_id: 'vpc_id',
      destination_address: '10.0.0.0/25',
      destination_ports: ['22', '80', '443'],
      name: 'my-firewall-rule',
      protocol: 'tcp',
      source_address: '0.0.0.0/0',
    });
  });

  test('list', async () => {
    const responsePromise = client.networking.firewallRules.list('vpc_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: only required params', async () => {
    const responsePromise = client.networking.firewallRules.delete('firewall_rule_id', { vpc_id: 'vpc_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.networking.firewallRules.delete('firewall_rule_id', { vpc_id: 'vpc_id' });
  });

  test('get: only required params', async () => {
    const responsePromise = client.networking.firewallRules.get('firewall_rule_id', { vpc_id: 'vpc_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: required and optional params', async () => {
    const response = await client.networking.firewallRules.get('firewall_rule_id', { vpc_id: 'vpc_id' });
  });
});
