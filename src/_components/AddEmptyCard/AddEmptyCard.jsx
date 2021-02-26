import React from 'react';
import { Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import plusbutton from '../../_assets/images/nouveau_project - 1.png';
import './AddEmptyCard.css';

function AddEmptyCard() {
    return(
        <div className="add-empty-card">
            <Row className="add-project-title justify-content-center">
                Créer mon premier projet
            </Row>
            <Row className="plus-button justify-content-center">
                <Link to={`/addBoard`}>
                    <img src={plusbutton} alt="add" />
                </Link>
            </Row>
        </div>
    )
}
export {AddEmptyCard};