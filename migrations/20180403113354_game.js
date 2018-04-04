
exports.up = function(knex, Promise) {
  return knex.schema.createTable('game', table => {
      table.increments('id').primary()
      table.string('name', 60)
      table.text('developer')
      table.float('rating')
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('game')
};
