const React = require('react');
const DefaultLayout = require('../../layout/default');
const Product = require('../item/product');

class ProductList extends React.Component {
  render() {
    const listItems = this.props.list.map((item) =>
      <Product item={item}/>
    );
    return (
      <DefaultLayout>
        <ul key="1">
          {listItems}
        </ul>
      </DefaultLayout>
    );
  }
}

module.exports = ProductList;
