import React from 'react';
import Header from './Header';
import Home from './Home';
import WhoWeAre from './WhoWeAre';
import PastEvents from './OurPastEvents';
import Footer from './Footer';

const Homepage = () => {
    return (
        <div>
            <Header />
            <Home />
            <WhoWeAre />
            <PastEvents />
            <Footer />
        </div>
    );
};

export default Homepage;