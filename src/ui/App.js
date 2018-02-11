import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import { Provider } from 'react-redux';

import store  from './store';

import Config from './containers/Config';
import StepOne from './pages/StepOne';
import StepTwo from './pages/StepTwo';
import PageNotFound from './pages/PageNotFound';

class App extends Component {
  render() {
    // TODO: make BrowserHistory children separate components
    return (
        <Provider store={store}>
            <BrowserRouter>
            <Config>
              <header>
                <nav>
                  <ul>
                    <li><Link to='/'>Step One</Link></li>
                    <li><Link to='/stepTwo'>step Two</Link></li>
                    <li><Link to='/notFound'>Not Found</Link></li>
                  </ul>
                </nav>
              </header>
                <Switch>
                  <Route exact path='/' component={StepOne} />
                  <Route path='/stepTwo' component={StepTwo} />
                  <Route path='*' component={PageNotFound} />
                </Switch>
              </Config>
            </BrowserRouter>
        </Provider>
    );
  }
}

export default App;
