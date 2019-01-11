exports.up = function(knex, Promise) {
    return knex.schema.createTable("check_out", (table) => {
          table.increments();
          table.string("item_name");
          table.integer("price");
          table.string("date");
          table.text("description");
          table.text("img_url");
          table.integer('quantity');
          table.integer('owner_id');
          table.integer('users_id')
          table.timestamps(true, true);
      })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable("check_out");
  };
  