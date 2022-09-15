import React from "react";
import "../../styles/team.css";

import team1 from "../../images/team-01.png";
import team2 from "../../images/team-02.png";
import team3 from "../../images/team-03.png";
import team4 from "../../images/team-04.png";

const teamMembers = [
  {
    imgUrl: team1,
    name: "John Doe",
    position: "Product Developer",
  },
  {
    imgUrl: team2,
    name: "Mary Sew",
    position: "Front-End Developer",
  },
  {
    imgUrl: team3,
    name: "Bill Geyts",
    position: "Product Designer",
  },
  {
    imgUrl: team4,
    name: "Steve Jobs",
    position: "CEO & Senior Developer",
  },
];

const Team = () => {
  return (
    <section className="our__team">
      <div className="container">
        <div className="team__content">
          <h6 className="subtitle">Our Team</h6>
          <h2>
            Meet with <span className="highlight">our team</span>
          </h2>
        </div>

        <div className="team__wrapper">
          {teamMembers.map((item, index) => (
            <div className="team__item" key={index}>
              <div className="team__img">
                <img src={item.imgUrl} alt="team" />
              </div>

              <div className="team__details">
                <h4>{item.name}</h4>
                <p className="description">{item.position}</p>

                <div className="team__member-social">
                  <span>
                    <i class="ri-linkedin-line"></i>
                  </span>
                  <span>
                    <i class="ri-twitter-line"></i>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
