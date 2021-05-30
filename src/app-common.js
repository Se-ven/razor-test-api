const express = require('express')
const app = express()
const router = express.Router()

app.use(router)
app.use(express.static('public'))

module.exports = {
    app, 
    router
}