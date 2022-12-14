import express from 'express'
import routingUser from './routes/routesUser.js'
import routingCursos from './routes/routesCursos.js'

const app = express()

// Routing
app.use('/api/v1/users', routingUser)

app.use('/api/v1/cursos', routingCursos)

// Home the APIRESTful

app.get('/', (_req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
    </head>
    <body>
      <main>
        <article>
          <h1>
            Welcome in the API RESTful created by Sergio Rodas Cruz
          </h1>
          <h3>
            this page is the home API, for more information visit in the
            /api/v1/users or /api/v1/cursos
          </h3>
        </article>
      </main>
    </body>
  </html>
`)
})

// PORT

const PUERTO = process.env.PORT || 3000

// Listen in the port

app.listen(PUERTO, () => {
  console.log(`EL servidor esta escuchando en el puerto ${PUERTO}`)
})
