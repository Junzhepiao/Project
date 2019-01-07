
exports.up = function(knex, Promise) {
  return knex.schema.createTable("comments", (table) => {
        table.increments();
        table.string("users_name");
        table.integer("rating")
        table.text("comment_content")
        table.integer('users_id')
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
            .notNullable();
        table.integer('item_id')
            .references('id')
            .inTable('items')
            .onDelete('CASCADE')
            .notNullable();
        table.timestamps(true, true);
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("comments");
};
