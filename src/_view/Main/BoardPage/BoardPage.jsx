import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Button, Modal, ModalHeader, ModalBody, ModalFooter, Input  } from 'reactstrap';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { Header } from '../../../_components/Header';  
// import StickyNotes from "../../../_components/sticky-notes/sticky-notes";
import ReactStickyNotes from '../../../_components/react-sticky-notes';
import save from '../../../_assets/images/feather-save.png'
import download from '../../../_assets/images/AIJuvS.png'
import icon_Check from '../../../_assets/images/awesome-check.png'
import diagram from '../../../_assets/images/Group_118.png'

import './BoardPage.css';

function BoardPage() {
    
    const [activeTab, setActiveTab] = useState('1');
    const [modal, setModal] = useState(false);
    const [congrateModal, setCongrateModal] = useState(false);

    const toggle = tab => {
        if(activeTab !== tab) setActiveTab(tab);
    }

    function toggleModal(){
        setModal(!modal);
    }

    function saveCongrate() {
        setModal(!modal);
        setCongrateModal(!congrateModal);
    }

    function toggleCongrate() {
        setCongrateModal(!congrateModal);
    }

    // function projectDetail() {
    //     alert('project detail');
    // }

    return(
        <div className="board-page w-full h-full mx-auto">
            <Header></Header>
            <div className="board-container block md:flex gap-2 h-4/5 mt-10 pb-10">
                <div className="w-full md:w-3/4">
                    <Nav tabs>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: activeTab === '1' })}
                                onClick={() => { toggle('1'); }}
                            >
                                Actors role
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: activeTab === '2' })}
                                onClick={() => { toggle('2'); }}
                            >
                                Hypothesis and test strategy
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent activeTab={activeTab} className="rounded-tl-none rounded dj-d-blue">
                        <TabPane tabId="1" className="relative">
                            <div className="flex justify-between absolute w-full top-20 px-20">
                                <div className="text-xl xl:text-2xl 2xl:text-3xl">capacity</div>
                                <div className="text-xl xl:text-2xl 2xl:text-3xl">Community building</div>
                            </div>
                            <div className="flex justify-between absolute w-full bottom-20 px-20">
                                <div className="text-xl xl:text-2xl 2xl:text-3xl">Legacy</div>
                                <div className="text-xl xl:text-2xl 2xl:text-3xl">BizDev</div>
                            </div>
                            <div className="round-chart">
                                <img src={diagram} className="blue" alt="diagram" />
                            </div>
                            <div className="tab-item">
                                <ReactStickyNotes
                                    backgroundColor="#fefefe"
                                    useCSS={true}
                                    containerHeight={"400px"}
                                />
                            </div>
                        </TabPane>
                        <TabPane tabId="2">

                        </TabPane>
                        <Modal isOpen={modal} toggle={toggleModal} centered={true} backdrop={false}>
                            <ModalHeader toggle={toggleModal} className="dj-d-blue">
                                Nommer votre projet
                            </ModalHeader>
                            <ModalBody>
                                <Input className="rounded-xl" />
                            </ModalBody>
                            <ModalFooter>
                                <Button style={{backgroundColor: '#02178D'}} className="px-14"  onClick={saveCongrate}>Valider</Button>
                            </ModalFooter>
                        </Modal>
                        <Modal isOpen={congrateModal} toggle={toggleCongrate} centered={true} backdrop={false}>
                            <ModalHeader></ModalHeader>
                            <ModalBody>
                                Votre projet a été sauvegardé avec succès
                            </ModalBody>
                            <ModalFooter>
                                <img src={icon_Check} alt="success" onClick={toggleCongrate} />
                            </ModalFooter>
                        </Modal>
                    </TabContent>
                    
                </div>
                <div className="w-full md:w-1/4 md:pt-16 lg:pt-10 pt-30 gap-2">
                    <div className="grid grid-rows-4 grid-cols-12 col-span-12 grid-flow-col gap-2">
                        <div className="row-span-4 col-span-8 create-date rounded-lg p-3 ...">
                            <div className="text-2xl 2xl:text-3xl text-center dj-d-blue p-2">Sans-titre</div>
                            <div className="text-center dj-l-blue">15 / 10 / 2020 </div>
                            <div className="text-center mt-4 dj-d-blue font-medium">Modifier </div>
                        </div>
                        <div className="row-span-2 col-span-4 rounded-lg ...">
                            <Button className="btn w-full h-full dj-db-blue py-3 ">
                                <img src={save} className="m-auto" alt="save" onClick={toggleModal} />
                            </Button>
                        </div>
                        <div className="row-span-2 col-span-4 rounded-lg ...">
                            <Button className="btn w-full h-full  dj-db-blue py-3">
                                <img src={download} className="m-auto"  alt="download" />
                            </Button>
                        </div>
                    </div>
                    <div className="create-comment mt-2 rounded p-3">
                        <div className="dj-d-blue font-bold text-center text-2xl 2xl:text-3xl">
                            Comment compléter ?
                        </div>
                        <div>
                            <div className="dj-d-blue text-xl 2xl:text-2xl mt-2 ">Capacities</div>
                            <div className="dj-l-blue">
                                Les moyens accumulés pour mettre en œuvre son action et 
                                s’appuyer sur ces communautés pour bâtir.
                            </div>
                        </div>
                        <div>
                            <div className="dj-d-blue text-xl 2xl:text-2xl mt-2">
                                Legacy
                            </div>
                            <div className="dj-l-blue">
                                L’héritage, le legs qui est bâti et va persister dans le temps (y 
                                compris connaissances matérialisées, image ou nouvelles idées).
                            </div>
                        </div>
                        <div>
                            <div className="dj-d-blue text-xl 2xl:text-2xl mt-2">
                                Community Building
                            </div>
                            <div className="dj-l-blue">
                                Les communautés alignées autour d’une mission, qui en 
                                constituent le cœur et la caisse de résonance, et la capacité à 
                                fédérer de telles communautés.
                            </div>
                        </div>
                        
                        <div>
                            <div className="dj-d-blue text-xl 2xl:text-2xl mt-2">
                                BizDev
                            </div>
                            <div className="dj-l-blue">
                                Le business developement, qui permet de développer l’action 
                                et d’agréger / de financer les moyens nécessaires.
                            </div>
                        </div>
                        <div className="w-full flex justify-center p-3">
                            <div className="w-2/3 h-0.5 dj-lb-blue"></div>
                        </div>
                        <div className="grid grid-cols-1">
                            <div className="flex items-end text-xl"><div className="dj-d-blue text-xl 2xl:text-2xl">Inner Circle</div> : <div className="dj-l-blue ml-1">Stakeholder</div></div>
                            <div className="flex items-end text-xl"><div className="dj-d-blue text-xl 2xl:text-2xl">Middle Circle</div> : <div className="dj-l-blue ml-1">Benefit</div></div>
                            <div className="flex items-end text-xl"><div className="dj-d-blue text-xl 2xl:text-2xl">Outer Circle</div> : <div className="dj-l-blue ml-1">Cost</div></div>
                        </div>
                        <div className="flex mt-3 justify-center">
                            <Link to="/projectDetail">
                                <Button className="btn py-2 dj-db-blue">En savoir plus</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { BoardPage };