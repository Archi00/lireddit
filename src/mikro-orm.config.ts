import { __prod__ } from './constants';
import { Post } from './entities/Post';
import { MikroORM } from '@mikro-orm/core';
import { password } from '../gitignore/password';
import path from 'path';
import { port } from '../gitignore/port';
import { User } from './entities/User';

export default {
  migrations: {
    path: path.join(__dirname, './migrations'),
    pattern: /^[\w-]+\d+\.[tj]s$/,
  },
  entities: [Post, User],
  dbName: 'lireddit',
  password: password,
  type: 'postgresql',
  port: port,
  debug: !__prod__,
} as Parameters<typeof MikroORM.init>[0];
