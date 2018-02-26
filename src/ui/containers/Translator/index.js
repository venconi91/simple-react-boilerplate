import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Translator extends Component {
  render() {
    return <span>{this.props.value}</span>;
  }
}

Translator.propTypes = {
  value: PropTypes.string.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    value: state.localization.getIn(['localizedLabels', ownProps.children])
  };
}

export default connect(
  mapStateToProps,
  {}
)(Translator);
