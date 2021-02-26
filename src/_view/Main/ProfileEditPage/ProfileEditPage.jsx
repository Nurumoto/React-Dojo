import React from 'react';
import { Header } from '../../../_components/Header';
import './ProfileEditPage.css';
import avatar from '../../../_assets/images/Intersection_2.png';

function ProfileEditPage() {
    return(
        <div className="profile-edit-page w-full h-full relative">
            <Header></Header>
            <div className="edit-profile grid grid-cols-12 w-full h-full flex items-center justify-center dj-d-blue">
                <div className="col-span-2"></div>
                <div className="justify-content-center col-span-4">
                    <img src={avatar} style={{width: '360px', borderRadius: '10px'}} alt="Profile" />
                </div>
                <div className="col-span-1"></div>
                <div className="col-span-3">
                    <div className="profile-title text-3xl">
                        Client One
                    </div>
                    <div className="user-company">
                        Company
                    </div>
                    <div className="profile-desc">
                        It’s very easy to create stylish and beautiful prototypes for 
                        your future projects, both graphical and dynamic.
                    </div>
                    <div className=""></div>
                </div>
                <div className="col-span-2"></div>
            </div>
        </div>
    )
}

export {ProfileEditPage};