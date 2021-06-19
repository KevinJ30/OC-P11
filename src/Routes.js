import React from 'react';
import { Route, Switch } from 'react-router';
import About from './Pages/About';
import Home from './Pages/Home';
import PageNotFound from './Pages/PageNotFound';
import Property from './Pages/Property';

export default function Routes() {
    return(
        <Switch>
            <Route exact path="/" component={Home} />
            
            <Route path="/property/:id" component={Property} />

            <Route path="/about" component={About} />
            
            <Route path="*" component={PageNotFound} />

        </Switch>
    )
}