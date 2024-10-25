import React from 'react';
import './styles.css';
import Header from './Header';
import Footer from './Footer';
import JournalEntries from './JournalEntries';
import JournalComponent from './JournalComponent';

const Journal = () => {
    return (
        <div>
            <Header />
            <JournalEntries />
            <JournalComponent />
            <Footer />
        </div>
    );
};

export default Journal;