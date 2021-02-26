import React from 'react';
import { Link } from 'react-router-dom';
import { Row } from 'reactstrap';
import userAvartar from '../../_assets/images/moncompte_bleu.png'
import './ProfileCard.css';

function ProfileCard() {
    return(
        <div className="profile-card">
            <Row className="justify-content-center client-avatar">
                <img src={ userAvartar } />
            </Row>
            <Row className="justify-content-center client-name">Client One</Row>
            <Row className="justify-content-center client-company">Company</Row>
            <Row className="text-center client-desc">
                It's very easy to create stylish and beautiful 
                prototypes for your future projects, both graphical and dynamic.
            </Row>
            <Row className="justify-content-center client-edit">
                {/* Modifier */}
                <Link to={`/profile-edit`}>Modifier</Link>
            </Row>
        </div>
    )
}

export { ProfileCard };
