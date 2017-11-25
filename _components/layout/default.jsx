const React = require('react');

class DefaultLayout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css" />
          <title>FREEDOM CODE - REACT JSX</title>
        </head>
        <body>
        <div>Olá</div>
        {this.props.children}</body>
      </html>
    );
  }
}

module.exports = DefaultLayout;
