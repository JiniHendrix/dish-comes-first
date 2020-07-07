const express = require('express')
const bcrypt = require('bcrypt')
const { User } = require('../db/models')

const router = express.Router()

router.post('/signup', async (req, res) => {
  const SALT_ROUNDS = 10
  const {
    username,
    password,
    firstName,
    lastName,
    middleName
  } = req.body
  const hash = await bcrypt.hash(password, SALT_ROUNDS)

  try {
    const user = await User.create({
      username,
      password: hash,
      first_name: firstName,
      last_name: lastName,
      middle_name: middleName
    })

    res.status(201).send(user)
  } catch (e) {
    console.log(e)
    return res.sendStatus(400)
  }
})

module.exports = router
