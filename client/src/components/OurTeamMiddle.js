import './styles.css';
import teamMembers from './TeamMembersData';

const OurTeamItem = ({ iconSrc, iconAlt, personName, position, role }) => {
    return (
        <div className="our-team-item">
            <img src={iconSrc} alt={iconAlt} className="person-picture" height="180" width="auto" loading="lazy" />
            <p className="person-name"><b>{personName}</b></p>
            <p className="person-position">{position}</p>
            <p className="person-role">{role}</p>
        </div>
    );
};

const OurTeamMiddle = () => {
    return (
        <div className="our-team-middle">
            <div className="all-people">
                <div className="our-team-president">
                    {teamMembers.slice(0, 2).map((member, index) => (
                        <OurTeamItem
                            key={index}
                            iconSrc={member.iconSrc}
                            iconAlt={member.iconAlt}
                            personName={member.personName}
                            position={member.position}
                            role={member.role}
                        />
                    ))}
                </div>
                <div className="our-team-second-row">
                    {teamMembers.slice(2, 5).map((member, index) => (
                        <OurTeamItem
                            key={index}
                            iconSrc={member.iconSrc}
                            iconAlt={member.iconAlt}
                            personName={member.personName}
                            position={member.position}
                            role={member.role}
                        />
                    ))}
                </div>
                <div className="our-team-third-row">
                    {teamMembers.slice(5, 8).map((member, index) => (
                        <OurTeamItem
                            key={index}
                            iconSrc={member.iconSrc}
                            iconAlt={member.iconAlt}
                            personName={member.personName}
                            position={member.position}
                            role={member.role}
                        />
                    ))}
                </div>
                <div className="our-team-fourth-row">
                    {teamMembers.slice(8, 11).map((member, index) => (
                        <OurTeamItem
                            key={index}
                            iconSrc={member.iconSrc}
                            iconAlt={member.iconAlt}
                            personName={member.personName}
                            position={member.position}
                            role={member.role}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OurTeamMiddle;

