import React from 'react';
import { Header } from '../../_components/LandingPageComponents/Header';
import { Footer } from '../../_components/LandingPageComponents/Footer';
import { Banner } from '../../_components/LandingPageComponents/Banner';
import { UtilitySection } from '../../_components/LandingPageComponents/UtilitySection';
import { WitnessSection } from '../../_components/LandingPageComponents/WitnessSection';
import { ParticipantsSection } from '../../_components/LandingPageComponents/ParticipantsSection';

function LandingPage() {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <UtilitySection></UtilitySection>
            <WitnessSection></WitnessSection>
            <ParticipantsSection></ParticipantsSection>
            <Footer></Footer>
        </div>
    );
}

export { LandingPage };