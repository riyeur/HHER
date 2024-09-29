import React from 'react';
import './styles.css';

const WhoWeAreItem = ({ iconSrc, iconAlt, title, description }) => {
    return (
        <div className="who-we-are-item">
            <img src={iconSrc} alt={iconAlt} className="icon" height="120" width="auto" loading="lazy"/>
            <p className="title">{title}</p>
            <p className="description">{description}</p>
        </div>
    );
};

const WhoWeAre = () => {
    return (
        <div className="who-we-are">
            <div className="center">
                <div className="who-title">
                    <h5>Who We Are</h5>
                </div>
            </div>
            <div className="icons-container">
                <WhoWeAreItem
                    iconSrc="../images/icon_three.png"
                    iconAlt="icon-three"
                    title="Student-led organization"
                    description="We are an organization based in Calgary that raises money for women's shelters."
                />
                <WhoWeAreItem
                    iconSrc="../images/icon_four.png"
                    iconAlt="icon-four"
                    title="Raising awareness"
                    description="We raise awareness of women's health through educational art."
                />
                <WhoWeAreItem
                    iconSrc="../images/icon_two.png"
                    iconAlt="icon-two"
                    title="Infographics and journal"
                    description="We make infographics and publish artwork in our monthly journal."
                />
            </div>
            <div className="sparkles-container">
                <img className="who-sparkle-one" src="../images/dark_sparkle.png" alt="who_sparkle_one" height="70" width="auto" />
                <img className="who-sparkle-two" src="../images/dark_sparkle.png" alt="who_sparkle_two" height="30" width="auto" />
                <img className="who-sparkle-three" src="../images/dark_sparkle.png" alt="who_sparkle_three" height="70" width="auto" />
                <img className="who-sparkle-four" src="../images/dark_sparkle.png" alt="who_sparkle_four" height="30" width="auto" />
            </div>
        </div>
    );
};

export default WhoWeAre;
