import React from 'react';
import './styles.css';

const InfographicsMain = () => {
    return (
        <div className="infographics-main">
            <img className="heart-left" src="../images/flower_left.png" alt="Left heart" width="100" height="auto" />
            <div className="infographics-page">
                <h5 className="infographics-text">Infographics</h5>
                <p className="infographics-tagline">Browse our infographics to learn about essential topics in women's health.</p>
            </div>
            <img className="heart-right" src="../images/flower_right.png" alt="Right heart" width="100" height="auto" />
        </div>
    );
};

export default InfographicsMain;

