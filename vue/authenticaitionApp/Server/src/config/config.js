require('dotenv').config();

const config = {
  cosmodDbUser: process.env.COSMODDB_USER,
  cosmosDbPassword: process.env.COSMOSDB_PASSWORD,
  cosmosDbName: process.env.COSMOSDB_DBNAME,
  dbHost: process.env.COSMOSDB_HOST,
  dbPort: process.env.COSMOSDB_PORT,    
  uploads: {
    profile: {
      image: {
        limits: {
          fileSize: 1 * 1024 * 1024
        }
      }
    }
  }
}

exports.config = config;