import React from 'react';
import Header from './Header';
import Footer from './Footer';
import InfographicsMain from './InfographicsMain';
import InfographicsMiddle from './InfographicsMiddle';
import './styles.css';

const Infographics = () => {
    return (
        <div>
            <Header />
            <InfographicsMain />
            <InfographicsMiddle />
            <Footer />
        </div>
    );
};

export default Infographics;