const express = require('express'),
      bodyParser = require('body-parser');


  let app = express();
  // app.use(express());
  app.use(bodyParser.json());

var crud = require('./crud');

  app.get('/api/userdata', crud.read)

  app.get('/api/userdata/:id', crud.show)

  app.post('/api/userdata/', crud.create)

  app.put('/api/userdata/:id', crud.update)

  app.delete('/api/userdata/:id', crud.delete)

  app.use(express.static('./nodefun'))

var port = 3000

app.listen(port, function() {
  console.log("listening on port " + port)
})
