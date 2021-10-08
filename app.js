'use strict'
const express = require('express')
const __upload = require('./api/upload.js')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()
const appConfig = require('./app.config.js')

app.use(helmet())

app.use(express.static(path.resolve(__dirname, 'src/public')))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Routers
app.use('/api/upload', __upload)

app.use((err, req, res, next) => {
    res.send('Error')
  });

app.listen(appConfig.port, () => console.log(`app listening on port ${appConfig.port}`))

module.exports = app
