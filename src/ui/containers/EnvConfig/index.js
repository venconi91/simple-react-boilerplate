import React, { Component } from 'react';
import { connect } from 'react-redux'
import {Helmet} from "react-helmet";
import { loadConfig } from './actions';
import * as configConstants from './constants';

class EnvConfig extends Component {
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
        hasConfig: state.envConfig.get('isConfigSet'),
        pageTitle: state.envConfig.get(configConstants.PAGE_TITLE)
    };
}

export default connect(
    mapStateToProps,
    { loadConfig }
)(EnvConfig);
