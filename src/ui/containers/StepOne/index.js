import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Translator from './../Translator';
import ThemeTester from './../../components/ThemeTester';
import { changeFirstName } from './actions';
import style from './style.css';

class StepOne extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const newValue = e.target.value;
    this.props.changeFirstName(newValue);
  }
  render() {
    const { value } = this.props;
    return (
      <div>
        stepOne Container
        <div><Translator>firstName</Translator>:
          <span className={style.firstNameLabel}>{value}</span>
        </div>
        <input type='text' value={value} onChange={this.handleChange} />
        <div>
          <ThemeTester />
        </div>
      </div>
    );
  }
}

StepOne.propTypes = {
  value: PropTypes.string.isRequired,
  changeFirstName: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    value: state.stepOne.get('firstName')
  };
}

export default connect(
  mapStateToProps,
  { changeFirstName }
)(StepOne);
