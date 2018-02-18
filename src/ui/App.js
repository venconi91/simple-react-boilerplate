import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import { Provider } from 'react-redux';

import store  from './store';

import Config from './containers/Config';
import Theme from './containers/Theme';
import Localization from './containers/Localization';
import Routes from './Routes';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Config>
          <Theme>
            <Localization>
              <Routes />
            </Localization>
          </Theme>
        </Config>
      </Provider>
    );
  }
}

export default App;
