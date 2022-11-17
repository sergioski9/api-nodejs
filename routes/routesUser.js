import express from 'express'
import dataUsers from './../data/user.js'

const routingUser = express.Router()
routingUser.use(express.json())

routingUser.get('/', (_req, res) => {
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

routingUser.post('/', (req, res) => {
  const userInfoForAdd = req.body

  if (userInfoForAdd) {
    dataUsers.push(userInfoForAdd)
    res.send(dataUsers)
  }

  res.status(400).send('Datos incorrectos o informacion no recibida')
})

routingUser.put('/:id', (req, res) => {
  const id = req.params.id
  const bodyReq = req.body

  const indexUserUpdate = dataUsers.findIndex((curso) => curso.id == id)

  if (indexUserUpdate >= 0) {
    const currentUser = dataUsers[indexUserUpdate]

    Object.assign(currentUser, bodyReq)
    res.send(dataUsers)
  }

  res.status(400).send('No se pudo realizar la actualizacion debido a un error de datos o del servidor...')
})

export default routingUser
