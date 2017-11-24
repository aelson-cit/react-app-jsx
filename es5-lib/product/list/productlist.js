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
    const listItems = this.props.list.map(item => React.createElement(
      Col,
      { xs: 6, md: 4 },
      React.createElement(Product, { item: item })
    ));
    return React.createElement(
      DefaultLayout,
      null,
      React.createElement(
        Grid,
        null,
        listItems
      )
    );
  }
}

module.exports = ProductList;