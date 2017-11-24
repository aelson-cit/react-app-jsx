const React = require('react');

class DefaultLayout extends React.Component {
  render() {
    return React.createElement(
      "html",
      null,
      React.createElement(
        "head",
        null,
        React.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1.0" }),
        React.createElement("link", { rel: "stylesheet", href: "https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" }),
        React.createElement("link", { rel: "stylesheet", href: "https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css" }),
        React.createElement(
          "title",
          null,
          "FREEDOM CODE - REACT JSX"
        )
      ),
      React.createElement(
        "body",
        null,
        this.props.children
      )
    );
  }
}

module.exports = DefaultLayout;