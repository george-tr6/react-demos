import React from 'react';
import { Link, Route } from 'react-router-dom';
import HomeImprovement from './home_improvement';
import ElectricCars from './electric_cars';
import Gardening from './gardening';

export default () => {
    return(
    <div>
        <h1>Articles</h1>
        <ul>
            <li><Link to="/articles/home_improvement">Home Improvement</Link></li>
            <li><Link to="/articles/electric_cars">Electric Cars</Link></li>
            <li><Link to="/articles/gardening">Gardening</Link></li>
        </ul>
        <Route path="/articles/home_improvement" component={HomeImprovement}/>
        <Route path="/articles/electric_cars" component={ElectricCars}/>
        <Route path="/articles/gardening" component={Gardening}/>
    </div>
    );
}