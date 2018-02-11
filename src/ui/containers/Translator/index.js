import React, { Component } from 'react';
import { connect } from 'react-redux'

class Translator extends Component {
    render() {
        return <span>{this.props.value}</span>;
    }
}

function mapStateToProps(state, ownProps) {
    return {
        value: state.localization.getIn(['localizedLabels', ownProps.children])
    };
}

export default connect(
    mapStateToProps,
    { }
)(Translator);