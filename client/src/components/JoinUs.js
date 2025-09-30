import React from 'react';
import './styles.css';

const JoinUs = () => {
    return (
        <div className="about-us-join-us">
            <div className="join-us-elements">
                <h3 className="join-us-title">Join Us</h3>
                <p className="join-us-description">If you're passionate about our cause, sign up to join the HHER community through the form linked below.</p>
                <div className="button">
                    <a href="https://l.instagram.com/?u=https%3A%2F%2Fdocs.google.com%2Fforms%2Fd%2Fe%2F1FAIpQLSdTZE2FuVAPygrvO30nsnSjrpFQIpFJ58q4YCF6NmHSuYFZFA%2Fviewform%3Fusp%3Dsend_form%26fbclid%3DPAZXh0bgNhZW0CMTEAAaeo6oxwXGJrGMzo9-llMyy-0bkPxHvOhgDc-MvSQw3qwzplo1FzQlPDBPT95w_aem_jTXDeOAbF5X4wVzYY63YQg&e=AT2qPJMn41HanK6Ctll5BU1h-voviWqDtiHHqL4UqOvpR2tlq8IRfU_wQTCJeTy0PYnl9CXp2WvWk8_ylpnZnbbALW4dgQVELQwrIYOzX372EnfnpzOYF5vAxw" target="_blank" rel="noopener noreferrer">
                        <button className="form-button" type="button"><b>Form</b></button>
                    </a>
                </div>
                <img className="potted-flower" src="../images/potted_flower.png" alt="Potted flower" height="350" width="auto" loading="lazy" />
            </div>
        </div>
    );
};

export default JoinUs;