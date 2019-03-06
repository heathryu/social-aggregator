var React = require("react");

var DefaultLayout = require("./layouts/default");

class Index extends React.Component {
  render() {
    return (
      <DefaultLayout title={this.props.title}>
        <h1>{this.props.title}</h1>
        <p>Welcome to {this.props.title}</p>
      </DefaultLayout>
    );
  }
}

module.exports = Index;
