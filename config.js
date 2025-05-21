const pg = require('pg');

const {Pool} = pg;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'test',
    password: 'root123',
    port: 5432,
    idleTimeoutMillis: 1000,
})

pool.connect((err, client, done) => {
    if (err) {
        console.log('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database');
});
module.exports = pool;