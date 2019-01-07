const knex = require("../db/knex.js");

module.exports = {
    index: function(req, res) {
        knex('items').then((result)=>{
          res.render("index", {items: result});
        })
      }
}
