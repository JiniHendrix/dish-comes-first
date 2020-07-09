const jwt = require('jsonwebtoken')
const { User } = require('../db/models')

module.exports = async (req, res, next) => {
  const authHeader = req.header('Authorization')

  if (!authHeader) {
    return res.send(401)
  }

  const token = authHeader.replace('Bearer ', '')

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    const user = await User.findOne({ where: { username: decoded.username } })

    if (!user) {
      throw new Error()
    }

    req.user = user

    next()
  } catch (e) {
    res.send(401)
  }
}
