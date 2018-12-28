const express = require('express')
const server = express();
const knex = require('knex')
const knexConfig = require('./knexfile.js')
const db = knex(knexConfig.development)
server.use(express.json())




server.get('/', (req, res) => {
  res.status(200).json({message: "ok!"})
})



server.get('/status', (req, res) => {
  
  res.status(200).json({})
})

server.post('/create', (req, res) => {
  const {tamagotchi_name, username} = req.body
    if(tamagotchi_name === "" || username === "") {
      res.status(401).json({msg: 'Tamagotchi name or username cannot be blank'})
    } else {
      const ts = new Date
       console.log(ts)
      db('tamagotchis').insert({tamagotchi_name: tamagotchi_name, username: username, date_created: ts, last_check_in: ts})
        .then(id => res.status(201).json(id))
        .catch(err => res.status(500).json({msg: 'cannot create tamagotchi', err}))
    }
  // if(tamagotchi_name === "" || username === "") {
  //   res.status(401).json({msg: 'Tamagotchi name or username cannot be blank'})
  // } else {
  //   const ts = Date.now()
  // db('tamagotchis').insert({tamagotchi_name: tamagotchi_name, username: username, date_created: ts, last_check_in: ts})
  //   .then(id => res.status(201).json(id))
  //   .catch(err => res.status(500).json({msg: 'cannot create tamagotchi', err}))
  // }
})

module.exports = server;

