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
  // const {username, tamagotchi_name} = req.body
  // db('tamagotchis').where('username', username)
  // .then(name => {
  //   if(name === []) {
  //     next()
  //   } else {
  //     res.status(401).json({msg: "This username already exists"})
  //   }
  // })

  next()
}


module.exports = {
  checkForBlankNames,
  checkUnique
}
