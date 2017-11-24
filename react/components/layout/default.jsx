const React = require('react');

class DefaultLayout extends React.Component {
  render() {
    return (
      <html>
        <head><title>FREEDOM CODE - REACT JSX</title></head>
        <body>{this.props.children}</body>
      </html>
    );
  }
}

module.exports = DefaultLayout;
