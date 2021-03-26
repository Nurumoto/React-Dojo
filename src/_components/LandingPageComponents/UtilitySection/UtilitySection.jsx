import React from 'react';
import {
    useScrollSection,
    Section,
  } from 'react-scroll-section';
import './UtilitySection.css';

import downArrow from '../../../_assets/images/DOJO-2.png';
import orange_bis from '../../../_assets/images/orange_bis - 1.png';
import vaguelette_bleu from '../../../_assets/images/vaguelette_bleu.png';
import setting from '../../../_assets/images/download (1).png';
import question from '../../../_assets/images/download.png';
import light from '../../../_assets/images/moncompte_blanc.png';

function UtilitySection() {
    const witnessSection = useScrollSection('witness');
    return(
        <Section id="utility" className="utility w-full h-full min-h-screen relative flex items-center">
            <img src={ downArrow } className="w-6 h-6 2xl:w-10 2xl:h-10 absolute bottom-20 hidden md:block left-1/3 cursor-pointer" alt="" onClick={witnessSection.onClick} selected={witnessSection.selected} />
            <img className="vaguelette_bleu w-28 2xl:w-56 absolute -top-7 2xl:-top-14 left-0" src={vaguelette_bleu} alt=""/>
            <img className="orange_bis bis-1 w-28 2xl:w-52 absolute top-28 2xl:top-60 right-28 md:right-96" src={orange_bis} alt="" />
            <img className="orange_bis bis-2 w-28 2xl:w-52 absolute right-0 bottom-32" src={orange_bis} alt="" />
            <div className="description w-full lg:w-3/6 z-10">
                <div className="title text-5xl 2xl:text-8xl">Utilité</div>
                <div className="utility-desc text-xs">
                    <div className="utility-desc-item flex">
                        <img src={question} className="w-10 2xl:w-20" />
                        <div className="ml-3 sm:ml-5 max-w-md leading-6 2xl:leading-7">
                            {/* <div> */}
                                Comment passer d’une idée à un projet ? Comment 
                            {/* </div>
                            <div> */}
                                je peux vérifier mes intuitions sans devoir 
                            {/* </div>
                            <div> */}
                                hypothéquer ma maison ?
                            {/* </div> */}
                        </div>
                    </div>
                    <div className="utility-desc-item">
                        <img src={setting} className="w-10 2xl:w-20" />
                        <div className="ml-3 sm:ml-5 max-w-lg leading-6 2xl:leading-7">
                                En France, nous sommes les champions du projet 
                            
                                papier : on préfère passer des mois à peaufiner un 
                            
                                plan avant d’aller le confronter au terrain. Le résultat ? 
                            
                                Beaucoup de temps ou d’argent perdu…
                        </div>
                    </div>
                    <div className="utility-desc-item">
                        <img src={light} className="w-10 2xl:w-20" />
                        <div className="ml-3 sm:ml-5 max-w-md leading-6 2xl:leading-7">
                                Ce qu’il faut, c’est impliquer le plus tôt possible
                           
                                les parties prenantes d’un projet pour tester leur
                            
                                implication.
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}
export { UtilitySection }