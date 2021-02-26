import React, { useEffect } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { history } from './_helpers';
import { alertActions } from './_actions';
import { PrivateRoute } from './_components';
import { Main } from './_view/Main';
import { NewProjectPage } from './_view/Main/NewProjectPage';
import { ProfileEditPage } from './_view/Main/ProfileEditPage';
import { ProjectDetailPage } from './_view/Main/ProjectDetailPage';
// import { LoginPage } from './LoginPage';
// import { RegisterPage } from './RegisterPage';
import { LandingPage } from './_view/LandingPage';
import { BoardPage } from './_view/Main/BoardPage';

export default function App() {
    const alert = useSelector(state => state.alert);
    const dispatch = useDispatch();

    useEffect(() => {
        // history.listen((location, action) => {
        //     dispatch(alertActions.clear());
        // });
        history.listen(() => {
            dispatch(alertActions.clear());
        });
    }, []);

    return (
        <div className="w-full h-full text-xs sm:text-sm 2xl:text-base">
            {
                alert.message &&
                    <div className={`alert ${alert.type}`}>{alert.message}</div>
            }
            <Router history={history}>
                <Switch>
                    <PrivateRoute exact path="/main" component={Main} />
                    <PrivateRoute exact path="/projects" component={NewProjectPage} />
                    <PrivateRoute exact path="/addBoard" component={BoardPage} />
                    <PrivateRoute exact path="/profile-edit" component={ProfileEditPage} />
                    <PrivateRoute exact path="/projectDetail" component={ProjectDetailPage} />
                    <Route path="/" component={LandingPage} />
                    {/* <Route path="/login" component={LoginPage} />
                    <Route path="/register" component={RegisterPage} />
                    <Redirect from="*" to="/" /> */}
                </Switch>
            </Router>
        </div>
    );
}
