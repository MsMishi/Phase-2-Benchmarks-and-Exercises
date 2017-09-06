const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cookieParser= require('cookie-parser')

app.set('view engine', 'pug')

app.use(bodyParser.urlencoded({extended: false }))
app.use(cookieParser())

const mainRoutes = require('./routes')
const cardRoutes = require('./routes/cards')
const port = 3000

app.use(mainRoutes)
app.use('/cards', cardRoutes)

app.use((req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

app.use((err, req, res, next) => {
  res.locals.error = err
  res.status(err.status)
  res.render('error')
  next(err)
})

app.listen(port, () => {
  console.log('The application is running on port localhost:3000')
})
