require('dotenv').config()
const knex = require('knex')
const knexfile = require('./knexfile')[process.env.NODE_ENV]

console.log("Connect to database")


const createUnixSocketPool = async () => {
    // Note: Saving credentials in environment variables is convenient, but not
    // secure - consider a more secure solution such as
    // Cloud Secret Manager (https://cloud.google.com/secret-manager) to help
    // keep secrets safe.
    return await knex(knexfile);
  }
db = await createUnixSocketPool()

module.exports = db