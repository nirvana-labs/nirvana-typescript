// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as VektorAPI from '../vektor';
import * as StepsAPI from './steps';
import { StepGetParams, StepGetResponse, StepSignParams, Steps } from './steps';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Executions extends APIResource {
  steps: StepsAPI.Steps = new StepsAPI.Steps(this._client);

  /**
   * Get a list of executions
   *
   * @example
   * ```ts
   * const executions = await client.vektor.executions.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<ExecutionListResponse> {
    return this._client.get('/v1/vektor/executions', options);
  }

  /**
   * Get an execution
   *
   * @example
   * ```ts
   * const execution = await client.vektor.executions.get(
   *   'execution_id',
   * );
   * ```
   */
  get(executionID: string, options?: RequestOptions): APIPromise<VektorAPI.Execution> {
    return this._client.get(path`/v1/vektor/executions/${executionID}`, options);
  }
}

/**
 * A list of executions
 */
export type ExecutionListResponse = Array<VektorAPI.Execution>;

Executions.Steps = Steps;

export declare namespace Executions {
  export { type ExecutionListResponse as ExecutionListResponse };

  export {
    Steps as Steps,
    type StepGetResponse as StepGetResponse,
    type StepGetParams as StepGetParams,
    type StepSignParams as StepSignParams,
  };
}
