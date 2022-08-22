import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';

import LandingPage from './LandingPage';
import { history } from './rootReducer';

const routing = (
    <ConnectedRouter history={history}>
        <Switch>
            <Route exact path="/" component={LandingPage} />
        </Switch>
    </ConnectedRouter>
);

export default routing;
