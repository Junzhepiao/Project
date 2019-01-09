
exports.up = function(knex, Promise) {
  return knex.schema.createTable("shopping_cart", (table) => {
        table.increments();
        table.string("item_name");
        table.integer("price");
        table.string("date")
        table.text("description")
        table.text("img_url")
        table.integer('users_id')
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
            .notNullable();
        table.timestamps(true, true);
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("shopping_cart");
};
