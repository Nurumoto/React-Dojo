import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
import { useLocation, Link } from "react-router-dom";
import { profileData } from './profileData';
// import { profileActions } from '../../../_actions';
import { Dropdown } from '../../../_components/DropDown';
import './ProfilePage.css';

function ProfilePage() {
    // const dispatch = useDispatch();
    const location = useLocation();

    const [field1, setField1] = useState('');
    const [field2, setField2] = useState('');
    const [field3, setField3] = useState('');
    const [field4, setField4] = useState('');
    
    function handlechange(e) {
        if(e.fieldId === 1) {
            setField1(e.text);
        }
        else if(e.fieldId === 2) {
            setField2(e.text);
        }
        else if(e.fieldId === 3) {
            setField3(e.text);
        }
        else if(e.fieldId === 4) {
            setField4(e.text);
        }
    }
    function validate(e) {
        e.preventDefault();
        if( field1 && field2 && field3 && field4) {
            const { from } = location.state || { from: { pathname: "/projects" } };
            // dispatch(profileActions.create(field1, field2, field3, field4, from));
        }
    }
    return(
        <div className="profile-page w-full h-full min-h-screen flex items-center">
            <div className="w-full">
                <div className="w-full flex justify-center text-3xl 2xl:text-5xl dj-d-blue mt-20 2xl:mt-40">Formulaire d’arrivée</div>
                <div className="profile-field mt-10 md:mt-20 2xl:mt-32 w-full md:w-3/4">
                    {
                        profileData.map((profile, i) => {
                            return (
                                <div key={i} className="profile-item">
                                    <label className="profile-label text-lg 2xl:text-2xl dj-d-blue sm:p-1 2xl:p-3">{profile.label}</label>
                                    <div className="profile-select-group w-full block md:flex items-baseline relative rounded md:rounded-lg my-5  2xl:rounded-2xl 2xl:text-2xl sm:p-3 2xl:p-5">
                                        <div>{profile.text}</div>
                                        <Dropdown contents={profile.content} fieldId={profile.id} onHandleChange = {handlechange}></Dropdown>
                                    </div>
                                    
                                </div>
                            )
                        })
                    }
                </div>
                <div className="validate w-full flex justify-start md:justify-end mt-2 md:mt-0 mb-5">
                    {/* <button onClick={validate}>Valider mes réponses</button> */}
                    <Link to="/projects">Valider mes réponses</Link>
                </div>
            </div>
        </div>
    )
}

export { ProfilePage };