//Update the name of the controller below and rename the file.
const index = require("../controllers/index.js")
module.exports = function(app){
  app.get('/', index.index);
}

function authMiddleware(req, res, next) {
  if (!req.session.user) {
      res.redirect("/login");
  } else {
      next();
  }
}
