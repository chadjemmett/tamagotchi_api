const express = require('express')
const server = express();



server.get('/', (req, res) => {
  res.status(200).json({message: "ok!"})
})



server.get('/status', (req, res) => {
  res.status(200).json({})
})

module.exports = server;

