const knex = require("../db/knex.js");

module.exports = {
    getDetails: function(req, res) {
        knex('items').where('id', req.params.id).then((results)=>{
            let result = results[0];
            knex('comments').where('item_id',req.params.id).then((comments)=>{
                          res.render("product_details", {items: result, users:req.session.user, comments:comments});

            })
        })
    },
    getPostItems:(req,res)=>{
        knex('items').where('users_id', req.session.user_id).then((result)=>{
            res.render('post_item', {items:result, users:req.session.user})
        })
    },
    postItem: (req,res)=>{
        knex('items').insert({
            item_name: req.body.item_name,
            price: req.body.price,
            date: req.body.date,
            keyword: req.body.keyword,
            description: req.body.description,
            img_url: req.body.img_url,
            users_id: req.params.id
        })
        .then(()=>{
            res.redirect('/get_postItem/' + req.params.id)
            })
    }
}

