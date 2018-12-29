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
  const {tamagotchi_name, username, timeStamp} = req.body
    console.log(req.body)
  db('tamagotchis').where('tamagotchi_name', tamagotchi_name)
  .then(tamagotchi => {
    const gotchi = tamagotchi[0]
      res.status(200).json({
        timeElapsed: timeStamp - gotchi.date_created
      })

  })
  .catch(err => res.status(500).json({msg: 'Cannot get tamagotchi at this time', err}))
})

server.post('/create', checkForBlankNames, checkUnique,  (req, res) => {
  const {tamagotchi_name, username} = req.body
          const ts = new Date
          db('tamagotchis').insert({tamagotchi_name: tamagotchi_name, username: username, date_created: ts, last_check_in: ts})
            .then(id => res.status(201).json(id))
            .catch(err => res.status(500).json({msg: 'cannot create tamagotchi', err}))
})

module.exports = server;

