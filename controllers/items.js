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
    },
    editItem:(req,res)=>{
        knex('items').where('id',req.params.id).then((result)=>{
            res.render('item_details', {items:result[0]})
        })
    },
    updateItem:(req,res)=>{
        knex('items').where('id', req.params.id).update({
            item_name: req.body.item_name,
            img_url: req.body.img_url,
            description: req.body.description,
            keyword: req.body.keyword,
            date: req.body.date,
            price: req.body.price,
            users_id: req.session.user_id
          })
          .then(()=>{
            res.redirect('/get_postItem/' + req.session.user_id)

          })
    },
    // getWishList: (req,res)=>{
    //   knex('items').where('id',req.session.user_id).then((result)=>{
    //       res.render('wishlist', {items:result[0]})
    //   })
    //
    // },

    deleteItem:(req,res)=>{
        knex('items').where('id', req.params.id).del()
        .then(()=>{
          res.redirect('/get_postItem/'+ req.session.user_id)
        })
    },
    shoppingCart:(req,res)=>{
        knex('shopping_cart').where('users_id',req.session.user_id).then((result)=>{
            if (result.length === 0) {
                res.render('empty_shopping_cart', {users:req.session.user, cart:req.session.shoppingCart})
            } else{
                res.render('shopping_cart', {users:req.session.user, cart:req.session.shoppingCart})
            }
        })  
    },
    addToShoppingCart:(req,res)=>{
        knex('items').where('id', req.params.id).then((result)=>{
            let cart = result[0];
            req.session.shoppingCart_item_name=cart.item_name;
            req.session.shoppingCart_price=cart.price;
            req.session.shoppingCart_date=cart.date;
            req.session.shoppingCart_description=cart.description;
            req.session.shoppingCart_img_url=cart.img_url;
            req.session.save(() => {
                knex('shopping_cart').insert({
                    item_name: req.session.shoppingCart_item_name,
                    price: req.session.shoppingCart_price, 
                    date: req.session.shoppingCart_date,
                    description: req.session.shoppingCart_description,
                    img_url:  req.session.shoppingCart_img_url,
                    users_id: req.session.user_id
                 }).then(()=>{
                     res.redirect('/shoppingCart/' + req.session.user_id)
                 })
              })
        })
     }

//     addToWishList:(req,res)=>{
//       knex('items').insert({
//           item_name: req.body.item_name,
//           img_url: req.body.img_url,
//           description: req.body.description
//       })
//       .then(()=>{
//           res.redirect('/get_wishlist/' + req.session.user_id)
//           })
//   }
}
