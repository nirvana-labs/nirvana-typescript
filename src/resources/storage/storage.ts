// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as KeysAPI from './keys';
import {
  KeyCreateParams,
  KeyListParams,
  KeyUpdateParams,
  Keys,
  ObjectStorageKey,
  ObjectStorageKeyList,
  ObjectStorageKeyWithSecret,
  ObjectStorageKeysCursor,
} from './keys';
import * as BucketsAPI from './buckets/buckets';
import {
  Bucket,
  BucketCreateParams,
  BucketDeleteParams,
  BucketList,
  BucketListParams,
  BucketUpdateParams,
  Buckets,
  BucketsCursor,
} from './buckets/buckets';

export class Storage extends APIResource {
  buckets: BucketsAPI.Buckets = new BucketsAPI.Buckets(this._client);
  keys: KeysAPI.Keys = new KeysAPI.Keys(this._client);
}

Storage.Buckets = Buckets;
Storage.Keys = Keys;

export declare namespace Storage {
  export {
    Buckets as Buckets,
    type Bucket as Bucket,
    type BucketList as BucketList,
    type BucketsCursor as BucketsCursor,
    type BucketCreateParams as BucketCreateParams,
    type BucketUpdateParams as BucketUpdateParams,
    type BucketDeleteParams as BucketDeleteParams,
    type BucketListParams as BucketListParams,
  };

  export {
    Keys as Keys,
    type ObjectStorageKey as ObjectStorageKey,
    type ObjectStorageKeyList as ObjectStorageKeyList,
    type ObjectStorageKeyWithSecret as ObjectStorageKeyWithSecret,
    type ObjectStorageKeysCursor as ObjectStorageKeysCursor,
    type KeyCreateParams as KeyCreateParams,
    type KeyUpdateParams as KeyUpdateParams,
    type KeyListParams as KeyListParams,
  };
}
