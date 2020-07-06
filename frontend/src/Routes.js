import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './core/Home';
import VisitorSignin from './visitor/VisitorSignin';
import visitorLogout from './visitor/visitorLogout';
import Status from './visitor/Status';




const Routes = () => {

    return(
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route  path="/visitor/signin" exact component={VisitorSignin}/>
            <Route path="/visitor/logout" exact component={visitorLogout}/>
            <Route path="/visitor/status" exact component={Status}/>
        </Switch>
        </BrowserRouter>
    )
}


export default Routes;