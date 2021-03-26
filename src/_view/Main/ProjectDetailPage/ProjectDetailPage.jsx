import React from 'react';
import {Header} from '../../../_components/Header';

import quater_circle from '../../../_assets/images/Group_125.png';
import circle from '../../../_assets/images/Group_126.png';
import blank_board from '../../../_assets/images/Rectangle_110.png';
import Ellipse_15 from '../../../_assets/images/Ellipse_15.png';
import Ellipse_16 from '../../../_assets/images/Ellipse_16.png';
import Ellipse_17 from '../../../_assets/images/Ellipse_17.png';
import './ProjectDetailPage.css';

function ProjectDetailPage() {
    return(
        <div className="project-page dj-d-blue">
            <Header></Header>
            <div className="project-detail block lg:flex mt-10 relative">
                <div className="w-full md:5/12">
                    <div className="text-4xl dj-d-blue">
                        Comment compléter ?
                    </div>
                    <div className="grid grid-cols-12 mt-8">
                        <div className="col-span-12 sm:col-span-7">
                            <div className="text-3xl">
                                Par catégorie
                            </div>
                            <div className="text-2xl mt-2">
                                Capacities
                            </div>
                            <div className="dj-l-blue mt-2">
                                Les moyens (capacity) accumulés pour mettre en œuvre 
                                son action et s’appuyer sur ces communautés pour bâtir.
                            </div>
                            <div className="text-2xl mt-5">
                                Legacy
                            </div>
                            <div className="dj-l-blue mt-2">
                                L’héritage (legacy), le legs qui est bâti et va persister dans 
                                le temps (y compris connaissances matérialisées, image ou nouvelles idées).
                            </div>
                            <div className="text-2xl mt-5">
                                Community Building
                            </div>
                            <div className="dj-l-blue mt-2">
                                Les communautés (community building) alignées autour d’une mission, 
                                qui en constituent le cœur et la caisse de résonance, 
                                et la capacité à fédérer de telles communautés.
                            </div>
                            <div className="text-2xl mt-5">
                                BizDev
                            </div>
                            <div className="dj-l-blue mt-2">
                                Le business developement (business dev), qui permet de développer 
                                l’action et d’agréger / de financer les moyens nécessaires.
                            </div>
                        </div>
                        <div className="col-span-12 sm:col-span-5 pl-5">
                            <div className="text-3xl">Par cercle</div>
                            <div className="text-2xl grid mt-2">
                                Inner Circle
                            </div>
                            <div className="dj-l-blue flex grid grid-cols-12 mt-2">
                                <div className="col-span-6">Stakeholder</div>
                                <div className="col-span-6 w-5 h-5 ml-10">
                                    <img src={Ellipse_15} className="w-full" alt="inner cirlce dot" />
                                </div>
                            </div>
                            <div className="text-2xl mt-5">
                                Middle Circle
                            </div>
                            <div className="dj-l-blue flex grid grid-cols-12 mt-2">
                                <div className="col-span-6">Benefit</div>
                                <div className="col-span-6 w-5 h-5 ml-10">
                                    <img src={Ellipse_17} className="w-full" alt="middle cirlce dot" />
                                </div>
                            </div>
                            <div className="text-2xl mt-5">
                                Outer Circle
                            </div>
                            <div className="dj-l-blue flex grid grid-cols-12 mt-2">
                                <div className="col-span-6">Cost</div>
                                <div className="col-span-6 w-5 h-5 ml-10">
                                    <img src={Ellipse_16} className="w-full" alt="outer cirlce dot" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full md:7/12 relative mt-60 md:mt-80 lg:mt-0">
                    <div className="flex justify-between absolute w-full top-8">
                        <div className="text-3xl">capacity</div>
                        <div className="text-3xl">Community building</div>
                    </div>
                    <div className="flex justify-between absolute w-full bottom-20">
                        <div className="text-3xl">Legacy</div>
                        <div className="text-3xl">BizDev</div>
                    </div>
                    <div className="round-chart">
                        <div className="blue">
                            <img src={circle} alt="diagram" className="w-full h-full absolute" />
                            <div className="chart-diagram flex relative">
                                <img src={blank_board} className="w-1/2 h-full z-10 absolute" alt="" />
                                <div className="diagram diagram-click absolute w-1/2 h-full z-10 absolute">
                                    <img src={quater_circle} className="quater-circle w-full h-full absolute z-10" alt="" />
                                    <img src={Ellipse_16} className="outer_circle absolute top-24 left-24 w-5" alt="outer cirlce dot" />
                                    <img src={Ellipse_17} className="outer_circle absolute top-40 left-40 w-5" alt="middle cirlce dot" />
                                    <img src={Ellipse_15} className="outer_circle absolute top-56 left-56 w-5" alt="inner cirlce dot" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export { ProjectDetailPage };
