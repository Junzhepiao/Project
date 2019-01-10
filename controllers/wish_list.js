const knex = require("../db/knex.js");

module.exports = {
    // get_wishlist:(req,res)=>{
    //     knex('wish_list').where('users_id',req.session.user_id).then((result)=>{
    //         if (result.length === 0) {
    //             res.render('empty_shopping_cart', {users:req.session.user, cart:result})
    //         } else{
    //             res.render('shopping_cart', {users:req.session.user, cart:result})
    //         }
    //     })  
    // },


}
