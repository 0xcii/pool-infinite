import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';

import App from './App';
import AppHome from './AppHome';
import LandingPage from './LandingPage';
import { history } from './rootReducer';

const routing = (
    <ConnectedRouter history={history}>
        <Switch>
            <Route exact path="/" component={LandingPage} />
            {/* <Route exact path="/" component={AppHome} /> */}
            <Route exact path="/allpools" component={App} />
            <Route exact path="/winners" component={App} />
            <Route exact path="/mypool" component={App} />
            <Route exact path="/settings" component={App} />
        </Switch>
    </ConnectedRouter>
);

export default routing;
