const express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser')

module.exports = () => {
  const app = express()

  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))

  //Responsável por agrudar todas as rotas dentro do app
  consign()
    .include('controllers')
    .into(app)

  return app
}