import React from 'react';
import './styles.css';
import Header from './Header';
import Footer from './Footer';
import JournalEntries from './JournalEntries';

const Journal = () => {
    return (
        <div>
            <Header />
            <JournalEntries />
            <Footer />
        </div>
    );
};

export default Journal;