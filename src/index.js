import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import Heading from './components/Heading'
import AppNavbar from './components/AppNavbar'
import ArticlesPage from './components/ArticlePage'
import SkillsPage from './components/SkillPage'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Heading />
    <BrowserRouter>
      <AppNavbar />
      <Switch >
        <Route exact path='/' component={App} />
        <Route path='/skill/:id' component={SkillsPage} />
        <Route path='/article/:id' component={ArticlesPage} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
