'use strict';

const React = require('react');
const Product = require('./components/product.jsx');
const axios = require('axios');
const jsx = require('node-jsx');
const browserify = require('browserify');
const express = require('express');

jsx.install();

var app = express();

app.use('/bundle.js', function(req, res) {
  res.setHeader('content-type', 'application/javascript');
  browserify('./app.js', {
    debug: true
  })
  .transform('reactify')
  .bundle()
  .pipe(res);
});

app.use('/produtos', function(req, res) {
  let productData;

  productData = axios.get('http://localhost:8000/products')
  .then(function (response) {
    productData = response;

    res.setHeader('Content-Type', 'text/html');
    res.end(React.renderToStaticMarkup(
        React.DOM.body(
          null,
          React.DOM.div({
            id: 'app',
            dangerouslySetInnerHTML: {
              __html: React.renderToString(React.createElement(Product, {
                product: productData
              }))
            }
          }),
          React.DOM.script({
            'id': 'initial-data',
            'type': 'text/plain',
            'data-json': JSON.stringify(productData)
          }),
          React.DOM.script({
            src: '/bundle.js'
          })
        )
      ));
  })
  .catch(function (error) {
    console.log(error);
  });
});


const server = app.listen(3000, () => {
  var addr = server.address();
  console.log('FREEDOM CODE - REACT @ http://%s:%d', addr.address, addr.port);
});
