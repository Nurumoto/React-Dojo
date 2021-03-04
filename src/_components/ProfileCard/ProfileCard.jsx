import React from 'react';
import { Link } from 'react-router-dom';
import userAvartar from '../../_assets/images/Intersection_2.png'
import './ProfileCard.css';

function ProfileCard() {
    return(
        <div className="profile-card p-10 md:p-5 2xl:p-10">
            <div className="w-full flex justify-center">
                <div className="w-28 2xl:w-40 h-28 2xl:h-40">
                    <img className="w-full h-full rounded-full" src={ userAvartar } />
                </div>
            </div>
            <div className="flex justify-center client-name">
                Client One
            </div>
            <div className="flex justify-center client-company">
                Company
            </div>
            <div className="w-full text-center client-desc">
                It's very easy to create stylish and beautiful 
                prototypes for your future projects, both graphical and dynamic.
            </div>
            <div className="flex justify-center client-edit">
                <Link to={`/profile-edit`}>Modifier</Link>
            </div>
        </div>
    )
}

export { ProfileCard };
