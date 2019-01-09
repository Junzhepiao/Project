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
  app.get('/product_details/:id', items.getDetails); // id = items
  app.get('/get_postItem/:id', items.getPostItems); // id = users 
  app.post('/postItem/:id', items.postItem); // id is items
  app.get('/item/details/:id', items.editItem); // id = items
  app.post('/item/update/:id', items.updateItem); // id = items
  app.get('/shoppingCart/:id', items.shoppingCart); // id = user id
  app.get('/get_wishlist/:id', items.getWishList)//id = users_id
  //app.post('/wishlist/:id', items.addToWishList)//id = users_id
  app.post('/add_to_shopping_cart/:id', items.addToShoppingCart);// id = items id

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
