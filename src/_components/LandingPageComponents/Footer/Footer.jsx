import React from 'react';
import { Button, Input } from 'reactstrap';
import logo from '../../../_assets/images/LOGO_BCVbleu.png'
import './Footer.css';

function Footer() {
    return(
        <div className="land-footer grid grid-cols-10">
            <div className="col-span-10 xl:col-span-10 2xl:col-span-2">
                <img className="logo" src={logo} width="60" alt="" />
            </div>
            <div className="col-span-10 xl:col-span-5 2xl:col-span-4 grid grid-cols-4">
                <div className="land-footer-item col-span-4 sm:col-span-2 mt-2">
                    <div className="land-footer-title font-bold">
                        Navigation
                    </div>
                    <div>
                        Présentation entreprise
                    </div>
                    <div>
                        Présentation de l’application
                    </div>
                    <div>
                        Partenaires
                    </div>
                </div>
                <div className="land-footer-item col-span-4 sm:col-span-2 mt-2">
                    <div className="land-footer-title font-bold">
                        Contacts
                    </div>
                    <div>
                        BeyondCustomerValidation
                    </div>
                    <div>
                        c/o Cogito Strategy
                    </div>
                    <div>
                        21 Rue Vendôme
                    </div>
                    <div>
                        69006 Lyon
                    </div>
                </div>
            </div>
            <div className="col-span-10 xl:col-span-5 2xl:col-span-4 grid grid-cols-4">
                <div className="land-footer-item col-span-4 sm:col-span-2 mt-2">
                    <div className="land-footer-title font-bold">
                        Contacts
                    </div>
                    <div>
                        contact@beyondcustomervalidation.com
                    </div>
                </div>
                <div className=" col-span-4 sm:col-span-2 mt-2">
                    <div className="land-footer-title font-bold">
                        Newsletter
                    </div>
                    <div className="newsletter w-full gap-2">
                        <Input className="w-3/4 border border-blue-900 p-3 rounded" type="email" name="email" id="email" placeholder="Adresse mail" />
                        <Button className="w-1/4 border bg-blue-900 py-3 px-6 text-white rounded" color="primary">OK</Button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export { Footer }