import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { changeLastName } from './actions';

class StepOne extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const newValue = e.target.value;
    this.props.changeLastName(newValue);
  }
  render() {
    const { value } = this.props;
    return (
      <div>
        stepTwo Container
        <div>Last Name: <span>{value}</span></div>
        <input type='text' value={value} onChange={this.handleChange} />
      </div>
    );
  }
}

StepOne.propTypes = {
  value: PropTypes.string.isRequired,
  changeLastName: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    value: state.stepTwo.get('lastName')
  };
}

export default connect(
  mapStateToProps,
  { changeLastName }
)(StepOne);
