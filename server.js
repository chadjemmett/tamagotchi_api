const express = require('express')
const server = express();
const knex = require('knex')
const knexConfig = require('./knexfile.js')
const db = knex(knexConfig.development)



server.get('/', (req, res) => {
  res.status(200).json({message: "ok!"})
})



server.get('/status', (req, res) => {
  res.status(200).json({})
})

server.post('/create', (req, res) => {
  const {tamagotchi_name, username} = req.body
  const ts = Date.now()
  db('tamagotchis').insert({tamagotchi_name: tamagotchi_name, username: username, date_created: ts, last_check_in: ts})
    .then(id => res.status(201).json([id]))
    .catch(err => res.status(500).json({msg: 'cannot create tamagotchi'}))


})



module.exports = server;

