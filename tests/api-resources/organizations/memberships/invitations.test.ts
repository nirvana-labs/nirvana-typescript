// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NirvanaLabs from '@nirvana-labs/nirvana';

const client = new NirvanaLabs({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource invitations', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.organizations.memberships.invitations.create('organization_id', {
      email: 'jane@example.com',
      role: 'owner',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.organizations.memberships.invitations.create('organization_id', {
      email: 'jane@example.com',
      role: 'owner',
    });
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.organizations.memberships.invitations.list('organization_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('resend: only required params', async () => {
    const responsePromise = client.organizations.memberships.invitations.resend('invitation_id', {
      organization_id: 'organization_id',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('resend: required and optional params', async () => {
    const response = await client.organizations.memberships.invitations.resend('invitation_id', {
      organization_id: 'organization_id',
    });
  });

  // Mock server tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.organizations.memberships.invitations.delete('invitation_id', {
      organization_id: 'organization_id',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('delete: required and optional params', async () => {
    const response = await client.organizations.memberships.invitations.delete('invitation_id', {
      organization_id: 'organization_id',
    });
  });
});
