import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
import { Header } from '../../../_components/Header';
import { ProfileCard } from '../../../_components/ProfileCard';
import { AddEmptyCard } from '../../../_components/AddEmptyCard';
import { AddProject } from '../../../_components/AddProject';
import { ProjectCard } from '../../../_components/ProjectCard';
import './NewProjectPage.css';
import { projects } from './project';

function NewProjectPage() {
    // const dispatch = useDispatch();
    const [ blur, setBlur ] = useState(false);
    const toggleBlur = () => setBlur(!blur);
    return(
        <div className="new-project">
            <Header></Header>
            <div className="block md:flex gap-28 px-10 sm:px-20 2xl:px-24 mt-40 pb-20">
                <div className="w-full md:w-1/3 lg:w-1/4">
                    <div className="w-full text-center profile-card-title font-bold">
                        Mon profile
                    </div>
                    <ProfileCard></ProfileCard>
                </div>
                <div className="w-full mt-20 md:mt-0 md:w-2/3 lg:w-3/4">
                    <div className="w-full text-center profile-card-title font-bold">
                        Mon espace
                    </div>
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" style={{filter: blur? 'blur(4px)' : 'none'}}>
                        {
                            projects.length===0 ? (
                                <AddEmptyCard></AddEmptyCard>
                            ) : (
                                <AddProject></AddProject>
                            )
                        }
                        {
                            projects.length>0 ? (
                                projects.map((project, i) => {
                                    return(
                                        <ProjectCard detail={project} toggleBlur={toggleBlur} key={i}></ProjectCard>
                                    )
                                })
                            ) : (
                                <div></div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export { NewProjectPage };