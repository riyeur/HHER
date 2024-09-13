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
                        <a class="join-us" href="https://docs.google.com/forms/d/e/1FAIpQLScbgZTz9rkF5lBmEdCFQN8rMHGMjBrKlOwScFGoTPzYiAaqGg/viewform" target="_blank" rel="noopener noreferrer">Join Us</a>
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
            <p class="copyright">© 2024 Her Health Empowers. All rights reserved.</p>
        </footer>
    );
};

export default Footer;