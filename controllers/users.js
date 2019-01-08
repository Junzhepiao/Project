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
        if (user.password === req.body.password) {
          req.session.user_id = user.id;
          req.session.user = user
          req.session.save(() => {
            res.redirect('/protected');
          })
        }else {
          res.redirect('/login')
        }
      }).catch(()=>{
        res.redirect('/login')
      })
  },
  showProtected:(req,res)=>{
    knex('items').then((result)=>{

      res.render('protected', {items:result, users:req.session.user})
  
  })
},
  logout: (req, res)=>{
    req.session.user = null;
    res.redirect('/login');
  }
}
