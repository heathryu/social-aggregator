var React = require('react');

var DefaultLayout = require('./layouts/default');

class Index extends React.Component {
  render() {
    return (
      <DefaultLayout title={this.props.title}>
        <div>
          <h1>{this.props.title}</h1>

          <ul>
            <li>
              <a href="/auth/google" className="google">
                <i className="fab fa-google" />
              </a>
            </li>
          </ul>
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = Index;
