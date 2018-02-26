import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ThemeProvider } from 'react-css-themr';
import { BRAND } from './../EnvConfig/constants';

import firstBrandTheme from './themes/firstBrand';
import secondBrandTheme from './themes/secondBrand';

class Theme extends Component {
  getBrandCss() {
    const availableThemes = {
      firstBrand: firstBrandTheme,
      secondBrand: secondBrandTheme
    };
    return availableThemes[this.props.brandName] || {};
  }
  render() {
    return (
      <ThemeProvider theme={this.getBrandCss()}>
        {this.props.children}
      </ThemeProvider>
    );
  }
}

Theme.propTypes = {
  brandName: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

function mapStateToProps(state) {
  return {
    brandName: state.envConfig.get(BRAND)
  };
}

export default connect(
  mapStateToProps,
  {}
)(Theme);
