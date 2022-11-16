const express = require('express')
const dataUsers = require('./data/user')

const app = express()

// Routing
const routingUser = require('./routes/routesUser')
app.use('/api/v1/users', routingUser)

const routingCursos = require('./routes/routesCursos')
app.use('/api/v1/cursos', routingCursos)

// Home the APIRESTful

app.get('/', (req, res) => {
  res.send('Mi primer servidor con nodejs y express')
})

// PORT

const PUERTO = process.env.PORT || 3000

// Listen in the port

app.listen(PUERTO, () => {
  console.log(`EL servidor esta escuchando en el puerto ${PUERTO}`)
})
