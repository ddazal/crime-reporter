const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.end('Hola, mundo.')
})

module.exports = app