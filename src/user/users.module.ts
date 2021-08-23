import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { CouchbaseModel } from '../couchbase/couchbase.module';

@Module({
  imports: [CouchbaseModel],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
