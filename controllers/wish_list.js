// const knex = require("../db/knex.js");
//
// 
// module.exports = {
// getWishList: (req,res)=>{
//   knex('wish_list').where('id',req.user_id).then((result)=>{
//       res.render('wishlist', {items:result[0]})
//   })
//
// },
//
//  addToWishList: (req, res)=>{
//       knex('items').insert({
//           item_name: req.body.item_name,
//           price: req.body.price,
//           date: req.body.date,
//           description: req.body.description,
//           img_url: req.body.img_url,
//           // users_id: req.body.users_id
//       })
//       .then(()=>{
//           res.redirect('/get_wishlist/' + req.params.id)
//           })
//   }
// }
