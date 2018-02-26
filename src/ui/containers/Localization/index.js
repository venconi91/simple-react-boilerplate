import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeLocale } from './actions';

class Localization extends Component {
  componentWillMount() {
    setTimeout(() => {
      this.props.changeLocale('de');
    }, 5000);
  }
  render() {
    return this.props.children;
  }
}

Localization.propTypes = {
  children: PropTypes.node.isRequired,
  changeLocale: PropTypes.func.isRequired
};

function mapStateToProps() {
  return {};
}

export default connect(
  mapStateToProps,
  { changeLocale }
)(Localization);
