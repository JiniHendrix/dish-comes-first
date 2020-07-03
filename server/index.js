require('dotenv').config()

const express = require('express')
require('./db')

const app = express()
const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
