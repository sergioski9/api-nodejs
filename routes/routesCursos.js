import express from 'express'
import dataCursos from './../data/cursos.js'

const routingCursos = express.Router()
routingCursos.use(express.json())

routingCursos.get('/', (_req, res) => {
  res.send(dataCursos)
})

routingCursos.get('/:id', (req, res) => {
  const id = req.params.id
  const user = dataCursos.filter((curso) => curso.id == id)[0]

  if (user) {
    return res.send(user)
  }

  res.status(404).send('No se encontro ningun resultado')
})

routingCursos.post('/', (req, res) => {
  const cursoInfoForAdd = req.body

  if (cursoInfoForAdd) {
    dataCursos.push(cursoInfoForAdd)
    res.send(dataCursos)
  }

  res.status(400).send('Datos incorrectos o informacion no recibida')
})

routingCursos.put('/:id', (req, res) => {
  const id = req.params.id
  const bodyReq = req.body

  const indexCursoUpdate = dataCursos.findIndex((curso) => curso.id == id)

  if (indexCursoUpdate >= 0) {
    const currentCurso = dataCursos[indexCursoUpdate]

    Object.assign(currentCurso, bodyReq)
    res.send(dataCursos)
  }

  res.status(400).send('No se pudo realizar la actualizacion debido a un error de datos o del servidor...')
})

export default routingCursos
