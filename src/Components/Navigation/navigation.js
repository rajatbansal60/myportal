import React from 'react';
import { Routes, Route, Switch, Link } from "react-router-dom";
import About from '../Pages/About';
import Homepage from '../Pages/homepage';

const Navigation = () => {
    return (
        <Switch>
            <Route path="/">
                <Homepage />
            </Route>
            <Route path="/about">
                <About />
            </Route>
        </Switch>
    )
}

export default Navigation
