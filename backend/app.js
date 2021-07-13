const express = require('express'),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  app = express(),
  port = 9000;

  let corsOption = {
    origin: "http://localhost:3000"
  }

  app.use(cors(corsOption));
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json())

  // Initial Handler
  app.use('/api/v1', require('./routes'))
  
  

app.listen(port, '::', () => console.log('Services bancend running in port '+port));