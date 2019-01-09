//Update the name of the controller below and rename the file.
const index = require("../controllers/index.js")
const users = require("../controllers/users.js")
const items = require("../controllers/items.js")
const comments = require("../controllers/comments.js")

module.exports = function(app){
  app.get('/', index.index);
  app.get('/login', users.showLogin);
  app.post('/register', users.registerLogin)
  app.post('/login', users.login);


  app.use(authMiddleware);
  app.get('/protected', users.showProtected);

  //items
  app.get('/product_details/:id', items.getDetails);
  app.get('/get_postItem/:id', items.getPostItems);
  app.post('/postItem/:id', items.postItem);
  app.get('/item/details/:id', items.editItem);
  app.post('/item/update/:id', items.updateItem);

   app.get('/wishlist/:id', items.wishList)
  // app.post('/wishlist/cart:id', items.fromWishListToCart)
  //app.get('/delete/item/:id', items.deleteItem)

  app.get('/delete/item/:id', items.deleteItem)

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
