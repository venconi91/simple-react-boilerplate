import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

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
                <Header>
                    {/* <header>
                        <nav>
                        <ul>
                            <li><Link to='/'>Step One</Link></li>
                            <li><Link to='/stepTwo'>step Two</Link></li>
                            <li><Link to='/notFound'>Not Found</Link></li>
                        </ul>
                        </nav>
                    </header> */}
                </Header>
                <div className={style.main}>
                    <p>main</p>
                    <p>main</p>
                    <p>main</p>
                    <p>main</p>
                    <p>main</p>
                    <p>main</p>
                    <p>main</p>
                    <p>main</p>
                    <p>main</p>
                    <p>main</p>
                    <p>main</p>
                    <p>main</p>
                    <p>testing flexbox with a lot of content</p>

                    {/* <p>testing flexbox with a lot of content</p>
                    <p>main</p>
                    <p>main</p>
                    <p>main</p>
                    <p>main</p>
                    <p>main</p>
                    <p>main</p>
                    <p>main</p>
                    <p>main</p>
                    <p>main</p>
                    <p>main</p>
                    <p>main</p>
                    <p>main</p>
                    <p>main</p>
                    <p>main</p>
                    <p>main</p>
                    <p>main</p>
                    <p>main</p>
                    <p>main</p>
                    <p>main</p> */}
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
