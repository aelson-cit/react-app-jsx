'use strict';

const React = require('react');
const axios = require('axios');
const express = require('express');
const app = express();


app.set('views', '_components');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use('/', function(req, res) {
  // consumir api com axios e renderizar componente
});


const server = app.listen(3000, () => {
  var addr = server.address();
  console.log('FREEDOM CODE - REACT @ SERVER SIDE PORT[%s]', addr.port);
});
