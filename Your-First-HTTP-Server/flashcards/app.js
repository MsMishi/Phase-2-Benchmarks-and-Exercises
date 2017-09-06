const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cookieParser= require('cookie-parser')

app.set('view engine', 'pug')

app.use(bodyParser.urlencoded({extended: false }))
app.use(cookieParser())

app.use((req, res, next) => {
  console.log('Hello')
  const err = new Error('Oh noes!')
  err.status = 500
  next(err)
})

app.use((req, res, next) => {
  console.log(req.message)
  next()
})


app.get('/', (req, res) => {
  const name = req.cookies.username
  if (name){
    res.render('index', {name})
  } else
    res.redirect('/hello')
})

// Either one of these variable formats are valid in PUG
app.get('/cards', (req, res) => {
  res.locals.prompt='Who is buried in Grant\'s tomb?',
  res.render('card', { hint: 'Think about who\'s tomb it is.'}
  )
})

app.get('/hello', (req, res) => {
  res.render('hello')
})

app.get('/goodbye', (req, res) => {
  res.render('goodbye')
})

app.post('/hello', (req, res) => {
  res.cookie('username', req.body.username)
  res.redirect('/')
})

app.post('/', (req, res) => {
  res.redirect('/cards')
})

app.post('/goodbye', (req, res) => {
  res.clearCookie('username')
  res.redirect('/')
})

app.use((req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

app.use((err, req, res, next) => {
  res.locals.error = err
  res.status(err.status)
  res.render('error')
})

app.listen(3000, () => {
  console.log('The application is running on port localhost:3000')
})
