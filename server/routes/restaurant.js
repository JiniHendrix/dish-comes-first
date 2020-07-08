const express = require('express')
const { authMiddleware } = require('../middleware')
const { Restaurant } = require('../db/models')

const router = express.Router()

// TODO add address verification route

router.post('/restaurants', authMiddleware, async (req, res) => {
  try {
    // TODO get latitude/longitude of address to put into row
    const restaurant = await Restaurant.create(req.body)

    res.status(201).send(restaurant)
  } catch (e) {
    console.log(e)
    res.sendStatus(400)
  }
})

router.get('/restaurants', async (req, res) => {
  // TODO query based on location, latitude/longitude
  // add latitude/longitude to Restaurant model
  // add index of Restaurant by latitude/longitude

  try {
    const restaurants = await Restaurant.findAll({
      limit: req.body.limit || 20,
      offset: req.body.skip || 0
    })

    res.send(restaurants)
  } catch (e) {
    res.sendStatus(500)
  }
})

// TODO: add delete route where it can only be deleted by the owner
// TODO: add update route where it can only be updated by the owner

module.exports = router
