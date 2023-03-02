var router = require('express').Router()
  var vBlanco = require('./vBlanco')

  router.use('/vBlanco', vBlanco)

  var vTinto = require('./vTinto')

  router.use('/vTinto', vTinto)

  router.get('/', function (req, res) {
    res.status(200).json({ message: 'Estás conectado a nuestra API' })
  })

  module.exports = router