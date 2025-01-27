// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type Agent } from './_shims/index';
import * as Core from './core';
import * as Errors from './error';
import * as Uploads from './uploads';
import * as API from './resources/index';
import { Operations } from './resources/operations';
import { Compute } from './resources/compute/compute';
import { Networking } from './resources/networking/networking';

export interface ClientOptions {
  /**
   * Defaults to process.env['NIRVANA_LABS_AUTH_TOKEN'].
   */
  authToken?: string | undefined;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['NIRVANA_LABS_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   */
  timeout?: number | undefined;

  /**
   * An HTTP agent used to manage HTTP(S) connections.
   *
   * If not provided, an agent will be constructed by default in the Node.js environment,
   * otherwise no agent is used.
   */
  httpAgent?: Agent | undefined;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we use `node-fetch` on Node.js and otherwise expect that `fetch` is
   * defined globally.
   */
  fetch?: Core.Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number | undefined;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `undefined` or `null` in request options.
   */
  defaultHeaders?: Core.Headers | undefined;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Core.DefaultQuery | undefined;
}

/**
 * API Client for interfacing with the Nirvana Labs API.
 */
export class NirvanaLabs extends Core.APIClient {
  authToken: string;

  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Nirvana Labs API.
   *
   * @param {string | undefined} [opts.authToken=process.env['NIRVANA_LABS_AUTH_TOKEN'] ?? undefined]
   * @param {string} [opts.baseURL=process.env['NIRVANA_LABS_BASE_URL'] ?? https://api.nirvanalabs.io/] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = Core.readEnv('NIRVANA_LABS_BASE_URL'),
    authToken = Core.readEnv('NIRVANA_LABS_AUTH_TOKEN'),
    ...opts
  }: ClientOptions = {}) {
    if (authToken === undefined) {
      throw new Errors.NirvanaLabsError(
        "The NIRVANA_LABS_AUTH_TOKEN environment variable is missing or empty; either provide it, or instantiate the NirvanaLabs client with an authToken option, like new NirvanaLabs({ authToken: 'My Auth Token' }).",
      );
    }

    const options: ClientOptions = {
      authToken,
      ...opts,
      baseURL: baseURL || `https://api.nirvanalabs.io/`,
    };

    super({
      baseURL: options.baseURL!,
      timeout: options.timeout ?? 60000 /* 1 minute */,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch,
    });

    this._options = options;

    this.authToken = authToken;
  }

  operations: API.Operations = new API.Operations(this);
  compute: API.Compute = new API.Compute(this);
  networking: API.Networking = new API.Networking(this);

  protected override defaultQuery(): Core.DefaultQuery | undefined {
    return this._options.defaultQuery;
  }

  protected override defaultHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return {
      ...super.defaultHeaders(opts),
      ...this._options.defaultHeaders,
    };
  }

  protected override authHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return { Authorization: `Bearer ${this.authToken}` };
  }

  static NirvanaLabs = this;
  static DEFAULT_TIMEOUT = 60000; // 1 minute

  static NirvanaLabsError = Errors.NirvanaLabsError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;

  static toFile = Uploads.toFile;
  static fileFromPath = Uploads.fileFromPath;
}

NirvanaLabs.Operations = Operations;
NirvanaLabs.Compute = Compute;
NirvanaLabs.Networking = Networking;
export declare namespace NirvanaLabs {
  export type RequestOptions = Core.RequestOptions;

  export { Operations as Operations };

  export { Compute as Compute };

  export { Networking as Networking };

  export type RegionName = API.RegionName;
  export type ResourceStatus = API.ResourceStatus;
}

export { toFile, fileFromPath } from './uploads';
export {
  NirvanaLabsError,
  APIError,
  APIConnectionError,
  APIConnectionTimeoutError,
  APIUserAbortError,
  NotFoundError,
  ConflictError,
  RateLimitError,
  BadRequestError,
  AuthenticationError,
  InternalServerError,
  PermissionDeniedError,
  UnprocessableEntityError,
} from './error';

export default NirvanaLabs;
