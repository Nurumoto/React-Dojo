import React from 'react';
import { Link } from 'react-router-dom';
import plusbutton from '../../_assets/images/nouveau_project - 1.png';
import './AddProject.css';


function AddProject() {
    return(
        <div className="add-project">
            <Link to={`/addBoard`}>
                {/* <img src={plusbutton} alt="add" /> */}
                <div className="w-28 2xl:w-40 h-28 2xl:h-40">
                    <img className="w-full h-full rounded-full" src={ plusbutton } alt="add" />
                </div>
            </Link>
        </div>
    )
}

export {AddProject};