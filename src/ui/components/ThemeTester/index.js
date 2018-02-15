import React, { Component } from 'react';
import { themr } from 'react-css-themr';

import style from './style.css';

export const ComponentId = Symbol('ThemeTester');

class ThemeTester extends Component {
    render() {
        let {theme} = this.props;
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

export default themr(ComponentId, style)(ThemeTester);
