import React from 'react';
import { Link } from 'react-router-dom';
import { Col } from 'reactstrap';
import plusbutton from '../../_assets/images/nouveau_project - 1.png';
import './AddProject.css';


function AddProject() {
    return(
        <Col md="4" className="add-project">
            <Link to={`/addBoard`}>
                <img src={plusbutton} alt="add" />
            </Link>
        </Col>
    )
}

export {AddProject};