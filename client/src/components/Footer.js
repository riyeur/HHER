import React from 'react';
import './styles.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="all-information">
                <div className="information">
                    <div className="full-address">
                        <p className="footer-name">Her Health Empowers</p>
                        <p className="university">University of Calgary</p>
                        <p className="address">2500 University Dr NW</p>
                        <p className="city">Calgary, AB</p>
                    </div>
                </div>
                <div className="information-two">
                    <div className="all-links">
                        <p className="links">Helpful Links</p>
                        <a class="linktree" href="https://linktr.ee/herhealthempowers" target="_blank" rel="noopener noreferrer">Linktree</a>
                        <a class="join-us" href="https://l.instagram.com/?u=https%3A%2F%2Fdocs.google.com%2Fforms%2Fd%2Fe%2F1FAIpQLSdTZE2FuVAPygrvO30nsnSjrpFQIpFJ58q4YCF6NmHSuYFZFA%2Fviewform%3Fusp%3Dsend_form%26fbclid%3DPAZXh0bgNhZW0CMTEAAaeo6oxwXGJrGMzo9-llMyy-0bkPxHvOhgDc-MvSQw3qwzplo1FzQlPDBPT95w_aem_jTXDeOAbF5X4wVzYY63YQg&e=AT2qPJMn41HanK6Ctll5BU1h-voviWqDtiHHqL4UqOvpR2tlq8IRfU_wQTCJeTy0PYnl9CXp2WvWk8_ylpnZnbbALW4dgQVELQwrIYOzX372EnfnpzOYF5vAxw" target="_blank" rel="noopener noreferrer">Join Us</a>
                        <a class="infographics" href="https://drive.google.com/drive/folders/1Xjx-J0Iynqi64gpIjAuxnZ-zYCeGVINj" target="_blank" rel="noopener noreferrer">Infographics</a>
                    </div>
                </div>
                <div className="information-three">
                    <div className="social-media">
                        <p className="contact-us">Social Media</p>
                        <a class="instagram" href="https://www.instagram.com/herhealthempowers" target="_blank" rel="noopener noreferrer">Instagram</a>
                    </div>
                </div>
            </div>
            <p class="copyright">© 2025 Her Health Empowers. All rights reserved.</p>
        </footer>
    );
};

export default Footer;