import React from 'react';
import './styles.css';

const JournalEntries = () => {
    return (
        <div className="journal-entries">
            <div className="background-div">
                <div className="journal-title">
                    <h1 className="coming-soon">Journal</h1>
                    <div className="book-wrap">
                        <img className="journal-book" src="../images/journal-book.png" alt="Book" width="200" height="auto" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JournalEntries;