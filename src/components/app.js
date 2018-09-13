import React from 'react';
import '../assets/css/app.css';
import logo from '../assets/images/logo.svg';
import Greeting from './greeting';

const App = () => (
    <div>
        <div className="app">
            <Greeting name="Jim Bob" favColor="blue" />
            <Greeting name="Samantha John" favColor="hotpink" />
            <img src={logo} className="logo rotate"/>
            <h1>Welcome to React</h1>
        </div>
    </div>
);

export default App;
