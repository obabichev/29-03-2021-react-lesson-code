import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import {BoardsPage} from '../pages/BoardsPage';
import {BoardPage} from '../pages/BoardPage';

export const AppRouter = () => {
    return <BrowserRouter>
        <Switch>
            <Route exact path="/" component={BoardsPage}/>
            <Route exact path="/board/:id" component={BoardPage}/>
            <Redirect to="/"/>
        </Switch>
    </BrowserRouter>
};
