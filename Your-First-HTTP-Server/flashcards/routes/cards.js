const express = require('express')
const router = express.Router()

// Either one of these variable formats are valid in PUG
router.get('/', (req, res) => {
  res.locals.prompt='Who is buried in Grant\'s tomb?',
  res.render('card', { hint: 'Think about who\'s tomb it is.'}
  )
})

module.exports = router
