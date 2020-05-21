import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Questions from '../pages/Questions';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/start" exact component={Questions} />
        </Switch>
    )
}
