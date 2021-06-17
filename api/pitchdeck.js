const express = require('express')
const router = express.Router()

const appConfig = require('../app.config.js')

router.get('/', function (req, res, next) {
  //This can be the router for serving the slides as data when the components load

  res.send({ name: appConfig.name })
})

module.exports = router
