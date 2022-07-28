const { Router } = require('express')
const User = require('../database/schemas/User')

const router = Router()

router.get('/profile/:id', async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.id })
    res.send(user)
  } catch {
    res.status(404)
    res.send({ error: 'User does not exist' })
  }
})

router.get('/profile', async (req, res) => {
  const userSID = req.session.passport.user
  try {
    const findUserBySid = await User.findOne({ _id: userSID })
    if (findUserBySid) {
      res.status(200)
      res.send(findUserBySid)
    } else {
      res.status(404)
      res.send('cant find user SID')
    }
  } catch (err) {
    console.log(err)
  }
})

router.patch('/profile/', async (req, res) => {
  const userID = req.session.passport.user
  const newLinks = req.body.links
  try {
    const updateLinks = await User.findByIdAndUpdate(userID, {
      $push: { links: newLinks },
    })
    res.send(updateLinks)
    res.status(200)
  } catch (err) {
    console.log(err)
    res.status(400)
  }
})

module.exports = router
