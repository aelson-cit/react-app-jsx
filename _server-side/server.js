'use strict';

const React = require('react');
const axios = require('axios');
const express = require('express');
const app = express();


app.set('views', '_components');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use('/produtos', function(req, res) {
  let productData;

  productData = axios.get('http://localhost:8000/products')
  .then(function (response) {
    res.setHeader('Content-Type', 'text/html');
    res.render('product/list/productlist', { list: response.data });
  })
  .catch(function (error) {
    console.log(error);
  });
});


const server = app.listen(3000, () => {
  var addr = server.address();
  console.log('FREEDOM CODE - REACT @ http://%s:%d', addr.address, addr.port);
});
