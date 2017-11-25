const React = require('react');
const DefaultLayout = require('../../layout/default');
const Product = require('../item/product');
const Grid = require('react-bootstrap').Grid;
const Col = require('react-bootstrap').Col;

class ProductList extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <DefaultLayout>
        <Grid>
        </Grid>
      </DefaultLayout>
    );
  }
}

module.exports = ProductList;
