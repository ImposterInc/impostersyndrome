import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

ReactDOM.render(
    <Router>
    <div>
        <Route path='/' component={App}/>
        {/* <Route exact path='/' component={About}/>
        <Route path='/projects' component={Projects}/>
        <Route path='/contact' component={Contact}/> */}
    </div>
</Router>, document.getElementById('root'));

registerServiceWorker();
