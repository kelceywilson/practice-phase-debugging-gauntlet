const express = require('express')
const { getPets, getOwnersByPetId } = require('../actions')

const router = express.Router()

router.get('/', (req, res, next) => {
  getPets()
    .then(pets => res.render('pets/index', {pets}))
    .catch(next)
})

router.get('/:petId/owners', (req, res, next) => {
  const { petId } = req.params
  console.log(petId);
  getOwnersByPetId(petId)
    .then((owners) => {
      console.log('owners route', owners)
      res.json(owners)
    })
    .catch(next)
})

module.exports = router
