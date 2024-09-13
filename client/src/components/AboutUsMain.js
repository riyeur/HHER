import React from 'react';
import './styles.css';

const AboutUsMain = () => {
    return (
        <div className="about-us">
            <img className="flower-left" src="../images/flower_two.png" alt="Left flower" width="95" height="auto" />
            <div className="text-container">
                <h5 className="about-us-text">About Us</h5>
                <p className="about-us-tagline">Our goal is to shed light on health issues faced by women around the world.</p>
            </div>
            <img className="flower-right" src="../images/flower.png" alt="Right flower" width="95" height="auto" />
        </div>
    );
};

export default AboutUsMain;
