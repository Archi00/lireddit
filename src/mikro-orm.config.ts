import { __prod__ } from './constants';
import { Post } from './entities/Post';
import { MikroORM } from '@mikro-orm/core';
import { password } from '../gitignore/password';

export default {
  entities: [Post],
  dbName: 'lireddit',
  password: password,
  type: 'postgresql',
  debug: !__prod__,
} as Parameters<typeof MikroORM.init>[0];
