const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  const name = req.cookies.username
  if (name){
    res.render('index', {name})
  } else
    res.redirect('/hello')
})

// // Either one of these variable formats are valid in PUG
// router.get('/cards', (req, res) => {
//   res.locals.prompt='Who is buried in Grant\'s tomb?',
//   res.render('card', { hint: 'Think about who\'s tomb it is.'}
//   )
// })

router.get('/hello', (req, res) => {
  res.render('hello')
})

router.get('/goodbye', (req, res) => {
  res.render('goodbye')
})

router.post('/hello', (req, res) => {
  res.cookie('username', req.body.username)
  res.redirect('/')
})

router.post('/', (req, res) => {
  res.redirect('/cards')
})

router.post('/goodbye', (req, res) => {
  res.clearCookie('username')
  res.redirect('/')
})

module.exports = router
