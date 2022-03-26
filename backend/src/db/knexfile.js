
module.exports = {  

  development: {
    client: 'postgresql',
    connection: {
      port: 5432,
      host: 'postgres',
      database: 'knex',
      user:     'knex',
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
      host: '/cloudsql/gybsyregister:europe-west6:main-instance2',
      database: 'gybsyregister',
      user:     'swordfish',
      password: 'swordfish'
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
