import React from 'react';
import { Section } from 'react-scroll-section';
import './ParticipantsSection.css';
import dojo from '../../../_assets/images/Logo_Dojo_bleupâle.png'
import cogito from '../../../_assets/images/Logo_cogito_bleupâle.png'
import inseec from '../../../_assets/images/logo_inseec_bleupâle.png'
import eco from '../../../_assets/images/Logo_écolecentralelyon_bleupâle.png'
import hsbc from '../../../_assets/images/Logo_HSBC_bleupâle.png'
import bouy from '../../../_assets/images/Logo_bouygues_bleupâle.png'

import vaguelettes_orange from '../../../_assets/images/vaguelettes_orange.png';
import bleu from '../../../_assets/images/bleu - 1.png';

function ParticipantsSection() {
    return(
        <Section id="participants" className="participants flex items-center w-full h-full min-h-screen relative">
            <img className="vaguelettes_orange w-28 2xl:w-56 absolute left:10 md:left-24 top-28 2xl:top-56" src={vaguelettes_orange} width="220" alt="" />
            <img className="bleu absolute w-28 2xl:w-56 -top-14 2xl:-top-28 right-14 md:right-28" src={bleu} width="220" alt="" />
            <div className="description w-full">
                <div className="title text-5xl 2xl:text-8xl font-bold  md:text-left">Nos partenaires</div>
                <div className="participants-brand mt-8 ml-0 md:ml-20 2xl:mt-16 2xl:ml-36 flex justify-center md:block">
                    <div className="block md:flex">
                        <div className="brand-item flex items-center justify-center">
                            <img src={dojo} alt="dojo" />
                        </div>
                        <div className="brand-item flex items-center justify-center">
                            <img src={cogito} alt="cogito" />
                        </div>
                        <div className="brand-item flex items-center justify-center">
                            <img src={inseec} alt="inseec" />
                        </div>
                    </div>
                    <div className="block md:flex">
                        <div className="brand-item flex items-center justify-center">
                            <img src={eco} alt="eco" />
                        </div>
                        <div className="brand-item flex items-center justify-center">
                            <img src={hsbc} alt="hsbc" />
                        </div>
                        <div className="brand-item flex items-center justify-center">
                            <img src={bouy} alt="bouy" />
                        </div>
                    </div>
                </div>
            </div>
            
        </Section>
    )
}
export { ParticipantsSection }