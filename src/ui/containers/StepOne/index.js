import React, { Component } from 'react';
import { connect } from 'react-redux'

import { changeFirstName } from './actions';
import style from './styles/style.css';

class StepOne extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        let newValue = e.target.value;
        this.props.changeFirstName(newValue);
    }
    render() {
        let {value} = this.props;
        return (
            <div>
                stepOne Container
                <div>First Name: <span className={style.firstNameLabel}>{value}</span></div>
                <input type='text' value={value} onChange={this.handleChange} />
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        value: state.stepOne.get('firstName')
    };
}

export default connect(
    mapStateToProps,
    { changeFirstName }
)(StepOne);