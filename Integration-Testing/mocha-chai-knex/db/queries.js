const knex = require('./knex.js')

const Shows = () => {
  return knex('shows')
}

// *** queries *** //

const getAll = () => {
  return Shows().select()
}

const getSingle = (showID) => {
  return Shows().where('id', parseInt(showID)).first()
}

module.exports = {
  getAll: getAll,
  getSingle: getSingle
}
