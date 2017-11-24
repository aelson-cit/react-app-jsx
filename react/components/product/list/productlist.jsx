const React = require('react');
const DefaultLayout = require('../../layout/default');
const Product = require('../item/product');
const Grid = require('react-bootstrap').Grid;
const Col = require('react-bootstrap').Col;

class ProductList extends React.Component {
  render() {
    const listItems = this.props.list.map((item) => (
      <Col xs={6} md={4}>
        <Product item={item}/>
      </Col>

    ));
    return (
      <DefaultLayout>
        <Grid>
          {listItems}
        </Grid>
      </DefaultLayout>
    );
  }
}

module.exports = ProductList;
