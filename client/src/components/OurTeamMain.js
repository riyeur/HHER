import React from 'react';
import './styles.css';

const OurTeamMain = () => {
    return (
        <div className="our-team-main">
            <div className="main-our-team-section">
                <div className="main-column-our-team">
                    <h5 className="our-team-text">Our Team</h5>
                    <img className="hher-girl" src="../images/hher_girl.png" alt="HHER girl" height="300" width="auto" />
                </div>
                <div className="flowers-container">
                    <div className="flower-wrapper">
                        <img className="small-flower-one" src="../images/small_flower_one.png" alt="Small flower One" height="200" width="auto" />
                    </div>
                    <div className="flower-wrapper">
                        <img className="small-flower-two" src="../images/small_flower_two.png" alt="Small flower Two" height="190" width="auto" />
                    </div>
                    <div className="flower-wrapper">
                        <img className="small-flower-three" src="../images/small_flower_three.png" alt="Small flower Three" height="190" width="auto" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurTeamMain;
