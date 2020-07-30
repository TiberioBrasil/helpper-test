/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

const {
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_HOST,
  POSTGRES_PORT,
  POSTGRES_DATABASE,
  TYPEORM_LOGGING,
} = process.env;

/** @type {import('typeorm').ConnectionOptions} */
const defaultConnection = {
  name: 'default',
  type: 'postgres',
  username: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  host: POSTGRES_HOST,
  port: parseInt(POSTGRES_PORT, 10),
  database: POSTGRES_DATABASE,
  synchronize: false,
  logging: /true/i.test(TYPEORM_LOGGING),
  entities: [path.join(__dirname, 'dist', '**', '*.entity.js')],
  migrations: [
    path.join(__dirname, 'dist', 'migrations', 'default', '**', '*.js'),
  ],
  subscribers: [
    path.join(__dirname, 'dist', 'subscribers', 'default', '**', '*.js'),
  ],
  cli: {
    entitiesDir: 'src',
    migrationsDir: 'src/migrations/default',
    subscribersDir: 'src/subscribers/default',
  },
};

module.exports = [defaultConnection];
