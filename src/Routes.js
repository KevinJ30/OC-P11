import React from 'react';
import { Route, Switch } from 'react-router';
import Home from './Pages/Home';
import PageNotFound from './Pages/PageNotFound';

export default function Routes() {
    return(
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>

            <Route path="/about">
                <h1>Ma super page</h1>
            </Route>
            
            <Route path="*">
                <PageNotFound/>
            </Route>

        </Switch>
    )
}