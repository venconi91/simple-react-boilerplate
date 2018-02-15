import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import { Provider } from 'react-redux';
import { ThemeProvider } from 'react-css-themr';

import store  from './store';

import ThemeTester, {ComponentId} from './components/ThemeTester';

import Config from './containers/Config';
import StepOne from './pages/StepOne';
import StepTwo from './pages/StepTwo';
import PageNotFound from './pages/PageNotFound';

import style from './style.css';

const contextTheme = {
  [ComponentId]: style,
};

class App extends Component {
  render() {
    // TODO: make BrowserHistory children separate components
    return (
        <Provider store={store}>
          <ThemeProvider theme={contextTheme}>
            <BrowserRouter>
            <Config>
              <ThemeTester />
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
          </ThemeProvider>
        </Provider>
    );
  }
}

export default App;
