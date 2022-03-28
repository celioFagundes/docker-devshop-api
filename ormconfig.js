require('dotenv').config()
module.exports = {
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  database: 'devshop-docker',
  password: 'postgres',
  logging: true,
  entities: ['src/**/*.entity.ts'],
  migrations: ['src/migration/**/*.ts'],
  cli: {
    entitiesDir: 'src/**',
    migrationsDir: 'src/migration',
  },
}
