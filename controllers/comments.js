const knex = require("../db/knex.js");

module.exports = {
    postComments: function(req, res) {
        knex('comments').insert({
            users_name:req.session.user_name,
            comment_content: req.body.comments,
            rating: req.body.rating,
            users_id: req.session.user_id,
            item_id:req.params.id,
        })
        .then(()=>{
            res.redirect('/product_details/' + req.params.id)
        })
    }
}
