
exports.up = function(knex, Promise) {
  return knex.schema.createTable("items", (table) => {
        table.increments();
        table.string("item_name");
        table.integer("price");
        table.string("date");
        table.string("keyword");
        table.text("description");
        table.text("img_url");
        table.integer('users_id')
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
            .notNullable();
        
        table.timestamps(true, true);
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("items");
};
