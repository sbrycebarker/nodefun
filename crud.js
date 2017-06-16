      var db = require('./userdata');


      module.exports = {

          read: function(req, res, next) {
            res.status(200).json(db)
          },
          show: function(req, res, next) {
            // res.status(200).json(req.params)
            for (var i = 0; i < db.length; i++) {
              if (db[i].id == req.params.id){
                var user = db[i]
                if(!user) {
                 res.status(500).send("not found")
                }else{
                  res.status(200).json(user)
                }
              }
            }

          },
          create: function(req, res, next) {
            var newUser = req.body;
            db.push(newUser)
            res.status(200).json(newUser)
          },
          update: function(req, res, next){
            var update = req.body;
            for(var i = 0; i < db.length; i++) {
              if (db[i].id == req.params.id){
                Object.assign(db[i], update);
              }
            }
            res.status(200).json(req.body)
          },
          delete: function(req, res, next) {
            // for (var i = 0; i < db.length; i++) {
            //   if(db[i].id == req.params.id){
            //     console.log("found")
            //     res.status(500).json("found")
            //   }else {
                res.status(500).json("res")


            }





          }
