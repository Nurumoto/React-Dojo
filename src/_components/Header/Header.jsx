import React, { useState } from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
  } from 'reactstrap';
import './Header.css';
import logo from '../../_assets/images/LOGO_BCVbleu.png';
import user from '../../_assets/images/moncompte_bleu.png';


function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return(
        <div className="main-header w-full bg-white z-20">
            <Navbar color="#02178D py-0 flex items-center" light expand="md">
                <NavbarBrand href="/">
                    <img className="w-14 xl:w-24 2xl:w-32" src={logo} />
                </NavbarBrand>
                <Nav navbar>
                    <NavItem>
                        <img className="user-profile w-6 md:xl:w-8" src={user} />
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    )
}
export { Header };