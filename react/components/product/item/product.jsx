const React = require('react');
const Thumbnail = require('react-bootstrap').Thumbnail;
const Button = require('react-bootstrap').Button;

class Product extends React.Component {
  render() {
    return (
      <Thumbnail src={this.props.item.imageSrc} alt="242x200">
        <h3>{this.props.item.sku}</h3>
        <p>{this.props.item.priceInCents}</p>
        <p>
          <Button bsStyle="primary">Add to Cart</Button>&nbsp;
          <Button bsStyle="default">WishList</Button>
        </p>
      </Thumbnail>
    );
  }
}

module.exports = Product;
