import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { loadConfig } from './actions';
import * as configConstants from './constants';

class EnvConfig extends Component {
  componentWillMount() {
    this.props.loadConfig();
  }
  render() {
    const { hasConfig, pageTitle, children } = this.props;
    return (
      hasConfig &&
      <div>
        <Helmet>
          <title>{pageTitle}</title>
        </Helmet>
        {children}
      </div>
    );
  }
}

EnvConfig.propTypes = {
  hasConfig: PropTypes.bool.isRequired,
  pageTitle: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  loadConfig: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    hasConfig: state.envConfig.get('isConfigSet'),
    pageTitle: state.envConfig.get(configConstants.PAGE_TITLE)
  };
}

export default connect(
  mapStateToProps,
  { loadConfig }
)(EnvConfig);
