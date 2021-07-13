const {Pool} = require('pg')

const pool = new Pool({
    user: 'pedro',
    host: 'localhost',
    database: 'ranek',
    password: '23648613',
    port: 5432,
})

module.exports = pool