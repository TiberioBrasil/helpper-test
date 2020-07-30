const {
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_HOST,
  POSTGRES_PORT,
  POSTGRES_DATABASE,
} = process.env;

export const POSTGRES_CONNECTION_DATA = {
  username: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  host: POSTGRES_HOST,
  port: parseInt(POSTGRES_PORT, 10),
  database: POSTGRES_DATABASE,
};

export const { TYPEORM_LOGGING } = process.env;
