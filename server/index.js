require('dotenv').config({ path: 'config/.env' })

const express = require('express')
const { userRouter } = require('./routes')
require('./db')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.use(userRouter)

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
