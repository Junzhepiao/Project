const knex = require("../db/knex.js");

module.exports = {
  showLogin: (req, res)=> {
     res.render('login');
},
  registerLogin: (req, res) => {
        knex('users').insert({
          name: req.body.name,
          password: req.body.password,
          confirm_password: req.body.confirm_password
        }).then(() => {
          res.redirect('/login')
        })

  },
  login: (req, res) => {
      knex('users').where('name', req.body.name).then((results)=> {
        let user = results[0];
        if(!user) {
          res.direct('/login')
          return;
    }
        if (users.password === req.body.password) {
          req.session.users_id = user.id;
          req.session.save(() => {
            res.redirect('/protected');
          })
        }else {
          res.redirect('/login')
        }
      })
  },
  logout: (req, res)=>{
    req.session.user = null;
    res.redirect('/login');
  }
}
