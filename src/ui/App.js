import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import { Provider } from 'react-redux';

import store  from './store';

import EnvConfig from './containers/EnvConfig';
import Theme from './containers/Theme';
import Localization from './containers/Localization';
import Routes from './Routes';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <EnvConfig>
          <Theme>
            <Localization>
              <Routes />
            </Localization>
          </Theme>
        </EnvConfig>
      </Provider>
    );
  }
}

export default App;
