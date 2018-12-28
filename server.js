const express = require('express')
const server = express();
const knex = require('knex')
const knexConfig = require('./knexfile.js')
const db = knex(knexConfig.development)
const {checkForBlankNames, checkUnique} = require('./middleware.js')
server.use(express.json())
 




server.get('/', (req, res) => {
  res.status(200).json({message: "ok!"})
})



server.get('/status', (req, res) => {
  const {tamagotchi_name, username} = req.body
  res.status(200).json({})
})

server.post('/create', checkForBlankNames, checkUnique,  (req, res) => {
  const {tamagotchi_name, username} = req.body
      db('tamagotchis').where('username', req.body.username)
      .then(name => {
        if(name === []) {
          const ts = new Date
          db('tamagotchis').insert({tamagotchi_name: tamagotchi_name, username: username, date_created: ts, last_check_in: ts})
            .then(id => res.status(201).json(id))
            .catch(err => res.status(500).json({msg: 'cannot create tamagotchi', err}))

          console.log(name)
        } else {
          res.status(401).json({msg: "This username already exists"})
        }

      })
})

module.exports = server;

