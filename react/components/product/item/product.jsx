const React = require('react');

class Product extends React.Component {
  render() {
    return (
      <li key={this.props.item.sku.toString()}>
        <h1>Product {this.props.item.sku}</h1>
        <img src={this.props.item.imageSrc} />
        <h3>Por Apenas {this.props.item.priceInCents}</h3>
      </li>
    );
  }
}

module.exports = Product;
