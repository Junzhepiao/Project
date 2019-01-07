
exports.up = function(knex, Promise) {
  return knex.schema.createTable("users", (table) => {
        table.increments();
        table.string("name");
        table.string("password");
        table.string("confirm_password");
        table.integer("rating")
        table.timestamps(true, true);
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("users");
};
