import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class UsersService {
  constructor(
    @Inject('COUCHBASE_CONNECTION')
    private collection: any, // This should really be a service or something not couchbase specific but taking some shortcuts...
  ) {}

  async create(user: any) {
    await this.collection.insert(user.id, {
      data: user,
    });
    return user;
  }

  async find(id: string) {
    return this.collection.get(id);
  }
}
