//Update the name of the controller below and rename the file.
const index = require("../controllers/index.js")
const users = require("../controllers/users.js")
const items = require("../controllers/items.js")
const comments = require("../controllers/comments.js")



module.exports = function(app){
  app.get('/', index.index);
  app.get('/login', users.showLogin);
  app.get('/about', users.showAbout);
  app.post('/register', users.registerLogin)
  app.post('/login', users.login);


  app.use(authMiddleware);
  app.get('/protected', users.showProtected);

  //items
  app.get('/product_details/:id', items.getDetails); // id = items
  app.get('/get_postItem/:id', items.getPostItems); // id = users
  app.post('/postItem/:id', items.postItem); // id is items
  app.get('/item/details/:id', items.editItem); // id = items
  app.post('/item/update/:id', items.updateItem); // id = items
  app.get('/shoppingCart/:id', items.shoppingCart); // id = user id
  app.get('/wishList/:id', items.wishList); // id = user id
  app.get('/delete/item/:id', items.deleteItem);

  app.post('/add_to_shopping_cart/:id', items.addToShoppingCart);// id = items id
  app.post('/add_to_wish_list/:id', items.addToWishList);// id = items id
  app.post('/from_wish_list_to_shopping_cart/:id', items.fromWishListToShoppingCart);// id = items id

  app.get('/delete/item/from/cart/:id', items.deleteFromCart); //id = cart item id
  app.get('/delete/item/from/WishList/:id', items.deleteFromWishList); //id = cart item id
  //app.get('/get_orders/:id', items.getOrders);//id = user id
  app.post('/update/quantity/:id', items.updateQuantity); // id = shopping_cart id

//check out
  app.post('/check_out/:id', items.checkOut); // id = user id

  

  //comments
  app.post('/product_comments/:id', comments.postComments);
}

function authMiddleware(req, res, next) {
  if (!req.session.user) {
      res.redirect("/login");
  } else {
      next();
  }
}
