var React = require('react');

class DefaultLayout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <link rel="stylesheet" href="/bootstrap/dist/css/bootstrap.min.css" />
          <link rel="stylesheet" href="/fontawesome/css/all.min.css" />
          <link rel="stylesheet" href="/stylesheets/style.css" />

          <script src="/bootstrap/dist/js/bootstrap.bundle.min.js" />
        </head>
        <body>{this.props.children}</body>
      </html>
    );
  }
}

module.exports = DefaultLayout;
