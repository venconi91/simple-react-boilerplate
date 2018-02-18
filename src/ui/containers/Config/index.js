import React, { Component } from 'react';
import { connect } from 'react-redux'
import {Helmet} from "react-helmet";
import { loadConfig } from './actions';
import * as configConstants from './constants';

class Config extends Component {
    componentWillMount() {
        this.props.loadConfig();
    }
    render() {
        let {hasConfig, pageTitle, children} = this.props;
        return hasConfig && <div>
            <Helmet>
                <title>{pageTitle}</title>
            </Helmet>
            {children}
        </div>
    }
}

function mapStateToProps(state, ownProps) {
    return {
        hasConfig: state.config.get('isConfigSet'),
        pageTitle: state.config.get(configConstants.PAGE_TITLE)
    };
}

export default connect(
    mapStateToProps,
    { loadConfig }
)(Config);
