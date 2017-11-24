const React = require('react');
const Thumbnail = require('react-bootstrap').Thumbnail;
const Button = require('react-bootstrap').Button;

class Product extends React.Component {
  render() {
    return React.createElement(
      Thumbnail,
      { bsClass: 'thumbnail thumb-img', src: this.props.item.imageSrc, alt: '242x200' },
      React.createElement(
        'h3',
        null,
        this.props.item.sku
      ),
      React.createElement(
        'p',
        null,
        this.props.item.priceInCents
      ),
      React.createElement(
        'p',
        null,
        React.createElement(
          Button,
          { bsStyle: 'primary' },
          'Add to Cart'
        ),
        '\xA0',
        React.createElement(
          Button,
          { bsStyle: 'default' },
          'Delete'
        )
      )
    );
  }
}

module.exports = Product;