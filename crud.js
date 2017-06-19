var db = require('./userData');

module.exports = {

    index: function(req, res, next) {
      console.log(req.query)
      let field = req.query
      var result = [];
      for (var i = 0; i < db.length; i++) {
        // console.log(db[i])
        var key = db[i].favorites

          for (j in key) {
            // console.log(key)
          if (key[j] == field.favorites) {
            result.push(db[i])
          }
        }

        if (db[i].age < parseInt(field.age)) {
          result.push(db[i])
        }
        // console.log(db[i].last_name)
        if (db[i].last_name == field.last_name) {
          // console.log("BAM")
          result.push(db[i])
        }
        if (db[i].email == field.email){
          result.push(db[i].email)
        }
      }
      res.status(200).json(result)

    },
    show: function(req, res, next) {
      var id = req.params.id - 1 ;
      res.status(200).json(db[parseInt(id)])
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
      console.log(req.params.userType)
      var usertype = []
      for (var i = 0; i < db.length; i++){
        if (db[i].type == req.params.userType){
          usertype.push(db[i])
        }
      }
      res.status(200).json(usertype)
    },
    create: function(req, res, next) {
      db.push(req.body)
      res.status(200).json(db)
    },
    update: function( req, res, next){
      var push = req.body
      console.log(push)
      db[req.params.id] = push
      res.status(200).json(db)
      console.log(db)
    }
    ,
    destroy: function(req, res, next) {
          db.splice(req.params.id - 1, 1)
          res.status(200).json(db)
      }



}
