var db = require('./userData');

module.exports = {
    index: function(req, res, next) {

      let field = req.query
      var result = db
      if (req.query.age || req.query.lastname || req.query.email || req.query.favorites) {
        var result = [];
      for (var i = 0; i < db.length; i++) {
        var key = db[i].favorites
          for (j in key) {
          if (key[j] == field.favorites) {
            result.push(db[i])
          }
        }
        if (db[i].age < field.age) {
          result.push(db[i])
        }
        if (db[i].last_name == field.lastname) {
          result.push(db[i])
          // console.log(db[i])
        }
        if (db[i].email == field.email){
          var email = db[i]
          console.log(email)
          res.status(200).json(email)
        }
      }
    }
      res.status(200).json(result)
        },
    show: function(req, res, next) {
      var id = req.params.id -1;
      if (db[parseInt(id)] == null) {
        res.status(404).json(null)
      } else {
      res.status(200).json(db[parseInt(id)])
    }
    },
    admins: function(req, res, next) {
      var admins = []
      for (var i = 0; i < db.length; i++){
        if (db[i].type == "admin"){
          admins.push(db[i])
        }
      }
      res.status(200).json(admins)
    },
    nonadmins: function(req, res, next){
      var nonadmins = []
      for (var i = 0; i < db.length; i++){
        if (db[i].type !== "admin"){
          nonadmins.push(db[i])
        }
      }
      res.status(200).json(nonadmins)
    },
    usertype: function(req, res, next){
      console.log(req.params)
      var userType = []
      for (var i = 0; i < db.length; i++){
        if (db[i].type == req.params.userType){
          console.log(db[i].type)
          userType.push(db[i])
        }
      }
      res.status(200).json(userType)
    },
    create: function(req, res, next) {
      var result = db
      var newUser = req.body
      for (var  i = 0; i < db.length; i++) {
        var last = []
        last.push(db[i].id)
      }
      lastuser = last[last.length - 1]
      newUser.id = lastuser + 1
        result.push(newUser)
      res.status(200).json(result)
    },
    update: function( req, res, next){
      var push = req.body
      console.log(push)
      db[req.params.id - 1] = push
      res.status(200).json(db)
    }
    ,
    destroy: function(req, res, next) {
          db.splice(req.params.id - 1, 1)
          res.status(200).json(db)
      }



}
