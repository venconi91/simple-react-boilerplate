import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { themr } from 'react-css-themr';

import style from './style.css';

export const ComponentId = Symbol('ThemeTester');

class ThemeTester extends Component {
  render() {
    const { theme } = this.props;
    return (
      <div>
        <p className={theme.firstParagraph}>
          first Paragraph
        </p>
        <p className={theme.secondParagraph}>
          second Paragraph
        </p>
        <p className={theme.thirdParagraph}>
          third Paragraph
        </p>
      </div>
    );
  }
}

ThemeTester.propTypes = {
  theme: PropTypes.object.isRequired
};

export default themr(ComponentId, style)(ThemeTester);
