//Update the name of the controller below and rename the file.
const index = require("../controllers/index.js")
const users = require("../controllers/users.js")

module.exports = function(app){
  app.get('/', index.index);
  app.get('/login', users.showLogin);
  app.post('/register', users.registerLogin)
  app.post('/login', users.login);


  app.use(authMiddleware);
  app.get('/protected', users.showProtected);

}

function authMiddleware(req, res, next) {
  if (!req.session.user) {
      res.redirect("/login");
  } else {
      next();
  }
}
