const { Pool } = require('pg');

const dbConfig = { 
    port: process.env.PORT,
    host: process.env.PGHOST,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    port: process.env.PGPORT
};

const pool = new Pool(dbConfig);

module.exports = pool;