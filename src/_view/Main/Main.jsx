import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ProfilePage } from './ProfilePage';
import { alertActions } from '../../_actions';
import { Header } from '../../_components/Header';

function Main(match) {
    const dispatch = useDispatch();
    useEffect(() => {
        setTimeout(() => {
            dispatch(alertActions.clear());
          }, 3000);
    }, []);
    return (
        <div className="main-page">
            <Header></Header>
            <div className="main-container">
                <ProfilePage></ProfilePage>
            </div>
        </div>
    );
}

export { Main };