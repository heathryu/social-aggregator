var React = require('react');

var DefaultLayout = require('./layouts/default');

class UserPage extends React.Component {
  render() {
    return (
      <DefaultLayout title="User">
        <h2>{this.props.name}</h2>
        <img src={this.props.image_url} />
      </DefaultLayout>
    );
  }
}

module.exports = UserPage;
