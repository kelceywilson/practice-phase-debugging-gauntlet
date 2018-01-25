const db = require('../db')

module.exports = function getOwnersByPetId(petId) {
  const query = `
  SELECT name
  FROM owners AS o
  JOIN petowners AS po
  ON o.owner_id = po.owner_id
  WHERE po.pet_id = $1
  `
  return db.any(query, [petId])
}
