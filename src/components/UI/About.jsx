import React from "react";
import "../../styles/about.css";

import aboutImg from "../../images/about-us.jpg";

const chooseData = [
  {
    icon: "ri-wifi-line",
    title: "First working process",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias odio suscipit voluptatum velit. Facere, expedita praesentium.",
  },
  {
    icon: "ri-team-line",
    title: "Dedicated team",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias odio suscipit voluptatum velit. Facere, expedita praesentium.",
  },
  {
    icon: "ri-customer-service-2-line",
    title: "24/7 Hours support",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias odio suscipit voluptatum velit. Facere, expedita praesentium.",
  },
];

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="about__wrapper">
          {/* content */}
          <div className="about__content">
            <h6 className="subtitle">Why choose us</h6>
            <h2>Specialist in aviding clients on</h2>
            <h2 className="highlight">financial challenges</h2>
            <p className="description about__content-desc">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam
              nostrum nam possimus non dolores labore cupiditate voluptate
              voluptatem, magni optio consectetur corrupti laboriosam harum,
              blanditiis quod ratione recusandae nesciunt voluptatibus.
            </p>

            <div className="choose__item-wrapper">
              {chooseData.map((item, index) => (
                <div className="choose__us-item" key={index}>
                  <span className="choose__us-icon">
                    <i class={item.icon}></i>
                  </span>
                  <div>
                    <h4 className="choose__us-title">{item.title}</h4>
                    <p className="description choose__us-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* img */}
          <div className="about__img">
            <img src={aboutImg} alt="about" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
