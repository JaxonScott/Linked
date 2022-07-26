const { Router } = require('express')
const passport = require('passport')
const session = require('express-session')
const { hashPassword, comparePassword } = require('../utils/helpers')
const User = require('../database/schemas/User')

const router = Router()

// router.post('/login', async (req, res) => {
//   const { email, password } = req.body
//   if (!email || !password) return res.send(400)
//   const userDB = await User.findOne({ email })
//   if (!userDB) return res.send(401)
//   const isValid = comparePassword(password, userDB.password)
//   if (isValid) {
//     console.log('auth successfully')
//     req.session.user = userDB
//     return res.send(200)
//   } else {
//     console.log('auth failed')
//     return res.send(401)
//   }
// })

//login user
router.post('/login', passport.authenticate('local'), (req, res) => {
  console.log('logged in')
  res.send(200)
})

//register new user
router.post('/register', async (req, res) => {
  const { email } = req.body
  const userDB = await User.findOne({ email })
  if (userDB) {
    res.status(400).send({ msg: 'User already exist' })
  } else {
    const password = hashPassword(req.body.password)
    console.log(password)
    const newUser = await User.create({ password, email })
    res.send(201)
  }
})

router.use((req, res, next) => {
  console.log('inside check')
  if (req.user) next()
  else res.send(401)
})

router.get('/users', async (req, res) => {
  const users = await User.find()
  res.send(users)
})

module.exports = router
