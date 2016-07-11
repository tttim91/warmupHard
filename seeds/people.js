exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('people').del()
    .then(function(){
      return Promise.all([
        // Inserts seed entries
        knex('people').insert({name: 'Tim'}),
        knex('people').insert({name: 'Lucas'}),
        knex('people').insert({name: 'Mairin'}),
        knex('people').insert({name: 'Steven'})
      ]);
    })
};
