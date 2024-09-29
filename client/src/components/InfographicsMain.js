import React from 'react';
import './styles.css';

const InfographicsMain = () => {
    return (
        <div className="infographics-main">
            <div className="flowers-top">
                <img className="side-flower-left-top" src="../images/side_flower_three.png" alt="Side Flower Left Top" width="200" height="auto" />
                <img className="side-flower-right-top" src="../images/side_flower_two.png" alt="Side Flower Right Top" width="200" height="auto" />
            </div>
            <div className="infographics-page">
                <h5 className="infographics-text">Infographics</h5>
                <p className="infographics-tagline">Browse our infographics to learn about essential topics in women's health.</p>
            </div>
            <div className="flowers-bottom">
                <img className="side-flower-left-bottom" src="../images/side_flower_four.png" alt="Side Flower Left Bottom" width="200" height="auto" />
                <img className="side-flower-right-bottom" src="../images/side_flower_one.png" alt="Side Flower Right Bottom" width="200" height="auto" />
            </div>
        </div>
    );
};

export default InfographicsMain;

