const mysql = require('mysql')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: 'user',
    database: 'razor_tracker'
})

connection.connect()

connection.query('Hello Dave')

connection.end()