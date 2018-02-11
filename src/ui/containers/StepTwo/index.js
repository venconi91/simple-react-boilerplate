import React, { Component } from 'react';
import { connect } from 'react-redux'

import { changeLastName } from './actions';

class StepOne extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        let newValue = e.target.value;
        this.props.changeLastName(newValue);
    }
    render() {
        let {value} = this.props;
        return (
            <div>
                stepTwo Container
                <div>Last Name: <span>{value}</span></div>
                <input type='text' value={value} onChange={this.handleChange} />
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        value: state.stepTwo.get('lastName')
    };
}

export default connect(
    mapStateToProps,
    { changeLastName }
)(StepOne);