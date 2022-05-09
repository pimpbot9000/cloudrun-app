
module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      port: 5432,
      host: 'postgres',
      database: 'knex',
      user: 'knex',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: 'src/db/migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {      
      host: process.env.DB_CONNECTION, 
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWD
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: 'src/db/migrations'
    }
  },
};
