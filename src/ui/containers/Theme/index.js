import React, { Component } from 'react';
import { connect } from 'react-redux'
import { ThemeProvider } from 'react-css-themr';
import {BRAND} from './../Config/constants';

import firstBrandTheme from './themes/firstBrand';
import secondBrandTheme from './themes/secondBrand';

class Theme extends Component {
  getBrandCss() {
    let availableThemes = {
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

function mapStateToProps(state, ownProps) {
  return {
      brandName: state.config.get(BRAND)
  };
}

export default connect(
  mapStateToProps,
  { }
)(Theme);
