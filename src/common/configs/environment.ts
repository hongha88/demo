export const Environment = {
  SERVER_PORT: Number(process.env.SERVER_PORT || 3000),
  APP_NAME: process.env.APP_NAME,
  NODE_ENV: process.env.NODE_ENV,

  TCP_HOST: process.env.TCP_HOST,
  TCP_PORT: Number(process.env.TCP_PORT || 7000),

  MYSQL_DB_HOST: process.env.MYSQL_DB_HOST,
  MYSQL_DB_PORT: Number(process.env.MYSQL_DB_PORT),
  MYSQL_DB_USER: process.env.MYSQL_DB_USER,
  MYSQL_DB_PASS: process.env.MYSQL_DB_PASS,
  MYSQL_DB_NAME: process.env.MYSQL_DB_NAME,

  MONGO_URL: process.env.MONGO_URL,

  REDIS_HOST: process.env.REDIS_HOST,
  REDIS_PORT: Number(process.env.REDIS_PORT),
  REDIS_PASS: process.env.REDIS_PASS,
  REDIS_DB: Number(process.env.REDIS_DB),

  TELEGRAM_BOT_SECRET: process.env.TELEGRAM_BOT_SECRET,
  TELEGRAM_CHANNEL: process.env.TELEGRAM_CHANNEL,
};
