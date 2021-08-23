import { connect } from 'couchbase';

export const couchbaseProvider = [
  {
    provide: 'COUCHBASE_CONNECTION',
    useFactory: (): Promise<Collection> =>
      connect('couchbase://localhost:8091', {
        username: 'admin',
        password: 'password',
      }).then((cluster) => cluster.bucket('relay_data').defaultCollection()),
  },
];
