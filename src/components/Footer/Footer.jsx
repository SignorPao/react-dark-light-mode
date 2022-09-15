import React from "react";
import "./footer.css";

const quickLinks1 = [
  {
    path: "#!",
    display: "Marketing",
  },
  {
    path: "#!",
    display: "Analytics",
  },
  {
    path: "#!",
    display: "Commerce",
  },
];

const quickLinks2 = [
  {
    path: "#!",
    display: "Pricing",
  },
  {
    path: "#!",
    display: "Documentation",
  },
  {
    path: "#!",
    display: "Guides",
  },
];

const quickLinks3 = [
  {
    path: "#about",
    display: "About",
  },
  {
    path: "#!",
    display: "Job",
  },
  {
    path: "#blog",
    display: "Blog",
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          {/* logo */}
          <div className="footer__logo">
            <a href="#">
              <h2>Digency</h2>
            </a>
            <p className="description footer__desc">Grow whit us</p>

            {/* description */}
            <p className="small__text description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
              ut consectetur ratione minima autem sint quasi necessitatibus,
              ducimus suscipit alias!
            </p>
          </div>

          {/* lists */}
          <div className="footer__lists">
            {/* list1 */}
            <div className="footer__quick-links">
              <h3 className="quick__links-title">Solution</h3>
              <ul className="quick__links">
                {quickLinks1.map((item, index) => (
                  <li className="quick__links-item" key={index}>
                    <a href={item.path}>{item.display}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* list2 */}
            <div className="footer__quick-links">
              <h3 className="quick__links-title">Support</h3>
              <ul className="quick__links">
                {quickLinks2.map((item, index) => (
                  <li className="quick__links-item" key={index}>
                    <a href={item.path}>{item.display}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* list3 */}
            <div className="footer__quick-links">
              <h3 className="quick__links-title">Company</h3>
              <ul className="quick__links">
                {quickLinks3.map((item, index) => (
                  <li className="quick__links-item" key={index}>
                    <a href={item.path}>{item.display}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* copyrights */}
        <p className="copyright">
          &copy; Copyright {year}. Created by{" "}
          <a
            href="https://github.com/SignorPao"
            target="_blank"
            rel="noopener noreferrer"
            className="me"
          >
            @signorPao
          </a>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
