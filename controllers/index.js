const knex = require("../db/knex.js");

module.exports = {
    index: function(req, res) {
        knex('users').then((result)=>{
          res.render("index", {users: result});
        })
      }

}