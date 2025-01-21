// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

/**
 * Operation details.
 */
export interface Operation {
  id: string;

  kind: OperationKind;

  resource_id: string;

  status: OperationStatus;

  type: OperationType;
}

export type OperationKind = 'VM' | 'VPC' | 'FIREWALL_RULE';

export type OperationStatus = 'PENDING' | 'RUNNING' | 'DONE' | 'FAILED';

export type OperationType = 'CREATE' | 'UPDATE' | 'DELETE';

export type RegionName =
  | 'amsterdam'
  | 'chicago'
  | 'frankfurt'
  | 'hongkong'
  | 'london'
  | 'mumbai'
  | 'saopaulo'
  | 'seattle'
  | 'siliconvalley'
  | 'singapore'
  | 'stockholm'
  | 'sydney'
  | 'tokyo'
  | 'washingtondc';

export type ResourceStatus =
  | 'PENDING'
  | 'CREATING'
  | 'UPDATING'
  | 'READY'
  | 'DELETING'
  | 'DELETED'
  | 'FAILED';
