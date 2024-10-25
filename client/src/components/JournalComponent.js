import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import OctoberJournal from '../data/OctoberJournal.js';
/* import NovemberJournal from '../data/NovemberJournal.js'; */
import './styles.css';

const JournalPage = ({ url, alt, onClose }) => {
    return (
        <div className="journal-pages">
            <div className="journal-wrap">
                <button onClick={onClose} className="journal-close">
                    &times;
                </button>
            </div>
            <img src={url} alt={alt} className="journal-page" height="180" width="auto" />
        </div>
    );
};

const JournalPageMobile = ({ url, alt, onClose }) => {
    return (
        <div className="journal-pages-mobile">
            <img src={url} alt={alt} className="journal-page-mobile" height="600" width="auto" />
        </div>
    );
};


const JournalComponent = () => {
    
    const [selectedJournal, setSelectedJournal] = useState(null);
    const [currentJournal, setCurrentJournal] = useState(OctoberJournal);

    const handleViewJournal = (journal) => {
        setCurrentJournal(journal);
        setSelectedJournal(true);
    };

    const handleClose = () => {
        setSelectedJournal(null);
    };

    return (
        <div className="journal-component">
            <div className="journal-wrapper">
                <button className="october-journal-button" onClick={() => handleViewJournal(OctoberJournal)}>October 2024 Journal</button>
            </div>

            {selectedJournal && (
                <div className="journal-overlay">
                    <Swiper spaceBetween={50} slidesPerView={1} navigation modules={[Navigation]}>
                        {currentJournal.map((journal, index) => (
                            <SwiperSlide key={index}>
                                <JournalPage
                                    url={journal.url}
                                    alt={journal.alt}
                                    onClose={handleClose}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            )}

            {selectedJournal && (
                <div className="mobile-journal-overlay">
                    <div className="overlay">
                        {currentJournal.map((journal, index) => (
                            <JournalPageMobile
                                url={journal.url}
                                alt={journal.alt}
                                onClose={handleClose}
                            />
                        ))}
                        <div className="mobile-button-wrapper">
                            <button onClick={handleClose} className="mobile-close">
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>

    );
};

export default JournalComponent;
