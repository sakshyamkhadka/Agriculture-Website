import React from 'react';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import '../Styles/Team.css';
import { FaXTwitter } from 'react-icons/fa6';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Joshua Stefan",
      position: "Farmer",
      image: "https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171"
    },
    {
      id: 2,
      name: "Sheena Anderson",
      position: "Marketing",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=761"
    },
    {
      id: 3,
      name: "Evan Smith",
      position: "Content", 
      image: "https://images.unsplash.com/photo-1698510047345-ff32de8a3b74?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=792"
    },
    {
      id: 4,
      name: "Kaylie Jones",
      position: "Accountant",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.1.0&auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <div id="team-page" className="team-page">
      <div className="container">
        
        <div id="team-header" className="team-header text-center  "data-aos="fade-up">
          <h1 id="team-main-title" className="team-title">Team</h1>
          <p id="team-subtitle-text" className="team-subtitle fs-3 ">
            Necessitatibus eius consequatur
          </p>
        </div>

        <div id="team-members-grid" className="team-members">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-member-card">
              <div id="team-image-container" className="image-container">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  id="team-member-image" 
                  className="member-image" 
                />

                <div id="social-icons-column" className="social-icons-row">
                  <a href="#" id="facebook-icon-link" className="social-link">
                    <FaFacebook id="facebook-icon" className="social-icon" />
                  </a>
                  <a href="#" id="twitter-icon-link" className="social-link">
                    <FaXTwitter id="twitter-icon" className="social-icon" />
                  </a>
                  <a href="#" id="linkedin-icon-link" className="social-link">
                    <FaLinkedin id="linkedin-icon" className="social-icon" />
                  </a>
                </div>
              </div>

              <div id="member-info-section" className="member-info">
                <h3 id="member-name-text" className="member-name">{member.name}</h3>
                <p id="member-position-text" className="member-position text-success">{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;