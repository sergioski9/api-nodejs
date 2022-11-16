const express = require('express')
const dataUsers = require('../data/user')

const routingUser = express.Router()
routingUser.use(express.json())

routingUser.get('/', (req, res) => {
  res.send(dataUsers)
})

routingUser.get('/:id', (req, res) => {
  const id = req.params.id
  const user = dataUsers.filter((user) => user.id == id)[0]

  if (user) {
    return res.send(user)
  }

  res.status(404).send('No se encontro ningun resultado')
})

module.exports = routingUser
