const express = require('express')
const bcrypt = require('bcrypt')
const { User } = require('../db/models')

const router = express.Router()

router.post('/users', async (req, res) => {
  const SALT_ROUNDS = 10
  const {
    username,
    password,
    firstName,
    lastName,
    middleName
  } = req.body
  const passwordValidationRegex = new RegExp('^(?=.*[a-z])(?=.*[0-9])(?=.{8,})')
  if (!passwordValidationRegex.test(password)) {
    return res.status(400).send('Password doesn\'t meet requirements')
  }
  const hash = await bcrypt.hash(password, SALT_ROUNDS)

  try {
    const user = await User.create({
      username,
      password: hash,
      first_name: firstName,
      last_name: lastName,
      middle_name: middleName
    })
    delete user.dataValues.password
    const token = user.createToken()
    user.dataValues.token = token

    res.status(201).send(user.dataValues)
  } catch (e) {
    if (e.errors[0].validatorKey === 'not_unique') {
      res.status(400).send('Username taken')
    }

    return res.sendStatus(500)
  }
})

router.post('/users/login', async (req, res) => {
  const { username, password } = req.body

  try {
    const user = await User.findOne({
      where: {
        username
      }
    })

    if (!user || !(await bcrypt.compare(password, user.dataValues.password))) {
      res.sendStatus(404)
    }

    const token = user.createToken()
    delete user.dataValues.password
    user.dataValues.token = token

    res.send(user.dataValues)
  } catch (e) {
    res.sendStatus(500)
  }
})

module.exports = router
