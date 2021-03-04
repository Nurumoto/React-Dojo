import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import poubelle from '../../_assets/images/poubelle.png';
import profile_blank from '../../_assets/images/Slider Image.png';
import './ProjectCard.css';

function ProjectCard(props) {
    const {
        className
    } = props;
    const [modal, setModal] = useState(false);

    function toggle(){
        setModal(!modal);
        props.toggleBlur();
    }
    return(
        <div className="project-card">
            <div className="project-img">
                <img src={profile_blank} className="w-full h-full" alt="profile image" />
            </div>
            <div className="w-full flex justify-center project-name">
                {props.detail.projectName}
            </div>
            <div className="w-full flex justify-center project-desc">
                {props.detail.projectDesc}
            </div>
            <div className="project-delete">
                <img src={poubelle} alt="delete" onClick={toggle} />
            </div>
            <Modal isOpen={modal} toggle={toggle} className={className} centered={true} backdrop={false}>
                <ModalHeader toggle={toggle}>
                    <img src={poubelle} alt="delete" style={{width: '35px'}} />
                </ModalHeader>
                <ModalBody>
                    Êtes vous sur de vouloir supprimer ?
                </ModalBody>
                <ModalFooter>
                    <Button style={{backgroundColor: '#02178D'}} onClick={toggle}>Supprimer</Button>{' '}
                    <Button style={{backgroundColor: '#02178D'}}  onClick={toggle}>Annuler</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export {ProjectCard};