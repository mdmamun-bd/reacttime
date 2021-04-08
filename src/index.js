import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import About from './Pages/About'
import Contact from './Pages/Contact'
import reportWebVitals from './reportWebVitals';





const routing = (
    <Router>
        <div>
            <ul>
               <li><Link to='/'>Home</Link></li>
             <li><Link to='/about'>About</Link></li>
               <li><Link to='/contact'>Contact</Link></li>
            </ul>
            <h1>React Router Example</h1>
            <Route exact path="/" component={App} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
        </div>
    </Router>
)
ReactDOM.render(routing, document.getElementById('root'));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
