//Update the name of the controller below and rename the file.
const template = require("../controllers/template.js")
module.exports = function(app){

  app.get('/', template.index);
  app.post('/createname', template.createName);
}

function authMiddleware(req, res, next) {
  if (!req.session.user) {
      res.redirect("/login");
  } else {
      next();
  }
}
