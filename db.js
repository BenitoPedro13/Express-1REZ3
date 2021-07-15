const {Pool} = require('pg')

const pool = new Pool({
    user: 'bitnami',
    host: 'localhost',
    database: '1REZ3',
    password: '23648613',
    port: 5432,
})

module.exports = pool