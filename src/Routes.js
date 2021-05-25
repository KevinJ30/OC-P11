import React from 'react';
import { Route, Switch } from 'react-router';
import Home from './Pages/Home';

export default function Routes() {
    return(
        <Switch>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    )
}