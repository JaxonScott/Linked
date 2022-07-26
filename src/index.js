const express = require('express')
const passport = require('passport')
const MongoStore = require('connect-mongo')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const cors = require('cors')
require('dotenv').config()

//routes
const textRoute = require('./routes/test')
const authRoute = require('./routes/auth')
require('./strategies/local')
require('./database')

const app = express()
const PORT = 3001
app.use(cors({ origin: true, credentials: true }))

app.use(express.json())
app.use(express.urlencoded())
app.use(cookieParser())

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Credentials', true)
  res.header('Access-Control-Allow-Origin', req.headers.origin)
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, X-Response-Time, X-PINGOTHER, X-CSRF-Token,Authorization'
  )
  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  } else {
    next()
  }
})

app.use(
  session({
    secret: 'SKjdfklJKSSDVOPLSDKPASD',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: process.env.DB_URI,
    }),
  })
)

app.use((req, res, next) => {
  console.log(`${req.method}:${req.url}`)
  next()
})

app.use(passport.initialize())
app.use(passport.session())

app.use('/api/text', textRoute)
app.use('/api/auth', authRoute)

app.get('/', (req, res) => {
  res.send('Hello')
})

app.listen(PORT, () => console.log(`running on PORT: ${PORT}`))
