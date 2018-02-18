
import React, { Component } from 'react';
import style from './style.css';

class Header extends Component {
    render() {
        return (
            <div className={style.wrapper}>
                <div className={style.logoWrapper}>logo</div>
                <div className={style.menuItemsWrapper}>menu items</div>
            </div>
        );
    }
}

export default Header;
