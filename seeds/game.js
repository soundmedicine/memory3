
exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM "game"; ALTER SEQUENCE game_id_seq RESTART WITH 4;')
    .then(function () {
      
      let games = [{
        id: 1,
        name: 'Breath of the Wild',
        developer: 'Nintendo',
        rating: 8.5
      }, {
        id: 2,
        name: 'Fez',
        developer: 'Polytron',
        rating: 7.4
      }, {
        id: 3,
        name: 'Anti-Chamber',
        developer: 'Demruth',
        rating: 8.1
      }]
      return knex('game').insert(games);
    });
};
