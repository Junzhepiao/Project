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
  app.get('/product_details/:id', items.getDetails)

  //comments
  app.post('/product_comments/:id', comments.postComments)
}

function authMiddleware(req, res, next) {
  if (!req.session.user) {
      res.redirect("/login");
  } else {
      next();
  }
}
