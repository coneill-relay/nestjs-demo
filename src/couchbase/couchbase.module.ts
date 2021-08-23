import { Module } from '@nestjs/common';
import { couchbaseProvider } from './couchbase.provider';

@Module({
  providers: [...couchbaseProvider],
  exports: [...couchbaseProvider],
})
export class CouchbaseModel {}
