import React from 'react';
import './styles.css';

const JoinUs = () => {
    return (
        <div className="about-us-join-us">
            <div className="join-us-elements">
                <h3 className="join-us-title">Join Us</h3>
                <p className="join-us-description">If you're passionate about our cause, sign up to join our organization through the form linked below.</p>
                <div className="button">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLScbgZTz9rkF5lBmEdCFQN8rMHGMjBrKlOwScFGoTPzYiAaqGg/viewform" target="_blank" rel="noopener noreferrer">
                        <button className="form-button" type="button"><b>Form</b></button>
                    </a>
                </div>
                <img className="potted-flower" src="../images/potted_flower.png" alt="Potted flower" height="350" width="auto" loading="lazy" />
            </div>
        </div>
    );
};

export default JoinUs;