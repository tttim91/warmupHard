var knex = require('./knex');

module.exports = {
  readNames: function(){
    return knex('people').select('name')
  }
}
