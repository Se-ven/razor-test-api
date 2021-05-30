const express = require('express')
const app = express()

app.listen(1330, function() {
    console.log('Razor webserver is spooled up and running on port 1330 http://localhost:1330/')
})

app.get('/', function(req, res) {
    res.send("Home Page")
})

app.get('/add', function(req, res) {
    res.send("Add new razor/blade")
})

app.all('*', function(req, res) {
    res.sendStatus(400)
})