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

const add = (show) => {
  return Shows().insert(show, 'id')
}

const update = (showID, updates) => {
  return Shows().where('id', parseInt(showID)).update(updates)
}

const deleteItem = (showID) => {
  return Shows().where('id', parseInt(showID)).del()
}

module.exports = {
  getAll: getAll,
  getSingle: getSingle,
  add: add,
  update: update,
  deleteItem: deleteItem
}
