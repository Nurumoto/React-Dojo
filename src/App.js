import React, { useEffect } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { history } from './_helpers';
import { alertActions } from './_actions';
import { PrivateRoute } from './_components';
import { Main } from './_view/Main';
import { NewProjectPage } from './_view/Main/NewProjectPage';
import { ProfileEditPage } from './_view/Main/ProfileEditPage';
import { ProjectDetailPage } from './_view/Main/ProjectDetailPage';
import { LandingPage } from './_view/LandingPage';
import { BoardPage } from './_view/Main/BoardPage';

export default function App() {
    const alert = useSelector(state => state.alert);
    const dispatch = useDispatch();

    useEffect(() => {
        history.listen((location, action) => {
            dispatch(alertActions.clear());
        });
    });

    return (
        <div className="w-full h-full text-xs sm:text-sm 2xl:text-base relative">
            {
                alert.message &&
                    <div className={`alert ${alert.type} w-full md:w-1/2 xl:w-1/3 absolute left-10 top-28 z-10`}>{alert.message}</div>
            }
            <Router history={history}>
                <Switch>
                    <PrivateRoute exact path="/" component={Main} />
                    <PrivateRoute exact path="/projects" component={NewProjectPage} />
                    <PrivateRoute exact path="/addBoard" component={BoardPage} />
                    <PrivateRoute exact path="/profile-edit" component={ProfileEditPage} />
                    <PrivateRoute exact path="/projectDetail" component={ProjectDetailPage} />
                    <Route path="/login" component={LandingPage} />
                    <Redirect from="*" to="/" />
                </Switch>
            </Router>
        </div>
    );
}
