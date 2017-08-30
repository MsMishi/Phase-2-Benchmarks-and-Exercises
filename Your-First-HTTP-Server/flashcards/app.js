const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cookieParser= require('cookie-parser')

app.set('view engine', 'pug')

app.use(bodyParser.urlencoded({extended: false }))
app.use(cookieParser())

app.get('/', (req, res) => {
  const name = req.cookies.username
  if (name){
    res.render('index', {name})
  } else
    res.redirect('hello')
})

app.post('/', (req, res) => {
  res.redirect('/card')
})

// Either one of these variable formats are valid in PUG
app.get('/card', (req, res) => {
  res.locals.prompt='Who is buried in Grant\'s tomb?',
  res.render('card', { hint: 'Think about who\'s tomb it is.'}
  )
})

app.get('/hello', (req, res) => {
  res.render('hello')
})

app.post('/hello', (req, res) => {
  res.cookie('username', req.body.username)
  res.redirect('/')
})

app.get('/goodbye', (req, res) => {
  res.render('goodbye')
})

app.post('/goodbye', (req, res) => {
  res.clearCookie('username')
  res.redirect('/')
})

app.listen(3000, () => {
  console.log('The application is running on port localhost:3000')
})
