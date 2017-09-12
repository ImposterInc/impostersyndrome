import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Home from './components/Home';
import LoggedIn from './components/HomeLoggedIn';

ReactDOM.render(
    <Router>
    <div>
        <Route path='/' component={App}/>
        <Route exact path='/' component={Home}/>
        <Route path='/loggedin' component={LoggedIn}/>
        {/* <Route path='/contact' component={Contact}/> */}
    </div>
</Router>, document.getElementById('root'));

if(module.hot){
    module.hot.accept();
}

registerServiceWorker();
