import React from 'react';
import './styles.css';
import Header from './Header';
import Footer from './Footer';
import OurTeamMain from './OurTeamMain';
import OurTeamMiddle from './OurTeamMiddle';

const OurTeam = () => {
    return (
        <div>
            <Header />
            <OurTeamMain />
            <OurTeamMiddle />
            <Footer />
        </div>
    );
};

export default OurTeam;