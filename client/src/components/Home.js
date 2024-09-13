import React from 'react';
import './styles.css';

const Home = () => {
    return (
        <div className="home">
            <div className="main-text-home">
                <img class="her-health" src="../images/her_health_empowers.png" alt="hher" height="450" width="auto" />
                <div className="her-health-phone-styling">
                    <img className="her-health-phone" src="../images/her_health_empowers_phone.png" alt="hher phone" height="165" width="auto" />
                </div>
                <div class="main-line-phone"><p>Dedicated to supporting <b>women's health</b> through <b>art</b></p></div>
                <div className="main-line-sparkle">
                    <img class="sparkle-one" src="../images/dark_sparkle.png" alt="sparkle_one" height="30" width="auto" />
                    <div class="main-line"><p>Dedicated to supporting <b>women's health</b> through <b>art</b></p></div>
                    <img class="sparkle-two" src="../images/dark_sparkle_two.png" alt="sparkle_two" height="30" width="auto" />
                </div>
            </div>
            <img class="line-one" src="../images/design_one.png" alt="line_one" height="500" width="auto" />
            <img class="line-two" src="../images/design_two.png" alt="line_two" height="500" width="auto" />
            <div className="art">
                <img class="private" src="../images/private.png" alt="private" height="180" width="auto" />
                <img class="paint" src="../images/paint.png" alt="paint" height="140" width="auto" />
                <img class="microscope" src="../images/microscope.png" alt="microscope" height="180" width="auto" />
                <img class="heart" src="../images/heart.png" alt="heart" height="170" width="auto" />
            </div>
        </div>
    );
};

export default Home;