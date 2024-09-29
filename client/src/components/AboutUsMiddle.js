import React from 'react';
import './styles.css';

const AboutUsMiddle = () => {
    return (
        <div>
            <div className="about-us-picture-description">
                <img className="womens-health" src="../images/womens-health.png" alt="Women's health" height="380" width="auto" loading="lazy"/>
                <div className="title-and-description">
                    <h3 className="what-we-do">Our Misson</h3>
                    <p className="about-us-description">We are a student-run organization committed to raising awareness for female health through art. We aim to break societal taboos, foster open conversations and empower women to take control of their health by supporting local women's shelters.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUsMiddle;