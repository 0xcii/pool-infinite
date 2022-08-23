import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';

import App from './App';
import AppHome from './AppHome';
import Pools from './Pools';
import { history } from './rootReducer';

import PoolA from '../components/Pools/PoolA';
import PoolB from '../components/Pools/PoolB';
import PoolC from '../components/Pools/PoolC';
import PoolD from '../components/Pools/PoolD';

const AllPools = () => {return (<AppHome Content={Pools}/>)}
const Winners =  () => {return (<AppHome Content={App}/>)}
const MyPools =  () => {return (<AppHome Content={PoolA}/>)}
const Setting =  () => {return (<AppHome Content={Pools}/>)}


const PoolAPage =  () => {return (<AppHome Content={PoolA}/>)};
const PoolBPage =  () => {return (<AppHome Content={PoolB}/>)};
const PoolCPage =  () => {return (<AppHome Content={PoolC}/>)};
const PoolDPage =  () => {return (<AppHome Content={PoolD}/>)};


const routingApp = (
    <ConnectedRouter history={history}>
        <Switch>
            <Route exact path="/app" component={AllPools} />
            <Route exact path="/allpools" component={AllPools} />
            <Route exact path="/winners" component={AllPools} />
            <Route exact path="/mypool" component={AllPools} />
            <Route exact path="/settings" component={AllPools} />

            <Route exact path="/allpools/a" component={PoolAPage} />
            <Route exact path="/allpools/b" component={PoolBPage} />
            <Route exact path="/allpools/c" component={PoolCPage} />
            <Route exact path="/allpools/d" component={PoolDPage} />
        </Switch>
    </ConnectedRouter>
);

export default routingApp;
