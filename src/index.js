const express = require('express');
const config = require('./server/config');
const app = config(express());

// DATABASE
require('./database');

// START SERVER
app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'));
});
