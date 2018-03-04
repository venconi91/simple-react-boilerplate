import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import StepOne from './pages/StepOne';
import StepTwo from './pages/StepTwo';
import PageNotFound from './pages/PageNotFound';
import Header from './components/Header';
import Footer from './components/Footer';

import style from './style.css';

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className={style.routesWrapper}>
          <Header />
          <div className={style.main}>
            <Switch>
              <Route exact path='/' component={StepOne} />
              <Route path='/stepTwo' component={StepTwo} />
              <Route path='*' component={PageNotFound} />
            </Switch>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default Routes;
