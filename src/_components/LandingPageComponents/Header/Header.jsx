import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
  } from 'reactstrap';
import './Header.css';
import logo from '../../../_assets/images/LOGO_BCVblanc.png';
// import user from '../../../_assets/images/moncompte_blanc.png'

function Header(){
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return(
        <div className="landHeader z-20">
            <Navbar color="#02178D" light expand="md" className="py-0 flex justify-between items-center">
                <NavbarBrand href="/">
                    <img className="w-14 xl:w-24 2xl:w-32" src={logo} alt="" />
                </NavbarBrand>
                <NavbarToggler onClick={toggle} className="p-0 block md:hidden" />
                <Collapse isOpen={isOpen} navbar className="">
                    <Nav navbar className="flex">
                        <NavItem className="ml-0">
                            <NavLink href="#" className="inactive">Présentation</NavLink>
                        </NavItem>
                        <NavItem className="ml-0">
                            <NavLink href="#" className="inactive">Partenaires</NavLink>
                        </NavItem>
                        {/* <NavItem className="ml-0">
                            <img className="user-profile w-10 h-10" src={user} />
                        </NavItem> */}
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}

export { Header };