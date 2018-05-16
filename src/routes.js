import React from 'react';
import {Route, Link, Switch} from'react-router-dom';
import Home from './Components/Home/Home'
import Q1 from './Components/Q1';
import Q2 from './Components/Q2';
import Q3 from './Components/Q3';
import Q4 from './Components/Q4';
import Q5 from './Components/Q5';

export default (
    <Switch>
        <Route path='/' exact component ={Home}/>
        <Route path='/Q1' component ={Q1}/>
        <Route path='/Q2' component ={Q2}/>
        <Route path='/Q3' component ={Q3}/>
        <Route path='/Q4' component ={Q4}/>
        <Route path='/Q5' component ={Q5}/>
    </Switch>
)
