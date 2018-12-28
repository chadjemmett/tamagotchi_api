const knex = require('knex')
const knexConfig = require('./knexfile.js')
const db = knex(knexConfig.development)

checkForBlankNames = (req, res, next) => {
  const {tamagotchi_name, username} = req.body
    if(tamagotchi_name === "" || username === "") {
      res.status(401).json({msg: "Username or tamagotchi name can't be blank."})
    } else {
      next()
    }
}


checkUnique = (req, res, next) => {
  // db('tamagotchis').where('username', req.body.username)
  //   .then(thing => {
  //     if(thing === []) {
  //       next()
  //     } else {
  //       res.status(401).json({msg: "That username already exists"})
  //     }
  //   } )
  next()
}


module.exports = {
  checkForBlankNames,
  checkUnique
}
