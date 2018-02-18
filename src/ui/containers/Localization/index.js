import React, { Component } from 'react';
import { connect } from 'react-redux'
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

function mapStateToProps(state, ownProps) {
    return { };
}

export default connect(
    mapStateToProps,
    { changeLocale }
)(Localization);
