import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Row, Col } from 'reactstrap';
import { Header } from '../../../_components/Header';
import { ProfileCard } from '../../../_components/ProfileCard';
import { AddEmptyCard } from '../../../_components/AddEmptyCard';
import { AddProject } from '../../../_components/AddProject';
import { ProjectCard } from '../../../_components/ProjectCard';
import { project } from '../../../_actions';
import './NewProjectPage.css';
import { projects } from './project';

function NewProjectPage() {
    const dispatch = useDispatch();
    const [ blur, setBlur ] = useState(false);
    const toggleBlur = () => setBlur(!blur);
    return(
        <div className="new-project">
            <Header></Header>
            <Row className="project-container">
                <Col md="3">
                    <Row className="justify-content-center profile-card-title">Mon profil</Row>
                    <ProfileCard></ProfileCard>
                </Col>
                <Col md="9">
                    <Row className="justify-content-center profile-card-title">Mon espace</Row>
                    <Row className="card-content" style={{filter: blur? 'blur(4px)' : 'none'}}>
                        {
                            projects.length==0 ? (
                                <Row className="first-project justify-content-center">
                                    <AddEmptyCard></AddEmptyCard>
                                </Row>
                            ) : (
                                <AddProject></AddProject>
                            )
                        }
                        {
                            projects.length>0 ? (
                                projects.map((project, i) => {
                                    return(
                                        <Col md="4" key={i}>
                                            <ProjectCard detail={project} toggleBlur={toggleBlur}></ProjectCard>
                                        </Col>
                                    )
                                })
                            ) : (
                                <div></div>
                            )
                        }
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export { NewProjectPage };