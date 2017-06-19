const express = require("express"),
      bodyParser = require("body-parser");


var app = express();
app.use(bodyParser.json());

var users = require('./usersCtrl');

// require('./userData');

app.get('/api/users/', users.index);

app.get('/api/users/:id', users.show)

app.get('/api/admins', users.admins)

app.get('/api/nonadmins', users.nonadmins)

app.get('/api/user_type/:userType', users.usertype)

app.put('/api/users/:id', users.update)

app.post('/api/users/', users.create)

app.delete('/api/users/:id', users.destroy)

app.use(express.static('./node-assessment-in-dev'))

var port = 3000

app.listen(port, function() {
  console.log("listening on port " + port)
})
