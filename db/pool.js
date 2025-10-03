const { Pool } = require('pg');

const connectionString = process.env.DATABASE_URL;

let dbConfig;

if (connectionString) {
    dbConfig = { connectionString: connectionString}
} else {
    dbConfig = { 
        port: process.env.PORT,
        host: process.env.PGHOST,
        user: process.env.PGUSER,
        password: process.env.PGPASSWORD,
        database: process.env.PGDATABASE,
        port: process.env.PGPORT
    }
};

const pool = new Pool(dbConfig);

module.exports = pool;