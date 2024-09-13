import React from 'react';
import Header from './Header';
import Footer from './Footer';
import AboutUsMain from './AboutUsMain';
import AboutUsMiddle from './AboutUsMiddle';
import JoinUs from './JoinUs';
import './styles.css';

const AboutUs = () => {
    return (
        <div>
            <Header />
            <AboutUsMain />
            <AboutUsMiddle />
            <JoinUs />
            <Footer />
        </div>
    );
};

export default AboutUs;
