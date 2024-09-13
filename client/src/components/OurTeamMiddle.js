import React, { useState } from 'react';
import './styles.css';
import teamMembers from './TeamMembersData';

const OurTeamItem = ({ iconSrc, iconAlt, personName, role, onClick }) => {
    return (
        <div className="our-team-item">
            <img src={iconSrc} alt={iconAlt} className="person-picture" height="180" width="auto" />
            <p className="person-name"><b>{personName}</b></p>
            <p className="person-role">{role}</p>
            <button onClick={onClick} className="about-button">About</button>
        </div>
    );
};

const AboutCard = ({ person, onClose }) => {
    return (
        <div className="about-card-container">
            <div className="about-card-backdrop" onClick={onClose} />
            <div className="about-card">
                <div className="close-icon" onClick={onClose}>
                    &times;
                </div>
                <div className="about-card-content">
                    <img src={person.iconSrc} alt={person.iconAlt} className="about-card-picture" height="180" width="auto" />
                    <div className="about-card-description">
                        <h2 className="person-name-card">{person.personName}</h2>
                        <p className="person-description-card">{person.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const OurTeamMiddle = () => {
    const [selectedPerson, setSelectedPerson] = useState(null);

    const handleLearnMore = (person) => {
        setSelectedPerson(person);
    };

    const handleClose = () => {
        setSelectedPerson(null);
    };

    return (
        <div className="our-team-middle">
            <div className="all-people">
                <div className="our-team-president">
                    <OurTeamItem
                        iconSrc={teamMembers[0].iconSrc}
                        iconAlt={teamMembers[0].iconAlt}
                        personName={teamMembers[0].personName}
                        role={teamMembers[0].role}
                        onClick={() => handleLearnMore(teamMembers[0])}
                    />
                </div>
                <div className="our-team-second-row">
                    {teamMembers.slice(1, 4).map((member, index) => (
                        <OurTeamItem
                            key={index}
                            iconSrc={member.iconSrc}
                            iconAlt={member.iconAlt}
                            personName={member.personName}
                            role={member.role}
                            onClick={() => handleLearnMore(member)}
                        />
                    ))}
                </div>
                <div className="our-team-third-row">
                    {teamMembers.slice(4, 7).map((member, index) => (
                        <OurTeamItem
                            key={index}
                            iconSrc={member.iconSrc}
                            iconAlt={member.iconAlt}
                            personName={member.personName}
                            role={member.role}
                            onClick={() => handleLearnMore(member)}
                        />
                    ))}
                </div>
                <div className="our-team-fourth-row">
                    {teamMembers.slice(7, 9).map((member, index) => (
                        <OurTeamItem
                            key={index}
                            iconSrc={member.iconSrc}
                            iconAlt={member.iconAlt}
                            personName={member.personName}
                            role={member.role}
                            onClick={() => handleLearnMore(member)}
                        />
                    ))}
                </div>
            </div>
            {selectedPerson && <AboutCard person={selectedPerson} onClose={handleClose} />}
        </div>
    );
};

export default OurTeamMiddle;

