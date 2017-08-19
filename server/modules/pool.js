var pg = require('pg');

var config = {
    database: 'betelgeuse',
    host: 'localhost',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 5000
};

module.exports = pg.Pool(config);