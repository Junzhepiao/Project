const knex = require("../db/knex.js");

module.exports = {
  showLogin: (req, res)=> {
     res.render('login');
},
  registerLogin: (req, res) => {
        knex('users').insert({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
          confirm_password: req.body.confirm_password,
          venmo: req.body.venmo,
          address: req.body.address

        }).then(() => {
          res.redirect('/login')
        })
  },
  login: (req, res) => {
      knex('users').where('email', req.body.email).then((results)=> {
        let user = results[0];
        if (user.password === req.body.password) {
          req.session.user_name = user.name
          req.session.user_id = user.id;
          req.session.user = user
          //console.log(req.session.user_name)
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
  },
  showAbout: (req, res)=> {
     res.render('about');
  }
}
